import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Rajdhani } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-display",
})

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "PARCOD - Digital Experience",
  description: "Crafting Digital Futures with cutting-edge technology and disruptive design",
  generator: "v0.app",
  icons: {
    icon: "/parcodeicon.png",
    apple: "/parcodeicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${orbitron.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
