"use client"

import { useLanguage } from "./language-provider"

export function ExportCountries() {
  const { t } = useLanguage()

  const exportCountries = [
    "Turkey", "Brazil", "India", "UAE", "Oman", "Poland", 
    "Moldova", "Romania", "Bulgaria", "South Africa", "China", "Germany"
  ]

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Image for whole section */}
      <div className="absolute inset-0">
        <img
          src="/images/map/background.jpg"
          alt="Map Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-green-800/40 to-green-600/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("clients.export.title")} <span className="text-[#198c43] text-shadow-green color-transition">{t("clients.export.subtitle")}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">{t("clients.export.text")}</p>
        </div>

        {/* World Map */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative rounded-2xl p-4 md:p-8 shadow-2xl backdrop-blur-sm">
            
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/images/map/world-map.png"
                alt="World Map"
                className="w-full h-full object-contain sm:object-cover"
                style={{ filter: 'brightness(0.8) contrast(1.2)' }}
              />
              {/* Light green overlay for better visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-green-300/10"></div>
              
              {/* Countries we work with - highlighted regions */}
              <div className="absolute inset-0">
                {/* Responsive map points */}
                <div className="absolute top-1/4 left-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-[#94DEA5] rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-[#94DEA5] rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-[#94DEA5] rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-[#94DEA5] rounded-full shadow-lg animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Countries List */}
          <div className="mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {exportCountries.map((country, index) => (
              <div
                key={country}
                className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-2 py-2 md:px-4 md:py-3 hover:bg-white/20 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#94DEA5] mr-2 flex-shrink-0"></div>
                <span className="text-white text-xs md:text-sm font-medium text-center">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
