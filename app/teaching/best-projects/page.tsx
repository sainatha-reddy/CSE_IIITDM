"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Calendar, User, Award, FileText, ExternalLink, Github, Youtube, Presentation } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import NewsTicker from "@/components/NewsTicker"
import HeroSection from "@/components/teaching/best-projects/HeroSection"
import ProjectFilters from "@/components/teaching/best-projects/ProjectFilters"
import FacultyAdvisors from "@/components/teaching/best-projects/FacultyAdvisors"
import ProjectStats from "@/components/teaching/best-projects/ProjectStats"
import CTASection from "@/components/teaching/best-projects/CTASection"
import ProjectCard from "@/components/teaching/best-projects/ProjectCard"
import Pagination from "@/components/teaching/best-projects/Pagination"
import { Button } from "@/components/ui/button"

// Project data
const projectsData = [
  {
    id: 1,
    studentName: "R.Niveditha",
    year: 2013,
    domain: "Computer Architecture",
    adviser: "Dr Noor Mahammad",
    domainIcon: <Cpu className="w-5 h-5" />,
    color: "from-blue-500 to-blue-600",
    abstract:
      "This project focused on optimizing cache memory architecture for improved performance in multi-core processors. The research implemented novel cache coherence protocols that reduced memory access latency by 27% compared to traditional approaches.",
    keywords: ["Cache Memory", "Multi-core Processors", "Memory Architecture", "Performance Optimization"],
    resources: [
      { type: "Research Paper", url: "#" },
      { type: "Presentation", url: "#" },
    ],
  },
  {
    id: 2,
    studentName: "Ramesh Krishnan P",
    year: 2014,
    domain: "Human Computer Interaction",
    adviser: "Dr Sivaselvan B",
    domainIcon: <MousePointer className="w-5 h-5" />,
    color: "from-purple-500 to-purple-600",
    abstract:
      "This project developed a novel gesture-based interface for controlling smart home devices. The system used computer vision techniques to recognize hand gestures with 94% accuracy and was tested with elderly users, showing significant improvements in usability compared to traditional interfaces.",
    keywords: ["Gesture Recognition", "Smart Home", "Computer Vision", "Accessibility"],
    resources: [
      { type: "Demo Video", url: "#" },
      { type: "GitHub Repository", url: "#" },
    ],
  },
  {
    id: 3,
    studentName: "Krishna Chaurasia",
    year: 2015,
    domain: "Human Computer Interaction",
    adviser: "Dr Sivaselvan B",
    domainIcon: <MousePointer className="w-5 h-5" />,
    color: "from-purple-500 to-purple-600",
    abstract:
      "This project explored eye-tracking technologies for improving user experience in educational applications. The research developed algorithms that adapt content presentation based on user attention patterns, resulting in 32% improvement in information retention during learning sessions.",
    keywords: ["Eye Tracking", "Adaptive Learning", "Educational Technology", "User Experience"],
    resources: [
      { type: "Research Paper", url: "#" },
      { type: "Prototype", url: "#" },
    ],
  },
  {
    id: 4,
    studentName: "Roopesh Reddy",
    year: 2016,
    domain: "Datamining",
    adviser: "Dr Sivaselvan B",
    domainIcon: <Database className="w-5 h-5" />,
    color: "from-amber-500 to-amber-600",
    abstract:
      "This project developed novel association rule mining algorithms for large-scale e-commerce transaction data. The approach achieved 3x faster processing times while maintaining accuracy comparable to traditional algorithms, enabling real-time product recommendations.",
    keywords: ["Association Rules", "E-commerce", "Big Data", "Recommendation Systems"],
    resources: [
      { type: "Algorithm Documentation", url: "#" },
      { type: "Performance Analysis", url: "#" },
    ],
  },
  {
    id: 5,
    studentName: "M.Ashiq",
    year: 2017,
    domain: "Graph Algorithms",
    adviser: "Dr N Sadagopan",
    domainIcon: <FileCode className="w-5 h-5" />,
    color: "from-green-500 to-green-600",
    abstract:
      "This project focused on developing efficient algorithms for solving the minimum dominating set problem in specific graph classes. The research provided theoretical bounds and practical implementations that outperformed existing approaches by up to 40% on large network datasets.",
    keywords: ["Graph Theory", "Dominating Sets", "Algorithm Optimization", "Network Analysis"],
    resources: [
      { type: "Research Paper", url: "#" },
      { type: "Algorithm Implementation", url: "#" },
    ],
  },
  {
    id: 6,
    studentName: "Vignesh Sairaj",
    year: 2018,
    domain: "Machine Learning",
    adviser: "Dr Sivaselvan B",
    domainIcon: <BrainCircuit className="w-5 h-5" />,
    color: "from-indigo-500 to-indigo-600",
    abstract:
      "This project developed a novel deep learning architecture for sentiment analysis in multilingual social media content. The model achieved 89% accuracy across five Indian languages without requiring language-specific preprocessing, outperforming existing approaches.",
    keywords: ["Sentiment Analysis", "Deep Learning", "Natural Language Processing", "Multilingual Computing"],
    resources: [
      { type: "Model Architecture", url: "#" },
      { type: "Dataset", url: "#" },
    ],
  },
  {
    id: 7,
    studentName: "Sowbarnika R",
    year: 2019,
    domain: "Machine Learning",
    adviser: "Dr Sivaselvan B",
    domainIcon: <BrainCircuit className="w-5 h-5" />,
    color: "from-indigo-500 to-indigo-600",
    abstract:
      "This project explored reinforcement learning techniques for optimizing energy consumption in smart buildings. The system reduced energy usage by 23% while maintaining occupant comfort levels through adaptive control of HVAC systems based on occupancy patterns and weather forecasts.",
    keywords: ["Reinforcement Learning", "Energy Optimization", "Smart Buildings", "IoT"],
    resources: [
      { type: "Simulation Results", url: "#" },
      { type: "Implementation Guide", url: "#" },
    ],
  },
  {
    id: 8,
    studentName: "Navya Bora",
    year: 2019,
    domain: "Machine Learning",
    adviser: "Prof. Banshidhar Majhi",
    domainIcon: <BrainCircuit className="w-5 h-5" />,
    color: "from-indigo-500 to-indigo-600",
    abstract:
      "This project developed a novel approach for detecting fake news using a hybrid model combining natural language processing and network analysis. The system achieved 92% accuracy on benchmark datasets, significantly outperforming previous methods that relied solely on content analysis.",
    keywords: ["Fake News Detection", "Natural Language Processing", "Network Analysis", "Social Media"],
    resources: [
      { type: "Research Paper", url: "#" },
      { type: "GitHub Repository", url: "#" },
    ],
  },
  {
    id: 9,
    studentName: "Eashan Dash",
    year: 2020,
    domain: "Data Analytics",
    adviser: "Dr Sivaselvan B",
    domainIcon: <LineChart className="w-5 h-5" />,
    color: "from-cyan-500 to-cyan-600",
    abstract:
      "This project developed advanced visualization techniques for exploring high-dimensional healthcare data. The approach combined dimensionality reduction with interactive visualization tools, enabling medical professionals to identify patterns in patient data that were previously difficult to detect.",
    keywords: ["Data Visualization", "Healthcare Analytics", "Dimensionality Reduction", "Interactive Systems"],
    resources: [
      { type: "Visualization Tool", url: "#" },
      { type: "Case Studies", url: "#" },
    ],
  },
  {
    id: 10,
    studentName: "Arun Narayanan",
    year: 2020,
    domain: "Data Science",
    adviser: "Dr N Sadagopan",
    domainIcon: <Database className="w-5 h-5" />,
    color: "from-amber-500 to-amber-600",
    abstract:
      "This project focused on predictive modeling for urban traffic patterns using a combination of historical data and real-time sensors. The system achieved 87% accuracy in predicting congestion 30 minutes in advance, enabling more effective traffic management in urban areas.",
    keywords: ["Predictive Modeling", "Urban Computing", "Traffic Analysis", "Sensor Networks"],
    resources: [
      { type: "Model Documentation", url: "#" },
      { type: "Dataset", url: "#" },
    ],
  },
  {
    id: 11,
    studentName: "Abinand Rajagopal",
    year: 2021,
    domain: "Data Analytics",
    adviser: "Dr Sivaselvan B",
    domainIcon: <LineChart className="w-5 h-5" />,
    color: "from-cyan-500 to-cyan-600",
    abstract:
      "This project developed novel algorithms for anomaly detection in time-series data from industrial IoT sensors. The approach combined statistical methods with deep learning to achieve 96% detection accuracy with a low false positive rate, enabling predictive maintenance in manufacturing environments.",
    keywords: ["Anomaly Detection", "Time Series Analysis", "Industrial IoT", "Predictive Maintenance"],
    resources: [
      { type: "Algorithm Documentation", url: "#" },
      { type: "Case Study", url: "#" },
    ],
  },
  {
    id: 12,
    studentName: "Adepu Anil Kumar",
    year: 2021,
    domain: "Image Processing",
    adviser: "Dr Umarani J",
    domainIcon: <ImageIcon className="w-5 h-5" />,
    color: "from-rose-500 to-rose-600",
    abstract:
      "This project developed advanced image enhancement techniques for low-light photography on mobile devices. The approach used a lightweight neural network that could run efficiently on mobile hardware while producing results comparable to professional editing software.",
    keywords: ["Image Enhancement", "Computational Photography", "Neural Networks", "Mobile Computing"],
    resources: [
      { type: "Demo Application", url: "#" },
      { type: "Research Paper", url: "#" },
    ],
  },
]

