"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/alumni/india/HeroSection"
import AlumniFilters from "@/components/alumni/india/AlumniFilters"
import AlumniGrid from "@/components/alumni/india/AlumniGrid"
import AlumniDetail from "@/components/alumni/india/AlumniDetail"
import AlumniStatistics from "@/components/alumni/india/AlumniStatistics"
import CTASection from "@/components/alumni/india/CTASection"
import Pagination from "@/components/alumni/india/Pagination"
import {
  alumniData,
  getUniqueYears,
  getUniqueInstitutions,
  getUniqueDegrees,
  getAlumniStatistics,
} from "@/components/alumni/india/AlumniData"

export default function AlumniIndiaPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [selectedInstitution, setSelectedInstitution] = useState<string | null>(null)
  const [selectedDegree, setSelectedDegree] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedAlumni, setSelectedAlumni] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(12)

  // Get unique values for filters
  const years = getUniqueYears(alumniData)
  const institutions = getUniqueInstitutions(alumniData)
  const degrees = getUniqueDegrees(alumniData)

  // Get statistics
  const { totalAlumni, alumniByYear, alumniByInstitution, alumniByDegree } = getAlumniStatistics(alumniData)

  // Filter alumni based on search term and filters
  const filteredAlumni = alumniData.filter((alumni) => {
    const matchesSearch =
      alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.currentPosition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.institution.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesYear = selectedYear ? alumni.graduatingYear === selectedYear : true
    const matchesInstitution = selectedInstitution ? alumni.institution === selectedInstitution : true
    const matchesDegree = selectedDegree ? alumni.degree === selectedDegree : true

    return matchesSearch && matchesYear && matchesInstitution && matchesDegree
  })

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedYear, selectedInstitution, selectedDegree])

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    // Scroll to top of alumni section
    window.scrollTo({
      top: document.getElementById("alumni-section")?.offsetTop || 0,
      behavior: "smooth",
    })
  }

  // Reset all filters
  const resetFilters = () => {
    setSelectedYear(null)
    setSelectedInstitution(null)
    setSelectedDegree(null)
    setSearchTerm("")
    setCurrentPage(1)
  }

  // Get selected alumni details
  const selectedAlumniDetails = selectedAlumni
    ? alumniData.find((alumni) => alumni.id === selectedAlumni) || null
    : null

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />

      <main>
        <HeroSection />

        <AlumniFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedInstitution={selectedInstitution}
          setSelectedInstitution={setSelectedInstitution}
          selectedDegree={selectedDegree}
          setSelectedDegree={setSelectedDegree}
          viewMode={viewMode}
          setViewMode={setViewMode}
          resetFilters={resetFilters}
          years={years}
          institutions={institutions}
          degrees={degrees}
          filteredAlumni={filteredAlumni}
        />

        <section id="alumni-section" className="py-8 px-4">
          <AlumniGrid
            filteredAlumni={filteredAlumni}
            viewMode={viewMode}
            onViewProfile={setSelectedAlumni}
            resetFilters={resetFilters}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />

          <Pagination
            currentPage={currentPage}
            totalItems={filteredAlumni.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </section>

        <AlumniStatistics
          totalAlumni={totalAlumni}
          alumniByYear={alumniByYear}
          alumniByInstitution={alumniByInstitution}
          alumniByDegree={alumniByDegree}
        />

        <CTASection />

        <AnimatePresence>
          {selectedAlumni && <AlumniDetail alumni={selectedAlumniDetails} onClose={() => setSelectedAlumni(null)} />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

