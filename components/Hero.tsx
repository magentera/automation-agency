'use client'

import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white">
      <Image
        src="/hero-background.jpg"
        alt="Real estate automation"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Automate Your Real Estate Business – Unlock Efficiency & Growth
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Learn how automation can streamline your workflows and boost results in our free masterclass
        </p>
        <button
          onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
        >
          Join the Masterclass Today
        </button>
      </div>
    </section>
  )
}

