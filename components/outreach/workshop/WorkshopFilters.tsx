"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

interface WorkshopFiltersProps {
  onSearch: (term: string) => void
  onCategoryChange: (category: string) => void
  selectedCategory: string
}

export default function WorkshopFilters({ onSearch, onCategoryChange, selectedCategory }: WorkshopFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const categories = ["All", "Workshop", "Course", "Competition"]

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)
    onSearch(term)
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">Workshops Organized</h2>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search workshops..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
          />
        </div>
        <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

