import { Suspense } from "react"
import { ImageGallery } from "./image-gallery"
import { HeroContentStatic } from "./hero-content-static"

type ModelId = "x-red" | "x-black"

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-12 items-center">
            {/* Left Column - Static Content with CSS Animations */}
            <article className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left min-h-[400px] lg:min-h-[500px]" style={{ willChange: 'auto' }}>
              <HeroContentStatic />
            </article>

            {/* Right Column - Interactive Gallery */}
            <div className="flex items-center justify-center order-1 lg:order-2 py-8 lg:py-0 mt-2 sm:mt-8 md:mt-12 lg:mt-20">
              <div className="w-full max-w-xl drop-shadow-[0_35px_50px_rgba(0,0,0,0.7)]">
                <Suspense fallback={<GalleryFallback />}>
                  <ImageGallery modelData={MODEL_DATA} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>

        {/* Static Footer Text */}
        <div className="mt-6 flex justify-center lg:absolute lg:bottom-4 lg:left-4 lg:justify-start">
          <div className="flex items-center space-x-2">
            <span
              className="text-[#e5e4e2] text-[10px] sm:text-xs font-normal tracking-[0.3em] uppercase"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", system-ui, sans-serif" }}
              role="contentinfo"
            >
              Made in Morocco
            </span>
          </div>
        </div>
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
