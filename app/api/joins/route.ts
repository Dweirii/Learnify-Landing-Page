import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { newsletterSchema } from "@/lib/validations"

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
            source: validatedData.source || 'Home Page CTA',
            name: validatedData.name,
            userType: validatedData.userType === 'streamer' ? 'STREAMER' : 'USER',
            skills: validatedData.skills || []
          }
        })

        return NextResponse.json({
          success: true,
          data: subscription,
          message: 'Welcome back to Learnify!'
        })
      }
    }

    const subscription = await prisma.newsletterSubscription.create({
      data: {
        ...validatedData,
        source: validatedData.source || 'Home Page CTA',
        userType: validatedData.userType === 'streamer' ? 'STREAMER' : 'USER',
        skills: validatedData.skills || []
      }
    })

    return NextResponse.json({
      success: true,
      data: subscription,
      message: 'Successfully joined Learnify!'
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating subscription:', error)
    
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
        error: 'Failed to join Learnify'
      },
      { status: 500 }
    )
  }
}
