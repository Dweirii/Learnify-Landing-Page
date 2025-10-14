import { z } from 'zod'

// Job Application Validation
export const jobApplicationSchema = z.object({
  jobId: z.string().min(1, 'Job ID is required'),
  firstName: z.string().min(2, 'First name must be at least 2 characters').max(50, 'First name must be less than 50 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters').max(50, 'Last name must be less than 50 characters'),
  email: z.string().email('Invalid email address').max(100, 'Email must be less than 100 characters'),
  phone: z.string().optional().refine((val) => !val || /^[\+]?[0-9\s\-\(\)]{7,20}$/.test(val), 'Invalid phone number'),
  resume: z.string().optional().refine((val) => !val || z.string().url().safeParse(val).success, 'Invalid resume URL'),
  coverLetter: z.string().max(2000, 'Cover letter must be less than 2000 characters').optional(),
  experience: z.string().max(1000, 'Experience must be less than 1000 characters').optional(),
  portfolio: z.string().optional().refine((val) => !val || z.string().url().safeParse(val).success, 'Invalid portfolio URL'),
  linkedin: z.string().optional().refine((val) => !val || z.string().url().safeParse(val).success, 'Invalid LinkedIn URL'),
  github: z.string().optional().refine((val) => !val || z.string().url().safeParse(val).success, 'Invalid GitHub URL'),
  website: z.string().optional().refine((val) => !val || z.string().url().safeParse(val).success, 'Invalid website URL'),
})

// Contact Form Validation
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Invalid email address').max(100, 'Email must be less than 100 characters'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200, 'Subject must be less than 200 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message must be less than 2000 characters'),
  company: z.string().max(100, 'Company name must be less than 100 characters').optional(),
  phone: z.string().optional().refine((val) => !val || /^[\+]?[0-9\s\-\(\)]{7,20}$/.test(val), 'Invalid phone number'),
})

// Newsletter Subscription Validation
export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address').max(100, 'Email must be less than 100 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters').optional(),
  userType: z.enum(['user', 'streamer']).optional().default('user'),
  skills: z.array(z.string()).optional().default([]),
  source: z.string().max(100, 'Source must be less than 100 characters').optional(),
})

// Job Creation/Update Validation (for admin)
export const jobSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters').max(5000, 'Description must be less than 5000 characters'),
  requirements: z.array(z.string().min(1, 'Requirement cannot be empty')).min(1, 'At least one requirement is needed').max(20, 'Maximum 20 requirements allowed'),
  location: z.string().max(100, 'Location must be less than 100 characters').optional(),
  type: z.enum(['FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP', 'FREELANCE']),
  status: z.enum(['ACTIVE', 'INACTIVE', 'CLOSED', 'DRAFT']).default('ACTIVE'),
  salaryMin: z.number().int().min(0, 'Salary must be positive').optional(),
  salaryMax: z.number().int().min(0, 'Salary must be positive').optional(),
  currency: z.string().length(3, 'Currency must be 3 characters').default('USD'),
  experience: z.string().max(100, 'Experience must be less than 100 characters').optional(),
  department: z.string().max(100, 'Department must be less than 100 characters').optional(),
  isRemote: z.boolean().default(false),
  benefits: z.array(z.string().min(1, 'Benefit cannot be empty')).max(20, 'Maximum 20 benefits allowed').default([]),
  skills: z.array(z.string().min(1, 'Skill cannot be empty')).max(30, 'Maximum 30 skills allowed').default([]),
})

// Application Status Update Validation
export const applicationStatusSchema = z.object({
  status: z.enum(['PENDING', 'REVIEWED', 'SHORTLISTED', 'INTERVIEWED', 'ACCEPTED', 'REJECTED', 'WITHDRAWN']),
  notes: z.string().max(1000, 'Notes must be less than 1000 characters').optional(),
})

// Type exports
export type JobApplicationInput = z.infer<typeof jobApplicationSchema>
export type ContactFormInput = z.infer<typeof contactFormSchema>
export type NewsletterInput = z.infer<typeof newsletterSchema>
export type JobInput = z.infer<typeof jobSchema>
export type ApplicationStatusInput = z.infer<typeof applicationStatusSchema>
