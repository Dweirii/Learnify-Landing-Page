import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { jobSchema } from '@/lib/validations'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const job = await prisma.job.findUnique({
      where: {
        id: params.id
      },
      select: {
        id: true,
        title: true,
        description: true,
        requirements: true,
        location: true,
        type: true,
        salaryMin: true,
        salaryMax: true,
        currency: true,
        experience: true,
        department: true,
        isRemote: true,
        benefits: true,
        skills: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            applications: true
          }
        }
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

    return NextResponse.json({
      success: true,
      data: job
    })
  } catch (error) {
    console.error('Error fetching job:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch job'
      },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const validatedData = jobSchema.parse(body)

    const job = await prisma.job.update({
      where: {
        id: params.id
      },
      data: validatedData
    })

    return NextResponse.json({
      success: true,
      data: job
    })
  } catch (error) {
    console.error('Error updating job:', error)
    
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
        error: 'Failed to update job'
      },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.job.delete({
      where: {
        id: params.id
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Job deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting job:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete job'
      },
      { status: 500 }
    )
  }
}
