"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
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
      title: "Phone",
      details: "(069) 24742245",
      color: "from-[#198c43] to-[#2d9d5a]",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@raymandeu.com",
      color: "from-[#198c43] to-[#2d9d5a]",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Carl-von-Noorden-Platz 14, 60596 Frankfurt a. Main, Germany",
      color: "from-[#198c43] to-[#2d9d5a]",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      color: "from-[#198c43] to-[#2d9d5a]",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-10 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/global-people-map.png')`,
          backgroundAttachment: "fixed",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In <span className="text-[#198c43] text-shadow-green color-transition">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your petrochemical and fertilizer needs? Contact our team for personalized solutions and
              competitive pricing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-l-4 border-l-[#198c43] hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center flex-shrink-0`}
                          >
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                            <p className="text-gray-600">{info.details}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Financial Facilities */}
              <Card className="bg-gradient-to-br from-[#198c43] to-[#2d9d5a] text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Financial Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">
                    We maintain active accounts with prestigious banks worldwide and offer bank guarantees with varied
                    specifications to our associates, ensuring secure and reliable business transactions.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name Surname *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-[#198c43] hover:bg-[#2d9d5a] text-white group">
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
