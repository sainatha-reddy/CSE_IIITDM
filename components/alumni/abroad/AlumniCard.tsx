"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GraduationCap, MapPin, ExternalLink } from "lucide-react"
import type { AlumniInterface } from "./AlumniData"

interface AlumniCardProps {
  alumni: AlumniInterface
  index: number
  viewMode: "grid" | "list"
  onClick: () => void
}

export default function AlumniCard({ alumni, index, viewMode, onClick }: AlumniCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`${
        viewMode === "grid"
          ? "bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300"
          : "bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 flex"
      }`}
      //onClick={onClick}
    >
      {viewMode === "grid" ? (
        // Grid view
        <>
          <div className="p-4">
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100 border-2 border-blue-100">
                <Image src={alumni.image || "/placeholder.svg"} alt={alumni.name} fill className="object-cover" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-1">{alumni.name}</h3>
            <div className="flex items-center justify-center text-sm text-gray-500 mb-3">
              <GraduationCap className="h-4 w-4 mr-1" />
              <span>Class of {alumni.graduationYear}</span>
            </div>
            <div className="text-sm text-gray-600 text-center mb-3">{alumni.currentPosition}</div>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{alumni.country}</span>
            </div>
          </div>
          {/* <div className="bg-gray-50 px-4 py-3 flex justify-center">
            <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors flex items-center">
              View Details
              <ExternalLink className="h-3 w-3 ml-1" />
            </button>
          </div> */}
        </>
      ) : (
        // List view
        <>
          <div className="flex-shrink-0 w-16 sm:w-24 flex items-center justify-center p-2">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-gray-100 border-2 border-blue-100">
              <Image src={alumni.image || "/placeholder.svg"} alt={alumni.name} fill className="object-cover" />
            </div>
          </div>
          <div className="flex-grow p-4">
            <h3 className="text-lg font-semibold text-gray-800">{alumni.name}</h3>
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <GraduationCap className="h-4 w-4 mr-1" />
              <span>Class of {alumni.graduationYear}</span>
            </div>
            <div className="text-sm text-gray-600 mb-1">{alumni.currentPosition}</div>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{alumni.country}</span>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center pr-4">
            <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors flex items-center">
              View
              <ExternalLink className="h-3 w-3 ml-1" />
            </button>
          </div>
        </>
      )}
    </motion.div>
  )
}

