"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { XMarkIcon, BriefcaseIcon, ClockIcon, UserGroupIcon, MapPinIcon } from "@heroicons/react/24/outline"
import { fetchJobs, submitApplication, type Job } from "@/lib/api"
import { useToast } from "@/hooks/use-toast"

interface Role extends Job {
  // Job interface already has all the fields we need
}

const getTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case "internship":
      return "bg-blue-500/10 text-blue-400 border-blue-500/30"
    case "contract":
      return "bg-purple-500/10 text-purple-400 border-purple-500/30"
    case "part_time":
      return "bg-orange-500/10 text-orange-400 border-orange-500/30"
    case "full_time":
      return "bg-green-500/10 text-green-400 border-green-500/30"
    case "freelance":
      return "bg-pink-500/10 text-pink-400 border-pink-500/30"
    default:
      return "bg-[#0BA94C]/10 text-[#0BA94C] border-[#0BA94C]/30"
  }
}

const getTypeLabel = (type: string) => {
  switch (type) {
    case "FULL_TIME":
      return "Full Time"
    case "PART_TIME":
      return "Part Time"
    case "CONTRACT":
      return "Contract"
    case "INTERNSHIP":
      return "Internship"
    case "FREELANCE":
      return "Freelance"
    default:
      return type
  }
}

