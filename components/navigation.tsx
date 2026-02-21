"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, TrendingUp } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${isScrolled ? "bg-primary" : "bg-white/20"}`}>
              <TrendingUp className={`w-5 h-5 ${isScrolled ? "text-white" : "text-white"}`} />
            </div>
            <div>
              <h1 className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}>
                GoPlnr
              </h1>
              <p className={`text-xs transition-colors duration-300 ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
                FREE 1 Month SEO Trial!
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-sm transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("what-we-do")}
              className={`text-sm transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className={`text-sm transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className={`text-sm transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-sm px-4 py-2 h-auto"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 bg-white rounded-lg shadow-lg border border-border mt-2">
            <div className="flex flex-col gap-1">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-sm text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-4 rounded-md"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("what-we-do")}
                className="text-left text-sm text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-4 rounded-md"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-sm text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-4 rounded-md"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-sm text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-4 rounded-md"
              >
                FAQ
              </button>
              <div className="px-3 pt-2">
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-accent hover:bg-accent/90 text-white font-semibold w-full text-sm py-2 h-auto"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
