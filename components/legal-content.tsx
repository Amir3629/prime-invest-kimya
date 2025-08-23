"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FileText, Shield, Eye, Scale } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function LegalContent() {
  const { t } = useLanguage()
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)

  const legalDocuments = [
    {
      icon: FileText,
      title: t("legal.privacy.title"),
      description: t("legal.privacy.description"),
      content: t("legal.privacy.content"),
      id: "privacy",
    },
    {
      icon: Scale,
      title: t("legal.terms.title"),
      description: t("legal.terms.description"),
      content: t("legal.terms.content"),
      id: "terms",
    },
    {
      icon: Shield,
      title: t("legal.data.title"),
      description: t("legal.data.description"),
      content: t("legal.data.content"),
      id: "data",
    },
    {
      icon: Eye,
      title: t("legal.cookies.title"),
      description: t("legal.cookies.description"),
      content: t("legal.cookies.content"),
      id: "cookies",
    },
  ]

  const openDocument = (documentId: string) => {
    setSelectedDocument(documentId)
  }

  const closeDocument = () => {
    setSelectedDocument(null)
  }

  const selectedDoc = legalDocuments.find((doc) => doc.id === selectedDocument)

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#198c43] mb-6 text-shadow-green color-transition">
            {t("legal.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {legalDocuments.map((doc, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#198c43] to-[#2d9d5a] rounded-full flex items-center justify-center">
                      <doc.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{doc.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{doc.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none text-gray-600 mb-6">
                    <div dangerouslySetInnerHTML={{ __html: doc.content.substring(0, 200) + "..." }} />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full hover:bg-[#198c43] hover:text-white hover:border-[#198c43]"
                    onClick={() => openDocument(doc.id)}
                  >
                    {t("legal.readFull")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Company Information */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("legal.company.title")}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{t("legal.company.registration")}</h4>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Company Name:</strong> Raymand GmbH
                  </p>
                  <p>
                    <strong>Registration Number:</strong> DE 353201976
                  </p>
                  <p>
                    <strong>Tax Number:</strong> 220/117/03511
                  </p>
                  <p>
                    <strong>Established:</strong> 2018
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{t("legal.company.address")}</h4>
                <div className="text-gray-600">
                  <p>Carl-von-Noorden-Platz 14</p>
                  <p>60596 Frankfurt a. Main</p>
                  <p>Germany</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Document Modal */}
      <Dialog open={!!selectedDocument} onOpenChange={closeDocument}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center">
              {selectedDoc && (
                <>
                  <selectedDoc.icon className="h-6 w-6 mr-3 text-[#198c43]" />
                  {selectedDoc.title}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          {selectedDoc && (
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: selectedDoc.content }} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
