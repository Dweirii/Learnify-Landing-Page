import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { applicationStatusSchema } from '@/lib/validations'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const application = await prisma.jobApplication.findUnique({
      where: {
        id: params.id
      },
      include: {
        job: {
          select: {
            title: true,
            type: true,
            department: true,
            description: true
          }
        }
      }
    })

    if (!application) {
      return NextResponse.json(
        {
          success: false,
          error: 'Application not found'
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: application
    })
  } catch (error) {
    console.error('Error fetching application:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch application'
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
    const validatedData = applicationStatusSchema.parse(body)

    const application = await prisma.jobApplication.update({
      where: {
        id: params.id
      },
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
      data: application
    })
  } catch (error) {
    console.error('Error updating application:', error)
    
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
        error: 'Failed to update application'
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
    await prisma.jobApplication.delete({
      where: {
        id: params.id
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Application deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting application:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete application'
      },
      { status: 500 }
    )
  }
}
