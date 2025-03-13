"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Calendar, GraduationCap, ArrowUpRight } from "lucide-react"
import type { AlumniProfile } from "./AlumniData"

interface AlumniCardProps {
  alumni: AlumniProfile
  index: number
  viewMode: "grid" | "list"
  onViewProfile: (id: number) => void
}

export default function AlumniCard({ alumni, index, viewMode, onViewProfile }: AlumniCardProps) {
  if (viewMode === "grid") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
      >
        <div className="relative h-48 bg-gradient-to-br from-blue-400 to-indigo-600">
          <Image
            src={alumni.image || "/placeholder.svg"}
            alt={alumni.name}
            fill
            className="object-cover opacity-90 hover:opacity-100 transition-opacity"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white text-sm font-medium">Class of {alumni.graduatingYear}</p>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{alumni.name}</h3>
          <p className="text-gray-600 mb-3">{alumni.currentPosition}</p>

          <div className="flex items-center text-gray-500 text-sm mb-2">
            <MapPin size={14} className="mr-1" />
            <span>{alumni.location}</span>
          </div>

          <div className="flex items-center text-gray-500 text-sm mb-3">
            <GraduationCap size={14} className="mr-1" />
            <span>
              {alumni.degree} in {alumni.field}
            </span>
          </div>

          {alumni.achievements && (
            <div className="mb-3">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {alumni.achievements}
              </span>
            </div>
          )}

          <button
            onClick={() => onViewProfile(alumni.id)}
            className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
          >
            View Profile
            <ArrowUpRight size={14} className="ml-1" />
          </button>
        </div>
      </motion.div>
    )
  } else {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 lg:w-1/5 relative h-40 md:h-auto bg-gradient-to-br from-blue-400 to-indigo-600">
            <Image
              src={alumni.image || "/placeholder.svg"}
              alt={alumni.name}
              fill
              className="object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="p-6 md:w-3/4 lg:w-4/5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{alumni.name}</h3>
                <p className="text-gray-600 mb-3">{alumni.currentPosition}</p>

                <div className="flex flex-wrap gap-4 mb-3">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>Class of {alumni.graduatingYear}</span>
                  </div>

                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin size={14} className="mr-1" />
                    <span>{alumni.location}</span>
                  </div>

                  <div className="flex items-center text-gray-500 text-sm">
                    <GraduationCap size={14} className="mr-1" />
                    <span>
                      {alumni.degree} in {alumni.field}
                    </span>
                  </div>
                </div>

                {alumni.achievements && (
                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {alumni.achievements}
                    </span>
                  </div>
                )}
              </div>

              <button
                onClick={() => onViewProfile(alumni.id)}
                className="mt-4 md:mt-0 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
              >
                View Profile
                <ArrowUpRight size={14} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
}

