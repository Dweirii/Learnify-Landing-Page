"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"
import { Calendar, Rocket, Award, Users, Globe, Smartphone, Lightbulb, Code, Star, Box, ChevronRight, Cpu } from "lucide-react"

interface Milestone {
  date: string
  title: string
  description: string
  isUpcoming: boolean
  icon: React.ComponentType<{ className?: string }>
}

const timelineItems: Milestone[] = [
  {
    date: "Sep 2024",
    title: "Ideation Stage",
    description: "Brainstorming and shaping the project vision for a new era of MENA ed-tech.",
    isUpcoming: false,
    icon: Lightbulb
  },
  {
    date: "Dec 2024",
    title: "MVP Development",
    description: "Architecting the core live-streaming engine and interactive features.",
    isUpcoming: false,
    icon: Code
  },
  {
    date: "Feb 2025",
    title: "IEEE Pitchinno",
    description: "Official launch event and pitching to regional innovation leaders.",
    isUpcoming: false,
    icon: Rocket
  },
  {
    date: "May 2025",
    title: "CABSAT Dubai",
    description: "International showcase connecting with global broadcast and media experts.",
    isUpcoming: false,
    icon: Globe
  },
  {
    date: "May 2025",
    title: "UJIEC Winners",
    description: "Awarded 3rd place in the innovation challenge, validating our tech.",
    isUpcoming: false,
    icon: Award
  },
  {
    date: "Aug 2025",
    title: "Innovation Village",
    description: "Selected as a top regional project for the national innovation showcase.",
    isUpcoming: false,
    icon: Box
  },
  {
    date: "Sep 2025",
    title: "Platform Launch",
    description: "Learnify V1.0 goes live to the public across the Arab world.",
    isUpcoming: false,
    icon: Star
  },
  {
    date: "Nov 2025",
    title: "Community Growth",
    description: "Expanding our expert network and reaching significant user milestones.",
    isUpcoming: false,
    icon: Users
  },
  {
    date: "Jan 2026",
    title: "NVIDIA Inception",
    description: "Selected for NVIDIA's global program for AI startups, unlocking advanced infrastructure and AI expertise.",
    isUpcoming: false,
    icon: Cpu
  },
  {
    date: "Feb 2026",
    title: "Mobile App Beta",
    description: "Expanding the interactive experience to iOS and Android.",
    isUpcoming: true,
    icon: Smartphone
  }
];

const MilestoneCard = ({ item, index, isLeft }: { item: Milestone, index: number, isLeft: boolean }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={cn(
        "relative flex items-center w-full mb-12",
        isLeft ? "flex-row" : "flex-row-reverse"
      )}
    >
      {/* Content Card */}
      <div className={cn("w-1/2 px-8", isLeft ? "text-right" : "text-left")}>
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="group relative"
        >
          <div className="absolute inset-0 bg-[#0BA94C]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          <div className="relative p-6 rounded-2xl bg-[#102D26]/40 backdrop-blur-md border border-[#0BA94C]/20 group-hover:border-[#0BA94C]/40 transition-all duration-300">
            <div className={cn("flex items-center gap-3 mb-3", isLeft ? "flex-row-reverse" : "flex-row")}>
              <div className="p-2 rounded-lg bg-[#0BA94C]/10 text-[#0BA94C]">
                <Icon className="w-5 h-5" />
              </div>
              <time className="text-sm font-bold text-[#0BA94C] uppercase tracking-wider">{item.date}</time>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-[#ABAEB6] text-sm leading-relaxed">{item.description}</p>
            {item.isUpcoming && (
              <div className={cn("mt-4 flex", isLeft ? "justify-end" : "justify-start")}>
                <span className="px-3 py-1 text-[10px] font-bold bg-[#0BA94C] text-white rounded-full uppercase tracking-widest animate-pulse">
                  Upcoming
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Center Point */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#102D26] border-2 border-[#0BA94C] z-20 shadow-[0_0_15px_rgba(11,169,76,0.5)] group-hover:scale-125 transition-transform">
        <div className="absolute inset-0 bg-[#0BA94C] rounded-full animate-ping opacity-20" />
      </div>

      <div className="w-1/2 h-px" />
    </motion.div>
  )
}

export default function Traction() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section ref={containerRef} className="relative py-24 px-4 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0BA94C]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#0BA94C]/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-5xl relative">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            Learnify <span className="text-[#0BA94C]">Traction</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-[#0BA94C] mx-auto rounded-full mb-8"
          />
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative min-h-[1000px]">
          {/* Animated SVG Path */}
          <svg className="absolute left-1/2 -translate-x-1/2 w-px h-full overflow-visible" height="100%">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            <motion.line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="#0BA94C"
              strokeWidth="3"
              style={{ pathLength }}
              strokeLinecap="round"
            />
          </svg>

          <div className="relative z-10">
            {timelineItems.map((item, index) => (
              <MilestoneCard
                key={index}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-12 pl-12 relative">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-[#102D26] border-2 border-[#0BA94C] z-10" />
                <time className="text-xs font-bold text-[#0BA94C] mb-1 block uppercase tracking-widest">{item.date}</time>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[#ABAEB6] text-sm leading-relaxed">{item.description}</p>
                {item.isUpcoming && (
                  <span className="inline-block mt-3 px-2 py-0.5 text-[10px] bg-[#0BA94C] text-white rounded-full font-bold">UPCOMING</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-24"
        >
          <p className="text-[#ABAEB6] italic font-medium flex items-center justify-center gap-2">
            The Journey Continues <ChevronRight className="w-4 h-4 text-[#0BA94C]" />
          </p>
        </motion.div>
      </div>
    </section>
  )
}
