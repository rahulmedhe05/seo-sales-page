import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AnalyticsTracker } from "@/components/analytics-tracker"
import { WhatsAppFormProvider } from "@/components/whatsapp-form-context"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "GoPlnr | Website + SEO ₹24,999 One-Time - Rank on Google",
  description:
    "Get your business ranked on Google for just ₹24,999 one-time! Complete website + SEO package. Google Business Profile, AI Search visibility & beat your competitors.",
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
    title: "GoPlnr | Website + SEO ₹24,999 One-Time - Rank on Google",
    description:
      "Get your business ranked on Google for just ₹24,999 one-time! Complete website + SEO package. Google Business Profile + AI Search visibility.",
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
    title: "GoPlnr | Website + SEO ₹24,999 One-Time",
    description: "Get your business ranked on Google for just ₹24,999 one-time! Complete website + SEO package. Google Business Profile + AI Search visibility.",
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
        description: "Website + SEO for ₹24,999 one-time! Rank your business on Google. Google Business Profile, AI Search visibility, website SEO optimization.",
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
        description: "Complete website + SEO package including Google Business Profile, AI Search visibility, website SEO, and Google Maps ranking. ₹24,999 one-time.",
        provider: {
          "@id": "https://goplnr.com/#organization",
        },
        areaServed: "India",
        offers: {
          "@type": "Offer",
          "price": "24999",
          "priceCurrency": "INR",
          "description": "Website + SEO ₹24,999 one-time - Rank your business on Google",
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
        {/* End Meta Pixel Code */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <WhatsAppFormProvider>
          {children}
          <AnalyticsTracker />
          <Analytics />
        </WhatsAppFormProvider>
      </body>
    </html>
  )
}
