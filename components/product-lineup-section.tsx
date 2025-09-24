"use client"

import { Button } from "@/components/ui/button"

export function ProductLineupSection() {
  const products = [
    {
      name: "Fassiano Classic",
      description: "Timeless elegance. Premium black leather.",
      price: "From $299",
      image: "/fassiano-product-hero.png",
    },
    {
      name: "Fassiano Heritage",
      description: "Cultural fusion. Traditional meets modern.",
      price: "From $349",
      image: "/fassiano-cultural-fusion.png",
    },
    {
      name: "Fassiano Elite",
      description: "Business luxury. Professional sophistication.",
      price: "From $399",
      image: "/fassiano-executive-model.png",
    },
    {
      name: "Fassiano Global",
      description: "Universal design. Worldwide appeal.",
      price: "From $329",
      image: "/fassiano-business-woman-updated.png",
    },
  ]

  return (
    <section id="lineup" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6 text-black">Explore the lineup.</h2>
          <Button variant="link" className="text-black hover:text-black/70 text-lg">
            Compare all models
            <span className="ml-2 inline-block w-4 h-4 relative">
              <div className="absolute top-1/2 right-0 w-2 h-2 border-r-2 border-b-2 border-black transform rotate-[-45deg] -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 w-3 h-0.5 bg-black -translate-y-1/2"></div>
            </span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative rounded-2xl p-6 mb-6 bg-gray-50 overflow-hidden h-80 flex items-center justify-center">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 text-black">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-balance">{product.description}</p>
                <p className="text-lg font-medium mb-4 text-black">{product.price}</p>
                <div className="space-y-2">
                  <Button className="w-full rounded-full bg-black hover:bg-black/90 text-white">Learn more</Button>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-black text-black hover:bg-black hover:text-white bg-transparent"
                  >
                    Pre-order
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
