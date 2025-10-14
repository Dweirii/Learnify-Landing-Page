import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { jobApplicationSchema } from '@/lib/validations'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const jobId = searchParams.get('jobId')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = (page - 1) * limit

    // Build where clause
    const where: any = {}

    if (status) {
      where.status = status
    }

    if (jobId) {
      where.jobId = jobId
    }

    const [applications, total] = await Promise.all([
      prisma.jobApplication.findMany({
        where,
        include: {
          job: {
            select: {
              title: true,
              type: true,
              department: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        },
        skip: offset,
        take: limit
      }),
      prisma.jobApplication.count({ where })
    ])

    return NextResponse.json({
      success: true,
      data: applications,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching applications:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch applications'
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = jobApplicationSchema.parse(body)

    // Check if job exists and is active
    const job = await prisma.job.findUnique({
      where: {
        id: validatedData.jobId
      }
    })

    if (!job) {
      return NextResponse.json(
        {
          success: false,
          error: 'Job not found'
        },
        { status: 404 }
      )
    }

    if (job.status !== 'ACTIVE') {
      return NextResponse.json(
        {
          success: false,
          error: 'This job is no longer accepting applications'
        },
        { status: 400 }
      )
    }

    // Check for duplicate application
    const existingApplication = await prisma.jobApplication.findUnique({
      where: {
        jobId_email: {
          jobId: validatedData.jobId,
          email: validatedData.email
        }
      }
    })

    if (existingApplication) {
      return NextResponse.json(
        {
          success: false,
          error: 'You have already applied for this position'
        },
        { status: 400 }
      )
    }

    const application = await prisma.jobApplication.create({
      data: validatedData,
      include: {
        job: {
          select: {
            title: true,
            type: true,
            department: true
          }
        }
      }
    })

    return NextResponse.json({
      success: true,
      data: application,
      message: 'Application submitted successfully'
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating application:', error)
    
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
        error: 'Failed to submit application'
      },
      { status: 500 }
    )
  }
}
