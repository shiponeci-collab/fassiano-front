// Animation Configurations
export const ANIMATION_CONFIG = {
  boxOpen: {
    duration: 3.0,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
    delay: 0.5
  },
  lidOpen: {
    duration: 2.5,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
    delay: 1.0
  },
  sneakerEmerge: {
    duration: 2.0,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
    delay: 2.0
  },
  contentFadeIn: {
    duration: 1.5,
    ease: "easeOut" as const,
    delay: 3.5
  },
  buttonHover: {
    duration: 0.3,
    ease: "easeOut" as const
  }
}

// Box Dimensions
export const BOX_CONFIG = {
  width: 600,
  height: 400,
  depth: 300,
  perspective: 1200
}

// Product Information
export const PRODUCT_INFO = {
  name: "Moroccan Heritage Collection",
  subtitle: "Crafted by master artisans celebrating Morocco's rich cultures",
  features: [
    "Hand-Stitched Moroccan Leather",
    "Multicultural Design Elements", 
    "Artisan Crafted Excellence"
  ],
  warranty: "Complimentary Worldwide Shipping • Authentic Moroccan Craftsmanship Guarantee",
  description: "Each pair tells the story of Morocco's diverse cultural heritage, where skilled craftsmen blend traditional techniques from different regions, creating unique designs that celebrate the country's multicultural identity."
}

// Collection Items
export const COLLECTION_ITEMS = [
  {
    src: "/fassiano-product-hero.png",
    title: "Heritage Black",
    category: "Premium Collection",
    description: "Timeless elegance in premium black leather"
  },
  {
    src: "/fassiano-cultural-fusion.png", 
    title: "Cultural Fusion",
    category: "Global Edition",
    description: "Where tradition meets contemporary design"
  },
  {
    src: "/fassiano-modern-minimalist.png",
    title: "Modern Minimalist", 
    category: "Clean Collection",
    description: "Pure lines, perfect form"
  },
  {
    src: "/fassiano-global-diversity.png",
    title: "Global Diversity",
    category: "World Edition", 
    description: "Celebrating cultures through craftsmanship"
  }
]
