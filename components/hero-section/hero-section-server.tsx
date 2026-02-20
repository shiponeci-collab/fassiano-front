import { Suspense } from "react"
import Image from "next/image"
import { ImageGallery } from "./image-gallery"
import { HeroContentStatic } from "./hero-content-static"
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
    <section className="relative min-h-screen bg-[#080808] text-white overflow-hidden" aria-label="Hero section - Premium Heritage Sneakers">
      {/* Static Background - No JS */}
      <div className="absolute inset-0" role="presentation" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.12),_transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(239,68,68,0.18),_transparent_45%)]" />
        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-screen"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.18) 12.5%, transparent 12.5%, transparent 50%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.18) 62.5%, transparent 62.5%, transparent), linear-gradient(45deg, rgba(255,255,255,0.18) 12.5%, transparent 12.5%, transparent 50%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.18) 62.5%, transparent 62.5%, transparent)",
            backgroundSize: "48px 48px",
            backgroundPosition: "0 0, 24px 24px"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      </div>

      {/* Static Spotlight Effect - CSS Only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40" role="presentation" aria-hidden="true">
        {/* Top Left Spotlight */}
        <div 
          className="absolute top-0 left-0 w-[560px] h-[1380px] animate-spotlight-slow"
          style={{
            transform: 'translateY(-350px) rotate(-45deg)',
            background: 'radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 85%, 70%, .12) 0, hsla(0, 85%, 60%, .04) 50%, hsla(0, 85%, 50%, 0) 80%)'
          }}
        />
        {/* Left Side Spotlight */}
        <div 
          className="absolute top-1/2 -left-[200px] w-[500px] h-[800px]"
          style={{
            transform: 'translateY(-50%)',
            background: 'radial-gradient(circle at center, hsla(0, 85%, 65%, .08) 0, hsla(0, 85%, 60%, .03) 40%, transparent 70%)'
          }}
        />
        {/* Right Side Spotlight */}
        <div 
          className="absolute top-1/2 -right-[200px] w-[500px] h-[800px]"
          style={{
            transform: 'translateY(-50%)',
            background: 'radial-gradient(circle at center, hsla(0, 85%, 65%, .08) 0, hsla(0, 85%, 60%, .03) 40%, transparent 70%)'
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen pt-6 pb-6">
        {/* Mobile-only Top Brand Logo - Strictly hidden on Desktop */}
        <div className="flex lg:hidden justify-center pt-4 pb-4 px-4">
          <Image
            src="/brand-logohero.png"
            alt="FASSIANO"
            width={160}
            height={54}
            className="h-8 w-auto object-contain filter brightness-0 invert"
            fetchPriority="high"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-4 md:gap-12 items-center">
            {/* Left Column - Static Content with CSS Animations */}
            <article className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left lg:min-h-[500px]" style={{ willChange: 'auto' }}>
              <HeroContentStatic />
            </article>

            {/* Right Column - Interactive Gallery (First on Mobile) */}
            <div className="flex items-center justify-center order-1 lg:order-2 py-2 lg:py-0 mt-2 lg:mt-4">
              <div className="w-full max-w-xl drop-shadow-[0_35px_50px_rgba(0,0,0,0.7)]">
                <Suspense fallback={<GalleryFallback />}>
                  <ImageGallery modelData={MODEL_DATA as any} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Made in Morocco - Fixed at bottom center, no scroll */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20">
        <span
          className="text-[#e5e4e2]/30 text-[9px] sm:text-[10px] font-normal tracking-[0.4em] uppercase whitespace-nowrap"
          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", system-ui, sans-serif" }}
        >
          Made in Morocco
        </span>
      </div>
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
