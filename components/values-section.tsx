"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Award, Leaf } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function ValuesSection() {
  const { t } = useLanguage()

  const values = [
    { icon: Users, title: t("values.customer.focus"), description: t("values.customer.focus.description") },
    { icon: Users, title: t("values.teamwork"), description: t("values.teamwork.description") },
    { icon: Heart, title: t("values.trust"), description: t("values.trust.description") },
    { icon: Award, title: t("values.respect"), description: t("values.respect.description") },
    { icon: Leaf, title: t("values.environment"), description: t("values.environment.description") },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("values.title")} <span className="text-[#198c43] text-shadow-green color-transition">{t("values.subtitle")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("values.description")}</p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#198c43] to-[#2d9d5a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform glow-green hover:glow-yellow">
                  {value.icon && <value.icon className="h-10 w-10 text-white" />}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
