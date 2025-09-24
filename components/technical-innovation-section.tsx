"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

interface TechFeature {
  title: string
  subtitle: string
  description: string
  icon: string
  image: string
  specs: { label: string; value: string }[]
  gradient: string
}

export function TechnicalInnovationSection() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const techFeatures: TechFeature[] = [
    {
      title: "Advanced Materials",
      subtitle: "Engineered for Performance",
      description: "Premium leather and innovative synthetic materials combine for unmatched durability and comfort. Every component is meticulously selected for quality.",
      icon: "🔬",
      image: "/close-up-of-premium-sneaker-materials-and-construc.jpg",
      specs: [
        { label: "Upper Material", value: "Premium Italian Leather" },
        { label: "Sole Technology", value: "Advanced EVA Composite" },
        { label: "Lining", value: "Moisture-Wicking Textile" },
        { label: "Durability Rating", value: "10,000+ Miles" }
      ],
      gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
      title: "Smart Comfort System",
      subtitle: "Adaptive Cushioning Technology",
      description: "Revolutionary comfort system that adapts to your walking style. Pressure-sensitive foam responds dynamically to provide optimal support.",
      icon: "⚡",
      image: "/futuristic-chip-technology-and-battery-visualizati.jpg",
      specs: [
        { label: "Cushioning", value: "Adaptive Memory Foam" },
        { label: "Support Level", value: "Dynamic Response" },
        { label: "Energy Return", value: "85% Efficiency" },
        { label: "Break-in Period", value: "Zero Days" }
      ],
      gradient: "from-green-600/20 to-blue-600/20"
    },
    {
      title: "Global Design Heritage",
      subtitle: "Cultural Fusion Technology",
      description: "Inspired by global design traditions, each sneaker incorporates cultural elements reimagined through modern manufacturing techniques.",
      icon: "🌍",
      image: "/fassiano-cultural-fusion.png",
      specs: [
        { label: "Design Origins", value: "7 Cultural Traditions" },
        { label: "Color Variations", value: "12 Premium Options" },
        { label: "Pattern Technology", value: "Laser-Etched Details" },
        { label: "Personalization", value: "Custom Configurations" }
      ],
      gradient: "from-orange-600/20 to-red-600/20"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % techFeatures.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [techFeatures.length])

  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-white/80 font-medium text-sm tracking-wide">Advanced Technology</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Innovation in
            <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text">
              Every Detail
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Each Fassiano sneaker represents a breakthrough in footwear technology, 
            combining traditional craftsmanship with cutting-edge innovation.
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-12">
            {techFeatures.map((feature, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  activeFeature === index ? 'opacity-100' : 'opacity-30'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="cursor-pointer group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 font-medium">{feature.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
                    {feature.description}
                  </p>

                  {/* Technical Specs */}
                  <div className="grid grid-cols-2 gap-4">
                    {feature.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                        <div className="text-white/60 text-sm font-medium mb-1">{spec.label}</div>
                        <div className="text-white font-semibold">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              {techFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    activeFeature === index 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-110'
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-60`} />
                </div>
              ))}
              
              {/* Floating UI Elements */}
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <span className="text-white text-sm font-medium">
                  {activeFeature + 1} / {techFeatures.length}
                </span>
              </div>
            </div>

            {/* Feature Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {techFeatures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <Button
            size="lg"
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg rounded-full shadow-2xl shadow-blue-500/25 transition-all duration-500 hover:scale-105 hover:shadow-blue-500/40"
          >
            Explore Technical Specifications
          </Button>
        </div>
      </div>
    </section>
  )
}
