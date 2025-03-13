"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/alumni/abroad/HeroSection"
import AlumniStatistics from "@/components/alumni/abroad/AlumniStatistics"
import AlumniFilters from "@/components/alumni/abroad/AlumniFilters"
import AlumniGrid from "@/components/alumni/abroad/AlumniGrid"
import GlobalImpact from "@/components/alumni/abroad/GlobalImpact"
import { alumniData } from "@/components/alumni/abroad/AlumniData"
import MainNav from "@/components/MainNav"

export default function AlumniAbroad() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  // Filter alumni based on search query and filters
  const filteredAlumni = alumniData.filter((alumni) => {
    const matchesSearch =
      alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.currentPosition.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesYear = selectedYear ? alumni.graduationYear === selectedYear : true
    const matchesCountry = selectedCountry ? alumni.country === selectedCountry : true

    return matchesSearch && matchesYear && matchesCountry
  })

  // Reset to page 1 when filters change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* <Header /> */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Statistics Section */}
      <AlumniStatistics />

      {/* Search and Filter Section */}
      <AlumniFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        viewMode={viewMode}
        setViewMode={setViewMode}
        totalAlumni={alumniData.length}
        filteredCount={filteredAlumni.length}
      />

      {/* Alumni Grid/List View with Pagination */}
      <AlumniGrid filteredAlumni={filteredAlumni} viewMode={viewMode} itemsPerPage={12} />

      {/* Alumni Success Stories */}
      <GlobalImpact />

      {/* Footer */}
      <Footer />
    </div>
  )
}

