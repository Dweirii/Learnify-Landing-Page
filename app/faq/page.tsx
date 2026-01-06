import type { Metadata } from "next"
import FAQContent from "./faq-content"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Learn more about Learnify's unique approach to live learning, gamification, and bridging the skill gap in the Arab world. Get answers to common questions about our platform.",
  openGraph: {
    title: "Learnify FAQ | Help & Support",
    description: "Got questions? We've got answers. Explore our FAQ to understand how Learnify's live-streaming and project-based learning work.",
    url: "https://learnify-live.vercel.app/faq",
  }
}

export default function FAQPage() {
  return <FAQContent />
}
