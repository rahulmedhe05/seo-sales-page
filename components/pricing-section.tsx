"use client"

import { Check, Shield, Zap, Clock, MessageCircle, X, IndianRupee, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWhatsAppForm } from "@/components/whatsapp-form-context"

export function PricingSection() {
  const { openForm } = useWhatsAppForm()

  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider mb-3 text-sm">💼 One-Time Investment</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Website + SEO — Rank on Google!
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get a professional website and SEO to rank your business on Google — Pay only ₹1,000 now, ₹24,000 after ranking!
          </p>
        </div>

        {/* Value Comparison - What You'd Pay Elsewhere */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
              <X className="w-5 h-5" />
              What Typical Agencies Charge:
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { item: "Website Design", cost: "₹30,000-80,000", yearly: "One-time" },
                { item: "Monthly SEO", cost: "₹15,000-30,000/month", yearly: "₹1.8-3.6L/year" },
                { item: "Backlinks", cost: "₹5,000-10,000/month", yearly: "₹60K-1.2L/year" },
                { item: "Setup Fee", cost: "₹10,000-25,000", yearly: "One-time" },
              ].map((agency, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-red-200">
                  <p className="text-sm text-red-700 font-medium">{agency.item}</p>
                  <p className="text-red-800 font-bold">{agency.cost}</p>
                  <p className="text-xs text-red-600">{agency.yearly}</p>
                </div>
              ))}
            </div>
            <p className="text-red-700 text-center mt-4 font-semibold">
              Total: ₹1-3 Lakhs easily! 😰
            </p>
          </div>
        </div>

        {/* Single Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-2xl border-4 border-accent shadow-2xl overflow-visible relative mt-6">
            {/* Best Value Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 z-10">
              <TrendingUp className="w-4 h-4" />
              BEST VALUE
            </div>
            
            {/* Header */}
            <div className="bg-primary text-white p-6 text-center pt-8">
              <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-1.5 text-sm font-bold mb-3">
                <Shield className="w-4 h-4" />
                One-Time Payment
              </div>
              <h3 className="text-2xl font-bold mb-2">Website + SEO Package</h3>
              <p className="text-white/80">Rank Your Business on Google!</p>
            </div>

            {/* Price */}
            <div className="p-6 text-center border-b border-border">
              <p className="text-sm text-muted-foreground mb-2">Pay Only After Results!</p>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-accent">₹1,000 Deposit</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-lg font-semibold text-accent">₹24,000 After Ranking</span>
                </div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className="text-3xl md:text-4xl font-bold text-foreground">Total: ₹25,000</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-muted-foreground line-through">₹60,000</span>
                <span className="bg-accent text-white px-2 py-0.5 rounded text-sm font-bold">58% OFF</span>
              </div>
              
              <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm font-bold text-green-700">✅ Pay ₹24,000 ONLY when your website ranks on Google!</p>
              </div>
            </div>

            {/* Features */}
            <div className="p-6 space-y-4">
              <h4 className="font-semibold text-foreground mb-4">Complete Package Includes:</h4>
              {[
                "Professional website design & development",
                "Complete website SEO optimization",
                "Get Consistent Leads from Google",
                "AI Search ready (ChatGPT, Gemini, Perplexity)",
                "Beat your top 5 competitors",
                "Advanced local keyword targeting",
                "Quality backlink building",
                "Google Maps ranking",
                "Rank in your city on Google!",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="p-6 bg-muted/50">
              <Button 
                onClick={openForm}
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold h-12 text-base"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start with ₹1,000 Deposit
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-3">
                Pay ₹24,000 only after your website ranks on Google!
              </p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2">
              📋 What's Included in ₹25,000 (₹1,000 Deposit + ₹24,000 After Ranking):
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-amber-800"><strong>Professional Website</strong> — Modern, fast-loading website designed for your business.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-amber-800"><strong>Consistent Leads from Google</strong> — Get found by customers actively searching for your services.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-amber-800"><strong>Website SEO</strong> — Complete on-page optimization to rank on Google.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-amber-800"><strong>AI Search Visibility</strong> — Get found on ChatGPT, Gemini, Perplexity & other AI assistants.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-amber-800"><strong>Beat Top 5 Competitors</strong> — We analyze & ensure you rank ahead of your competition!</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
              📋 Terms & Conditions:
            </h3>
            <ul className="space-y-3 text-blue-800">
              <li className="flex items-start gap-3">
                <span className="font-bold">1.</span>
                <span><strong>₹1,000 Deposit</strong> — Pay ₹1,000 to start your project. This is a booking fee to confirm your slot.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">2.</span>
                <span><strong>₹24,000 After Ranking</strong> — Pay the remaining amount ONLY after your website ranks on Google's first page for your targeted keywords.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">3.</span>
                <span><strong>Ranking Timeline</strong> — We aim to rank your website within 30-45 days. You pay only when results are delivered.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">4.</span>
                <span><strong>Total Investment</strong> — ₹25,000 total (₹1,000 deposit + ₹24,000 after ranking). No hidden charges.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">5.</span>
                <span><strong>Deposit Policy</strong> — The ₹1,000 deposit is non-refundable as it covers initial research, keyword analysis, and project setup.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Points */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-3">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-foreground">Pay After Results</h4>
            <p className="text-sm text-muted-foreground">₹1,000 deposit only</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-3">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-foreground">Website + SEO</h4>
            <p className="text-sm text-muted-foreground">Complete package</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-foreground">Rank on Google</h4>
            <p className="text-sm text-muted-foreground">In your city</p>
          </div>
        </div>
      </div>
    </section>
  )
}
