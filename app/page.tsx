import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { ProductShowcase } from "@/components/product-showcase"
import { StatsSection } from "@/components/stats-section"
import { FAQSection } from "@/components/faq-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutPreview />
        <ProductShowcase />
        <StatsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
