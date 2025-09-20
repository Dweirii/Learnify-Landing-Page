import Image from "next/image"

export default function UniversitySupport() {
  return (
    <section aria-labelledby="support-heading" className="py-16 md:py-20 px-4 bg-transparent">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Header */}
        <h2 id="support-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
          Supported by the <span className="text-[#0BA94C]">University of Jordan</span> & <span className="text-[#0BA94C]">UJIEC</span>
        </h2>

        <p className="text-base md:text-lg text-[#ABAEB6] mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          Learnify is proudly supported by the University of Jordan’s Innovation & Entrepreneurship Center (UJIEC),
          empowering students and startups to bring ideas into reality.
        </p>

        {/* Partnership Badge */}
        <div className="inline-flex items-center gap-2 bg-[#0BA94C]/10 border border-[#0BA94C]/25 rounded-full px-4 py-2 mb-10">
          <span className="w-2 h-2 bg-[#0BA94C] rounded-full" aria-hidden="true" />
          <span className="text-[#0BA94C] text-sm font-medium">Official Partnership</span>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          {/* University of Jordan */}
          <figure className="group text-center">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 hover:border-white/20">
              <Image
                src="/university/University_of_Jordan_Logo.png"
                alt="University of Jordan logo"
                width={260}
                height={120}
                className="h-16 md:h-20 w-auto mx-auto mb-4 object-contain opacity-95 group-hover:opacity-100 transition-opacity"
                priority={false}
              />
              <figcaption>
                <h3 className="text-white font-semibold text-lg">University of Jordan</h3>
                <p className="text-[#ABAEB6] text-sm mt-1">Leading Academic Institution</p>
              </figcaption>
            </div>
          </figure>

          {/* UJIEC */}
          <figure className="group text-center">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 hover:border-white/20">
              <Image
                src="/university/ujiec.png"
                alt="UJIEC — University of Jordan Innovation & Entrepreneurship Center logo"
                width={260}
                height={120}
                className="h-16 md:h-20 w-auto mx-auto mb-4 object-contain opacity-95 group-hover:opacity-100 transition-opacity"
                priority={false}
              />
              <figcaption>
                <h3 className="text-white font-semibold text-lg">UJIEC</h3>
                <p className="text-[#ABAEB6] text-sm mt-1">Innovation & Entrepreneurship Center</p>
              </figcaption>
            </div>
          </figure>
        </div>

        {/* Partnership Statement */}
        <div className="mt-10 md:mt-12 p-5 md:p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
          <p className="text-[#ABAEB6] text-sm italic">
            “Through this partnership, we’re committed to fostering innovation and supporting the next generation of
            entrepreneurs at the University of Jordan.”
          </p>
        </div>
      </div>
    </section>
  )
}
