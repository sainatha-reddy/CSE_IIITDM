"use client"

import { motion } from "framer-motion"
import { Award, DollarSign, Calendar, Users } from "lucide-react"
import { calculateStatistics } from "./ProjectsData"

export default function Statistics() {
  const stats = calculateStatistics()

  return (
    <motion.div
      className="py-12 bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm border border-blue-200"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-blue-600 font-medium">Total Projects</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-1">{stats.totalProjects}</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-sm border border-green-200"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-green-600 font-medium">Total Funding</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-1">₹{stats.totalFunding.toFixed(2)} Lakhs</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl shadow-sm border border-amber-200"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start">
              <div className="bg-amber-100 p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-amber-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-amber-600 font-medium">Ongoing Projects</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-1">{stats.ongoingProjects}</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-sm border border-purple-200"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-purple-600 font-medium">Completed Projects</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-1">{stats.completedProjects}</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

