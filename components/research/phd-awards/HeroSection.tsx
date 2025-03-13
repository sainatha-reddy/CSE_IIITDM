"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen, Users } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-10"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500 opacity-10"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-purple-500 opacity-10"></div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-16 h-16 rounded-lg bg-blue-600 opacity-5"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-20 h-20 rounded-full bg-purple-600 opacity-5"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-12 h-12 rounded-lg bg-indigo-600 opacity-5"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center justify-center p-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium">
                Research Excellence
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PhD Graduates
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Meet our accomplished PhD graduates who have made significant contributions to the field of Computer
              Science and Engineering through their groundbreaking research.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">15+</h3>
                <p className="text-sm text-gray-600">PhD Graduates</p>
              </motion.div>

              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-100 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">10+</h3>
                <p className="text-sm text-gray-600">Research Areas</p>
              </motion.div>

              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">6+</h3>
                <p className="text-sm text-gray-600">Faculty Supervisors</p>
              </motion.div>

              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">70%</h3>
                <p className="text-sm text-gray-600">In Academia</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

