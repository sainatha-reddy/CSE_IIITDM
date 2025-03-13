"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import PublicationCard from "./PublicationCard"

interface Publication {
  id: number
  title: string
  authors: string
  venue: string
  year: number
  type: string
  doi: string
  citations: number
  abstract: string
  keywords: string[]
}

interface PublicationsListProps {
  publications: Publication[]
  onSelectPublication: (publication: Publication) => void
}

export default function PublicationsList({ publications, onSelectPublication }: PublicationsListProps) {
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
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Publications
          {publications.length > 0 && (
            <span className="ml-2 text-sm font-normal text-gray-500">({publications.length})</span>
          )}
        </h3>
      </div>

      {publications.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 mx-auto text-gray-300 mb-4" />
          <h4 className="text-lg font-medium text-gray-700 mb-2">No publications found</h4>
          <p className="text-gray-500 max-w-md mx-auto">Try adjusting your search or filters to find more results.</p>
        </div>
      ) : (
        <motion.ul variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
          {publications.map((publication) => (
            <motion.li key={publication.id} variants={itemVariants}>
              <PublicationCard publication={publication} onClick={() => onSelectPublication(publication)} />
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  )
}

