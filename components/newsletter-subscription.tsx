"use client"

import React, { useState } from 'react'
import { subscribeToNewsletter } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

interface NewsletterSubscriptionProps {
  className?: string
  source?: string
}

export default function NewsletterSubscription({ 
  className = "",
  source = "Website"
}: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'already-subscribed'>('idle')
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) return

    try {
      setIsSubmitting(true)
      setSubmitStatus('idle')

      const response = await subscribeToNewsletter({
        email,
        source
      })

      if (response.success) {
        if (response.message?.includes('already subscribed')) {
          setSubmitStatus('already-subscribed')
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter.",
          })
        } else {
          setSubmitStatus('success')
          toast({
            title: "Subscribed!",
            description: "You're now subscribed to our newsletter.",
          })
        }
        setEmail("")
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 3000)
      } else {
        setSubmitStatus('error')
        toast({
          title: "Error",
          description: response.error || "Failed to subscribe. Please try again.",
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
      <div className={`text-center py-4 ${className}`}>
        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-1">Subscribed!</h3>
        <p className="text-[#ABAEB6] text-sm">
          You're now subscribed to our newsletter.
        </p>
      </div>
    )
  }

  if (submitStatus === 'already-subscribed') {
    return (
      <div className={`text-center py-4 ${className}`}>
        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-1">Already Subscribed</h3>
        <p className="text-[#ABAEB6] text-sm">
          This email is already subscribed to our newsletter.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {submitStatus === 'error' && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">Failed to subscribe. Please try again.</p>
        </div>
      )}

      <div>
        <label htmlFor="newsletter-email" className="block text-white font-medium mb-2">
          Email Address
        </label>
        <div className="flex gap-2">
          <input
            type="email"
            id="newsletter-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#ABAEB6] focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:border-transparent"
            placeholder="Enter your email address"
          />
          <Button
            type="submit"
            disabled={isSubmitting || !email}
            className="bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '...' : 'Subscribe'}
          </Button>
        </div>
      </div>

      <p className="text-[#ABAEB6] text-xs">
        By subscribing, you agree to receive updates about Learnify. You can unsubscribe at any time.
      </p>
    </form>
  )
}
