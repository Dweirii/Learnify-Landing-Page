"use client"

import type React from "react"
import { useState } from "react"

import { motion, Variants } from "framer-motion"
import { Users, TrendingUp, Share2, Compass, Network, GraduationCap, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AudienceSegment {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface TargetAudienceProps {
  title?: string
  subtitle?: string
  ctaText?: string
  onCtaClick?: () => void
}

const audienceSegments: AudienceSegment[] = [
  {
    icon: GraduationCap,
    title: "University students",
    description: "Students looking to bridge the gap between their academic studies and the job market.",
  },
  {
    icon: TrendingUp,
    title: "Fresh graduates",
    description: "New graduates seeking to acquire practical skills and hands-on experience.",
  },
  {
    icon: Network,
    title: "Self-learners",
    description: "Individuals passionate about learning new fields and growing their knowledge independently.",
  },
  {
    icon: Share2,
    title: "Industry professionals",
    description: "Experts who want to share their skills and give back to the learning community.",
  },
  {
    icon: Users,
    title: "Educators",
    description: "Teachers and mentors looking for modern ways to engage with the next generation of learners.",
  },
]

export default function TargetAudience({
  title = "Who is Learnify for",
  subtitle = "",
  ctaText = "Ready to be one of us?",
  onCtaClick,
}: TargetAudienceProps) {
  const [showAll, setShowAll] = useState(false)
  const initialSegmentsCount = 3
  const visibleSegments = showAll ? audienceSegments : audienceSegments.slice(0, initialSegmentsCount)

  // Debug logging

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      className="py-16 md:py-24 bg-transparent"
      aria-labelledby="target-audience-title"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            id="target-audience-title"
            className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance"
          >
            {title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-[#ABAEB6] mb-8 text-pretty">
            {subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleSegments.map((segment, index) => {
            const IconComponent = segment.icon
            return (
              <motion.div
                key={segment.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-[#102D26]/30 border border-white/5 rounded-2xl p-6 hover:border-[#0BA94C]/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-[#0BA94C]/10 rounded-full flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-[#0BA94C]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {segment.title}
                  </h3>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* See More/Less Button */}
        {audienceSegments.length > initialSegmentsCount && (
          <div className="text-center mt-8">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-[#0BA94C]/50 text-[#0BA94C] hover:bg-[#0BA94C]/10 hover:border-[#0BA94C] transition-all duration-300 bg-transparent px-6 py-2"
              aria-label={showAll ? "Show fewer audience segments" : "Show all audience segments"}
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  See More Audiences
                  <ChevronDown className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
