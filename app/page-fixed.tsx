import { Navigation } from "@/components/navigation-enhanced"
import { HeroSection } from "@/components/hero-section"
import { PremiumProductShowcase } from "@/components/premium-product-showcase"
import { TechnicalInnovationSection } from "@/components/technical-innovation-section"
import { TechnicalSpecsSection } from "@/components/technical-specs-section"
import { ProductLineupSection } from "@/components/product-lineup-section"
import { TracingBeamSection } from "@/components/tracing-beam-section"
import { EnhancedGlobalAvailability } from "@/components/enhanced-global-availability"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div id="next-section">
        <PremiumProductShowcase />
      </div>
      <div id="innovation">
        <TechnicalInnovationSection />
      </div>
      <TechnicalSpecsSection />
      <ProductLineupSection />
      <TracingBeamSection />
      <EnhancedGlobalAvailability />
      <CTASection />
    </main>
  )
}
