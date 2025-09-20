"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { UserPlus, Video, Users, Trophy, LogIn, BookOpen, TrendingUp, Heart, ArrowRight, Sparkles, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface FlowStep {
  title: string
  icon: React.ComponentType<{ className?: string }>
}

interface HowItWorksDiagramProps {
  streamers?: FlowStep[]
  learners?: FlowStep[]
  className?: string
}

const defaultStreamers: FlowStep[] = [
  { title: "Sign up for free", icon: UserPlus },
  { title: "Host a live session", icon: Video },
  { title: "Engage & build a community", icon: Users },
  { title: "Gain recognition", icon: Trophy },
]

const defaultLearners: FlowStep[] = [
  { title: "Join for free", icon: LogIn },
  { title: "Learn live", icon: BookOpen },
  { title: "Build skills", icon: TrendingUp },
  { title: "Grow together", icon: Heart },
]

const AnimatedArrow = ({
  direction = "right",
  className = "",
  delay = 0,
}: {
  direction?: "right" | "down"
  className?: string
  delay?: number
}) => {
  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay,
        ease: "easeInOut",
      },
    },
  }

  if (direction === "down") {
    return (
      <motion.svg
        className={`w-6 h-12 text-[#0BA94C] ${className}`}
        viewBox="0 0 24 48"
        fill="none"
        aria-hidden="true"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.path
          d="M12 4 L12 40 M8 36 L12 40 L16 36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
        />
      </motion.svg>
    )
  }

  return (
    <motion.svg
      className={`w-12 h-6 text-[#0BA94C] ${className}`}
      viewBox="0 0 48 24"
      fill="none"
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.path
        d="M4 12 L40 12 M36 8 L40 12 L36 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
    </motion.svg>
  )
}

const FlowStep = ({
  step,
  index,
  isStreamer = false,
}: {
  step: FlowStep
  index: number
  isStreamer?: boolean
}) => {
  const Icon = step.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex flex-col items-center group cursor-pointer"
    >
      <Card className="bg-black/20 backdrop-blur-md border-[#0BA94C]/40 p-6 w-full max-w-xs hover:border-[#0BA94C]/70 hover:shadow-xl hover:shadow-[#0BA94C]/30 transition-all duration-300 group-hover:bg-black/30 group-hover:backdrop-blur-lg">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="relative">
            <div className={`p-3 rounded-full bg-gradient-to-br from-[#0BA94C] to-[#0BA94C]/80 group-hover:from-[#0BA94C] group-hover:to-[#0BA94C] transition-all duration-300`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#0BA94C] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">{index + 1}</span>
            </div>
          </div>
          <div>
            <p className="text-white text-sm font-semibold group-hover:text-[#0BA94C] transition-colors duration-300">{step.title}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export const CommunityNode = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1, rotate: 2 }}
      className="relative group"
    >
      <div className="flex flex-row gap-3 items-center justify-center bg-[#0BA94C]/90 backdrop-blur-md rounded-2xl px-6 py-4 min-w-[180px] shadow-lg shadow-[#0BA94C]/30 hover:shadow-xl hover:shadow-[#0BA94C]/40 transition-all duration-300">
        <div className="relative">
          <Users className="size-6 text-white group-hover:scale-110 transition-transform duration-300" />
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <div>
          <p className="text-white font-bold text-sm group-hover:text-white/90 transition-colors duration-300">Community</p>
          <p className="text-white/80 text-xs">Connect & Grow</p>
        </div>
      </div>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#0BA94C]/30 rounded-2xl blur-2xl -z-10 group-hover:bg-[#0BA94C]/40 transition-all duration-300" />
    </motion.div>
  )
}

