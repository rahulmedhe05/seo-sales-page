"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react"
import { addLead } from "@/lib/leads"

export function FinalCTASection() {
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
• *Phone Number:* ${formData.phoneNumber}
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
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
              Ready to Get Your Business on Google?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Stop losing customers to competitors. Start getting found on Google today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left - Benefits Recap */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Here's What You Get:</h3>
              
              <div className="space-y-4">
                {[
                  "₹0 upfront — totally pay later!",
                  "Pay ₹25,000 ONLY after we rank you",
                  "No ranking = No payment",
                  "Google Maps & Search ranking in 15-30 days",
                  "Free website redesign if needed",
                  "Zero risk - We take all the risk!",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Direct Contact */}
              <div className="pt-6 border-t border-white/20 space-y-4">
                <p className="font-semibold">Or contact us directly:</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:+916353583148"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg px-4 py-3 font-medium transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +91 63535 83148
                  </a>
                  <a 
                    href="https://wa.me/916353583148?text=Hi!%20I%20want%20to%20rank%20my%20business%20on%20Google."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#22c55e] rounded-lg px-4 py-3 font-medium transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              {/* Pay Later Banner */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0 mt-0.5">✅</span>
                <p className="text-sm text-green-800 font-medium">
                  No payment required now. We do the SEO first, you pay only after seeing results!
                </p>
              </div>

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-foreground">
                  Start Your SEO Journey
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  100% Pay Later • Pay ₹25,000 only after we rank you
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="ctaFullName" className="block text-sm font-medium text-foreground mb-1">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="ctaFullName"
                    type="text"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-muted border-border text-foreground h-11"
                  />
                </div>

                <div>
                  <label htmlFor="ctaPhoneNumber" className="block text-sm font-medium text-foreground mb-1">
                    Mobile Number <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="ctaPhoneNumber"
                    type="tel"
                    placeholder="e.g., 98765 43210"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    required
                    className="bg-muted border-border text-foreground h-11"
                  />
                </div>

                <div>
                  <label htmlFor="ctaBusinessName" className="block text-sm font-medium text-foreground mb-1">
                    Business Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="ctaBusinessName"
                    type="text"
                    placeholder="e.g., Sharma Electronics"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    required
                    className="bg-muted border-border text-foreground h-11"
                  />
                </div>

                <div>
                  <label htmlFor="ctaBusinessCategory" className="block text-sm font-medium text-foreground mb-1">
                    Business Category <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="ctaBusinessCategory"
                    type="text"
                    placeholder="e.g., Dental Clinic, Restaurant, CA Firm"
                    value={formData.businessCategory}
                    onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                    required
                    className="bg-muted border-border text-foreground h-11"
                  />
                </div>

                <div>
                  <label htmlFor="ctaLocation" className="block text-sm font-medium text-foreground mb-1">
                    Location / City <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="ctaLocation"
                    type="text"
                    placeholder="e.g., Mumbai, Delhi, Bangalore"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                    className="bg-muted border-border text-foreground h-11"
                  />
                </div>

                <div>
                  <label htmlFor="ctaWebsiteUrl" className="block text-sm font-medium text-foreground mb-1">
                    Website URL <span className="text-muted-foreground text-xs">(optional)</span>
                  </label>
                  <Input
                    id="ctaWebsiteUrl"
                    type="url"
                    placeholder="e.g., https://yourbusiness.com"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="bg-muted border-border text-foreground h-11"
                  />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-semibold h-12 text-base mt-2">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Submit & Start SEO
                </Button>

                <p className="text-xs text-center text-muted-foreground pt-2">
                  🔒 Pay after ranking. No ranking = No payment.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
