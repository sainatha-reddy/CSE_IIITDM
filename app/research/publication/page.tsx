"use client"

import { useState, useEffect, Suspense } from "react"
import { AnimatePresence } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/research/publications/HeroSection"
import FacultySelector from "@/components/research/publications/FacultySelector"
import PublicationFilters from "@/components/research/publications/PublicationFilters"
import PublicationsList from "@/components/research/publications/PublicationsList"
import PublicationDetail from "@/components/research/publications/PublicationDetail"
import Pagination from "@/components/research/publications/Pagination"
import Statistics from "@/components/research/publications/Statistics"
import { AlertCircle, Loader2 } from "lucide-react"
import FacultyImage from "@/components/faculty/FacultyImage"

// Type definitions
interface Publication {
  id: number
  title: string
  authors: string
  venue: string
  year: number
  type: string
  doi: string
  citations: number
  abstract: string
  keywords: string[]
}

interface FacultyMember {
  id: number
  name: string
  title: string
  area: string
  image: string
  publications: Publication[]
}

// Fallback component for when data is loading
const LoadingState = () => (
  <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center space-y-4">
    <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
    <p className="text-gray-600">Loading faculty data...</p>
  </div>
)

// Error component for when data fetching fails
const ErrorState = ({ message }: { message: string }) => (
  <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center space-y-4">
    <AlertCircle className="h-12 w-12 text-red-500" />
    <h3 className="text-xl font-medium text-gray-700">Failed to load data</h3>
    <p className="text-gray-600">{message}</p>
    <button 
      onClick={() => window.location.reload()}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    >
      Try Again
    </button>
  </div>
)

