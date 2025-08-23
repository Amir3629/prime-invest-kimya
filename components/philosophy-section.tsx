"use client"

import { Lightbulb } from "lucide-react"
import { useLanguage } from "./language-provider"

export function PhilosophySection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="w-full h-80 bg-cover bg-center rounded-2xl shadow-lg"
              style={{
                backgroundImage: `url('/placeholder.svg?height=600&width=800')`,
              }}
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#198c43] to-[#2d9d5a] rounded-full flex items-center justify-center flex-shrink-0 glow-green hover:glow-yellow color-transition">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t("philosophy.title")} <span className="text-[#198c43] text-shadow-green color-transition">{t("philosophy.subtitle")}</span>
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">{t("philosophy.text")}</p>
            <p className="text-gray-600 leading-relaxed">
              {t("philosophy.text2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
