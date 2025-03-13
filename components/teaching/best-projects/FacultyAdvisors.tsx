"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { User, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Adviser data
const advisers = [
  {
    name: "Dr Noor Mahammad",
    value: "Dr Noor Mahammad",
    expertise: "Computer Architecture, VLSI Design",
    projects: 8,
    domains: ["Computer Architecture", "Hardware Security"],
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Dr Sivaselvan B",
    value: "Dr Sivaselvan B",
    expertise: "Machine Learning, Data Mining, HCI",
    projects: 15,
    domains: ["Machine Learning", "Human Computer Interaction", "Data Mining"],
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Dr N Sadagopan",
    value: "Dr N Sadagopan",
    expertise: "Graph Algorithms, Theoretical Computer Science",
    projects: 12,
    domains: ["Graph Algorithms", "Data Science"],
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Prof. Banshidhar Majhi",
    value: "Prof. Banshidhar Majhi",
    expertise: "Image Processing, Pattern Recognition",
    projects: 10,
    domains: ["Machine Learning", "Image Processing"],
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Dr Umarani J",
    value: "Dr Umarani J",
    expertise: "Image Processing, Computer Vision",
    projects: 7,
    domains: ["Image Processing"],
    image: "/placeholder.svg?height=120&width=120",
  },
]

interface FacultyAdvisorsProps {
  setSelectedAdviser: (adviser: string) => void
}

export default function FacultyAdvisors({ setSelectedAdviser }: FacultyAdvisorsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <Card className="mb-12 border-none shadow-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
        <CardTitle className="text-2xl flex items-center">
          <User className="w-6 h-6 mr-2" />
          Faculty Advisers
        </CardTitle>
        <CardDescription className="text-blue-100 text-lg">
          Meet the faculty members who have guided these outstanding projects
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 bg-gradient-to-b from-blue-50 to-white">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisers.map((adviser, index) => (
            <motion.div
              key={adviser.value}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="flex flex-col h-full">
                    {/* Adviser Image & Name */}
                    <div className="p-6 flex items-center space-x-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden bg-blue-100 flex-shrink-0 border-2 border-blue-200">
                        <img src={adviser.image || "/placeholder.svg"} alt={adviser.name} className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xl text-gray-900">{adviser.name}</h4>
                        <p className="text-sm text-gray-500">{adviser.expertise}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="px-6 pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500">Projects Guided</span>
                        <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded-full text-sm">
                          {adviser.projects} projects
                        </span>
                      </div>

                      {/* Domains */}
                      <div className="mb-4">
                        <span className="text-sm text-gray-500 block mb-2">Expertise Domains</span>
                        <div className="flex flex-wrap gap-2">
                          {adviser.domains.map((domain, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {domain}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        className="w-full justify-between text-blue-600 hover:text-blue-800 hover:bg-blue-50 group-hover:bg-blue-50 transition-colors"
                        onClick={() => setSelectedAdviser(adviser.value)}
                      >
                        <span>View Projects</span>
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

