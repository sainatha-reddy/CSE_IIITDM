"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

interface StatisticsProps {
  totalAlumni: number
  alumniByYear: { year: number; count: number }[]
  alumniByInstitution: { institution: string; count: number }[]
  alumniByDegree: { degree: string; count: number }[]
}

export default function AlumniStatistics({
  totalAlumni,
  alumniByYear,
  alumniByInstitution,
  alumniByDegree,
}: StatisticsProps) {
  const statsRef = useRef<HTMLDivElement>(null)
  const [isStatsVisible, setIsStatsVisible] = useState(false)

  // Check if stats section is visible on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStatsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  return (
    <section ref={statsRef} className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isStatsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Alumni Statistics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our alumni have made significant contributions across various prestigious institutions in India. Here's a
            breakdown of our alumni distribution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Alumni by Year */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStatsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alumni by Graduating Year</h3>
            <div className="space-y-3">
              {alumniByYear.map(({ year, count }) => (
                <div key={year} className="relative">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Class of {year}</span>
                    <span className="text-gray-600">{count} alumni</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isStatsVisible ? { width: `${(count / totalAlumni) * 100}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Alumni by Top Institutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStatsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Institutions</h3>
            <div className="space-y-3">
              {alumniByInstitution.map(({ institution, count }) => (
                <div key={institution} className="relative">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{institution}</span>
                    <span className="text-gray-600">{count} alumni</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isStatsVisible ? { width: `${(count / totalAlumni) * 100}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Alumni by Degree */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStatsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alumni by Degree</h3>
            <div className="space-y-3">
              {alumniByDegree.map(({ degree, count }) => (
                <div key={degree} className="relative">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{degree}</span>
                    <span className="text-gray-600">{count} alumni</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isStatsVisible ? { width: `${(count / totalAlumni) * 100}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

