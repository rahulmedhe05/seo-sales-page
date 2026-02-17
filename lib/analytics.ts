// Analytics tracking system using localStorage
// Tracks: visitors, sessions, time spent, page views

const ANALYTICS_VISITORS_KEY = "site_analytics_visitors"
const ANALYTICS_SESSIONS_KEY = "site_analytics_sessions"
const ANALYTICS_PAGEVIEWS_KEY = "site_analytics_pageviews"
const SESSION_ID_KEY = "site_analytics_session_id"

export interface VisitorSession {
  sessionId: string
visitorId: string
  entryTime: string
  lastActiveTime: string
  timeSpentSeconds: number
  pages: string[]
  referrer: string
  userAgent: string
  isActive: boolean
}

export interface PageView {
  sessionId: string
  page: string
  timestamp: string
}

// Generate a unique ID
const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}

// Get or create a persistent visitor ID (survives sessions)
const getVisitorId = (): string => {
  if (typeof window === "undefined") return ""
  let visitorId = localStorage.getItem("site_visitor_id")
  if (!visitorId) {
    visitorId = generateId()
    localStorage.setItem("site_visitor_id", visitorId)
  }
  return visitorId
}

// Get all sessions
export const getSessions = (): VisitorSession[] => {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(ANALYTICS_SESSIONS_KEY)
    if (!stored) return []
    return JSON.parse(stored)
  } catch {
    return []
  }
}

// Save sessions
const saveSessions = (sessions: VisitorSession[]): void => {
  if (typeof window === "undefined") return
  try {
    // Keep only last 10000 sessions to prevent localStorage overflow
    const trimmed = sessions.slice(-10000)
    localStorage.setItem(ANALYTICS_SESSIONS_KEY, JSON.stringify(trimmed))
  } catch (e) {
    console.error("Error saving analytics sessions:", e)
  }
}

// Start a new session
export const startSession = (): string => {
  if (typeof window === "undefined") return ""

  const sessionId = generateId()
  const visitorId = getVisitorId()

  // Store current session ID
  sessionStorage.setItem(SESSION_ID_KEY, sessionId)

  const session: VisitorSession = {
    sessionId,
    visitorId,
    entryTime: new Date().toISOString(),
    lastActiveTime: new Date().toISOString(),
    timeSpentSeconds: 0,
    pages: [window.location.pathname],
    referrer: document.referrer || "direct",
    userAgent: navigator.userAgent,
    isActive: true,
  }

  const sessions = getSessions()
  sessions.push(session)
  saveSessions(sessions)

  return sessionId
}

// Get current session ID
export const getCurrentSessionId = (): string | null => {
  if (typeof window === "undefined") return null
  return sessionStorage.getItem(SESSION_ID_KEY)
}

// Update heartbeat - marks session as active with current timestamp
export const heartbeat = (): void => {
  if (typeof window === "undefined") return

  const sessionId = getCurrentSessionId()
  if (!sessionId) return

  const sessions = getSessions()
  const idx = sessions.findIndex((s) => s.sessionId === sessionId)
  if (idx === -1) return

  const now = new Date()
  const entry = new Date(sessions[idx].entryTime)
  const timeSpent = Math.floor((now.getTime() - entry.getTime()) / 1000)

  sessions[idx].lastActiveTime = now.toISOString()
  sessions[idx].timeSpentSeconds = timeSpent
  sessions[idx].isActive = true

  saveSessions(sessions)
}

// End session
export const endSession = (): void => {
  if (typeof window === "undefined") return

  const sessionId = getCurrentSessionId()
  if (!sessionId) return

  const sessions = getSessions()
  const idx = sessions.findIndex((s) => s.sessionId === sessionId)
  if (idx === -1) return

  const now = new Date()
  const entry = new Date(sessions[idx].entryTime)
  sessions[idx].timeSpentSeconds = Math.floor((now.getTime() - entry.getTime()) / 1000)
  sessions[idx].lastActiveTime = now.toISOString()
  sessions[idx].isActive = false

  saveSessions(sessions)
}

// Track a page view
export const trackPageView = (page: string): void => {
  if (typeof window === "undefined") return

  const sessionId = getCurrentSessionId()
  if (!sessionId) return

  // Add page to session
  const sessions = getSessions()
  const idx = sessions.findIndex((s) => s.sessionId === sessionId)
  if (idx !== -1 && !sessions[idx].pages.includes(page)) {
    sessions[idx].pages.push(page)
    saveSessions(sessions)
  }

  // Save page view
  try {
    const stored = localStorage.getItem(ANALYTICS_PAGEVIEWS_KEY)
    const pageViews: PageView[] = stored ? JSON.parse(stored) : []
    pageViews.push({ sessionId, page, timestamp: new Date().toISOString() })
    // Keep last 50000 pageviews
    const trimmed = pageViews.slice(-50000)
    localStorage.setItem(ANALYTICS_PAGEVIEWS_KEY, JSON.stringify(trimmed))
  } catch (e) {
    console.error("Error saving page view:", e)
  }
}

