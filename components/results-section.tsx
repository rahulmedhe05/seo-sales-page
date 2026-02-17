"use client"

import { TrendingUp, Target, Award, BarChart3, ArrowUp, CheckCircle2 } from "lucide-react"

const results = [
  {
    business: "Dental Clinic",
    location: "Mumbai",
    keyword: "best dentist in Andheri",
    beforeRank: "Not in top 100",
    afterRank: "#2 on Google",
    timeToRank: "18 days",
    color: "from-blue-500 to-cyan-500",
  },
  {
    business: "Electronics Store",
    location: "Delhi",
    keyword: "mobile repair shop near me",
    beforeRank: "Page 5",
    afterRank: "#1 on Google Maps",
    timeToRank: "21 days",
    color: "from-green-500 to-emerald-500",
  },
  {
    business: "CA Firm",
    location: "Bangalore",
    keyword: "chartered accountant Koramangala",
    beforeRank: "Not ranking",
    afterRank: "#3 on Google",
    timeToRank: "25 days",
    color: "from-purple-500 to-pink-500",
  },
]

const stats = [
  { number: "₹0", label: "Pay Upfront", icon: Target },
  { number: "15-30", label: "Days to Rank", icon: TrendingUp },
  { number: "₹25K", label: "Pay After Ranking", icon: Award },
  { number: "₹0", label: "If No Results", icon: BarChart3 },
]

export function ResultsSection() {
  return (
    <section id="results" className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider mb-3 text-sm">Real Results</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            See What We've Achieved for Our Clients
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Real businesses. Real rankings. Real results in 15-30 days.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-accent">{stat.number}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Results Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {results.map((result, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl">
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${result.color} p-4 text-white`}>
                <h3 className="font-bold text-lg">{result.business}</h3>
                <p className="text-white/80 text-sm">{result.location}</p>
              </div>
              
              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Keyword */}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Target Keyword</p>
                  <p className="font-semibold text-gray-800 text-sm">"{result.keyword}"</p>
                </div>
                
                {/* Before/After */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-red-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-red-600 mb-1">Before</p>
                    <p className="font-bold text-red-700 text-sm">{result.beforeRank}</p>
                  </div>
                  <ArrowUp className="w-6 h-6 text-green-500 rotate-45" />
                  <div className="flex-1 bg-green-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-green-600 mb-1">After</p>
                    <p className="font-bold text-green-700 text-sm">{result.afterRank}</p>
                  </div>
                </div>
                
                {/* Time to Rank */}
                <div className="flex items-center justify-center gap-2 bg-accent/10 rounded-lg p-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-gray-700">Ranked in {result.timeToRank}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-white/90 text-lg">
            <span className="text-accent font-bold">Your business could be next.</span> ₹0 upfront — pay ₹25,000 only after we rank you!
          </p>
          <p className="text-white/70 text-base mt-2">
            No ranking? You don't pay a single rupee!
          </p>
        </div>
      </div>
    </section>
  )
}
