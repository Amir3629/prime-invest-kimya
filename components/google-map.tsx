"use client"

import { useLanguage } from "./language-provider"
import { MapPin } from "lucide-react"

export function GoogleMap() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#198c43] mb-4 text-shadow-green color-transition">
            {t("contact.location.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("contact.location.description")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Address Info Bar */}
            <div className="bg-gradient-to-r from-[#198c43] to-[#2d9d5a] text-white p-6">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-2">Raymand GmbH</h4>
                  <p className="text-white/90">
                    Carl-von-Noorden-Platz 14, 60596 Frankfurt a. Main, Germany
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="relative w-full h-96 md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.517!2d8.688!3d50.099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0e7c3c9c9c9d%3A0x1234567890abcdef!2sCarl-von-Noorden-Platz%2014%2C%2060596%20Frankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Raymand GmbH Office Location"
                className="w-full h-full"
              />
            </div>


          </div>
        </div>
      </div>
    </section>
  )
} 