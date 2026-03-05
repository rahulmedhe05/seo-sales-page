"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How long does it take to rank on Google?",
    answer:
      "We use the best SEO strategies to show your business on Google in 30 to 45 days. Our proven methods focus on quick yet sustainable results. We work aggressively on your local SEO to ensure you start seeing rankings within this timeframe.",
  },
  {
    question: "What if I don't rank? Do I still have to pay?",
    answer:
      "No. Our model is simple — you pay only after you see yourself ranking on Google for your target keywords. If we don't deliver results, you don't pay. This keeps us accountable and removes your risk completely.",
  },
  {
    question: "Is this suitable for my business?",
    answer:
      "If you have a local business and your customers search for your services on Google, then yes — Local SEO will help you. This works for shops, clinics, restaurants, professionals, service providers, coaching centres, and virtually any local business.",
  },
  {
    question: "Why one-time payment instead of monthly fees?",
    answer:
      "Most of the heavy SEO work happens in the first 3-6 months. After that, your rankings typically maintain themselves with minimal effort. We believe in one-time payment because it's honest — you shouldn't keep paying monthly for work done once. Enjoy long-term results!",
  },
  {
    question: "Do I need a website for SEO?",
    answer:
      "Yes, a website is essential for our SEO services. We optimize your website content, structure, and technical aspects to help you rank on Google. If your current website needs improvement, we include a free redesign as part of our package.",
  },
  {
    question: "Can you guarantee #1 ranking on Google?",
    answer:
      "No honest SEO professional can guarantee #1 ranking — Google's algorithm is controlled by Google, not us. What we CAN guarantee is our best effort, proven strategies, and results within 30-45 days. Our one-time payment model means you save lakhs compared to monthly SEO agencies.",
  },
  {
    question: "What keywords will I rank for?",
    answer:
      "We target keywords your potential customers are actually searching for, like '[your service] in [your city]'. During our consultation, we'll research and discuss the most valuable keywords for your specific business.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simple! Click the WhatsApp button or fill out the form on this page. We'll have a quick chat to understand your business, do a free SEO analysis, and tell you exactly how we can help. No commitment required for the consultation.",
  },
]

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider mb-3 text-sm">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions About Local SEO
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Got questions? We've got clear, honest answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-muted/30">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Schema.org FAQ Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
