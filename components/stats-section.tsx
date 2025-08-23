"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Globe, Award, Users } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useLanguage } from "@/components/language-provider"

export function StatsSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    quality: 0,
    trust: 0,
    efficiency: 0,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          const duration = 2000
          const steps = 60
          const increment = 100 / steps
          let currentStep = 0

          const timer = setInterval(() => {
            currentStep++
            setCounts({
              quality: Math.min(100, currentStep * increment),
              trust: Math.min(100, currentStep * increment),
              efficiency: Math.min(100, currentStep * increment),
            })

            if (currentStep >= steps) {
              clearInterval(timer)
              setCounts({ quality: 100, trust: 100, efficiency: 100 })
            }
          }, duration / steps)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("stats")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const achievements = [
    {
      icon: TrendingUp,
      value: "500K+",
      label: t("hero.stats.exported"),
      description: "Tons of high-quality products delivered worldwide",
    },
    {
      icon: Globe,
      value: "$150M+",
      label: t("hero.stats.volume"),
      description: "Total value of international trade in 2024",
    },
    {
      icon: Award,
      value: "7+",
      label: t("hero.stats.companies"),
      description: "Strategic operations across multiple countries",
    },
    {
      icon: Users,
      value: "100K+",
      label: "MT Ammonia",
      description: "Anhydrous Ammonia exported in early 2024",
    },
  ]

  return (
    <section id="stats" className="py-20 text-white relative overflow-hidden bg-cover bg-center bg-fixed">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/images/Proven Track Record of Excellence.png')`,
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Green accent overlay for brand consistency */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#198c43]/20 via-[#2d9d5a]/15 to-[#94DEA5]/10"></div>
      
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-white color-transition relative z-10">
              {t("stats.excellence")} <span className="text-[#fĩff66] text-shadow-yellow color-transition">{t("stats.achievements")}</span>
            </h2>
            <p className="text-xl text-white text-shadow-white max-w-3xl mx-auto relative z-10">{t("stats.description")}</p>
          </div>
        </ScrollAnimation>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 items-stretch">
          {achievements.map((achievement, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 100}>
              <Card className="bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-xl h-64 w-full flex flex-col">
                <CardContent className="p-6 text-center relative z-10 flex-1 flex flex-col justify-center">
                  <achievement.icon className="h-12 w-12 mx-auto mb-4 text-white drop-shadow-lg" />
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white drop-shadow-md">{achievement.value}</div>
                  <div className="text-lg font-semibold mb-2 text-white drop-shadow-md">{achievement.label}</div>
                  <p className="text-sm text-white/90 drop-shadow-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Compact Quality Metrics */}
        <ScrollAnimation direction="up" delay={400}>
          <div className="flex justify-center items-center space-x-8 md:space-x-16 relative z-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-[#fĩff66] text-shadow-yellow">{Math.round(counts.quality)}%</div>
              <div className="text-lg font-semibold text-white text-shadow-white">{t("stats.quality")}</div>
              <div className="w-20 bg-white/30 rounded-full h-2 mt-2">
                <div
                  className="bg-[#fĩff66] h-2 rounded-full transition-all duration-1000 shadow-lg"
                  style={{ width: `${counts.quality}%` }}
                />
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-[#fĩff66] text-shadow-yellow">{Math.round(counts.trust)}%</div>
              <div className="text-lg font-semibold text-white text-shadow-white">{t("stats.trust")}</div>
              <div className="w-20 bg-white/30 rounded-full h-2 mt-2">
                <div
                  className="bg-[#fĩff66] h-2 rounded-full transition-all duration-1000 shadow-lg"
                  style={{ width: `${counts.trust}%` }}
                />
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-[#fĩff66] text-shadow-yellow">
                {Math.round(counts.efficiency)}%
              </div>
              <div className="text-lg font-semibold text-white text-shadow-white">{t("stats.efficiency")}</div>
              <div className="w-20 bg-white/30 rounded-full h-2 mt-2">
                <div
                  className="bg-[#fĩff66] h-2 rounded-full transition-all duration-1000 shadow-lg"
                  style={{ width: `${counts.efficiency}%` }}
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
