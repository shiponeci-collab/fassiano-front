"use client"

import { useEffect, useRef, useState } from "react"

export function InnovationShowcase() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const innovations = [
    {
      category: "Innovation",
      title: "Beautiful and durable, by design.",
      description: "Crafted from premium materials with precision engineering for lasting performance.",
      image: "/fassiano-product-hero.png",
      color: "from-stone-800 to-stone-900",
    },
    {
      category: "Cultural Fusion",
      title: "Tradition meets innovation.",
      description: "Bridging cultures through contemporary design and timeless craftsmanship.",
      image: "/fassiano-cultural-fusion.png",
      color: "from-slate-800 to-slate-900",
    },
    {
      category: "Executive Style",
      title: "Professional excellence.",
      description: "Sophisticated design that elevates your professional presence.",
      image: "/fassiano-executive-model.png",
      color: "from-slate-900 to-black",
    },
    {
      category: "Modern Lifestyle",
      title: "Effortless sophistication.",
      description: "Contemporary style that adapts to your dynamic lifestyle.",
      image: "/fassiano-business-woman-updated.png",
      color: "from-stone-700 to-stone-800",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="innovation" ref={sectionRef} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-balance mb-6">Get to know Fassiano.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              data-index={index}
              className={`relative rounded-3xl overflow-hidden h-[600px] bg-gradient-to-br ${innovation.color} transition-all duration-1000 ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                <div>
                  <p className="text-sm font-medium opacity-80 mb-2">{innovation.category}</p>
                  <h3 className="text-2xl font-bold text-balance mb-4">{innovation.title}</h3>
                </div>
                <p className="text-sm opacity-90 text-balance">{innovation.description}</p>
              </div>
              <img
                src={innovation.image || "/placeholder.svg"}
                alt={innovation.title}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
