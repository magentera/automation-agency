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
  </div>
  )
}

