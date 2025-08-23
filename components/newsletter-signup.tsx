"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { ConfirmationModal } from "@/components/confirmation-modal"
import { useLanguage } from "@/components/language-provider"

export function NewsletterSignup() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setShowConfirmation(true)
    setEmail("")
  }

  return (
    <>
      <section className="py-16 bg-gradient-to-r from-[#198c43] via-[#2d9d5a] to-[#94DEA5]">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#198c43] to-[#2d9d5a] rounded-full flex items-center justify-center mx-auto mb-6 glow-green hover:glow-yellow color-transition">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter and get the latest updates on our products, industry insights, and company
                news.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#fĩff66] hover:bg-[#e6e65c] text-gray-900 px-6 font-semibold shadow-lg hover:shadow-xl color-transition hover-lift-enhanced"
                >
                  {isSubmitting ? t("common.loading") : "Subscribe"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <ConfirmationModal isOpen={showConfirmation} onClose={() => setShowConfirmation(false)} type="newsletter" />
    </>
  )
}
