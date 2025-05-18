import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import { cookies } from "next/headers"
import { GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from "next"
import Footer from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Konuke – Workflow Optimisation & AI Automation',
  description:
    'Augment your workforce with AI workflows. Make your organization smarter.',
  alternates: { canonical: 'https://konuke.com/' },
  openGraph: {
    type: 'website',
    siteName: 'Konuke',
    url: 'https://konuke.com/',
    title: 'Konuke – Workflow Optimisation & AI Automation',
    description:
      'Augment your workforce with AI workflows. Make your organization smarter.',
    images: ['https://konuke.com/og/konuke.png'],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@connectKonuke',
    title: 'Konuke – Workflow Optimisation & AI Automation',
    description:
      'Augment your workforce with AI workflows. Make your organization smarter.',
    images: ['https://konuke.com/og/konuke-1200x630.png'],
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
      <head>
        {/* Meta Pixel Base Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '24020615924212842');
            fbq('track', 'PageView');`}
        </Script>
        {/* Optional noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=24020615924212842&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={inter.className}>
        {/* {isAuthenticated && <Header />} */}
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-765DPMG65T" />
    </html>
  )
}




