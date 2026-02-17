"use client"

import { useState, useEffect, useCallback } from "react"
import {
  getLiveViewers,
  getViewersInLastMinutes,
  getTotalVisitors,
  getTotalSessions,
  getAverageTimeSpent,
  getTotalTimeSpent,
  getTodaySessions,
  getSessionsByDate,
  getSessionsByHour,
  getPageViewStats,
  getSessions,
  formatTime,
  clearAnalytics,
  type VisitorSession,
} from "@/lib/analytics"
import {
  Eye,
  Clock,
  Users,
  Activity,
  FileText,
  BarChart3,
  TrendingUp,
  LogOut,
  Trash2,
  RefreshCw,
  Radio,
  Timer,
  CalendarDays,
  MousePointerClick,
} from "lucide-react"

const EMAIL = "dailyleads@gmail.com"
const PASSWORD = "DLead@7890"
const AUTH_KEY = "leads_auth"
const LEADS_KEY = "seo_service_leads"

interface Lead {
  id: string
  fullName: string
  phoneNumber: string
  businessName: string
  businessCategory: string
  location: string
  websiteUrl: string
  status?: string
  submittedAt: string
}

export default function AnalyticsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  // Analytics state
  const [liveViewers, setLiveViewers] = useState(0)
  const [viewers5min, setViewers5min] = useState(0)
  const [viewers1hr, setViewers1hr] = useState(0)
  const [totalVisitors, setTotalVisitors] = useState(0)
  const [totalSessions, setTotalSessions] = useState(0)
  const [avgTimeSpent, setAvgTimeSpent] = useState(0)
  const [totalTimeSpent, setTotalTimeSpent] = useState(0)
  const [todaySessions, setTodaySessions] = useState<VisitorSession[]>([])
  const [dailyData, setDailyData] = useState<{ date: string; sessions: number; visitors: number }[]>([])
  const [hourlyData, setHourlyData] = useState<{ hour: string; count: number }[]>([])
  const [pageViews, setPageViews] = useState<{ page: string; views: number }[]>([])
  const [leads, setLeads] = useState<Lead[]>([])
  const [recentSessions, setRecentSessions] = useState<VisitorSession[]>([])
  const [activeTab, setActiveTab] = useState<"overview" | "visitors" | "forms">("overview")

  const loadAnalytics = useCallback(() => {
    setLiveViewers(getLiveViewers())
    setViewers5min(getViewersInLastMinutes(5))
    setViewers1hr(getViewersInLastMinutes(60))
    setTotalVisitors(getTotalVisitors())
    setTotalSessions(getTotalSessions())
    setAvgTimeSpent(getAverageTimeSpent())
    setTotalTimeSpent(getTotalTimeSpent())
    setTodaySessions(getTodaySessions())
    setDailyData(getSessionsByDate(30))
    setHourlyData(getSessionsByHour())
    setPageViews(getPageViewStats())

    // Get recent sessions
    const allSessions = getSessions()
    setRecentSessions(allSessions.slice(-50).reverse())

    // Load leads
    try {
      const stored = localStorage.getItem(LEADS_KEY)
      if (stored) {
        const data = JSON.parse(stored)
        if (Array.isArray(data)) setLeads(data)
      }
    } catch (e) {
      console.error("Error loading leads:", e)
    }
  }, [])

  useEffect(() => {
    const auth = localStorage.getItem(AUTH_KEY)
    if (auth === "true") {
      setIsLoggedIn(true)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoggedIn) return
    loadAnalytics()

    // Auto-refresh every 10 seconds
    const interval = setInterval(loadAnalytics, 10000)
    return () => clearInterval(interval)
  }, [isLoggedIn, loadAnalytics])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (email === EMAIL && password === PASSWORD) {
      localStorage.setItem(AUTH_KEY, "true")
      setIsLoggedIn(true)
    } else {
      setError("Invalid email or password")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY)
    setIsLoggedIn(false)
    setEmail("")
    setPassword("")
  }

  const handleClearAnalytics = () => {
    if (confirm("Are you sure you want to clear all analytics data? This cannot be undone.")) {
      clearAnalytics()
      loadAnalytics()
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  // Login Form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 to-gray-900 p-4">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">Sign in to view site analytics</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-sm">{error}</div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                placeholder="Enter email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Max value for bar charts
  const maxHourly = Math.max(...hourlyData.map((d) => d.count), 1)
  const maxDaily = Math.max(...dailyData.map((d) => d.sessions), 1)

  // Dashboard
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Analytics Dashboard</h1>
              <p className="text-gray-400 text-xs">Real-time site monitoring</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={loadAnalytics}
              className="flex items-center gap-1.5 bg-gray-800 text-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-700 transition text-sm"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Refresh
            </button>
            <button
              onClick={handleClearAnalytics}
              className="flex items-center gap-1.5 bg-red-600/10 text-red-400 px-3 py-1.5 rounded-lg hover:bg-red-600/20 transition text-sm"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 bg-gray-800 text-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-700 transition text-sm"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Tab Navigation */}
        <div className="flex gap-1 mb-6 bg-gray-900 rounded-lg p-1 w-fit">
          {[
            { id: "overview" as const, label: "Overview", icon: Activity },
            { id: "visitors" as const, label: "Visitors", icon: Users },
            { id: "forms" as const, label: "Form Submissions", icon: FileText },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* === OVERVIEW TAB === */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Live Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Live Now */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 relative overflow-hidden">
                <div className="absolute top-3 right-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-green-400 mb-1">
                  <Radio className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wide">Live Now</span>
                </div>
                <p className="text-3xl font-bold text-white">{liveViewers}</p>
                <p className="text-gray-500 text-xs mt-1">watching right now</p>
              </div>

              {/* Last 5 Minutes */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                  <Timer className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wide">5 Min</span>
                </div>
                <p className="text-3xl font-bold text-white">{viewers5min}</p>
                <p className="text-gray-500 text-xs mt-1">in last 5 minutes</p>
              </div>

              {/* Last 1 Hour */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 text-purple-400 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wide">1 Hour</span>
                </div>
                <p className="text-3xl font-bold text-white">{viewers1hr}</p>
                <p className="text-gray-500 text-xs mt-1">in last hour</p>
              </div>

              {/* Total */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wide">Total</span>
                </div>
                <p className="text-3xl font-bold text-white">{totalVisitors}</p>
                <p className="text-gray-500 text-xs mt-1">unique visitors</p>
              </div>
            </div>

            {/* Time & Engagement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 text-cyan-400 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wide">Avg Time</span>
                </div>
                <p className="text-2xl font-bold text-white">{formatTime(avgTimeSpent)}</p>
                <p className="text-gray-500 text-xs mt-1">per session</p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 text-teal-400 mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wide">Total Time</span>
                </div>
                <p className="text-2xl font-bold text-white">{formatTime(totalTimeSpent)}</p>
                <p className="text-gray-500 text-xs mt-1">all visitors combined</p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 text-orange-400 mb-1">
                  <Eye className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wide">Sessions</span>
                </div>
                <p className="text-2xl font-bold text-white">{totalSessions}</p>
                <p className="text-gray-500 text-xs mt-1">total sessions</p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 text-pink-400 mb-1">
                  <CalendarDays className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wide">Today</span>
                </div>
                <p className="text-2xl font-bold text-white">{todaySessions.length}</p>
                <p className="text-gray-500 text-xs mt-1">sessions today</p>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Hourly Chart */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-400" />
                  Visitors by Hour (Last 24h)
                </h3>
                <div className="flex items-end gap-1 h-32">
                  {hourlyData.map((d, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center group relative">
                      <div className="absolute -top-6 bg-gray-800 text-white text-xs px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                        {d.hour}: {d.count}
                      </div>
                      <div
                        className="w-full bg-blue-500/80 rounded-t hover:bg-blue-400 transition-all cursor-pointer"
                        style={{
                          height: `${Math.max((d.count / maxHourly) * 100, 2)}%`,
                          minHeight: "2px",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-gray-500">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>23:00</span>
                </div>
              </div>

              {/* Daily Chart */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  Daily Sessions (Last 30 Days)
                </h3>
                {dailyData.length > 0 ? (
                  <>
                    <div className="flex items-end gap-[2px] h-32">
                      {dailyData.map((d, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center group relative">
                          <div className="absolute -top-6 bg-gray-800 text-white text-xs px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                            {d.date}: {d.sessions} sessions
                          </div>
                          <div
                            className="w-full bg-green-500/80 rounded-t hover:bg-green-400 transition-all cursor-pointer"
                            style={{
                              height: `${Math.max((d.sessions / maxDaily) * 100, 2)}%`,
                              minHeight: "2px",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-gray-500">
                      <span>{dailyData[0]?.date?.slice(5)}</span>
                      <span>{dailyData[dailyData.length - 1]?.date?.slice(5)}</span>
                    </div>
                  </>
                ) : (
                  <div className="h-32 flex items-center justify-center text-gray-600 text-sm">
                    No data yet. Visitors will appear here.
                  </div>
                )}
              </div>
            </div>

            {/* Page Views & Form Stats */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Top Pages */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                  <MousePointerClick className="w-4 h-4 text-purple-400" />
                  Top Pages
                </h3>
                {pageViews.length > 0 ? (
                  <div className="space-y-2">
                    {pageViews.slice(0, 8).map((pv, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-gray-300 truncate max-w-[200px]">{pv.page}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-purple-500 rounded-full"
                              style={{ width: `${(pv.views / pageViews[0].views) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 w-8 text-right">{pv.views}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-sm">No page views recorded yet</p>
                )}
              </div>

              {/* Quick Form Stats */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  Form Submissions Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                    <span className="text-gray-400 text-sm">Total Submissions</span>
                    <span className="text-xl font-bold text-white">{leads.length}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                    <span className="text-gray-400 text-sm">New Leads</span>
                    <span className="text-xl font-bold text-yellow-400">
                      {leads.filter((l) => !l.status || l.status === "new").length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                    <span className="text-gray-400 text-sm">Converted</span>
                    <span className="text-xl font-bold text-green-400">
                      {leads.filter((l) => l.status === "converted").length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Conversion Rate</span>
                    <span className="text-xl font-bold text-blue-400">
                      {leads.length > 0
                        ? ((leads.filter((l) => l.status === "converted").length / leads.length) * 100).toFixed(1)
                        : 0}
                      %
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === VISITORS TAB === */}
        {activeTab === "visitors" && (
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  Recent Visitor Sessions
                </h3>
                <p className="text-gray-500 text-xs mt-1">Last 50 sessions</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="text-left py-2.5 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="text-left py-2.5 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Entry Time
                      </th>
                      <th className="text-left py-2.5 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Last Active
                      </th>
                      <th className="text-left py-2.5 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Time Spent
                      </th>
                      <th className="text-left py-2.5 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Pages
                      </th>
                      <th className="text-left py-2.5 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Referrer
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {recentSessions.length > 0 ? (
                      recentSessions.map((session) => {
                        const isLive =
                          new Date(session.lastActiveTime).getTime() > Date.now() - 30000
                        return (
                          <tr key={session.sessionId} className="hover:bg-gray-800/30 transition">
                            <td className="py-2.5 px-4">
                              {isLive ? (
                                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-400">
                                  <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                  </span>
                                  Live
                                </span>
                              ) : (
                                <span className="text-xs text-gray-500">Offline</span>
                              )}
                            </td>
                            <td className="py-2.5 px-4 text-sm text-gray-300">
                              {new Date(session.entryTime).toLocaleString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </td>
                            <td className="py-2.5 px-4 text-sm text-gray-400">
                              {new Date(session.lastActiveTime).toLocaleString("en-IN", {
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                              })}
                            </td>
                            <td className="py-2.5 px-4">
                              <span className="text-sm font-mono text-cyan-400">
                                {formatTime(session.timeSpentSeconds)}
                              </span>
                            </td>
                            <td className="py-2.5 px-4">
                              <div className="flex flex-wrap gap-1">
                                {session.pages.map((page, i) => (
                                  <span
                                    key={i}
                                    className="bg-gray-800 text-gray-300 text-xs px-1.5 py-0.5 rounded"
                                  >
                                    {page}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="py-2.5 px-4 text-sm text-gray-500 truncate max-w-[150px]">
                              {session.referrer === "direct" ? (
                                <span className="text-gray-600">Direct</span>
                              ) : (
                                session.referrer.replace(/^https?:\/\//, "").split("/")[0]
                              )}
                            </td>
                          </tr>
                        )
                      })
                    ) : (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-gray-600">
                          <Users className="w-10 h-10 mx-auto mb-2 opacity-20" />
                          <p className="text-sm">No visitor sessions recorded yet</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* === FORMS TAB === */}
        {activeTab === "forms" && (
          <div className="space-y-6">
            {/* Form Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Total Forms</p>
                <p className="text-3xl font-bold">{leads.length}</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <p className="text-yellow-400 text-xs uppercase tracking-wide mb-1">New</p>
                <p className="text-3xl font-bold text-yellow-400">
                  {leads.filter((l) => !l.status || l.status === "new").length}
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <p className="text-green-400 text-xs uppercase tracking-wide mb-1">Converted</p>
                <p className="text-3xl font-bold text-green-400">
                  {leads.filter((l) => l.status === "converted").length}
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <p className="text-red-400 text-xs uppercase tracking-wide mb-1">Rejected</p>
                <p className="text-3xl font-bold text-red-400">
                  {leads.filter((l) => l.status === "rejected").length}
                </p>
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  All Form Submissions
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="text-left py-2.5 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="text-left py-2.5 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="text-left py-2.5 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Business
                      </th>
                      <th className="text-left py-2.5 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="text-left py-2.5 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="text-left py-2.5 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Website
                      </th>
                      <th className="text-left py-2.5 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="text-left py-2.5 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {leads.length > 0 ? (
                      [...leads].reverse().map((lead) => (
                        <tr key={lead.id} className="hover:bg-gray-800/30 transition">
                          <td className="py-2.5 px-4 text-sm font-medium text-white">
                            {lead.fullName || "---"}
                          </td>
                          <td className="py-2.5 px-4">
                            <a
                              href={`tel:${lead.phoneNumber}`}
                              className="text-blue-400 hover:underline text-sm"
                            >
                              {lead.phoneNumber || "---"}
                            </a>
                          </td>
                          <td className="py-2.5 px-4 text-sm text-gray-300">{lead.businessName || "---"}</td>
                          <td className="py-2.5 px-4">
                            <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-xs">
                              {lead.businessCategory || "---"}
                            </span>
                          </td>
                          <td className="py-2.5 px-4 text-sm text-gray-400">{lead.location || "---"}</td>
                          <td className="py-2.5 px-4">
                            {lead.websiteUrl ? (
                              <a
                                href={lead.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline text-xs truncate max-w-[120px] block"
                              >
                                {lead.websiteUrl.replace(/^https?:\/\//, "")}
                              </a>
                            ) : (
                              <span className="text-gray-600 text-xs">---</span>
                            )}
                          </td>
                          <td className="py-2.5 px-4">
                            <span
                              className={`px-2 py-0.5 rounded text-xs font-medium ${
                                lead.status === "converted"
                                  ? "bg-green-500/10 text-green-400"
                                  : lead.status === "rejected"
                                  ? "bg-red-500/10 text-red-400"
                                  : "bg-yellow-500/10 text-yellow-400"
                              }`}
                            >
                              {lead.status === "converted"
                                ? "Converted"
                                : lead.status === "rejected"
                                ? "Rejected"
                                : "New"}
                            </span>
                          </td>
                          <td className="py-2.5 px-4 text-xs text-gray-500">
                            {new Date(lead.submittedAt).toLocaleDateString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="py-12 text-center text-gray-600">
                          <FileText className="w-10 h-10 mx-auto mb-2 opacity-20" />
                          <p className="text-sm">No form submissions yet</p>
                          <p className="text-xs mt-1">Submissions will appear here when users fill the form</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
