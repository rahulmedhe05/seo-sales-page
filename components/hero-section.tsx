"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TrendingUp, CheckCircle2, Shield, MessageCircle, Clock, Zap } from "lucide-react"
import { addLead } from "@/lib/leads"

export function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    businessName: "",
    businessCategory: "",
    location: "",
    websiteUrl: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Save lead to localStorage
    addLead({
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      businessName: formData.businessName,
      businessCategory: formData.businessCategory,
      location: formData.location,
      websiteUrl: formData.websiteUrl,
    })

    const message = `
🚀 *FREE 1 MONTH SEO TRIAL ENQUIRY* 🚀

• *Full Name:* ${formData.fullName}
• *Mobile Number:* ${formData.phoneNumber}
• *Business Name:* ${formData.businessName}
• *Business Category:* ${formData.businessCategory}
• *Location:* ${formData.location}
• *Website:* ${formData.websiteUrl || "No website"}

🎁 FREE 1 Month SEO Trial - Rank in My City!
💰 Then ₹20,000/Quarter (100% Advance)

―――――――――――――
_Sent via GoPlnr Website_
    `.trim()

    const whatsappNumber = "916353583148"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden pt-16 sm:pt-20 bg-gradient-to-br from-primary via-primary/95 to-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-5 gap-6 md:gap-10 items-start">
          
          {/* Left Side - Main Content */}
          <div className="md:col-span-3 text-white space-y-5">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-accent text-white rounded-full px-4 py-2 font-bold animate-pulse">
              <Zap className="w-5 h-5" />
              <span className="text-sm">🎁 FREE 1 MONTH SEO TRIAL - LIMITED OFFER!</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Get <span className="text-accent">FREE SEO for 1 Month</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl">Rank in Your City — Risk Free!</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              <span className="text-accent font-bold text-2xl md:text-3xl">100% FREE Trial.</span> We rank your business on Google in your city.
              <span className="font-bold"> Then just ₹20,000/Quarter to dominate local search! </span>
              <span className="bg-accent px-2 py-1 rounded font-bold">Try Before You Pay!</span>
            </p>

            {/* Payment Structure - Main USP */}
            <div className="bg-accent/20 backdrop-blur-sm rounded-xl p-5 border-2 border-accent">
              <h3 className="text-xl font-bold mb-4 text-center text-accent">
                � FREE 1 MONTH TRIAL - HOW IT WORKS
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <p className="font-bold">Submit your business details</p>
                    <p className="text-sm text-white/80">Takes 2 minutes — 100% FREE to start!</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <p className="font-bold">FREE SEO for 1 Full Month</p>
                    <p className="text-sm text-white/80">We rank your business in your city — no charges!</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <div className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <p className="font-bold">Continue with ₹20,000/Quarter</p>
                    <p className="text-sm text-white/80">Love the results? Subscribe quarterly (100% advance)</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center bg-yellow-400 rounded-lg p-2">
                <p className="font-bold text-gray-900">⚡ Try FREE for 1 Month — Zero Risk!</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">1 Month</div>
                <div className="text-sm text-white/70">FREE Trial</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">₹20K</div>
                <div className="text-sm text-white/70">Per Quarter</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-white/70">Risk-Free</div>
              </div>
            </div>

            {/* Google Search Mockup - Visual Element */}
            <div className="hidden md:block mt-6">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-md">
                {/* Google Search Bar */}
                <div className="bg-white p-3 border-b flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-gray-100 rounded-full px-4 py-1.5 text-sm text-gray-600">
                    google.com
                  </div>
                </div>
                {/* Search Result */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                    <span className="text-xs text-gray-600">google.com</span>
                  </div>
                  <p className="text-blue-600 font-medium text-sm mb-1 cursor-pointer hover:underline">
                    best dentist near me - Google Search
                  </p>
                  {/* Top Result with Badge */}
                  <div className="bg-green-50 border-2 border-green-400 rounded-lg p-3 mt-3 relative">
                    <div className="absolute -top-2 left-3 bg-accent text-white text-xs font-bold px-2 py-0.5 rounded">
                      #1 RANKING
                    </div>
                    <p className="text-blue-700 font-semibold text-sm mt-1">Your Business Name Here</p>
                    <p className="text-green-700 text-xs">yourbusiness.com</p>
                    <p className="text-gray-600 text-xs mt-1">★★★★★ 5.0 Rating • 100+ Reviews</p>
                    <div className="flex items-center gap-1 mt-2 text-green-600 text-xs font-medium">
                      <TrendingUp className="w-3 h-3" />
                      <span>Ranked in 18 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Mobile */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 md:hidden">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-semibold text-base h-12"
                onClick={() => {
                  const whatsappURL = `https://wa.me/916353583148?text=${encodeURIComponent("Hi! I want to rank my business on Google. Please share details.")}`
                  window.open(whatsappURL, "_blank")
                }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us Now
              </Button>
            </div>
          </div>

          {/* Right Side - Lead Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-2xl border-4 border-accent">
              {/* FREE Trial Banner */}
              <div className="bg-green-50 border-2 border-green-400 rounded-lg p-3 mb-4">
                <div className="flex items-start gap-2">
                  <div className="text-2xl">🎁</div>
                  <div>
                    <p className="text-green-800 text-sm font-bold">FREE 1 MONTH SEO TRIAL!</p>
                    <p className="text-green-700 text-xs mt-1">
                      Get ranked in your city for FREE. No payment needed to start. Limited time offer!
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-3 py-1 text-sm font-bold mb-2">
                  <Clock className="w-4 h-4" />
                  Start Your FREE Trial
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  🚀 Rank in Your City — FREE for 1 Month!
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Then ₹20,000/Quarter (100% Advance)
                </p>
              </div>

              {/* Pricing Banner */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-sm font-bold text-center text-blue-800">🎯 Special Quarterly Package</p>
                <p className="text-xl font-bold text-center text-blue-900 mt-1">₹20,000/Quarter</p>
                <p className="text-xs text-center text-blue-700 mt-1">After FREE 1 Month Trial • 100% Advance Payment</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1">
                    1️⃣ Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-muted border-border text-foreground h-10"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-foreground mb-1">
                    2️⃣ Mobile Number 📞 <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="e.g., 98765 43210"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    required
                    className="bg-muted border-border text-foreground h-10"
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-foreground mb-1">
                    3️⃣ Business Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="businessName"
                    type="text"
                    placeholder="e.g., Sharma Electronics"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    required
                    className="bg-muted border-border text-foreground h-10"
                  />
                </div>

                <div>
                  <label htmlFor="businessCategory" className="block text-sm font-medium text-foreground mb-1">
                    4️⃣ Business Category <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="businessCategory"
                    type="text"
                    placeholder="e.g., Dental Clinic, Restaurant, CA Firm"
                    value={formData.businessCategory}
                    onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                    required
                    className="bg-muted border-border text-foreground h-10"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-foreground mb-1">
                    5️⃣ Location (City/Area) <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="e.g., Mumbai, Delhi, Bangalore"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                    className="bg-muted border-border text-foreground h-10"
                  />
                </div>

                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-medium text-foreground mb-1">
                    6️⃣ Website URL <span className="text-muted-foreground text-xs">(optional)</span>
                  </label>
                  <Input
                    id="websiteUrl"
                    type="url"
                    placeholder="e.g., https://yourbusiness.com"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="bg-muted border-border text-foreground h-10"
                  />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-12 text-base mt-3">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start FREE Trial →
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  🎁 1 Month FREE | Then ₹20,000/Quarter
                </p>
              </form>

              {/* Important Notes Section */}
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm font-bold text-amber-800 mb-2">📋 Important Notes:</p>
                <ul className="space-y-2 text-xs text-amber-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span><strong>1 Month FREE Trial</strong> — No payment required to start</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span><strong>Quarterly Package:</strong> ₹20,000 per quarter after trial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span><strong>100% Advance Payment</strong> required for quarterly subscription</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span>Rank in your city with local SEO optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span>Cancel anytime — No long-term commitment required</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
