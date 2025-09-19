"use client"
import { useEffect, useState } from "react"

interface TractionProps {
  bannerSrc?: string
}

export default function Traction({ bannerSrc = "/traction.jpg" }: TractionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const timelineItems = [
    {
      date: "Sep 2024",
      title: "Ideation Stage",
      description: "Brainstorming and shaping the project vision.",
      isUpcoming: false,
    },
    {
      date: "Dec 2024",
      title: "MVP Development Process",
      description: "Building a core version of the product for testing.",
      isUpcoming: false,
    },
    {
      date: "Feb 2025",
      title: "IEEE Pitchinno Participation + Launch Event",
      description: "Pitching to judges and investors + product launch event.",
      isUpcoming: false,
    },
    {
      date: "May 2025",
      title: "CABSAT Exhibition (Dubai)",
      description: "Showcasing the project to connect with experts and investors.",
      isUpcoming: false,
    },
    {
      date: "May 2025",
      title: "UJIEC Competition – 3rd Place Winners",
      description: "Winning 3rd place, adding credibility and new opportunities.",
      isUpcoming: false,
    },
    {
      date: "Aug 2025",
      title: "Innovation Village Exhibition",
      description: "Chosen as one of the top innovative projects to participate.",
      isUpcoming: false,
    },
    {
      date: "Sep 2025",
      title: "Product Goes Live",
      description: "Official market launch of the product.",
      isUpcoming: true,
    },
    {
      date: "Nov 2025",
      title: "Product Phase 2",
      description: "Rollout of new features and improvements based on feedback.",
      isUpcoming: true,
    },
  ]

  return (
    <section
      className={`max-w-6xl mx-auto mt-10 md:mt-22 relative transition-all duration-1000 delay-1400 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
        <div className="flex items-center justify-center mb-16">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/10"></div>
            <div className="mx-4 w-2 h-2 bg-[#0BA94C] rounded-full animate-pulse"></div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/10"></div>
        </div>

      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          <span className="text-white">
            Learnify Traction
          </span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <ol className="space-y-8">
            {timelineItems.map((item, index) => (
              <li
                key={index}
                className="group relative flex items-start gap-4 hover:bg-white/5 rounded-xl p-4 -m-4 transition-all duration-300"
              >
                {/* Timeline Rail & Dot */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-[#0BA94C] rounded-full border-2 border-[#061A15] group-hover:scale-110 transition-transform duration-300 relative z-10"></div>
                  {index < timelineItems.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-[#0BA94C] to-[#0BA94C]/30 mt-2 group-hover:from-[#0BA94C] group-hover:to-[#0BA94C]/50 transition-colors duration-300"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <time className="text-sm font-medium text-[#0BA94C]" dateTime={item.date}>
                      {item.date}
                    </time>
                    {item.isUpcoming && (
                      <span className="px-2 py-1 text-xs font-medium bg-[#0BA94C] text-white rounded-full">
                        Upcoming
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[#ABAEB6] leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Central Rail */}
            <div className="absolute left-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0BA94C] to-[#0BA94C]/30"></div>

            <ol className="space-y-12">
              {timelineItems.map((item, index) => (
                <li
                  key={index}
                  className="group relative grid grid-cols-4 gap-8 items-center hover:bg-white/5 rounded-xl p-6 -m-6 transition-all duration-300"
                >
                  {/* Date Column */}
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <time className="text-lg font-medium text-[#0BA94C]" dateTime={item.date}>
                        {item.date}
                      </time>
                      {item.isUpcoming && (
                        <span className="px-2 py-1 text-xs font-medium bg-[#0BA94C] text-white rounded-full">
                          Upcoming
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="flex justify-center">
                    <div className="w-4 h-4 bg-[#0BA94C] rounded-full border-2 border-[#061A15] group-hover:scale-125 transition-transform duration-300 relative z-10"></div>
                  </div>

                  {/* Content */}
                  <div className="col-span-2">
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-[#ABAEB6] leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Closing Line */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-[#ABAEB6] italic">More achievements are coming soon.</p>
        </div>
      </div>
    </section>
  )
}
