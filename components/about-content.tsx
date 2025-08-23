"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useLanguage } from "@/components/language-provider"
import { Target, Globe, Users, Heart, Award, Leaf, Shield } from "lucide-react"
import { VideoCarousel } from "@/components/video-carousel"

export function AboutContent() {
  const { t } = useLanguage()

  const values = [
    { icon: Users, title: t("values.customer.focus"), description: t("values.customer.focus.description") },
    { icon: Users, title: t("values.teamwork"), description: t("values.teamwork.description") },
    { icon: Heart, title: t("values.trust"), description: t("values.trust.description") },
    { icon: Award, title: t("values.respect"), description: t("values.respect.description") },
    {
      icon: Leaf,
      title: t("values.environment"),
      description: t("values.environment.description"),
    },
  ]

  const businessAreas = [
    t("business.lpg"),
    t("business.ammonia"),
    t("business.urea"),
    t("business.polymer"),
    t("business.nitrate"),
    t("business.oil"),
    t("business.materials"),
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 lg:ml-16 xl:ml-24">
          <ScrollAnimation direction="left">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#198c43] mb-6 text-shadow-green color-transition">{t("about.story")}</h2>
              <div
                className="w-full h-64 md:h-80 lg:h-96 xl:h-[400px] bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url('/images/about us our story/our story .png')`,
                }}
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="right">
            <div className="space-y-6 flex flex-col justify-center">
              <div className="max-w-md mx-auto lg:mx-0 lg:pr-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Company Overview</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t("about.company.description")}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t("about.company.details")}
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Video Section */}
        <VideoCarousel />

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ScrollAnimation direction="left" delay={200}>
            <Card className="border-l-4 border-l-[#198c43] hover:shadow-lg transition-all duration-300 hover:glow-green h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#198c43] to-[#2d9d5a] rounded-full flex items-center justify-center mb-4 glow-green hover:glow-yellow color-transition">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">{t("about.mission")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{t("about.mission.text")}</p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We ensure the security of supply through sustainable and efficient distribution of products and
                  services. We have a mission to build and maintain alliances with those who share our interests and can
                  contribute to and participate in our success.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={200}>
            <Card className="border-l-4 border-l-[#2d9d5a] hover:shadow-lg transition-all duration-300 hover:glow-green h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#2d9d5a] to-[#1a7a3a] rounded-full flex items-center justify-center mb-4 glow-green hover:glow-yellow color-transition">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">{t("about.vision")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{t("about.vision.text")}</p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  A leading company in trading market utilizing an effective long term business cooperation with global
                  leading companies and partners, providing superior services to our valuable customers around the
                  world.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        {/* Business Areas */}
        <ScrollAnimation direction="up" delay={300}>
          <Card className="mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gray-900 mb-4">{t("about.business.areas")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {businessAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-[#198c43] rounded-full flex-shrink-0 hover:scale-150 color-transition"></div>
                    <span className="text-gray-700 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Philosophy */}
        <ScrollAnimation direction="up" delay={300}>
          <Card className="bg-gradient-to-r from-[#198c43] to-[#2d9d5a] text-white mb-16 overflow-hidden glow-green hover:glow-yellow">
            <div className="absolute inset-0 opacity-20">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/my philosopy.png')`,
                }}
              />
            </div>
            <CardHeader className="relative">
              <CardTitle className="text-2xl flex items-center">
                <Shield className="h-8 w-8 mr-3" />
                {t("philosophy.title")} {t("philosophy.subtitle")}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <p className="leading-relaxed">{t("philosophy.text")}</p>
              <p className="leading-relaxed mt-4">
                {t("philosophy.text2")}
              </p>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Values */}
        <ScrollAnimation direction="up" delay={400}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {t("values.title")} {t("values.subtitle")}
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("values.description")}</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#198c43] to-[#2d9d5a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform glow-green hover:glow-yellow">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimation>

        {/* Business Transparency & Code of Ethics */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <ScrollAnimation direction="left" delay={600}>
            <Card className="h-80 overflow-hidden relative">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                  backgroundImage: `url('/images/about us/Business Transparency.png')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#94DEA5]/20 via-[#2d9d5a]/15 to-[#198c43]/10"></div>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 h-full flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-white">{t("about.transparency.title")}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-100 leading-relaxed text-lg">
                    {t("about.transparency.text")}
                  </p>
                </CardContent>
              </div>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={600}>
            <Card className="h-80 overflow-hidden relative">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                  backgroundImage: `url('/images/about us/Code of Ethics.png')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#94DEA5]/20 via-[#2d9d5a]/15 to-[#198c43]/10"></div>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 h-full flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg md:text-xl text-white">{t("about.ethics.title")}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 overflow-hidden">
                  <p className="text-gray-100 leading-relaxed text-lg break-words">
                    {t("about.ethics.text")}
                  </p>
                </CardContent>
              </div>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
