"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useLanguage } from "@/components/language-provider"
import { ConfirmationModal } from "@/components/confirmation-modal"

export function ContactForm() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
          type: 'contact'
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      setShowConfirmation(true)
      setFormData({ name: "", phone: "", email: "", message: "" })
    } catch (error) {
      console.error('Error sending form:', error)
      // You could add error handling UI here
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.phone"),
      details: "(069) 24742245",
    },
    {
      icon: Mail,
      title: t("contact.email"),
      details: "info@raymandeu.com",
    },
    {
      icon: MapPin,
      title: t("contact.address"),
      details: "Carl-von-Noorden-Platz 14, 60596 Frankfurt a. Main, Germany",
    },
    {
      icon: Clock,
      title: t("contact.hours"),
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/port-logistics.png')`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <ScrollAnimation direction="left">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("contact.info")}</h3>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <ScrollAnimation key={index} direction="left" delay={index * 100}>
                      <Card className="border-l-4 border-l-[#198c43] hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#198c43] to-[#2d9d5a] rounded-full flex items-center justify-center flex-shrink-0 glow-green hover:glow-yellow color-transition">
                              <info.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                              <p className="text-gray-600">{info.details}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Contact Form */}
          <ScrollAnimation direction="right">
            <Card className="shadow-xl relative overflow-hidden border-2 border-gray-200">
              {/* Background Image - Make it more visible */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                style={{
                  backgroundImage: `url('/images/contactformular/support-team.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center'
                }}
              />
              {/* White overlay to maintain readability */}
              <div className="absolute inset-0 bg-white/75"></div>
              <div className="relative z-10">
                <CardHeader className="bg-white/90 border-b border-gray-200 backdrop-blur-sm">
                  <CardTitle className="text-2xl text-gray-900 font-bold">{t("contact.form.title")}</CardTitle>
                  <p className="text-gray-700 font-medium">{t("contact.form.description")}</p>
                </CardHeader>
                <CardContent className="bg-white/90 backdrop-blur-sm">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
                          {t("contact.form.name")} *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/90 border-2 border-gray-200 focus:border-[#94DEA5] focus:ring-2 focus:ring-[#94DEA5]/20 focus:glow-green color-transition"
                          placeholder={t("contact.form.placeholder.name")}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-2">
                          {t("contact.form.phone")} *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/90 border-2 border-gray-200 focus:border-[#94DEA5] focus:ring-2 focus:ring-[#94DEA5]/20 focus:glow-green color-transition"
                          placeholder={t("contact.form.placeholder.phone")}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                        {t("contact.form.email")} *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/90 border-2 border-gray-200 focus:border-[#94DEA5] focus:ring-2 focus:ring-[#94DEA5]/20 focus:glow-green color-transition"
                        placeholder={t("contact.form.placeholder.email")}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">
                        {t("contact.form.message")} *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-white/90 border-2 border-gray-200 focus:border-[#94DEA5] focus:ring-2 focus:ring-[#94DEA5]/20 focus:glow-green color-transition"
                        placeholder={t("contact.form.placeholder.message")}
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#198c43] to-[#2d9d5a] hover:from-[#2d9d5a] hover:to-[#94DEA5] text-white group font-bold shadow-lg glow-green hover:glow-yellow color-transition hover-lift-enhanced"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
                    </Button>
                  </form>
                </CardContent>
              </div>
            </Card>
          </ScrollAnimation>
        </div>
      </div>

      <ConfirmationModal isOpen={showConfirmation} onClose={() => setShowConfirmation(false)} type="contact" />
    </section>
  )
}
