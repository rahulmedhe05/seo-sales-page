"use client"

import { Check, Shield, Zap, Clock, MessageCircle, X, IndianRupee, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const handleCTAClick = () => {
    const whatsappURL = `https://wa.me/916353583148?text=${encodeURIComponent("Hi! I'm interested in the FREE 1 Month SEO Trial + ₹20,000/Quarter package. Please share more details.")}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider mb-3 text-sm">🎁 Limited Time Offer</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            FREE SEO for 1 Month — If You Like, Continue!
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Try our SEO FREE for 1 month. Love the results? Continue at just ₹20,000/Quarter. No obligation!
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

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* FREE Trial Card */}
          <div className="bg-card rounded-2xl border-4 border-green-500 shadow-2xl overflow-visible relative mt-6">
            {/* FREE Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 z-10">
              🎁 FREE TRIAL
            </div>
            
            {/* Header */}
            <div className="bg-green-600 text-white p-6 text-center pt-8">
              <div className="inline-flex items-center gap-2 bg-green-400 rounded-full px-4 py-1.5 text-sm font-bold mb-3 animate-pulse">
                <Shield className="w-4 h-4" />
                No Payment Required!
              </div>
              <h3 className="text-2xl font-bold mb-2">1 Month FREE Trial</h3>
              <p className="text-white/80">Try Our SEO — Risk Free!</p>
            </div>

            {/* Price */}
            <div className="p-6 text-center border-b border-border">
              <p className="text-sm text-muted-foreground mb-2">First Month</p>
              <div className="flex items-center justify-center gap-1">
                <span className="text-5xl md:text-6xl font-bold text-green-600">FREE</span>
              </div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-muted-foreground line-through">₹6,666</span>
                <span className="bg-green-500 text-white px-2 py-0.5 rounded text-sm font-bold">100% OFF</span>
              </div>
              
              <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm font-bold text-green-700">🎉 Start ranking in your city TODAY!</p>
              </div>
            </div>

            {/* Features */}
            <div className="p-6 space-y-4">
              <h4 className="font-semibold text-foreground mb-4">FREE Trial Includes:</h4>
              {[
                "Complete website SEO audit",
                "Local keyword research",
                "On-page SEO optimization",
                "Google Business Profile optimization",
                "AI Search visibility (ChatGPT, Gemini & more)",
                "Competitor analysis — beat your top 5!",
                "Rank in your city!",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="p-6 bg-green-50">
              <Button 
                onClick={handleCTAClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold h-12 text-base"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start FREE Trial Now
              </Button>
            </div>
          </div>

          {/* Quarterly Package Card */}
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
                After FREE Trial
              </div>
              <h3 className="text-2xl font-bold mb-2">Quarterly SEO Package</h3>
              <p className="text-white/80">If You Like, Continue After Trial!</p>
            </div>

            {/* Price */}
            <div className="p-6 text-center border-b border-border">
              <p className="text-sm text-muted-foreground mb-2">Per Quarter (3 Months)</p>
              <div className="flex items-center justify-center gap-1">
                <IndianRupee className="w-8 h-8 text-foreground" />
                <span className="text-5xl md:text-6xl font-bold text-foreground">20,000</span>
              </div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-muted-foreground line-through">₹45,000</span>
                <span className="bg-accent text-white px-2 py-0.5 rounded text-sm font-bold">55% OFF</span>
              </div>
              
              <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-sm font-bold text-amber-700">⚠️ 100% Advance Payment Required</p>
              </div>
            </div>

            {/* Features */}
            <div className="p-6 space-y-4">
              <h4 className="font-semibold text-foreground mb-4">Quarterly Package Includes:</h4>
              {[
                "Website SEO + Free Redesign (if needed)",
                "Google Business Profile — fully optimized",
                "AI Search ready (ChatGPT, Gemini, Perplexity)",
                "Beat your top 5 competitors guaranteed",
                "Advanced local keyword targeting",
                "Quality backlink building",
                "Google Maps ranking",
                "3 months of active SEO work",
                "Monthly performance reports",
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
                Start with FREE Trial
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-3">
                FREE 1 Month → If you like, continue at ₹20K/Quarter
              </p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2">
              📋 What's Included:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-amber-800"><strong>Google Business Profile</strong> — Fully optimized for maximum local visibility & Maps ranking.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-amber-800"><strong>Website SEO Strong</strong> — Complete on-page optimization + free redesign if needed.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-amber-800"><strong>AI Search Visibility</strong> — Get found on ChatGPT, Gemini, Perplexity & other AI assistants.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-amber-800"><strong>Beat Top 5 Competitors</strong> — We analyze & ensure you rank ahead of your competition!</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-amber-800"><strong>100% Advance Payment</strong> — Quarterly subscription requires full advance payment.</span>
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
            <h4 className="font-bold text-foreground">1 Month FREE Trial</h4>
            <p className="text-sm text-muted-foreground">No payment to start</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-3">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-foreground">₹20,000/Quarter</h4>
            <p className="text-sm text-muted-foreground">100% Advance Payment</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-foreground">Rank in Your City</h4>
            <p className="text-sm text-muted-foreground">Local SEO optimization</p>
          </div>
        </div>
      </div>
    </section>
  )
}
