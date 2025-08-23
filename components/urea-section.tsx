"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { useLanguage } from "./language-provider"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { QuoteModal } from "./quote-modal"
import { Leaf, Droplets, Globe, TrendingUp, CheckCircle, Info } from "lucide-react"

export function UreaSection() {
  const { t } = useLanguage()
  const [showUreaModal, setShowUreaModal] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)

  const ureaAdvantages = [
    { icon: Leaf, title: t("urea.modal.high.nitrogen"), description: t("urea.modal.high.nitrogen.desc") },
    { icon: Droplets, title: t("urea.modal.water.soluble"), description: t("urea.modal.water.soluble.desc") },
    { icon: Globe, title: t("urea.modal.universal"), description: t("urea.modal.universal.desc") },
    { icon: TrendingUp, title: t("urea.modal.cost.effective"), description: t("urea.modal.cost.effective.desc") },
  ]

  const applicationMethods = [
    t("urea.modal.soil.application"),
    t("urea.modal.foliar.spray"),
    t("urea.modal.fertigation"),
    t("urea.modal.broadcast")
  ]

  return (
    <>
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/bacgkround/aboutt.png')`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {t("urea.title")} <span className="text-[#198c43] text-shadow-green color-transition">{t("urea.subtitle")}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{t("urea.text1")}</p>
                <p className="text-gray-600 leading-relaxed mb-8">{t("urea.text2")}</p>
                <Button 
                  size="lg" 
                  className="bg-[#198c43] hover:bg-[#2d9d5a] text-white"
                  onClick={() => setShowUreaModal(true)}
                >
                  <Info className="mr-2 h-5 w-5" />
                  {t("urea.learn.more")}
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-100 rounded-xl">
                  <div className="text-3xl font-bold text-[#198c43] mb-2">46%</div>
                  <div className="text-gray-600">{t("urea.stat1")}</div>
                </div>
                <div className="text-center p-6 bg-gray-100 rounded-xl">
                  <div className="text-3xl font-bold text-[#198c43] mb-2">100%</div>
                  <div className="text-gray-600">{t("urea.stat2")}</div>
                </div>
                <div className="text-center p-6 bg-gray-100 rounded-xl">
                  <div className="text-3xl font-bold text-[#198c43] mb-2">All</div>
                  <div className="text-gray-600">{t("urea.stat3")}</div>
                </div>
                <div className="text-center p-6 bg-gray-100 rounded-xl">
                  <div className="text-3xl font-bold text-[#198c43] mb-2">Global</div>
                  <div className="text-gray-600">{t("urea.stat4")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urea Information Modal */}
      <Dialog open={showUreaModal} onOpenChange={setShowUreaModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">
              {t("urea.modal.title")} <span className="text-[#198c43]">{t("urea.modal.subtitle")}</span>
            </DialogTitle>
            <p className="text-gray-600 text-lg">{t("urea.modal.description")}</p>
          </DialogHeader>

          <div className="space-y-8 mt-6">
            {/* Key Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("urea.modal.benefits")}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {ureaAdvantages.map((advantage, index) => (
                  <Card key={index} className="border-l-4 border-l-[#198c43] hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#198c43] to-[#2d9d5a] rounded-full flex items-center justify-center flex-shrink-0">
                          <advantage.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                          <p className="text-gray-600">{advantage.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Application Methods */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("urea.modal.application.methods")}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {applicationMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-[#198c43] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{method}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("urea.modal.technical.specs")}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-[#198c43]/10 to-[#2d9d5a]/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-[#198c43] mb-2">46%</div>
                    <div className="text-gray-700 font-medium">{t("urea.modal.nitrogen.content")}</div>
                    <div className="text-sm text-gray-600 mt-2">{t("urea.modal.highest.solid")}</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">CO(NH₂)₂</div>
                    <div className="text-gray-700 font-medium">{t("urea.modal.chemical.formula")}</div>
                    <div className="text-sm text-gray-600 mt-2">{t("urea.modal.pure.carbamide")}</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-gray-700 font-medium">{t("urea.modal.solubility")}</div>
                    <div className="text-sm text-gray-600 mt-2">{t("urea.modal.completely.soluble")}</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Recommended Crops */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("urea.modal.recommended.crops")}</h3>
              <div className="flex flex-wrap gap-3">
                {["Wheat", "Corn", "Rice", "Barley", "Sugar Beet", "Tobacco", "Cotton", "Vegetables", "Fruit Trees", "Legumes"].map((crop, index) => (
                  <Badge key={index} className="bg-[#198c43]/10 text-[#198c43] hover:bg-[#198c43]/20 px-4 py-2 text-sm">
                    {crop}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Safety & Storage */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t("urea.modal.storage.safety")}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>{t("urea.modal.store.cool")}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>{t("urea.modal.keep.away")}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>{t("urea.modal.protective.equipment")}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>{t("urea.modal.follow.regulations")}</span>
                </li>
              </ul>
            </div>

            <div className="text-center pt-6 border-t">
              <p className="text-gray-600 mb-4">{t("urea.modal.interested")}</p>
              <Button className="bg-[#198c43] hover:bg-[#2d9d5a] text-white" onClick={() => {
                setShowUreaModal(false)
                setShowQuoteModal(true)
              }}>
                {t("common.getQuote")}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <QuoteModal 
        isOpen={showQuoteModal} 
        onClose={() => setShowQuoteModal(false)} 
        productName="Urea 46%" 
      />
    </>
  )
}
