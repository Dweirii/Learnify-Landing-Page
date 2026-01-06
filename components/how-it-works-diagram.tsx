"use client"

import React, { useState } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import {
  UserPlus, Video, Users, Trophy,
  LogIn, BookOpen, TrendingUp, Heart,
  Sparkles, Zap, ChevronRight, GraduationCap, Mic2
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface FlowStep {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const streamers: FlowStep[] = [
  {
    title: "Sign up for free",
    description: "Create your profile and verify your expertise in minutes.",
    icon: UserPlus,
    color: "#0BA94C"
  },
  {
    title: "Host a live session",
    description: "Go live, share your screen, and interact with students in real-time.",
    icon: Video,
    color: "#10B981"
  },
  {
    title: "Engage & build",
    description: "Foster a loyal community and answer questions on the fly.",
    icon: Users,
    color: "#34D399"
  },
  {
    title: "Gain recognition",
    description: "Earn badges and climb the leaderboard as a top mentor.",
    icon: Trophy,
    color: "#6EE7B7"
  },
]

const learners: FlowStep[] = [
  {
    title: "Join for free",
    description: "Access a world of knowledge with just a simple signup.",
    icon: LogIn,
    color: "#0BA94C"
  },
  {
    title: "Learn live",
    description: "Participate in interactive sessions, not just pre-recorded videos.",
    icon: BookOpen,
    color: "#10B981"
  },
  {
    title: "Build skills",
    description: "Apply what you learn through projects and live guidance.",
    icon: TrendingUp,
    color: "#34D399"
  },
  {
    title: "Grow together",
    description: "Connect with peers and mentors in a social learning environment.",
    icon: Heart,
    color: "#6EE7B7"
  },
]

const TiltCard = ({ step, index }: { step: FlowStep, index: number }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Icon = step.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group h-full"
    >
      <div className="relative h-full flex flex-col p-6 rounded-2xl bg-[#102D26]/40 backdrop-blur-md border border-white/5 group-hover:border-[#0BA94C]/40 transition-all duration-300 overflow-hidden">
        {/* Background glow - ultra subtle */}
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#0BA94C]/5 rounded-full blur-2xl group-hover:bg-[#0BA94C]/10 transition-all duration-500" />

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0BA94C]/10 text-[#0BA94C]">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <span className="text-[#0BA94C] text-[10px] font-bold uppercase tracking-wider">Step 0{index + 1}</span>
            <h3 className="text-white font-bold text-lg leading-tight">{step.title}</h3>
          </div>
        </div>

        <p className="text-[#ABAEB6] text-sm leading-relaxed flex-1">
          {step.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <div className="w-8 h-1 bg-[#0BA94C]/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#0BA94C]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
            />
          </div>
          <ChevronRight className="w-4 h-4 text-[#0BA94C] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
        </div>
      </div>
    </motion.div>
  )
}

const Switcher = ({ activeTab, setActiveTab }: { activeTab: 'learner' | 'streamer', setActiveTab: (t: 'learner' | 'streamer') => void }) => {
  return (
    <div className="flex p-1 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-2xl w-fit mx-auto mb-16 relative overflow-hidden">
      <div
        className={cn(
          "absolute inset-y-1 rounded-[14px] bg-[#0BA94C] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-lg shadow-[#0BA94C]/20",
          activeTab === 'learner' ? "left-1 w-[calc(50%-4px)]" : "left-[calc(50%+4px)] w-[calc(50%-8px)]"
        )}
      />

      <button
        onClick={() => setActiveTab('learner')}
        className={cn(
          "relative z-10 px-8 py-3 text-sm font-bold transition-colors duration-300 flex items-center gap-2",
          activeTab === 'learner' ? "text-white" : "text-[#ABAEB6] hover:text-white"
        )}
      >
        <GraduationCap className="w-4 h-4" />
        For Learners
      </button>

      <button
        onClick={() => setActiveTab('streamer')}
        className={cn(
          "relative z-10 px-8 py-3 text-sm font-bold transition-colors duration-300 flex items-center gap-2",
          activeTab === 'streamer' ? "text-white" : "text-[#ABAEB6] hover:text-white"
        )}
      >
        <Mic2 className="w-4 h-4" />
        For Streamers
      </button>
    </div>
  )
}

export default function HowItWorksDiagram({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<'learner' | 'streamer'>('learner')
  const currentSteps = activeTab === 'learner' ? learners : streamers

  return (
    <section className={cn("py-24 px-4 relative overflow-hidden", className)}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40%] aspect-square bg-[#0BA94C]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[40%] aspect-square bg-[#0BA94C]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0BA94C]/10 border border-[#0BA94C]/20 text-[#0BA94C] text-[11px] font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Seamless Onboarding
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            How it <span className="text-[#0BA94C]">works</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#ABAEB6] text-lg max-w-2xl mx-auto"
          >
            Unlock your potential in a few simple steps. Choose your path and start your journey today.
          </motion.p>
        </div>

        <Switcher activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <AnimatePresence mode="popLayout">
            {currentSteps.map((step, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                layout
                className="h-full"
              >
                <TiltCard step={step} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Connecting lines for desktop (visual only, hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0BA94C]/20 to-transparent -translate-y-1/2 -z-10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <Zap className="w-5 h-5 text-[#0BA94C] animate-pulse" />
            <span className="text-white font-medium">Ready to take the first step?</span>
            <div className="w-2 h-2 rounded-full bg-[#0BA94C] animate-ping" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
