"use client"

import { Award, Users, HandshakeIcon, Target, Clock } from "lucide-react"

const trustPoints = [
  {
    icon: Target,
    title: "1 Month FREE Trial",
    description: "Start with a FREE 1 month SEO trial. No payment required. Rank in your city before you pay anything!",
  },
  {
    icon: Users,
    title: "50+ Businesses Ranked",
    description: "We've helped shops, clinics, professionals, and service providers get found on Google.",
  },
  {
    icon: HandshakeIcon,
    title: "No Contracts, No Lock-ins",
    description: "No long-term contracts. No exit fees. We earn your trust through results, not paperwork.",
  },
  {
    icon: Clock,
    title: "Direct Communication",
    description: "Talk directly to the person working on your SEO. No account managers. No runaround.",
  },
  {
    icon: Award,
    title: "Honest & Transparent",
    description: "We tell you upfront if SEO will work for your business. No fake promises. No guaranteed #1 ranking claims.",
  },
]

export function TrustSection() {
  return (
    <section id="trust" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider mb-3 text-sm">Why Trust Us?</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Businesses Choose Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're not a big agency. We're local SEO specialists who care about your business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <point.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial / Social Proof */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border text-center">
            <div className="text-4xl mb-4">"</div>
            <p className="text-lg md:text-xl text-foreground italic mb-6">
              I was paying ₹8,000/month to an agency for 6 months with no results. These guys got me ranking on Google Maps in just 15 days — and I only paid after I saw myself on the first page. The pay-after-ranking model gave me confidence to try them.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">RS</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">Rajesh S.</p>
                <p className="text-sm text-muted-foreground">Service Provider, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
