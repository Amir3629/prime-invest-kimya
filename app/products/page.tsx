import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsHero } from "@/components/products-hero"
import { ProductsGrid } from "@/components/products-grid"
import { UreaSection } from "@/components/urea-section"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <ProductsHero />
        <ProductsGrid />
        <UreaSection />
      </main>
      <Footer />
    </div>
  )
}
