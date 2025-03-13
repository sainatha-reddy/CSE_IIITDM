"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, GraduationCap, MapPin } from "lucide-react"
import type { AlumniInterface } from "./AlumniData"

interface AlumniDetailProps {
  alumni: AlumniInterface | null
  isOpen: boolean
  onClose: () => void
}

export default function AlumniDetail({ alumni, isOpen, onClose }: AlumniDetailProps) {
  if (!alumni) return null

  return (
    <AnimatePresence>
      {isOpen && (
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
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gray-100 border-2 border-blue-100 mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                    <Image src={alumni.image || "/placeholder.svg"} alt={alumni.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">{alumni.name}</h2>
                    <div className="flex items-center text-gray-500 mb-2">
                      <GraduationCap className="h-4 w-4 mr-1" />
                      <span>Class of {alumni.graduationYear}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{alumni.currentPosition}</p>
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{alumni.country}</span>
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Education</h3>
                  <div className="mb-6">
                    <div className="flex items-start mb-3">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-600 text-xs">•</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">B.Tech in Computer Science and Engineering</p>
                        <p className="text-gray-600">IIITDM Kancheepuram, India</p>
                        <p className="text-sm text-gray-500">2009 - {alumni.graduationYear}</p>
                      </div>
                    </div>
                    {alumni.university && (
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-blue-600 text-xs">•</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">MS/PhD in Computer Science</p>
                          <p className="text-gray-600">{alumni.university}</p>
                          <p className="text-sm text-gray-500">{alumni.graduationYear} - Present</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {alumni.company && (
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Professional Experience</h3>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-green-600 text-xs">•</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Software Engineer</p>
                          <p className="text-gray-600">{alumni.company}</p>
                          <p className="text-sm text-gray-500">Present</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h3>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">Email:</span> {alumni.name.toLowerCase().replace(/\s/g, ".")}
                      @alumni.iiitdm.ac.in
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">LinkedIn:</span> linkedin.com/in/
                      {alumni.name.toLowerCase().replace(/\s/g, "-")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

