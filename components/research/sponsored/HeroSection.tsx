"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <motion.div
      className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full opacity-10">
          {/* Background pattern */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${200 + (i * 50)}px`,
                height: `${200 + (i * 50)}px`,
                left: `${20 + (i * 15)}%`,
                top: `${10 + (i * 15)}%`,
                opacity: 0.2 + (i * 0.05),
                transform: `scale(${0.8 + (i * 0.1)})`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Sponsored Research
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-3xl mb-8 text-blue-100"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Faculty members are actively engaged in cutting edge research in frontier areas of computer science. Our
          research is funded by leading organizations such as MEITY, DST and NBHM.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-800 rounded-md font-medium shadow-lg hover:bg-blue-50 transition-all duration-300 group"
          >
            View Research Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

