"use client"

import { useState } from "react"
import { Search, Filter, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { AlumniProfile } from "./AlumniData"

interface AlumniFiltersProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedYear: number | null
  setSelectedYear: (year: number | null) => void
  selectedInstitution: string | null
  setSelectedInstitution: (institution: string | null) => void
  selectedDegree: string | null
  setSelectedDegree: (degree: string | null) => void
  viewMode: "grid" | "list"
  setViewMode: (mode: "grid" | "list") => void
  resetFilters: () => void
  years: number[]
  institutions: string[]
  degrees: string[]
  filteredAlumni: AlumniProfile[]
}

export default function AlumniFilters({
  searchTerm,
  setSearchTerm,
  selectedYear,
  setSelectedYear,
  selectedInstitution,
  setSelectedInstitution,
  selectedDegree,
  setSelectedDegree,
  viewMode,
  setViewMode,
  resetFilters,
  years,
  institutions,
  degrees,
  filteredAlumni,
}: AlumniFiltersProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search alumni by name, position, or institution..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all"
              >
                <Filter size={18} />
                Filters
                {isFilterOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-2 ${viewMode === "grid" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-3 py-2 ${viewMode === "list" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-200">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Graduating Year</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={selectedYear || ""}
                      onChange={(e) => setSelectedYear(e.target.value ? Number(e.target.value) : null)}
                    >
                      <option value="">All Years</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Institution</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={selectedInstitution || ""}
                      onChange={(e) => setSelectedInstitution(e.target.value || null)}
                    >
                      <option value="">All Institutions</option>
                      {institutions.map((institution) => (
                        <option key={institution} value={institution}>
                          {institution}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Degree</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={selectedDegree || ""}
                      onChange={(e) => setSelectedDegree(e.target.value || null)}
                    >
                      <option value="">All Degrees</option>
                      {degrees.map((degree) => (
                        <option key={degree} value={degree}>
                          {degree}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={resetFilters}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredAlumni.length}</span> alumni
            {selectedYear && (
              <span>
                {" "}
                from <span className="font-semibold text-gray-900">{selectedYear}</span>
              </span>
            )}
            {selectedInstitution && (
              <span>
                {" "}
                at <span className="font-semibold text-gray-900">{selectedInstitution}</span>
              </span>
            )}
            {selectedDegree && (
              <span>
                {" "}
                pursuing <span className="font-semibold text-gray-900">{selectedDegree}</span>
              </span>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}

