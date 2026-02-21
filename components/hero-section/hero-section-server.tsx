"use client"

import { Suspense, useState, useEffect } from "react"
import Image from "next/image"
import { ImageGallery } from "./image-gallery"
import { HeroContentStatic } from "./hero-content-static"
import { HeroBackground } from "./hero-background"
import { HeroProvider } from "./hero-context"
import { ModelId } from "./types"

const MODEL_DATA: Record<ModelId, { name: string; description: string; accent: string; dot: string; price: string; originalPrice: string; images: string[] }> = {
  "x-black": {
    name: "X-BLACK",
    description: "Stealth heritage leather with deep noir finish.",
    accent: "from-zinc-100 via-zinc-300 to-zinc-500",
    dot: "bg-black shadow-[0_0_12px_rgba(255,255,255,0.4)]",
    price: "790 MAD",
    originalPrice: "990",
    images: [
      "Artboard 1.jpg",
      "Artboard 4.jpg",
      "Artboard 10.jpg",
      "Artboard 12.jpg",
      "Artboard 14.jpg",
      "Artboard 15.jpg",
      "Artboard 16.jpg",
      "Artboard 17.jpg",
      "Artboard 18.jpg"
    ]
  },
  "x-red": {
    name: "X-RED",
    description: "Crimson heritage leather with a bold artisan glow.",
    accent: "from-rose-200 via-red-300 to-amber-300",
    dot: "bg-red-400",
    price: "790 MAD",
    originalPrice: "990",
    images: [
      "Artboard 6.jpg",
      "Artboard 8.jpg",
      "Artboard 10.jpg",
      "Artboard 22.jpg",
      "Artboard 24.jpg",
      "Artboard 25.jpg",
      "Artboard 26.jpg",
      "Artboard 27.jpg",
      "Artboard 28.jpg"
    ]
  },
  "majestic": {
    name: "MAJESTIC",
    description: "The ultimate expression of luxury and artisanal mastery.",
    accent: "from-amber-200 via-yellow-400 to-orange-500",
    dot: "bg-yellow-500 shadow-[0_0_12px_rgba(234,179,8,0.5)]",
    price: "590 MAD",
    originalPrice: "790",
    images: [
      "Artboard 1.jpg",
      "Artboard 2.jpg",
      "Artboard 3.jpg",
      "Artboard 4.jpg",
      "Artboard 5.jpg",
      "Artboard 6.jpg",
      "Artboard 7.jpg",
      "Artboard 8.jpg",
      "Artboard 9.jpg"
    ]
  }
}

export function HeroSectionServer() {
  return (
    <HeroProvider>
      <HeroSectionInner />
    </HeroProvider>
  )
}

function HeroSectionInner() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      className="relative min-h-screen text-white overflow-hidden"
      aria-label="Hero section - Premium Heritage Sneakers"
    >
      {/* ── DYNAMIC BACKGROUND (reacts to product selection) ── */}
      {mounted && <HeroBackground />}

      {/* ── CONTENT LAYER ──────────────────────────────────── */}
      <div className="relative z-10 h-full min-h-[100dvh] pt-4 pb-4 lg:pt-0 lg:pb-0 flex flex-col justify-center">
        {/* Mobile-only Top Brand Logo - Strictly hidden on Desktop */}
        <div className="lg:hidden absolute top-4 left-0 right-0 flex justify-center px-4 z-20">
          <Image
            src="/brand-logohero.png"
            alt="FASSIANO"
            width={160}
            height={54}
            className="h-8 w-auto object-contain filter brightness-0 invert"
            fetchPriority="high"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-4 md:gap-6 xl:gap-12 items-center">
            {/* Left Column - Static Content with CSS Animations */}
            <article
              className="flex flex-col justify-center space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left h-full"
              style={{ willChange: "auto" }}
            >
              <HeroContentStatic />
            </article>

            {/* Right Column - Interactive Gallery (First on Mobile) */}
            <div className="flex items-center justify-center order-1 lg:order-2 py-1 lg:py-0">
              <div className="w-full max-w-md lg:max-w-[400px] xl:max-w-lg 2xl:max-w-xl drop-shadow-[0_35px_50px_rgba(0,0,0,0.7)]">
                <Suspense fallback={<GalleryFallback />}>
                  <ImageGallery modelData={MODEL_DATA as any} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Made in Morocco - Absolute centering ensures no layout shift or scroll */}
      {mounted && (
        <div className="absolute w-full flex justify-center bottom-2 lg:bottom-4 left-0 z-20 pointer-events-none">
          <span
            className="text-[#e5e4e2]/30 text-[9px] sm:text-[10px] font-normal tracking-[0.4em] uppercase whitespace-nowrap"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", system-ui, sans-serif" }}
          >
            Made in Morocco
          </span>
        </div>
      )}
    </section>
  )
}

function GalleryFallback() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
      <div className="space-y-4">
        <div className="h-6 w-32 bg-white/10 rounded" />
        <div className="h-8 w-48 bg-white/10 rounded" />
        <div className="aspect-[4/3] w-full bg-white/10 rounded-2xl flex items-center justify-center">
          <p className="text-white/40 text-sm">Loading gallery...</p>
        </div>
      </div>
    </div>
  )
}
