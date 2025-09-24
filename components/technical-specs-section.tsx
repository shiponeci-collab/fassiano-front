"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface SpecCategory {
  title: string
  icon: string
  specs: { label: string; value: string; highlight?: boolean }[]
}

export function TechnicalSpecsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  const specCategories: SpecCategory[] = [
    {
      title: "Materials & Construction",
      icon: "🔬",
      specs: [
        { label: "Upper Material", value: "Premium Italian Full-Grain Leather", highlight: true },
        { label: "Lining", value: "Moisture-Wicking Performance Textile" },
        { label: "Sole Technology", value: "Advanced EVA Composite with Carbon Fiber" },
        { label: "Reinforcement", value: "Triple-Stitched Seams with Kevlar Thread" },
        { label: "Water Resistance", value: "IPX4 Rated Protection" },
        { label: "Breathability Index", value: "95% Air Permeability" },
        { label: "Manufacturing", value: "Handcrafted in Italy" }
      ]
    },
    {
      title: "Comfort & Performance",
      icon: "⚡",
      specs: [
        { label: "Cushioning System", value: "Adaptive Memory Foam Technology", highlight: true },
        { label: "Energy Return", value: "85% Efficiency Rating" },
        { label: "Arch Support", value: "Dynamic Response System" },
        { label: "Weight", value: "320g (Size 9)" },
        { label: "Break-in Period", value: "0 Days Required" },
        { label: "Durability Rating", value: "10,000+ Miles" },
        { label: "Temperature Range", value: "-10°C to 45°C" }
      ]
    },
    {
      title: "Design & Aesthetics",
      icon: "🎨",
      specs: [
        { label: "Design Heritage", value: "7 Cultural Traditions Fusion", highlight: true },
        { label: "Color Options", value: "12 Premium Variations" },
        { label: "Pattern Technology", value: "Laser-Etched Cultural Motifs" },
        { label: "Logo Placement", value: "Subtle Embossed Branding" },
        { label: "Finish Options", value: "Matte, Satin, High-Gloss" },
        { label: "Customization", value: "Personal Monogramming Available" },
        { label: "Limited Editions", value: "Seasonal Exclusive Releases" }
      ]
    },
    {
      title: "Sizing & Fit",
      icon: "📐",
      specs: [
        { label: "Size Range", value: "US 5-15 (Including Half Sizes)", highlight: true },
        { label: "Width Options", value: "Narrow, Standard, Wide" },
        { label: "Fit Technology", value: "3D Foot Mapping Compatible" },
        { label: "Adjustability", value: "Precision Lacing System" },
        { label: "Toe Box", value: "Anatomical Shape Design" },
        { label: "Heel Counter", value: "Ergonomic Support Structure" },
        { label: "Return Policy", value: "60-Day Perfect Fit Guarantee" }
      ]
    }
  ]

  return (
    <section id="specs" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-sm border border-black/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-black/80 font-medium text-sm tracking-wide uppercase">Technical Excellence</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Every Detail
            <span className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text">
              Engineered to Perfection
            </span>
          </h2>
          
          <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
            Precision engineering meets artisanal craftsmanship in every aspect of Fassiano sneakers.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {specCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-black text-white shadow-xl'
                  : 'bg-gray-100 hover:bg-gray-200 text-black/80'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Specifications Display */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-3xl">
                {specCategories[activeCategory].icon}
              </div>
              <h3 className="text-3xl font-bold text-black">
                {specCategories[activeCategory].title}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {specCategories[activeCategory].specs.map((spec, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    spec.highlight
                      ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-black/60 mb-1">
                        {spec.label}
                      </div>
                      <div className={`font-semibold ${
                        spec.highlight ? 'text-blue-700' : 'text-black'
                      }`}>
                        {spec.value}
                      </div>
                    </div>
                    {spec.highlight && (
                      <div className="w-3 h-3 bg-blue-500 rounded-full ml-3 mt-1" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl border border-green-100">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-black mb-2">Quality Certified</h4>
            <p className="text-black/70">ISO 9001 manufacturing standards with rigorous quality control.</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-100">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-black mb-2">Innovation First</h4>
            <p className="text-black/70">Cutting-edge technology integrated into traditional craftsmanship.</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl border border-orange-100">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-black mb-2">Global Heritage</h4>
            <p className="text-black/70">Cultural design elements from seven traditional art forms worldwide.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="px-12 py-4 bg-black hover:bg-black/90 text-white font-semibold text-lg rounded-full shadow-2xl transition-all duration-500 hover:scale-105"
          >
            Download Full Specifications
          </Button>
          <p className="text-black/60 text-sm mt-4">Complete technical documentation available as PDF</p>
        </div>
      </div>
    </section>
  )
}
