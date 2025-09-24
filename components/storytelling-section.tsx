"use client"

import { useEffect, useRef, useState } from "react"

export function StorytellingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="story" ref={sectionRef} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-8">
              Engineered for
              <span className="block text-accent">tomorrow.</span>
            </h2>

            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Every step forward begins with a single innovation. NEXUS represents years of research, countless
              iterations, and an unwavering commitment to redefining what's possible.
            </p>

            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              From our revolutionary adaptive sole technology to the self-adjusting fit system, every element has been
              crafted to enhance your natural movement and elevate your experience.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <img src="/fassiano-product-hero.png" alt="Fassiano Technology" className="w-full h-auto rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
