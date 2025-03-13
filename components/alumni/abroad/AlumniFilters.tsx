"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, Grid, List, ChevronDown, ChevronUp } from "lucide-react"
import { graduationYears, countries } from "./AlumniData"

interface AlumniFiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedYear: number | null
  setSelectedYear: (year: number | null) => void
  selectedCountry: string | null
  setSelectedCountry: (country: string | null) => void
  viewMode: "grid" | "list"
  setViewMode: (mode: "grid" | "list") => void
  totalAlumni: number
  filteredCount: number
}

export default function AlumniFilters({
  searchQuery,
  setSearchQuery,
  selectedYear,
  setSelectedYear,
  selectedCountry,
  setSelectedCountry,
  viewMode,
  setViewMode,
  totalAlumni,
  filteredCount,
}: AlumniFiltersProps) {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Search alumni by name or position..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {showFilters ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
            </button>

            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${viewMode === "grid" ? "bg-blue-50 text-blue-600" : "bg-white text-gray-500"}`}
                aria-label="Grid view"
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${viewMode === "list" ? "bg-blue-50 text-blue-600" : "bg-white text-gray-500"}`}
                aria-label="List view"
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter options */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-6"
            >
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedYear(null)}
                        className={`px-3 py-1 text-sm rounded-full ${
                          selectedYear === null
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        All
                      </button>
                      {graduationYears.map((year) => (
                        <button
                          key={year}
                          onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                          className={`px-3 py-1 text-sm rounded-full ${
                            selectedYear === year
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedCountry(null)}
                        className={`px-3 py-1 text-sm rounded-full ${
                          selectedCountry === null
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        All
                      </button>
                      {countries.map((country) => (
                        <button
                          key={country}
                          onClick={() => setSelectedCountry(selectedCountry === country ? null : country)}
                          className={`px-3 py-1 text-sm rounded-full ${
                            selectedCountry === country
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                          }`}
                        >
                          {country}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium">{filteredCount}</span> of{" "}
            <span className="font-medium">{totalAlumni}</span> alumni
          </p>
        </div>
      </div>
    </section>
  )
}

