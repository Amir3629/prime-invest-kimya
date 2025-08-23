"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Globe, Truck, Factory } from "lucide-react"

export function GroupCompaniesSection() {
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

    const element = document.getElementById("companies")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const companies = [
    {
      name: "Green Grow Petrochemical Trading LLC",
      description: "The company is activated in the field of Export and Import of Petrochemical Products.",
      location: "UAE",
      icon: Globe,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Petrochem",
      description: "Active in the field of logistics and own warehouse operations.",
      location: "Multi-location",
      icon: Truck,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Technoturk",
      description: "Active in field of Import & Export of petrochemical products in Turkey.",
      location: "Turkey",
      icon: Building2,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Chempolska",
      description: "Active in field of Import, Export & Distribution of Fertilizers and Industrial raw material.",
      location: "Poland, Central & West Europe",
      icon: Factory,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      name: "Agrosol Protect",
      description: "Activated in the field of fertilizer and supplying commodities to Moldova, Romania and Bulgaria.",
      location: "Eastern Europe",
      icon: Globe,
      color: "from-teal-500 to-teal-600",
    },
  ]

  return (
    <section id="companies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#198c43] text-shadow-green color-transition">Group Companies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A strategic network of companies operating across multiple countries, providing comprehensive
              petrochemical and fertilizer solutions worldwide.
            </p>
          </div>

          {/* Companies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#198c43]"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${company.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <company.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#198c43] text-shadow-green color-transition">{company.name}</CardTitle>
                  <p className="text-sm text-[#94DEA5] font-medium">{company.location}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{company.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Export Countries Section */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Export Countries</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
              Raymand GmbH group sources and distributes more than 500,000 tons of high-quality fertilizer raw materials,
              intermediate products, polymers and finished products including Urea, DAP, Phosphoric Acid, and Sulphur to
              communities growing sugar, corn, wheat, and barley each year.
            </p>

            {/* Country Flags/Names */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "Turkey",
                "Brazil",
                "India",
                "UAE",
                "Oman",
                "Poland",
                "Moldova",
                "Romania",
                "Bulgaria",
                "South Africa",
                "China",
                "European Countries",
              ].map((country, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-sm font-medium text-gray-900">{country}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
