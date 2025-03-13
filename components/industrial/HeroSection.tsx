"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Building, ChevronRight, ChevronLeft, User, Calendar, Users } from "lucide-react"
import { projects } from "./ProjectsData"

interface HeroSectionProps {
  onOpenProjectModal: (project: any) => void
}

export default function HeroSection({ onOpenProjectModal }: HeroSectionProps) {
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
    <section className="relative bg-gradient-to-b from-blue-900 to-indigo-800 pt-16 pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-indigo-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block px-4 py-1 bg-blue-700/30 border border-blue-400/30 rounded-full text-blue-100 text-sm mb-6">
              Industry Collaboration
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Industrial <span className="text-blue-300">Consultancy</span> & Partnerships
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-xl">
              Bridging academic excellence with industry innovation through collaborative research and development
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-blue-700 rounded-lg font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                Explore Projects <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent border border-white/60 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-white/10 transition-all"
              >
                Partner With Us <Building size={18} />
              </motion.button>
            </div>
          </motion.div>

          {/* Featured projects carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-4 px-2">Featured Projects</h2>

              <div className="relative overflow-hidden rounded-xl">
                <div className="relative h-[300px] md:h-[350px]">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10 rounded-lg"></div>
                        <img
                          src={project.image || "/placeholder.svg?height=350&width=600"}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20 text-white">
                          <div className="inline-block px-2 py-1 bg-blue-600 text-white text-xs rounded-full mb-2">
                            {project.type === "faculty" ? "Faculty-Led Project" : "Student Project"}
                          </div>
                          <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2">{project.title}</h3>
                          <div className="flex flex-wrap gap-3 mb-4">
                            {project.type === "faculty" ? (
                              <>
                                <div className="flex items-center gap-1 text-xs text-gray-200">
                                  <User size={12} />
                                  <span>PI: {project.pi}</span>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex items-center gap-1 text-xs text-gray-200">
                                  <Users size={12} />
                                  <span>{project.studentMembers.length} Students</span>
                                </div>
                              </>
                            )}
                            <div className="flex items-center gap-1 text-xs text-gray-200">
                              <Calendar size={12} />
                              <span>{project.duration || "Completed"}</span>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onOpenProjectModal(project)}
                            className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium flex items-center gap-1 hover:bg-blue-50 transition-all"
                          >
                            View Details <ChevronRight size={14} />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center mt-4 px-2">
                <div className="flex gap-1">
                  {projects.slice(0, 3).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === index ? "bg-white w-4" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900"></div>
    </section>
  )
}

