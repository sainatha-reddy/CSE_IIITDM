"use client"

import { useState } from "react"
import {
  Code,
  BrainCircuit,
  Cpu,
  BookText,
  Sparkles,
  Network,
  Layers,
  Wifi,
  Globe,
  Languages,
  GraduationCap,
  Bookmark,
  Lightbulb,
} from "lucide-react"
import MainNav from "@/components/MainNav"
import Footer from "@/components/Footer"
import NewsTicker from "@/components/NewsTicker"
import HeroSection from "@/components/teaching/online-electives/HeroSection"
import IntroSection from "@/components/teaching/online-electives/IntroSection"
import TrackSection from "@/components/teaching/online-electives/TrackSection"
import BenefitsSection from "@/components/teaching/online-electives/BenefitsSection"
import CTASection from "@/components/teaching/online-electives/CTASection"
import Pagination from "@/components/teaching/online-electives/Pagination"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"

// Course data organized by tracks
const courseTracks = [
  {
    name: "Theory Track",
    icon: <Code className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    description: "Foundational courses in programming and computational thinking",
    courses: [
      {
        id: "theory-1",
        title: "The Joy of Computing using Python",
        provider: "NPTEL",
        icon: <Sparkles className="w-5 h-5" />,
        description:
          "An introductory course that makes learning Python programming fun and engaging through practical examples and interactive exercises.",
        duration: "8 weeks",
        level: "Beginner" as const,
        students: 15000,
        rating: 4.7,
        tags: ["Python", "Programming", "Beginner"],
        featured: true,
      },
      {
        id: "theory-2",
        title: "Programming, Data Structures and Algorithms using Python",
        provider: "NPTEL",
        icon: <Layers className="w-5 h-5" />,
        description:
          "A comprehensive course covering essential programming concepts and data structures with implementation in Python.",
        duration: "12 weeks",
        level: "Intermediate" as const,
        students: 12500,
        rating: 4.5,
        tags: ["Python", "Data Structures", "Algorithms"],
      },
      {
        id: "theory-3",
        title: "Design and Analysis of Algorithms",
        provider: "NPTEL",
        icon: <Code className="w-5 h-5" />,
        description: "Learn how to analyze and design efficient algorithms for solving computational problems.",
        duration: "10 weeks",
        level: "Advanced" as const,
        students: 8700,
        rating: 4.6,
        tags: ["Algorithms", "Complexity", "Problem Solving"],
      },
    ],
  },
  {
    name: "Data Science Track",
    icon: <BrainCircuit className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
    description: "Advanced courses in AI, machine learning, and data analysis",
    courses: [
      {
        id: "data-1",
        title: "Introduction to Machine Learning",
        provider: "NPTEL",
        icon: <Lightbulb className="w-5 h-5" />,
        description:
          "Learn the fundamentals of machine learning algorithms and their applications in real-world scenarios.",
        duration: "10 weeks",
        level: "Intermediate" as const,
        students: 18200,
        rating: 4.8,
        tags: ["Machine Learning", "AI", "Data Science"],
        featured: true,
      },
      {
        id: "data-2",
        title: "Social Networks",
        provider: "NPTEL",
        icon: <Network className="w-5 h-5" />,
        description:
          "Explore the structure and dynamics of social networks and their analysis using computational methods.",
        duration: "8 weeks",
        level: "Intermediate" as const,
        students: 7500,
        rating: 4.3,
        tags: ["Network Analysis", "Social Media", "Graph Theory"],
      },
      {
        id: "data-3",
        title: "Artificial Intelligence Search Methods for Problem Solving",
        provider: "NPTEL",
        icon: <BrainCircuit className="w-5 h-5" />,
        description: "Study various search algorithms and problem-solving techniques in artificial intelligence.",
        duration: "12 weeks",
        level: "Advanced" as const,
        students: 9300,
        rating: 4.5,
        tags: ["AI", "Search Algorithms", "Problem Solving"],
      },
      {
        id: "data-4",
        title: "Deep Learning",
        provider: "NPTEL",
        icon: <Layers className="w-5 h-5" />,
        description:
          "Dive into neural networks, deep learning architectures, and their implementations for solving complex problems.",
        duration: "14 weeks",
        level: "Advanced" as const,
        students: 14500,
        rating: 4.9,
        tags: ["Deep Learning", "Neural Networks", "AI"],
      },
    ],
  },
  {
    name: "System Track",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-teal-500 to-teal-600",
    description: "Courses focused on hardware, networks, and system design",
    courses: [
      {
        id: "system-1",
        title: "Embedded Systems — Design Verification and Test",
        provider: "NPTEL",
        icon: <Cpu className="w-5 h-5" />,
        description: "Learn about designing, verifying, and testing embedded systems for various applications.",
        duration: "10 weeks",
        level: "Advanced" as const,
        students: 6800,
        rating: 4.4,
        tags: ["Embedded Systems", "Hardware", "Testing"],
      },
      {
        id: "system-2",
        title: "Hardware Modeling using Verilog",
        provider: "NPTEL",
        icon: <Layers className="w-5 h-5" />,
        description: "Master hardware description language for modeling digital systems and FPGA implementation.",
        duration: "12 weeks",
        level: "Intermediate" as const,
        students: 5200,
        rating: 4.2,
        tags: ["Verilog", "Hardware", "FPGA"],
      },
      {
        id: "system-3",
        title: "Introduction to Internet of Things",
        provider: "NPTEL",
        icon: <Wifi className="w-5 h-5" />,
        description: "Explore the world of connected devices, IoT architectures, and applications in smart systems.",
        duration: "8 weeks",
        level: "Beginner" as const,
        students: 12300,
        rating: 4.6,
        tags: ["IoT", "Connected Devices", "Smart Systems"],
        featured: true,
      },
      {
        id: "system-4",
        title: "Computer Networks and Internet Protocol",
        provider: "NPTEL",
        icon: <Globe className="w-5 h-5" />,
        description: "Understand the fundamentals of computer networks, protocols, and internet architecture.",
        duration: "10 weeks",
        level: "Intermediate" as const,
        students: 9800,
        rating: 4.5,
        tags: ["Networks", "Protocols", "Internet"],
      },
    ],
  },
  {
    name: "Free Electives",
    icon: <BookText className="w-8 h-8" />,
    color: "from-amber-500 to-amber-600",
    description: "Liberal arts and language courses to broaden your horizons",
    courses: [
      {
        id: "free-1",
        title: "Technical English for Engineers",
        provider: "NPTEL",
        icon: <Languages className="w-5 h-5" />,
        description:
          "Improve your technical writing and communication skills for engineering contexts and professional environments.",
        duration: "6 weeks",
        level: "Beginner" as const,
        students: 14200,
        rating: 4.3,
        tags: ["English", "Communication", "Technical Writing"],
      },
      {
        id: "free-2",
        title: "English Language for Competitive Exams",
        provider: "NPTEL",
        icon: <GraduationCap className="w-5 h-5" />,
        description: "Prepare for competitive exams with focused English language training and test-taking strategies.",
        duration: "8 weeks",
        level: "Intermediate" as const,
        students: 18500,
        rating: 4.7,
        tags: ["English", "Exam Prep", "Language Skills"],
        featured: true,
      },
      {
        id: "free-3",
        title: "Introduction to Cultural Studies",
        provider: "NPTEL",
        icon: <Bookmark className="w-5 h-5" />,
        description:
          "Explore diverse cultural perspectives and their impact on society, technology, and global interactions.",
        duration: "8 weeks",
        level: "Beginner" as const,
        students: 7800,
        rating: 4.2,
        tags: ["Culture", "Society", "Humanities"],
      },
    ],
  },
]

export default function OnlineElectives() {
  const [currentPage, setCurrentPage] = useState(1)
  const tracksPerPage = 2

  // Calculate pagination
  const indexOfLastTrack = currentPage * tracksPerPage
  const indexOfFirstTrack = indexOfLastTrack - tracksPerPage
  const currentTracks = courseTracks.slice(indexOfFirstTrack, indexOfLastTrack)
  const totalPages = Math.ceil(courseTracks.length / tracksPerPage)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    // Scroll to top of tracks section
    window.scrollTo({
      top: document.getElementById("tracks-section")?.offsetTop - 100,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* Header */}
      <Header />

      <main className="">
        <NewsTicker />

        {/* Hero Section */}
        <HeroSection />

        {/* Introduction Section */}
        <IntroSection />

        {/* Course Tracks Section */}
        <div id="tracks-section">
          {currentTracks.map((track, trackIndex) => (
            <TrackSection key={track.name} track={track} index={indexOfFirstTrack + trackIndex} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="py-8 bg-white">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        )}

        {/* Benefits Section */}
        <BenefitsSection />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

