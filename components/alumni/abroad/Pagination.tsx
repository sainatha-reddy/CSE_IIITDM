"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pageNumbers = []

  // Generate page numbers with ellipsis if many pages
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
  } else {
    if (currentPage <= 3) {
      pageNumbers.push(1, 2, 3, 4, "...", totalPages)
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
    } else {
      pageNumbers.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages)
    }
  }

  // Don't render pagination if only one page
  if (totalPages <= 1) return null

  return (
    <nav className="flex justify-center mt-8">
      <ul className="flex items-center space-x-1">
        <li>
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-10 h-10 rounded-md border ${
              currentPage === 1
                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                : "text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous Page</span>
          </button>
        </li>

        {pageNumbers.map((number, index) => (
          <li key={index}>
            {number === "..." ? (
              <span className="flex items-center justify-center w-10 h-10 text-gray-500">...</span>
            ) : (
              <button
                onClick={() => typeof number === "number" && onPageChange(number)}
                className={`flex items-center justify-center w-10 h-10 rounded-md border ${
                  currentPage === number
                    ? "bg-blue-600 text-white border-blue-600"
                    : "text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {number}
              </button>
            )}
          </li>
        ))}

        <li>
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-10 h-10 rounded-md border ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                : "text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next Page</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

