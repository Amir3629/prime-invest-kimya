import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutContent } from "@/components/about-content"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <AboutHero />
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}
