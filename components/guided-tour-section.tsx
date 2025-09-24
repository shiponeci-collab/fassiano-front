"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function GuidedTourSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-balance mb-6">Take a closer look.</h2>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 via-background to-accent/10 p-12 lg:p-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 text-balance">
                A Guided Tour of
                <span className="block">Fassiano Pro, Fassiano Air,</span>
                <span className="block">and Fassiano Sport</span>
              </h3>
              <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8">
                <Play className="mr-2 h-5 w-5" />
                Watch the film
              </Button>
            </div>
            <div className="relative">
              <img src="/fassiano-ceo-portrait.png" alt="Guided Tour" className="w-full h-auto rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
