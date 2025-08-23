"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle, Mail, FileText, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  type: "contact" | "quote" | "newsletter"
}

export function ConfirmationModal({ isOpen, onClose, type }: ConfirmationModalProps) {
  const { t } = useLanguage()

  const getIcon = () => {
    switch (type) {
      case "contact":
        return <Mail className="h-16 w-16 text-green-500 mx-auto mb-4" />
      case "quote":
        return <FileText className="h-16 w-16 text-blue-500 mx-auto mb-4" />
      case "newsletter":
        return <Users className="h-16 w-16 text-[#198c43] mx-auto mb-4" />
      default:
        return <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
    }
  }

  const getTitle = () => {
    switch (type) {
      case "contact":
        return t("confirmation.contact.title")
      case "quote":
        return t("confirmation.quote.title")
      case "newsletter":
        return t("confirmation.newsletter.title")
      default:
        return t("common.success") + "!"
    }
  }

  const getMessage = () => {
    switch (type) {
      case "contact":
        return t("confirmation.contact.message")
      case "quote":
        return t("confirmation.quote.message")
      case "newsletter":
        return t("confirmation.newsletter.message")
      default:
        return "Operation completed successfully!"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="text-center py-8">
          {getIcon()}
          <h3 className="text-xl font-bold text-gray-900 mb-4">{getTitle()}</h3>
          <p className="text-gray-600 mb-6">{getMessage()}</p>
          <Button onClick={onClose} className="bg-[#198c43] hover:bg-[#2d9d5a] text-white px-8">
            {t("common.ok")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
