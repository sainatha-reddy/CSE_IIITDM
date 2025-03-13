"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, MapPin } from "lucide-react"

export default function GlobalImpact() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Impact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our alumni are making significant contributions across the globe, from leading tech companies to prestigious
            academic institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="h-40 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
              <Briefcase className="h-16 w-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Industry Leaders</h3>
              <p className="text-gray-600 mb-4">
                Our alumni work at top tech companies like Facebook, Amazon, Apple, and more, contributing to
                cutting-edge technologies and innovations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Facebook</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Amazon</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Apple</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Yahoo</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Intel</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="h-40 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
              <GraduationCap className="h-16 w-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Academic Excellence</h3>
              <p className="text-gray-600 mb-4">
                Many of our alumni pursue advanced degrees at prestigious universities worldwide, contributing to
                research and academic advancement.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">Columbia</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">Georgia Tech</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">UC San Diego</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">Cambridge</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">ANU</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="h-40 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
              <MapPin className="h-16 w-16 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Presence</h3>
              <p className="text-gray-600 mb-4">
                Our alumni network spans across continents, with graduates making an impact in the USA, Europe,
                Australia, and beyond.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">USA</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Netherlands</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">UK</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Australia</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Sweden</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

