"use client"

import { useEffect, useRef, useState } from "react"

export function VisionSection() {
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
    <section id="vision" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src="/fassiano-cultural-fusion.png" alt="Vision Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-8">
              Step into the
              <span className="block bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                future of movement.
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-12 leading-relaxed">
              NEXUS isn't just footwear—it's a gateway to enhanced human potential. Experience the convergence of
              technology, design, and human ambition.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">99%</div>
                <div className="text-muted-foreground">Performance Enhancement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24/7</div>
                <div className="text-muted-foreground">Adaptive Comfort</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">∞</div>
                <div className="text-muted-foreground">Style Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
