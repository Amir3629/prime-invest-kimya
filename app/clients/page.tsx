import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClientsHero } from "@/components/clients-hero"
import { ClientsContent } from "@/components/clients-content"
import { ExportCountries } from "@/components/export-countries"

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <ClientsHero />
        <ClientsContent />
        <ExportCountries />
      </main>
      <Footer />
    </div>
  )
}
