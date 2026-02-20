"use client"

import { createContext, useContext, useState } from "react"
import { ModelId } from "./types"

interface HeroContextType {
  selectedModel: ModelId
  setSelectedModel: (model: ModelId) => void
}

const HeroContext = createContext<HeroContextType>({
  selectedModel: "x-red",
  setSelectedModel: () => {},
})

export function useHeroContext() {
  return useContext(HeroContext)
}

export function HeroProvider({ children }: { children: React.ReactNode }) {
  const [selectedModel, setSelectedModel] = useState<ModelId>("x-red")

  return (
    <HeroContext.Provider value={{ selectedModel, setSelectedModel }}>
      {children}
    </HeroContext.Provider>
  )
}
