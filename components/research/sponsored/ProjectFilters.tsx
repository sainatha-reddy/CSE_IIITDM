"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { getUniqueSponsors, getUniqueInvestigators } from "./ProjectsData"

interface ProjectFiltersProps {
  activeFilter: "all" | "ongoing" | "completed"
  setActiveFilter: (filter: "all" | "ongoing" | "completed") => void
  selectedSponsor: string
  setSelectedSponsor: (sponsor: string) => void
  selectedInvestigator: string
  setSelectedInvestigator: (investigator: string) => void
}

export default function ProjectFilters({
  activeFilter,
  setActiveFilter,
  selectedSponsor,
  setSelectedSponsor,
  selectedInvestigator,
  setSelectedInvestigator,
}: ProjectFiltersProps) {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)

  const sponsors = getUniqueSponsors()
  const investigators = getUniqueInvestigators()

  return (
    <motion.div
      className="mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeFilter === "all" ? "bg-white shadow-sm text-blue-700" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter("ongoing")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeFilter === "ongoing" ? "bg-white shadow-sm text-blue-700" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Ongoing
            </button>
            <button
              onClick={() => setActiveFilter("completed")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeFilter === "completed" ? "bg-white shadow-sm text-blue-700" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Completed
            </button>
          </div>

          <button
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors flex items-center"
          >
            {showAdvancedFilters ? "Hide Advanced Filters" : "Show Advanced Filters"}
            <svg
              className={`ml-1 h-4 w-4 transition-transform ${showAdvancedFilters ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Advanced Filters */}
        {showAdvancedFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 p-4 rounded-lg mb-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sponsor Filter */}
              <div>
                <label htmlFor="sponsor-filter" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Sponsor
                </label>
                <select
                  id="sponsor-filter"
                  value={selectedSponsor}
                  onChange={(e) => setSelectedSponsor(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Sponsors</option>
                  {sponsors.map((sponsor) => (
                    <option key={sponsor} value={sponsor}>
                      {sponsor}
                    </option>
                  ))}
                </select>
              </div>

              {/* Investigator Filter */}
              <div>
                <label htmlFor="investigator-filter" className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Investigator
                </label>
                <select
                  id="investigator-filter"
                  value={selectedInvestigator}
                  onChange={(e) => setSelectedInvestigator(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Investigators</option>
                  {investigators.map((investigator) => (
                    <option key={investigator} value={investigator}>
                      {investigator}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Reset Filters */}
            {(selectedSponsor || selectedInvestigator) && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedSponsor("")
                    setSelectedInvestigator("")
                  }}
                  className="text-sm text-red-600 hover:text-red-800 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* Active Filters */}
        {(selectedSponsor || selectedInvestigator) && (
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-sm text-gray-500">Active filters:</span>
            {selectedSponsor && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Sponsor: {selectedSponsor}
                <button
                  onClick={() => setSelectedSponsor("")}
                  className="ml-1 inline-flex items-center justify-center h-4 w-4 rounded-full bg-blue-200 hover:bg-blue-300 transition-colors"
                >
                  <span className="sr-only">Remove filter</span>
                  <svg className="h-2 w-2 text-blue-600" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                    <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                  </svg>
                </button>
              </span>
            )}
            {selectedInvestigator && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                Investigator: {selectedInvestigator}
                <button
                  onClick={() => setSelectedInvestigator("")}
                  className="ml-1 inline-flex items-center justify-center h-4 w-4 rounded-full bg-purple-200 hover:bg-purple-300 transition-colors"
                >
                  <span className="sr-only">Remove filter</span>
                  <svg className="h-2 w-2 text-purple-600" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                    <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                  </svg>
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

