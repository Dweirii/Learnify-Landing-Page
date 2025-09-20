import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { newsletterSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = newsletterSchema.parse(body)

    // Check if email already exists
    const existingSubscription = await prisma.newsletterSubscription.findUnique({
      where: {
        email: validatedData.email
      }
    })

    if (existingSubscription) {
      if (existingSubscription.isActive) {
        return NextResponse.json(
          {
            success: false,
            error: 'Email is already subscribed'
          },
          { status: 400 }
        )
      } else {
        // Reactivate subscription
        const subscription = await prisma.newsletterSubscription.update({
          where: {
            email: validatedData.email
          },
          data: {
            isActive: true,
            source: validatedData.source
          }
        })

        return NextResponse.json({
          success: true,
          data: subscription,
          message: 'Subscription reactivated successfully'
        })
      }
    }

    const subscription = await prisma.newsletterSubscription.create({
      data: validatedData
    })

    return NextResponse.json({
      success: true,
      data: subscription,
      message: 'Successfully subscribed to newsletter'
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating newsletter subscription:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: error.message
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to subscribe to newsletter'
      },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email is required'
        },
        { status: 400 }
      )
    }

    const subscription = await prisma.newsletterSubscription.findUnique({
      where: {
        email
      }
    })

    if (!subscription) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email not found in subscriptions'
        },
        { status: 404 }
      )
    }

    await prisma.newsletterSubscription.update({
      where: {
        email
      },
      data: {
        isActive: false
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Successfully unsubscribed from newsletter'
    })
  } catch (error) {
    console.error('Error unsubscribing from newsletter:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to unsubscribe from newsletter'
      },
      { status: 500 }
    )
  }
}
