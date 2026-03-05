"use client"

import { useEffect } from "react"
import Script from "next/script"
import { startSession, heartbeat, endSession, trackPageView, getCurrentSessionId } from "@/lib/analytics"

export function AnalyticsTracker() {
  useEffect(() => {
    // Don't track admin pages
    const path = window.location.pathname
    if (path.startsWith("/analytics") || path.startsWith("/leads")) {
      return
    }

    // Start session if not already started
    let sessionId = getCurrentSessionId()
    if (!sessionId) {
      sessionId = startSession()
    }

    // Track initial page view
    trackPageView(path)

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

  return (
    <>
      {/* Meta Pixel Code */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1484980699653222');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1484980699653222&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  )
}
