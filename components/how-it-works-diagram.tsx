"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { UserPlus, Video, Users, Trophy, LogIn, BookOpen, TrendingUp, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col items-center"
    >
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-4 w-full max-w-xs hover:bg-white/10 transition-colors duration-300">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-full ${isStreamer ? "bg-[#0BA94C]" : "bg-[#0BA94C]"}`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <p className="text-white text-sm font-medium">{step.title}</p>
        </div>
      </Card>
    </motion.div>
  )
}

export const CommunityNode = () => {
  return (
    <div className="flex flex-row gap-4 items-center justify-center bg-[#0BA94C] rounded-md w-40 h-12  text-center">
      <Users className="size-6 text-white" />
      <p className="text-white font-semibold text-sm">Community</p>
    </div>
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
        <div className="text-center mb-16">
          <motion.h2
            id="howitworks-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#ABAEB6] text-lg"
          >
            Two sides of one community
          </motion.p>
        </div>

        {/* Mobile Layout - Vertical Stacked */}
        <div className="md:hidden flex flex-col items-center justify-center space-y-12">
          {/* Streamers Flow */}
          <div>
            <h3 className="text-xl font-semibold text-[#0BA94C] mb-6 text-center">For Streamers</h3>
            <ol className="space-y-6" role="list">
              {streamers.map((step, index) => (
                <li key={index} className="flex flex-col items-center">
                  <FlowStep step={step} index={index} isStreamer={true} />
                  {index < streamers.length - 1 && (
                    <AnimatedArrow direction="down" className="my-4" delay={index * 0.2 + 0.6} />
                  )}
                </li>
              ))}
            </ol>
            <div className="flex justify-center my-6">
              <AnimatedArrow direction="down" delay={streamers.length * 0.2 + 0.6} />
            </div>
          </div>

          {/* Community Node */}
          <div className="flex justify-center">
            <CommunityNode />
          </div>

          {/* Learners Flow */}
          <div>
            <div className="flex justify-center mb-6">
              <AnimatedArrow direction="down" delay={streamers.length * 0.2 + 1.2} />
            </div>
            <h3 className="text-xl font-semibold text-[#0BA94C] mb-6 text-center">For Learners</h3>
            <ol className="space-y-6" role="list">
              {learners.map((step, index) => (
                <li key={index} className="flex flex-col items-center text-[#0BA94C]">
                  <FlowStep step={step} index={index + streamers.length + 1} isStreamer={false} />
                  {index < learners.length - 1 && (
                    <AnimatedArrow
                      direction="down"
                      className="my-4"
                      delay={(index + streamers.length + 1) * 0.2 + 0.6}
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Desktop Layout - Horizontal Flows */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 gap-16">
            {/* Streamers Flow - Top */}
            <div>
              <h3 className="text-xl font-semibold text-[#0BA94C] mb-8 text-center">For Streamers</h3>
              <ol className="flex items-center justify-center gap-4 text-[#0BA94C]" role="list">
                {streamers.map((step, index) => (
                  <React.Fragment key={index}>
                    <li className="text-[#0BA94C]">
                      <FlowStep step={step} index={index} isStreamer={true} />
                    </li>
                    {index < streamers.length - 1 && <AnimatedArrow direction="right" delay={index * 0.2 + 0.6} />}
                  </React.Fragment>
                ))}
              </ol>
            </div>

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
            <div>
              <h3 className="text-xl font-semibold text-[#0BA94C] mb-8 text-center">For Learners</h3>
              <ol className="flex items-center justify-center gap-4" role="list">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
