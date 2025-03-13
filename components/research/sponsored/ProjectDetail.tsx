"use client"

import { motion } from "framer-motion"
import { Calendar, DollarSign, Users } from "lucide-react"
import type { ResearchProject } from "./ProjectsData"

interface ProjectDetailProps {
  project: ResearchProject
  onClose: () => void
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
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
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white rounded-xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <Users className="h-4 w-4 text-gray-500 mr-2" />
              <p className="text-gray-700">
                <strong>Investigators:</strong> {project.investigators}
              </p>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 text-gray-500 mr-2" />
              <p className="text-gray-700">
                <strong>Value:</strong> {project.value}
              </p>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-gray-500 mr-2" />
              <p className="text-gray-700">
                <strong>Duration:</strong> {project.duration}
              </p>
            </div>
          </div>
          <p className="mt-6 text-gray-700">{project.description}</p>
          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className={`bg-white hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors`}
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

