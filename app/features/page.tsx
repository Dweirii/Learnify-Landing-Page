import Navbar from "@/components/navbar"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#102D26] to-[#061A15]">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Features</h1>
          <p className="text-xl text-[#B3B3B3]">Discover what makes Learnify special</p>
        </div>
      </main>
    </div>
  )
}
