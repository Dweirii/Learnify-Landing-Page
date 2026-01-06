"use client"

import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

interface VisionSectionProps {
  title?: string
  intro?: string
  beliefs?: string[]
  closing?: string
  ctaLabel?: string
  ctaHref?: string
  image?: string
  className?: string
}

const defaultBeliefs = [
  "We believe in learning by doing.",
  "We believe education is a movement.",
  "We believe every learner can be a leader.",
  "We believe in bridging the gap.",
  "We believe the future of MENA lies in its youth.",
  "We believe everyone has something to teach.",
]

export default function VisionSection({
  title = "Short Vision",
  intro = "Starting from our vision, Learnify started.",
  beliefs = defaultBeliefs,
  closing = "Join the movement now!",
  ctaLabel = "Get Started",
  ctaHref = "#join",
  image,
  className = "",
}: VisionSectionProps) {
  return (
    <section
      className={`relative py-16 md:py-24 bg-transparent overflow-hidden ${className}`}
      aria-labelledby="vision-heading"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-radial from-[#0BA94C]/5 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <h2 id="vision-heading" className="text-3xl md:text-4xl font-bold text-white text-balance">
                {title}
              </h2>
              <p className="text-[#ABAEB6] text-lg text-pretty">{intro}</p>
            </div>

            {/* Beliefs List */}
            <ul className="space-y-4" role="list">
              {beliefs.map((belief, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <CheckCircle2
                      className="w-6 h-6 text-[#0BA94C] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </motion.div>
                  <span className="text-white text-lg leading-relaxed">{belief}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-6 pt-4"
            >
              <p className="text-[#ABAEB6] text-lg font-medium text-pretty">{closing}</p>
              <Button
                asChild
                size="lg"
                className="bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-[#0BA94C] focus:ring-offset-2 focus:ring-offset-[#061A15] w-full sm:w-auto"
                aria-label="Join the Learnify movement"
              >
                <a href={ctaHref}>{ctaLabel}</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {image ? (
                <Image
                  src={image || "/placeholder.svg"}
                  alt="Vision illustration showing youth, learning, and growth"
                  fill
                  className="object-contain"
                  priority={false}
                />
              ) : (
                // Abstract SVG placeholder for youth, learning, growth
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0BA94C]/10 to-[#0BA94C]/5 rounded-2xl border border-[#0BA94C]/20">
                  <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full max-w-80 max-h-80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Growth/Learning Tree */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5 }}
                      d="M200 350 L200 250 M200 250 L160 200 M200 250 L240 200 M160 200 L140 160 M160 200 L180 160 M240 200 L220 160 M240 200 L260 160"
                      stroke="#0BA94C"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Knowledge Nodes */}
                    {[
                      { cx: 140, cy: 160, delay: 1 },
                      { cx: 180, cy: 160, delay: 1.2 },
                      { cx: 220, cy: 160, delay: 1.4 },
                      { cx: 260, cy: 160, delay: 1.6 },
                    ].map((node, index) => (
                      <motion.circle
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: node.delay }}
                        cx={node.cx}
                        cy={node.cy}
                        r="8"
                        fill="#0BA94C"
                      />
                    ))}

                    {/* Youth/Community Circles */}
                    <motion.circle
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      cx="120"
                      cy="120"
                      r="25"
                      fill="none"
                      stroke="#0BA94C"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                    <motion.circle
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      cx="280"
                      cy="120"
                      r="25"
                      fill="none"
                      stroke="#0BA94C"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                    <motion.circle
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      cx="200"
                      cy="80"
                      r="30"
                      fill="none"
                      stroke="#0BA94C"
                      strokeWidth="2"
                      opacity="0.8"
                    />

                    {/* Connection Lines */}
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.4 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 1.8 }}
                      d="M145 120 L175 80 M255 120 L225 80"
                      stroke="#0BA94C"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
