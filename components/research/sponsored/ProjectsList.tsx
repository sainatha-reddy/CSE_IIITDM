"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import ProjectDetail from "./ProjectDetail"
import Pagination from "./Pagination"
import {
  type ResearchProject,
  getProjectsByCategory,
  getProjectsByInvestigator,
  getProjectsBySponsor,
} from "./ProjectsData"

interface ProjectsListProps {
  activeFilter: "all" | "ongoing" | "completed"
  selectedSponsor: string
  selectedInvestigator: string
}

export default function ProjectsList({ activeFilter, selectedSponsor, selectedInvestigator }: ProjectsListProps) {
  const [visibleProjects, setVisibleProjects] = useState<ResearchProject[]>([])
  const [activeProject, setActiveProject] = useState<ResearchProject | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6
  const [totalPages, setTotalPages] = useState(1)
  const [paginatedProjects, setPaginatedProjects] = useState<ResearchProject[]>([])

  // Filter projects based on active filter, sponsor, and investigator
  useEffect(() => {
    let filteredProjects = getProjectsByCategory(activeFilter)

    if (selectedSponsor) {
      filteredProjects = getProjectsBySponsor(selectedSponsor).filter(
        (project) => activeFilter === "all" || project.category === activeFilter,
      )
    }

    if (selectedInvestigator) {
      filteredProjects = getProjectsByInvestigator(selectedInvestigator).filter(
        (project) =>
          (activeFilter === "all" || project.category === activeFilter) &&
          (!selectedSponsor || project.sponsor.includes(selectedSponsor)),
      )
    }

    setVisibleProjects(filteredProjects)
    setTotalPages(Math.ceil(filteredProjects.length / projectsPerPage))
    setCurrentPage(1) // Reset to first page when filters change
  }, [activeFilter, selectedSponsor, selectedInvestigator])

  // Update paginated projects when page changes
  useEffect(() => {
    const startIndex = (currentPage - 1) * projectsPerPage
    const endIndex = startIndex + projectsPerPage
    setPaginatedProjects(visibleProjects.slice(startIndex, endIndex))
  }, [visibleProjects, currentPage])

  // Handle project click
  const handleProjectClick = (project: ResearchProject) => {
    setActiveProject(project)
    setIsModalOpen(true)
  }

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of projects section
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of sponsored research projects that are advancing knowledge in various domains of
            computer science.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onClick={handleProjectClick} />
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500 text-lg">No projects found matching your filter criteria.</p>
          </motion.div>
        )}

        {/* Pagination */}
        {visibleProjects.length > projectsPerPage && (
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        )}
      </div>

      {/* Project Detail Modal */}
      {isModalOpen && activeProject && <ProjectDetail project={activeProject} onClose={closeModal} />}
    </div>
  )
}

