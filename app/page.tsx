import { Suspense } from "react"
import { HeroSectionServer } from "@/components/hero-section/hero-section-server"
import { BookTimelineSection } from "@/components/book-timeline-section"
import { SneakerCustomizationSection } from "@/components/sneaker-customization-section"
import { PremiumProductShowcase } from "@/components/premium-product-showcase"
import { TechnicalInnovationSection } from "@/components/technical-innovation-section"
import { TechnicalSpecsSection } from "@/components/technical-specs-section"
import { ProductLineupSection } from "@/components/product-lineup-section"
import { TracingBeamSection } from "@/components/tracing-beam-section"
import { EnhancedGlobalAvailability } from "@/components/enhanced-global-availability"
import { CTASection } from "@/components/cta-section"
import { FassianoHeroParallax } from "@/components/fassiano-hero-parallax"
import { ProductCollectionSection } from "@/components/product-collection-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]" role="main">
      {/* 1. HOOK - Brand Introduction & First Impression - SERVER COMPONENT with PPR */}
      <Suspense fallback={<HeroFallback />}>
        <HeroSectionServer />
      </Suspense>

      {/* 2. COLLECTION - Apple-level Product Showreel */}
      <ProductCollectionSection />
      
      {/* HIDDEN SECTIONS - Comment out to show only Hero */}
      {/* 
      2. DESIRE - Product Gallery Showcase (Visual Impact)
      <FassianoHeroParallax />
      
      3. SOCIAL PROOF - Product Variety & Options (Trust Building)
      <ProductLineupSection />
      
      4. VALUE PROPOSITION - Detailed Product Features (Interest)
      <div id="next-section">
        <PremiumProductShowcase />
      </div>
      
      5. INNOVATION - Advanced Technology Features (Differentiation)
      <div id="innovation">
        <TechnicalInnovationSection />
      </div>
      
      6. PERSONALIZATION - Customization Options (Engagement)
      <SneakerCustomizationSection />
      
      7. TECHNICAL DETAILS - Specs for Technical Users (Validation)
      <TechnicalSpecsSection />
      
      8. BRAND EXPERIENCE - Journey & Story (Emotional Connection)
      <TracingBeamSection />
      
      9. ACTION - Final Call to Action (Conversion)
      <CTASection />
      
      <BookTimelineSection />
      <EnhancedGlobalAvailability />
      */}
    </main>
  )
}

function HeroFallback() {
  return (
    <section className="relative min-h-screen bg-[#080808] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      <div className="relative z-10 min-h-screen pt-6 pb-6 flex items-center justify-center">
        <div className="text-center">
          <div className="h-20 w-48 bg-white/5 animate-pulse rounded-lg mx-auto" />
        </div>
      </div>
    </section>
  )
}
