"use client"

import type React from "react"

import { useRef, useState } from "react"

export function ThreeDCardShowcase() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Experience the{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Future</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Revolutionary design meets cutting-edge technology in every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Neural Adaptation",
              description: "AI-powered comfort that learns from your movement patterns",
              image: "/premium-black-futuristic-sneaker-with-glowing-acce.jpg",
              gradient: "from-purple-500/20 to-pink-500/20",
            },
            {
              title: "Carbon Fiber Core",
              description: "Aerospace-grade materials for unmatched durability",
              image: "/white-minimalist-futuristic-sneaker-with-clean-lin.jpg",
              gradient: "from-blue-500/20 to-cyan-500/20",
            },
            {
              title: "Smart Analytics",
              description: "Real-time performance tracking and optimization",
              image: "/blue-athletic-futuristic-sneaker-with-dynamic-desi.jpg",
              gradient: "from-green-500/20 to-emerald-500/20",
            },
            {
              title: "Executive Elegance",
              description: "Sophisticated design for the modern professional",
              image: "/fassiano-executive-model.png",
              gradient: "from-stone-500/20 to-stone-600/20",
            },
            {
              title: "Cultural Heritage",
              description: "Honoring tradition while embracing innovation",
              image: "/fassiano-cultural-fusion.png",
              gradient: "from-amber-500/20 to-orange-500/20",
            },
            {
              title: "Modern Minimalism",
              description: "Clean lines and contemporary sophistication",
              image: "/fassiano-minimalist-woman.png",
              gradient: "from-slate-500/20 to-slate-600/20",
            },
          ].map((card, index) => (
            <div
              key={index}
              ref={index === 0 ? cardRef : null}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform:
                  index === 0 && mousePosition.x !== 0
                    ? `perspective(1000px) rotateX(${(mousePosition.y - 200) * 0.1}deg) rotateY(${(mousePosition.x - 200) * 0.1}deg)`
                    : "none",
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                  {card.title}
                </h3>

                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
