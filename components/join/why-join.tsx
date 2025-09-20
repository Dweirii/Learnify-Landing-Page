import { RocketLaunchIcon, UserGroupIcon, TrophyIcon, GlobeAltIcon } from "@heroicons/react/24/outline"

export default function WhyJoin() {
  const highlights = [
    {
      icon: RocketLaunchIcon,
      title: "Build impactful products that change how youth learn.",
    },
    {
      icon: UserGroupIcon,
      title: "Work in a collaborative, growth-driven environment.",
    },
    {
      icon: TrophyIcon,
      title: "Empowerment and recognition for every contribution.",
    },
    {
      icon: GlobeAltIcon,
      title: "Be part of a pioneering edtech movement in MENA.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#061A15]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why <span className="text-[#0BA94C]">Join</span> Us</h2>
          <p className="text-lg md:text-xl text-[#ABAEB6] leading-relaxed max-w-3xl mx-auto">
            At Learnify, our mission is to bridge the gap between education and real-world jobs. We believe in
            empowering learners and builders to create meaningful change.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon
            return (
              <li key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0BA94C]/10 rounded-lg flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-[#0BA94C]" aria-hidden="true" />
                </div>
                <p className="text-white font-medium leading-relaxed">{highlight.title}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
