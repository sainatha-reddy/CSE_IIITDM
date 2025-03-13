"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users } from "lucide-react"
import { phdGraduates, type PhDGraduate } from "./GraduatesData"
import GraduateCard from "./GraduateCard"
import GraduateDetail from "./GraduateDetail"
import Pagination from "./Pagination"
import Filters from "./Filters"

export default function GraduatesList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [areaFilter, setAreaFilter] = useState<string | null>(null)
  const [supervisorFilter, setSupervisorFilter] = useState<string | null>(null)
  const [yearFilter, setYearFilter] = useState<number | null>(null)
  const [selectedGraduate, setSelectedGraduate] = useState<PhDGraduate | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const graduatesPerPage = 9

  // Filter graduates based on search and filters
  const filteredGraduates = phdGraduates.filter((graduate) => {
    const matchesSearch =
      searchQuery === "" ||
      graduate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      graduate.supervisor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      graduate.researchArea.toLowerCase().includes(searchQuery.toLowerCase()) ||
      graduate.currentPosition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      graduate.currentAffiliation.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesArea = areaFilter === null || graduate.researchArea.includes(areaFilter)
    const matchesSupervisor = supervisorFilter === null || graduate.supervisor === supervisorFilter
    const matchesYear = yearFilter === null || graduate.year === yearFilter

    return matchesSearch && matchesArea && matchesSupervisor && matchesYear
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredGraduates.length / graduatesPerPage)
  const indexOfLastGraduate = currentPage * graduatesPerPage
  const indexOfFirstGraduate = indexOfLastGraduate - graduatesPerPage
  const currentGraduates = filteredGraduates.slice(indexOfFirstGraduate, indexOfLastGraduate)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, areaFilter, supervisorFilter, yearFilter])

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    // Scroll to top of graduates list
    window.scrollTo({
      top: document.getElementById("graduates-list")?.offsetTop || 0,
      behavior: "smooth",
    })
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="graduates-list">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Filters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            areaFilter={areaFilter}
            setAreaFilter={setAreaFilter}
            supervisorFilter={supervisorFilter}
            setSupervisorFilter={setSupervisorFilter}
            yearFilter={yearFilter}
            setYearFilter={setYearFilter}
          />

          {/* Graduates Grid */}
          {filteredGraduates.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm">
              <Users className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-medium text-gray-700 mb-2">No graduates found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Try adjusting your search or filters to find more results.
              </p>
            </div>
          ) : (
            <>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {currentGraduates.map((graduate) => (
                  <GraduateCard key={graduate.id} graduate={graduate} onClick={() => setSelectedGraduate(graduate)} />
                ))}
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
              )}

              {/* Results count */}
              <div className="text-center mt-6 text-sm text-gray-500">
                Showing {indexOfFirstGraduate + 1}-{Math.min(indexOfLastGraduate, filteredGraduates.length)} of{" "}
                {filteredGraduates.length} graduates
              </div>
            </>
          )}
        </div>
      </div>

      {/* Graduate Detail Modal */}
      <AnimatePresence>
        {selectedGraduate && <GraduateDetail graduate={selectedGraduate} onClose={() => setSelectedGraduate(null)} />}
      </AnimatePresence>
    </section>
  )
}

