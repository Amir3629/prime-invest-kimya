"use client"

import { useLanguage } from "@/components/language-provider"

export function CompaniesHero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('/images/bacgkground/group companies.jpg')`,
          }}
        />
        {/* Light Green Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#94DEA5]/15 via-[#2d9d5a]/10 to-[#198c43]/8"></div>
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl text-white text-shadow-white">
          {t("companies.title")} <span className="text-[#fĩff66] text-shadow-yellow">{t("companies.subtitle")}</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg text-white text-shadow-white">{t("companies.description")}</p>
      </div>
    </section>
  )
}
