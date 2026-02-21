import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AnalyticsTracker } from "@/components/analytics-tracker"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "GoPlnr | FREE 1 Month SEO Trial - Local SEO Services India",
  description:
    "Start with FREE 1 Month SEO Trial! Rank in your city. If you like, continue at ₹20,000/Quarter. Google Business Profile, AI Search visibility & beat your competitors.",
  keywords:
    "local SEO services, SEO services India, Google ranking, Google Maps ranking, local business SEO, digital marketing, website SEO optimization, local search optimization, SEO company, best SEO services, goplnr",
  authors: [{ name: "GoPlnr" }],
  creator: "GoPlnr",
  publisher: "GoPlnr",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://goplnr.com"),
  alternates: {
    canonical: "https://goplnr.com",
  },
  openGraph: {
    title: "GoPlnr | FREE 1 Month SEO Trial - Rank in Your City",
    description:
      "Start FREE! 1 Month SEO Trial. If you like, continue at ₹20,000/Quarter. Google Business Profile + AI Search visibility.",
    url: "https://goplnr.com",
    siteName: "GoPlnr - Local SEO Services",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://goplnr.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GoPlnr - Rank Your Business on Google",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoPlnr | FREE 1 Month SEO Trial",
    description: "Start FREE! 1 Month SEO Trial. If you like, continue at ₹20,000/Quarter. Google Business Profile + AI Search visibility.",
    images: ["https://goplnr.com/og-image.jpg"],
    creator: "@goplnr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  verification: {
    google: "googlec1b155cb6acd07f9",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://goplnr.com/#organization",
        name: "GoPlnr - Local SEO Services",
        image: "https://goplnr.com/logo.png",
        description: "FREE 1 Month SEO Trial! Rank in your city. ₹20,000/Quarter if you like. Google Business Profile, AI Search visibility, website SEO optimization.",
        url: "https://goplnr.com",
        telephone: "+916353583148",
        email: "hello@goplnr.com",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.facebook.com/goplnr",
          "https://www.instagram.com/goplnr",
        ],
        priceRange: "₹₹",
        serviceArea: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "Service",
        "@id": "https://goplnr.com/#service-localseo",
        name: "GoPlnr Local SEO Services",
        description: "Complete local SEO package including Google Business Profile, AI Search visibility, website SEO, and Google Maps ranking. FREE 1 Month Trial + ₹20,000/Quarter.",
        provider: {
          "@id": "https://goplnr.com/#organization",
        },
        areaServed: "India",
        offers: {
          "@type": "Offer",
          "price": "20000",
          "priceCurrency": "INR",
          "description": "FREE 1 Month SEO Trial + ₹20,000 per Quarter - Rank in your city - 100% Advance Payment for Quarterly",
        },
      },
      {
        "@type": "AggregateRating",
        "@id": "https://goplnr.com/#rating",
        itemReviewed: {
          "@type": "LocalBusiness",
          "@id": "https://goplnr.com/#organization",
        },
        ratingValue: "4.9",
        ratingCount: "50",
        bestRating: "5",
        worstRating: "1",
      },
    ],
  }

  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8PNVZFSSVZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8PNVZFSSVZ');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <AnalyticsTracker />
        <Analytics />
      </body>
    </html>
  )
}
