"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Check } from "lucide-react"
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
              <TabsList className="grid w-full max-w-md grid-cols-3 bg-white/5 border border-white/10 text-white">
                <TabsTrigger value="basic" className="data-[state=active]:bg-[#0BA94C] data-[state=active]:text-white text-white/70 hover:text-white">Basic</TabsTrigger>
                <TabsTrigger value="premium" className="data-[state=active]:bg-[#0BA94C] data-[state=active]:text-white text-white/70 hover:text-white">Premium</TabsTrigger>
                <TabsTrigger value="ultimate" className="data-[state=active]:bg-[#0BA94C] data-[state=active]:text-white text-white/70 hover:text-white">Ultimate</TabsTrigger>
              </TabsList>
            </div>

            {/* BASIC PLAN CONTENT */}
            <TabsContent value="basic" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <PricingCard 
                  title="Charity"
                  price="$0"
                  description="For non-profit knowledge sharing."
                  features={[
                    "No Subscription Fee",
                    "Donations Only",
                    "Private Live Sessions (TBD)",
                    "Longer Live Sessions"
                  ]}
                  buttonText="Get Started"
                  highlighted={false}
                />
                <PricingCard 
                  title="Individual"
                  price="$9.99"
                  description="For emerging knowledge leaders."
                  features={[
                    "Receive Donations",
                    "Allow User Subscriptions",
                    "Private Live Sessions (up to 5)",
                    "Extra Long Live Sessions",
                    "Recorded Live Sessions",
                    "Downloadable Live Sessions",
                    "XP Booster"
                  ]}
                  buttonText="Go Individual"
                  highlighted={true}
                />
                <PricingCard 
                  title="Commercial"
                  price="$49.99"
                  description="For established sector leaders."
                  features={[
                    "All Individual Features",
                    "Private Live Sessions (up to 20)",
                    "Extra Extra Long Live Sessions",
                    "License Included",
                    "Less Commission",
                    "First In Learnify SEO",
                    "Better Quality Streaming"
                  ]}
                  buttonText="Go Commercial"
                  highlighted={false}
                />
                <PricingCard 
                  title="Support"
                  price="$4.99"
                  description="For dedicated learners & viewers."
                  features={[
                    "25% Discount on 3 Streamers",
                    "Support Learnify Team",
                    "Better Quality Viewing",
                    "Save 1 Live Stream",
                    "XP Booster (3 days)"
                  ]}
                  buttonText="Become a Supporter"
                  highlighted={false}
                />
              </div>
            </TabsContent>

            {/* PREMIUM PLAN CONTENT */}
            <TabsContent value="premium" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <PricingCard 
                  title="Charity"
                  price="$0"
                  description="No upgrade available for Charity."
                  features={[
                    "Same as Basic Plan",
                    "Donations Only",
                    "Longer Live Sessions"
                  ]}
                  buttonText="Get Started"
                  highlighted={false}
                  disabled={true}
                />
                <PricingCard 
                  title="Individual"
                  price="$12.99"
                  description="Enhanced features for creators."
                  features={[
                    "All Basic Features Included",
                    "Higher Priority Support",
                    "Extended Recording Storage",
                    "Enhanced Analytics"
                  ]}
                  buttonText="Upgrade Individual"
                  highlighted={true}
                />
                <PricingCard 
                  title="Commercial"
                  price="$74.99"
                  description="Professional tools for business."
                  features={[
                    "All Basic Features Included",
                    "Lower Commission Rates",
                    "Priority SEO Listing",
                    "Advanced Analytics Dashboard"
                  ]}
                  buttonText="Upgrade Commercial"
                  highlighted={false}
                />
                <PricingCard 
                  title="Support"
                  price="$6.99"
                  description="More perks for power viewers."
                  features={[
                    "30% Discount on 5 Streamers",
                    "Support Learnify Team",
                    "Better Quality Viewing",
                    "Save up to 2 Live Streams",
                    "XP Booster (1 week)"
                  ]}
                  buttonText="Upgrade Support"
                  highlighted={false}
                />
              </div>
            </TabsContent>

            {/* ULTIMATE PLAN CONTENT */}
            <TabsContent value="ultimate" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <PricingCard 
                  title="Charity"
                  price="$0"
                  description="No upgrade available for Charity."
                  features={[
                    "Same as Basic Plan",
                    "Donations Only"
                  ]}
                  buttonText="Get Started"
                  highlighted={false}
                  disabled={true}
                />
                <PricingCard 
                  title="Individual"
                  price="$14.99"
                  description="Maximum power for creators."
                  features={[
                    "All Premium Features Included",
                    "Top Tier Support",
                    "Unlimited Recording Storage",
                    "Maximum XP Boosts"
                  ]}
                  buttonText="Go Ultimate"
                  highlighted={true}
                />
                <PricingCard 
                  title="Commercial"
                  price="$99.99"
                  description="Enterprise-grade solution."
                  features={[
                    "All Premium Features Included",
                    "Lowest Commission Rates",
                    "Top SEO Placement",
                    "White-glove Support"
                  ]}
                  buttonText="Go Ultimate"
                  highlighted={false}
                />
                <PricingCard 
                  title="Support"
                  price="$9.99"
                  description="The ultimate viewer experience."
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
                          <th className="px-4 py-3">Individual</th>
                          <th className="px-4 py-3">Commercial</th>
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
                    * Charity streamers are free to follow. Support accounts cannot receive subscriptions.
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
                      <span>Charity Streamers</span>
                      <span className="font-mono text-[#0BA94C]">$1.00</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span>Individual Streamers</span>
                      <span className="font-mono text-[#0BA94C]">$1.00</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span>Commercial Streamers</span>
                      <span className="font-mono text-[#0BA94C]">$1.00</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 opacity-50">
                      <span>Support Accounts</span>
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
  price, 
  description, 
  features, 
  buttonText, 
  highlighted = false,
  disabled = false 
}: { 
  title: string, 
  price: string, 
  description: string, 
  features: string[], 
  buttonText: string, 
  highlighted?: boolean,
  disabled?: boolean
}) {
  return (
    <Card className={`relative flex flex-col h-full border-white/10 ${highlighted ? 'bg-[#0BA94C]/10 border-[#0BA94C]/50' : 'bg-white/5'} text-white transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-[#0BA94C]/50 hover:shadow-lg hover:shadow-[#0BA94C]/10`}>
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0BA94C] text-white text-xs font-bold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <div className="mt-2">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-400 ml-1">/mo</span>
        </div>
        <CardDescription className="text-gray-400 mt-2 min-h-[40px]">
          {description}
        </CardDescription>
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
          className={`w-full ${highlighted ? 'bg-[#0BA94C] hover:bg-[#0BA94C]/90 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
          disabled={disabled}
        >
          {disabled ? "Not Available" : buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}