// Import missing components
import { Cpu, MousePointer, Database, FileCode, BrainCircuit, LineChart, ImageIcon, Search } from "lucide-react"

export default function BestProjects() {
  // State for filters and search
  const [selectedDomain, setSelectedDomain] = useState("all")
  const [selectedAdviser, setSelectedAdviser] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProject, setSelectedProject] = useState(null)

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  // Filter projects based on selected filters and search query
  const filteredProjects = projectsData.filter((project) => {
    // Filter by domain
    if (selectedDomain !== "all" && project.domain !== selectedDomain) {
      return false
    }

    // Filter by adviser
    if (selectedAdviser !== "all" && project.adviser !== selectedAdviser) {
      return false
    }

    // Filter by year
    if (selectedYear !== "all" && project.year !== Number.parseInt(selectedYear.toString())) {
      return false
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        project.studentName.toLowerCase().includes(query) ||
        project.domain.toLowerCase().includes(query) ||
        project.adviser.toLowerCase().includes(query) ||
        (project.abstract && project.abstract.toLowerCase().includes(query))
      )
    }

    return true
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedDomain, selectedAdviser, selectedYear, searchQuery])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <Header />

      <main className="">
        <NewsTicker />

        {/* Hero Section */}
        <HeroSection />

        {/* Main Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Search and Filters */}
              <ProjectFilters
                selectedDomain={selectedDomain}
                setSelectedDomain={setSelectedDomain}
                selectedAdviser={selectedAdviser}
                setSelectedAdviser={setSelectedAdviser}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />

              {/* Projects Grid */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 text-blue-900 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-blue-600" />
                  Outstanding Student Projects
                  <span className="ml-3 text-sm font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {filteredProjects.length} projects
                  </span>
                </h2>

                {filteredProjects.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProjects.map((project, index) => (
                      <ProjectCard key={project.id} project={project} onClick={setSelectedProject} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-12 text-center">
                    <div className="mx-auto w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">No projects found</h3>
                    <p className="text-gray-500 mb-6">
                      No projects match your current filters. Try adjusting your search criteria.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedDomain("all")
                        setSelectedAdviser("all")
                        setSelectedYear("all")
                        setSearchQuery("")
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}

                {/* Pagination */}
                {filteredProjects.length > projectsPerPage && (
                  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                )}
              </div>

              {/* Project Stats */}
              <ProjectStats />

              {/* Faculty Advisers */}
              <FacultyAdvisors setSelectedAdviser={setSelectedAdviser} />

              {/* Call to Action */}
              {/* <CTASection /> */}
            </div>
          </div>
        </section>

        {/* Project Detail Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div
                    className={`px-4 py-2 rounded-md bg-gradient-to-r ${selectedProject.color} text-white inline-flex items-center mb-2`}
                  >
                    {selectedProject.domainIcon}
                    <span className="ml-2">{selectedProject.domain}</span>
                  </div>
                  <DialogTitle className="text-2xl">{selectedProject.studentName}'s Project</DialogTitle>
                  <DialogDescription className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {selectedProject.year} |
                    <User className="w-4 h-4 mx-1" />
                    Advised by {selectedProject.adviser}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-900">Abstract</h3>
                    <p className="text-gray-700">{selectedProject.abstract}</p>
                  </div>

                  {selectedProject.keywords && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-900">Keywords</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.keywords.map((keyword, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* {selectedProject.resources && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-900">Resources</h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.resources.map((resource, idx) => {
                          let icon
                          switch (resource.type) {
                            case "Research Paper":
                              icon = <FileText className="w-4 h-4 mr-2" />
                              break
                            case "Presentation":
                              icon = <Presentation className="w-4 h-4 mr-2" />
                              break
                            case "Demo Video":
                              icon = <Youtube className="w-4 h-4 mr-2" />
                              break
                            case "GitHub Repository":
                              icon = <Github className="w-4 h-4 mr-2" />
                              break
                            default:
                              icon = <ExternalLink className="w-4 h-4 mr-2" />
                          }

                          return (
                            <Button key={idx} variant="outline" className="border-blue-200" asChild>
                              <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                                {icon}
                                {resource.type}
                              </Link>
                            </Button>
                          )
                        })}
                      </div>
                    </div>
                  )} */}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  )
}

