"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { researchAreas, supervisors, years } from "./GraduatesData"

interface FiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  areaFilter: string | null
  setAreaFilter: (area: string | null) => void
  supervisorFilter: string | null
  setSupervisorFilter: (supervisor: string | null) => void
  yearFilter: number | null
  setYearFilter: (year: number | null) => void
}

export default function Filters({
  searchQuery,
  setSearchQuery,
  areaFilter,
  setAreaFilter,
  supervisorFilter,
  setSupervisorFilter,
  yearFilter,
  setYearFilter,
}: FiltersProps) {
  const [showFilters, setShowFilters] = useState(false)

  const resetFilters = () => {
    setAreaFilter(null)
    setSupervisorFilter(null)
    setYearFilter(null)
    setSearchQuery("")
  }

  const hasActiveFilters = areaFilter !== null || supervisorFilter !== null || yearFilter !== null || searchQuery !== ""

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">PhD Graduates</h2>

        <div className="flex flex-wrap gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search graduates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full md:w-64 bg-white/80 backdrop-blur-sm border-gray-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <Button
            variant={showFilters ? "default" : "outline"}
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 ${
              showFilters ? "bg-blue-600 text-white hover:bg-blue-700" : "border-gray-200 bg-white/80 backdrop-blur-sm"
            }`}
          >
            <Filter className="h-4 w-4" />
            Filters
            {hasActiveFilters && !showFilters && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-medium text-white">
                {(areaFilter ? 1 : 0) + (supervisorFilter ? 1 : 0) + (yearFilter ? 1 : 0) + (searchQuery ? 1 : 0)}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-4">
          {areaFilter && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Area: {areaFilter}
              <button onClick={() => setAreaFilter(null)} className="ml-1 text-blue-600 hover:text-blue-800">
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
          {supervisorFilter && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              Supervisor: {supervisorFilter}
              <button onClick={() => setSupervisorFilter(null)} className="ml-1 text-purple-600 hover:text-purple-800">
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
          {yearFilter && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Year: {yearFilter}
              <button onClick={() => setYearFilter(null)} className="ml-1 text-green-600 hover:text-green-800">
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
          {searchQuery && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Search: {searchQuery}
              <button onClick={() => setSearchQuery("")} className="ml-1 text-gray-600 hover:text-gray-800">
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-xs text-blue-600 hover:text-blue-800 underline underline-offset-2"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Research Area</label>
                  <select
                    value={areaFilter || ""}
                    onChange={(e) => setAreaFilter(e.target.value || null)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Research Areas</option>
                    {researchAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Supervisor</label>
                  <select
                    value={supervisorFilter || ""}
                    onChange={(e) => setSupervisorFilter(e.target.value || null)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Supervisors</option>
                    {supervisors.map((supervisor) => (
                      <option key={supervisor} value={supervisor}>
                        {supervisor}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                  <select
                    value={yearFilter || ""}
                    onChange={(e) => setYearFilter(e.target.value ? Number.parseInt(e.target.value) : null)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Years</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="text-sm text-gray-600 hover:text-gray-900 mr-2"
                >
                  Reset
                </Button>
                <Button onClick={() => setShowFilters(false)} className="bg-blue-600 text-white hover:bg-blue-700">
                  Apply Filters
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

