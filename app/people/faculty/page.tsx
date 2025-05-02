"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, User, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"

import NewsTicker from "@/components/NewsTicker"
import MainNav from "@/components/MainNav"
import Footer from "@/components/Footer"
import FacultyCard from "@/components/faculty/FacultyCard"
import FacultyList from "@/components/faculty/FacultyList"
import FacultyFilters from "@/components/faculty/FacultyFilters"
import FacultyPagination from "@/components/faculty/FacultyPagination"
import FacultyDetail from "@/components/faculty/FacultyDetail"
import FacultyStats from "@/components/faculty/FacultyStats"
import FacultyHero from "@/components/faculty/FacultyHero"
import ResearchAreas from "@/components/faculty/ResearchAreas"

import { facultyData, fetchFacultyData } from "@/components/faculty/FacultyData"

export default function FacultyPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedResearchArea, setSelectedResearchArea] = useState("all")
  const [selectedPosition, setSelectedPosition] = useState("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedFaculty, setSelectedFaculty] = useState(null)
  const [activeTab, setActiveTab] = useState("grid")
  const [hoveredFaculty, setHoveredFaculty] = useState<number | null>(null)

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // Data load
  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchFacultyData()
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load faculty data")
        setLoading(false)
      }
    }
    loadData()
  }, [])

  // Filter logic
  const filteredFaculty = facultyData.filter((faculty) => {
    if (selectedResearchArea !== "all") {
      const matchesArea = faculty.interests.some((interest: string) =>
        interest.toLowerCase().includes(selectedResearchArea.toLowerCase())
      )
      if (!matchesArea) return false
    }

    if (selectedPosition === "Professor") {
      const pos = faculty.position.toLowerCase()
      if (
        !pos.includes("professor") ||
        pos.includes("assistant") ||
        pos.includes("associate")
      ) {
        return false
      }
    } else if (selectedPosition !== "all") {
      if (!faculty.position.toLowerCase().includes(selectedPosition.toLowerCase())) {
        return false
      }
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        faculty.name.toLowerCase().includes(query) ||
        faculty.position.toLowerCase().includes(query) ||
        faculty.interests.some((interest: string) => interest.toLowerCase().includes(query))
      )
    }

    return true
  })

  const totalPages = Math.ceil(filteredFaculty.length / itemsPerPage)
  const currentFaculty = filteredFaculty.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Reset pagination on filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedPosition, selectedResearchArea])

  const stats = {
    total: facultyData.length,
    professors: facultyData.filter(
      (f) => f.position.includes("Professor") && !f.position.includes("Associate") && !f.position.includes("Assistant")
    ).length,
    associateProfessors: facultyData.filter((f) => f.position.includes("Associate")).length,
    assistantProfessors: facultyData.filter((f) => f.position.includes("Assistant")).length,
  }

  const getRandomGradient = (id: number): string => {
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

  const resetFilters = () => {
    setSelectedResearchArea("all")
    setSelectedPosition("all")
    setSearchQuery("")
  }

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">{error}</div>
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MainNav />
      <main className="pt-2">
        <NewsTicker />

        {/* Hero */}
        <FacultyHero />

        {/* Stats */}
        <FacultyStats stats={stats} />

        {/* Filters + Grid/List */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <FacultyFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedResearchArea={selectedResearchArea}
              setSelectedResearchArea={setSelectedResearchArea}
              selectedPosition={selectedPosition}
              setSelectedPosition={setSelectedPosition}
              resetFilters={resetFilters}
            />

            {/* Header with count and toggle */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-900 flex items-center">
                <User className="w-6 h-6 mr-2 text-blue-600" />
                Faculty Members
                <span className="ml-3 text-sm font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {filteredFaculty.length} members
                </span>
              </h2>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="grid">Grid View</TabsTrigger>
                  <TabsTrigger value="list">List View</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Grid/List display */}
            <AnimatePresence mode="wait">
              {activeTab === "grid" ? (
                <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {currentFaculty.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    </div>
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
                  {filteredFaculty.length > itemsPerPage && (
                    <FacultyPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                  )}
                </motion.div>
              ) : (
                <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {currentFaculty.length > 0 ? (
                    <div className="space-y-4">
                      {currentFaculty.map((faculty) => (
                        <FacultyList key={faculty.id} faculty={faculty} onSelect={setSelectedFaculty} />
                      ))}
                    </div>
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
                  {filteredFaculty.length > itemsPerPage && (
                    <FacultyPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
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
                contentInView={true} // Force true to ensure animation
                getRandomGradient={getRandomGradient}
              />
            </div>
          </div>
        </section>

        {/* Faculty Detail Modal */}
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
