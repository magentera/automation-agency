// components/HeroSection.jsx
import React from 'react'

export default function Hook() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-24">
      {/* Background Accent (e.g., gradient or swirl) */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-white"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading & Subtitle */}
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Scale Smarter, Innovate Faster
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600 sm:mt-5 sm:text-xl">
          Transform your workflows with <span className="font-bold">KONUKE</span>. 
          We harness AI to help you unlock efficiency and accelerate growth—on your terms.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow"
          >
            Get Started
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center px-6 py-3 border border-indigo-600 text-indigo-600 bg-white text-base font-medium rounded-md hover:bg-indigo-50 shadow"
          >
            Learn More
          </a>
        </div>

        {/* Value / Outcome Highlights */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
          <div className="bg-white p-6 shadow rounded-lg">
            <p className="text-2xl font-bold text-indigo-600">+20 Hours</p>
            <p className="mt-1 text-sm text-gray-500">
              Saved weekly <br />through automation
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <p className="text-2xl font-bold text-indigo-600">3x Growth</p>
            <p className="mt-1 text-sm text-gray-500">
              Revenue increase <br />for our clients
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <p className="text-2xl font-bold text-indigo-600">95%+ ROI</p>
            <p className="mt-1 text-sm text-gray-500">
              Return on <br />consulting investment
            </p>
          </div>
        </div>

        {/* Optional mini-testimonial */}
        <div className="mt-8 text-gray-500 max-w-xl mx-auto italic">
          “KONUKE helped our team automate key processes. We’re saving hours each day 
          and have more time to focus on creative work.”
        </div>
      </div>
    </section>
  )
}
