import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OCEA - Smart Aquaculture Monitoring",
  description:
    "Revolutionary aquaculture monitoring platform with real-time IoT sensors, AI-powered analytics, and intelligent alerts for optimal fish health and water quality management.",
  keywords: "aquaculture, fish farming, water quality monitoring, IoT sensors, smart farming",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
