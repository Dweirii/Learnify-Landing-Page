"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// ======= Skeleton Components =======
const ImageSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] ${className}`} />
);

const PhotoCardSkeleton = () => (
  <div className="group cursor-pointer text-left rounded-2xl">
    <div className="relative aspect-[4/3] mb-3 rounded-2xl overflow-hidden">
      <ImageSkeleton className="w-full h-full" />
    </div>
    <div className="space-y-2">
      <ImageSkeleton className="h-4 w-3/4 rounded" />
      <ImageSkeleton className="h-3 w-1/2 rounded" />
      <div className="flex gap-1">
        <ImageSkeleton className="h-5 w-16 rounded-full" />
        <ImageSkeleton className="h-5 w-20 rounded-full" />
      </div>
    </div>
  </div>
);

const CollageSkeleton = () => (
  <div className="grid grid-cols-3 md:grid-cols-5 gap-2 max-w-4xl mx-auto">
    {Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className="relative aspect-square rounded-xl overflow-hidden">
        <ImageSkeleton className="w-full h-full" />
      </div>
    ))}
  </div>
);

// ======= Bunny CDN paths (root-level, as uploaded). Case-sensitive ".WebP" =======
const imagePaths = {
  petra: "https://learnify-landing-page.b-cdn.net/petra.WebP",
  teamAqaba: "https://learnify-landing-page.b-cdn.net/team-aqaba.WebP",
  teamBurjKhalifa: "https://learnify-landing-page.b-cdn.net/team-burj-khalifa.WebP",
  teamDinner: "https://learnify-landing-page.b-cdn.net/team-dinner.WebP",
  teamDubai: "https://learnify-landing-page.b-cdn.net/team-dubai.WebP",
  teamFiras: "https://learnify-landing-page.b-cdn.net/team-firas.WebP",
  teamHazemZaid: "https://learnify-landing-page.b-cdn.net/team-hazem-zaid.WebP",
  teamLara: "https://learnify-landing-page.b-cdn.net/team-lara.WebP",
  teamPlane: "https://learnify-landing-page.b-cdn.net/team-plane.WebP",
  teamZaidLaraJU: "https://learnify-landing-page.b-cdn.net/team-zaid-lara-ju.WebP",
  teamZaidLara: "https://learnify-landing-page.b-cdn.net/team-zaid-lara.WebP",
  teamZaid: "https://learnify-landing-page.b-cdn.net/team-zaid.WebP",
  team: "https://learnify-landing-page.b-cdn.net/team.WebP",
} as const;

// ======= Types =======
type Photo = {
  img: string;          // Bunny path like "/petra.WebP"
  alt: string;
  caption?: string;
  location?: string;
  date?: string;
  tags?: string[];
};

// ======= Data =======
const teamPhotos: Photo[] = [
  {
    img: imagePaths.team,
    alt: "Group photo of the Learnify team together",
    caption: "Learnify family",
    location: "Amman, JO",
    date: "2025",
    tags: ["team", "family"],
  },
  {
    img: imagePaths.teamDinner,
    alt: "Team dinner after a big win",
    caption: "A dinner with the team after a big win",
    location: "Amman, JO",
    date: "2025",
    tags: ["celebration", "dinner"],
  },
  {
    img: imagePaths.teamLara,
    alt: "Lara representing Learnify at a university",
    caption: "Representing University of Jordan",
    location: "Amman, JO",
    date: "2025",
    tags: ["lara", "leadership"],
  },
  {
    img: imagePaths.teamFiras,
    alt: "Firas contributing to the Learnify build",
    caption: "New ideas every day",
    location: "Amman, JO",
    date: "2025",
    tags: ["firas", "developer"],
  },
  {
    img: imagePaths.teamHazemZaid,
    alt: "Hazem and Zaid collaborating",
    caption: "Collaboration moments",
    location: "Amman, JO",
    date: "2025",
    tags: ["hazem", "zaid", "collaboration"],
  },
  {
    img: imagePaths.teamZaidLara,
    alt: "Zaid and Lara at the Universities Challenge",
    caption: "Universities challenge",
    location: "Sharjah, UAE",
    date: "2025",
    tags: ["competition", "challenge"],
  },
  {
    img: imagePaths.teamZaidLaraJU,
    alt: "Zaid and Lara at JU event",
    caption: "Representing Learnify at JU",
    location: "Amman, JO",
    date: "2025",
    tags: ["event", "university"],
  },
  {
    img: imagePaths.teamDubai,
    alt: "Learnify team visiting Dubai",
    caption: "Trip to Dubai",
    location: "Dubai, UAE",
    date: "2025",
    tags: ["dubai", "travel"],
  },
  {
    img: imagePaths.teamBurjKhalifa,
    alt: "Team photo in front of Burj Khalifa",
    caption: "Burj Khalifa moments",
    location: "Dubai, UAE",
    date: "2025",
    tags: ["dubai", "burjKhalifa"],
  },
  {
    img: imagePaths.teamAqaba,
    alt: "Learnify team at the beach in Aqaba",
    caption: "New things in Aqaba",
    location: "Aqaba, JO",
    date: "2025",
    tags: ["aqaba", "teamRetreat"],
  },
  {
    img: imagePaths.teamPlane,
    alt: "Team on the way to a competition",
    caption: "Journey together",
    location: "Travel",
    date: "2025",
    tags: ["travel", "journey"],
  },
  {
    img: imagePaths.petra,
    alt: "Team trip to Petra",
    caption: "Petra heritage visit",
    location: "Petra, JO",
    date: "2025",
    tags: ["petra", "trip"],
  },
];

const collagePhotos = teamPhotos.slice(0, 5);

export default function TeamMoments() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());
  const [collageLoaded, setCollageLoaded] = useState(false);
  const [collageImagesLoaded, setCollageImagesLoaded] = useState(0);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextPhoto = () => setCurrentPhotoIndex((p) => (p + 1) % teamPhotos.length);
  const prevPhoto = () => setCurrentPhotoIndex((p) => (p - 1 + teamPhotos.length) % teamPhotos.length);

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => new Set(prev).add(index));
  };

  const handleCollageImageLoad = () => {
    setCollageImagesLoaded(prev => {
      const newCount = prev + 1;
      if (newCount >= 2) { // Show content after 2 images load
        setCollageLoaded(true);
      }
      return newCount;
    });
  };

  const handleImageError = () => {
    setCollageLoaded(true);
  };

  // Auto-hide collage skeleton after a reasonable timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setCollageLoaded(true);
    }, 2000); // 2 second timeout

    return () => clearTimeout(timer);
  }, []);

  // Focus trap for accessibility
  useEffect(() => {
    if (!lightboxOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    lightboxRef.current?.focus();
    return () => previouslyFocused?.focus();
  }, [lightboxOpen]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextPhoto();
    if (e.key === "ArrowLeft") prevPhoto();
  };

  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Team Moments</h2>
          <p className="text-lg text-[#ABAEB6] max-w-2xl mx-auto">
            We’re a family—learning, building, and celebrating together.
          </p>
        </div>

        {/* Collage Hero */}
        <div className="mb-12">
          {!collageLoaded ? (
            <CollageSkeleton />
          ) : (
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 max-w-4xl mx-auto">
              {collagePhotos.map((photo, index) => (
                <button
                  key={index}
                  className="relative aspect-square group rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#0BA94C]"
                  onClick={() => openLightbox(index)}
                  aria-label={`Open ${photo.caption ?? photo.alt}`}
                >
                  <Image
                    src={photo.img}
                    alt={photo.alt}
                    fill
                    // Prioritize first 2–3 thumbs only
                    priority={index < 3}
                    fetchPriority={index < 3 ? "high" : "auto"}
                    quality={70}
                    sizes="(max-width: 768px) 33vw, 20vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-150"
                    onLoad={handleCollageImageLoad}
                    onError={handleImageError}
                  />
                  {index === 0 && (
                    <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                      Hack Night • Amman
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {teamPhotos.map((photo, index) => {
            const isLoaded = imagesLoaded.has(index);
            return (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#0BA94C] rounded-2xl"
                aria-label={`Open ${photo.caption ?? photo.alt}`}
              >
                <div className="relative aspect-[4/3] mb-3 rounded-2xl overflow-hidden [content-visibility:auto]">
                  {!isLoaded && <ImageSkeleton className="absolute inset-0 w-full h-full" />}
                  <Image
                    src={photo.img}
                    alt={photo.alt}
                    fill
                    quality={70}
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className={`object-cover group-hover:scale-[1.02] group-hover:shadow-md/10 transition-all duration-150 ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => handleImageLoad(index)}
                  />
                </div>
                <div className={`transition-opacity duration-300 ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}>
                  {photo.caption && <h3 className="text-white font-medium text-sm mb-1">{photo.caption}</h3>}
                  {(photo.location || photo.date) && (
                    <p className="text-[#ABAEB6] text-xs mb-2">
                      {photo.location} {photo.location && photo.date && "•"} {photo.date}
                    </p>
                  )}
                  {!!photo.tags?.length && (
                    <ul className="flex flex-wrap gap-1">
                      {photo.tags!.map((tag) => (
                        <li key={tag} className="text-xs px-2 py-1 rounded-full border border-white/10 text-[#ABAEB6]">
                          #{tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Quote Strip */}
        <figure className="text-center mb-8">
          <blockquote className="text-lg md:text-xl text-white italic mb-2">
            “At Learnify, we don’t just ship code—we show up for each other.”
          </blockquote>
          <figcaption className="text-[#ABAEB6] text-sm">— The Team</figcaption>
        </figure>

        {/* CTA Row */}
        <div className="text-center">
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com/learnifyjo" target="_blank" className="text-[#ABAEB6] hover:text-[#0BA94C] text-sm transition-colors">
              See more on Instagram
            </a>
            <a href="https://www.linkedin.com/company/learnify-livestream/" target="_blank" className="text-[#ABAEB6] hover:text-[#0BA94C] text-sm transition-colors">
              Follow us on LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-[#0BA94C] transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] rounded"
              aria-label="Close lightbox"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            {/* Prev/Next */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#0BA94C] transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] rounded"
              aria-label="Previous photo"
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#0BA94C] transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-[#0BA94C] rounded"
              aria-label="Next photo"
            >
              <ChevronRightIcon className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="relative aspect-[4/3] max-h-[80vh] rounded-lg overflow-hidden">
              {!imagesLoaded.has(currentPhotoIndex) && (
                <ImageSkeleton className="absolute inset-0 w-full h-full" />
              )}
              <Image
                src={teamPhotos[currentPhotoIndex].img}
                alt={teamPhotos[currentPhotoIndex].alt}
                fill
                // Larger, better quality in lightbox; Bunny returns AVIF/WebP at runtime
                quality={80}
                sizes="90vw"
                className={`object-contain transition-opacity duration-300 ${!imagesLoaded.has(currentPhotoIndex) ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => handleImageLoad(currentPhotoIndex)}
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              {!imagesLoaded.has(currentPhotoIndex) ? (
                <div className="space-y-2">
                  <ImageSkeleton className="h-6 w-3/4 mx-auto rounded" />
                  <ImageSkeleton className="h-4 w-1/2 mx-auto rounded" />
                  <div className="flex justify-center gap-2">
                    <ImageSkeleton className="h-6 w-16 rounded-full" />
                    <ImageSkeleton className="h-6 w-20 rounded-full" />
                  </div>
                </div>
              ) : (
                <>
                  {teamPhotos[currentPhotoIndex].caption && (
                    <h3 className="text-white font-medium text-lg mb-2">
                      {teamPhotos[currentPhotoIndex].caption}
                    </h3>
                  )}
                  {(teamPhotos[currentPhotoIndex].location || teamPhotos[currentPhotoIndex].date) && (
                    <p className="text-[#ABAEB6] text-sm mb-2">
                      {teamPhotos[currentPhotoIndex].location}
                      {teamPhotos[currentPhotoIndex].location && teamPhotos[currentPhotoIndex].date && " • "}
                      {teamPhotos[currentPhotoIndex].date}
                    </p>
                  )}
                  {!!teamPhotos[currentPhotoIndex].tags?.length && (
                    <ul className="flex justify-center flex-wrap gap-2">
                      {teamPhotos[currentPhotoIndex].tags!.map((tag) => (
                        <li key={tag} className="text-xs px-2 py-1 rounded-full border border-white/10 text-[#ABAEB6]">
                          #{tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
