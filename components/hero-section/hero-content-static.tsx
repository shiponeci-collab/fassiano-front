import Image from "next/image"
import { PreorderButtonSimple } from "./preorder-button-simple"
import { PRODUCT_INFO } from "./constants"

export function HeroContentStatic() {
  const heroFont = "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", system-ui, sans-serif"
  
  return (
    <div className="text-left space-y-8">
      {/* Brand Title - Fade in with CSS */}
      <header className="space-y-6">
        <div>
          <div className="mb-3 md:mb-4">
            <h1 className="sr-only">FASSIANO - Premium Heritage Sneakers</h1>
            <Image
              src="/brand-logohero.png"
              alt="FASSIANO - Premium Heritage Sneakers"
              width={284}
              height={96}
              priority
              fetchPriority="high"
              quality={100}
              sizes="(max-width: 768px) 180px, (max-width: 1024px) 240px, 284px"
              className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto object-contain filter brightness-0 invert"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Product Information - CSS Animation */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 tracking-wide" style={{ fontFamily: heroFont }}>
            Moroccan Heritage
          </h2>
          
          <p className="text-white/70 text-base sm:text-lg font-light max-w-lg" style={{ fontFamily: heroFont }}>
            Handcrafted by master artisans
          </p>
          
          <div className="w-16 h-px bg-gradient-to-r from-red-400 to-red-600" />
        </div>

        {/* Selected Model - Static */}
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Selected</span>
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm font-semibold tracking-wide text-white">
            X-BLACK
          </span>
        </div>
      </header>

      {/* CTA Button - Client Component Only */}
      <div className="flex items-start">
        <PreorderButtonSimple />
      </div>

      {/* Features - Static */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-6 text-white/50 text-xs" role="list">
          {PRODUCT_INFO.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="flex items-center gap-2" role="listitem">
              <div className="w-1 h-1 bg-red-400 rounded-full" aria-hidden="true" />
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
