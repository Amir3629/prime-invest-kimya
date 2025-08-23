"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { t } = useLanguage()

  const backgroundImages = [
    '/images/bacgkground/Homepage Hero background .png',
    '/images/bacgkground/Homepage Hero background 1.png',
    '/images/bacgkground/Homepage Hero background 2.png',
    '/images/bacgkground/Homepage Hero background 3.png'
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      )
    }, 8000) // Change image every 8 seconds

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => {
          const isActive = index === currentImageIndex
          return (
            <div
              key={`hero-${index}`}
              className={`absolute inset-0 ${isActive ? 'opacity-100' : 'opacity-0'}`}
              style={{ transition: 'opacity 6000ms ease-in-out' }} // 6 seconds for fade transition
            >
              <Image
                src={image}
                alt={`Hero Background ${index + 1}`}
                fill
                className="object-cover will-change-transform"
                priority={index === 0}
                style={{ 
                  transform: isActive ? 'scale(1.08)' : 'scale(1)', 
                  transition: 'transform 8000ms ease-out', // 8 seconds for continuous zoom effect
                  filter: isActive ? 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.6))' : 'none'
                }}
              />
            </div>
          )
        })}
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a7a3a]/60 via-[#2d9d5a]/40 to-[#198c43]/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#023D54]/40 via-[#94DEA5]/20 to-[#fĩff66]/10" />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white pt-20">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white text-shadow-white color-transition">
            {t("hero.title")}
            <span className="block text-[#fĩff66] text-shadow-yellow color-transition">{t("hero.subtitle")}</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 max-w-2xl mx-auto leading-relaxed text-white text-shadow-white color-transition">
            {t("hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
            <Button
              size="default"
              className="bg-gradient-to-r from-[#198c43] to-[#2d9d5a] hover:from-[#2d9d5a] hover:to-[#94DEA5] text-white px-6 py-3 text-base group shadow-xl glow-green hover:glow-yellow color-transition hover-lift-enhanced"
              asChild
            >
              <Link href="/about">
                {t("hero.discover")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="default"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900 px-6 py-3 text-base group shadow-xl"
              asChild
            >
              <Link href="/products">
                <Play className="mr-2 h-4 w-4" />
                {t("hero.products")}
              </Link>
            </Button>
          </div>
        </div>

        {/* Compact Statistics */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex justify-center items-center space-x-6 md:space-x-8">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white mb-1 text-shadow-white color-transition">500K+</div>
              <div className="text-xs md:text-sm drop-shadow-md">{t("hero.stats.exported")}</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white mb-1 text-shadow-white color-transition">$150M+</div>
              <div className="text-xs md:text-sm drop-shadow-md">{t("hero.stats.volume")}</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white mb-1 text-shadow-white color-transition">7+</div>
              <div className="text-xs md:text-sm drop-shadow-md">{t("hero.stats.companies")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center shadow-lg">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
