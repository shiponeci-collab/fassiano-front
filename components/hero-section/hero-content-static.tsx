"use client"

import Image from "next/image"
import { PreorderButtonSimple } from "./preorder-button-simple"
import { useHeroContext } from "./hero-context"
import { ModelId } from "./types"

// ── Per-model content definitions ────────────────────────────────────────────
const MODEL_CONTENT: Record<ModelId, {
  headline: string
  tagline: string
  subtitle: string
  features: [string, string]
  accentFrom: string
  accentTo: string
  dotColor: string
  badge: string
  badgeText: string
  badgeBorder: string
  badgeBg: string
}> = {
  "x-red": {
    headline: "Moroccan Heritage",
    tagline: "Handcrafted by master artisans",
    subtitle: "Born in fire. Worn with pride.",
    features: ["Hand-Stitched Moroccan Leather", "Crimson Artisan Sole"],
    accentFrom: "#ef4444",
    accentTo: "#b91c1c",
    dotColor: "bg-red-400",
    badge: "THE RED WORLD",
    badgeText: "text-red-400",
    badgeBorder: "border-red-500/30",
    badgeBg: "bg-red-500/10",
  },
  "x-black": {
    headline: "Stealth Elegance",
    tagline: "Deep noir, refined presence",
    subtitle: "Silence speaks louder than colour.",
    features: ["Hand-Stitched Moroccan Leather", "Noir Shadow Finish"],
    accentFrom: "#a1a1aa",
    accentTo: "#52525b",
    dotColor: "bg-zinc-400",
    badge: "THE NOIR WORLD",
    badgeText: "text-zinc-300",
    badgeBorder: "border-zinc-400/30",
    badgeBg: "bg-zinc-400/10",
  },
  "majestic": {
    headline: "Artisanal Mastery",
    tagline: "Ultimate expression of luxury",
    subtitle: "Where gold meets Moroccan craft.",
    features: ["Hand-Stitched Moroccan Leather", "Gold Accent Detail"],
    accentFrom: "#f59e0b",
    accentTo: "#d97706",
    dotColor: "bg-amber-500",
    badge: "THE GOLD WORLD",
    badgeText: "text-amber-400",
    badgeBorder: "border-amber-400/30",
    badgeBg: "bg-amber-500/10",
  },
}

const heroFont = "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", system-ui, sans-serif"

export function HeroContentStatic() {
  const { selectedModel } = useHeroContext()
  const c = MODEL_CONTENT[selectedModel]

  return (
    <div className="text-left space-y-8">
      {/* Brand Logo - Desktop Only */}
      <div className="hidden lg:block mb-6">
        <h1 className="sr-only">FASSIANO - Premium Heritage Sneakers</h1>
        <Image
          src="/brand-logohero.png"
          alt="FASSIANO - Premium Heritage Sneakers"
          width={284}
          height={96}
          priority
          sizes="284px"
          className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto object-contain filter brightness-0 invert"
          style={{ maxWidth: "284px", height: "auto" }}
          fetchPriority="high"
        />
      </div>

      {/* World badge — changes per model */}
      <div className="hidden lg:block">
        <span
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-semibold tracking-[0.3em] uppercase ${c.badgeBg} ${c.badgeBorder} ${c.badgeText}`}
        >
          <span className="opacity-60">×</span>
          {c.badge}
        </span>
      </div>

      {/* Headline + tagline + accent bar — all change per model */}
      <div className="space-y-4">
        <h2
          className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 tracking-wide transition-all duration-500"
          style={{ fontFamily: heroFont }}
        >
          {c.headline}
        </h2>

        <p
          className="text-white/70 text-base sm:text-lg font-light max-w-lg transition-all duration-500"
          style={{ fontFamily: heroFont }}
        >
          {c.tagline}
        </p>

        {/* Accent bar — color changes per model */}
        <div
          className="w-16 h-px transition-all duration-500"
          style={{ background: `linear-gradient(90deg, ${c.accentFrom}, ${c.accentTo})` }}
        />

        {/* Italic subtitle */}
        <p
          className="hidden lg:block text-white/35 text-xs sm:text-sm font-light italic tracking-wide max-w-xs transition-all duration-500"
          style={{ fontFamily: heroFont }}
        >
          {c.subtitle}
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex items-start">
        <PreorderButtonSimple />
      </div>

      {/* Feature bullets — dots change color per model */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-6 text-white/50 text-xs" role="list">
          {c.features.map((feature, index) => (
            <span key={index} className="flex items-center gap-2" role="listitem">
              <div
                className={`w-1 h-1 rounded-full transition-colors duration-500 ${c.dotColor}`}
                aria-hidden="true"
              />
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
