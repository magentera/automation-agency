import { InfoBox } from "@/components/infobox"
import Hero from "@/components/sections/hero"

export default function Home() {
  return (<div>
    <Hero />
    <section className="bg-blue-100/20 p-10">
      <InfoBox />
    </section>
  </div>
  )
}

