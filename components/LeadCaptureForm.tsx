"use client"

import type React from "react"

import { useState } from "react"

export function LeadCaptureForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your CRM or email automation platform
    console.log("Form submitted:", { name, email })
    // Reset form
    setName("")
    setEmail("")
    alert("Thank you for signing up! We'll be in touch soon.")
  }

  return (
    <section id="lead-form" className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Reserve Your Spot</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-bold py-3 px-4 rounded-lg hover:bg-blue-100 transition duration-300"
          >
            Sign Up for the Masterclass
          </button>
        </form>
      </div>
    </section>
  )
}

