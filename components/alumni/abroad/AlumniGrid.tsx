"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import type { AlumniInterface } from "./AlumniData"
import AlumniCard from "./AlumniCard"
import AlumniDetail from "./AlumniDetail"
import Pagination from "./Pagination"

interface AlumniGridProps {
  filteredAlumni: AlumniInterface[]
  viewMode: "grid" | "list"
  itemsPerPage?: number
}

export default function AlumniGrid({ filteredAlumni, viewMode, itemsPerPage = 12 }: AlumniGridProps) {
  const [selectedAlumni, setSelectedAlumni] = useState<AlumniInterface | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const openAlumniDialog = (alumni: AlumniInterface) => {
    setSelectedAlumni(alumni)
    setIsDialogOpen(true)
  }

  const closeAlumniDialog = () => {
    setIsDialogOpen(false)
    setTimeout(() => setSelectedAlumni(null), 300)
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredAlumni.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, filteredAlumni.length)
  const currentAlumni = filteredAlumni.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of grid
    window.scrollTo({
      top: document.getElementById("alumni-grid")?.offsetTop || 0,
      behavior: "smooth",
    })
  }

  return (
    <div id="alumni-grid" className="container mx-auto px-4">
      {filteredAlumni.length > 0 ? (
        <>
          <div
            className={`${viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}`}
          >
            {currentAlumni.map((alumni, index) => (
              <AlumniCard
                key={alumni.id}
                alumni={alumni}
                index={index}
                viewMode={viewMode}
                onClick={() => openAlumniDialog(alumni)}
              />
            ))}
          </div>

          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Search className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No alumni found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      <AlumniDetail alumni={selectedAlumni} isOpen={isDialogOpen} onClose={closeAlumniDialog} />
    </div>
  )
}

