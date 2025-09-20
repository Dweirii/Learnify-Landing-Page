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
    src: "/team-coding-session-at-office.jpg",
    alt: "Team members collaborating on code during a late-night coding session",
    caption: "Late-night coding session",
    location: "Amman, JO",
    date: "Feb 2025",
    tags: ["hacknight", "coding"],
  },
  {
    src: "/team-celebrating-product-launch.jpg",
    alt: "Team celebrating successful product launch with high-fives and smiles",
    caption: "Launch day high-fives",
    location: "Amman, JO",
    date: "Jan 2025",
    tags: ["launch", "celebration"],
  },
  {
    src: "/team-brainstorming-on-whiteboard.jpg",
    alt: "Team members brainstorming ideas on a whiteboard during strategy session",
    caption: "Strategy brainstorm",
    location: "Amman, JO",
    date: "Jan 2025",
    tags: ["planning", "strategy"],
  },
  {
    src: "/team-demo-day-presentation.jpg",
    alt: "Team presenting their work during demo day to audience",
    caption: "Demo day presentation",
    location: "Amman, JO",
    date: "Dec 2024",
    tags: ["demoDay", "presentation"],
  },
  {
    src: "/team-coffee-break-conversation.jpg",
    alt: "Team members having casual conversation during coffee break",
    caption: "Coffee break conversations",
    location: "Amman, JO",
    date: "Dec 2024",
    tags: ["coffee", "casual"],
  },
  {
    src: "/team-volunteer-community-event.jpg",
    alt: "Team volunteering at local community education event",
    caption: "Community volunteer day",
    location: "Amman, JO",
    date: "Nov 2024",
    tags: ["volunteer", "community"],
  },
  {
    src: "/team-pair-programming-session.jpg",
    alt: "Two team members pair programming on laptop together",
    caption: "Pair programming session",
    location: "Amman, JO",
    date: "Nov 2024",
    tags: ["coding", "collaboration"],
  },
  {
    src: "/team-celebrating-milestone-achievement.jpg",
    alt: "Team celebrating reaching user milestone with cake and smiles",
    caption: "Milestone celebration",
    location: "Amman, JO",
    date: "Oct 2024",
    tags: ["milestone", "celebration"],
  },
  {
    src: "/team-outdoor-team-building-activity.jpg",
    alt: "Team participating in outdoor team building activities",
    caption: "Team building day",
    location: "Dead Sea, JO",
    date: "Oct 2024",
    tags: ["teamBuilding", "outdoor"],
  },
  {
    src: "/team-working-late-night-pizza.jpg",
    alt: "Team working late with pizza boxes during crunch time",
    caption: "Pizza-fueled late nights",
    location: "Amman, JO",
    date: "Sep 2024",
    tags: ["lateNight", "food"],
  },
  {
    src: "/team-first-office-setup.jpg",
    alt: "Team setting up their first office space together",
    caption: "Setting up our first office",
    location: "Amman, JO",
    date: "Aug 2024",
    tags: ["office", "setup"],
  },
  {
    src: "/team-founders-first-meeting.jpg",
    alt: "Founding team members during their first official meeting",
    caption: "Where it all began",
    location: "Amman, JO",
    date: "Jul 2024",
    tags: ["founding", "beginning"],
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#061A15] to-[#102D26]">
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
