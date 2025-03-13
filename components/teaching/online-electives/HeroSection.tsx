"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Globe, BookOpen, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="relative py-5 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full opacity-20 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-100 rounded-full opacity-20 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>


        {/* Floating icons */}
        <motion.div
          className="absolute top-1/4 left-1/6 text-blue-300 opacity-20"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
        >
          <GraduationCap size={60} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/6 text-indigo-300 opacity-20"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut", delay: 1 }}
        >
          <Globe size={70} />
        </motion.div>
        <motion.div
          className="absolute top-2/3 left-1/3 text-purple-300 opacity-20"
          animate={{ y: [0, 10, 0], rotate: [0, 3, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 7, ease: "easeInOut", delay: 2 }}
        >
          <BookOpen size={50} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 text-teal-300 opacity-20"
          animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "easeInOut", delay: 3 }}
        >
          <Award size={55} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-100 text-[#003366] font-medium text-sm">
              Expand Your Knowledge
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#003366] via-[#0056b3] to-[#6495ED] bg-clip-text text-transparent">
              Online Electives
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Enhance your academic journey with our curated selection of online courses from leading platforms,
              designed to complement your core curriculum.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-[#003366] hover:bg-[#00264d] text-white">
                Explore Courses
              </Button>
              <Button size="lg" variant="outline" className="border-[#003366] text-[#003366] hover:bg-blue-50">
                How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "40+", label: "Courses" },
                { value: "4", label: "Tracks" },
                { value: "1000+", label: "Students" },
                { value: "NPTEL", label: "Partnership" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-[#003366]">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl blur-xl opacity-70 -z-10"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Online Learning Illustration"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />

                {/* Floating badges */}
                <motion.div
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 flex items-center space-x-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <GraduationCap className="text-[#003366] h-5 w-5" />
                  <span className="text-sm font-medium text-[#003366]">Learn Anywhere</span>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 flex items-center space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Award className="text-[#003366] h-5 w-5" />
                  <span className="text-sm font-medium text-[#003366]">Earn Certificates</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

