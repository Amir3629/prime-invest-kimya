"use client"

import { useState } from "react"
import { Card, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { QuoteModal } from "@/components/quote-modal"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

export function ProductShowcase() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [quoteModal, setQuoteModal] = useState({ isOpen: false, productName: "" })

  const featuredProducts = [
    {
      name: t("featured.urea.name"),
      description: t("featured.urea.description"),
      features: [t("featured.urea.features.nitrogen"), t("featured.urea.features.soluble"), t("featured.urea.features.universal")],
      image: "/images/products/urea-46-pik.jpg (1).webp",
      category: t("featured.urea.category"),
    },
    {
      name: t("featured.lpg.name"),
      description: t("featured.lpg.description"),
      features: [t("featured.lpg.features.clean"), t("featured.lpg.features.efficiency"), t("featured.lpg.features.versatile")],
      image: "/images/products/DAP-pik.jpg.webp",
      category: t("featured.lpg.category"),
    },
    {
      name: t("featured.ammonia.name"),
      description: t("featured.ammonia.description"),
      features: [t("featured.ammonia.features.purity"), t("featured.ammonia.features.industrial"), t("featured.ammonia.features.bulk")],
      image: "/images/products/ammonium-nitrate-pik.jpg (1).webp",
      category: t("featured.ammonia.category"),
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length)
  }

  const openQuoteModal = (productName: string) => {
    setQuoteModal({ isOpen: true, productName })
  }

  return (
    <>
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern - REMOVED */}
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t("showcase.title")} <span className="text-[#198c43] text-shadow-green color-transition">{t("showcase.subtitle")}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("showcase.description")}</p>
            </div>
          </ScrollAnimation>

          {/* Product Slider */}
          <div className="relative max-w-4xl mx-auto">
            <ScrollAnimation direction="left" delay={200}>
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {featuredProducts.map((product, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <Card className="mx-4 border-2 border-gray-200 hover:border-[#198c43] transition-all duration-300 shadow-xl">
                        <div className="grid md:grid-cols-2 gap-0">
                          <div className="aspect-square overflow-hidden">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 bg-white"
                            />
                          </div>
                          <div className="p-8 flex flex-col justify-center">
                            <Badge className="w-fit mb-4 bg-[#198c43] text-white">{product.category}</Badge>
                            <CardTitle className="text-2xl text-gray-900 mb-4">{product.name}</CardTitle>
                            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                            <div className="space-y-2 mb-6">
                              {product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-[#94DEA5] rounded-full" />
                                  <span className="text-sm text-gray-700">{feature}</span>
                                </div>
                              ))}
                            </div>
                            <Button
                              className="bg-[#198c43] hover:bg-[#2d9d5a] text-white"
                              onClick={() => openQuoteModal(product.name)}
                            >
                              {t("products.quote")}
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-[#198c43]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* View All Products Button */}
          <ScrollAnimation direction="up" delay={400}>
            <div className="text-center mt-12">
              <Button size="lg" className="bg-[#198c43] hover:bg-[#2d9d5a] text-white px-8 py-4 text-lg group" asChild>
                <Link href="/products">
                  {t("showcase.viewAll")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <QuoteModal
        isOpen={quoteModal.isOpen}
        onClose={() => setQuoteModal({ isOpen: false, productName: "" })}
        productName={quoteModal.productName}
      />
    </>
  )
}
