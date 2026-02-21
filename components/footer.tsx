"use client"

import { MapPin, Phone, Mail, TrendingUp, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-3 sm:px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">GoPlnr</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              FREE 1 Month SEO Trial. Rank in your city. If you like, continue at ₹20,000/Quarter.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "home" },
                { label: "How It Works", id: "what-we-do" },
                { label: "Pricing", id: "pricing" },
                { label: "FAQ", id: "faq" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id)
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-3 text-white/70">
              <li>Local SEO</li>
              <li>Google Maps Ranking</li>
              <li>Website SEO</li>
              <li>Local Citations</li>
              <li>Backlink Building</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-white/70">
                  India (Remote Services)
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+916353583148"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  +91 63535 83148
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:hello@goplnr.com"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  hello@goplnr.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2026 GoPlnr. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keywords (hidden) */}
      <div className="sr-only">
        Local SEO services, Google ranking, SEO services India, Google Maps ranking, local business SEO, digital marketing, website SEO optimization, local search optimization
      </div>
    </footer>
  )
}
