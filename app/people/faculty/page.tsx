"use client"

import { useState, useEffect, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, User, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
// import { VisuallyHidden } from "@/components/ui/visually-hidden" 

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

// Interface for the faculty detail API response
interface FacultyDetailResponse {
  status: boolean;
  facinfo: FacultyInfo[];
}

interface FacultyInfo {
  email: string;
  name: string;
  nickname: string;
  image: string;
  desig: string;
  research_interest: string;
  personal_interest: string;
  dschoolName: string;
  dschoolPlace: string;
  dschoolBoard: string;
  mschoolName: string;
  mschoolPlace: string;
  mschoolBoard: string;
  bschoolName: string;
  bschoolPlace: string;
  bschoolBoard: string;
  workName1: string;
  workName2: string;
  workName3: string;
  schoolName: string;
  schoolBoard: string;
  schoolName1: string;
  pubCite3: string;
  pubCite4: string;
  InvitedTalks: string;
  // Add other fields as needed
  [key: string]: any;
}

// Fallback loading component
const LoadingFallback = () => (
  <div className="py-8 text-center">
    <div className="animate-spin w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
    <p className="text-gray-600">Loading content...</p>
  </div>
);

// Cache for faculty details to reduce API calls
const facultyDetailsCache = new Map<string, FacultyInfo>();

export default function FacultyPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedResearchArea, setSelectedResearchArea] = useState("all")
  const [selectedPosition, setSelectedPosition] = useState("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedFaculty, setSelectedFaculty] = useState<any>(null)
  const [detailedFacultyInfo, setDetailedFacultyInfo] = useState<FacultyInfo | null>(null)
  const [detailLoading, setDetailLoading] = useState(false)
  const [detailError, setDetailError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("grid")
  const [hoveredFaculty, setHoveredFaculty] = useState<number | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [retryCount, setRetryCount] = useState(0)

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

  // Function to handle faculty selection and fetch additional details
  const handleFacultySelect = async (faculty: any) => {
    setSelectedFaculty(faculty)
    setIsDialogOpen(true)
    setDetailLoading(true)
    setDetailError(null)
    setDetailedFacultyInfo(null)
    setRetryCount(0)
    
    await fetchFacultyDetails(faculty);
  }

  // Separated fetch function with retry logic and caching
  const fetchFacultyDetails = async (faculty: any) => {
    try {
      if (!faculty?.email) {
        throw new Error("Faculty email not available");
      }
      
      // Check cache first
      if (facultyDetailsCache.has(faculty.email)) {
        console.log("Using cached data for:", faculty.email);
        setDetailedFacultyInfo(facultyDetailsCache.get(faculty.email) || null);
        setDetailLoading(false);
        return;
      }
      
      try {
        // Use our local API endpoint instead of direct external API call
        const response = await fetch(
          `/api/faculty/${encodeURIComponent(faculty.email)}`,
          { 
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json',
            },
            // Set a reasonable timeout
            signal: AbortSignal.timeout(12000)
          }
        );
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || `Failed to fetch faculty details: ${response.status}`
          );
        }
        
        const data: FacultyDetailResponse = await response.json();
        
        if (!data.status || !data.facinfo || data.facinfo.length === 0) {
          throw new Error("No faculty details found");
        }
        
        // Cache the result
        facultyDetailsCache.set(faculty.email, data.facinfo[0]);
        setDetailedFacultyInfo(data.facinfo[0]);
      } catch (err) {
        // First attempt failed, try the backup API
        console.warn("Primary API fetch failed, trying backup:", err);
        
        try {
          const backupResponse = await fetch(
            `/api/faculty/backup/${encodeURIComponent(faculty.email)}`,
            { 
              cache: 'no-cache',
              headers: {
                'Content-Type': 'application/json',
              },
              signal: AbortSignal.timeout(5000)
            }
          );
          
          if (backupResponse.ok) {
            const backupData: FacultyDetailResponse = await backupResponse.json();
            
            if (backupData.status && backupData.facinfo && backupData.facinfo.length > 0) {
              // Cache and use the backup data
              facultyDetailsCache.set(faculty.email, backupData.facinfo[0]);
              setDetailedFacultyInfo(backupData.facinfo[0]);
              setDetailError("Using cached data. Couldn't connect to the faculty details server.");
              return;
            }
          }
          
          // If backup also fails, fall back to local data
          throw new Error("Backup data fetch failed");
        } catch (backupErr) {
          // Both API calls failed, use fallback data from faculty object
          console.warn("Both API fetch attempts failed, using local data:", backupErr);
          
          // Create fallback data from basic faculty info
          const fallbackInfo: FacultyInfo = {
            email: faculty.email,
            name: faculty.name,
            nickname: faculty.name,
            image: faculty.image,
            desig: faculty.position,
            research_interest: faculty.interests?.join(", ") || "",
            personal_interest: "",
            dschoolName: faculty.education?.phd?.institution || "",
            dschoolPlace: faculty.education?.phd?.location || "",
            dschoolBoard: faculty.education?.phd?.degree || "",
            mschoolName: faculty.education?.masters?.institution || "",
            mschoolPlace: faculty.education?.masters?.location || "",
            mschoolBoard: faculty.education?.masters?.degree || "",
            bschoolName: faculty.education?.bachelors?.institution || "",
            bschoolPlace: faculty.education?.bachelors?.location || "",
            bschoolBoard: faculty.education?.bachelors?.degree || "",
            workName1: faculty.experience?.[0]?.role || "",
            workName2: faculty.experience?.[1]?.role || "",
            workName3: "",
            schoolName: "",
            schoolBoard: "",
            schoolName1: faculty.teaching?.[0] || "",
            pubCite3: faculty.publications?.[0] || "",
            pubCite4: faculty.publications?.[1] || "",
            InvitedTalks: "",
          };
          
          // Cache the fallback data
          facultyDetailsCache.set(faculty.email, fallbackInfo);
          setDetailedFacultyInfo(fallbackInfo);
          
          // Set a warning rather than an error since we have fallback data
          setDetailError("Using local data. Couldn't connect to the faculty details server.");
        }
      }
    } catch (err) {
      console.error("Error handling faculty details:", err);
      setDetailError(err instanceof Error ? err.message : "Failed to load faculty details");
      
      // Only set null if we don't have fallback data
      if (!detailedFacultyInfo) {
        setDetailedFacultyInfo(null);
      }
    } finally {
      setDetailLoading(false);
    }
  };

  // Retry fetching details
  const handleRetry = () => {
    if (selectedFaculty) {
      setRetryCount(prev => prev + 1);
      setDetailLoading(true);
      setDetailError(null);
      fetchFacultyDetails(selectedFaculty);
    }
  };

  // Handle dialog close
  const handleDialogClose = () => {
    setIsDialogOpen(false)
    // Add a small delay before clearing the data to prevent UI flickering
    setTimeout(() => {
      setSelectedFaculty(null)
      setDetailedFacultyInfo(null)
      setDetailError(null)
    }, 200)
  }

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

  const dialogTitle = selectedFaculty ? `${selectedFaculty.name} - Faculty Profile` : "Faculty Profile";

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MainNav />
      <main className="pt-2">
        <NewsTicker />

        {/* Hero */}
        <Suspense fallback={<LoadingFallback />}>
          <FacultyHero />
        </Suspense>

        {/* Stats */}
        <Suspense fallback={<LoadingFallback />}>
          <FacultyStats stats={stats} />
        </Suspense>

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
                        <Suspense key={faculty.id} fallback={
                          <Card className="h-full animate-pulse">
                            <div className="p-6 flex justify-center">
                              <div className="w-32 h-32 rounded-full bg-gray-200"></div>
                            </div>
                            <div className="p-4">
                              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                              <div className="space-y-2">
                                <div className="h-4 bg-gray-200 rounded"></div>
                                <div className="h-4 bg-gray-200 rounded"></div>
                              </div>
                            </div>
                          </Card>
                        }>
                          <FacultyCard
                            faculty={faculty}
                            onSelect={handleFacultySelect}
                            isHovered={hoveredFaculty === faculty.id}
                            onHoverStart={() => setHoveredFaculty(faculty.id)}
                            onHoverEnd={() => setHoveredFaculty(null)}
                            gradient={getRandomGradient(faculty.id)}
                          />
                        </Suspense>
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
                        <Suspense key={faculty.id} fallback={
                          <Card className="w-full h-24 animate-pulse flex items-center p-4">
                            <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                            <div className="flex-1">
                              <div className="h-5 bg-gray-200 rounded w-1/3 mb-2"></div>
                              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                            </div>
                          </Card>
                        }>
                          <FacultyList faculty={faculty} onSelect={handleFacultySelect} />
                        </Suspense>
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
              <Suspense fallback={<LoadingFallback />}>
                <ResearchAreas
                  facultyData={facultyData}
                  selectedResearchArea={selectedResearchArea}
                  setSelectedResearchArea={setSelectedResearchArea}
                  setSelectedPosition={setSelectedPosition}
                  setSearchQuery={setSearchQuery}
                  contentInView={true} // Force true to ensure animation
                  getRandomGradient={getRandomGradient}
                />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Faculty Detail Modal with API data */}
        <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
          <DialogContent className="max-w-4xl bg-white">
            <DialogTitle className="sr-only">{dialogTitle}</DialogTitle>
            {detailLoading ? (
              <div className="py-8 text-center">
                <div className="animate-spin w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600">Loading faculty details...</p>
              </div>
            ) : (
              <Suspense fallback={<LoadingFallback />}>
                {detailError && (
                  <div className="mb-4 px-4 py-2 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm">{detailError}</p>
                    </div>
                    {retryCount < 3 && (
                      <Button 
                        variant="ghost"
                        size="sm"
                        onClick={handleRetry}
                        className="mt-2 text-yellow-800 hover:text-yellow-900"
                      >
                        Try again
                      </Button>
                    )}
                  </div>
                )}
                <FacultyDetail 
                  faculty={selectedFaculty} 
                  detailedInfo={detailedFacultyInfo} 
                />
              </Suspense>
            )}
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  )
}
