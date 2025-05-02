"use client"

import type React from "react"
import { motion } from "framer-motion"
import { User, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  project: {
    id: number
    studentName: string
    year: number
    domain: string
    adviser: string
    domainIcon: React.ReactNode
    color: string
    abstract: string
    keywords?: string[]
    //resources?: { type: string; url: string }[]
  }
  onClick: (project: any) => void
  index: number
}

export default function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card
        className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-t-4 border-transparent hover:border-blue-500"
        onClick={() => onClick(project)}
      >
        <CardHeader className={`pb-3 bg-gradient-to-r ${project.color} text-white`}>
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              {project.domainIcon}
              <CardTitle className="text-lg ml-2">{project.domain}</CardTitle>
            </div>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-white/20">{project.year}</span>
          </div>
        </CardHeader>
        <CardContent className="p-5">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.studentName}</h3>
          <p className="text-sm text-gray-500 mb-4 flex items-center">
            <User className="w-4 h-4 mr-1" />
            Advised by {project.adviser}
          </p>
          <p className="text-gray-600 line-clamp-3 mb-4">{project.abstract}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.keywords &&
              project.keywords.slice(0, 2).map((keyword, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {keyword}
                </span>
              ))}
            {project.keywords && project.keywords.length > 2 && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                +{project.keywords.length - 2} more
              </span>
            )}
          </div>
          {/* <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0 flex items-center">
            View Details
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button> */}
        </CardContent>
      </Card>
    </motion.div>
  )
}

