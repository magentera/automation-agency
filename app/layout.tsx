import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import { cookies } from "next/headers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Konuke - AI Workflows for the Enterprise",
  description:
    "Augment your workforce with AI workflows. Make your organization smarter.",
  generator: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isAuthenticated = cookies().get("authenticated")?.value === "true"
  return (
    <html lang="en">
      <body className={inter.className}>
        {isAuthenticated && <Header />}
        {children}
      </body>
    </html>
  )
}




