import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { jobSchema } from '@/lib/validations'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const location = searchParams.get('location')
    const department = searchParams.get('department')
    const isRemote = searchParams.get('remote')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = (page - 1) * limit

    // Build where clause
    const where: any = {
      status: 'ACTIVE'
    }

    if (type) {
      where.type = type
    }

    if (location) {
      where.OR = [
        { location: { contains: location, mode: 'insensitive' } },
        { isRemote: true }
      ]
    }

    if (department) {
      where.department = { contains: department, mode: 'insensitive' }
    }

    if (isRemote === 'true') {
      where.isRemote = true
    }

    const [jobs, total] = await Promise.all([
      prisma.job.findMany({
        where,
        orderBy: {
          createdAt: 'desc'
        },
        skip: offset,
        take: limit,
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
      }),
      prisma.job.count({ where })
    ])

    return NextResponse.json({
      success: true,
      data: jobs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch jobs'
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = jobSchema.parse(body)

    const job = await prisma.job.create({
      data: validatedData
    })

    return NextResponse.json({
      success: true,
      data: job
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating job:', error)
    
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
        error: 'Failed to create job'
      },
      { status: 500 }
    )
  }
}
