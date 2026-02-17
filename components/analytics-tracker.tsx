"use client"

import { useEffect } from "react"
import { startSession, heartbeat, endSession, trackPageView, getCurrentSessionId } from "@/lib/analytics"

export function AnalyticsTracker() {
  useEffect(() => {
    // Start session if not already started
    let sessionId = getCurrentSessionId()
    if (!sessionId) {
      sessionId = startSession()
    }

    // Track initial page view
    trackPageView(window.location.pathname)

    // Heartbeat every 10 seconds
    const heartbeatInterval = setInterval(() => {
      heartbeat()
    }, 10000)

    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        endSession()
      } else {
        // Resume session - just do a heartbeat
        heartbeat()
      }
    }

    // Track before unload
    const handleBeforeUnload = () => {
      endSession()
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    window.addEventListener("beforeunload", handleBeforeUnload)

    // Initial heartbeat
    heartbeat()

    return () => {
      clearInterval(heartbeatInterval)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  // This component doesn't render anything
  return null
}
