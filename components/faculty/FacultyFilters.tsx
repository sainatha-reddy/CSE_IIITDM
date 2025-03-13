"use client"

import type React from "react"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { researchAreas, positions } from "./FacultyData"

interface FacultyFiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedResearchArea: string
  setSelectedResearchArea: (area: string) => void
  selectedPosition: string
  setSelectedPosition: (position: string) => void
  resetFilters: () => void
}

const FacultyFilters: React.FC<FacultyFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  selectedResearchArea,
  setSelectedResearchArea,
  selectedPosition,
  setSelectedPosition,
  resetFilters,
}) => {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Search */}
          <div className="md:col-span-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, position, or research interest..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Research Area Filter */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Research Area</label>
            <select
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedResearchArea}
              onChange={(e) => setSelectedResearchArea(e.target.value)}
            >
              {researchAreas.map((area) => (
                <option key={area.value} value={area.value}>
                  {area.name}
                </option>
              ))}
            </select>
          </div>

          {/* Position Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
            <select
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
            >
              {positions.map((position) => (
                <option key={position.value} value={position.value}>
                  {position.name}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Filters */}
          <div className="flex items-end">
            <Button variant="outline" className="w-full" onClick={resetFilters}>
              <Filter className="w-4 h-4 mr-2" />
              Reset Filters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default FacultyFilters

