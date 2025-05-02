"use client"

import { useState, useEffect, useRef } from "react"

// Define the project type
interface ResearchProject {
  id: number
  title: string
  investigators: string
  sponsor: string
  duration: string
  value?: string
  year?: string
  category: "ongoing" | "completed"
  color: string
}

// Function to determine project status based on duration
const determineProjectStatus = (year: string, duration: string): "ongoing" | "completed" => {
  const durationMatch = duration.match(/(\d+)\s*(year|month|years|months)/i)
  const durationYears = durationMatch
    ? durationMatch[2].toLowerCase().includes("month")
      ? parseInt(durationMatch[1]) / 12
      : parseInt(durationMatch[1])
    : 3

  const startYear = parseInt(year.split("-")[0])
  const currentYear = new Date().getFullYear()
  return startYear + durationYears < currentYear ? "completed" : "ongoing"
}

// Function to assign a color based on sponsor type
const getColorByName = (name: string): string => {
  if (name.includes("DST") || name.includes("SERB")) return "blue"
  if (name.includes("DRDO")) return "red"
  if (name.includes("MHRD") || name.includes("MHA")) return "green"
  if (name.includes("UKIERI") || name.includes("Bilateral")) return "purple"
  if (name.includes("Industrial") || name.includes("Pvt") || name.includes("Private")) return "amber"
  return ["blue", "purple", "green", "amber", "red"][Math.floor(Math.random() * 5)]
}

// Convert raw data rows to project objects
const convertRowsToProjects = (rows: string[][]): ResearchProject[] => {
  return rows.map((row, index) => {
    const [investigators, sponsor, title, year, duration] = row
    const status = determineProjectStatus(year, duration)

    return {
      id: index + 1 + 100,
      title: title,
      investigators: investigators,
      sponsor: sponsor,
      duration: duration,
      year: year,
      category: status,
      color: getColorByName(sponsor),
    }
  })
}

