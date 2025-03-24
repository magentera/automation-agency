import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-1 mb-6">
              <span className="bg-blue-500 text-white text-xs font-medium px-2 py-0.5 rounded-full mr-2">New</span>
              <span className="text-gray-700 text-sm">Chat with our AI Onboarding Agent </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
              <span className="text-blue-500">AI Powered</span>
              <br />
              for your Enterprise
            </h1>

            <div className="space-y-3 mb-10 text-lg">
              <p>
                <span className="font-semibold">Augment</span> your operations with{" "}
                <span className="font-semibold">automated systems</span>.
              </p>
              <p>
                <span className="font-semibold">Outsource</span> back office processes to{" "}
                <span className="font-semibold">smart workflows</span>.
              </p>
              <p>
                Make your organization <span className="font-semibold">smarter</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium text-center transition-colors"
              >
                Get a Demo
              </Link>
              <Link href="#" className="text-blue-500 hover:text-blue-600 font-medium flex items-center justify-center">
                Start for free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/konuke.png"
              alt="AI Network Visualization"
              width={250}
              height={250}
              className="w-full/2 max-w-md"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

