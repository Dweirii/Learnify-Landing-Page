"use client"

import type React from "react"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
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
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    userType: "user" as "user" | "streamer",
    skills: [] as string[]
  })
  const [errors, setErrors] = useState({ name: "", email: "", userType: "", skills: "" })
  const [submitError, setSubmitError] = useState<string | null>(null)
  const { toast } = useToast()

  const availableSkills = [
    // ⚙️ Tech & Development
    "Web Development",
    "Mobile App Development",
    "Frontend Engineering",
    "Backend Engineering",
    "AI & Machine Learning",
    "Data Science & Analytics",
    "Cybersecurity",
    "Cloud & DevOps",
  
    // 🎨 Creative & Design
    "UI/UX Design",
    "Graphic Design",
    "3D Design & Animation",
    "Video Editing & Motion Graphics",
    "Photography & Cinematography",
  
    // 📱 Content & Media
    "Content Creation",
    "Social Media Strategy",
    "Digital Marketing & SEO",
    "Public Speaking & Presentation",
    "Podcasting",
  
    // 💼 Business & Innovation
    "Entrepreneurship & Startups",
    "Product Management",
    "Finance & Investing",
    "Personal Branding",
    "Marketing Strategy & Growth Hacking",
  
    // 🧠 Study & Lifestyle
    "Study With Me Sessions",
    "Productivity & Time Management",
    "Note-Taking & Learning Techniques",
    "Career Development",
    "Language Learning",
    "Mindfulness & Focus",
    "Life Coaching & Motivation",
  
    // 🎵 Art & Creativity
    "Music Production & Audio Engineering",
    "Art & Illustration",
    "Creative Writing",
  
    // 🧩 Other
    "STEM Education",
    "Soft Skills & Communication",
    "Other"
  ]
  

  const validateForm = () => {
    const newErrors = { name: "", email: "", userType: "", skills: "" }
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

    if (!formData.userType) {
      newErrors.userType = "Please select how you'd like to join"
      isValid = false
    }

    if (formData.userType === "streamer" && formData.skills.length === 0) {
      newErrors.skills = "Please select at least one skill you'd like to stream"
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
          name: formData.name,
          userType: formData.userType,
          skills: formData.userType === "streamer" ? formData.skills : [],
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
          description: result.message || `You've successfully joined our community as a ${formData.userType}!`,
        })
        setFormData({ name: "", email: "", userType: "user", skills: [] })
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

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }))
    if (errors.skills) {
      setErrors((prev) => ({ ...prev, skills: "" }))
    }
  }

  const isFormValid = formData.name.length >= 2 && 
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.userType &&
    (formData.userType === "user" || formData.skills.length > 0)

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

            <div className="space-y-4">
              <Label className="text-white text-sm font-medium">
                How would you like to join Learnify?
              </Label>
              <RadioGroup
                value={formData.userType}
                onValueChange={(value) => handleInputChange("userType", value)}
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center space-x-3 p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-200">
                  <RadioGroupItem value="user" id="user" className="text-[#0BA94C]" />
                  <Label htmlFor="user" className="flex-1 cursor-pointer">
                    <div className="font-medium text-white">Join as Learner</div>
                    <div className="text-sm text-[#ABAEB6]">Access live sessions, projects, and community features</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-200">
                  <RadioGroupItem value="streamer" id="streamer" className="text-[#0BA94C]" />
                  <Label htmlFor="streamer" className="flex-1 cursor-pointer">
                    <div className="font-medium text-white">Join as Streamer</div>
                    <div className="text-sm text-[#ABAEB6]">Share your expertise and teach others through live streaming</div>
                  </Label>
                </div>
              </RadioGroup>
              {errors.userType && (
                <p className="text-red-400 text-sm" role="alert">
                  {errors.userType}
                </p>
              )}
            </div>

            {formData.userType === "streamer" && (
              <div className="space-y-4">
                <Label className="text-white text-sm font-medium">
                  What skills would you like to stream? (Select all that apply)
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto">
                  {availableSkills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <Checkbox
                        id={skill}
                        checked={formData.skills.includes(skill)}
                        onCheckedChange={() => handleSkillToggle(skill)}
                        className="text-[#0BA94C] border-white/20"
                      />
                      <Label htmlFor={skill} className="text-sm text-[#ABAEB6] cursor-pointer hover:text-white transition-colors duration-200">
                        {skill}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.skills && (
                  <p className="text-red-400 text-sm" role="alert">
                    {errors.skills}
                  </p>
                )}
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-12 bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-semibold text-base transition-colors duration-200 focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-transparent"
              disabled={isSubmitting || !isFormValid}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {formData.userType === "streamer" ? "Joining as Streamer..." : "Joining..."}
                </>
              ) : (
                formData.userType === "streamer" ? "Join as Streamer" : "Join as Learner"
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
