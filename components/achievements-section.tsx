"use client"

import type React from "react"
import { Globe, Medal, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

type Achievement = {
  title: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
  image?: string
}

interface AchievementsSectionProps {
  title?: string
  items?: Achievement[]
  className?: string
}

const defaultAchievements: Achievement[] = [
  {
    title: "Global Recognition",
    description: "Participated in the international CABSAT Conference.",
    icon: Globe,
    image: "/placeholder-33dfz.png",
  },
  {
    title: "UJIEC Competition – 3rd Place Winners",
    description: "Winning 3rd place, adding credibility and new opportunities.",
    icon: Medal,
    image: "/placeholder-6g2fi.png",
  },
  {
    title: "User Growth Milestone",
    description: "Acquired over 500 users in a single day upon launch.",
    icon: Users,
    image: "/placeholder-4u5jl.png",
  },
]

export default function AchievementsSection({
  title = "What Learnify achieved so far?",
  items = defaultAchievements,
  className = "",
}: AchievementsSectionProps) {
  return (
    <section className={`py-16 px-4 ${className}`} aria-labelledby="achievements-heading">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 id="achievements-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-[#0BA94C] mx-auto rounded-full"></div>
        </div>

        {/* Achievements Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {items.map((achievement, index) => {
            const IconComponent = achievement.icon || Globe

            return (
              <li key={index}>
                <Card className="rounded-2xl bg-[#061A15]/60 border border-white/10 shadow-sm hover:border-[#0BA94C]/40 transition-all duration-300 hover:transform hover:-translate-y-2 group overflow-hidden">
                  {achievement.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={achievement.image || "/placeholder.svg"}
                        alt={achievement.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061A15]/80 to-transparent" />
                      <div className="absolute top-4 right-4 bg-[#0BA94C] text-white rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5" aria-hidden="true" />
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="font-semibold text-white text-xl mb-3 leading-tight group-hover:text-[#0BA94C] transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-[#ABAEB6] text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </Card>
              </li>
            )
          })}
        </ul>

        {/* Closing line */}
        <div className="text-center">
          <p className="text-[#ABAEB6] text-sm">More achievements in About Us page…</p>
        </div>
      </div>
    </section>
  )
}
