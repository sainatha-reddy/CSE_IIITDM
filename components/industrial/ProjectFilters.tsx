"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"

interface ProjectFiltersProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  searchTerm: string
  setSearchTerm: (term: string) => void
}

export default function ProjectFilters({ activeTab, setActiveTab, searchTerm, setSearchTerm }: ProjectFiltersProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">Our Consultancy Projects</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore our portfolio of industry collaborations and student-led innovations
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>

          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center gap-2 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 transition-all"
            >
              <Filter size={18} /> Filter
            </button>

            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg z-20 border border-gray-200 dark:border-gray-600">
                <div className="p-2">
                  <button
                    onClick={() => {
                      setActiveTab("all")
                      setIsFilterOpen(false)
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md ${
                      activeTab === "all"
                        ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    }`}
                  >
                    All Projects
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("faculty")
                      setIsFilterOpen(false)
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md ${
                      activeTab === "faculty"
                        ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    }`}
                  >
                    Faculty-Led
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("student")
                      setIsFilterOpen(false)
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md ${
                      activeTab === "student"
                        ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    }`}
                  >
                    Student Projects
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-2 hide-scrollbar">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeTab === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveTab("faculty")}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeTab === "faculty"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            Faculty-Led Projects
          </button>
          <button
            onClick={() => setActiveTab("student")}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeTab === "student"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            Student Projects
          </button>
        </div>
      </div>
    </div>
  )
}

