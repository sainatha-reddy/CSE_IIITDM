"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/outreach/workshop/HeroSection"
import Statistics from "@/components/outreach/workshop/Statistics"
import TabsSection from "@/components/outreach/workshop/TabsSection"
import CallToAction from "@/components/outreach/workshop/CallToAction"

export default function WorkshopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />
      <div className="pt-24">
        <HeroSection />
        <Statistics />
        <TabsSection />
        <CallToAction />
      </div>
      <Footer />
    </div>
  )
}