export default function OpenRoles() {
  const [roles, setRoles] = useState<Role[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedRole, setSelectedRole] = useState<Role | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
    experience: "",
    portfolio: "",
    linkedin: "",
    github: "",
    website: "",
  })
  const { toast } = useToast()

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true)
        const response = await fetchJobs({
          page: 1,
          limit: 20
        })
        
        if (response.success && response.data) {
          setRoles(response.data)
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

  const handleApply = (role: Role) => {
    setSelectedRole(role)
    setSubmitStatus('idle')
  }

  const handleCloseModal = () => {
    setSelectedRole(null)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      resume: "",
      coverLetter: "",
      experience: "",
      portfolio: "",
      linkedin: "",
      github: "",
      website: "",
    })
    setSubmitStatus('idle')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedRole) return

    try {
      setIsSubmitting(true)
      setSubmitStatus('idle')

      const response = await submitApplication({
        jobId: selectedRole.id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || undefined,
        resume: formData.resume || undefined,
        coverLetter: formData.coverLetter || undefined,
        experience: formData.experience || undefined,
        portfolio: formData.portfolio || undefined,
        linkedin: formData.linkedin || undefined,
        github: formData.github || undefined,
        website: formData.website || undefined,
      })

      if (response.success) {
        setSubmitStatus('success')
        toast({
          title: "Application Submitted!",
          description: "Thank you for your interest. We'll review your application and get back to you soon.",
        })
        setTimeout(() => {
          handleCloseModal()
        }, 2000)
      } else {
        setSubmitStatus('error')
        toast({
          title: "Error",
          description: response.error || "Failed to submit application. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section id="roles" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Open Roles</h2>
            <p className="text-[#ABAEB6] text-lg max-w-2xl mx-auto">
              Join our mission to revolutionize education in the MENA region. We're looking for passionate individuals
              ready to make an impact.
            </p>
          </div>

          {loading ? (
            <div className="grid gap-6 md:grid-cols-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 animate-pulse">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 bg-white/20 rounded-lg"></div>
                    <div className="flex-1">
                      <div className="h-6 bg-white/20 rounded mb-2"></div>
                      <div className="h-4 bg-white/20 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="h-4 bg-white/20 rounded mb-2"></div>
                  <div className="h-4 bg-white/20 rounded mb-4"></div>
                  <div className="h-10 bg-white/20 rounded"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-12">
              <div className="max-w-md mx-auto">
                <div className="p-4 bg-red-500/10 rounded-2xl border border-red-500/20 w-fit mx-auto mb-6">
                  <BriefcaseIcon className="w-12 h-12 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Error Loading Jobs</h3>
                <p className="text-[#ABAEB6] text-lg mb-8 leading-relaxed">
                  {error}
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : roles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {roles.map((role) => (
                <div
                  key={role.id}
                  className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:from-white/10 hover:to-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0BA94C]/5"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-[#0BA94C]/10 rounded-lg border border-[#0BA94C]/20">
                          <BriefcaseIcon className="w-5 h-5 text-[#0BA94C]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#0BA94C] transition-colors duration-300">
                            {role.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium border rounded-full ${getTypeColor(role.type)}`}
                            >
                              <ClockIcon className="w-3 h-3" />
                              {getTypeLabel(role.type)}
                            </span>
                            {role.location && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-[#ABAEB6] border border-white/10 rounded-full">
                                <MapPinIcon className="w-3 h-3" />
                                {role.location}
                              </span>
                            )}
                            {role.isRemote && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-[#0BA94C] border border-[#0BA94C]/30 rounded-full">
                                <UserGroupIcon className="w-3 h-3" />
                                Remote
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-[#ABAEB6] leading-relaxed mb-4 text-sm line-clamp-3">{role.description}</p>

                      {role.salaryMin && role.salaryMax && (
                        <div className="mb-4">
                          <span className="text-[#0BA94C] font-semibold text-sm">
                            ${role.salaryMin.toLocaleString()} - ${role.salaryMax.toLocaleString()} {role.currency}
                          </span>
                        </div>
                      )}

                      {role.requirements && role.requirements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2 text-sm">Key Requirements:</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {role.requirements.slice(0, 3).map((req, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-[#ABAEB6] hover:bg-white/10 transition-colors duration-200"
                              >
                                {req}
                              </span>
                            ))}
                            {role.requirements.length > 3 && (
                              <span className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-[#ABAEB6]">
                                +{role.requirements.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={() => handleApply(role)}
                        className="w-full bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] hover:shadow-lg hover:shadow-[#0BA94C]/25 hover:scale-105 active:scale-95"
                        aria-label={`Apply for ${role.title}`}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-12">
              <div className="max-w-md mx-auto">
                <div className="p-4 bg-[#0BA94C]/10 rounded-2xl border border-[#0BA94C]/20 w-fit mx-auto mb-6">
                  <BriefcaseIcon className="w-12 h-12 text-[#0BA94C]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No Open Positions</h3>
                <p className="text-[#ABAEB6] text-lg mb-8 leading-relaxed">
                  We are always looking for passionate learners, creators, and builders. Share your interest with us and
                  we'll reach out when the right opportunity arises!
                </p>
                <a
                  href="mailto:team@learnify.com?subject=Interest in Joining Learnify"
                  className="inline-block bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] hover:shadow-lg hover:shadow-[#0BA94C]/25 hover:scale-105 active:scale-95"
                  aria-label="Express interest in joining Learnify"
                >
                  Express Interest
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {selectedRole && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-[#061A15] border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Apply for {selectedRole.title}</h3>
                  <p className="text-[#ABAEB6]">Join our team and make an impact</p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="text-[#ABAEB6] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] rounded-xl p-2 hover:bg-white/5"
                  aria-label="Close application form"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Application Submitted!</h3>
                  <p className="text-[#ABAEB6] mb-6">
                    Thank you for your interest in the {selectedRole.title} position. We'll review your application and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-red-400 text-sm">Failed to submit application. Please try again.</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-white font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#ABAEB6] focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-white font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#ABAEB6] focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#ABAEB6] focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#ABAEB6] focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-white font-medium mb-2">
                      Resume/CV Link
                    </label>
                    <input
                      type="url"
                      id="resume"
                      name="resume"
                      value={formData.resume}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#ABAEB6] focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:border-transparent"
                      placeholder="https://drive.google.com/... or LinkedIn profile"
                    />
                  </div>

                  <div>
                    <label htmlFor="portfolio" className="block text-white font-medium mb-2">
                      Portfolio URL
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#ABAEB6] focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:border-transparent"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-white font-medium mb-2">
                      Experience
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#ABAEB6] focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:border-transparent resize-none"
                      placeholder="Tell us about your relevant experience..."
                    />
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-white font-medium mb-2">
                      Why are you interested in this role?
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#ABAEB6] focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:border-transparent resize-none"
                      placeholder="Tell us about your interest in this role and what you can bring to the team..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="flex-1 px-6 py-3 border border-white/20 text-[#ABAEB6] hover:text-white hover:border-white/40 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
