"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import Footer from "@/components/footer"

const faqData = [
  {
    question: "What makes Learnify different from other learning platforms?",
    answer:
      "Learnify combines live interactive sessions, project-based tracks, and skill-building tracks in a gamified way within a distraction-free educational community. Unlike other platforms, all content on Learnify is strictly educational, designed to bridge the gap between academic study and real-world jobs.",
  },
  {
    question: "Is Learnify free to use?",
    answer:
      "Yes. Learnify follows a freemium model you can access live sessions and learning content for free. Premium features and subscription plans will be available soon at affordable prices.",
  },
  {
    question: "How does the gamified system work?",
    answer:
      "We believe that healthy competition is a powerful motivator for both learners and streamers. On Learnify, you earn points, badges, and achievements through your contributions, progress, and active participation. This system keeps you motivated, makes learning fun, and gives you recognition within the platform.",
  },
  {
    question: "How do I become a streamer on Learnify?",
    answer:
      "If you are interested in sharing your knowledge or skills, simply sign up for free and follow the steps outlined in our Features page under Live Sessions.",
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "Not at all. Whether you are a beginner or advanced, Learnify is for everyone to gain experience in fields you are passionate about, share your knowledge and skills, or even learn together with others.",
  },
  {
    question: "When will Learnify officially launch?",
    answer:
      "After launching the Learnify MVP in February 2025, we are currently working on improving the platform's performance and features. You can join us today to be among the first to experience Learnify as we roll out the full launch.",
  },
  {
    question: "How do I know which content or skill is right for me?",
    answer:
      "Learnify's AI recommendation system is designed to guide you. It analyzes your interests and goals to recommend sessions, tracks, and content tailored to your needs helping you discover what's most relevant for you.",
  },
  {
    question: "Can I access Learnify outside MENA?",
    answer:
      "Yes! While Learnify is designed with a focus on MENA learners, it can be accessed worldwide. Anyone from anywhere can join and benefit from our platform.",
  },
  {
    question: "Why is Learnify a community-driven platform?",
    answer:
      "The Learnify community is built to bridge the gap between learners from different fields and majors. Whether you share the same interests or want to collaborate across disciplines, our community empowers you to connect, exchange knowledge, and grow together.",
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-[#0BA94C]/30 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
      >
        <h3 className="text-lg md:text-xl font-semibold text-white text-balance pr-4">{question}</h3>
        <ChevronDownIcon
          className={`w-5 h-5 md:w-6 md:h-6 text-[#0BA94C] transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 md:px-6 pb-4 md:pb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#0BA94C]/30 to-transparent mb-4"></div>
          <p className="text-[#ABAEB6] leading-relaxed text-sm md:text-base">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#061A15] to-[#102D26]">
      <Navbar />
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 text-balance">
            Got Questions? We've Got <span className="text-[#0BA94C]">Answers</span>.
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#ABAEB6] text-pretty max-w-2xl mx-auto">
            Here are some of the most common questions to help you understand how Learnify works.
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
