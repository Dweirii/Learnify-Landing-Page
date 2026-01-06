"use client"

import type { ReactNode } from "react"
import { Card } from "@/components/ui/card"
import { Podcast as Broadcast, Gamepad2, TrendingUp, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface OverviewSectionProps {
  title?: string
  copy?: string
  problemTitle?: string
  stats?: { value: string; title: string; description: string; icon?: ReactNode }[]
  className?: string
}

interface StatCardProps {
  value: string
  title: string
  description: string
  icon?: ReactNode
}

function StatCard({ value, title, description, icon }: StatCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const percentage = Number.parseInt(value.replace("%", ""))
  const remaining = 100 - percentage

  const pieData = [
    { name: "Percentage", value: percentage, color: "#0BA94C" },
    { name: "Remaining", value: remaining, color: "#102D26" },
  ]

  return (
    <Card className="bg-[#102D26] border-white/10 rounded-2xl p-6 shadow-lg relative overflow-hidden transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-[#0BA94C]/10 rounded-full flex items-center justify-center text-[#0BA94C]">
          <div className="w-5 h-5">{icon}</div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-4 mb-2">
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="w-12 h-12">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={15}
                    outerRadius={22}
                    startAngle={90}
                    endAngle={450}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-white mb-1">{title}</h4>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-xs text-[#0BA94C] hover:text-[#0BA94C]/80 transition-colors w-fit"
            >
              {isExpanded ? "Show less" : "Read more"}
              <ChevronDown className={cn("w-3 h-3 transition-transform duration-200", isExpanded && "rotate-180")} />
            </button>
            <div
              className={cn(
                "grid transition-all duration-200 ease-in-out",
                isExpanded ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden text-xs text-[#ABAEB6] leading-relaxed">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-6 bottom-6 w-1 bg-[#0BA94C] rounded-r-full opacity-60" />
    </Card>
  )
}

export default function OverviewSection({
  title = "New Learning Preference",
  copy = "Learnify revolutionizes education in the Arab world by combining live-streaming technology with interactive learning experiences. Our platform connects passionate educators with eager learners through real-time engagement, practical skill development, and community-driven knowledge sharing.\n\nUnlike traditional e-learning platforms that rely on pre-recorded content, Learnify emphasizes live interaction, immediate feedback, and collaborative learning environments. This approach addresses the growing demand for dynamic, engaging educational experiences that prepare students for today's competitive job market.",
  stats = [
    {
      value: "77%",
      title: "Real-Time Content",
      description: "Learners prefer live, interactive sessions over pre-recorded content.",
      icon: <Broadcast className="w-full h-full" />,
    },
    {
      value: "78%",
      title: "Gen Z Learning ",
      description: "Gen Z favors engaging, social, and experience-based learning environments.",
      icon: <Gamepad2 className="w-full h-full" />,
    },
    {
      value: "85%",
      title: "Skills Gap",
      description: "Most graduates lack job-ready, practical skills required by the market.",
      icon: <TrendingUp className="w-full h-full" />,
    },
    {
      value: "92%",
      title: "Community Interaction",
      description: "Learning outcomes improve significantly in strong interactive communities.",
      icon: <Users className="w-full h-full" />,
    },
  ],
  className,
}: OverviewSectionProps) {
  return (
    <section
      aria-labelledby="overview-heading"
      className={cn("relative py-14 md:py-14 lg:py-24", "bg-transparent", className)}
    >

      <div className="relative container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Overview Content */}
          <div className="space-y-6">
            <h2 id="overview-heading" className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {title}
            </h2>

            <div className="prose prose-lg max-w-none">
              {copy.split("\n").map(
                (paragraph, index) =>
                  paragraph.trim() && (
                    <p key={index} className="text-lg text-[#ABAEB6] leading-relaxed mb-4 last:mb-0">
                      {paragraph.trim()}
                    </p>
                  ),
              )}
            </div>
          </div>

          {/* Right Column: Problem Stats */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">The <span className="text-[#0BA94C]">Learning Gap</span> Challenge</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
              {stats.map((stat, index) => (
                <div key={index} className="relative">
                  <StatCard value={stat.value} title={stat.title} description={stat.description} icon={stat.icon} />
                </div>
              ))}
            </div>

            <div className="text-xs text-[#ABAEB6]/60 mt-4">
              * Statistics sourced from industry research reports and educational surveys
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
