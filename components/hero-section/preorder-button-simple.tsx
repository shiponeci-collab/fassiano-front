"use client"

import { useState, lazy, Suspense } from "react"

const NotifyMeForm = lazy(() => import("../notify-me-form").then(mod => ({ default: mod.NotifyMeForm })))

export function PreorderButtonSimple() {
  const [showNotifyForm, setShowNotifyForm] = useState(false)
  const heroFont = "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", \"SF Pro Text\", system-ui, sans-serif"

  return (
    <>
      <button
        className="group relative bg-gradient-to-r from-red-500 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium tracking-wide rounded-full overflow-hidden transition-all duration-300 w-full sm:w-auto cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(239,68,68,0.3)] active:scale-[0.98]"
        style={{ fontFamily: heroFont }}
        onClick={() => setShowNotifyForm(true)}
      >
        <span className="relative z-10">Pre-order</span>
        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>

      {showNotifyForm && (
        <Suspense fallback={null}>
          <NotifyMeForm
            isOpen={showNotifyForm}
            onClose={() => setShowNotifyForm(false)}
            selectedModel="x-black"
          />
        </Suspense>
      )}
    </>
  )
}
