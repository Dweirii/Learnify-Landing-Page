"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp, Palette, Megaphone, Star } from "lucide-react"

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

const benefits = [
  {
    icon: TrendingUp,
    title: "90% of subs. 80% of donations.",
    description:
      "The highest creator revenue split in MENA. Every $5/mo paid by a learner goes mostly to you — not the platform.",
  },
  {
    icon: Palette,
    title: "A full asset pack — free",
    description:
      "Our designer produces your cohort landing page, thumbnails, reels, social templates, and brand kit. Worth 400–500 JD of real design work.",
  },
  {
    icon: Megaphone,
    title: "University of Jordan reach",
    description:
      "Library posters, on-campus booth, deanship endorsement, student-body email. Distribution you can't buy — delivered in partnership.",
  },
  {
    icon: Star,
    title: "Founding Creator — permanent",
    description:
      "Featured placement forever. First access to every platform feature. 50% discount codes to distribute to your own audience.",
  },
]

export default function FoundingCreatorSection() {
  return (
    <section
      id="founding-creator"
      aria-labelledby="founding-creator-heading"
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
            <Star className="w-3 h-3" />
            2 Spots Remaining
          </motion.div>

          <motion.h2
            id="founding-creator-heading"
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
          >
            Become a <span className="text-[#0BA94C]">Founding Creator</span> of Learnify.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base lg:text-lg text-[#ABAEB6] leading-relaxed"
          >
            We're hand-picking two creators to lead our Business and Design cohorts — the first
            ever on Learnify. No cash bonuses. Real upside. Permanent status. Full platform
            support behind you.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <motion.article
                key={benefit.title}
                variants={itemVariants}
                className="group relative rounded-2xl bg-gradient-to-br from-[#102D26]/80 to-[#061A15]/80 border border-[#ABAEB6]/10 hover:border-[#0BA94C]/40 transition-colors p-6 lg:p-8 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0BA94C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-[#0BA94C]/15 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#0BA94C]" />
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-[#ABAEB6] leading-relaxed text-pretty">
                    {benefit.description}
                  </p>
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
            <Link href="/cohort">Apply as a Creator</Link>
          </Button>
          <div className="flex items-center gap-2 text-sm text-[#ABAEB6]">
            <Star className="w-4 h-4 text-[#0BA94C]" />
            Cohort starts May 8 · Training Apr 21 – May 7
          </div>
        </motion.div>
      </div>
    </section>
  )
}
