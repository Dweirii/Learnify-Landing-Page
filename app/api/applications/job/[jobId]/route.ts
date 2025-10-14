import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const jobId = searchParams.get('jobId')
    const status = searchParams.get('status')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = (page - 1) * limit

    if (!jobId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Job ID is required'
        },
        { status: 400 }
      )
    }

    // Build where clause
    const where: any = { jobId }
    if (status) {
      where.status = status
    }

    const [applications, total] = await Promise.all([
      prisma.jobApplication.findMany({
        where,
        include: {
          job: {
            select: {
              title: true,
              department: true,
              type: true
            }
          }
        },
        orderBy: {
          appliedAt: 'desc'
        },
        skip: offset,
        take: limit
      }),
      prisma.jobApplication.count({ where })
    ])

    // Get job details
    const job = await prisma.job.findUnique({
      where: { id: jobId },
      select: {
        title: true,
        department: true,
        type: true,
        status: true,
        postedAt: true
      }
    })

    return NextResponse.json({
      success: true,
      data: {
        job,
        applications,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    })
  } catch (error) {
    console.error('Error fetching job applications:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch job applications'
      },
      { status: 500 }
    )
  }
}
