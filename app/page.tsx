import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProductLineupSection } from "@/components/product-lineup-section"
import { TracingBeamSection } from "@/components/tracing-beam-section"
import { WorldMapSection } from "@/components/world-map-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div id="next-section">
        <ProductLineupSection />
      </div>
      <TracingBeamSection />
      <WorldMapSection />
      <CTASection />
    </main>
  )
}
