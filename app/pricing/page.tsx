"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Check, ArrowRight, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061A15] via-[#102D26] to-[#061A15] text-white selection:bg-[#0BA94C] selection:text-white">
      <Navbar />
      
      <main className="relative pt-24 pb-16">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0BA94C]/10 rounded-full blur-[100px] opacity-30" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0BA94C]/10 rounded-full blur-[100px] opacity-30" />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Choose Your <span className="text-[#0BA94C]">Path</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Whether you're here to share knowledge, learn, or support the community, we have a plan for you.
            </p>
          </div>

          <Tabs defaultValue="basic" className="w-full max-w-7xl mx-auto">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-xl grid-cols-4 bg-white/5 border border-white/10 text-white">
                <TabsTrigger value="free" className="data-[state=active]:bg-[#0BA94C] data-[state=active]:text-white text-white/70 hover:text-white">Free</TabsTrigger>
                <TabsTrigger value="basic" className="data-[state=active]:bg-[#0BA94C] data-[state=active]:text-white text-white/70 hover:text-white">Basic</TabsTrigger>
                <TabsTrigger value="premium" className="data-[state=active]:bg-[#0BA94C] data-[state=active]:text-white text-white/70 hover:text-white">Premium</TabsTrigger>
                <TabsTrigger value="ultimate" className="data-[state=active]:bg-[#0BA94C] data-[state=active]:text-white text-white/70 hover:text-white">Ultimate</TabsTrigger>
              </TabsList>
            </div>

            {/* FREE PLAN CONTENT */}
            <TabsContent value="free" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <PricingCard 
                  title="Community"
                  subtitle="Student Societies"
                  price="$0"
                  features={[
                    "No Subscription Fee",
                    "Donations Only",
                    "Private Live Sessions (TBD)",
                    "Longer Live Sessions"
                  ]}
                  buttonText="Get Started"
                  highlighted={false}
                  flipContent={{
                    subtitle: "For Student Communities & Non-Profit Initiatives",
                    body: "Built for student societies, youth communities, and initiatives where impact comes before profit. Community exists to empower learning, collaboration, and knowledge sharing without financial pressure because education should stay accessible.",
                    idealFor: ["Student societies", "Youth initiatives", "Non-profit learning communities"]
                  }}
                />
                <PricingCard 
                  title="Creator"
                  subtitle="Content Creators"
                  price="$0"
                  features={[
                    "Limited Streaming",
                    "Standard Quality",
                    "Community Support"
                  ]}
                  buttonText="Get Started"
                  highlighted={true}
                  flipContent={{
                    subtitle: "For Individual Content Creators",
                    body: "Made for individuals with a skill, an experience, or a story worth sharing. Creator is for passionate people, not companies, who want to teach, inspire, and grow a meaningful audience while earning from their knowledge.",
                    idealFor: ["Independent educators", "Skilled individuals", "Knowledge-driven creators"]
                  }}
                />
                <PricingCard 
                  title="Business"
                  subtitle="For Companies"
                  price="$49.99"
                  features={[
                    "All Individual Features",
                    "Private Live Sessions (up to 20)",
                    "Extra Extra Long Live Sessions",
                    "License Included",
                    "Less Commission",
                    "First In Learnify SEO",
                    "Better Quality Streaming"
                  ]}
                  buttonText="Go Business"
                  highlighted={false}
                  disabled={true}
                  flipContent={{
                    subtitle: "For Companies & Professional Organizations",
                    body: "Designed for companies that need a reliable, scalable, and high-quality learning infrastructure. Business unlocks Learnify’s advanced technology to deliver professional-grade live experiences, private sessions, and branded learning environments.",
                    idealFor: ["Companies", "Training providers", "Professional organizations"]
                  }}
                />
                <PricingCard 
                  title="Learnify Perks+"
                  subtitle="For Viewers"
                  price="$0"
                  features={[
                    "Access to Community",
                    "Standard Viewing",
                    "Basic Profile"
                  ]}
                  buttonText="Join Free"
                  highlighted={false}
                  flipContent={{
                    subtitle: "For Viewers Who Want More",
                    body: "Learnify Perks+ is for viewers who want a cleaner, richer experience, no ads, exclusive discounts, and early access to special content. More than watching, Perks+ members become part of a movement that supports creators, students, and meaningful learning.",
                    idealFor: ["Active viewers", "Learning supporters", "Community-driven members"]
                  }}
                />
              </div>
            </TabsContent>

            {/* BASIC PLAN CONTENT */}
            <TabsContent value="basic" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <PricingCard 
                  title="Community"
                  subtitle="Student Societies"
                  price="$0"
                  features={[
                    "No Subscription Fee",
                    "Donations Only",
                    "Private Live Sessions (TBD)",
                    "Longer Live Sessions"
                  ]}
                  buttonText="Get Started"
                  highlighted={false}
                  disabled={true}
                  flipContent={{
                    subtitle: "For Student Communities & Non-Profit Initiatives",
                    body: "Built for student societies, youth communities, and initiatives where impact comes before profit. Community exists to empower learning, collaboration, and knowledge sharing without financial pressure because education should stay accessible.",
                    idealFor: ["Student societies", "Youth initiatives", "Non-profit learning communities"]
                  }}
                />
                <PricingCard 
                  title="Creator"
                  subtitle="Content Creators"
                  price="$9.99"
                  features={[
                    "Receive Donations",
                    "Allow User Subscriptions",
                    "Private Live Sessions (up to 5)",
                    "Extra Long Live Sessions",
                    "Recorded Live Sessions",
                    "Downloadable Live Sessions",
                    "XP Booster"
                  ]}
                  buttonText="Go Creator"
                  highlighted={true}
                  flipContent={{
                    subtitle: "For Individual Content Creators",
                    body: "Made for individuals with a skill, an experience, or a story worth sharing. Creator is for passionate people, not companies, who want to teach, inspire, and grow a meaningful audience while earning from their knowledge.",
                    idealFor: ["Independent educators", "Skilled individuals", "Knowledge-driven creators"]
                  }}
                />
                <PricingCard 
                  title="Business"
                  subtitle="For Companies"
                  price="$49.99"
                  features={[
                    "All Individual Features",
                    "Private Live Sessions (up to 20)",
                    "Extra Extra Long Live Sessions",
                    "License Included",
                    "Less Commission",
                    "First In Learnify SEO",
                    "Better Quality Streaming"
                  ]}
                  buttonText="Go Business"
                  highlighted={false}
                  flipContent={{
                    subtitle: "For Companies & Professional Organizations",
                    body: "Designed for companies that need a reliable, scalable, and high-quality learning infrastructure. Business unlocks Learnify’s advanced technology to deliver professional-grade live experiences, private sessions, and branded learning environments.",
                    idealFor: ["Companies", "Training providers", "Professional organizations"]
                  }}
                />
                <PricingCard 
                  title="Learnify Perks+"
                  subtitle="For Viewers"
                  price="$4.99"
                  features={[
                    "25% Discount on 3 Streamers",
                    "Support Learnify Team",
                    "Better Quality Viewing",
                    "Save 1 Live Stream",
                    "XP Booster (3 days)"
                  ]}
                  buttonText="Become a Member"
                  highlighted={false}
                  flipContent={{
                    subtitle: "For Viewers Who Want More",
                    body: "Learnify Perks+ is for viewers who want a cleaner, richer experience, no ads, exclusive discounts, and early access to special content. More than watching, Perks+ members become part of a movement that supports creators, students, and meaningful learning.",
                    idealFor: ["Active viewers", "Learning supporters", "Community-driven members"]
                  }}
                />
              </div>
            </TabsContent>

            {/* PREMIUM PLAN CONTENT */}
            <TabsContent value="premium" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <PricingCard 
                  title="Community"
                  subtitle="Student Societies"
                  price="$0"
                  features={[
                    "No Subscription Fee",
                    "Donations Only",
                    "Private Live Sessions (TBD)",
                    "Longer Live Sessions"
                  ]}
                  buttonText="Get Started"
                  highlighted={false}
                  disabled={true}
                  flipContent={{
                    subtitle: "For Student Communities & Non-Profit Initiatives",
                    body: "Built for student societies, youth communities, and initiatives where impact comes before profit. Community exists to empower learning, collaboration, and knowledge sharing without financial pressure because education should stay accessible.",
                    idealFor: ["Student societies", "Youth initiatives", "Non-profit learning communities"]
                  }}
                />
                <PricingCard 
                  title="Creator"
                  subtitle="Content Creators"
                  price="$12.99"
                  features={[
                    "All Basic Features Included",
                    "Higher Priority Support",
                    "Extended Recording Storage",
                    "Enhanced Analytics"
                  ]}
                  buttonText="Upgrade Creator"
                  highlighted={true}
                  flipContent={{
                    subtitle: "For Individual Content Creators",
                    body: "Made for individuals with a skill, an experience, or a story worth sharing. Creator is for passionate people, not companies, who want to teach, inspire, and grow a meaningful audience while earning from their knowledge.",
                    idealFor: ["Independent educators", "Skilled individuals", "Knowledge-driven creators"]
                  }}
                />
                <PricingCard 
                  title="Business"
                  subtitle="For Companies"
                  price="$74.99"
                  features={[
                    "All Basic Features Included",
                    "Lower Commission Rates",
                    "Priority SEO Listing",
                    "Advanced Analytics Dashboard"
                  ]}
                  buttonText="Upgrade Business"
                  highlighted={false}
                  flipContent={{
                    subtitle: "For Companies & Professional Organizations",
                    body: "Designed for companies that need a reliable, scalable, and high-quality learning infrastructure. Business unlocks Learnify’s advanced technology to deliver professional-grade live experiences, private sessions, and branded learning environments.",
                    idealFor: ["Companies", "Training providers", "Professional organizations"]
                  }}
                />
                <PricingCard 
                  title="Learnify Perks+"
                  subtitle="For Viewers"
                  price="$6.99"
                  features={[
                    "30% Discount on 5 Streamers",
                    "Support Learnify Team",
                    "Better Quality Viewing",
                    "Save up to 2 Live Streams",
                    "XP Booster (1 week)"
                  ]}
                  buttonText="Upgrade Perks"
                  highlighted={false}
                  flipContent={{
                    subtitle: "For Viewers Who Want More",
                    body: "Learnify Perks+ is for viewers who want a cleaner, richer experience, no ads, exclusive discounts, and early access to special content. More than watching, Perks+ members become part of a movement that supports creators, students, and meaningful learning.",
                    idealFor: ["Active viewers", "Learning supporters", "Community-driven members"]
                  }}
                />
              </div>
            </TabsContent>

            {/* ULTIMATE PLAN CONTENT */}
            <TabsContent value="ultimate" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <PricingCard 
                  title="Community"
                  subtitle="Student Societies"
                  price="$0"
                  features={[
                    "No Subscription Fee",
                    "Donations Only",
                    "Private Live Sessions (TBD)",
                    "Longer Live Sessions"
                  ]}
                  buttonText="Get Started"
                  highlighted={false}
                  disabled={true}
                  flipContent={{
                    subtitle: "For Student Communities & Non-Profit Initiatives",
                    body: "Built for student societies, youth communities, and initiatives where impact comes before profit. Community exists to empower learning, collaboration, and knowledge sharing without financial pressure because education should stay accessible.",
                    idealFor: ["Student societies", "Youth initiatives", "Non-profit learning communities"]
                  }}
                />
                <PricingCard 
                  title="Creator"
                  subtitle="Content Creators"
                  price="$14.99"
                  features={[
                    "All Premium Features Included",
                    "Top Tier Support",
                    "Unlimited Recording Storage",
                    "Maximum XP Boosts"
                  ]}
                  buttonText="Go Ultimate"
                  highlighted={true}
                  flipContent={{
                    subtitle: "For Individual Content Creators",
                    body: "Made for individuals with a skill, an experience, or a story worth sharing. Creator is for passionate people, not companies, who want to teach, inspire, and grow a meaningful audience while earning from their knowledge.",
                    idealFor: ["Independent educators", "Skilled individuals", "Knowledge-driven creators"]
                  }}
                />
                <PricingCard 
                  title="Business"
                  subtitle="For Companies"
                  price="$99.99"
                  features={[
                    "All Premium Features Included",
                    "Lowest Commission Rates",
                    "Top SEO Placement",
                    "White-glove Support"
                  ]}
                  buttonText="Go Ultimate"
                  highlighted={false}
                  flipContent={{
                    subtitle: "For Companies & Professional Organizations",
                    body: "Designed for companies that need a reliable, scalable, and high-quality learning infrastructure. Business unlocks Learnify’s advanced technology to deliver professional-grade live experiences, private sessions, and branded learning environments.",
                    idealFor: ["Companies", "Training providers", "Professional organizations"]
                  }}
                />
                <PricingCard 
                  title="Learnify Perks+"
                  subtitle="For Viewers"
                  price="$9.99"
                  features={[
                    "35% Discount on 9 Streamers",
                    "Support Learnify Team",
                    "Save up to 3 Live Streams",
                    "Special Profile Character",
                    "Different Super Chat Style",
                    "XP Booster (1 month)"
                  ]}
                  buttonText="Go Ultimate"
                  highlighted={false}
                  flipContent={{
                    subtitle: "For Viewers Who Want More",
                    body: "Learnify Perks+ is for viewers who want a cleaner, richer experience, no ads, exclusive discounts, and early access to special content. More than watching, Perks+ members become part of a movement that supports creators, students, and meaningful learning.",
                    idealFor: ["Active viewers", "Learning supporters", "Community-driven members"]
                  }}
                />
            </div>
            </TabsContent>
          </Tabs>

          {/* ADDITIONAL INFO SECTION */}
          <div className="mt-24 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Viewer Subscriptions & Details</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Viewer Subscriptions Table */}
              <Card className="bg-white/5 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="text-xl">Subscribe to Creators</CardTitle>
                  <CardDescription className="text-gray-400">
                    Monthly cost to subscribe to your favorite streamers based on their tier.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-gray-400 uppercase border-b border-white/10">
                        <tr>
                          <th className="px-4 py-3">Tier</th>
                          <th className="px-4 py-3">Creator</th>
                          <th className="px-4 py-3">Business</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5">
                          <td className="px-4 py-3 font-medium text-[#0BA94C]">Basic</td>
                          <td className="px-4 py-3">$1.99/mo</td>
                          <td className="px-4 py-3">$4.99/mo</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="px-4 py-3 font-medium text-[#0BA94C]">Premium</td>
                          <td className="px-4 py-3">$2.49/mo</td>
                          <td className="px-4 py-3">$7.49/mo</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-[#0BA94C]">Ultimate</td>
                          <td className="px-4 py-3">$2.99/mo</td>
                          <td className="px-4 py-3">$9.99/mo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-xs text-gray-500">
                    * Community streamers are free to follow. Learnify Perks accounts cannot receive subscriptions.
                  </p>
                </CardContent>
              </Card>

              {/* Donation Minimums */}
              <Card className="bg-white/5 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="text-xl">Donation Minimums</CardTitle>
                  <CardDescription className="text-gray-400">
                    Minimum amounts required to send a donation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span>Community Streamers</span>
                      <span className="font-mono text-[#0BA94C]">$1.00</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span>Creator Streamers</span>
                      <span className="font-mono text-[#0BA94C]">$1.00</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span>Business Streamers</span>
                      <span className="font-mono text-[#0BA94C]">$1.00</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 opacity-50">
                      <span>Learnify Perks Accounts</span>
                      <span className="font-mono text-gray-500">N/A</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function PricingCard({ 
  title, 
  subtitle,
  price, 
  features, 
  buttonText, 
  highlighted = false,
  disabled = false,
  flipContent
}: { 
  title: string, 
  subtitle?: string,
  price: string, 
  features: string[], 
  buttonText: string, 
  highlighted?: boolean,
  disabled?: boolean,
  flipContent?: {
    subtitle: string,
    body: string,
    idealFor: string[]
  }
}) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className={`h-[500px] perspective-1000 ${disabled ? 'opacity-70 grayscale' : ''}`}>
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front of Card */}
        <Card className={`absolute w-full h-full backface-hidden flex flex-col border-white/10 ${highlighted ? 'bg-[#0BA94C]/10 border-[#0BA94C]/50' : 'bg-white/5'} text-white`}>
          {highlighted && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0BA94C] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
              Most Popular
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            {subtitle && <p className="text-sm text-[#0BA94C] font-medium mt-1">{subtitle}</p>}
            <div className="mt-2">
              <span className="text-4xl font-bold">{price}</span>
              <span className="text-gray-400 ml-1">/mo</span>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-[#0BA94C] mt-1 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button 
              className={`w-full group ${highlighted ? 'bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
              disabled={disabled}
              onClick={() => !disabled && setIsFlipped(true)}
            >
              {disabled ? "Not Available" : "Learn More"}
              {!disabled && <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />}
            </Button>
          </CardFooter>
        </Card>

        {/* Back of Card */}
        <Card className={`absolute w-full h-full backface-hidden rotate-y-180 flex flex-col bg-[#061A15] border-[#0BA94C]/30 text-white overflow-hidden`}>
           <div className="absolute top-0 left-0 w-full h-1 bg-[#0BA94C]"></div>
           <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold flex justify-between items-center">
              {title}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </CardTitle>
            {flipContent?.subtitle && <p className="text-xs text-[#0BA94C] font-medium mt-1 uppercase tracking-wider">{flipContent.subtitle}</p>}
          </CardHeader>
          <CardContent className="flex-grow space-y-4 overflow-y-auto custom-scrollbar">
            {flipContent && (
              <>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {flipContent.body}
                </p>
                
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-semibold text-white uppercase tracking-wider">Ideal For:</p>
                  <ul className="space-y-1">
                    {flipContent.idealFor.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-1 h-1 rounded-full bg-[#0BA94C]"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </CardContent>
          <CardFooter className="pt-2">
            <Button 
              className={`w-full ${highlighted ? 'bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
              disabled={disabled}
              onClick={() => setIsFlipped(false)}
            >
              Back to Features
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(11, 169, 76, 0.5);
          border-radius: 2px;
        }
      `}</style>
    </div>
  )
}
