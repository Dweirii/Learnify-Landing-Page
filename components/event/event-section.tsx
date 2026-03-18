"use client"

import type React from "react"
import { useState } from "react"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import {
  Radio,
  Users,
  MessageCircle,
  Gift,
  Award,
  Zap,
  Sparkles,
  Calendar,
  ChevronRight,
  Check,
  Copy,
  Share2,
  Loader2,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import EventCountdown from "./event-countdown"

const STREAMER_CATEGORIES = [
  "Technology and Coding",
  "Creativity and Arts",
  "Innovation",
  "Others / Study with Me",
]

// ─── Tilt Card (replicating the how-it-works-diagram pattern) ────────────────
function TiltCard({
  icon: Icon,
  label,
  title,
  description,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  title: string
  description: string
  index: number
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mx = useSpring(x)
  const my = useSpring(y)
  const rotateX = useTransform(my, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mx, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleMouseLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group h-full"
    >
      <div className="relative h-full flex flex-col p-6 rounded-2xl bg-[#102D26]/40 backdrop-blur-md border border-white/5 group-hover:border-[#0BA94C]/40 transition-all duration-300 overflow-hidden">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#0BA94C]/5 rounded-full blur-2xl group-hover:bg-[#0BA94C]/10 transition-all duration-500" />

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0BA94C]/10 text-[#0BA94C]">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <span className="text-[#0BA94C] text-[10px] font-bold uppercase tracking-wider">{label}</span>
            <h3 className="text-white font-bold text-lg leading-tight">{title}</h3>
          </div>
        </div>

        <p className="text-[#ABAEB6] text-sm leading-relaxed flex-1">{description}</p>

        <div className="mt-6 flex items-center justify-between">
          <div className="w-8 h-1 bg-[#0BA94C]/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#0BA94C]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
            />
          </div>
          <ChevronRight className="w-4 h-4 text-[#0BA94C] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
        </div>
      </div>
    </motion.div>
  )
}

// ─── Section pill badge (matches how-it-works-diagram style) ─────────────────
function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0BA94C]/10 border border-[#0BA94C]/20 text-[#0BA94C] text-[11px] font-bold uppercase tracking-widest mb-6"
    >
      <Sparkles className="w-3.5 h-3.5" />
      {children}
    </motion.div>
  )
}

// ─── Section heading (matches how-it-works-diagram style) ────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6"
    >
      {children}
    </motion.h2>
  )
}

