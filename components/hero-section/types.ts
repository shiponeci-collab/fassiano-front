export interface HeroSectionProps {
  isBoxOpen?: boolean
  onBoxToggle?: (isOpen: boolean) => void
}

export interface ProductItem {
  src: string
  title: string
  category: string
  description: string
  price?: string
  availability?: string
}

export interface AnimationConfig {
  duration: number
  ease: number[] | string
  delay?: number
}

export interface BoxAnimationState {
  rotateY: number
  rotateX: number
  scale: number
  opacity?: number
}
