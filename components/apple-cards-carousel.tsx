"use client"

import { Button } from "@/components/ui/button"

export function AppleCardsCarousel() {
  const cards = [
    {
      title: "Heritage Collection",
      description: "Where cultural heritage meets contemporary design",
      image: "/fassiano-cultural-fusion.png",
      price: "$349",
    },
    {
      title: "Business Collection",
      description: "Sophisticated design for the modern professional",
      image: "/fassiano-executive-model.png",
      price: "$399",
    },
    {
      title: "Lifestyle Collection",
      description: "Premium comfort for your daily adventures",
      image: "/fassiano-business-woman-updated.png",
      price: "$329",
    },
    {
      title: "Minimalist Collection",
      description: "Clean lines and modern aesthetics",
      image: "/fassiano-modern-minimalist.png",
      price: "$359",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Choose Your Style</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Four distinctive collections, each celebrating a different lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900 rounded-2xl p-8 mb-6 h-80 flex items-center justify-center">
                <img src={card.image || "/placeholder.svg"} alt={card.title} className="w-full h-full object-contain" />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{card.description}</p>
                <div className="text-xl font-bold text-white mb-6">{card.price}</div>
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 bg-white text-black hover:bg-white/90 rounded-full font-medium">
                    Buy Now
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-white/30 text-white hover:bg-white/10 rounded-full font-medium bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
