"use client"

import { motion, Variants } from "framer-motion"
import { Mail, CalendarCheck, Users } from "lucide-react"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

const steps = [
  {
    icon: Mail,
    title: "We confirm by email",
    body: "Within 24 hours for learners, 48 hours for Founding Creator applications.",
  },
  {
    icon: CalendarCheck,
    title: "You get your schedule",
    body: "Cohort calendar, Demo Day invite, and — for creators — the training and rehearsal plan.",
  },
  {
    icon: Users,
    title: "We show up May 8",
    body: "Live session number one. You build. Your cohort builds. Everyone ships by June 5.",
  },
]

export default function CohortJoinNext() {
  return (
    <section
      aria-labelledby="next-steps-heading"
      className="relative w-full pb-24 lg:pb-32"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0BA94C]/10 border border-[#0BA94C]/40 text-[#0BA94C] text-xs font-bold uppercase tracking-widest mb-5"
          >
            What happens next
          </motion.div>
          <motion.h2
            id="next-steps-heading"
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4"
          >
            Three <span className="text-[#0BA94C]">steps</span> between you and May 8.
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base text-[#ABAEB6] leading-relaxed">
            No guesswork. No maze. Here's exactly what happens after you submit.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative rounded-2xl bg-gradient-to-br from-[#102D26]/60 to-[#061A15]/60 border border-[#ABAEB6]/10 p-6 lg:p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0BA94C]">
                    Step {i + 1}
                  </span>
                  <span className="flex-1 h-px bg-gradient-to-r from-[#0BA94C]/30 to-transparent" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#0BA94C]/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#0BA94C]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">{step.title}</h3>
                <p className="text-sm text-[#ABAEB6] leading-relaxed">{step.body}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