export default function HowItWorksDiagram({
  streamers = defaultStreamers,
  learners = defaultLearners,
  className = "",
}: HowItWorksDiagramProps) {
  return (
    <section className={`py-16 px-4 ${className}`} aria-labelledby="howitworks-heading">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Badge variant="outline" className="border-[#0BA94C]/50 text-[#0BA94C] bg-[#0BA94C]/10 mb-4 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Simple Process
            </Badge>
          </motion.div>
          <motion.h2
            id="howitworks-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#ABAEB6] bg-clip-text text-transparent"
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#ABAEB6] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Two sides of one community, working together to create meaningful learning experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mt-8"
          >
            <div className="flex items-center gap-2 text-[#0BA94C]">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Start your journey in minutes</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout - Vertical Stacked */}
        <div className="md:hidden flex flex-col items-center justify-center space-y-16">
          {/* Streamers Flow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#0BA94C] mb-2">For Streamers</h3>
              <p className="text-[#ABAEB6] text-sm">Share your knowledge and build your community</p>
            </div>
            <ol className="space-y-8" role="list">
              {streamers.map((step, index) => (
                <li key={index} className="flex flex-col items-center">
                  <FlowStep step={step} index={index} isStreamer={true} />
                  {index < streamers.length - 1 && (
                    <AnimatedArrow direction="down" className="my-6" delay={index * 0.2 + 0.6} />
                  )}
                </li>
              ))}
            </ol>
            <div className="flex justify-center my-8">
              <AnimatedArrow direction="down" delay={streamers.length * 0.2 + 0.6} />
            </div>
          </motion.div>

          {/* Community Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex justify-center"
          >
            <CommunityNode />
          </motion.div>

          {/* Learners Flow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <AnimatedArrow direction="down" delay={streamers.length * 0.2 + 1.2} />
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#0BA94C] mb-2">For Learners</h3>
              <p className="text-[#ABAEB6] text-sm">Learn new skills and grow with others</p>
            </div>
            <ol className="space-y-8" role="list">
              {learners.map((step, index) => (
                <li key={index} className="flex flex-col items-center text-[#0BA94C]">
                  <FlowStep step={step} index={index + streamers.length + 1} isStreamer={false} />
                  {index < learners.length - 1 && (
                    <AnimatedArrow
                      direction="down"
                      className="my-6"
                      delay={(index + streamers.length + 1) * 0.2 + 0.6}
                    />
                  )}
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* Desktop Layout - Horizontal Flows */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 gap-20">
            {/* Streamers Flow - Top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-[#0BA94C] mb-3">For Streamers</h3>
                <p className="text-[#ABAEB6] text-lg">Share your knowledge and build your community</p>
              </div>
              <ol className="flex items-center justify-center gap-6 text-[#0BA94C]" role="list">
                {streamers.map((step, index) => (
                  <React.Fragment key={index}>
                    <li className="text-[#0BA94C]">
                      <FlowStep step={step} index={index} isStreamer={true} />
                    </li>
                    {index < streamers.length - 1 && <AnimatedArrow direction="right" delay={index * 0.2 + 0.6} />}
                  </React.Fragment>
                ))}
              </ol>
            </motion.div>

            {/* Convergence Arrows and Community */}
            <div className="relative">
              <div className="flex justify-center items-center gap-8">
                <motion.svg
                  className="w-24 h-12 text-[#0BA94C]"
                  viewBox="0 0 96 48"
                  fill="none"
                  aria-hidden="true"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.path
                    d="M20 12 Q48 12 48 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M44 20 L48 24 L44 28"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
                  />
                </motion.svg>

                <CommunityNode />

                <motion.svg
                  className="w-24 h-12 text-[#0BA94C]"
                  viewBox="0 0 96 48"
                  fill="none"
                  aria-hidden="true"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.path
                    d="M76 36 Q48 36 48 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M52 20 L48 24 L52 28"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.2, ease: "easeInOut" }}
                  />
                </motion.svg>
              </div>
            </div>

            {/* Learners Flow - Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-[#0BA94C] mb-3">For Learners</h3>
                <p className="text-[#ABAEB6] text-lg">Learn new skills and grow with others</p>
              </div>
              <ol className="flex items-center justify-center gap-6" role="list">
                {learners.map((step, index) => (
                  <React.Fragment key={index}>
                    <li className="text-[#0BA94C]">
                      <FlowStep step={step} index={index + streamers.length + 1} isStreamer={false} />
                    </li>
                    {index < learners.length - 1 && (
                      <AnimatedArrow direction="right" delay={(index + streamers.length + 1) * 0.2 + 0.6} />
                    )}
                  </React.Fragment>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
