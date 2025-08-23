"use client"

import { useLanguage } from "@/components/language-provider"

export function LegalHero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-800 via-gray-700 to-[#198c43] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/bacgkground/legal-hero-background.png')`,
          }}
        />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-white text-shadow-white">
          {t("legal.title")} <span className="text-[#fĩff66] text-shadow-yellow">{t("legal.subtitle")}</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white text-shadow-white">
          {t("legal.description")}
        </p>
      </div>
    </section>
  )
}
