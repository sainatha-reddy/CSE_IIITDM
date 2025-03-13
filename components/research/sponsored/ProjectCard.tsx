"use client"

import { motion } from "framer-motion"
import { Calendar, ChevronRight, DollarSign, Users } from "lucide-react"
import type { ResearchProject } from "./ProjectsData"

interface ProjectCardProps {
  project: ResearchProject
  index: number
  onClick: (project: ResearchProject) => void
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  // Get color class based on project color
  const getColorClass = (color: string, type: "bg" | "border" | "text") => {
    const colorMap: Record<string, Record<string, string>> = {
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
    <motion.div
      className={`bg-white rounded-xl shadow-sm overflow-hidden border ${getColorClass(
        project.color,
        "border",
      )} hover:shadow-lg transition-all duration-300 cursor-pointer`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={() => onClick(project)}
    >
      <div className={`h-2 ${getColorClass(project.color, "bg")}`}></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              project.category === "ongoing" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
            }`}
          >
            {project.category === "ongoing" ? "Ongoing" : "Completed"}
          </span>
          <span className={`text-sm font-medium ${getColorClass(project.color, "text")}`}>{project.sponsor}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">{project.title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-start">
            <Users className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-600 ml-2 line-clamp-1">{project.investigators}</p>
          </div>
          <div className="flex items-start">
            <Calendar className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-600 ml-2">{project.duration}</p>
          </div>
          <div className="flex items-start">
            <DollarSign className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-600 ml-2">{project.value}</p>
          </div>
        </div>
        <button
          className={`mt-2 inline-flex items-center text-sm font-medium ${getColorClass(project.color, "text")} hover:underline`}
        >
          View Details <ChevronRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </motion.div>
  )
}

