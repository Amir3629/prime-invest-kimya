"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { useLanguage } from "./language-provider"
import { ScrollAnimation } from "./scroll-animation"

export function FAQSection() {
  const { t } = useLanguage()
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqs = [
    {
      questionKey: "faq.question1",
      answerKey: "faq.answer1",
    },
    {
      questionKey: "faq.question2",
      answerKey: "faq.answer2",
    },
    {
      questionKey: "faq.question3",
      answerKey: "faq.answer3",
    },
    {
      questionKey: "faq.question4",
      answerKey: "faq.answer4",
    },
    {
      questionKey: "faq.question5",
      answerKey: "faq.answer5",
    },
    {
      questionKey: "faq.question6",
      answerKey: "faq.answer6",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#198c43] to-[#2d9d5a] rounded-full flex items-center justify-center glow-green hover:glow-yellow color-transition">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("faq.title")} <span className="text-[#198c43] text-shadow-green color-transition">{t("faq.subtitle")}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("faq.description")}
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} direction="up" delay={index * 100}>
                <Card className="border-2 border-gray-200 hover:border-[#94DEA5] transition-all duration-300 hover:glow-green">
                  <CardContent className="p-0">
                    <button
                      className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {t(faq.questionKey)}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFAQ === index ? (
                          <ChevronUp className="h-5 w-5 text-[#94DEA5] hover:scale-110 color-transition transition-transform duration-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-500" />
                        )}
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-700 ease-in-out ${
                        openFAQ === index 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 border-t border-gray-200">
                        <div className="pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {t(faq.answerKey)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <ScrollAnimation direction="up" delay={600}>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("faq.contact.title")}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t("faq.contact.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#198c43] to-[#2d9d5a] hover:from-[#2d9d5a] hover:to-[#94DEA5] text-white font-semibold rounded-lg transition-all duration-300 glow-green hover:glow-yellow hover-lift-enhanced"
              >
                {t("faq.contact.button")}
              </a>
              <a
                href="tel:(069) 24742245"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#198c43] text-[#198c43] hover:bg-gradient-to-r hover:from-[#198c43] hover:to-[#2d9d5a] hover:text-white font-semibold rounded-lg transition-all duration-300 hover:glow-green"
              >
                {t("faq.contact.phone")}
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
} 