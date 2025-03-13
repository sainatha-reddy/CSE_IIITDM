"use client"

import { useState, useEffect, useRef } from "react"

// Define the project type
interface ResearchProject {
  id: number
  title: string
  investigators: string
  sponsor: string
  duration: string
  value: string
  category: "ongoing" | "completed"
  color: string
}

// Sample data for research projects
const researchProjects: ResearchProject[] = [
  {
    id: 1,
    title: "On Spanning Trees - Generalizations and Variants (Theory and Algorithms)",
    investigators: "Dr. N Sadagopan",
    sponsor: "DST-SERB",
    duration: "Three years (2018-2021)",
    value: "16 Lakhs",
    category: "completed",
    color: "blue",
  },
  {
    id: 2,
    title: "Vertex Separators and its Variants: Structural and Algorithmic Study",
    investigators: "Dr. N Sadagopan",
    sponsor: "National Board for Higher Mathematics (NBHM), DAE, GOI",
    duration: "3 years (2018-2021)",
    value: "Rs 16.23 Lakhs",
    category: "completed",
    color: "purple",
  },
  {
    id: 3,
    title: "Projects under Visvesvaraya PhD Scheme for Electronics and IT",
    investigators: "Dr. M Sreekumar and Dr. Noor Mohammad",
    sponsor: "Ministry of Electronics and IT, Govt. of India",
    duration: "5 Years- Starting from AY 2015-16",
    value: "101.874 Lakhs",
    category: "completed",
    color: "green",
  },
  {
    id: 4,
    title: "Special Manpower Development Program for Chips to System Design",
    investigators: "PI: Dr. Noor Mohammad; Co-PI: Dr. Binsu J Kailath",
    sponsor: "MEITY, Govt. of India",
    duration: "3 years",
    value: "92.4 Lakh",
    category: "ongoing",
    color: "amber",
  },
  {
    id: 5,
    title: "Information Security Education Awareness Programme",
    investigators:
      "Prof. Kamakoti IIT Madras Co-PI : Prof. Banshidhar Majhi, Dr. V Masilamani, Dr. Noor Mohammad, Dr. B Sivaselvan, Dr. N Sadagopan",
    sponsor: "MEITY",
    duration: "2018",
    value: "3.17 Lakhs",
    category: "completed",
    color: "red",
  },
]

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/research/sponsored/HeroSection"
import Statistics from "@/components/research/sponsored/Statistics"
import ProjectFilters from "@/components/research/sponsored/ProjectFilters"
import ProjectsList from "@/components/research/sponsored/ProjectsList"
import CallToAction from "@/components/research/sponsored/CallToAction"

export default function SponsoredResearchPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "ongoing" | "completed">("all")
  const [selectedSponsor, setSelectedSponsor] = useState("")
  const [selectedInvestigator, setSelectedInvestigator] = useState("")
  const [visibleProjects, setVisibleProjects] = useState<ResearchProject[]>(researchProjects)
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalFunding: 0,
    ongoingProjects: 0,
    completedProjects: 0,
  })
  const [activeProject, setActiveProject] = useState<ResearchProject | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  // Calculate statistics
  useEffect(() => {
    const totalProjects = researchProjects.length
    const ongoingProjects = researchProjects.filter((p) => p.category === "ongoing").length
    const completedProjects = researchProjects.filter((p) => p.category === "completed").length

    // Calculate total funding (removing "Rs", "Lakhs", "Lakh" and converting to number)
    const totalFunding = researchProjects.reduce((sum, project) => {
      const valueStr = project.value.replace(/Rs\s|Lakhs|Lakh/gi, "").trim()
      return sum + Number.parseFloat(valueStr)
    }, 0)

    setStats({
      totalProjects,
      totalFunding,
      ongoingProjects,
      completedProjects,
    })
  }, [])

  // Filter projects based on active filter
  useEffect(() => {
    if (activeFilter === "all") {
      setVisibleProjects(researchProjects)
    } else {
      setVisibleProjects(researchProjects.filter((project) => project.category === activeFilter))
    }
  }, [activeFilter])

  // Handle project click
  const handleProjectClick = (project: ResearchProject) => {
    setActiveProject(project)
    setIsModalOpen(true)
  }

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Get color class based on project color
  const getColorClass = (color: string, type: "bg" | "border" | "text") => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100",
        border: "border-blue-500",
        text: "text-blue-700",
      },
      purple: {
        bg: "bg-purple-100",
        border: "border-purple-500",
        text: "text-purple-700",
      },
      green: {
        bg: "bg-green-100",
        border: "border-green-500",
        text: "text-green-700",
      },
      amber: {
        bg: "bg-amber-100",
        border: "border-amber-500",
        text: "text-amber-700",
      },
      red: {
        bg: "bg-red-100",
        border: "border-red-500",
        text: "text-red-700",
      },
    }

    return colorMap[color][type]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        {" "}
        {/* Add padding to account for fixed header */}
        {/* Hero Section */}
        <HeroSection />
        {/* Stats Section */}
        <Statistics />
        {/* Filters */}
        <ProjectFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          selectedSponsor={selectedSponsor}
          setSelectedSponsor={setSelectedSponsor}
          selectedInvestigator={selectedInvestigator}
          setSelectedInvestigator={setSelectedInvestigator}
        />
        {/* Projects List */}
        <ProjectsList
          activeFilter={activeFilter}
          selectedSponsor={selectedSponsor}
          selectedInvestigator={selectedInvestigator}
        />
        {/* Call to Action */}
        <CallToAction />
      </div>
      <Footer />
    </div>
  )
}

