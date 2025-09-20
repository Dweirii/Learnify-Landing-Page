"use client"

import React, { useState, useEffect } from 'react'
import { fetchJobs, type Job } from '@/lib/api'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, Briefcase, ExternalLink } from 'lucide-react'

const jobTypeLabels = {
  FULL_TIME: 'Full Time',
  PART_TIME: 'Part Time',
  CONTRACT: 'Contract',
  INTERNSHIP: 'Internship',
  FREELANCE: 'Freelance'
}

const jobTypeColors = {
  FULL_TIME: 'bg-green-500/20 text-green-400 border-green-500/30',
  PART_TIME: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  CONTRACT: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  INTERNSHIP: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  FREELANCE: 'bg-pink-500/20 text-pink-400 border-pink-500/30'
}

export default function JobsListExample() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true)
        const response = await fetchJobs({
          page: 1,
          limit: 10
        })
        
        if (response.success && response.data) {
          setJobs(response.data)
        } else {
          setError(response.error || 'Failed to load jobs')
        }
      } catch (err) {
        setError('Failed to load jobs')
      } finally {
        setLoading(false)
      }
    }

    loadJobs()
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white mb-4">Available Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="bg-white/5 border-white/10 p-6 animate-pulse">
              <div className="h-4 bg-white/20 rounded mb-4"></div>
              <div className="h-3 bg-white/20 rounded mb-2"></div>
              <div className="h-3 bg-white/20 rounded mb-4"></div>
              <div className="h-6 bg-white/20 rounded"></div>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-white mb-4">Available Jobs</h2>
        <p className="text-red-400 mb-4">{error}</p>
        <Button 
          onClick={() => window.location.reload()}
          className="bg-[#0BA94C] hover:bg-[#0BA94C]/90"
        >
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Available Jobs</h2>
        <p className="text-[#ABAEB6]">
          Join our team and help build the future of education
        </p>
      </div>

      {jobs.length === 0 ? (
        <Card className="bg-white/5 border-white/10 p-8 text-center">
          <Briefcase className="w-16 h-16 text-[#ABAEB6] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            No Open Positions
          </h3>
          <p className="text-[#ABAEB6] mb-6">
            We're not currently hiring, but we'd love to hear from you!
          </p>
          <Button 
            asChild
            className="bg-[#0BA94C] hover:bg-[#0BA94C]/90"
          >
            <a href="mailto:careers@learnify.com">
              Send Us Your Resume
            </a>
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-[#0BA94C] transition-colors">
                  {job.title}
                </h3>
                <Badge className={`${jobTypeColors[job.type]} border`}>
                  {jobTypeLabels[job.type]}
                </Badge>
              </div>

              <p className="text-[#ABAEB6] text-sm mb-4 line-clamp-3 flex-grow">
                {job.description}
              </p>

              <div className="space-y-2 mb-4">
                {job.location && (
                  <div className="flex items-center text-sm text-[#ABAEB6]">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                )}
                <div className="flex items-center text-sm text-[#ABAEB6]">
                  <Clock className="w-4 h-4 mr-2" />
                  Posted {new Date(job.createdAt).toLocaleDateString()}
                </div>
                {job.salaryMin && job.salaryMax && (
                  <div className="text-sm text-[#0BA94C] font-medium">
                    ${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()} {job.currency}
                  </div>
                )}
              </div>

              <div className="mt-auto">
                <Button 
                  asChild
                  className="w-full bg-[#0BA94C] hover:bg-[#0BA94C]/90 group"
                >
                  <a href={`/jobs/${job.id}`}>
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
