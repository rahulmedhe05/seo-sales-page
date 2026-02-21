"use client"

import { X, Check, ArrowRight } from "lucide-react"

const comparisons = [
  {
    aspect: "Payment Model",
    agencies: "Monthly fees of ₹5,000 - ₹50,000+",
    us: "FREE 1 Month Trial + ₹20,000/Quarter",
  },
  {
    aspect: "Risk",
    agencies: "You pay upfront, hope for results",
    us: "Try FREE for 1 month — no obligation!",
  },
  {
    aspect: "Contracts",
    agencies: "6-12 month lock-in contracts",
    us: "No lock-in. Results-based relationship",
  },
  {
    aspect: "Transparency",
    agencies: "Complex reports, confusing metrics",
    us: "Simple reports. Can you see yourself on Google? Yes or No.",
  },
  {
    aspect: "Focus",
    agencies: "Managing multiple clients, generic strategies",
    us: "Focused on local businesses with personalized service",
  },
  {
    aspect: "Results Timeline",
    agencies: "Vague promises, always 'more time needed'",
    us: "Clear timeline. You see progress or you don't pay.",
  },
]

export function WhyDifferentSection() {
  return (
    <section id="why-different" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider mb-3 text-sm">Why We're Different</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            We're Not Like Other SEO Agencies
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most agencies charge monthly fees and make promises. We charge once and deliver results—or you don't pay.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-muted/50">
              <div className="p-4 border-r border-border">
                <span className="font-semibold text-foreground">Comparison</span>
              </div>
              <div className="p-4 border-r border-border text-center">
                <span className="font-semibold text-muted-foreground">Typical SEO Agencies</span>
              </div>
              <div className="p-4 text-center bg-primary/5">
                <span className="font-semibold text-primary">Our Approach</span>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 ${index !== comparisons.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="p-4 border-r border-border">
                  <span className="font-medium text-foreground">{item.aspect}</span>
                </div>
                <div className="p-4 border-r border-border flex items-start gap-2">
                  <X className="w-4 h-4 text-destructive flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground text-sm">{item.agencies}</span>
                </div>
                <div className="p-4 bg-primary/5 flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground text-sm">{item.us}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Tired of paying monthly fees with no results?
            </h3>
            <p className="text-muted-foreground mb-5">
              Switch to our risk-free model. Pay only when you rank.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Talk to Us Today
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
