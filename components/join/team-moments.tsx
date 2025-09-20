"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

interface Photo {
  src: string
  alt: string
  caption?: string
  location?: string
  date?: string
  tags?: string[]
}

const teamPhotos: Photo[] = [
  {
    src: "/team/team.png",
    alt: "Group photo of the Learnify team together",
    caption: "Learnify family",
    location: "Amman, JO",
    date: "2025",
    tags: ["team", "family"],
  },
  {
    src: "/team/team-dinner.png",
    alt: "Zaid working on Learnify project",
    caption: "A dinner with the team after a big win",
    location: "Amman, JO",
    date: "2025",
    tags: ["zaid", "coding"],
  },
  {
    src: "/team/team-lara.png",
    alt: "Lara representing Learnify",
    caption: "Representing University of Jordan",
    location: "Amman, JO",
    date: "2025",
    tags: ["lara", "leadership"],
  },
  {
    src: "/team/team-firas.png",
    alt: "Firas joining the Learnify build",
    caption: "New ideas every day",
    location: "Amman, JO",
    date: "2025",
    tags: ["firas", "developer"],
  },
  {
    src: "/team/team-hazem-zaid.png",
    alt: "Hazem and Zaid working together",
    caption: "Collaboration moments",
    location: "Amman, JO",
    date: "2025",
    tags: ["hazem", "zaid", "collaboration"],
  },
  {
    src: "/team/team-zaid-lara.png",
    alt: "Learnify team at Universities challenge",
    caption: "Universities challenge",
    location: "Sharjah, UAE",
    date: "2025",
    tags: ["zaid", "lara", "planning"],
  },
  {
    src: "/team/team-zaid-lara-ju.png",
    alt: "Zaid and Lara at JU event",
    caption: "Representing Learnify at JU",
    location: "Amman, JO",
    date: "2025",
    tags: ["event", "university"],
  },
  {
    src: "/team/team-dubai.png",
    alt: "Learnify team visiting Dubai",
    caption: "Trip to Dubai",
    location: "Dubai, UAE",
    date: "2025",
    tags: ["dubai", "travel"],
  },
  {
    src: "/team/team-burj-khalifa.png",
    alt: "Team photo in front of Burj Khalifa",
    caption: "Burj Khalifa moments",
    location: "Dubai, UAE",
    date: "2025",
    tags: ["dubai", "burjKhalifa"],
  },
  {
    src: "/team/team-aqaba.png",
    alt: "Learnify team at the beach in Aqaba",
    caption: "New things in Aqaba",
    location: "Aqaba, JO",
    date: "2025",
    tags: ["aqaba", "teamRetreat"],
  },
  {
    src: "/team/team-plane.png",
    alt: "Team on the way to a competition",
    caption: "Journey together",
    location: "Travel",
    date: "2025",
    tags: ["travel", "journey"],
  },
  {
    src: "/team/petra.png",
    alt: "Team trip to Petra",
    caption: "Petra heritage visit",
    location: "Petra, JO",
    date: "2025",
    tags: ["petra", "trip"],
  },
]


const collagePhotos = teamPhotos.slice(0, 5)

export default function TeamMoments() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % teamPhotos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + teamPhotos.length) % teamPhotos.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowRight") nextPhoto()
    if (e.key === "ArrowLeft") prevPhoto()
  }

  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Team Moments</h2>
          <p className="text-lg text-[#ABAEB6] max-w-2xl mx-auto">
            We're a family—learning, building, and celebrating together.
          </p>
        </div>

        {/* Collage Hero */}
        <div className="mb-12">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 max-w-4xl mx-auto">
            {collagePhotos.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-150"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
                {index === 0 && (
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                    Hack Night • Amman
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {teamPhotos.map((photo, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => openLightbox(index)}>
              <div className="relative aspect-[4/3] mb-3">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover rounded-2xl group-hover:scale-[1.02] group-hover:shadow-md/10 transition-all duration-150"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
              </div>
              {photo.caption && <h3 className="text-white font-medium text-sm mb-1">{photo.caption}</h3>}
              {(photo.location || photo.date) && (
                <p className="text-[#ABAEB6] text-xs mb-2">
                  {photo.location} {photo.location && photo.date && "•"} {photo.date}
                </p>
              )}
              {photo.tags && photo.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {photo.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full border border-white/10 text-[#ABAEB6]">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quote Strip */}
        <div className="text-center mb-8">
          <blockquote className="text-lg md:text-xl text-white italic mb-2">
            "At Learnify, we don't just ship code—we show up for each other."
          </blockquote>
          <cite className="text-[#ABAEB6] text-sm">— The Team</cite>
        </div>

        {/* CTA Row */}
        <div className="text-center">
          <div className="flex justify-center gap-6">
            <a href="#" className="text-[#ABAEB6] hover:text-[#0BA94C] text-sm transition-colors duration-200">
              See more on Instagram
            </a>
            <a href="#" className="text-[#ABAEB6] hover:text-[#0BA94C] text-sm transition-colors duration-200">
              Follow us on LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-[#0BA94C] transition-colors duration-200 z-10"
              aria-label="Close lightbox"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#0BA94C] transition-colors duration-200 z-10"
              aria-label="Previous photo"
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#0BA94C] transition-colors duration-200 z-10"
              aria-label="Next photo"
            >
              <ChevronRightIcon className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="relative aspect-[4/3] max-h-[80vh]">
              <Image
                src={teamPhotos[currentPhotoIndex].src || "/placeholder.svg"}
                alt={teamPhotos[currentPhotoIndex].alt}
                fill
                className="object-contain rounded-lg"
                sizes="90vw"
                priority
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              {teamPhotos[currentPhotoIndex].caption && (
                <h3 className="text-white font-medium text-lg mb-2">{teamPhotos[currentPhotoIndex].caption}</h3>
              )}
              {(teamPhotos[currentPhotoIndex].location || teamPhotos[currentPhotoIndex].date) && (
                <p className="text-[#ABAEB6] text-sm mb-2">
                  {teamPhotos[currentPhotoIndex].location}{" "}
                  {teamPhotos[currentPhotoIndex].location && teamPhotos[currentPhotoIndex].date && "•"}{" "}
                  {teamPhotos[currentPhotoIndex].date}
                </p>
              )}
              {teamPhotos[currentPhotoIndex].tags && teamPhotos[currentPhotoIndex].tags!.length > 0 && (
                <div className="flex justify-center flex-wrap gap-2">
                  {teamPhotos[currentPhotoIndex].tags!.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full border border-white/10 text-[#ABAEB6]">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
