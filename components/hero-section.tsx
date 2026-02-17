"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TrendingUp, CheckCircle2, Shield, MessageCircle, Clock, Zap, AlertTriangle } from "lucide-react"
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
🚀 *LOCAL SEO ENQUIRY - PAY AFTER RANKING* 🚀

• *Full Name:* ${formData.fullName}
• *Mobile Number:* ${formData.phoneNumber}
• *Business Name:* ${formData.businessName}
• *Business Category:* ${formData.businessCategory}
• *Location:* ${formData.location}
• *Website:* ${formData.websiteUrl || "No website"}

💰 Pay ₹25,000 only AFTER we rank you!

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
              <span className="text-sm">🔥 FIRST GET RANKED, THEN PAY!</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              First Get Ranked on
              <span className="text-accent"> Google&apos;s First Page</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl">Then Pay Us. Zero Upfront Fees!</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              <span className="text-accent font-bold text-2xl md:text-3xl">₹0 Upfront.</span> We do the SEO first.
              <span className="font-bold"> Pay ₹25,000 only AFTER we rank you on Google. </span>
              <span className="bg-accent px-2 py-1 rounded font-bold">No ranking = You don't pay!</span>
            </p>

            {/* Payment Structure - Main USP */}
            <div className="bg-accent/20 backdrop-blur-sm rounded-xl p-5 border-2 border-accent">
              <h3 className="text-xl font-bold mb-4 text-center text-accent">
                🎯 HOW IT WORKS - ZERO RISK!
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <div className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <p className="font-bold">Submit your business details</p>
                    <p className="text-sm text-white/80">Takes 2 minutes — zero payment needed</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <div className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <p className="font-bold">We rank you on Google in 15-30 days</p>
                    <p className="text-sm text-white/80">Watch your business climb to page 1</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <div className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <p className="font-bold">Pay ₹25,000 ONLY after you see results</p>
                    <p className="text-sm text-white/80">No ranking = You don't pay a single rupee!</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center bg-yellow-400 rounded-lg p-2">
                <p className="font-bold text-gray-900">⚡ You literally can't lose money!</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">30</div>
                <div className="text-sm text-white/70">Days to Rank</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">Zero</div>
                <div className="text-sm text-white/70">Monthly Fees</div>
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
              {/* Warning Banner */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-amber-800 text-sm font-bold">⚠️ SERIOUS ENQUIRIES ONLY</p>
                    <p className="text-amber-700 text-xs mt-1">
                      Only fill this form if you&apos;re ready to start. We invest real time in each client. Please don&apos;t enquire if you&apos;re just asking around.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-3 py-1 text-sm font-bold mb-2">
                  <Clock className="w-4 h-4" />
                  Start Your Ranking Journey
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  100% Pay Later — After SEO Results!
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Pay ₹25,000 only after we rank you
                </p>
              </div>

              {/* Pay Later Banner */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-sm font-bold text-center text-green-800">✅ No payment required now!</p>
                <p className="text-xs text-center text-green-700 mt-1">We do the work first. You pay ₹25,000 only after we rank you.</p>
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
                  Send on WhatsApp →
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  🔒 100% Pay Later | No ranking = No payment
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
