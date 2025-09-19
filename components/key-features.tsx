"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Podcast as Broadcast,
  Sparkles,
  Route,
  Hammer,
  Trophy,
  Users,
  ShieldCheck,
  Coins,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type Feature = {
  title: string
  description: string
  href?: string
  icon?: React.ComponentType<{ className?: string }>
}

interface KeyFeaturesProps {
  title?: string
  subtitle?: string
  features?: Feature[]
  ctaHref?: string
  learnMoreHref?: string
  className?: string
}

const defaultFeatures: Feature[] = [
  {
    title: "Live Learning Sessions",
    description: "Real-time classes with chat, Q&A, and polls.",
    icon: Broadcast,
  },
  {
    title: "AI-Powered Learning Agent",
    description: "Personalized guidance, recap, and next-best action.",
    icon: Sparkles,
  },
  {
    title: "Skill Building Tracks",
    description: "Curated pathways aligned to market roles.",
    icon: Route,
  },
  {
    title: "Project-Based Tracks",
    description: "Build portfolio-ready projects with reviews.",
    icon: Hammer,
  },
  {
    title: "Gamified Learning System",
    description: "XP, levels, streaks, badges.",
    icon: Trophy,
  },
  {
    title: "Community-Based Learning",
    description: "Peer rooms, study circles, mentor AMAs.",
    icon: Users,
  },
  {
    title: "Community Management Tools",
    description: "Moderation, analytics, and roles for creators.",
    icon: ShieldCheck,
  },
  {
    title: "Freemium Model",
    description: "Start free; unlock pro features when ready.",
    icon: Coins,
  },
]

interface FeatureCardProps {
  feature: Feature
  index: number
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = feature.icon || Sparkles

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="group"
    >
      <Card className="h-full border-white/10 bg-[#102D26]/40 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:border-[#0BA94C]/40 hover:shadow-lg hover:shadow-[#0BA94C]/10 focus-within:ring-2 focus-within:ring-[#0BA94C] focus-within:ring-offset-2 focus-within:ring-offset-[#061A15]">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#0BA94C]/20 flex items-center justify-center group-hover:bg-[#0BA94C]/30 transition-colors duration-300">
                <Icon className="w-6 h-6 text-[#0BA94C]" aria-hidden="true" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#0BA94C] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#ABAEB6] text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  )
}

function CTACard({ ctaHref, learnMoreHref }: { ctaHref: string; learnMoreHref: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: 0.8,
        ease: "easeOut",
      }}
      className="md:col-span-2 xl:col-span-1"
    >
      <Card className="h-full border-[#0BA94C]/30 bg-gradient-to-br from-[#0BA94C]/20 to-[#0BA94C]/10 backdrop-blur-sm rounded-2xl">
        <CardContent className="p-6 h-full flex flex-col justify-center text-center">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Upgrade your learning</h3>
              <p className="text-[#ABAEB6] text-sm">Join thousands of learners building their future</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                className="bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#0BA94C]/25"
                aria-label="Join Learnify now"
              >
                <Link href={ctaHref}>
                  Join us now
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-[#0BA94C]/50 text-[#0BA94C] hover:bg-[#0BA94C]/10 hover:border-[#0BA94C] transition-all duration-300 bg-transparent"
                aria-label="Learn more about Learnify features"
              >
                <Link href={learnMoreHref}>Learn more</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function KeyFeatures({
  title = "Key Features",
  subtitle = "Why Learnify?",
  features = defaultFeatures,
  ctaHref = "/join",
  learnMoreHref = "/features",
  className,
}: KeyFeaturesProps) {
  return (
    <section
      aria-labelledby="features-heading"
      className={cn("bg-transparent py-16", className)}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="border-[#0BA94C]/50 text-[#0BA94C] bg-[#0BA94C]/10 mb-4">
            {subtitle}
          </Badge>
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-[#ABAEB6] text-lg max-w-2xl mx-auto">
            Discover what makes Learnify the perfect platform for your learning journey.{" "}
            <Link
              href={learnMoreHref}
              className="text-[#0BA94C] hover:text-[#0BA94C]/80 underline underline-offset-2 transition-colors duration-300"
              aria-label="Learn more about all Learnify features"
            >
              Learn more
            </Link>
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}

        </div>
      </div>
    </section>
  )
}
