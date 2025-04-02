import FaqSection from "@/components/faqSection"
import { InfoBox } from "@/components/infobox"
import Hero from "@/components/sections/hero"
import Services from "@/components/services"
import WhyChooseMe from "@/components/whyChooseMe"

export default function Home() {
  return (<div >
    <Hero />
    <section className="bg-blue-100/20 p-10">
      <InfoBox />
    </section>
    <section id="solutions" >
      <Services />
    </section>
    <section id="about">
      <WhyChooseMe />
    </section>
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <FaqSection />
    </section>
  </div>
  )
}

