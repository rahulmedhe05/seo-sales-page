"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react"
import { addLead } from "@/lib/leads"
import { useWhatsAppForm } from "@/components/whatsapp-form-context"

export function FinalCTASection() {
  const { openForm } = useWhatsAppForm()
  const [agreedToTerms, setAgreedToTerms] = useState(false)
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

    if (!agreedToTerms) {
      return
    }

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
💼 *FREE WEBSITE + SEO ENQUIRY* 💼

• *Full Name:* ${formData.fullName}
• *Phone Number:* ${formData.phoneNumber}
• *Business Name:* ${formData.businessName}
• *Business Category:* ${formData.businessCategory}
• *Location:* ${formData.location}
• *Website:* ${formData.websiteUrl || "No website"}

―――――――――――――
📦 *WHAT YOU WILL GET (FREE):*
―――――――――――――
✅ Professional Website Design — Modern, fast-loading website
✅ Complete SEO Optimization — Rank on Google in Vadodara
✅ Get Consistent Leads from Google — Fully optimized
✅ AI Search Ready — ChatGPT, Gemini visibility
✅ Beat Top 5 Competitors — Guaranteed ranking

🎁 *100% FREE for Vadodara Businesses!*

―――――――――――――
📋 *TERMS & CONDITIONS:*
―――――――――――――
1. Available for Vadodara-based businesses only
2. Get ranked in 30 days
3. 1 round of revision included
4. Domain charges not included
5. Free hosting & maintenance

✅ *I have read and agreed to the Terms & Conditions*

_Sent via GoPlnr Website_
    `.trim()

    const whatsappNumber = "917016020144"
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
                  "🎁 FREE Website + SEO Package",
                  "Professional website design",
                  "Rank on Google in Vadodara",
                  "Google Maps & Search ranking in 30 days",
                  "AI Search visibility (ChatGPT, Gemini)",
                  "100% FREE for Vadodara businesses!",
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
                    href="tel:+917016020144"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg px-4 py-3 font-medium transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +91 70160 20144
                  </a>
                  <button 
                    onClick={openForm}
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#22c55e] rounded-lg px-4 py-3 font-medium transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="bg-accent/10 border border-accent rounded-lg p-3 mb-4 flex items-start gap-2">
                <span className="text-accent flex-shrink-0 mt-0.5">✅</span>
                <p className="text-sm text-foreground font-medium">
                  100% FREE Website + SEO for Vadodara businesses!
                </p>
              </div>

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-foreground">
                  Get Started — It's FREE!
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  🎁 Exclusive for Vadodara businesses!
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

                {/* What You Will Get */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 space-y-2">
                  <p className="text-xs font-bold text-green-800">📦 What You Will Get:</p>
                  <ul className="text-xs text-green-700 space-y-1 pl-2">
                    <li>✅ Professional Website Design</li>
                    <li>✅ Complete SEO Optimization</li>
                    <li>✅ Get Consistent Leads from Google</li>
                    <li>✅ AI Search Ready (ChatGPT, Gemini)</li>
                    <li>✅ Beat Top 5 Competitors</li>
                  </ul>
                </div>

                {/* Terms & Conditions Checkbox */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 space-y-2">
                  <p className="text-xs font-bold text-amber-800">📋 Terms & Conditions:</p>
                  <ul className="text-xs text-amber-700 space-y-1 pl-2">
                    <li>• Available for Vadodara-based businesses only</li>
                    <li>• Get ranked in 30 days</li>
                    <li>• 1 round of revision included</li>
                    <li>• Domain charges not included</li>
                    <li>• Free hosting & maintenance</li>
                  </ul>
                  <div className="flex items-center space-x-2 pt-2 border-t border-amber-200">
                    <Checkbox 
                      id="ctaTerms" 
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                      className="h-5 w-5 border-2 border-gray-800 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                    />
                    <label
                      htmlFor="ctaTerms"
                      className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-gray-800"
                    >
                      I agree to the Terms & Conditions <span className="text-destructive">*</span>
                    </label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold h-12 text-base mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!agreedToTerms}
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started — It's FREE!
                </Button>

                <p className="text-xs text-center text-muted-foreground pt-2">
                  🎁 100% FREE for Vadodara businesses!
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
