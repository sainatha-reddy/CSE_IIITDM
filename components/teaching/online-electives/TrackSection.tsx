"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import CourseCard from "./CourseCard"

interface TrackProps {
  name: string
  icon: React.ReactNode
  color: string
  description: string
  courses: any[]
}

export default function TrackSection({ track, index }: { track: TrackProps; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Alternate background colors for tracks
  const bgClass = index % 2 === 1 ? "bg-gray-50" : "bg-white"

  return (
    <section ref={ref} className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <div
              className={`w-16 h-16 rounded-full bg-gradient-to-r ${track.color} flex items-center justify-center text-white mb-4`}
            >
              {track.icon}
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-3 text-[#003366]">{track.name}</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">{track.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {track.courses.map((course, courseIndex) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: courseIndex * 0.1 }}
              className="h-full"
            >
              <CourseCard
                id={course.id}
                title={course.title}
                provider={course.provider}
                description={course.description}
                icon={course.icon}
                duration={course.duration}
                level={course.level}
                students={course.students}
                rating={course.rating}
                tags={course.tags}
                featured={course.featured}
                bgColor={track.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

