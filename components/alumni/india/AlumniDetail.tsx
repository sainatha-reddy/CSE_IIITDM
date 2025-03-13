"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import type { AlumniProfile } from "./AlumniData"

interface AlumniDetailProps {
  alumni: AlumniProfile | null
  onClose: () => void
}

export default function AlumniDetail({ alumni, onClose }: AlumniDetailProps) {
  if (!alumni) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48 bg-gradient-to-br from-blue-400 to-indigo-600">
          <Image src={alumni.image || "/placeholder.svg"} alt={alumni.name} fill className="object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-2 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{alumni.name}</h2>
          <p className="text-gray-600 mb-6">{alumni.currentPosition}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Education</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-gray-900">
                    {alumni.degree} in {alumni.field}
                  </p>
                  <p className="text-gray-600">{alumni.institution}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-gray-900">B.Tech in Computer Science</p>
                  <p className="text-gray-600">IIITDM Kancheepuram</p>
                  <p className="text-gray-500 text-sm">Class of {alumni.graduatingYear}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin size={16} className="text-gray-400 mr-2" />
                  <span className="text-gray-600">{alumni.location}, India</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400 mr-2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href="#" className="text-blue-600 hover:underline">
                    {alumni.email || `${alumni.name.toLowerCase().replace(/\s+/g, ".")}@example.com`}
                  </a>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400 mr-2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <a
                    href={alumni.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {alumni.achievements && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Achievements</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">{alumni.achievements}</p>
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">About</h3>
            <p className="text-gray-600">
              {alumni.bio ||
                `${alumni.name} graduated from IIITDM Kancheepuram in ${alumni.graduatingYear} and is currently
                pursuing ${alumni.degree} in ${alumni.field} at ${alumni.institution}.
                ${alumni.company ? ` Currently working at ${alumni.company}.` : ""}`}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

