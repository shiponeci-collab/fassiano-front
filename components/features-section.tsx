"use client"
import { Zap, Shield, Cpu, Sparkles } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Premium Comfort",
    description: "Advanced cushioning technology for all-day comfort and support.",
  },
  {
    icon: Shield,
    title: "Durable Materials",
    description: "High-quality leather and materials built to last for years.",
  },
  {
    icon: Cpu,
    title: "Modern Design",
    description: "Contemporary styling that complements both traditional and modern wear.",
  },
  {
    icon: Sparkles,
    title: "Cultural Heritage",
    description: "Designs inspired by global traditions and cultural diversity.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-6 text-black">
            Why choose Fassiano
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Premium craftsmanship meets cultural heritage</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-black/10 flex items-center justify-center mx-auto group-hover:bg-black/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-balance text-black">{feature.title}</h3>
              <p className="text-gray-600 text-pretty leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
