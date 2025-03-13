"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, ExternalLink } from "lucide-react"

interface ProjectDetailProps {
  isOpen: boolean
  project: any
  onClose: () => void
}

export default function ProjectDetail({ isOpen, project, onClose }: ProjectDetailProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={project.image || "/placeholder.svg?height=400&width=800"}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-3">
                  {project.type === "faculty" ? "Faculty-Led Project" : "Student Project"}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Project Overview</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>

                  {project.outcomes && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Key Outcomes</h4>
                      <ul className="space-y-2">
                        {project.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.technologies && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Project Details</h3>

                  <div className="space-y-4">
                    {project.type === "faculty" ? (
                      <>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Principal Investigator
                          </h4>
                          <p className="text-gray-800 dark:text-white font-medium">{project.pi}</p>
                          {project.copi && project.copi.length > 0 && (
                            <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                              Co-PI: {project.copi.join(", ")}
                            </p>
                          )}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Sponsor</h4>
                          <p className="text-gray-800 dark:text-white">{project.sponsor}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Student Members</h4>
                          <p className="text-gray-800 dark:text-white">{project.studentMembers.join(", ")}</p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{project.studentBatch}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Faculty Adviser</h4>
                          <p className="text-gray-800 dark:text-white">{project.facultyAdviser}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Company</h4>
                          <p className="text-gray-800 dark:text-white">{project.company}</p>
                        </div>
                      </>
                    )}
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</h4>
                      <p className="text-gray-800 dark:text-white">{project.duration || "Completed"}</p>
                    </div>
                    {project.value && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Project Value</h4>
                        <p className="text-gray-800 dark:text-white">{project.value}</p>
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            project.status === "Completed" ? "bg-green-500" : "bg-amber-500"
                          }`}
                        ></div>
                        <span className="text-gray-800 dark:text-white">{project.status}</span>
                      </div>
                    </div>
                  </div>

                  {project.type === "faculty" && (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full mt-6 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-all"
                    >
                      Contact Principal Investigator <ExternalLink size={16} />
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

