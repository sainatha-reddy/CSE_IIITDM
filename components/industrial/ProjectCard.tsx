"use client"

import { motion } from "framer-motion"
import { ChevronRight, User, Building, Clock, DollarSign, Users } from "lucide-react"

interface ProjectCardProps {
  project: any
  onOpenProjectModal: (project: any) => void
}

export default function ProjectCard({ project, onOpenProjectModal }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
    >
      <div className="relative h-48">
        <img
          src={project.image || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.type === "faculty" ? "bg-blue-600 text-white" : "bg-emerald-600 text-white"
            }`}
          >
            {project.type === "faculty" ? "Faculty-Led" : "Student Project"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white line-clamp-2">{project.title}</h3>

        <div className="space-y-2 mb-4">
          {project.type === "faculty" ? (
            <>
              <div className="flex items-start gap-2">
                <User size={16} className="text-gray-500 dark:text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Principal Investigator</p>
                  <p className="text-gray-800 dark:text-gray-200">{project.pi}</p>
                  {project.copi && project.copi.length > 0 && (
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Co-PI: {project.copi.join(", ")}</p>
                  )}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Building size={16} className="text-gray-500 dark:text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Sponsor</p>
                  <p className="text-gray-800 dark:text-gray-200 line-clamp-1">{project.sponsor}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-start gap-2">
                <Users size={16} className="text-gray-500 dark:text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Student Members</p>
                  <p className="text-gray-800 dark:text-gray-200">
                    {project.studentMembers.length > 2
                      ? `${project.studentMembers[0]} +${project.studentMembers.length - 1} more`
                      : project.studentMembers.join(", ")}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{project.studentBatch}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <User size={16} className="text-gray-500 dark:text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Faculty Adviser</p>
                  <p className="text-gray-800 dark:text-gray-200">{project.facultyAdviser}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Building size={16} className="text-gray-500 dark:text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Company</p>
                  <p className="text-gray-800 dark:text-gray-200">{project.company}</p>
                </div>
              </div>
            </>
          )}
          <div className="flex items-start gap-2">
            <Clock size={16} className="text-gray-500 dark:text-gray-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
              <p className="text-gray-800 dark:text-gray-200">{project.duration || "Completed"}</p>
            </div>
          </div>
          {project.value && (
            <div className="flex items-start gap-2">
              <DollarSign size={16} className="text-gray-500 dark:text-gray-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Project Value</p>
                <p className="text-gray-800 dark:text-gray-200">{project.value}</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${project.status === "Completed" ? "bg-green-500" : "bg-amber-500"}`}
            ></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">{project.status}</span>
          </div>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenProjectModal(project)}
            className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-medium flex items-center gap-1 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all text-sm"
          >
            View Details <ChevronRight size={16} />
          </motion.button> */}
        </div>
      </div>
    </motion.div>
  )
}