// ─── Inline divider ───────────────────────────────────────────────────────────
function SectionDivider() {
  return (
    <div className="flex items-center my-10 md:my-16 lg:my-20">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/10" />
      <div className="mx-4 w-2 h-2 bg-[#0BA94C] rounded-full animate-pulse" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/10" />
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function EventSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "viewer" as "streamer" | "viewer",
    streamerCategories: [] as string[],
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const SHARE_URL = typeof window !== "undefined" ? window.location.href : ""
  const SHARE_MESSAGE =
    `Learnify is launching its beta version and I just reserved my spot. Live streams, communities, prizes and early access. Seats are limited, grab yours before it fills up:\n${SHARE_URL}`

  const validate = () => {
    const e: Record<string, string> = {}
    if (formData.name.length < 2) e.name = "Name must be at least 2 characters"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Please enter a valid email"
    if (formData.role === "streamer" && formData.streamerCategories.length === 0)
      e.streamerCategories = "Please select at least one category"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch("/api/event-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          role: formData.role,
          streamerCategories: formData.role === "streamer" ? formData.streamerCategories : [],
        }),
      })
      const result = await res.json()
      if (!res.ok) throw new Error(result.error || "Registration failed")
      setHasSubmitted(true)
      toast({ title: "You're in!", description: "We'll contact you soon to confirm your spot." })
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong."
      setSubmitError(msg)
      toast({ title: "Error", description: msg, variant: "destructive" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(SHARE_MESSAGE)
    setCopied(true)
    toast({ title: "Copied!", description: "Share message copied to clipboard." })
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "Learnify Beta Launch", text: SHARE_MESSAGE })
        toast({ title: "Shared!", description: "Thanks for spreading the word." })
        return
      } catch { /* fall through */ }
    }
    handleCopy()
  }

  return (
    <section id="event" className="relative py-12 md:py-20 lg:py-24 overflow-hidden" aria-labelledby="event-heading">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[5%] left-[5%] w-[40%] aspect-square bg-[#0BA94C]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[35%] aspect-square bg-[#0BA94C]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── ABOUT + COUNTDOWN side by side ────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-20">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge>Beta Launch — March 26</SectionBadge>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6"
            >
              Learnify is going{" "}
              <span className="text-[#0BA94C]">live</span> and you are
              invited to be part of it.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-[#ABAEB6] text-lg leading-relaxed mb-4"
            >
              What you have been waiting for is finally here. Learnify&apos;s beta platform is ready, and we are opening
              the doors to an exclusive group of early testers before anyone else.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#ABAEB6] text-lg leading-relaxed mb-6"
            >
              Join us on{" "}
              <span className="text-white font-semibold">March 26, 11:30 AM &ndash; 3:00 PM</span> at{" "}
              <span className="text-white font-semibold">University of Jordan Academy</span> to be among the first to experience the
              platform, host live streams, join the communities, rank up on the leaderboard, and win valuable prizes from
              the Learnify team.
            </motion.p>

            {/* Event details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                80% of spots reserved
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0BA94C]/10 border border-[#0BA94C]/20 text-[#0BA94C] text-sm font-medium">
                Invitation only — tickets will be sent
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0BA94C]/10 border border-[#0BA94C]/20 text-[#0BA94C] text-sm font-medium">
                Complimentary access
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white font-bold text-xl"
            >
              Seats are limited. Reserve yours now!
            </motion.p>
          </motion.div>

          {/* Right — countdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0BA94C]" />
              <span className="text-[#ABAEB6] text-sm font-semibold uppercase tracking-widest">Event starts in</span>
            </div>
            <EventCountdown />
            <Button
              asChild
              className="bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-bold px-8 h-12 shadow-lg shadow-[#0BA94C]/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#0BA94C]/30"
            >
              <a href="#event-form">
                Reserve my spot
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>

        </div>

        <SectionDivider />

        {/* ─── FOR WHO ───────────────────────────────────────────────────── */}
        <div className="text-center mb-8 md:mb-12">
          <SectionBadge>Who is this for</SectionBadge>
          <SectionHeading>
            Built for <span className="text-[#0BA94C]">everyone</span>
          </SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#ABAEB6] text-lg max-w-2xl mx-auto"
          >
            Whether you stream, watch, or connect — there&apos;s a place for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-0">
          {[
            {
              icon: Radio,
              label: "Role 01",
              title: "Streamers",
              description:
                "Be among the first users to host a live stream on Learnify. Fill up the form, we will contact you to confirm your spot.",
            },
            {
              icon: Users,
              label: "Role 02",
              title: "Viewers",
              description:
                "Watch live streams, chat in real time, and experience the platform. Your feedback matters — it shapes what Learnify becomes.",
            },
            {
              icon: MessageCircle,
              label: "Role 03",
              title: "Community Members",
              description:
                "Post, connect, start discussions and engage in Learnify's communities. Be active and help us build the most active learning community. Seats are limited — sign up and reserve yours.",
            },
          ].map((card, i) => (
            <TiltCard key={card.title} {...card} index={i} />
          ))}
        </div>

        <SectionDivider />

        {/* ─── WHAT YOU WILL GET ─────────────────────────────────────────── */}
        <div className="text-center mb-8 md:mb-12">
          <SectionBadge>Rewards & Benefits</SectionBadge>
          <SectionHeading>
            What you will <span className="text-[#0BA94C]">get</span>
          </SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#ABAEB6] text-lg max-w-2xl mx-auto"
          >
            Show up, be active, and you&apos;ll enter the roulette of winning prizes from the Learnify Team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              icon: Gift,
              label: "Benefit 01",
              title: "Rewards",
              description:
                "Special rewards based on your contributions during testing. Free Creator Basic subscriptions, platform credits, discounts, exclusive badges, and much more.",
            },
            {
              icon: Award,
              label: "Benefit 02",
              title: "Participation Certificates",
              description:
                "Every streamer and viewer receives an official digital certificate from Learnify Technologies, Inc. for participating and being part of the beginning.",
            },
            {
              icon: Zap,
              label: "Benefit 03",
              title: "Early Access",
              description:
                "Get access before anyone else. Test the platform, explore every feature, give us direct feedback and help shape the future of Learnify.",
            },
          ].map((card, i) => (
            <TiltCard key={card.title} {...card} index={i} />
          ))}
        </div>

        <SectionDivider />

        {/* ─── FORM ──────────────────────────────────────────────────────── */}
        <div id="event-form" className="scroll-mt-20">

          <AnimatePresence mode="wait">
            {hasSubmitted ? (
              /* ── Success state ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Left */}
                <div>
                  <SectionBadge>Secure your seat</SectionBadge>
                  <SectionHeading>
                    You are <span className="text-[#0BA94C]">registered!</span>
                  </SectionHeading>
                  <p className="text-[#ABAEB6] text-lg leading-relaxed mb-6">
                    We&apos;ll contact you soon to confirm your spot. See you on March 26.
                  </p>
                  <p className="text-[#ABAEB6] text-lg leading-relaxed">
                    For more details{" "}
                    <a href="/contact" className="text-[#0BA94C] hover:underline underline-offset-2">
                      contact us
                    </a>
                  </p>
                </div>
                {/* Right — share card */}
                <div className="rounded-3xl bg-[#102D26]/40 border border-white/10 backdrop-blur-md p-8">
                  <div className="w-16 h-16 rounded-full bg-[#0BA94C]/20 border border-[#0BA94C]/30 flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-[#0BA94C]" />
                  </div>
                  <p className="text-sm text-[#0BA94C] font-bold uppercase tracking-wider mb-3">
                    Know someone who belongs here?
                  </p>
                  <p className="text-[#ABAEB6] text-sm leading-relaxed mb-6">
                    Learnify is launching its beta version and I just reserved my spot. Live streams, communities,
                    prizes and early access. Seats are limited, grab yours before it fills up.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <Button
                      variant="outline"
                      onClick={handleCopy}
                      className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 bg-transparent"
                    >
                      {copied ? <Check className="w-4 h-4 mr-2 text-[#0BA94C]" /> : <Copy className="w-4 h-4 mr-2" />}
                      {copied ? "Copied!" : "Copy message"}
                    </Button>
                    <Button onClick={handleShare} className="bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-semibold">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share with friends
                    </Button>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* ── Form state ── */
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"
              >
                {/* Left — copy */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <SectionBadge>Secure your seat</SectionBadge>
                  <SectionHeading>
                    Fill up the form, we will{" "}
                    <span className="text-[#0BA94C]">contact you</span>
                  </SectionHeading>
                  <p className="text-[#ABAEB6] text-lg leading-relaxed mb-8">
                    For more details{" "}
                    <a href="/contact" className="text-[#0BA94C] hover:underline underline-offset-2">
                      contact us
                    </a>
                  </p>

                  {/* Quick checklist */}
                  <div className="space-y-4">
                    {[
                      "Fill up the form below",
                      "We confirm your spot via contact",
                      "Show up on March 26",
                      "Be active — win prizes!",
                    ].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#0BA94C]/20 border border-[#0BA94C]/40 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-[#0BA94C]" />
                        </div>
                        <span className="text-[#ABAEB6] text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right — form card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="relative"
                >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0BA94C]/8 via-transparent to-[#0BA94C]/8 rounded-3xl blur-3xl -z-10" />
                <div className="relative rounded-3xl bg-[#102D26]/40 border border-white/10 p-8 backdrop-blur-md shadow-2xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                        {submitError}
                      </div>
                    )}

                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="ev-name" className="text-white text-sm font-semibold flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0BA94C] rounded-full" />
                        Name
                      </Label>
                      <Input
                        id="ev-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => { setFormData((p) => ({ ...p, name: e.target.value })); if (errors.name) setErrors((p) => ({ ...p, name: "" })) }}
                        placeholder="Your full name"
                        className="h-12 bg-white/5 border-white/10 text-white placeholder:text-[#ABAEB6] focus:border-[#0BA94C] focus:ring-[#0BA94C] focus:ring-2 focus:ring-offset-0 transition-all duration-300"
                        disabled={isSubmitting}
                      />
                      {errors.name && <p className="text-red-400 text-sm flex items-center gap-1.5"><span className="w-1 h-1 bg-red-400 rounded-full inline-block" />{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="ev-email" className="text-white text-sm font-semibold flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0BA94C] rounded-full" />
                        Email
                      </Label>
                      <Input
                        id="ev-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => { setFormData((p) => ({ ...p, email: e.target.value })); if (errors.email) setErrors((p) => ({ ...p, email: "" })) }}
                        placeholder="your@email.com"
                        className="h-12 bg-white/5 border-white/10 text-white placeholder:text-[#ABAEB6] focus:border-[#0BA94C] focus:ring-[#0BA94C] focus:ring-2 focus:ring-offset-0 transition-all duration-300"
                        disabled={isSubmitting}
                      />
                      {errors.email && <p className="text-red-400 text-sm flex items-center gap-1.5"><span className="w-1 h-1 bg-red-400 rounded-full inline-block" />{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="ev-phone" className="text-white text-sm font-semibold flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#ABAEB6]/40 rounded-full" />
                        Phone number
                        <span className="text-[#ABAEB6] font-normal">(optional)</span>
                      </Label>
                      <Input
                        id="ev-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                        placeholder="+1 234 567 8900"
                        className="h-12 bg-white/5 border-white/10 text-white placeholder:text-[#ABAEB6] focus:border-[#0BA94C] focus:ring-[#0BA94C] focus:ring-2 focus:ring-offset-0 transition-all duration-300"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Role */}
                    <div className="space-y-3">
                      <Label className="text-white text-sm font-semibold flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#0BA94C] rounded-full" />
                        Role
                      </Label>
                      <RadioGroup
                        value={formData.role}
                        onValueChange={(v) => {
                          setFormData((p) => ({ ...p, role: v as "streamer" | "viewer" }))
                          setErrors((p) => ({ ...p, streamerCategories: "" }))
                        }}
                        className="grid grid-cols-2 gap-3"
                      >
                        {(["streamer", "viewer"] as const).map((r) => (
                          <label
                            key={r}
                            htmlFor={`role-${r}`}
                            className={cn(
                              "flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200",
                              formData.role === r
                                ? "border-[#0BA94C]/50 bg-[#0BA94C]/10"
                                : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                            )}
                          >
                            <RadioGroupItem value={r} id={`role-${r}`} className="text-[#0BA94C]" />
                            <span className="capitalize font-semibold text-white text-sm">{r}</span>
                          </label>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Streamer categories */}
                    <AnimatePresence>
                      {formData.role === "streamer" && (
                        <motion.div
                          key="cats"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 pt-2">
                            <Label className="text-white text-sm font-semibold flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-[#0BA94C] rounded-full" />
                              Streamer Categories
                            </Label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {STREAMER_CATEGORIES.map((cat) => (
                                <label
                                  key={cat}
                                  htmlFor={`cat-${cat}`}
                                  className={cn(
                                    "flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 text-sm",
                                    formData.streamerCategories.includes(cat)
                                      ? "border-[#0BA94C]/40 bg-[#0BA94C]/10 text-white"
                                      : "border-white/10 bg-white/[0.03] text-[#ABAEB6] hover:bg-white/[0.06] hover:text-white"
                                  )}
                                >
                                  <Checkbox
                                    id={`cat-${cat}`}
                                    checked={formData.streamerCategories.includes(cat)}
                                    onCheckedChange={(checked) => {
                                      const next = checked
                                        ? [...formData.streamerCategories, cat]
                                        : formData.streamerCategories.filter((c) => c !== cat)
                                      setFormData((p) => ({ ...p, streamerCategories: next }))
                                      if (errors.streamerCategories) setErrors((p) => ({ ...p, streamerCategories: "" }))
                                    }}
                                    className="text-[#0BA94C] border-white/20"
                                  />
                                  {cat}
                                </label>
                              ))}
                            </div>
                            {errors.streamerCategories && (
                              <p className="text-red-400 text-sm flex items-center gap-1.5">
                                <span className="w-1 h-1 bg-red-400 rounded-full inline-block" />
                                {errors.streamerCategories}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-semibold text-base hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-transparent"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            Reserve my spot
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        )}
                      </Button>
                    </div>

                    <p className="text-center text-xs text-[#ABAEB6]">
                      By registering, you agree to our Terms & Privacy Policy.
                    </p>
                  </form>
                </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ─── READY TO TAKE FIRST STEP? (matches how-it-works style) ────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 md:mt-20 flex justify-center"
        >
          <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <Zap className="w-5 h-5 text-[#0BA94C] animate-pulse" />
            <span className="text-white font-medium">Ready to be part of history?</span>
            <div className="w-2 h-2 rounded-full bg-[#0BA94C] animate-ping" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
