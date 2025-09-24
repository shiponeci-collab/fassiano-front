"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-balance mb-8 text-black">
            Get to know Fassiano.
          </h2>

          <p className="text-xl text-gray-600 text-balance mb-12 leading-relaxed">
            Be among the first to experience the future of footwear.
            <span className="block mt-2">Join the waitlist for exclusive early access.</span>
          </p>

          <div className="max-w-md mx-auto mb-12">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-lg py-4 rounded-full border-2 text-center"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-4 rounded-full bg-red-600 hover:bg-red-700 text-white"
                >
                  Join the waitlist
                </Button>
                <p className="text-sm text-gray-500">Get notified when Fassiano becomes available.</p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="w-8 h-4 border-b-3 border-r-3 border-green-600 transform rotate-45 -translate-y-1"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-black">You're all set!</h3>
                <p className="text-gray-600">We'll notify you when Fassiano is available.</p>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="link" className="text-red-600 hover:text-red-700">
              Learn more about Fassiano
              <span className="ml-1 inline-block w-4 h-4 relative">
                <div className="absolute top-1/2 right-0 w-2 h-2 border-r-2 border-b-2 border-red-600 transform rotate-[-45deg] -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-0 w-3 h-0.5 bg-red-600 -translate-y-1/2"></div>
              </span>
            </Button>
            <Button variant="link" className="text-red-600 hover:text-red-700">
              View technical specifications
              <span className="ml-1 inline-block w-4 h-4 relative">
                <div className="absolute top-1/2 right-0 w-2 h-2 border-r-2 border-b-2 border-red-600 transform rotate-[-45deg] -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-0 w-3 h-0.5 bg-red-600 -translate-y-1/2"></div>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
