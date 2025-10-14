import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const jobId = searchParams.get('jobId')

    // Get application statistics
    const stats = await prisma.jobApplication.groupBy({
      by: ['status'],
      _count: {
        status: true
      },
      where: jobId ? { jobId } : undefined
    })

    // Get total applications
    const totalApplications = await prisma.jobApplication.count({
      where: jobId ? { jobId } : undefined
    })

    // Get applications by job (if no specific jobId)
    const applicationsByJob = jobId ? null : await prisma.jobApplication.groupBy({
      by: ['jobId'],
      _count: {
        jobId: true
      },
      _max: {
        appliedAt: true
      },
      orderBy: {
        _count: {
          jobId: 'desc'
        }
      },
      take: 10
    })

    // Get job details for the applications by job
    const jobDetails = applicationsByJob ? await prisma.job.findMany({
      where: {
        id: {
          in: applicationsByJob.map(app => app.jobId)
        }
      },
      select: {
        id: true,
        title: true,
        department: true,
        type: true
      }
    }) : []

    // Combine job details with application counts
    const applicationsWithJobDetails = applicationsByJob ? applicationsByJob.map(app => {
      const job = jobDetails.find(j => j.id === app.jobId)
      return {
        jobId: app.jobId,
        jobTitle: job?.title || 'Unknown Job',
        department: job?.department,
        type: job?.type,
        applicationCount: app._count.jobId,
        lastApplication: app._max.appliedAt
      }
    }) : []

    return NextResponse.json({
      success: true,
      data: {
        totalApplications,
        statusBreakdown: stats.reduce((acc, stat) => {
          acc[stat.status] = stat._count.status
          return acc
        }, {} as Record<string, number>),
        applicationsByJob: applicationsWithJobDetails
      }
    })
  } catch (error) {
    console.error('Error fetching application stats:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch application statistics'
      },
      { status: 500 }
    )
  }
}
