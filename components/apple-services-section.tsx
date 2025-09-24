"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Truck, RefreshCw, Headphones } from "lucide-react"

export function AppleServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Fassiano Care",
      description: "Get up to 2 years of premium protection and priority support for your Fassiano sneakers.",
      link: "Learn more about Fassiano Care",
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Enjoy free delivery and returns on all Fassiano orders. Fast, secure, and sustainable packaging.",
      link: "Check delivery options",
    },
    {
      icon: RefreshCw,
      title: "Trade In",
      description:
        "Trade in your old sneakers and get credit toward a new pair of Fassiano. Good for you and the planet.",
      link: "Get your trade-in value",
    },
    {
      icon: Headphones,
      title: "Personal Setup",
      description: "Get personalized fitting and performance optimization with our expert team.",
      link: "Schedule your session",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-balance mb-6">
            Why Fassiano is the best
            <span className="block text-muted-foreground/60">place to buy sneakers.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 text-balance leading-relaxed">{service.description}</p>
              <Button variant="link" className="text-accent hover:text-accent/80 p-0">
                {service.link} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
