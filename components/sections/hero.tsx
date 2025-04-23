import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"
import InteractiveScene from "@/components/interactivelogo"
import CTAProvider from "../cta"


export default function Hero() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>

            <CTAProvider hookType="text" ctaType={"redirect"} />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
              <span className="text-blue-500">Scale Smarter</span>
              <br />
              with AI & Automation-Driven Consulting

            </h1>

            <div className="space-y-3 mb-10 text-lg">
              <p>
                <span className="font-semibold">Empower your high-ticket business</span> to reduce inefficiencies, boost revenues, and stay ahead of the competition through custom automation and AI workflows.
              </p>
              <p>
                Make your organization <span className="font-semibold">smarter</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAProvider hookType="button" ctaType="redirect" />

              <div className="text-blue-500 font-medium flex items-center justify-center">
                Start for free <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>

          <div className=" overflow-hidden hidden lg:flex justify-center h-[500px] touch-none pointer-events-auto">
            <InteractiveScene />
            {/* <Image
              src="/konuke.png"
              alt="AI Network Visualization"
              width={250}
              height={250}
              className="w-full/2 max-w-md"
            /> */}
          </div>
        </div>
      </section>
    </div>
  )
}

