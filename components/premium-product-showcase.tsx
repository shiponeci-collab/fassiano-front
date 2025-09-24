"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

interface ProductVariant {
  id: string
  name: string
  colorName: string
  price: string
  image: string
  description: string
  features: string[]
  gradient: string
  accentColor: string
}

export function PremiumProductShowcase() {
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const productVariants: ProductVariant[] = [
    {
      id: "heritage-black",
      name: "Fassiano Heritage",
      colorName: "Midnight Black",
      price: "$349",
      image: "/fassiano-product-hero.png",
      description: "The perfect fusion of traditional craftsmanship and modern design. Premium black leather with subtle cultural accents.",
      features: ["Premium Italian Leather", "Cultural Pattern Details", "Comfort-First Design", "Handcrafted Finishing"],
      gradient: "from-gray-900 via-black to-gray-800",
      accentColor: "border-gray-400"
    },
    {
      id: "executive-brown",
      name: "Fassiano Executive",
      colorName: "Cognac Brown",
      price: "$399",
      image: "/fassiano-executive-model.png",
      description: "Sophisticated design for the modern professional. Luxurious brown leather with executive-level attention to detail.",
      features: ["Executive Leather", "Professional Silhouette", "All-Day Comfort", "Boardroom Ready"],
      gradient: "from-amber-900 via-orange-900 to-amber-800",
      accentColor: "border-amber-400"
    },
    {
      id: "cultural-fusion",
      name: "Fassiano Cultural",
      colorName: "Heritage Tan",
      price: "$329",
      image: "/fassiano-cultural-fusion.png",
      description: "Celebrating global heritage through contemporary design. Unique pattern work that tells a story of cultural unity.",
      features: ["Cultural Pattern Work", "Heritage Inspired", "Global Design Elements", "Storytelling Details"],
      gradient: "from-orange-900 via-red-900 to-orange-800",
      accentColor: "border-orange-400"
    },
    {
      id: "minimalist-white",
      name: "Fassiano Pure",
      colorName: "Arctic White",
      price: "$299",
      image: "/fassiano-minimalist-woman.png",
      description: "Clean, minimalist design with maximum impact. Pure white leather for those who appreciate understated elegance.",
      features: ["Minimalist Design", "Pure White Leather", "Clean Aesthetics", "Timeless Appeal"],
      gradient: "from-gray-100 via-white to-gray-50",
      accentColor: "border-gray-300"
    }
  ]

  const handleVariantChange = (index: number) => {
    if (index === selectedVariant) return
    
    setIsAnimating(true)
    setTimeout(() => {
      setSelectedVariant(index)
      setIsAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleVariantChange((selectedVariant + 1) % productVariants.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [selectedVariant, productVariants.length])

  const currentVariant = productVariants[selectedVariant]

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,0,0,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-sm border border-black/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-black/80 font-medium text-sm tracking-wide uppercase">Premium Collection</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Choose Your
            <span className="block text-transparent bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text">
              Perfect Pair
            </span>
          </h2>
          
          <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
            Four distinct styles, each crafted with the same obsessive attention to detail and quality.
          </p>
        </div>

        {/* Main Product Display */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Product Visual */}
          <div className="relative" ref={containerRef}>
            <div className={`relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br ${currentVariant.gradient} transition-all duration-700`}>
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  isAnimating ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                }`}
              >
                <img
                  src={currentVariant.image}
                  alt={currentVariant.name}
                  className="w-full h-full object-contain p-8"
                />
              </div>
              
              {/* Floating Price Tag */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 border border-black/10 shadow-xl">
                <div className="text-sm text-black/60 font-medium mb-1">Starting at</div>
                <div className="text-2xl font-bold text-black">{currentVariant.price}</div>
              </div>

              {/* Color Indicator */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 border border-black/10">
                <div className="text-sm text-black/80 font-medium">{currentVariant.colorName}</div>
              </div>
            </div>

            {/* 360° Indicator */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium shadow-xl">
              360° View Available
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-bold text-black mb-2">{currentVariant.name}</h3>
              <p className="text-xl text-black/70 font-medium mb-6">{currentVariant.colorName}</p>
              <p className="text-lg text-black/80 leading-relaxed">{currentVariant.description}</p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-black mb-4">Key Features</h4>
              {currentVariant.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black/80 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                size="lg"
                className="px-12 py-4 bg-black hover:bg-black/90 text-white font-semibold text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
              >
                Pre-order Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-12 py-4 border-black/20 text-black hover:bg-black/5 font-semibold text-lg rounded-full transition-all duration-300"
              >
                View Details
              </Button>
            </div>
          </div>
        </div>

        {/* Product Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {productVariants.map((variant, index) => (
            <button
              key={variant.id}
              onClick={() => handleVariantChange(index)}
              className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                selectedVariant === index
                  ? `${variant.accentColor} bg-black/5 shadow-lg`
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className={`aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br ${variant.gradient}`}>
                <img
                  src={variant.image}
                  alt={variant.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="text-left">
                <h4 className="font-semibold text-black mb-1">{variant.name}</h4>
                <p className="text-sm text-black/60 mb-2">{variant.colorName}</p>
                <p className="text-lg font-bold text-black">{variant.price}</p>
              </div>

              {/* Selection Indicator */}
              {selectedVariant === index && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
