"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, ExternalLink, Download, Globe, X, BookText, Users, BookMarked, FileText, AlertCircle } from "lucide-react"

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

interface PublicationDetailProps {
  publication: Publication | null
  onClose: () => void
}

export default function PublicationDetail({ publication, onClose }: PublicationDetailProps) {
  const [pdfError, setPdfError] = useState(false)
  
  if (!publication) return null

  // Safely access publication properties with fallbacks
  const {
    title = "Untitled Publication",
    authors = "Unknown Authors",
    venue = "Unknown Venue",
    year = new Date().getFullYear(),
    type = "journal",
    doi = "",
    citations = 0,
    abstract = "No abstract available.",
    keywords = []
  } = publication;

  const getPublicationTypeIcon = (type: string) => {
    switch (type) {
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

  const getPublicationTypeLabel = (type: string) => {
    switch (type) {
      case "journal":
        return "Journal Article"
      case "conference":
        return "Conference Paper"
      case "book":
        return "Book"
      case "chapter":
        return "Book Chapter"
      default:
        return "Publication"
    }
  }

  const handlePdfDownload = (e: React.MouseEvent) => {
    // Prevent default to avoid navigation if PDF isn't available
    e.preventDefault()
    
    // In a real app, you'd check if the PDF exists before attempting to download
    // For this example, we'll simulate a PDF download error
    setPdfError(true)
    
    // Display a message to the user
    setTimeout(() => setPdfError(false), 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              {getPublicationTypeIcon(type)}
              <span className="text-sm font-medium text-gray-500">{getPublicationTypeLabel(type)}</span>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close dialog"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>

          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Authors</h4>
            <p className="text-gray-800">{authors}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Published In</h4>
              <p className="text-gray-800">{venue}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Year</h4>
              <p className="text-gray-800">{year}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">DOI</h4>
              <a
                href={`https://doi.org/${doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center"
              >
                {doi}
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Citations</h4>
              <p className="text-gray-800">{citations}</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Abstract</h4>
            <p className="text-gray-700 leading-relaxed">{abstract}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Keywords</h4>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, idx) => (
                <span key={idx} className="inline-block px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {pdfError && (
            <div className="flex items-center p-3 mb-4 bg-amber-50 border border-amber-100 rounded-lg text-amber-800">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <p className="text-sm">PDF is not available for this publication.</p>
            </div>
          )}

          <div className="flex justify-end gap-3 mt-8">
            <a
              href={`https://doi.org/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <Globe className="h-4 w-4 mr-2" />
              View Online
            </a>
            <button 
              onClick={handlePdfDownload}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

