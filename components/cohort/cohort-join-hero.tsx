"use client"

import { motion, Variants } from "framer-motion"
import { Calendar } from "lucide-react"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function CohortJoinHero() {
  return (
    <section
      aria-labelledby="cohort-join-heading"
      className="relative w-full pt-20 lg:pt-28 pb-10 lg:pb-14"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0BA94C]/10 blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0BA94C]/10 border border-[#0BA94C]/40 text-[#0BA94C] text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Calendar className="w-3 h-3" />
            Cohort Registration · Starts May 8
          </motion.div>

          <motion.h1
            id="cohort-join-heading"
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            Join the <span className="text-[#0BA94C]">cohort.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base lg:text-lg text-[#ABAEB6] leading-relaxed max-w-2xl mx-auto"
          >
            Pick your role, fill the form, we'll handle the rest.
            Show up to a real community that ships real projects — live, in Arabic, with people who learn alongside you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
