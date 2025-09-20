const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || ''

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
  pagination?: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

export interface Job {
  id: string
  title: string
  description: string
  requirements: string[]
  location?: string
  type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP' | 'FREELANCE'
  status: 'ACTIVE' | 'INACTIVE' | 'CLOSED' | 'DRAFT'
  salaryMin?: number
  salaryMax?: number
  currency: string
  experience?: string
  department?: string
  isRemote: boolean
  benefits: string[]
  skills: string[]
  createdAt: string
  updatedAt: string
  _count?: {
    applications: number
  }
}

export interface JobApplication {
  id: string
  jobId: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  resume?: string
  coverLetter?: string
  experience?: string
  portfolio?: string
  linkedin?: string
  github?: string
  website?: string
  status: 'PENDING' | 'REVIEWED' | 'SHORTLISTED' | 'INTERVIEWED' | 'ACCEPTED' | 'REJECTED' | 'WITHDRAWN'
  notes?: string
  createdAt: string
  updatedAt: string
  job?: {
    title: string
    type: string
    department?: string
  }
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  subject: string
  message: string
  company?: string
  phone?: string
  status: 'NEW' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED'
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface NewsletterSubscription {
  id: string
  email: string
  isActive: boolean
  source?: string
  createdAt: string
  updatedAt: string
}

// Jobs API
export async function fetchJobs(params?: {
  type?: string
  location?: string
  department?: string
  remote?: boolean
  page?: number
  limit?: number
}): Promise<ApiResponse<Job[]>> {
  try {
    const searchParams = new URLSearchParams()
    if (params?.type) searchParams.set('type', params.type)
    if (params?.location) searchParams.set('location', params.location)
    if (params?.department) searchParams.set('department', params.department)
    if (params?.remote !== undefined) searchParams.set('remote', params.remote.toString())
    if (params?.page) searchParams.set('page', params.page.toString())
    if (params?.limit) searchParams.set('limit', params.limit.toString())

    const response = await fetch(`${API_BASE_URL}/api/jobs?${searchParams.toString()}`)
    return await response.json()
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch jobs'
    }
  }
}

export async function fetchJob(id: string): Promise<ApiResponse<Job>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/jobs/${id}`)
    return await response.json()
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch job'
    }
  }
}

// Applications API
export async function submitApplication(data: Omit<JobApplication, 'id' | 'status' | 'createdAt' | 'updatedAt' | 'notes'>): Promise<ApiResponse<JobApplication>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  } catch (error) {
    return {
      success: false,
      error: 'Failed to submit application'
    }
  }
}

export async function fetchApplications(params?: {
  status?: string
  jobId?: string
  page?: number
  limit?: number
}): Promise<ApiResponse<JobApplication[]>> {
  try {
    const searchParams = new URLSearchParams()
    if (params?.status) searchParams.set('status', params.status)
    if (params?.jobId) searchParams.set('jobId', params.jobId)
    if (params?.page) searchParams.set('page', params.page.toString())
    if (params?.limit) searchParams.set('limit', params.limit.toString())

    const response = await fetch(`${API_BASE_URL}/api/applications?${searchParams.toString()}`)
    return await response.json()
  } catch (error) {
    return {
      success: false,
      error: 'Failed to fetch applications'
    }
  }
}

// Contact API
export async function submitContactForm(data: Omit<ContactSubmission, 'id' | 'status' | 'notes' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<ContactSubmission>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  } catch (error) {
    return {
      success: false,
      error: 'Failed to send message'
    }
  }
}

// Newsletter API
export async function subscribeToNewsletter(data: Omit<NewsletterSubscription, 'id' | 'isActive' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<NewsletterSubscription>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  } catch (error) {
    return {
      success: false,
      error: 'Failed to subscribe to newsletter'
    }
  }
}

export async function unsubscribeFromNewsletter(email: string): Promise<ApiResponse<{ message: string }>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/newsletter?email=${encodeURIComponent(email)}`, {
      method: 'DELETE',
    })
    return await response.json()
  } catch (error) {
    return {
      success: false,
      error: 'Failed to unsubscribe from newsletter'
    }
  }
}
