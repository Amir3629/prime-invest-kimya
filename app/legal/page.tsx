import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LegalHero } from "@/components/legal-hero"
import { LegalContent } from "@/components/legal-content"

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <LegalHero />
        <LegalContent />
      </main>
      <Footer />
    </div>
  )
}
