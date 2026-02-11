import Image from "next/image"
import { PRODUCT_INFO } from "./constants"
import { PreorderButton } from "./preorder-button"

type ModelId = "x-red" | "x-black"

interface HeroContentProps {
  selectedModel: ModelId
}

export function HeroContentServer({ selectedModel }: HeroContentProps) {
  const modelLabel = selectedModel === "x-red" ? "X-RED" : "X-BLACK"
  const heroFont = "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", system-ui, sans-serif"
  
  return (
    <div className="text-left space-y-8">
      {/* Brand Title & Product Information */}
      <div className="space-y-6">
        {/* Main Brand Title */}
        <div>
          <div className="mb-3 md:mb-4">
            <Image
              src="/brand-logohero.png"
              alt="FASSIANO"
              width={284}
              height={96}
              priority
              sizes="(max-width: 768px) 180px, 240px"
              className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto object-contain filter brightness-0 invert"
            />
          </div>
        </div>

        {/* Product Information - Teaser Version */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 tracking-wide" style={{ fontFamily: heroFont }}>
            Moroccan Heritage
          </h2>
          
          <p className="text-white/70 text-base sm:text-lg font-light max-w-lg" style={{ fontFamily: heroFont }}>
            Handcrafted by master artisans
          </p>
          
          <div className="w-16 h-px bg-gradient-to-r from-red-400 to-red-600" />
        </div>

        {/* Selected Model */}
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Selected</span>
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm font-semibold tracking-wide text-white">
            {modelLabel}
          </span>
        </div>
      </div>

      {/* Single CTA - Teaser */}
      <div className="flex items-start">
        <PreorderButton selectedModel={selectedModel} />
      </div>

      {/* Minimal Features - Teaser */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-6 text-white/50 text-xs">
          {PRODUCT_INFO.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-red-400 rounded-full" />
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
