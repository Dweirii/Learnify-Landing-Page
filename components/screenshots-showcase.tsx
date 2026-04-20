"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import { Radio, MessageCircle, Users, Zap } from "lucide-react"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const features = [
  {
    icon: Radio,
    title: "Live sessions, built for learning",
    description:
      "Not another video platform. Stream + chat + code + community in one surface, designed so learners build alongside instead of just watching.",
  },
  {
    icon: MessageCircle,
    title: "Chat that doesn't scroll past the point",
    description:
      "Creator-focused chat, pinned questions, and moderator tools so the important moments aren't buried under emojis.",
  },
  {
    icon: Users,
    title: "Cohort community — not a Discord dump",
    description:
      "Each cohort gets a dedicated community group with pinned syllabus, progress posts, and check-ins. The group is the product.",
  },
  {
    icon: Zap,
    title: "Mobile when you're away, web when you ship",
    description:
      "Watch from anywhere on iOS, come back to the desktop for the building. Synced in real time — you never lose your spot.",
  },
]

export default function ScreenshotsShowcase() {
  return (
    <section
      aria-labelledby="showcase-heading"
      className="relative w-full py-20 lg:py-28 overflow-hidden"
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
            <Zap className="w-3 h-3" />
            The Platform
          </motion.div>
          <motion.h2
            id="showcase-heading"
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
          >
            Built for live. <span className="text-[#0BA94C]">Built for cohorts.</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base lg:text-lg text-[#ABAEB6] leading-relaxed">
            We stopped trying to be Twitch for lectures. Every surface in Learnify is designed for
            the moment a creator builds live and a cohort builds alongside.
          </motion.p>
        </motion.div>

        {/* Laptop mockup — live cohort */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-24 lg:mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-3 relative overflow-visible">
              {/* Radial glow backdrop */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-[85%] h-[85%] bg-[#0BA94C]/12 blur-[90px] rounded-full" />
              </div>

              {/* Subtle grid pattern */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(11,169,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(11,169,76,1) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                  maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                  WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                }}
              />

              {/* Branded chip — top center */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center gap-2 bg-gradient-to-r from-[#0BA94C] to-[#098a3e] px-5 py-2 rounded-full shadow-xl shadow-[#0BA94C]/25"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                  Learnify · Live Cohort
                </span>
              </motion.div>

              <div className="relative scale-[1.15] lg:scale-[1.25] origin-center z-10 pt-6 md:pt-10">
                <Image
                  src="/livestream-laptop-mockup.png"
                  alt="Learnify web — live coding cohort session with chat"
                  width={1920}
                  height={1440}
                  className="w-full h-auto drop-shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>

              {/* Branded base line */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[65%] h-px bg-gradient-to-r from-transparent via-[#0BA94C]/60 to-transparent"
              />

              {/* Floating card — viewers */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden md:flex absolute top-[22%] -right-4 lg:-right-8 z-20 items-center gap-3 bg-gradient-to-br from-[#102D26]/95 to-[#061A15]/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-2xl border border-[#0BA94C]/25"
              >
                <div className="w-9 h-9 rounded-full bg-[#0BA94C]/20 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-[#0BA94C]" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold leading-tight">42 watching</p>
                  <p className="text-[#ABAEB6] text-[11px]">Coding cohort</p>
                </div>
              </motion.div>

              {/* Floating card — cohort session */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="hidden md:flex absolute bottom-[16%] -left-4 lg:-left-8 z-20 items-center gap-3 bg-gradient-to-br from-[#102D26]/95 to-[#061A15]/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-2xl border border-[#0BA94C]/25"
              >
                <div className="w-9 h-9 rounded-xl bg-[#0BA94C]/20 flex items-center justify-center shrink-0">
                  <Radio className="w-4 h-4 text-[#0BA94C]" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold leading-tight">Session 3 of 6</p>
                  <p className="text-[#ABAEB6] text-[11px]">Build Your First Web App</p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0BA94C] mb-4">
                Web · Live cohort
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-5">
                The session, the code, and the community — all in one window.
              </h3>
              <p className="text-[#ABAEB6] leading-relaxed mb-6">
                Stream alongside your code editor, chat with the cohort, and keep your community
                group one click away. Creators share. Learners ship. No context switching between
                ten tabs.
              </p>
              <ul className="space-y-3">
                {["Integrated live stream + chat", "Cohort community panel", "Polls, quizzes, and pinned moments", "Replay + Demo Day access for subscribers"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#ABAEB6]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0BA94C] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Mobile mockup — community */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-2 lg:order-1 order-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0BA94C] mb-4">
                Mobile · Cohort community
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-5">
                Your cohort, in your pocket — every chat, every question, every build.
              </h3>
              <p className="text-[#ABAEB6] leading-relaxed mb-6">
                Pinned cohort groups on top. Active conversations with your co-builders below.
                Direct messages to your creator when you're stuck. Push notifications when
                someone ships.
              </p>
              <ul className="space-y-3">
                {["Pinned cohort groups", "Real-time chat + DMs", "Progress posts and project drops", "Tap-to-join live sessions from anywhere"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#ABAEB6]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0BA94C] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 lg:order-2 order-1 relative flex justify-center overflow-visible">
              {/* Radial glow backdrop */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-[75%] h-[75%] bg-[#0BA94C]/15 blur-[80px] rounded-full" />
              </div>

              {/* Subtle grid pattern */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(11,169,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(11,169,76,1) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                  maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                  WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                }}
              />

              {/* Branded base line */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[55%] h-px bg-gradient-to-r from-transparent via-[#0BA94C]/60 to-transparent z-20"
              />

              <div className="relative">
                <Image
                  src="/community-mobile-mockup.png"
                  alt="Learnify mobile — cohort community groups and chats"
                  width={1920}
                  height={1440}
                  className="w-full h-auto drop-shadow-2xl scale-[1.35] lg:scale-[1.5] origin-center relative z-10"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                {/* Floating card — new message */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: -10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="hidden md:flex absolute top-[15%] -left-4 lg:-left-10 z-20 items-center gap-3 bg-gradient-to-br from-[#102D26]/95 to-[#061A15]/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-2xl border border-[#0BA94C]/20 max-w-[220px]"
                >
                  <div className="w-9 h-9 rounded-full bg-[#0BA94C]/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#0BA94C]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-xs font-semibold leading-tight">Malek · Coding</p>
                    <p className="text-[#ABAEB6] text-[11px] truncate">"pushed the auth page 🚀"</p>
                  </div>
                </motion.div>

                {/* Floating card — live session soon */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="hidden md:flex absolute top-[42%] -right-4 lg:-right-8 z-20 items-center gap-3 bg-gradient-to-br from-[#102D26]/95 to-[#061A15]/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-2xl border border-red-500/30 max-w-[230px]"
                >
                  <div className="w-9 h-9 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 relative">
                    <Radio className="w-4 h-4 text-red-400" />
                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-xs font-semibold leading-tight">Live in 5 min</p>
                    <p className="text-[#ABAEB6] text-[11px]">Coding · Session 3 of 6</p>
                  </div>
                </motion.div>

                {/* Floating card — project shipped */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="hidden md:flex absolute bottom-[14%] -left-2 lg:-left-12 z-20 items-center gap-3 bg-gradient-to-br from-[#102D26]/95 to-[#061A15]/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-2xl border border-[#0BA94C]/30 max-w-[220px]"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0BA94C]/20 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-[#0BA94C]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-xs font-semibold leading-tight">Project shipped</p>
                    <p className="text-[#ABAEB6] text-[11px]">+250 XP · Demo Day ready</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4-feature grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mt-16 pt-16 border-t border-white/5"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="rounded-2xl bg-gradient-to-br from-[#102D26]/60 to-[#061A15]/60 border border-[#ABAEB6]/10 p-6 lg:p-7"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0BA94C]/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#0BA94C]" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 leading-tight">{feature.title}</h4>
                <p className="text-sm text-[#ABAEB6] leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
