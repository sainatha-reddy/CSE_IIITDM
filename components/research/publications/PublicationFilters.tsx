"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Filter, ChevronDown, X } from "lucide-react"

interface PublicationFiltersProps {
  years: number[]
  types: string[]
  selectedYear: number | null
  selectedType: string | null
  searchQuery: string
  onYearChange: (year: number | null) => void
  onTypeChange: (type: string | null) => void
  onSearchChange: (query: string) => void
  onResetFilters: () => void
}

export default function PublicationFilters({
  years,
  types,
  selectedYear,
  selectedType,
  searchQuery,
  onYearChange,
  onTypeChange,
  onSearchChange,
  onResetFilters,
}: PublicationFiltersProps) {
  const [showFilters, setShowFilters] = useState(false)

  const getPublicationTypeLabel = (type: string) => {
    switch (type) {
      case "journal":
        return "Journal Article"
      case "conference":
        return "Conference Paper"
      case "book":
        return "Book"
      case "chapter":
        return "Book Chapter"
      default:
        return "Publication"
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div className="relative w-full md:w-auto flex-grow">
          <input
            type="text"
            placeholder="Search publications..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-4 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {selectedYear && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
              Year: {selectedYear}
              <button onClick={() => onYearChange(null)} className="ml-2 text-blue-500 hover:text-blue-700">
                <X className="h-3 w-3" />
              </button>
            </div>
          )}

          {selectedType && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700">
              Type: {getPublicationTypeLabel(selectedType)}
              <button onClick={() => onTypeChange(null)} className="ml-2 text-green-500 hover:text-green-700">
                <X className="h-3 w-3" />
              </button>
            </div>
          )}

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <Filter className="h-4 w-4" />
            Filters
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Publication Year</label>
                <select
                  value={selectedYear || ""}
                  onChange={(e) => onYearChange(e.target.value ? Number.parseInt(e.target.value) : null)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Publication Type</label>
                <select
                  value={selectedType || ""}
                  onChange={(e) => onTypeChange(e.target.value || null)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Types</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {getPublicationTypeLabel(type)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button onClick={onResetFilters} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">
                Reset Filters
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

