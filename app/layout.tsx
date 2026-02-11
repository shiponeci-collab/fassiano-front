import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
  adjustFontFallback: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
  fallback: ['Monaco', 'Courier New', 'monospace'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: "FASSIANO - Where Heritage Meets Modern Design",
  description: "Premium sneakers crafted for the global citizen. Honoring tradition while embracing innovation.",
  applicationName: "FASSIANO",
  generator: "v0.app",
  keywords: ["sneakers", "premium", "heritage", "Moroccan", "handcrafted", "artisan", "luxury sneakers", "premium footwear"],
  authors: [{ name: "FASSIANO" }],
  creator: "FASSIANO",
  publisher: "FASSIANO",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL('https://fassiano.com'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "FASSIANO - Premium Heritage Sneakers",
    description: "Handcrafted by master artisans. Moroccan heritage meets modern design.",
    type: "website",
    locale: "en_US",
    siteName: "FASSIANO",
    url: "https://fassiano.com",
    images: [
      {
        url: "/brand-logohero.png",
        width: 284,
        height: 96,
        alt: "FASSIANO - Premium Heritage Sneakers",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FASSIANO - Premium Heritage Sneakers',
    description: 'Handcrafted by master artisans. Moroccan heritage meets modern design.',
    images: ["/brand-logohero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
  category: 'fashion',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "FASSIANO Premium Sneakers",
    "description": "Premium sneakers handcrafted by master artisans. Moroccan heritage meets modern design.",
    "brand": {
      "@type": "Brand",
      "name": "FASSIANO"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "image": "https://fassiano.com/brand-logohero.png"
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body 
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
