"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { QuoteModal } from "@/components/quote-modal"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/products", label: t("nav.products") },
    { href: "/companies", label: t("nav.companies") },
        { href: "/clients", label: t("nav.clients") },
    { href: "/contact", label: t("nav.contact") },
  ]

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "de" : "en"
    setLanguage(newLanguage)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/LOGO/LOGO-removebg-preview (1).png"
                alt="Prime Invest Kimya"
                width={200}
                height={100}
                className="h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-all duration-300 hover:text-[#94DEA5] hover:scale-105 ${
                    pathname === item.href
                      ? isScrolled ? "text-[#0f5a2a]" : pathname === "/" ? "text-white drop-shadow-md" : "text-[#0f5a2a] drop-shadow-md"
                      : isScrolled
                        ? "text-gray-900"
                        : pathname === "/" ? "text-white drop-shadow-md" : "text-[#198c43] drop-shadow-md"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Language Switcher & Contact */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className={`${
                  isScrolled ? "text-gray-900 hover:bg-gray-100" : pathname === "/" ? "text-white hover:bg-white/20 drop-shadow-md" : "text-[#198c43] hover:bg-[#198c43]/20 drop-shadow-md"
                }`}
              >
                <Globe className="h-4 w-4 mr-2" />
                {language === "en" ? "EN" : "DE"}
              </Button>

              <div
                className={`flex items-center space-x-2 ${isScrolled ? "text-gray-900" : pathname === "/" ? "text-white drop-shadow-md" : "text-[#198c43] drop-shadow-md"}`}
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">(069) 24742245</span>
              </div>

              <Button
                className="bg-gradient-to-r from-[#198c43] to-[#2d9d5a] hover:from-[#2d9d5a] hover:to-[#94DEA5] text-white shadow-lg glow-green hover:glow-yellow color-transition hover-lift-enhanced"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                {t("common.getQuote")}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 ${isScrolled ? "text-gray-900" : pathname === "/" ? "text-white drop-shadow-md" : "text-[#198c43] drop-shadow-md"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t shadow-lg">
              <nav className="py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-gray-900 hover:text-[#94DEA5] hover:bg-gradient-to-r hover:from-[#94DEA5]/10 hover:to-[#198c43]/10 transition-all duration-300 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 py-3 border-t">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 text-gray-900">
                      <Phone className="h-4 w-4" />
                      <span>(069) 24742245</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={toggleLanguage}>
                      <Globe className="h-4 w-4 mr-2" />
                      {language === "en" ? "EN" : "DE"}
                    </Button>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-[#198c43] to-[#2d9d5a] hover:from-[#2d9d5a] hover:to-[#94DEA5] text-white color-transition hover-lift-enhanced"
                    onClick={() => {
                      setIsQuoteModalOpen(true)
                      setIsMenuOpen(false)
                    }}
                  >
                    {t("common.getQuote")}
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  )
}
