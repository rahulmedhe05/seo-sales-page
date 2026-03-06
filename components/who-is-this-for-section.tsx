"use client"

import { Store, Stethoscope, Wrench, GraduationCap, Building2, Briefcase, UtensilsCrossed, Car } from "lucide-react"

const businessTypes = [
  {
    icon: Store,
    title: "Shops & Retail Stores",
    description: "Clothing, electronics, grocery, jewellery, furniture, and all retail businesses",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Cafes",
    description: "Hotels, restaurants, cafes, sweet shops, bakeries, and food businesses",
  },
  {
    icon: Stethoscope,
    title: "Clinics & Hospitals",
    description: "Doctors, dentists, physiotherapists, pathology labs, and healthcare providers",
  },
  {
    icon: Wrench,
    title: "Service Providers",
    description: "Plumbers, electricians, AC repair, pest control, cleaning, and home services",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description: "CA, lawyers, consultants, architects, interior designers, and professional services",
  },
  {
    icon: GraduationCap,
    title: "Coaching & Education",
    description: "Tuition classes, coaching centres, schools, training institutes, and educators",
  },
  {
    icon: Building2,
    title: "Manufacturing & Trading",
    description: "Manufacturers, wholesalers, distributors, B2B companies, and industrial units",
  },
  {
    icon: Car,
    title: "Auto & Transport",
    description: "Car dealers, garages, driving schools, transport services, and auto businesses",
  },
]

export function WhoIsThisForSection() {
  return (
    <section id="who-is-this-for" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider mb-3 text-sm">Who Is This For?</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Perfect for <span className="text-primary">ALL Local Businesses</span> in Vadodara
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            If customers search for your service on Google and you want them to find <span className="font-bold text-foreground">YOU</span> instead of your competitors — this is for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {businessTypes.map((business, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <business.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{business.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{business.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-foreground font-medium">
            <span className="text-primary">Bottom line:</span> If you have a local business <span className="font-bold">in Vadodara</span> and want more customers from Google — we can help.
          </p>
        </div>
      </div>
    </section>
  )
}
