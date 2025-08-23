"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function ProductsPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {t("products.title")} <span className="text-[#198c43] text-shadow-green color-transition">{t("products.subtitle")}</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">{t("products.description")}</p>
        <Button asChild size="lg" className="bg-[#198c43] hover:bg-[#2d9d5a] text-white px-8 py-4 text-lg">
          <Link href="/products">{t("common.learnMore")}</Link>
        </Button>
      </div>
    </section>
  )
}
