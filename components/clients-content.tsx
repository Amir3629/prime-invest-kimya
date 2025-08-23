"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { useLanguage } from "./language-provider"

export function ClientsContent() {
  const { t } = useLanguage()

  const clientLogos = [
    { name: "Raintrade", image: "/images/client/raintrade.jpeg" },
    { name: "İGSAŞ", image: "/images/client/igsas.jpg.webp" },
    { name: "Gübretas", image: "/images/client/gubretas.jpg.webp" },
    { name: "Yeşil Başak Tarım", image: "/images/client/yesil-basak-tarim.jpg.webp" },
  ]

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/bacgkground/client.png')`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t("clients.major")} <span className="text-[#198c43] text-shadow-green color-transition">{t("clients.subtitle")}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t("clients.partnerships")}</p>
          </div>
        </ScrollAnimation>

        {/* Client Logos */}
        <ScrollAnimation direction="up" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={client.image || "/placeholder.svg"}
                  alt={client.name}
                  className="max-h-48 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Financial Facilities Section */}
        <ScrollAnimation direction="up" delay={400}>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16 overflow-hidden">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url('/images/bacgkground/contact.png')`,
              }}
            />
            <div className="relative">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {t("clients.financial")} <span className="text-[#198c43] text-shadow-green color-transition">{t("clients.facilities")}</span>
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  {t("clients.financial.text1")}
                </p>
                <p>
                  {t("clients.financial.text2")}
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Bank Partners */}
        <ScrollAnimation direction="up" delay={600}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              {t("clients.banking")} <span className="text-[#198c43] text-shadow-green color-transition">{t("clients.partners")}</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Bank BPS", image: "/images/client/bank-bps.jpeg" },
              { name: "Emlak Katılım", image: "/images/client/emlak-katilim.jpg.webp" },
              { name: "Türkiye İş Bankası", image: "/images/client/turkiye-is-bankasi.jpg.webp" },
              { name: "Halkbank", image: "/images/client/halkbank.jpg.webp" },
              { name: "DenizBank", image: "/images/client/denizbank.jpg.webp" },
              { name: "Emirates Islamic", image: "/images/client/emirates-islamic.jpg.webp" },
            ].map((bank, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={bank.image || "/placeholder.svg"}
                  alt={bank.name}
                  className="max-h-48 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
