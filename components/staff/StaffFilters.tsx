"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Grid3X3, List, Filter, ChevronDown, ChevronUp, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface StaffFiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedPosition: string
  setSelectedPosition: (position: string) => void
  viewMode: "grid" | "list"
  setViewMode: (mode: "grid" | "list") => void
  filteredCount: number
  totalCount: number
}

// Filter options
const positionFilters = [
  "All Positions",
  "Technical Officer",
  "Technical Superintendent",
  "Junior Technical Superintendent",
  "Junior Technician",
]

//const departmentFilters = ["All Departments", "Computer Science", "Electronics", "Mechanical", "Design"]

export default function StaffFilters({
  searchQuery,
  setSearchQuery,
  selectedPosition,
  setSelectedPosition,
  viewMode,
  setViewMode,
  filteredCount,
  totalCount,
}: StaffFiltersProps) {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
        {/* Search */}
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search staff by name, position..."
            className="pl-10 w-full border-gray-200 focus:border-[#003366] focus:ring-[#003366]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* View Toggle and Filter */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-end">
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md ${viewMode === "grid" ? "bg-white shadow-sm" : "text-gray-500"}`}
              aria-label="Grid view"
            >
              <Grid3X3 size={18} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md ${viewMode === "list" ? "bg-white shadow-sm" : "text-gray-500"}`}
              aria-label="List view"
            >
              <List size={18} />
            </button>
          </div>

          <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowFilters(!showFilters)}>
            <Filter size={18} />
            Filters
            {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>
        </div>
      </div>

      {/* Filters */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-gray-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Position Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                <div className="flex flex-wrap gap-2">
                  {positionFilters.map((position) => (
                    <Badge
                      key={position}
                      variant={selectedPosition === position ? "default" : "outline"}
                      className={`cursor-pointer ${
                        selectedPosition === position ? "bg-[#003366] hover:bg-[#00264d]" : "hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedPosition(position)}
                    >
                      {position}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Department Filter */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <div className="flex flex-wrap gap-2">
                  {departmentFilters.map((department) => (
                    <Badge
                      key={department}
                      variant={selectedDepartment === department ? "default" : "outline"}
                      className={`cursor-pointer ${
                        selectedDepartment === department ? "bg-[#003366] hover:bg-[#00264d]" : "hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedDepartment(department)}
                    >
                      {department}
                    </Badge>
                  ))}
                </div>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results count */}
      <div className="mt-4 text-sm text-gray-500">
        Showing {filteredCount} of {totalCount} staff members
      </div>
    </div>
  )
}

