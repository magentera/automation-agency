import { Hero } from "../components/Hero"
import { MasterclassDetails } from "../components/MasterclassDetails"
import { LeadCaptureForm } from "../components/LeadCaptureForm"
import { Testimonials } from "../components/Testimonials"
import { AboutHost } from "../components/AboutHost"
import { Footer } from "../components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <MasterclassDetails />
      <LeadCaptureForm />
      <Testimonials />
      <AboutHost />
      <Footer />
    </main>
  )
}

