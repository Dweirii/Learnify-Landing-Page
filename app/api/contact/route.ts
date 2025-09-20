import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { contactFormSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)

    const submission = await prisma.contactSubmission.create({
      data: validatedData
    })

    return NextResponse.json({
      success: true,
      data: submission,
      message: 'Message sent successfully'
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating contact submission:', error)
    
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
        error: 'Failed to send message'
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = (page - 1) * limit

    const where: any = {}
    if (status) {
      where.status = status
    }

    const [submissions, total] = await Promise.all([
      prisma.contactSubmission.findMany({
        where,
        orderBy: {
          createdAt: 'desc'
        },
        skip: offset,
        take: limit
      }),
      prisma.contactSubmission.count({ where })
    ])

    return NextResponse.json({
      success: true,
      data: submissions,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching contact submissions:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch submissions'
      },
      { status: 500 }
    )
  }
}
