"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { AboutPage } from "@/pages/about"
import { FeaturesPage } from "@/pages/features"
import { PricingPage } from "@/pages/pricing"
import { ContactPage } from "@/pages/contact"
import { useTranslation, type Language } from "@/lib/i18n"
import { AlertTriangle, Activity, Droplets, Thermometer, Waves, Loader2 } from "lucide-react"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Page() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [language, setLanguage] = useState<Language>("en")
  const { t } = useTranslation(language)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentPage("dashboard")
  }

  const handlePageChange = (page: string) => {
    if (page === "login") {
      setIsLoggedIn(false)
    }
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutPage />
      case "features":
        return <FeaturesPage />
      case "pricing":
        return <PricingPage />
      case "contact":
        return <ContactPage />
      default:
        return (
          <>
            <Hero />
            <Features />
            <CTA />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      {isLoggedIn ? (
        renderPage()
      ) : (
        null
      )}
      <Footer />
    </div>
  )
}
