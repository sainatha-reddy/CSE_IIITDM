"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"
import ProjectCard from "./ProjectCard"
import { projects } from "./ProjectsData"

interface ProjectsListProps {
  activeTab: string
  searchTerm: string
  onOpenProjectModal: (project: any) => void
}

export default function ProjectsList({ activeTab, searchTerm, onOpenProjectModal }: ProjectsListProps) {
  const filteredProjects = projects.filter((project) => {
    const matchesTab = activeTab === "all" || project.type === activeTab
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.pi && project.pi.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (project.sponsor && project.sponsor.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesTab && matchesSearch
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <Search size={24} className="text-gray-500 dark:text-gray-400" />
        </div>
        <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">No projects found</h3>
        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
        <button
          onClick={() => {
            // Reset filters functionality would be implemented here
          }}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Reset Filters
        </button>
      </div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {filteredProjects.map((project) => (
        <motion.div key={project.id} variants={itemVariants}>
          <ProjectCard project={project} onOpenProjectModal={onOpenProjectModal} />
        </motion.div>
      ))}
    </motion.div>
  )
}

