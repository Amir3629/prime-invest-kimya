"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/scroll-animation"
import { QuoteModal } from "@/components/quote-modal"
import { useLanguage } from "@/components/language-provider"

export function ProductsGrid() {
  const { t } = useLanguage()
  const [quoteModal, setQuoteModal] = useState({ isOpen: false, productName: "" })

  const openQuoteModal = (productName: string) => {
    setQuoteModal({ isOpen: true, productName })
  }

  const closeQuoteModal = () => {
    setQuoteModal({ isOpen: false, productName: "" })
  }

  const fertilizers = [
    {
      name: "Urea 46%",
      description: t("product.urea.description"),
      features: [t("features.nitrogen"), t("features.soluble"), t("features.universal")],
      image: "/images/products/urea-46-pik.jpg (1).webp",
    },
    {
      name: "Potassium Chloride (KCl)",
      description: t("product.kcl.description"),
      features: ["High potassium content", "Chloride source", "Crop quality improvement"],
      image: "/images/products/kcl-pik.jpg.webp",
    },
    {
      name: "Di-Ammonium Phosphate (DAP)",
      description: t("product.dap.description"),
      features: [t("features.phosphorus"), "Nitrogen content", t("features.root")],
      image: "/images/products/DAP-pik.jpg.webp",
    },
    {
      name: "Ammonium Nitrate (AN)",
      description: t("product.ammonium.nitrate.description"),
      features: [t("features.quick"), t("features.solubility"), t("features.uptake")],
      image: "/images/products/ammonium-nitrate-pik.jpg (1).webp",
    },
    {
      name: "Calcium Ammonium Nitrate With Sulphur",
      description: t("product.calcium.ammonium.description"),
      features: ["Calcium enriched", "Sulphur content", "Improved soil structure"],
      image: "/images/products/calcium-ammonium-nitrate-with-sulphur-pik.jpg.webp",
    },
    {
      name: "NPK 24:6:12",
      description: t("product.npk.24.6.12.description"),
      features: ["High nitrogen", t("features.balanced"), "Growth promotion"],
      image: "/images/products/npk-24-6-12-pik.jpg.webp",
    },
    {
      name: "Ammonium Sulphate (AS)",
      description: t("product.ammonium.sulphate.description"),
      features: ["Nitrogen and sulphur", "Soil acidification", "Protein synthesis"],
      image: "/images/products/ammonium-sulphate-pik.jpg.webp",
    },
    {
      name: "MAP 12:52",
      description: t("product.map.12.52.description"),
      features: [t("features.phosphorus"), t("features.starter"), t("features.root")],
      image: "/images/products/map-12-52-pik.jpg (1).webp",
    },
    {
      name: "NPK 10:26:26",
      description: t("product.npk.10.26.26.description"),
      features: [t("features.balanced"), t("features.nutrients"), t("features.versatility")],
      image: "/images/products/npk-10-26-26-pik.jpg (1).webp",
    },
    {
      name: "NPKS 22:7:12:2",
      description: t("product.npks.22.7.12.2.description"),
      features: ["Complete nutrition", "Sulphur enriched", "Enhanced efficiency"],
      image: "/images/products/npks-22-7-12-2-pik.jpg.webp",
    },
    {
      name: "NPKS 8:20:30:2",
      description: t("product.npks.8.20.30.2.description"),
      features: ["High potassium", t("features.phosphorus"), "Sulphur content"],
      image: "/images/products/npks-8-20-30-2-pik.jpg.webp",
    },
  ]

  return (
    <>
      <section className="py-10 sm:py-20 bg-white relative z-10 min-h-screen">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                {t("products.fertilizers")}
              </h2>
            </div>

            {/* Debug info for mobile - remove after testing */}
            {/* <div className="block sm:hidden mb-4 p-3 bg-red-500 text-white text-sm rounded-lg font-bold">
              Mobile Debug: You should see this red banner and cards below on mobile
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 products-grid-mobile">
              {fertilizers.map((product, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-200 hover:border-[#198c43] flex flex-col h-full relative bg-white shadow-lg product-card-mobile"
                >
                  <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-300 border-b border-gray-200">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 bg-white"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <CardHeader className="pb-3 flex-shrink-0 p-4 bg-white">
                    <CardTitle className="text-lg font-semibold text-[#198c43] mb-2 text-shadow-green color-transition">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow p-4 pt-0 bg-white">
                    <p className="text-gray-700 mb-4 text-xs sm:text-sm flex-grow line-clamp-3 font-medium">{product.description}</p>
                    <div className="space-y-2 mb-4 flex-shrink-0">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs mr-1 mb-1 bg-gray-200 text-gray-800 border border-gray-300 font-medium">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      className="w-full bg-[#198c43] hover:bg-[#2d9d5a] text-white mt-auto flex-shrink-0 text-sm py-3 font-bold shadow-md"
                      onClick={() => openQuoteModal(product.name)}
                    >
                      {t("products.quote")}
                    </Button>
                  </CardContent>
                </Card>
              ))}
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