// === Analytics Queries ===

// Get live viewers (heartbeat within last 30 seconds)
export const getLiveViewers = (): number => {
  const sessions = getSessions()
  const cutoff = new Date(Date.now() - 30 * 1000).toISOString()
  return sessions.filter((s) => s.lastActiveTime > cutoff).length
}

// Get viewers in last N minutes
export const getViewersInLastMinutes = (minutes: number): number => {
  const sessions = getSessions()
  const cutoff = new Date(Date.now() - minutes * 60 * 1000).toISOString()
  return sessions.filter((s) => s.lastActiveTime > cutoff).length
}

// Get total unique visitors
export const getTotalVisitors = (): number => {
  const sessions = getSessions()
  const uniqueVisitors = new Set(sessions.map((s) => s.visitorId))
  return uniqueVisitors.size
}

// Get total sessions
export const getTotalSessions = (): number => {
  return getSessions().length
}

// Get average time spent (in seconds)
export const getAverageTimeSpent = (): number => {
  const sessions = getSessions()
  if (sessions.length === 0) return 0
  const total = sessions.reduce((sum, s) => sum + s.timeSpentSeconds, 0)
  return Math.round(total / sessions.length)
}

// Get total time spent across all sessions
export const getTotalTimeSpent = (): number => {
  const sessions = getSessions()
  return sessions.reduce((sum, s) => sum + s.timeSpentSeconds, 0)
}

// Get sessions by time range
export const getSessionsByTimeRange = (startDate: Date, endDate: Date): VisitorSession[] => {
  const sessions = getSessions()
  return sessions.filter((s) => {
    const entryTime = new Date(s.entryTime)
    return entryTime >= startDate && entryTime <= endDate
  })
}

// Get today's sessions
export const getTodaySessions = (): VisitorSession[] => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  return getSessionsByTimeRange(today, tomorrow)
}

// Get sessions grouped by date (last 30 days)
export const getSessionsByDate = (days: number = 30): { date: string; sessions: number; visitors: number }[] => {
  const sessions = getSessions()
  const result: { [key: string]: { sessions: number; visitors: Set<string> } } = {}

  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - days)

  sessions
    .filter((s) => new Date(s.entryTime) >= cutoff)
    .forEach((s) => {
      const date = new Date(s.entryTime).toISOString().split("T")[0]
      if (!result[date]) {
        result[date] = { sessions: 0, visitors: new Set() }
      }
      result[date].sessions++
      result[date].visitors.add(s.visitorId)
    })

  return Object.entries(result)
    .map(([date, data]) => ({
      date,
      sessions: data.sessions,
      visitors: data.visitors.size,
    }))
    .sort((a, b) => a.date.localeCompare(b.date))
}

// Get sessions grouped by hour (last 24 hours)
export const getSessionsByHour = (): { hour: string; count: number }[] => {
  const sessions = getSessions()
  const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000)

  const result: { [key: string]: number } = {}

  // Initialize all 24 hours
  for (let i = 0; i < 24; i++) {
    const h = i.toString().padStart(2, "0")
    result[`${h}:00`] = 0
  }

  sessions
    .filter((s) => new Date(s.entryTime) >= cutoff)
    .forEach((s) => {
      const hour = new Date(s.entryTime).getHours().toString().padStart(2, "0")
      result[`${hour}:00`]++
    })

  return Object.entries(result)
    .map(([hour, count]) => ({ hour, count }))
    .sort((a, b) => a.hour.localeCompare(b.hour))
}

// Get page view stats
export const getPageViewStats = (): { page: string; views: number }[] => {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(ANALYTICS_PAGEVIEWS_KEY)
    if (!stored) return []
    const pageViews: PageView[] = JSON.parse(stored)
    const counts: { [key: string]: number } = {}
    pageViews.forEach((pv) => {
      counts[pv.page] = (counts[pv.page] || 0) + 1
    })
    return Object.entries(counts)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
  } catch {
    return []
  }
}

// Format seconds to readable time
export const formatTime = (seconds: number): string => {
  if (seconds < 60) return `${seconds}s`
  if (seconds < 3600) {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs}s`
  }
  const hours = Math.floor(seconds / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  return `${hours}h ${mins}m`
}

// Clear all analytics data
export const clearAnalytics = (): void => {
  if (typeof window === "undefined") return
  localStorage.removeItem(ANALYTICS_SESSIONS_KEY)
  localStorage.removeItem(ANALYTICS_PAGEVIEWS_KEY)
}
