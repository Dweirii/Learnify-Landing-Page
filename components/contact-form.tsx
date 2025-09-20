"use client"

import React, { useState } from 'react'
import { submitContactForm } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

interface ContactFormProps {
  className?: string
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      setIsSubmitting(true)
      setSubmitStatus('idle')

      const response = await submitContactForm({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        company: formData.company || undefined,
        phone: formData.phone || undefined,
      })

      if (response.success) {
        setSubmitStatus('success')
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll get back to you as soon as possible.",
        })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          company: "",
          phone: "",
        })
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 3000)
      } else {
        setSubmitStatus('error')
        toast({
          title: "Error",
          description: response.error || "Failed to send message. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-[#ABAEB6] mb-6">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
        <Button 
          onClick={() => setSubmitStatus('idle')}
          variant="outline"
          className="border-white/20 text-white hover:bg-white/10"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#ABAEB6] focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:border-transparent"
            placeholder="Enter your full name"
          />
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
      </div>

      <div>
        <label htmlFor="subject" className="block text-white font-medium mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#ABAEB6] focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:border-transparent"
          placeholder="What's this about?"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-white font-medium mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#ABAEB6] focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:border-transparent"
            placeholder="Your company name"
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
            placeholder="Your phone number"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-white font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#ABAEB6] focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:border-transparent resize-none"
          placeholder="Tell us how we can help you..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
