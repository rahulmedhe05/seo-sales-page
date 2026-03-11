"use client"

import { 
  IndianRupee, 
  Calendar, 
  ShieldCheck, 
  TrendingUp, 
  Globe, 
  Headphones,
  ArrowRight,
  MapPin,
  Bot,
  Target
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWhatsAppForm } from "@/components/whatsapp-form-context"

const benefits = [
  {
    icon: IndianRupee,
    title: "100% FREE for Vadodara",
    description: "Get a professional website and complete SEO absolutely free! Exclusive offer for Vadodara businesses.",
    highlight: "Completely FREE",
    color: "bg-green-500",
  },
  {
    icon: Calendar,
    title: "Results in 30 Days",
    description: "See your business climbing Google rankings within 30 days. We use the best strategies to deliver fast results.",
    highlight: "Fastest in Industry",
    color: "bg-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "Professional Website Included",
    description: "Get a modern, fast-loading website designed for your business. Included FREE in the package!",
    highlight: "Website Included",
    color: "bg-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Beat Your Top 5 Competitors",
    description: "We analyze your top 5 local competitors and ensure your business ranks ahead of them. Guaranteed!",
    highlight: "Competitor Domination",
    color: "bg-orange-500",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Strong",
    description: "Full optimization of your Google Business Profile for maximum visibility in local searches and Google Maps.",
    highlight: "Maps Ranking Boost",
    color: "bg-red-500",
  },
  {
    icon: Bot,
    title: "AI Search Ready",
    description: "Get found on AI-powered searches like ChatGPT, Gemini, Perplexity & other AI assistants. Future-proof your SEO!",
    highlight: "ChatGPT & Gemini Ready",
    color: "bg-indigo-500",
  },
  {
    icon: Globe,
    title: "Complete SEO Optimization",
    description: "Full on-page SEO, keyword targeting, and content optimization to rank your business on Google.",
    highlight: "Rank on Google",
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
  const { openForm } = useWhatsAppForm()
  
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
            onClick={openForm}
          >
            Claim These Benefits Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
