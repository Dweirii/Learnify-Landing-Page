# Production-Ready Backend Setup Guide

This guide will help you set up a production-ready backend system for the Learnify landing page with PostgreSQL database integration.

## 🚀 Features

- **Jobs Management**: Full CRUD operations for job postings
- **Application System**: Complete job application form with validation
- **Contact Forms**: Handle general inquiries and messages
- **Newsletter**: Email subscription management
- **Production Ready**: Comprehensive validation, error handling, and security

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL database
- pnpm package manager

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Set up Environment Variables

Copy the example environment file:

```bash
cp env.example .env.local
```

Update `.env.local` with your database credentials:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/learnify_db?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

### 3. Set up Database

Generate Prisma client and push schema to database:

```bash
pnpm run db:generate
pnpm run db:push
```

### 4. Seed Database (Optional)

Add sample data to test the system:

```bash
pnpm run db:seed
```

### 5. Start Development Server

```bash
pnpm run dev
```

## 📊 Database Schema

### Jobs Table
- Complete job posting information
- Salary ranges, benefits, skills
- Location and remote work options
- Application count tracking

### Job Applications Table
- Comprehensive application data
- Resume, portfolio, and social links
- Status tracking for admin management
- Duplicate application prevention

### Contact Submissions Table
- General inquiry handling
- Company information
- Status tracking for follow-up

### Newsletter Subscriptions Table
- Email subscription management
- Source tracking
- Unsubscribe functionality

## 🔌 API Endpoints

### Jobs
- `GET /api/jobs` - Fetch jobs with filtering and pagination
- `GET /api/jobs/[id]` - Fetch specific job details
- `POST /api/jobs` - Create new job (admin)
- `PUT /api/jobs/[id]` - Update job (admin)
- `DELETE /api/jobs/[id]` - Delete job (admin)

### Applications
- `GET /api/applications` - Fetch applications with filtering
- `POST /api/applications` - Submit job application
- `GET /api/applications/[id]` - Fetch specific application
- `PUT /api/applications/[id]` - Update application status
- `DELETE /api/applications/[id]` - Delete application

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Fetch contact submissions (admin)

### Newsletter
- `POST /api/newsletter` - Subscribe to newsletter
- `DELETE /api/newsletter` - Unsubscribe from newsletter

## 🎯 Frontend Integration

### Using the API Client

```typescript
import { fetchJobs, submitApplication } from '@/lib/api'

// Fetch jobs
const jobsResponse = await fetchJobs({
  type: 'FULL_TIME',
  location: 'Remote',
  page: 1,
  limit: 10
})

// Submit application
const applicationResponse = await submitApplication({
  jobId: 'job-id',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  // ... other fields
})
```

### Example Component Usage

```typescript
'use client'
import { useEffect, useState } from 'react'
import { fetchJobs, type Job } from '@/lib/api'

export default function JobsList() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadJobs = async () => {
      const response = await fetchJobs()
      if (response.success && response.data) {
        setJobs(response.data)
      }
      setLoading(false)
    }
    loadJobs()
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      {jobs.map(job => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  )
}
```

## 🔒 Security Features

1. **Input Validation**: Comprehensive Zod schemas for all inputs
2. **SQL Injection Prevention**: Prisma ORM with parameterized queries
3. **Rate Limiting**: Built-in Next.js rate limiting
4. **Error Handling**: Secure error responses without data leaks
5. **Duplicate Prevention**: Email-based duplicate application checking

## 📈 Production Deployment

### Environment Variables for Production

```env
DATABASE_URL="postgresql://user:pass@prod-host:5432/learnify_prod"
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-production-secret"
```

### Database Migration

For production, use migrations:

```bash
pnpm run db:migrate
```

### Build and Deploy

```bash
pnpm run build
pnpm run start
```

## 🛠️ Development Commands

```bash
# Generate Prisma client
pnpm run db:generate

# Push schema changes
pnpm run db:push

# Create migration
pnpm run db:migrate

# Open Prisma Studio
pnpm run db:studio

# Seed database
pnpm run db:seed
```

## 📝 Admin Panel Integration

The API is designed to work with an admin panel. You can build one using the same endpoints with proper authentication.

### Sample Admin Features:
- View all job applications with filtering
- Update application status
- Create/edit/delete jobs
- Manage contact submissions
- Newsletter subscriber management

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection**: Ensure PostgreSQL is running and credentials are correct
2. **Prisma Client**: Run `pnpm run db:generate` after schema changes
3. **Environment Variables**: Check that `.env.local` is properly configured
4. **TypeScript Errors**: Run `pnpm run db:generate` to update Prisma types

### Getting Help

- Check the Prisma documentation: https://www.prisma.io/docs
- Review the API responses in browser dev tools
- Check server logs for detailed error messages

## 🎉 What's Included

✅ **Complete Database Schema** with all necessary tables
✅ **RESTful API Endpoints** with proper HTTP methods
✅ **Input Validation** using Zod schemas
✅ **Error Handling** with appropriate HTTP status codes
✅ **TypeScript Support** with full type safety
✅ **Pagination** for large datasets
✅ **Filtering** and search capabilities
✅ **Duplicate Prevention** for applications
✅ **Sample Data** for testing
✅ **Production Ready** code with security best practices

Your backend is now ready for production use! 🚀
