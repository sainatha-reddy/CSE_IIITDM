"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface StaffPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function StaffPagination({ currentPage, totalPages, onPageChange }: StaffPaginationProps) {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is less than max to show
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)

      // Calculate start and end of middle pages
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if we're at the beginning
      if (currentPage <= 2) {
        end = 4
      }

      // Adjust if we're at the end
      if (currentPage >= totalPages - 1) {
        start = totalPages - 3
      }

      // Add ellipsis after first page if needed
      if (start > 2) {
        pages.push("...")
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        pages.push("...")
      }

      // Always show last page
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex justify-center mt-8 mb-12">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed h-9 w-9 border-gray-200 text-gray-500 hover:text-[#003366] hover:border-[#003366]/30"
          aria-label="Previous page"
        >
          <ChevronLeft size={16} className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </button>

        {pageNumbers.map((page, index) =>
          page === "..." ? (
            <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-400">
              ...
            </span>
          ) : (
            <button
              key={`page-${page}`}
              onClick={() => onPageChange(Number(page))}
              className={`w-10 h-10 rounded-md flex items-center justify-center ${
                currentPage === page
                  ? "bg-[#003366] text-white"
                  : "border border-gray-200 text-gray-700 hover:bg-gray-50"
              } h-9 w-9 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
                currentPage === page ? "bg-[#003366] text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          ),
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed h-9 w-9 border-gray-200 text-gray-500 hover:text-[#003366] hover:border-[#003366]/30"
          aria-label="Next page"
        >
          <ChevronRight size={16} className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </button>
      </div>
    </div>
  )
}

