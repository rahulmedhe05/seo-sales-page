"use client"

import { Search, FileText, Link2, BarChart3, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Business Analysis",
    description: "We study your business, competitors, and find the best keywords your customers are searching for in your city.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Website SEO + Redesign",
    description: "We optimize (and redesign if needed) your website for Google's algorithm to ensure maximum ranking potential.",
  },
  {
    number: "03",
    icon: Link2,
    title: "Local Citations & Backlinks",
    description: "We list your business on trusted directories and build quality backlinks to increase your authority.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Ranking in 15-30 Days",
    description: "We track your rankings and provide clear reports. See results in 15-30 days — completely FREE for the first month!",
  },
]

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider mb-3 text-sm">What We Do</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Simple 4-Step Process to Rank Your Business
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No technical jargon. No complicated reports. Just clear steps to get your business found on Google.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                    {step.number}
                  </span>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-3">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-6 md:p-8 border-2 border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                In Simple Words...
              </h3>
              <p className="text-muted-foreground text-lg">
                We make sure when someone searches <span className="text-primary font-semibold">"[your service] in [your city]"</span> on Google — they find YOUR business. <span className="font-bold text-accent">Pay only after we rank you!</span>
              </p>
            </div>
            <a 
              href="#contact" 
              className="flex-shrink-0 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
