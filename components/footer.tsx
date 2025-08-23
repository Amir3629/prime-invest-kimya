"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/products", label: t("nav.products") },
    { href: "/companies", label: t("nav.companies") },
    { href: "/clients", label: t("nav.clients") },
    { href: "/contact", label: t("nav.contact") },
  ]

  const legalLinks = [
    { href: "/legal", label: "Legal Documents" },
    { href: "/legal#privacy", label: "Privacy Policy" },
    { href: "/legal#terms", label: "Terms of Service" },
    { href: "/legal#cookies", label: "Cookie Policy" },
  ]

  const products = ["Urea 46%", "Ammonium Nitrate", "MAP 12:52", "NPK Fertilizers", "LPG", "Anhydrous Ammonia"]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Dynamic Parallax Background */}
      <div
        className="absolute inset-0 opacity-10 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/footer/footer.png')`,
          backgroundAttachment: "fixed",
        }}
      />
      
      {/* Light Green Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#198c43]/20 via-[#94DEA5]/15 to-[#2d9d5a]/25"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/LOGO/LOGO-removebg-preview (1).png"
                alt="Prime Invest Kimya"
                width={200}
                height={100}
                className="h-20 w-auto"
                priority
              />
            </Link>
            <p className="text-gray-300 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#198c43] text-shadow-green color-transition">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#9A6735] transition-all duration-300 hover:scale-105 hover:translate-x-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#198c43] text-shadow-green color-transition">Our Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <span className="text-gray-300">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#198c43] text-shadow-green color-transition">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#198c43] mt-1 flex-shrink-0 hover:scale-110 color-transition" />
                <span className="text-gray-300">(069) 24742245</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#198c43] mt-1 flex-shrink-0 hover:scale-110 color-transition" />
                <span className="text-gray-300">info@raymandeu.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#198c43] mt-1 flex-shrink-0 hover:scale-110 color-transition" />
                <span className="text-gray-300">Carl-von-Noorden-Platz 14, 60596 Frankfurt a. Main, Germany</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Raymand GmbH. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-[#9A6735] text-sm transition-all duration-300 hover:scale-105"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
