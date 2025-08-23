"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Target, Heart, Users, Leaf } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const values = [
    { icon: Users, title: "Customer Focus", description: "Putting our clients at the center of everything we do" },
    { icon: Heart, title: "Trust", description: "Building lasting relationships through reliability and integrity" },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers across Turkey, UAE, Oman, Brazil, and beyond",
    },
    {
      icon: Target,
      title: "Quality",
      description: "Delivering premium petrochemical products with consistent excellence",
    },
    { icon: Leaf, title: "Sustainability", description: "Committed to environmental responsibility and human values" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get to Know Our <span className="text-[#198c43] text-shadow-green color-transition">Family</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Prime Invest Kimya Company, established in 2018, is a leading international trading company operating
              across Turkey, UAE, and Oman, specializing in petrochemical products and fertilizers.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Company Story */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed">
                Raymand GmbH has exported more than 500,000 MT of Urea to Turkey, Brazil, India, Africa and European Countries.
                In the early months of 2024, we exported over 100,000 MT of Anhydrous Ammonia and LPG worth over 150
                million dollars.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As an independent trading company, Raymand GmbH has remarkable speed and agility to react to the market, scale
                operations and shift strategy according to new needs and demands.
              </p>

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card className="border-l-4 border-l-[#198c43] hover:shadow-lg transition-all duration-300 hover:glow-green h-full">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h4>
                    <p className="text-gray-600">
                      We supply high quality petrochemical products at competitive prices with timely deliveries to our
                      valuable chain of customers.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-[#2d9d5a] hover:shadow-lg transition-all duration-300 hover:glow-green h-full">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h4>
                    <p className="text-gray-600">
                      To be a prominent independent company in the Middle East, providing superior services to customers
                      around the world.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Business Areas */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Main Business Areas</h3>
              <div className="space-y-4">
                {[
                  "Liquified Petroleum Gas (LPG)",
                  "Anhydrous Ammonia",
                  "Prilled and Granular Urea",
                  "Polymer & PVC",
                  "Ammonium Nitrate",
                  "Oil and Gas Products",
                  "Fertilizer Raw Materials",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#9A6735] rounded-full hover:scale-150 color-transition"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental values on which our company is founded, guiding us in all business activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#198c43] to-[#2d9d5a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform glow-green hover:glow-yellow">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
