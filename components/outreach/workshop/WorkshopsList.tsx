"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, BookOpen, Eye, Database, Brain, Cpu } from "lucide-react"
import WorkshopCard from "./WorkshopCard"
import WorkshopFilters from "./WorkshopFilters"

// Workshop data
const workshops = [
  {
    id: 1,
    title: "ICPC 2023 Preliminary Round",
    description: "IIITDM Kancheepuram is one of regional center of ICPC.",
    date: "October 2023",
    organizers: ["Dr. N Sadagopan", "Dr. V Masilamani"],
    participants: 120,
    category: "Competition",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Code className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Short Term Course on Basics of Python",
    description: "A comprehensive course covering Python fundamentals for beginners.",
    date: "15 Feb - 7 March, 2023",
    organizers: ["Dr. B Sivaselvan", "Dr. Rahul Raman"],
    participants: 75,
    category: "Course",
    image: "/placeholder.svg?height=400&width=600",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "AICTE Sponsored QIP Short Term Course on Machine Intelligence for Computer Vision",
    description: "Advanced course on applying machine learning techniques to computer vision problems.",
    date: "28 Feb - 5 Mar, 2022",
    organizers: ["Dr. Jagadeesh Kakarla", "Dr. Rahul Raman"],
    participants: 60,
    category: "Course",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Eye className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Short Term Course on Python for Data Science",
    description: "Focused course on using Python for data analysis and visualization.",
    date: "5-10 June, 2023",
    organizers: ["Dr. Ram Prasad Padhy", "Dr. B Sivaselvan"],
    participants: 85,
    category: "Course",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Database className="h-6 w-6" />,
  },
  {
    id: 5,
    title: "Workshop on Competitive Programming",
    description: "Intensive workshop to improve algorithmic problem-solving skills.",
    date: "28 Oct - 5 Nov, 2023",
    organizers: ["Dr. N Sadagopan", "Dr. V Masilamani"],
    participants: 90,
    category: "Workshop",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Code className="h-6 w-6" />,
  },
  {
    id: 6,
    title: "SERB Sponsored Workshop on Deep Learning for Biometrics Privacy and Security",
    description: "Advanced workshop on applying deep learning techniques to biometric security challenges.",
    date: "19-25 June, 2023",
    organizers: ["Dr. Umarani J", "Dr. Rahul Raman", "Dr. Sivaselvan B"],
    participants: 70,
    category: "Workshop",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    id: 7,
    title: "AICTE Sponsored QIP Short Term Course on Recent Trends and Applications in Artificial Intelligence",
    description: "Comprehensive course covering the latest developments in AI and their practical applications.",
    date: "14-19 Mar, 2022",
    organizers: ["Dr. Ram Prasad Padhy", "Dr. Rahul Raman"],
    participants: 89,
    category: "Course",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Cpu className="h-6 w-6" />,
  },
]

export default function WorkshopsList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const filteredWorkshops = workshops.filter((workshop) => {
    const matchesSearch =
      workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workshop.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || workshop.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
    <div>
      <WorkshopFilters
        onSearch={setSearchTerm}
        onCategoryChange={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      {/* Timeline */}
      <div className="relative" ref={ref}>
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-blue-200 transform md:translate-x-px"></div>

        <motion.div variants={containerVariants} initial="hidden" animate={controls} className="space-y-12">
          {filteredWorkshops.length > 0 ? (
            filteredWorkshops.map((workshop, index) => (
              <WorkshopCard key={workshop.id} {...workshop} index={index} isEven={index % 2 === 0} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No workshops found matching your criteria.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

