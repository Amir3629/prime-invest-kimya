"use client"

import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function AboutPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Image - REMOVED */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <ScrollAnimation direction="up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("about.title")} <span className="text-[#198c43] text-shadow-green color-transition">{t("about.subtitle")}</span>
          </h2>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={200}>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">{t("about.description")}</p>
        </ScrollAnimation>

        {/* Fertilizer Bag Images */}
        <ScrollAnimation direction="up" delay={300}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-8">
            {/* First Image - Quality Fertilizers */}
            <div className="relative group">
              <div className="w-96 h-72 md:w-[28rem] md:h-[21rem] bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#198c43]/20 hover:border-[#198c43] transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="w-full h-full bg-cover bg-center bg-no-repeat"
                     style={{
                       backgroundImage: `url('/images/ChatGPT Image Aug 23, 2025 at 02_24_14 AM.png')`,
                     }}
                />
              </div>
            </div>

            {/* Second Image - Quality Control */}
            <div className="relative group">
              <div className="w-96 h-72 md:w-[28rem] md:h-[21rem] bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#198c43]/20 hover:border-[#198c43] transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="w-full h-full bg-cover bg-center bg-no-repeat"
                     style={{
                       backgroundImage: `url('/images/ChatGPT Image Aug 23, 2025 at 02_16_21 AM.png')`,
                     }}
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={400}>
          <Button asChild size="lg" className="bg-[#198c43] hover:bg-[#2d9d5a] text-white px-8 py-4 text-lg">
            <Link href="/about">{t("common.learnMore")}</Link>
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  )
}
