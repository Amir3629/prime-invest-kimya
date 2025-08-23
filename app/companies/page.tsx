import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CompaniesHero } from "@/components/companies-hero"
import { CompaniesGrid } from "@/components/companies-grid"

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <CompaniesHero />
        <CompaniesGrid />
      </main>
      <Footer />
    </div>
  )
}
