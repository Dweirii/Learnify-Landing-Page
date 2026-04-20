"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2, Rocket, Palette, BookOpen, Calendar, Users, Award } from "lucide-react"

type Cohort = {
  category: string
  title: string
  tagline: string
  description: string
  instructor: string
  sessions: string
  tag: "founder" | "creator" | "community"
  icon: typeof Code2
}

const cohorts: Cohort[] = [
  {
    category: "Coding & Tech",
    title: "Build Your First Full Web App",
    tagline: "Ship a real Next.js app in 4 weeks.",
    description:
      "6 live sessions over 4 weeks. Build a real Next.js web app from scratch. Walk away with a shipped project and a community of co-builders.",
    instructor: "Taught by Zaid — Founder of Learnify",
    sessions: "6 sessions · 4 weeks",
    tag: "founder",
    icon: Code2,
  },
  {
    category: "Business & Innovation",
    title: "Launch Your Startup From Zero",
    tagline: "Validate an idea live. Ship an MVP.",
    description:
      "Validate a real startup idea live — market research, customer interviews, MVP scoping. Work on your own idea alongside the cohort.",
    instructor: "Founding Creator · Business",
    sessions: "6 sessions · 4 weeks",
    tag: "creator",
    icon: Rocket,
  },
  {
    category: "Design",
    title: "Build a Professional Brand Identity",
    tagline: "A full brand system in Figma — yours.",
    description:
      "Build a complete brand system in Figma — logo, type, color, rules, applications. Design your own brand in parallel.",
    instructor: "Founding Creator · Design",
    sessions: "6 sessions · 4 weeks",
    tag: "creator",
    icon: Palette,
  },
  {
    category: "Study-With-Me",
    title: "Finals Season Study Track",
    tagline: "Study together. Discover the cohorts.",
    description:
      "Free, high-volume, community-driven. Rotating daily sessions during finals. Come to study, discover the cohorts.",
    instructor: "Community-run",
    sessions: "Daily · throughout May",
    tag: "community",
    icon: BookOpen,
  },
]

const tagStyles: Record<Cohort["tag"], { label: string; classes: string }> = {
  founder: {
    label: "Founder-led",
    classes: "bg-[#0BA94C] text-white border-[#0BA94C]",
  },
  creator: {
    label: "Founding Creator",
    classes: "bg-[#0BA94C]/10 text-[#0BA94C] border-[#0BA94C]/40",
  },
  community: {
    label: "Community-run",
    classes: "bg-white/5 text-[#ABAEB6] border-[#ABAEB6]/20",
  },
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

export default function CohortsSection() {
  return (
    <section
      id="cohorts"
      aria-labelledby="cohorts-heading"
      className="relative w-full py-20 lg:py-28"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0BA94C]/10 border border-[#0BA94C]/40 text-[#0BA94C] text-xs font-bold uppercase tracking-widest mb-5"
          >
            <Calendar className="w-3 h-3" />
            Starts May 8
          </motion.div>
          <motion.h2
            id="cohorts-heading"
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
          >
            Four live tracks. <span className="text-[#0BA94C]">One window.</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base lg:text-lg text-[#ABAEB6] leading-relaxed">
            Three project cohorts and one community study track — all free to join.
            A $5/mo subscription, paid directly to your creator, unlocks their community,
            replays, Demo Day, and a Learnify certificate.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
        >
          {cohorts.map((cohort) => {
            const Icon = cohort.icon
            const tag = tagStyles[cohort.tag]
            return (
              <motion.article
                key={cohort.title}
                variants={itemVariants}
                className="group relative rounded-2xl bg-gradient-to-br from-[#102D26]/80 to-[#061A15]/80 border border-[#ABAEB6]/10 hover:border-[#0BA94C]/40 transition-colors p-6 lg:p-8 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0BA94C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0BA94C]/15 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#0BA94C]" />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#ABAEB6]">
                        {cohort.category}
                      </p>
                    </div>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-widest border px-2 py-1 rounded-full shrink-0 ${tag.classes}`}
                    >
                      {tag.label}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-2">
                    {cohort.title}
                  </h3>
                  <p className="text-sm font-medium text-[#0BA94C] mb-4">
                    {cohort.tagline}
                  </p>

                  <p className="text-[#ABAEB6] leading-relaxed mb-6 text-pretty">
                    {cohort.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#ABAEB6] pt-5 border-t border-white/5">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#0BA94C]" />
                      {cohort.instructor}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0BA94C]" />
                      {cohort.sessions}
                    </span>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-semibold px-8 py-3 h-auto"
          >
            <Link href="/cohort">Register free · All cohorts</Link>
          </Button>
          <div className="flex items-center gap-2 text-sm text-[#ABAEB6]">
            <Award className="w-4 h-4 text-[#0BA94C]" />
            Demo Day at UoJ · June 5
          </div>
        </motion.div>
      </div>
    </section>
  )
}
