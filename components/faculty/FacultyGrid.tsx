"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Linkedin, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type facultyData, getRandomGradient } from "./data"

interface FacultyGridProps {
  filteredFaculty: typeof facultyData
  setSelectedFaculty: (faculty: (typeof facultyData)[0] | null) => void
}

export default function FacultyGrid({ filteredFaculty, setSelectedFaculty }: FacultyGridProps) {
  const [hoveredFaculty, setHoveredFaculty] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(6)

  const visibleFaculty = filteredFaculty.slice(0, visibleCount)
  const hasMore = visibleCount < filteredFaculty.length

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

  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {visibleFaculty.map((faculty) => (
          <motion.div
            key={faculty.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            onHoverStart={() => setHoveredFaculty(faculty.id)}
            onHoverEnd={() => setHoveredFaculty(null)}
            className="h-full"
          >
            <Card
              className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedFaculty(faculty)}
            >
              <div className="relative">
                <div className={`h-3 bg-gradient-to-r ${getRandomGradient(faculty.id)}`}></div>
                <div className="p-6 pb-0 flex justify-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image src={faculty.image || "/placeholder.svg"} alt={faculty.name} fill className="object-cover" />
                  </div>
                </div>
              </div>
              <CardHeader className="text-center pt-4 pb-2">
                <CardTitle className="text-xl text-blue-900">{faculty.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">{faculty.position}</CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-4">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Research Interests</h4>
                  <div className="flex flex-wrap gap-1">
                    {faculty.interests.slice(0, 3).map((interest, idx) => (
                      <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {interest}
                      </Badge>
                    ))}
                    {faculty.interests.length > 3 && (
                      <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                        +{faculty.interests.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {faculty.socialLinks.linkedin && (
                      <Link href={faculty.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 rounded-full text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                        >
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                    {faculty.socialLinks.github && (
                      <Link href={faculty.socialLinks.github} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                    {faculty.socialLinks.website && (
                      <Link href={faculty.socialLinks.website} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 rounded-full text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                        >
                          <Globe className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0 flex items-center"
                  >
                    View Profile
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
              <AnimatePresence>
                {hoveredFaculty === faculty.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-1">{faculty.name}</h3>
                    <p className="text-white/90 mb-3">{faculty.position}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {faculty.interestIcons.slice(0, 4).map((icon, idx) => (
                        <div
                          key={idx}
                          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                        >
                          <icon.component className="w-5 h-5 text-white" />
                        </div>
                      ))}
                    </div>
                    <Button className="bg-white text-blue-600 hover:bg-blue-50">View Full Profile</Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {hasMore && (
        <div className="mt-10 text-center">
          <Button onClick={() => setVisibleCount((prev) => prev + 6)} className="bg-blue-600 hover:bg-blue-700">
            Show More Faculty
          </Button>
        </div>
      )}
    </>
  )
}

