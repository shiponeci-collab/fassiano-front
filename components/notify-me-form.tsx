"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, User, Phone, Loader2, MapPin, Hash } from "lucide-react"
import { submitPreorder } from "@/app/actions/submit-preorder"

interface NotifyMeFormProps {
  isOpen: boolean
  onClose: () => void
  selectedModel?: "x-red" | "x-black"
}

export function NotifyMeForm({ isOpen, onClose, selectedModel }: NotifyMeFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    quantityBlack: "0",
    quantityRed: "0"
  })
  const [submittedName, setSubmittedName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!isOpen || !selectedModel) return
    setFormData(prev => ({
      ...prev,
      quantityBlack: selectedModel === "x-black" && prev.quantityBlack === "0" && prev.quantityRed === "0" ? "1" : prev.quantityBlack,
      quantityRed: selectedModel === "x-red" && prev.quantityBlack === "0" && prev.quantityRed === "0" ? "1" : prev.quantityRed
    }))
  }, [isOpen, selectedModel])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required"
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required"
    }

    const quantityBlack = Number.parseInt(formData.quantityBlack, 10)
    const quantityRed = Number.parseInt(formData.quantityRed, 10)

    if (Number.isNaN(quantityBlack) || quantityBlack < 0) {
      newErrors.quantityBlack = "Enter a valid quantity"
    }

    if (Number.isNaN(quantityRed) || quantityRed < 0) {
      newErrors.quantityRed = "Enter a valid quantity"
    }

    if ((quantityBlack || 0) < 1 && (quantityRed || 0) < 1) {
      newErrors.quantityBlack = "Select at least 1 pair"
      newErrors.quantityRed = "Select at least 1 pair"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await submitPreorder({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        quantity_black: Number.parseInt(formData.quantityBlack, 10),
        quantity_red: Number.parseInt(formData.quantityRed, 10),
        total_quantity: Number.parseInt(formData.quantityBlack, 10) + Number.parseInt(formData.quantityRed, 10),
      })

      // With no-cors, we can't read the response, so we assume success
      setSubmittedName(formData.name.trim())
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        quantityBlack: selectedModel === "x-black" ? "1" : "0",
        quantityRed: selectedModel === "x-red" ? "1" : "0"
      })
      
      // Keep success state visible until the user closes the modal

    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const handleClose = () => {
    setSubmitStatus("idle")
    setSubmittedName("")
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleClose}
        >
          <motion.div
            className="relative w-full max-w-md bg-gradient-to-b from-zinc-900 to-black border border-white/10 border-t-white/20 rounded-2xl p-8 shadow-[0_-25px_60px_rgba(0,0,0,0.55),0_25px_60px_rgba(0,0,0,0.55)]"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer"
              onClick={handleClose}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white mb-2">Pre-order Request</h2>
              <p className="text-white/60 text-sm">
                Reserve multiple pairs and mix X-BLACK with X-RED
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm text-white/70 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-sm text-white/70 mb-2">
                  Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="123 Main St, Casablanca"
                  />
                </div>
                {errors.address && (
                  <p className="text-red-400 text-xs mt-1">{errors.address}</p>
                )}
              </div>

              {/* Quantity Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quantityBlack" className="block text-sm text-white/70 mb-2">
                    X-BLACK Qty
                  </label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="number"
                      id="quantityBlack"
                      name="quantityBlack"
                      min={0}
                      max={10}
                      value={formData.quantityBlack}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="0"
                    />
                  </div>
                  {errors.quantityBlack && (
                    <p className="text-red-400 text-xs mt-1">{errors.quantityBlack}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="quantityRed" className="block text-sm text-white/70 mb-2">
                    X-RED Qty
                  </label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="number"
                      id="quantityRed"
                      name="quantityRed"
                      min={0}
                      max={10}
                      value={formData.quantityRed}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="0"
                    />
                  </div>
                  {errors.quantityRed && (
                    <p className="text-red-400 text-xs mt-1">{errors.quantityRed}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Pre-order"
                )}
              </button>

              {/* Error Message */}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-400 text-sm"
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </form>

            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-black/90 p-6 text-center shadow-[0_30px_80px_rgba(0,0,0,0.65)]"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="space-y-4">
                    <div className="text-sm uppercase tracking-[0.3em] text-green-400">Order Sent</div>
                    <p className="text-white text-base font-semibold md:whitespace-nowrap">
                      Thank you{submittedName ? ` ${submittedName}` : ""}. Your order has been sent to our team.
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      You have just acquired a piece of elegance, inspired by Moroccan artisanal craftsmanship, designed for men who move forward with distinction.
                    </p>
                    <p className="text-white/70 text-sm">Hassan Elouardy</p>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-700 border border-red-500/50 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase transition-all duration-200 hover:from-red-500 hover:to-red-600 hover:border-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
