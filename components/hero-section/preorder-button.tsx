"use client"

import { useState, lazy, Suspense } from "react"
import { motion } from "framer-motion"

const NotifyMeForm = lazy(() => import("../notify-me-form").then(mod => ({ default: mod.NotifyMeForm })))

type ModelId = "x-red" | "x-black"

interface PreorderButtonProps {
  selectedModel: ModelId
}

export function PreorderButton({ selectedModel }: PreorderButtonProps) {
  const [showNotifyForm, setShowNotifyForm] = useState(false)
  const heroFont = "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", system-ui, sans-serif"

  return (
    <>
      <motion.button
        className="group relative bg-gradient-to-r from-red-500 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium tracking-wide rounded-full overflow-hidden transition-all duration-300 w-full sm:w-auto cursor-pointer"
        style={{ fontFamily: heroFont }}
        onClick={() => setShowNotifyForm(true)}
        whileHover={{ 
          y: -2,
          boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)"
        }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">Pre-order</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500"
          initial={{ x: "-100%" }}
          whileHover={{ x: "0%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {showNotifyForm && (
        <Suspense fallback={null}>
          <NotifyMeForm
            isOpen={showNotifyForm}
            onClose={() => setShowNotifyForm(false)}
            selectedModel={selectedModel}
          />
        </Suspense>
      )}
    </>
  )
}
