import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { GoogleTagManager, GoogleTagManagerNoscript } from "@/components/google-analytics"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
  adjustFontFallback: true,
  weight: ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
  fallback: ['Monaco', 'Courier New', 'monospace'],
  adjustFontFallback: true,
  weight: ['400'],
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
        <link rel="preload" as="image" href="/_next/image?url=%2Fbrand-logohero.png&w=256&q=75" fetchPriority="high" />
        <link rel="preload" as="image" href="/_next/image?url=%2Fx-red%2FArtboard%206.jpg&w=828&q=75" fetchPriority="high" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
        <style dangerouslySetInnerHTML={{__html: `
          *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}
          html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif}
          body{margin:0;line-height:inherit}
          .bg-\[\#080808\]{background-color:#080808}
          .bg-black{background-color:#000}
          .text-white{color:#fff}
          .min-h-screen{min-height:100vh}
          .relative{position:relative}
          .absolute{position:absolute}
          .overflow-hidden{overflow:hidden}
          .flex{display:flex}
          .grid{display:grid}
          .hidden{display:none}
          .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          .font-sans{font-family:var(--font-sans),ui-sans-serif,system-ui,sans-serif}
          .inset-0{inset:0}
          .z-10{z-index:10}
          .justify-center{justify-content:center}
          .items-center{align-items:center}
          .space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}
          @media (min-width:768px){.md\\:space-y-8>:not([hidden])~:not([hidden]){margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}}
        `}} />
        <GoogleTagManager />
      </head>
      <body 
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black`}
        suppressHydrationWarning
      >
        <GoogleTagManagerNoscript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
