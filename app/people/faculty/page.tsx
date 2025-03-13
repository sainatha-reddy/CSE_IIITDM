"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Search, User, BookOpen } from "lucide-react"
import NewsTicker from "@/components/NewsTicker"
import MainNav from "@/components/MainNav"
import Footer from "@/components/Footer"
import FacultyCard from "@/components/faculty/FacultyCard"
import FacultyList from "@/components/faculty/FacultyList"
import FacultyFilters from "@/components/faculty/FacultyFilters"
import ResearchAreas from "@/components/faculty/ResearchAreas"
import FacultyStats from "@/components/faculty/FacultyStats"
import FacultyPagination from "@/components/faculty/FacultyPagination"
import FacultyDetail from "@/components/faculty/FacultyDetail"
import { facultyData } from "@/components/faculty/FacultyData"

export default function FacultyPage() {
  // State for filters and search
  const [selectedResearchArea, setSelectedResearchArea] = useState("all")
  const [selectedPosition, setSelectedPosition] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFaculty, setSelectedFaculty] = useState(null)
  const [activeTab, setActiveTab] = useState("grid")
  const [hoveredFaculty, setHoveredFaculty] = useState(null)

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // Refs for scroll animations
  const heroRef = useRef(null)
  const contentRef = useRef(null)

  // Check if sections are in view
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const contentInView = useInView(contentRef, { once: true, amount: 0.1 })

  // Filter faculty based on selected filters and search query
  const filteredFaculty = facultyData.filter((faculty) => {
    // Filter by research area
    if (selectedResearchArea !== "all") {
      const matchesResearchArea = faculty.interests.some(
        (interest) =>
          interest.toLowerCase().includes(selectedResearchArea.toLowerCase()) ||
          selectedResearchArea.toLowerCase().includes(interest.toLowerCase()),
      )
      if (!matchesResearchArea) return false
    }

    // Filter by position
    if (selectedPosition !== "all" && !faculty.position.includes(selectedPosition)) {
      return false
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        faculty.name.toLowerCase().includes(query) ||
        faculty.position.toLowerCase().includes(query) ||
        faculty.interests.some((interest) => interest.toLowerCase().includes(query))
      )
    }

    return true
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredFaculty.length / itemsPerPage)
  const currentFaculty = filteredFaculty.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedResearchArea, selectedPosition, searchQuery])

  // Stats for faculty
  const stats = {
    total: facultyData.length,
    professors: facultyData.filter(
      (f) => f.position.includes("Professor") && !f.position.includes("Associate") && !f.position.includes("Assistant"),
    ).length,
    associateProfessors: facultyData.filter((f) => f.position.includes("Associate")).length,
    assistantProfessors: facultyData.filter((f) => f.position.includes("Assistant")).length,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Function to get random color gradient for faculty cards
  const getRandomGradient = (id) => {
    const gradients = [
      "from-blue-500 to-blue-600",
      "from-indigo-500 to-indigo-600",
      "from-purple-500 to-purple-600",
      "from-cyan-500 to-cyan-600",
      "from-teal-500 to-teal-600",
      "from-green-500 to-green-600",
      "from-amber-500 to-amber-600",
      "from-rose-500 to-rose-600",
    ]
    return gradients[id % gradients.length]
  }

  // Reset filters function
  const resetFilters = () => {
    setSelectedResearchArea("all")
    setSelectedPosition("all")
    setSearchQuery("")
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MainNav />
      <main className="pt-2">
        <NewsTicker />

        {/* Hero Section */}
        <section ref={heroRef} className="relative py-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full opacity-20 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-100 rounded-full opacity-20 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Our Faculty
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Meet our distinguished faculty members who are leading experts in their fields, dedicated to excellence
                in teaching, research, and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Faculty Stats Section */}
        <FacultyStats stats={stats} />

        {/* Main Content Section */}
        <section ref={contentRef} className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Search and Filters */}
              <FacultyFilters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedResearchArea={selectedResearchArea}
                setSelectedResearchArea={setSelectedResearchArea}
                selectedPosition={selectedPosition}
                setSelectedPosition={setSelectedPosition}
                resetFilters={resetFilters}
              />

              {/* View Toggle */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-blue-900 flex items-center">
                  <User className="w-6 h-6 mr-2 text-blue-600" />
                  Faculty Members
                  <span className="ml-3 text-sm font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {filteredFaculty.length} members
                  </span>
                </h2>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
                  <TabsList>
                    <TabsTrigger value="grid">Grid View</TabsTrigger>
                    <TabsTrigger value="list">List View</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Faculty Grid/List */}
              <AnimatePresence mode="wait">
                {activeTab === "grid" ? (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentFaculty.length > 0 ? (
                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {currentFaculty.map((faculty) => (
                          <FacultyCard
                            key={faculty.id}
                            faculty={faculty}
                            onSelect={setSelectedFaculty}
                            isHovered={hoveredFaculty === faculty.id}
                            onHoverStart={() => setHoveredFaculty(faculty.id)}
                            onHoverEnd={() => setHoveredFaculty(null)}
                            gradient={getRandomGradient(faculty.id)}
                          />
                        ))}
                      </motion.div>
                    ) : (
                      <Card className="bg-gray-50 border border-dashed border-gray-300">
                        <CardContent className="p-12 text-center">
                          <div className="mx-auto w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                            <Search className="w-8 h-8 text-gray-400" />
                          </div>
                          <h3 className="text-xl font-medium text-gray-900 mb-2">No faculty members found</h3>
                          <p className="text-gray-500 mb-6">
                            No faculty members match your current filters. Try adjusting your search criteria.
                          </p>
                          <Button variant="outline" onClick={resetFilters}>
                            Reset Filters
                          </Button>
                        </CardContent>
                      </Card>
                    )}

                    {/* Pagination for Grid View */}
                    {filteredFaculty.length > itemsPerPage && (
                      <FacultyPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                      />
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentFaculty.length > 0 ? (
                      <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
                        {currentFaculty.map((faculty) => (
                          <FacultyList key={faculty.id} faculty={faculty} onSelect={setSelectedFaculty} />
                        ))}
                      </motion.div>
                    ) : (
                      <Card className="bg-gray-50 border border-dashed border-gray-300">
                        <CardContent className="p-12 text-center">
                          <div className="mx-auto w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                            <Search className="w-8 h-8 text-gray-400" />
                          </div>
                          <h3 className="text-xl font-medium text-gray-900 mb-2">No faculty members found</h3>
                          <p className="text-gray-500 mb-6">
                            No faculty members match your current filters. Try adjusting your search criteria.
                          </p>
                          <Button variant="outline" onClick={resetFilters}>
                            Reset Filters
                          </Button>
                        </CardContent>
                      </Card>
                    )}

                    {/* Pagination for List View */}
                    {filteredFaculty.length > itemsPerPage && (
                      <FacultyPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                      />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Research Areas Section */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                  Research Areas
                </h2>
                <ResearchAreas
                  facultyData={facultyData}
                  selectedResearchArea={selectedResearchArea}
                  setSelectedResearchArea={setSelectedResearchArea}
                  setSelectedPosition={setSelectedPosition}
                  setSearchQuery={setSearchQuery}
                  contentInView={contentInView}
                  getRandomGradient={getRandomGradient}
                />
              </div>

              {/* Call to Action */}
              <Card className="mt-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0">
                      <h3 className="text-2xl font-bold mb-2">Interested in joining our faculty?</h3>
                      <p className="text-blue-100 max-w-xl">
                        We're always looking for talented researchers and educators to join our team. Check out our
                        current openings or contact us to learn more.
                      </p>
                    </div>
                    <div className="flex space-x-4">
                      <Button className="bg-white text-blue-600 hover:bg-blue-50">Current Openings</Button>
                      <Button variant="outline" className="border-white text-white hover:bg-white/10">
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Faculty Detail Dialog */}
        <Dialog open={!!selectedFaculty} onOpenChange={() => setSelectedFaculty(null)}>
          <DialogContent className="max-w-4xl bg-white">
            <FacultyDetail faculty={selectedFaculty} />
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  )
}

