"use client"

import { useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/research/phd-awards/HeroSection"
import GraduatesList from "@/components/research/phd-awards/GraduatesList"
import Statistics from "@/components/research/phd-awards/Statistics"

export default function PhDAwarded() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <GraduatesList />
        <Statistics />
      </main>
      <Footer />
    </div>
  )
}

