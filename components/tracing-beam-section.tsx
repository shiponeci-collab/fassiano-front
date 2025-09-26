"use client"

import { useEffect, useRef, useState } from "react"
import {
  Brain,
  Zap,
  Activity,
  Layers,
  Smartphone,
  Shield,
  Cpu,
  Wind,
  Target,
  Sparkles,
  Globe,
  Users,
} from "lucide-react"

export function TracingBeamSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight
      const windowHeight = window.innerHeight

      const start = rect.top + window.scrollY - windowHeight
      const end = rect.top + window.scrollY + sectionHeight - windowHeight

      const progress = Math.max(0, Math.min(1, (window.scrollY - start) / (end - start)))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const timelineData = [
    {
      category: "Foundation",
      year: "2019",
      title: "Neural Network Integration",
      description:
        "Revolutionary AI algorithms that analyze your unique gait pattern and adapt the shoe's response in real-time for optimal performance.",
      icon: Brain,
      color: "apple-blue",
      stats: "99.7% accuracy",
    },
    {
      category: "Materials",
      year: "2020",
      title: "Carbon Fiber Construction",
      description:
        "Aerospace-grade carbon fiber weaving provides unmatched strength-to-weight ratio while maintaining natural flexibility.",
      icon: Layers,
      color: "apple-purple",
      stats: "40% lighter",
    },
    {
      category: "Intelligence",
      year: "2021",
      title: "Smart Sensor Array",
      description:
        "Advanced embedded sensors continuously track pressure distribution, temperature, and movement patterns across 128 data points.",
      icon: Activity,
      color: "apple-green",
      stats: "128 sensors",
    },
    {
      category: "Performance",
      year: "2022",
      title: "Adaptive Cushioning System",
      description:
        "Dynamic foam technology with micro-adjustments that respond to terrain changes and activity intensity in milliseconds.",
      icon: Zap,
      color: "apple-orange",
      stats: "5ms response",
    },
    {
      category: "Connectivity",
      year: "2023",
      title: "Wireless Health Integration",
      description:
        "Seamless connectivity with health platforms, providing comprehensive insights into your movement and performance metrics.",
      icon: Smartphone,
      color: "apple-pink",
      stats: "24/7 tracking",
    },
    {
      category: "Protection",
      year: "2024",
      title: "Advanced Impact Shield",
      description:
        "Multi-layer protection system that distributes impact forces while maintaining natural foot movement and comfort.",
      icon: Shield,
      color: "apple-blue",
      stats: "85% impact reduction",
    },
    {
      category: "Processing",
      year: "2024",
      title: "Edge Computing Core",
      description:
        "On-device AI processing ensures instant responses without relying on external connections, maintaining peak performance anywhere.",
      icon: Cpu,
      color: "apple-purple",
      stats: "Local processing",
    },
    {
      category: "Comfort",
      year: "2025",
      title: "Climate Control Technology",
      description:
        "Intelligent temperature regulation and moisture management system that adapts to environmental conditions automatically.",
      icon: Wind,
      color: "apple-green",
      stats: "Perfect climate",
    },
    {
      category: "Precision",
      year: "2025",
      title: "Biomechanical Optimization",
      description:
        "Real-time gait analysis and correction suggestions help improve your natural movement patterns and prevent injuries.",
      icon: Target,
      color: "apple-orange",
      stats: "Injury prevention",
    },
    {
      category: "Innovation",
      year: "2025",
      title: "Quantum Leap Forward",
      description:
        "The culmination of years of research, bringing together all technologies in perfect harmony for the ultimate footwear experience.",
      icon: Sparkles,
      color: "apple-pink",
      stats: "Future ready",
    },
  ]

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-6">
            <Globe className="w-4 h-4" />
            Innovation Timeline
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            A decade of{" "}
            <span className="text-transparent bg-gradient-to-r from-[var(--apple-blue)] to-[var(--apple-purple)] bg-clip-text">
              breakthrough
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every innovation that shaped the future of footwear, from concept to reality
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-12 top-0 w-0.5 h-full bg-border">
            <div
              className="w-full bg-gradient-to-b from-[var(--apple-blue)] via-[var(--apple-purple)] to-[var(--apple-pink)] transition-all duration-500 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          <div className="space-y-20">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative pl-20 md:pl-28 transition-all duration-700 ${
                  scrollProgress > index / timelineData.length
                    ? "opacity-100 translate-x-0"
                    : "opacity-40 translate-x-8"
                }`}
              >
                <div
                  className={`absolute left-6 md:left-10 w-6 h-6 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                    scrollProgress > index / timelineData.length
                      ? `bg-[var(--${item.color})] border-background scale-125 shadow-lg`
                      : "bg-background border-border"
                  }`}
                >
                  {scrollProgress > index / timelineData.length && (
                    <item.icon className="w-3 h-3 text-white" strokeWidth={2.5} />
                  )}
                </div>

                <div className="bg-card backdrop-blur-sm rounded-2xl border border-border hover:border-muted-foreground/20 transition-all duration-300 overflow-hidden group">
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon and category */}
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-[var(--${item.color})]/10 flex items-center justify-center mb-4`}
                        >
                          <item.icon className={`w-8 h-8 text-[var(--${item.color})]`} strokeWidth={1.5} />
                        </div>
                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                          {item.category}
                        </div>
                        <div className="text-2xl font-bold text-foreground">{item.year}</div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-foreground mb-4 text-balance">{item.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-pretty">
                          {item.description}
                        </p>

                        {/* Stats badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                          <div className={`w-2 h-2 rounded-full bg-[var(--${item.color})]`} />
                          <span className="text-sm font-medium text-foreground">{item.stats}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--apple-blue)]/10 to-[var(--apple-purple)]/10 rounded-full border border-[var(--apple-blue)]/20">
            <Users className="w-5 h-5 text-[var(--apple-blue)]" />
            <span className="text-foreground font-medium">Trusted by athletes worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}
