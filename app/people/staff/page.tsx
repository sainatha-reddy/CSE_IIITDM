"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Building2 } from "lucide-react"
import MainNav from "@/components/MainNav"
import Footer from "@/components/Footer"
import StaffCard from "@/components/staff/StaffCard"
import StaffList from "@/components/staff/StaffList"
import StaffFilters from "@/components/staff/StaffFilters"
import StaffDetail from "@/components/staff/StaffDetail"
import StaffStats from "@/components/staff/StaffStats"
import StaffPagination from "@/components/staff/StaffPagination"
import { staffData, type StaffMember } from "@/components/staff/StaffData"
import Link from "next/link"
import Image from "next/image"

export default function StaffPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPosition, setSelectedPosition] = useState("All Positions")
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Filter staff based on search query and filters
  const filteredStaff = staffData.filter((staff) => {
    const matchesSearch =
      staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.department.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesPosition = selectedPosition === "All Positions" || staff.position === selectedPosition
    const matchesDepartment = selectedDepartment === "All Departments" || staff.department === selectedDepartment

    return matchesSearch && matchesPosition && matchesDepartment
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredStaff.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedStaff = filteredStaff.slice(startIndex, startIndex + itemsPerPage)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedPosition, selectedDepartment])

  // Handle staff selection and dialog
  const handleStaffClick = (staff: StaffMember) => {
    setSelectedStaff(staff)
    setIsDialogOpen(true)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/placeholder.svg?height=50&width=50" alt="IIITDM Kancheepuram Logo" width={50} height={50} />
              <div>
                <span className="font-bold text-xl text-[#003366] block">IIITDM Kancheepuram</span>
                <span className="text-sm text-gray-600">Department of Computer Science & Engineering</span>
              </div>
            </Link>
            <MainNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#003366] to-[#0066cc]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Technical Staff</h1>
            <p className="text-xl text-blue-100 mb-8">
              Meet the dedicated technical team that supports the academic and research activities at IIITDM
              Kancheepuram.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3 border border-white/20"
              >
                <Users className="h-5 w-5 text-white" />
                <span className="text-white font-medium">{staffData.length} Technical Staff Members</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3 border border-white/20"
              >
                <Building2 className="h-5 w-5 text-white" />
                <span className="text-white font-medium">4 Departments</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <StaffStats />
        </div>
      </section>

      {/* Staff Listing Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <StaffFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedPosition={selectedPosition}
            setSelectedPosition={setSelectedPosition}
            selectedDepartment={selectedDepartment}
            setSelectedDepartment={setSelectedDepartment}
            viewMode={viewMode}
            setViewMode={setViewMode}
            filteredCount={filteredStaff.length}
            totalCount={staffData.length}
          />

          {isLoading ? (
            // Loading skeleton
            <div
              className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-6`}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-gray-200 h-16 w-16"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredStaff.length === 0 ? (
            // No results
            <div className="text-center py-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto"
              >
                <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No staff members found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedPosition("All Positions")
                    setSelectedDepartment("All Departments")
                  }}
                  className="px-4 py-2 bg-[#003366] text-white rounded-md hover:bg-[#00264d] transition-colors"
                >
                  Reset Filters
                </button>
              </motion.div>
            </div>
          ) : viewMode === "grid" ? (
            // Grid View
            <>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {paginatedStaff.map((staff) => (
                  <StaffCard key={staff.id} staff={staff} onClick={handleStaffClick} />
                ))}
              </motion.div>

              {totalPages > 1 && (
                <StaffPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              )}
            </>
          ) : (
            // List View
            <>
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
                {paginatedStaff.map((staff) => (
                  <StaffList key={staff.id} staff={staff} onClick={handleStaffClick} />
                ))}
              </motion.div>

              {totalPages > 1 && (
                <StaffPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              )}
            </>
          )}
        </div>
      </section>

      {/* Staff Detail Dialog */}
      <AnimatePresence>
        {isDialogOpen && (
          <StaffDetail staff={selectedStaff} isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  )
}

