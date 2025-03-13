"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/industrial/HeroSection"
import Statistics from "@/components/industrial/Statistics"
import ProjectFilters from "@/components/industrial/ProjectFilters"
import ProjectsList from "@/components/industrial/ProjectsList"
import ProjectDetail from "@/components/industrial/ProjectDetail"
import CallToAction from "@/components/industrial/CallToAction"
import { Building, Users, DollarSign, User, Briefcase } from "lucide-react"

// Project data
const projects = [
  {
    id: 1,
    title: "Machine Learning Algorithms for Security Applications & Image Processing",
    type: "faculty",
    pi: "Dr. V Masilamani",
    copi: [],
    sponsor: "Forensics Intelligence Surveillance and Security Technologies Pvt. Ltd. Chennai",
    duration: "Two Years",
    value: "6 Lakhs",
    status: "Completed",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "This project focuses on developing advanced machine learning algorithms for security applications and image processing. The research aims to enhance surveillance systems with intelligent features for threat detection and image analysis.",
    outcomes: [
      "Developed novel ML algorithms for security surveillance",
      "Created image processing techniques for forensic analysis",
      "Published 2 research papers in international journals",
      "Filed 1 patent for the developed technology",
    ],
    technologies: ["Machine Learning", "Computer Vision", "Image Processing", "Security Systems"],
  },
  {
    id: 2,
    title: "People Counter for Bus",
    type: "faculty",
    pi: "Dr. V Masilamani",
    copi: ["Prof. Banshidhar Majhi"],
    sponsor: "Vamo Systems Private Ltd. Chennai",
    duration: "1 year",
    value: "2 Lakhs",
    status: "Completed",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "This project involves developing an automated system to count passengers entering and exiting buses. The technology uses computer vision and sensor fusion to provide accurate passenger counts for public transportation management.",
    outcomes: [
      "Developed a prototype with 95% counting accuracy",
      "Implemented in 5 test buses for field trials",
      "Created a dashboard for real-time monitoring",
      "Reduced manual counting errors by 85%",
    ],
    technologies: ["Computer Vision", "IoT", "Embedded Systems", "Data Analytics"],
  },
  {
    id: 3,
    title: "'MediVo' - An online portal for e-consultation customized to dentists",
    type: "student",
    studentMembers: ["S Lokesh Kumar", "R Neeraj", "Shubham Kumar Gandhi", "Adarsh Srivatasava"],
    studentBatch: "B.Tech COE - Class of 2013-17",
    facultyAdviser: "Dr. N Sadagopan",
    status: "Completed and Transferred",
    company: "vexo.org",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "MediVo is an online portal designed specifically for dental e-consultations. The platform enables dentists to conduct virtual consultations, manage patient records, and schedule appointments efficiently.",
    outcomes: [
      "Developed a fully functional UI meeting dentist specifications",
      "Created secure patient data management system",
      "Implemented video consultation features",
      "Transferred to vexo.org for further enhancement",
    ],
    technologies: ["Web Development", "Healthcare IT", "UI/UX Design", "Telemedicine"],
  },
  {
    id: 4,
    title: "Object Reconstruction from a stream of projections of CT scan images",
    type: "student",
    studentMembers: ["M Aishwarya"],
    studentBatch: "B.Tech 2014-18",
    facultyAdviser: "Dr. N Sadagopan",
    company: "LUCID Technologies Ltd, Chennai",
    status: "Completed",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "This project focuses on developing algorithms for reconstructing 3D objects from CT scan image projections. The technology enables more accurate medical diagnostics and visualization of internal structures.",
    outcomes: [
      "Developed reconstruction algorithms with high accuracy",
      "Reduced processing time by 40% compared to existing methods",
      "Created visualization tools for medical professionals",
      "Implemented in LUCID's medical imaging software",
    ],
    technologies: ["Medical Imaging", "Computer Vision", "3D Reconstruction", "Algorithm Design"],
  },
  {
    id: 5,
    title: "Open Source Web Server Design to mimic AKAMAI features",
    type: "student",
    studentMembers: ["P Lalitha"],
    studentBatch: "B.Tech 2014-18",
    facultyAdviser: "Dr. N Sadagopan",
    company: "Start Smart Labs, Chennai",
    status: "Completed",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "This project involves designing an open-source web server that replicates key features of AKAMAI's content delivery network. The server aims to provide efficient content delivery and caching capabilities.",
    outcomes: [
      "Developed an open-source web server with CDN capabilities",
      "Implemented caching mechanisms for improved performance",
      "Created load balancing features for high availability",
      "Achieved 30% faster content delivery in testing",
    ],
    technologies: [
      "Web Server Architecture",
      "Content Delivery Networks",
      "Distributed Systems",
      "Open Source Development",
    ],
  },
]

// Statistics data
const stats = [
  { id: 1, label: "Total Projects", value: 15, icon: Briefcase },
  { id: 2, label: "Industry Partners", value: 8, icon: Building },
  { id: 3, label: "Faculty Involved", value: 6, icon: User },
  { id: 4, label: "Students Engaged", value: 25, icon: Users },
  { id: 5, label: "Total Funding", value: "₹25L+", icon: DollarSign },
]

export default function IndustrialConsultancy() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <main>
        <HeroSection onOpenProjectModal={openProjectModal} />
        <Statistics />

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <ProjectFilters
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <ProjectsList activeTab={activeTab} searchTerm={searchTerm} onOpenProjectModal={openProjectModal} />
          </div>
        </section>

        <CallToAction />
      </main>

      <ProjectDetail isOpen={isModalOpen} project={selectedProject} onClose={closeProjectModal} />

      <Footer />
    </div>
  )
}

