import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { GoogleMap } from "@/components/google-map"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <ContactHero />
        <ContactForm />
        <GoogleMap />
      </main>
      <Footer />
    </div>
  )
}
