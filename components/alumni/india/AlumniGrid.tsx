"use client"

import { Search } from "lucide-react"
import type { AlumniProfile } from "./AlumniData"
import AlumniCard from "./AlumniCard"

interface AlumniGridProps {
  filteredAlumni: AlumniProfile[]
  viewMode: "grid" | "list"
  onViewProfile: (id: number) => void
  resetFilters: () => void
  currentPage: number
  itemsPerPage: number
}

export default function AlumniGrid({
  filteredAlumni,
  viewMode,
  onViewProfile,
  resetFilters,
  currentPage,
  itemsPerPage,
}: AlumniGridProps) {
  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredAlumni.slice(indexOfFirstItem, indexOfLastItem)

  if (filteredAlumni.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-blue-50 inline-block p-4 rounded-full mb-4">
          <Search className="h-8 w-8 text-blue-500" />
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">No alumni found</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          We couldn't find any alumni matching your search criteria. Try adjusting your filters or search term.
        </p>
        <button
          onClick={resetFilters}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Reset Filters
        </button>
      </div>
    )
  }

  return (
    <div className="container mx-auto">
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentItems.map((alumni, index) => (
            <AlumniCard
              key={alumni.id}
              alumni={alumni}
              index={index}
              viewMode={viewMode}
              onViewProfile={onViewProfile}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {currentItems.map((alumni, index) => (
            <AlumniCard
              key={alumni.id}
              alumni={alumni}
              index={index}
              viewMode={viewMode}
              onViewProfile={onViewProfile}
            />
          ))}
        </div>
      )}
    </div>
  )
}

