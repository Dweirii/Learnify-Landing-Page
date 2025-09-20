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
    title: "Future Achievers",
    description:
      "University students looking to learn, grow, and share knowledge while building skills that matter for their future.",
  },
  {
    icon: TrendingUp,
    title: "Growth Seekers",
    description:
      "Ambitious individuals eager to level up with practical skills, hands-on learning, and real-world experience.",
  },
  {
    icon: Share2,
    title: "Knowledge Sharers",
    description:
      "Tutors, content creators, and experts who want to inspire others by turning their expertise into impactful lessons.",
  },
  {
    icon: Compass,
    title: "Pathfinders",
    description:
      "Learners who seek guidance for themselves but also love helping others, supporting peers, sharing advice, and offering the encouragement people need to move forward.",
  },
  {
    icon: Network,
    title: "Connectors",
    description:
      "Community-driven learners who want to meet new people, build relationships, and grow by connecting with others in collaborative spaces.",
  },
  {
    icon: Users,
    title: "Education Leaders",
    description:
      "Universities, societies, and educational initiatives seeking a platform to connect, empower, and support learners.",
  },
]

export default function TargetAudience({
  title = "Target Audience",
  subtitle = "Who is Learnify for?",
  ctaText = "Ready to be one of us?",
  onCtaClick,
}: TargetAudienceProps) {
  const [showAll, setShowAll] = useState(false)
  const initialSegmentsCount = 3
  const visibleSegments = showAll ? audienceSegments : audienceSegments.slice(0, initialSegmentsCount)
  
  // Debug logging
  console.log('Target Audience Debug:', {
    showAll,
    totalSegments: audienceSegments.length,
    visibleCount: visibleSegments.length,
    visibleTitles: visibleSegments.map(s => s.title)
  })

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleSegments.map((segment, index) => {
            const IconComponent = segment.icon
            return (
              <motion.div
                key={segment.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#102D26]/40 backdrop-blur-sm border border-[#0BA94C]/20 rounded-xl p-6 hover:border-[#0BA94C]/40 transition-all duration-300 hover:bg-[#102D26]/60 min-h-[120px]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0BA94C]/10 rounded-lg flex items-center justify-center group-hover:bg-[#0BA94C]/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-[#0BA94C]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#0BA94C] transition-colors duration-300">
                      {segment.title}
                    </h3>
                    <p className="text-[#ABAEB6] text-sm leading-relaxed text-pretty">{segment.description}</p>
                  </div>
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
