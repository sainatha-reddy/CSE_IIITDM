"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronRight, ChevronLeft, User, Building, Calendar, Users } from "lucide-react"
import { projects } from "./ProjectsData"

interface FeaturedProjectsProps {
  onOpenProjectModal: (project: any) => void
}

export default function FeaturedProjects({ onOpenProjectModal }: FeaturedProjectsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate featured projects
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === projects.slice(0, 3).length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.slice(0, 3).length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.slice(0, 3).length - 1 : prev - 1))
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our most impactful industry collaborations that are driving innovation and solving real-world
            challenges
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div className="relative h-[400px] md:h-[500px]">
              {projects.slice(0, 3).map((project, index) => (
                <motion.div
                  key={project.id}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    zIndex: currentSlide === index ? 10 : 0,
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10"></div>
                    <img
                      src={project.image || "/placeholder.svg?height=500&width=800"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 text-white">
                      <div className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-4">
                        {project.type === "faculty" ? "Faculty-Led Project" : "Student Project"}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-200 mb-4 max-w-3xl">{project.description.substring(0, 120)}...</p>
                      <div className="flex flex-wrap gap-4 mb-6">
                        {project.type === "faculty" ? (
                          <>
                            <div className="flex items-center gap-2 text-sm text-gray-200">
                              <User size={16} />
                              <span>PI: {project.pi}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-200">
                              <Building size={16} />
                              <span>{project.sponsor.split(" ")[0]}</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center gap-2 text-sm text-gray-200">
                              <Users size={16} />
                              <span>{project.studentMembers.length} Students</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-200">
                              <Building size={16} />
                              <span>{project.company}</span>
                            </div>
                          </>
                        )}
                        <div className="flex items-center gap-2 text-sm text-gray-200">
                          <Calendar size={16} />
                          <span>{project.duration || "Completed"}</span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onOpenProjectModal(project)}
                        className="px-5 py-2 bg-white text-blue-700 rounded-full font-medium flex items-center gap-2 hover:bg-blue-50 transition-all"
                      >
                        View Details <ChevronRight size={18} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-blue-700 shadow-lg hover:bg-white transition-all z-20"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-blue-700 shadow-lg hover:bg-white transition-all z-20"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.slice(0, 3).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-blue-600 w-6" : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