// Sample data for research projects (existing data)
const existingResearchProjects: ResearchProject[] = [
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

// New data from rows
const rows = [
  [
    "Dr. Raja B",
    "DST- Fast Track",
    "Development of a Nanofluid Coolant for high heat flux devices with Mini-channel heat Exchanger.",
    "2010-11",
    "3 years",
  ],
  [
    "Dr. Arivazhagan A",
    "DST- Fast Track",
    "5 axis STEP-NC (AP-238) Machining of Free Form / Irregular Contoured Surfaces",
    "2010-11",
    "3 years",
  ],
  [
    "Dr. Naveen Kumar",
    "DST- Fast Track",
    "Design, development and characterization of all fiber interferometer for wavelength interleaving and temperature sensing applications",
    "2011-12",
    "2 years",
  ],
  [
    "Dr.S. Jayavel",
    "DST- Fast Track",
    "Design, development and performance evaluation of enhanced aircooling in electronic systems",
    "2012-13",
    "2 years",
  ],
  [
    "Dr. M.D. Selvaraj",
    "UKIERI",
    "Rural and Remote Ubiquitous Broadband Wireless Access",
    "2012-13",
    "2 years",
  ],
  [
    "Dr. Raja B (PI), Dr.Sreekumar (Co-PI)",
    "DST-SERB",
    "Design and Development of energy efficient freeze dryer with multiport mini-channel shelf heat exchanger",
    "2014-15",
    "3 years",
  ],
  [
    "Dr. S.Rajasekara Pandian",
    "Dept. of Higher Education-MHRD",
    "Scheme of Pandit Madan Mohan Malaviya National Mission on Teachers and Teaching (PMMMNMTT)",
    "2015-16",
    "5 years",
  ],
  [
    "Dr. M.Sreekumar",
    "University of Genevo, Italy",
    "Control and operation of agents in a multi-agent fixturing system with swarm control",
    "2015-16",
    "2 years",
  ],
  [
    "Dr. Noor Mahammad Shak  Dr.Binsu Kailath",
    "Deity-SMDP",
    "Special Manpower Development Programme for Chips to System Design under CEERI-Pilani",
    "2015-16",
    "5 Years",
  ],
  [
    "Dr.Pandithevan",
    "DST-SERB",
    "Development of a Computer-Assisted Surgical Methodology for Orthopedic-Bone Surgery",
    "2016-17",
    "3 years",
  ],
  [
    "Dr.Naveen Kumar",
    "IITH-DIC",
    "MoU with IIT Hyderabad for Design Innovation Centre project.",
    "2016-17",
    "Yet to receive",
  ],
  [
    "Dr.Priyanka Kokil",
    "DST-SERB",
    "Early detection of Kidney abnormalities in noisy ultrasound images",
    "2017-18",
    "3 years",
  ],
  [
    "Dr.Priyanka Kokil",
    "DST-SERB",
    "Early detection of cataract: An IoT based approach",
    "2017-18",
    "3 years",
  ],
  [
    "Dr.M.D.Selvaraj",
    "DST-SERB",
    "Investigations on the Cell Phone Tower Radiation and Mitigation Techniques",
    "2018-19",
    "3 years",
  ],
  [
    "Dr M Sreekumar (PI), Dr K. Jayabal (Co PI)",
    "DST-AMT",
    "Design, Development, Manufacture, and Evaluation of Laser Cut Stent Patterns for Enhanced Performance and Life",
    "2018-19",
    "2 years",
  ],
  [
    "Dr M Sreekumar (PI) and Dr.KPK (Co PI)",
    "DST-ICPS",
    "Performance Evaluation and Modeling of Multi Agent Based Smart Manufacturing Integrated with Swarm Intelligence and IoT",
    "2018-2019",
    "3 years",
  ],
  [
    "Dr Sadagopan",
    "National Board for Higher Mathematics (NBHM), DAE, GOI",
    "Vertex Separators and its Variants: Structural and Algorithmic Study",
    "2018-2019",
    "3 years",
  ],
  [
    "Dr. Jayachandra Bingi",
    "DST-SERB",
    "Photo Induced Excess Charge Mediated Fluoride Ion Filtration",
    "2018-2019",
    "30 months",
  ],
  [
    "Dr Sadagopan",
    "DST-SERB",
    "On Spanning Trees - Generalizations and Variants (Theory and Algorithms)",
    "2018-2019",
    "3 years",
  ],
  [
    "Pi:Dr.V.Masilamani &#10;Co-PI: Prof.Banshidhar Majhi",
    "Ms.Vamo Systems Private Limited, Chennai",
    "People counter for Bus",
    "2018-2019",
    "1 year",
  ],
  [
    "PI: Dr.V. Masilamani,Co-PI:Prof.Banshidhar Majhi, Dr.Noor Mahammad",
    "FISST, Chennai",
    "Machine Learning Algorithms for Security Applications & Image Processing",
    "2018-2019",
    "2 years",
  ],
  [
    "Dr. Jagadeesh Kakarla",
    "SimplyFI Softech India Pvt Ltd",
    "Banking intelligence enhancement & OCR Enhancement Algorithm for Banking Intelligence & Automation",
    "2021-22",
    "18 Months",
  ],
]

const newProjects = convertRowsToProjects(rows)

const researchProjects: ResearchProject[] = [...existingResearchProjects, ...newProjects]

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

    const totalFunding = researchProjects.reduce((sum, project) => {
      if (!project.value) return sum

      const valueStr = project.value.replace(/Rs\s|Lakhs|Lakh/gi, "").trim()
      return sum + (Number.isNaN(Number.parseFloat(valueStr)) ? 0 : Number.parseFloat(valueStr))
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
        <HeroSection />
        <Statistics />
        <ProjectFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          selectedSponsor={selectedSponsor}
          setSelectedSponsor={setSelectedSponsor}
          selectedInvestigator={selectedInvestigator}
          setSelectedInvestigator={setSelectedInvestigator}
        />
        <ProjectsList
          activeFilter={activeFilter}
          selectedSponsor={selectedSponsor}
          selectedInvestigator={selectedInvestigator}
        />
        <CallToAction />
      </div>
      <Footer />
    </div>
  )
}

