"use client"

import type React from "react"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

interface CtaJoinProps {
  title?: string
  subtitle?: string
  actionHref?: string
  className?: string
}

export default function CtaJoin({
  subtitle = "Be part of the future of learning.",
  actionHref,
  className,
}: CtaJoinProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [errors, setErrors] = useState({ name: "", email: "" })
  const [submitError, setSubmitError] = useState<string | null>(null)
  const { toast } = useToast()

  const validateForm = () => {
    const newErrors = { name: "", email: "" }
    let isValid = true

    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters"
      isValid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    if (actionHref) {
      window.location.href = actionHref
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch("/api/joins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          source: "Home Page CTA"
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to join. Please try again.")
      }

      if (result.success) {
        toast({
          title: "Welcome to Learnify!",
          description: result.message || "You've successfully joined our community.",
        })
        setFormData({ name: "", email: "" })
      } else {
        throw new Error(result.error || "Failed to join. Please try again.")
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again."
      setSubmitError(errorMessage)
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const isFormValid = formData.name.length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)

  return (
    <section className={cn("bg-transparent", className)} id="join">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your <span className="text-[#0BA94C]">Learnify</span> Journey Today</h2>
          <p className="text-lg text-[#ABAEB6]">{subtitle}</p>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-sm shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitError && (
              <div
                className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                role="alert"
                aria-live="polite"
              >
                {submitError}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name" className="text-white text-sm font-medium">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-[#ABAEB6] focus:border-[#0BA94C] focus:ring-[#0BA94C] focus:ring-2 focus:ring-offset-0"
                disabled={isSubmitting}
                required
              />
              {errors.name && (
                <p className="text-red-400 text-sm" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email address"
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-[#ABAEB6] focus:border-[#0BA94C] focus:ring-[#0BA94C] focus:ring-2 focus:ring-offset-0"
                disabled={isSubmitting}
                required
              />
              {errors.email && (
                <p className="text-red-400 text-sm" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-semibold text-base transition-colors duration-200 focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-transparent"
              disabled={isSubmitting || !isFormValid}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Joining...
                </>
              ) : (
                "Join Us"
              )}
            </Button>

            <div className="text-center space-y-2">
              <p className="text-xs text-[#ABAEB6]">By joining, you agree to our Terms & Privacy.</p>
              <p className="text-sm text-[#ABAEB6] flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-[#0BA94C] rounded-full animate-pulse"></span>
                500+ learners joined on launch day
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
