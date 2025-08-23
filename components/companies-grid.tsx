"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Globe, Truck, Factory } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useLanguage } from "@/components/language-provider"

export function CompaniesGrid() {
  const { t } = useLanguage()
  
  const companies = [
    {
      name: "Green Grow Petrochemical Trading LLC",
      description: t("companies.greengrow.description"),
      location: "UAE",
      icon: Globe,
      image: "/images/Group companies/greengrow-new.jpg.webp",
    },
    {
      name: "Petrochem",
      description: t("companies.petrochem.description"),
      location: "Multi-location",
      icon: Truck,
      image: "/images/Group companies/petrochem-new.jpg.webp",
    },
    {
      name: "Technoturk",
      description: t("companies.technoturk.description"),
      location: "Turkey",
      icon: Building2,
      image: "/images/Group companies/petroturk-new.jpg.webp",
    },
    {
      name: "Chempolska",
      description: t("companies.chempolska.description"),
      location: "Poland, Central & West Europe",
      icon: Factory,
      image: "/images/Group companies/chempolska.jpg.webp",
    },
    {
      name: "Agrosol Protect",
      description: t("companies.agrosol.description"),
      location: "Eastern Europe",
      icon: Globe,
      image: "/images/Group companies/agrosol-protect-logo.jpg.webp",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 100}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#198c43] overflow-hidden h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={company.image || "/placeholder.svg"}
                    alt={company.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-[#198c43] text-shadow-green color-transition">{company.name}</CardTitle>
                  <p className="text-sm text-[#94DEA5] font-medium">{company.location}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 text-sm leading-relaxed">{company.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
