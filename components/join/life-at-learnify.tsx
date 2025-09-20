"use client"

import { HeartIcon, LightBulbIcon, RocketLaunchIcon, FlagIcon } from "@heroicons/react/24/outline"

const values = [
  {
    icon: HeartIcon,
    title: "Collaboration",
    description: "We move fast together: open feedback, clear ownership, shared wins.",
  },
  {
    icon: LightBulbIcon,
    title: "Growth",
    description: "Learn by doing, get mentored, and level up with real responsibility.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Creativity",
    description: "Experiment, prototype, and ship—then iterate based on signal.",
  },
  {
    icon: FlagIcon,
    title: "Purpose",
    description: "Build impact for learners in MENA and beyond; outcomes over vanity.",
  },
]

export default function LifeAtLearnify() {
  return (
    <section className="relative bg-gradient-to-b from-[#061A15] to-[#102D26] py-16">
      {/* Subtle background graphic */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0BA94C]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Life at Learnify</h2>
          <p className="text-lg text-[#ABAEB6] max-w-2xl mx-auto leading-relaxed">
            We're builders and learners on a mission. At Learnify, collaboration, growth, creativity, and purpose drive
            everything we ship.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {values.map((value, index) => (
            <article
              key={value.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-colors duration-200 group"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-[#0BA94C] rounded-full flex items-center justify-center">
                  <value.icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-[#ABAEB6] leading-relaxed">{value.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Micro Graphic Row */}
        <div className="flex justify-center">
          <div className="flex space-x-2 opacity-20">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full" />
            ))}
          </div>
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-8">
          <a
            href="/about"
            className="inline-flex items-center text-[#ABAEB6] hover:text-white transition-colors duration-200 text-sm"
          >
            See how we work
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