export default function PublicationsPage() {
  // State for faculty data
  const [facultyData, setFacultyData] = useState<FacultyMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // UI state
  const [selectedFaculty, setSelectedFaculty] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [yearFilter, setYearFilter] = useState<number | null>(null)
  const [typeFilter, setTypeFilter] = useState<string | null>(null)
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Fetch faculty data
  useEffect(() => {
    const fetchFacultyData = async () => {
      setLoading(true)
      try {
        // Fetch faculty list from our API
        const response = await fetch('/api/faculty', {
          cache: 'no-store',
          signal: AbortSignal.timeout(10000) // 10 second timeout
        })

        if (!response.ok) {
          throw new Error(`Failed to fetch faculty data: ${response.status}`)
        }

        const data = await response.json()
        
        if (!data.faculty || !Array.isArray(data.faculty)) {
          throw new Error('Invalid data structure returned from API')
        }

        // Transform API data to our format
        const transformedData: FacultyMember[] = data.faculty.map((faculty: any, index: number) => {
          // Extract research interests to use as publication keywords
          const interests = faculty.schoolName1 
            ? faculty.schoolName1.split(/[\r\n,]+/).map((i: string) => i.trim()).filter(Boolean)
            : ['Computer Science'];
                    
          // Generate mock publications data for each faculty
          const publications = generateMockPublications(
            faculty.nickname || 'Unknown Faculty', 
            3 + (index % 5),
            interests
          );
          
          // Improved image URL construction with multiple fallbacks
          let imageUrl = "/placeholder.svg";
          
          // First try localimg from our IIITDM server
          if (faculty.localimg) {
            imageUrl = `https://old.iiitdm.ac.in/img/faculty/${faculty.localimg}`;
          } 
          // Then try the pic field if it exists and is a valid URL
          else if (faculty.pic && faculty.pic !== 'null' && faculty.pic.startsWith('http')) {
            imageUrl = faculty.pic;
          }
          
          return {
            id: index + 1,
            name: faculty.nickname || 'Unknown Faculty',
            title: faculty.desig || 'Faculty',
            area: faculty.schoolName1 || 'Computer Science',
            image: imageUrl,
            publications
          };
        });

        setFacultyData(transformedData)
        setError(null)
      } catch (err) {
        console.error('Error fetching faculty data:', err)
        setError(err instanceof Error ? err.message : 'Failed to load faculty data')
        
        // Load fallback data if API fails
        setFacultyData(getFallbackFacultyData())
      } finally {
        setLoading(false)
      }
    }

    fetchFacultyData()
  }, [])

  // Mock publication generator function
  const generateMockPublications = (facultyName: string, count: number, interests: string[] = []): Publication[] => {
    const types = ['journal', 'conference', 'book', 'chapter']
    const years = [2023, 2022, 2021, 2020, 2019]
    const venues = [
      'IEEE Transactions on Knowledge and Data Engineering',
      'ACM Transactions on Database Systems',
      'International Conference on Machine Learning (ICML)',
      'Conference on Computer Vision and Pattern Recognition (CVPR)',
      'Journal of Artificial Intelligence Research'
    ]
    
    // Use faculty interests as keywords if available, otherwise use default keywords
    const keywordsList = interests.length > 0 
      ? [interests] 
      : [
          ['Machine Learning', 'Deep Learning', 'Neural Networks'],
          ['Data Mining', 'Knowledge Discovery', 'Big Data'],
          ['Computer Vision', 'Image Processing', 'Pattern Recognition'],
          ['Natural Language Processing', 'Text Mining', 'Information Retrieval'],
          ['Algorithms', 'Data Structures', 'Complexity']
        ];

    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      title: `${getRandomTitle()} ${i + 1}`,
      authors: `${facultyName}, ${getRandomCoauthors()}`,
      venue: venues[Math.floor(Math.random() * venues.length)],
      year: years[Math.floor(Math.random() * years.length)],
      type: types[Math.floor(Math.random() * types.length)],
      doi: `10.1109/TKDE.2023.${1000000 + Math.floor(Math.random() * 9000000)}`,
      citations: Math.floor(Math.random() * 30),
      abstract: `This paper presents a novel approach to ${getRandomTopic()}, demonstrating significant improvements over existing methods.`,
      keywords: keywordsList[Math.floor(Math.random() * keywordsList.length)]
    }));
  }

  // Helper functions for mock data
  const getRandomTitle = () => {
    const adjectives = ['Novel', 'Efficient', 'Robust', 'Adaptive', 'Advanced']
    const approaches = ['Approach', 'Method', 'Framework', 'System', 'Technique']
    const topics = ['Machine Learning', 'Data Mining', 'Computer Vision', 'Natural Language Processing', 'Network Security']
    
    return `A ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${approaches[Math.floor(Math.random() * approaches.length)]} for ${topics[Math.floor(Math.random() * topics.length)]}`
  }

  const getRandomCoauthors = () => {
    const lastNames = ['Kumar', 'Singh', 'Reddy', 'Sharma', 'Patel', 'Gupta']
    const count = 1 + Math.floor(Math.random() * 3)
    const coauthors = []
    
    for (let i = 0; i < count; i++) {
      const initial = String.fromCharCode(65 + Math.floor(Math.random() * 26))
      coauthors.push(`${initial}. ${lastNames[Math.floor(Math.random() * lastNames.length)]}`)
    }
    
    return coauthors.join(', ')
  }

  const getRandomTopic = () => {
    const topics = [
      'deep learning for computer vision',
      'natural language processing',
      'graph neural networks',
      'federated learning',
      'reinforcement learning',
      'knowledge graph reasoning',
      'explainable AI',
      'privacy-preserving machine learning'
    ]
    
    return topics[Math.floor(Math.random() * topics.length)]
  }

  // Fallback data in case API fails
  const getFallbackFacultyData = (): FacultyMember[] => {
    return [
      {
        id: 1,
        name: "Dr. Masilamani V",
        title: "Professor",
        area: "Image Processing, Biometrics, Pattern Recognition",
        image: "/placeholder.svg?height=300&width=300",
        publications: generateMockPublications("Masilamani V", 4, ['Image Processing', 'Biometrics', 'Pattern Recognition'])
      },
      {
        id: 2,
        name: "Dr. Noor Mahammad",
        title: "Associate Professor",
        area: "High Performance Architectures, VLSI Design, High Speed Networks",
        image: "/placeholder.svg?height=300&width=300",
        publications: generateMockPublications("Noor Mahammad", 3, ['High Performance Architectures', 'VLSI Design', 'High Speed Networks'])
      }
    ]
  }

  // Extract all years and types for filters
  const years = Array.from(
    new Set(facultyData.flatMap((faculty) => faculty.publications.map((pub) => pub.year)))
  ).sort((a, b) => b - a)

  const publicationTypes = Array.from(
    new Set(facultyData.flatMap((faculty) => faculty.publications.map((pub) => pub.type)))
  )

  // Get the selected faculty data
  const faculty = selectedFaculty !== null ? facultyData.find((f) => f.id === selectedFaculty) : null

  // Filter publications based on search and filters
  const filteredPublications =
    faculty?.publications.filter((pub) => {
      const matchesSearch =
        searchQuery === "" ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.keywords.some((keyword) => keyword.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesYear = yearFilter === null || pub.year === yearFilter
      const matchesType = typeFilter === null || pub.type === typeFilter

      return matchesSearch && matchesYear && matchesType
    }) || []

  // Calculate pagination
  const totalPages = Math.ceil(filteredPublications.length / itemsPerPage)
  const paginatedPublications = filteredPublications.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, yearFilter, typeFilter, selectedFaculty])

  // Calculate statistics data
  const publicationsByYear = years
    .map((year) => ({
      year,
      count: faculty?.publications.filter((pub) => pub.year === year).length || 0,
    }))
    .filter((item) => item.count > 0)
    .sort((a, b) => a.year - b.year)

  const publicationsByType = publicationTypes
    .map((type) => ({
      type,
      count: faculty?.publications.filter((pub) => pub.type === type).length || 0,
    }))
    .filter((item) => item.count > 0)

  // Reset filters
  const handleResetFilters = () => {
    setSearchQuery("")
    setYearFilter(null)
    setTypeFilter(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      <main className="pb-20">
        <Suspense fallback={<div className="h-48 bg-blue-50"></div>}>
          <HeroSection />
        </Suspense>

        <div className="container mx-auto px-4 mt-12">
          {loading ? (
            <LoadingState />
          ) : error && facultyData.length === 0 ? (
            <ErrorState message={error} />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Faculty Selection Sidebar */}
              <div className="lg:col-span-1">
                <Suspense fallback={<div className="h-96 bg-gray-100 rounded-xl animate-pulse"></div>}>
                  <FacultySelector
                    facultyData={facultyData}
                    selectedFaculty={selectedFaculty}
                    onSelectFaculty={setSelectedFaculty}
                  />
                </Suspense>
              </div>

              {/* Publications Content */}
              <div className="lg:col-span-3">
                {selectedFaculty === null ? (
                  <div className="bg-white rounded-xl shadow-md p-8 text-center">
                    <div className="mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 mx-auto text-blue-500 opacity-50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-gray-700 mb-2">Select a Faculty Member</h3>
                    <p className="text-gray-500">
                      Please select a faculty member from the list to view their publications.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Faculty Profile */}
                    <Suspense fallback={<div className="h-32 bg-gray-100 rounded-xl animate-pulse mb-6"></div>}>
                      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                            <FacultyImage
                              src={faculty?.image}
                              alt={faculty?.name || "Faculty"}
                              className="rounded-full"
                              width={96}
                              height={96}
                            />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-gray-800">{faculty?.name}</h2>
                            <p className="text-gray-600 mb-2">{faculty?.title}</p>
                            <p className="text-sm text-gray-500 mb-4">Research Area: {faculty?.area}</p>

                            <div className="flex flex-wrap gap-2">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3 w-3 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                  />
                                </svg>
                                {faculty?.publications.length} Publications
                              </span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3 w-3 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                  />
                                </svg>
                                {faculty?.publications.reduce((acc, pub) => acc + pub.citations, 0)} Citations
                              </span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3 w-3 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                {Math.min(...(faculty?.publications.map((p) => p.year) || [new Date().getFullYear()]))} -{" "}
                                {Math.max(...(faculty?.publications.map((p) => p.year) || [new Date().getFullYear()]))}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Suspense>

                    {/* Statistics Section */}
                    {faculty && faculty.publications.length > 0 && (
                      <Suspense fallback={<div className="h-48 bg-gray-100 rounded-xl animate-pulse mb-6"></div>}>
                        <Statistics publicationsByYear={publicationsByYear} publicationsByType={publicationsByType} />
                      </Suspense>
                    )}

                    {/* Search and Filters */}
                    <Suspense fallback={<div className="h-24 bg-gray-100 rounded-xl animate-pulse mb-6"></div>}>
                      <PublicationFilters
                        years={years}
                        types={publicationTypes}
                        selectedYear={yearFilter}
                        selectedType={typeFilter}
                        searchQuery={searchQuery}
                        onYearChange={setYearFilter}
                        onTypeChange={setTypeFilter}
                        onSearchChange={setSearchQuery}
                        onResetFilters={handleResetFilters}
                      />
                    </Suspense>

                    {/* Publications List */}
                    <Suspense fallback={<div className="h-96 bg-gray-100 rounded-xl animate-pulse mb-6"></div>}>
                      <PublicationsList publications={paginatedPublications} onSelectPublication={setSelectedPublication} />
                    </Suspense>

                    {/* Pagination */}
                    {filteredPublications.length > itemsPerPage && (
                      <Suspense fallback={<div className="h-12 bg-gray-100 rounded-xl animate-pulse mt-6"></div>}>
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                      </Suspense>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Publication Detail Modal */}
      <AnimatePresence>
        {selectedPublication && (
          <PublicationDetail publication={selectedPublication} onClose={() => setSelectedPublication(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

