"use client"

import { Check, Shield, Zap, Clock, MessageCircle, X, IndianRupee, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const handleCTAClick = () => {
    const whatsappURL = `https://wa.me/916353583148?text=${encodeURIComponent("Hi! I'm interested in your Local SEO service for ₹25,000. Please share more details.")}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider mb-3 text-sm">Transparent Pricing</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            One-Time Investment. Long-Term Results.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No hidden charges. No monthly fees. No surprises.
          </p>
        </div>

        {/* Value Comparison - What You'd Pay Elsewhere */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
              <X className="w-5 h-5" />
              What Typical SEO Agencies Charge:
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { item: "Monthly SEO", cost: "₹15,000-30,000/month", yearly: "₹1.8-3.6L/year" },
                { item: "Website Redesign", cost: "₹30,000-80,000", yearly: "Extra cost" },
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
              Total: ₹2-4 Lakhs in first year alone! 😰
            </p>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-2xl border-4 border-accent shadow-2xl overflow-visible relative mt-6">
            {/* Best Value Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 z-10">
              <TrendingUp className="w-4 h-4" />
              BEST VALUE
            </div>
            
            {/* Header */}
            <div className="bg-primary text-white p-6 text-center pt-8">
              <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-1.5 text-sm font-bold mb-3 animate-pulse">
                <Shield className="w-4 h-4" />
                Pay After Ranking Guarantee
              </div>
              <h3 className="text-2xl font-bold mb-2">Local SEO Package</h3>
              <p className="text-white/80">Complete Local SEO for Any Business in India</p>
            </div>

            {/* Price */}
            <div className="p-6 text-center border-b border-border">
              <p className="text-sm text-muted-foreground mb-2">Total Investment (pay after ranking)</p>
              <div className="flex items-center justify-center gap-1">
                <IndianRupee className="w-8 h-8 text-foreground" />
                <span className="text-5xl md:text-6xl font-bold text-foreground">25,000</span>
              </div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-muted-foreground line-through">₹75,000</span>
                <span className="bg-accent text-white px-2 py-0.5 rounded text-sm font-bold">67% OFF</span>
              </div>
              
              {/* Payment Steps */}
              <div className="mt-6 space-y-3 text-left">
                <div className="bg-green-500 text-white rounded-xl p-4">
                  <p className="text-xs uppercase tracking-wider mb-1">Pay Today</p>
                  <p className="text-2xl font-bold">₹0 — Nothing!</p>
                  <p className="text-sm text-white/80">We start working on your SEO right away</p>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Pay After Ranking</p>
                  <p className="text-2xl font-bold text-foreground">₹25,000</p>
                  <p className="text-sm text-muted-foreground">Only when you see results on Google!</p>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                <p className="text-sm font-bold text-red-700">🔒 No Ranking = No Payment!</p>
              </div>
            </div>

            {/* Features */}
            <div className="p-6 space-y-4">
              <h4 className="font-semibold text-foreground mb-4">What's Included:</h4>
              {[
                "Website SEO + Free Redesign (if needed)",
                "Local keyword research & targeting",
                "Quality backlink building",
                "Local directory submissions",
                "Google Maps ranking",
                "Results in 15-30 days",
                "6 months of active SEO work",
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
                onClick={handleCTAClick}
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold h-12 text-base"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Started - WhatsApp Now
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-3">
                Free consultation • No commitment required
              </p>
            </div>
          </div>
        </div>

        {/* Trust Points */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-3">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-foreground">₹0 Upfront — Pay Later!</h4>
            <p className="text-sm text-muted-foreground">₹25,000 after we rank you</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-3">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-foreground">No Ranking = No Payment</h4>
            <p className="text-sm text-muted-foreground">You don't pay a single rupee</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-foreground">Results in 15-30 Days</h4>
            <p className="text-sm text-muted-foreground">See rankings before paying</p>
          </div>
        </div>
      </div>
    </section>
  )
}
