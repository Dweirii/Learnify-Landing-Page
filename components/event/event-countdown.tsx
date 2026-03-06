"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const EVENT_DATE = new Date("2026-03-26T12:00:00.000Z")

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number
}

function getTimeLeft(): TimeLeft {
  const diff = EVENT_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    total: diff,
  }
}

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

function CountdownUnit({ value, label, index }: { value: number; label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative group">
        {/* outer glow */}
        <div className="absolute inset-0 rounded-2xl bg-[#0BA94C]/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* card */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-[#102D26]/80 border border-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-xl group-hover:border-[#0BA94C]/40 transition-all duration-300">
          {/* top shine */}
          <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/[0.06] to-transparent" />
          {/* bottom accent */}
          <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#0BA94C]/70 to-transparent" />
          <motion.span
            key={value}
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tabular-nums tracking-tight"
          >
            {pad(value)}
          </motion.span>
        </div>
      </div>
      <span className="text-[10px] sm:text-xs font-bold text-[#0BA94C] uppercase tracking-widest">
        {label}
      </span>
    </motion.div>
  )
}

function Separator({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      className="hidden sm:flex flex-col gap-2 items-center pb-8"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-[#0BA94C]/60 animate-pulse" style={{ animationDelay: "0ms" }} />
      <div className="w-1.5 h-1.5 rounded-full bg-[#0BA94C]/40 animate-pulse" style={{ animationDelay: "200ms" }} />
    </motion.div>
  )
}

export default function EventCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeLeft(getTimeLeft())
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) {
    return (
      <div className="flex flex-row justify-center gap-4 sm:gap-6 md:gap-8 py-4">
        {["Days", "Hours", "Mins", "Secs"].map((label) => (
          <div key={label} className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-[#102D26]/50 border border-white/5 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-[#0BA94C]/40 uppercase tracking-widest">{label}</span>
          </div>
        ))}
      </div>
    )
  }

  if (timeLeft && timeLeft.total <= 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-8 px-6 rounded-2xl bg-gradient-to-r from-[#0BA94C]/20 to-[#10B981]/10 border border-[#0BA94C]/30 text-center"
      >
        <p className="text-xl md:text-2xl font-black text-white tracking-tight">
          We are <span className="text-[#0BA94C]">live</span> — join us now!
        </p>
      </motion.div>
    )
  }

  const units = [
    { value: timeLeft?.days ?? 0, label: "Days" },
    { value: timeLeft?.hours ?? 0, label: "Hours" },
    { value: timeLeft?.minutes ?? 0, label: "Mins" },
    { value: timeLeft?.seconds ?? 0, label: "Secs" },
  ]

  return (
    <div className="flex flex-row items-center gap-2 sm:gap-4 md:gap-6 py-2">
      {units.map((u, i) => (
        <>
          <CountdownUnit key={u.label} value={u.value} label={u.label} index={i} />
          {i < units.length - 1 && <Separator key={`sep-${i}`} index={i} />}
        </>
      ))}
    </div>
  )
}
