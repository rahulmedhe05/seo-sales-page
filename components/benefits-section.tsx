"use client"

import { 
  IndianRupee, 
  Calendar, 
  ShieldCheck, 
  TrendingUp, 
  Globe, 
  Headphones,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: IndianRupee,
    title: "1 Month FREE SEO Trial",
    description: "Start with a FREE 1 month trial. We rank your business in your city — no payment required to start!",
    highlight: "100% FREE to Start",
    color: "bg-green-500",
  },
  {
    icon: Calendar,
    title: "Results in 15-30 Days",
    description: "See your business climbing Google rankings within weeks, not months. We work fast because we're confident.",
    highlight: "Fastest in Industry",
    color: "bg-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "₹20,000/Quarter — If You Like!",
    description: "Love the FREE trial results? Continue at just ₹20,000 per quarter. No obligation — only if you're happy!",
    highlight: "No Obligation",
    color: "bg-purple-500",
  },
  {
    icon: TrendingUp,
    title: "First Page or Free",
    description: "We guarantee first page ranking on Google for your target keywords. No excuses, no exceptions.",
    highlight: "Written Guarantee",
    color: "bg-orange-500",
  },
  {
    icon: Globe,
    title: "Free Website Redesign",
    description: "Need a better website? We'll redesign it for free as part of our SEO package. No extra charges.",
    highlight: "₹30,000 Value - FREE",
    color: "bg-pink-500",
  },
  {
    icon: Headphones,
    title: "Direct WhatsApp Support",
    description: "No ticketing system. No waiting. Message us on WhatsApp and get instant responses from the team.",
    highlight: "24/7 Available",
    color: "bg-teal-500",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider mb-3 text-sm">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Benefits You Won't Get Anywhere Else
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We've designed our service to eliminate every excuse for NOT ranking on Google.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group bg-card border border-border rounded-2xl p-6 hover:border-accent hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${benefit.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              
              <div className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs font-bold px-2 py-1 rounded mb-3">
                {benefit.highlight}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold h-14 px-8 text-lg"
            onClick={() => {
              const whatsappURL = `https://wa.me/916353583148?text=${encodeURIComponent("Hi! I want to learn more about your Local SEO service.")}`
              window.open(whatsappURL, "_blank")
            }}
          >
            Claim These Benefits Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
