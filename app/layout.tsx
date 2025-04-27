import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import { cookies } from "next/headers"
import { GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Konuke – Workflow Optimisation & AI Automation',
  description:
    'Augment your workforce with AI workflows. Make your organization smarter.',
  alternates: { canonical: 'https://konuke.com/' },
  openGraph: {
    type:  'website',
    siteName: 'Konuke',
    url:   'https://konuke.com/',
    title: 'Konuke – Workflow Optimisation & AI Automation',
    description:
      'Lean, AI-powered workflows that slash enterprise ops costs by 38 %.',
    images: ['https://konuke.com/og/konuke.png'],
  },

  twitter: {
    card:        'summary_large_image',
    site:        '@connectKonuke',
    title:       'Augment your workforce with AI workflows. Make your organization smarter.',
    description:
      'LAugment your workforce with AI workflows. Make your organization smarter.',
    images: ['https://konuke.com/og/konuke.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const isAuthenticated = cookies().get("authenticated")?.value === "true"
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* {isAuthenticated && <Header />} */}
        <Header />
        {children}
      </body>
      <GoogleAnalytics gaId="G-765DPMG65T" />
    </html>
  )
}




