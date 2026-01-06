"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, Zap } from "lucide-react"

interface HeroProps {
  tagline?: string
  overview?: string
  ctaHref?: string
  secondaryHref?: string
  images?: { main: string; card1: string; card2: string }
  className?: string
}


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export default function Hero({
  overview,
  ctaHref = "#join",
  secondaryHref = "/features",
  images,
  className = "bg-transparent",
}: HeroProps) {
  const defaultOverview = (
    <div className="space-y-4">
      <p>
        Learnify is an interactive live-streaming educational platform designed to bridge the gap between academic learning and real job-market skills in the Arab world.
      </p>
      <p>
        It delivers a modern learning experience built on real-time interaction, practical knowledge, and a strong learning community.
      </p>
      <p>
        Learnify enables talented students and industry experts to host live sessions across different fields, creating meaningful engagement between instructors and learners — aligned with today’s digital learning preferences.
      </p>
    </div>
  )

  const displayOverview = overview || defaultOverview
  return (
    <section
      aria-labelledby="hero-heading"
      className={`relative w-full overflow-hidden ${className}`}
    >

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2 text-balance"
            >
              Why Learnify
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-semibold text-[#0BA94C] mb-6"
            >
              Built by Learners, for the Future of Skills
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="text-base lg:text-lg text-[#ABAEB6] leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 text-pretty"
            >
              {displayOverview}
            </motion.div>

            {/* Feature bullets */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <Badge variant="secondary" className="bg-[#102D26]/60 text-[#ABAEB6] border-[#ABAEB6]/20">
                <Users className="w-3 h-3 mr-1" />
                Live Learning
              </Badge>
              <Badge variant="secondary" className="bg-[#102D26]/60 text-[#ABAEB6] border-[#ABAEB6]/20">
                <Trophy className="w-3 h-3 mr-1" />
                Project-Based
              </Badge>
              <Badge variant="secondary" className="bg-[#102D26]/60 text-[#ABAEB6] border-[#ABAEB6]/20">
                <Zap className="w-3 h-3 mr-1" />
                Gamification
              </Badge>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-semibold px-8 py-3 h-auto focus:ring-2 focus:ring-[#0BA94C]/50 focus:ring-offset-2 focus:ring-offset-[#061A15]"
              >
                <Link href={ctaHref}>Join Learnify</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#ABAEB6]/40 text-[#ABAEB6] hover:bg-[#ABAEB6]/10 hover:text-white px-8 py-3 h-auto focus:ring-2 focus:ring-[#ABAEB6]/50 focus:ring-offset-2 focus:ring-offset-[#061A15] bg-transparent"
              >
                <Link href={secondaryHref}>See Features</Link>
              </Button>
            </motion.div>

            <motion.p variants={itemVariants} className="text-sm text-[#B3B3B3] italic">
              Built by Learners, for the Future of Skills
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-sm text-[#ABAEB6]"
            >
              <span>10+ sessions</span>
              <span className="opacity-50">•</span>
              <span>5+ projects</span>
              <span className="opacity-50">•</span>
              <span>95% satisfaction</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Composition */}
          <motion.div variants={imageVariants} initial="hidden" animate="visible" className="relative lg:block">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Main mockup card */}
              <div className="relative bg-gradient-to-br from-[#102D26]/80 to-[#061A15]/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-[#ABAEB6]/10">
                <div className="aspect-video bg-gradient-to-br from-[#0BA94C]/20 to-[#102D26]/40 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                    <Image
                      src="/hero-live.jpg"
                      alt="Live learning session interface"
                      width={500}
                      height={300}
                      className="rounded-xl"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    LIVE
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white font-medium hidden sm:block">Live Violin Lesson – Interactive Music Streaming Session</span>
                  <div className="flex items-center gap-1.5 text-[#ABAEB6]">
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                        <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      127
                    </span>
                    <span>viewers</span>
                  </div>
                </div>
              </div>

              {/* Project badge card */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-[#102D26]/90 to-[#061A15]/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#ABAEB6]/10 max-w-[200px] hidden lg:block">       
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#0BA94C]/30 to-[#102D26]/40 rounded-lg mb-2 flex items-center justify-center">
                    <Image
                      src="/hero-project.jpeg"
                      alt="Project completion badge"
                      width={160}
                      height={120}
                      className="rounded-lg"
                      sizes="200px"
                    />
                  </div>
                <p className="text-xs text-white font-medium">Project Complete!</p>
                <p className="text-xs text-[#ABAEB6]">+250 XP earned</p>
              </div>

              {/* XP/Gamification card */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#102D26]/90 to-[#061A15]/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#ABAEB6]/10 max-w-[180px] hidden lg:block">   
                  <div className="aspect-[7/5] bg-gradient-to-br from-[#0BA94C]/30 to-[#102D26]/40 rounded-lg mb-2 flex flex-col items-center justify-center p-2">
                    <Image
                      src="/hero-level.jpeg"
                      alt="XP and level progress"
                      width={140}
                      height={100}
                      className="rounded-lg"
                      sizes="180px"
                    />
                  </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white font-medium">Level 12</span>
                  <span className="text-[#0BA94C]">2,450 XP</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
