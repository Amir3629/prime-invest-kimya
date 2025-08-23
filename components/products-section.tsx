"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Beaker, Leaf, Factory, Zap } from "lucide-react"
import Link from "next/link"

export function ProductsSection() {
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

    const element = document.getElementById("products")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const products = {
    fertilizers: [
      {
        name: "Urea 46%",
        description: "The most concentrated nitrogen fertilizer, essential for crop nutrition and growth.",
        features: ["High nitrogen content", "Water soluble", "Universal application"],
        icon: Leaf,
      },
      {
        name: "Ammonium Nitrate (AN)",
        description: "Commonly used highly-concentrated nitrogen fertilizer for various crops.",
        features: ["Quick release nitrogen", "High solubility", "Efficient uptake"],
        icon: Leaf,
      },
      {
        name: "MAP 12:52",
        description: "Widely used granulated nitrate-free NP fertilizer.",
        features: ["Phosphorus rich", "Starter fertilizer", "Root development"],
        icon: Leaf,
      },
      {
        name: "NPK 10:26:26",
        description: "Widely used complex NPK fertilizer for balanced nutrition.",
        features: ["Balanced nutrition", "Multiple nutrients", "Crop versatility"],
        icon: Leaf,
      },
    ],
    petrochemicals: [
      {
        name: "Liquified Petroleum Gas (LPG)",
        description: "Clean-burning fuel for industrial and domestic applications.",
        features: ["Clean burning", "High efficiency", "Versatile use"],
        icon: Zap,
      },
      {
        name: "Anhydrous Ammonia",
        description: "Essential chemical for fertilizer production and industrial processes.",
        features: ["High purity", "Industrial grade", "Bulk supply"],
        icon: Factory,
      },
      {
        name: "Polymer & PVC",
        description: "High-quality polymers for manufacturing and construction industries.",
        features: ["Superior quality", "Various grades", "Reliable supply"],
        icon: Beaker,
      },
    ],
  }

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#198c43] text-shadow-green color-transition">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium petrochemical products and fertilizers sourced and distributed globally for agricultural,
              industrial, and commercial applications.
            </p>
          </div>

          {/* Product Categories */}
          <Tabs defaultValue="fertilizers" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="fertilizers" className="text-lg">
                Fertilizers
              </TabsTrigger>
              <TabsTrigger value="petrochemicals" className="text-lg">
                Petrochemicals
              </TabsTrigger>
            </TabsList>

            <TabsContent value="fertilizers">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.fertilizers.map((product, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#198c43] hover:glow-green overflow-hidden h-full"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <product.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                      <div className="space-y-2 mb-4">
                        {product.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-gradient-to-r from-[#198c43] to-[#2d9d5a] hover:from-[#2d9d5a] hover:to-[#94DEA5] text-white color-transition hover-lift-enhanced">Request Quote</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="petrochemicals">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.petrochemicals.map((product, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#198c43] hover:glow-green"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#198c43] to-[#2d9d5a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform glow-green">
                        <product.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                      <div className="space-y-2 mb-4">
                        {product.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-gradient-to-r from-[#198c43] to-[#2d9d5a] hover:from-[#2d9d5a] hover:to-[#94DEA5] text-white color-transition hover-lift-enhanced">Request Quote</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Urea Information Section */}
          <div className="mt-20 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  What is <span className="text-[#198c43] text-shadow-green color-transition">Urea Fertilizer</span>?
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Urea is very useful in almost all kinds of crops and fertilization of tobacco seedlings to meet the
                  nitrogen needs of plants. When urea is given insufficiently, the development of the plant slows down,
                  the leaves turn yellow, and the yield decreases.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Urea can be used at all stages of plant development and is the most concentrated nitrogen fertilizer
                  available, making it highly efficient for agricultural applications.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-[#198c43] to-[#2d9d5a] hover:from-[#2d9d5a] hover:to-[#94DEA5] text-white color-transition hover-lift-enhanced" asChild>
                  <Link href="/products">
                    Learn More About Urea
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-[#198c43] mb-2 text-shadow-green color-transition">46%</div>
                  <div className="text-gray-600">Nitrogen Content</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-[#198c43] mb-2 text-shadow-green color-transition">100%</div>
                  <div className="text-gray-600">Water Soluble</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-[#198c43] mb-2 text-shadow-green color-transition">All</div>
                  <div className="text-gray-600">Crop Types</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-[#198c43] mb-2 text-shadow-green color-transition">Global</div>
                  <div className="text-gray-600">Distribution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
