"use client"

import type React from "react"
import { motion } from "framer-motion"

interface FacultyStatsProps {
  stats: {
    total: number
    professors: number
    associateProfessors: number
    assistantProfessors: number
  }
}

const FacultyStats: React.FC<FacultyStatsProps> = ({ stats }) => {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-4"
          >
            <h3 className="text-4xl font-bold mb-2">{stats.total}</h3>
            <p className="text-blue-100">Total Faculty</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-4"
          >
            <h3 className="text-4xl font-bold mb-2">{stats.professors}</h3>
            <p className="text-blue-100">Professors</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-4"
          >
            <h3 className="text-4xl font-bold mb-2">{stats.associateProfessors}</h3>
            <p className="text-blue-100">Associate Professors</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center p-4"
          >
            <h3 className="text-4xl font-bold mb-2">{stats.assistantProfessors}</h3>
            <p className="text-blue-100">Assistant Professors</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FacultyStats

