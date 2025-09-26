import { Navigation } from "@/components/fassiano-navigation"
import { HeroSection } from "@/components/hero-section"
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* 1. HOOK - Brand Introduction & First Impression */}
      <HeroSection />
      
      {/* 2. DESIRE - Product Gallery Showcase (Visual Impact) */}
      <FassianoHeroParallax />
      
      {/* 3. SOCIAL PROOF - Product Variety & Options (Trust Building) */}
      <ProductLineupSection />
      
      {/* 4. VALUE PROPOSITION - Detailed Product Features (Interest) */}
      <div id="next-section">
        <PremiumProductShowcase />
      </div>
      
      {/* 5. INNOVATION - Advanced Technology Features (Differentiation) */}
      <div id="innovation">
        <TechnicalInnovationSection />
      </div>
      
      {/* 6. PERSONALIZATION - Customization Options (Engagement) */}
      <SneakerCustomizationSection />
      
      {/* 7. TECHNICAL DETAILS - Specs for Technical Users (Validation) */}
      <TechnicalSpecsSection />
      
      {/* 8. BRAND EXPERIENCE - Journey & Story (Emotional Connection) */}
      <TracingBeamSection />
      
      {/* 9. ACTION - Final Call to Action (Conversion) */}
      <CTASection />
      
      {/* <BookTimelineSection /> */}
      {/* <EnhancedGlobalAvailability /> */}
    </main>
  )
}
