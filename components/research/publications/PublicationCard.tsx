"use client"

import { motion } from "framer-motion"
import { BookOpen, Calendar, Award, BookText, Users, FileText, BookMarked } from "lucide-react"

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

interface PublicationCardProps {
  publication: Publication
  onClick: () => void
}

export default function PublicationCard({ publication, onClick }: PublicationCardProps) {
  // Error boundary to catch any rendering issues
  try {
    // Safely access publication properties with fallbacks
    const {
      title = "Untitled Publication",
      authors = "Unknown Authors",
      venue = "Unknown Venue",
      year = new Date().getFullYear(),
      type = "journal",
      citations = 0,
      keywords = []
    } = publication || {};

    const getPublicationTypeIcon = (type: string) => {
      switch (type?.toLowerCase()) {
        case "journal":
          return <BookText className="h-5 w-5 text-blue-500" />
        case "conference":
          return <Users className="h-5 w-5 text-green-500" />
        case "book":
          return <BookOpen className="h-5 w-5 text-purple-500" />
        case "chapter":
          return <BookMarked className="h-5 w-5 text-orange-500" />
        default:
          return <FileText className="h-5 w-5 text-gray-500" />
      }
    }

    return (
      <motion.div
        whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
        className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow bg-white hover:bg-gray-50 cursor-pointer"
        onClick={onClick}
      >
        <div className="flex items-start gap-4">
          <div className="mt-1 flex-shrink-0">{getPublicationTypeIcon(type)}</div>
          <div className="flex-grow">
            <h4 className="text-lg font-medium text-gray-800 mb-2 leading-tight">{title}</h4>
            <p className="text-gray-600 mb-3">{authors}</p>

            <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm">
              <span className="text-gray-500 flex items-center">
                <BookOpen className="h-4 w-4 mr-1 text-gray-400" />
                {venue}
              </span>
              <span className="text-gray-500 flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                {year}
              </span>
              <span className="text-gray-500 flex items-center">
                <Award className="h-4 w-4 mr-1 text-gray-400" />
                {citations} citations
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {Array.isArray(keywords) && keywords.slice(0, 3).map((keyword, idx) => (
                <span key={idx} className="inline-block px-2 py-1 rounded-full text-xs bg-blue-50 text-blue-600">
                  {keyword}
                </span>
              ))}
              {Array.isArray(keywords) && keywords.length > 3 && (
                <span className="inline-block px-2 py-1 rounded-full text-xs bg-gray-50 text-gray-600">
                  +{keywords.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    )
  } catch (error) {
    console.error("Error rendering publication card:", error)
    return (
      <div className="border border-red-100 rounded-xl p-5 bg-red-50">
        <p className="text-red-600">Unable to display this publication. Please try again later.</p>
      </div>
    )
  }
}

