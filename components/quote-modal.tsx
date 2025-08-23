"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ConfirmationModal } from "@/components/confirmation-modal"
import { useLanguage } from "@/components/language-provider"
import { Send } from "lucide-react"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  productName?: string
}

export function QuoteModal({ isOpen, onClose, productName }: QuoteModalProps) {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState({
    product: productName || "",
    quantity: "",
    delivery: "",
    timeline: "",
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'quote'
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      onClose()
      setShowConfirmation(true)
      setFormData({
        product: "",
        quantity: "",
        delivery: "",
        timeline: "",
        company: "",
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.error('Error sending quote request:', error)
      alert('Failed to send quote request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">{t("quote.title")}</DialogTitle>
            <p className="text-gray-600">{t("quote.subtitle")}</p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("quote.form.product")} *</label>
                <Select value={formData.product} onValueChange={(value) => handleChange("product", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t("quote.form.select.product")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urea-46">Urea 46%</SelectItem>
                    <SelectItem value="ammonium-nitrate">Ammonium Nitrate</SelectItem>
                    <SelectItem value="map">MAP 12:52</SelectItem>
                    <SelectItem value="npk">NPK 10:26:26</SelectItem>
                    <SelectItem value="lpg">LPG</SelectItem>
                    <SelectItem value="ammonia">Anhydrous Ammonia</SelectItem>
                    <SelectItem value="polymer">Polymer & PVC</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("quote.form.quantity")} *</label>
                <Input
                  value={formData.quantity}
                  onChange={(e) => handleChange("quantity", e.target.value)}
                  placeholder={t("quote.form.placeholder.quantity")}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("quote.form.delivery")} *</label>
                <Input
                  value={formData.delivery}
                  onChange={(e) => handleChange("delivery", e.target.value)}
                  placeholder={t("quote.form.placeholder.delivery")}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("quote.form.timeline")} *</label>
                <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t("quote.form.select.timeline")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">{t("quote.form.timeline.immediate")}</SelectItem>
                    <SelectItem value="month">{t("quote.form.timeline.month")}</SelectItem>
                    <SelectItem value="quarter">{t("quote.form.timeline.quarter")}</SelectItem>
                    <SelectItem value="flexible">{t("quote.form.timeline.flexible")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("quote.form.company")} *</label>
                <Input
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  placeholder={t("quote.form.placeholder.company")}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.name")} *</label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder={t("contact.form.placeholder.name")}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.email")} *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder={t("contact.form.placeholder.email")}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.phone")} *</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder={t("contact.form.placeholder.phone")}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.message")}</label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={4}
                placeholder={t("quote.form.placeholder.message")}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                {t("common.close")}
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-[#198c43] hover:bg-[#2d9d5a] text-white"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? t("quote.form.submitting") : t("quote.form.submit")}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <ConfirmationModal isOpen={showConfirmation} onClose={() => setShowConfirmation(false)} type="quote" />
    </>
  )
}
