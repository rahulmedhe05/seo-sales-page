"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { addLead } from "@/lib/leads"
import { useWhatsAppForm } from "@/components/whatsapp-form-context"

export function WhatsAppFloat() {
  const { isOpen, openForm, closeForm } = useWhatsAppForm()
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

    // Construct WhatsApp message with what you get and terms
    const message = `
💼 *WEBSITE + SEO ENQUIRY* 💼

• *Full Name:* ${formData.fullName}
• *Phone Number:* ${formData.phoneNumber}
• *Business Name:* ${formData.businessName}
• *Business Category:* ${formData.businessCategory}
• *Location:* ${formData.location}
• *Website:* ${formData.websiteUrl || "No website"}

―――――――――――――
📦 *WHAT YOU WILL GET:*
―――――――――――――
✅ Professional Website Design — Modern, fast-loading website
✅ Complete SEO Optimization — Rank on Google in your city
✅ Get Consistent Leads from Google — Fully optimized
✅ AI Search Ready — ChatGPT, Gemini visibility
✅ Beat Top 5 Competitors — Guaranteed ranking

💰 *PRICING:* ₹24,999 One-Time (No Monthly Fees)

―――――――――――――
📋 *TERMS & CONDITIONS:*
―――――――――――――
1. 100% advance payment required (serious clients only)
2. Delivery timeline: 30-45 working days
3. 1 round of revision included
4. Domain charges not included
5. Free hosting & maintenance for 1 year, then ₹5,000/year

✅ *I have read and agreed to the Terms & Conditions*

_Sent via GoPlnr Website_
    `.trim()

    // Replace with your actual WhatsApp number (with country code, no + or spaces)
    const whatsappNumber = "916353583148"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")

    // Reset form and close dialog
    setFormData({
      fullName: "",
      phoneNumber: "",
      businessName: "",
      businessCategory: "",
      location: "",
      websiteUrl: "",
    })
    setAgreedToTerms(false)
    closeForm()
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={openForm}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="WhatsApp Enquiry"
      >
        <svg viewBox="0 0 24 24" className="h-9 w-9 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full animate-ping" />
      </button>

      {/* Enquiry Form Dialog */}
      <Dialog open={isOpen} onOpenChange={(open) => !open && closeForm()}>
        <DialogContent className="sm:max-w-[450px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">Get Website + SEO</DialogTitle>
            <DialogDescription>
              💼 ₹24,999 One-Time • No Monthly Fees
            </DialogDescription>
          </DialogHeader>

          {/* Pricing Banner */}
          <div className="bg-accent/10 border border-accent rounded-lg p-3 flex items-start gap-2">
            <span className="text-accent flex-shrink-0 mt-0.5">✅</span>
            <p className="text-sm text-foreground font-medium">
              Complete website + SEO package for ₹24,999 one-time. Rank on Google!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="floatFullName">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="floatFullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="floatPhoneNumber">
                Mobile Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="floatPhoneNumber"
                type="tel"
                placeholder="e.g., 98765 43210"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="floatBusinessName">
                Business Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="floatBusinessName"
                placeholder="e.g., Sharma Electronics"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="floatBusinessCategory">
                Business Category <span className="text-destructive">*</span>
              </Label>
              <Input
                id="floatBusinessCategory"
                placeholder="e.g., Dental Clinic, Restaurant, CA Firm"
                value={formData.businessCategory}
                onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="floatLocation">
                Location / City <span className="text-destructive">*</span>
              </Label>
              <Input
                id="floatLocation"
                placeholder="e.g., Mumbai, Delhi, Bangalore"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="floatWebsiteUrl">
                Website URL <span className="text-muted-foreground text-xs">(optional)</span>
              </Label>
              <Input
                id="floatWebsiteUrl"
                type="url"
                placeholder="e.g., https://yourbusiness.com"
                value={formData.websiteUrl}
                onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
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
                <li>• 100% advance payment required (serious clients only)</li>
                <li>• Delivery timeline: 30-45 working days</li>
                <li>• 1 round of revision included</li>
                <li>• Domain charges not included</li>
                <li>• Free hosting & maintenance for 1 year, then ₹5,000/year</li>
              </ul>
              <div className="flex items-center space-x-2 pt-2 border-t border-amber-200">
                <Checkbox 
                  id="terms" 
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                  className="h-5 w-5 border-2 border-gray-800 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-gray-800"
                >
                  I agree to the Terms & Conditions <span className="text-destructive">*</span>
                </label>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-base h-11 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!agreedToTerms}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Get Started — ₹24,999
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              💼 One-time payment | No monthly fees
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
