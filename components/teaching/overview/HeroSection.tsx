"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GraduationCap, BookOpen, Users, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full opacity-20 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-100 rounded-full opacity-20 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Department of Computer Science & Engineering
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#003366]">Excellence in</span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Teaching
              </span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our teaching methodology combines theoretical knowledge with practical application, fostering critical
              thinking and innovation. We prepare students for the challenges of the ever-evolving technology landscape.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { icon: <GraduationCap className="h-6 w-6" />, value: "25+", label: "Faculty Members" },
                { icon: <BookOpen className="h-6 w-6" />, value: "40+", label: "Courses Offered" },
                { icon: <Users className="h-6 w-6" />, value: "500+", label: "Students" },
                { icon: <Award className="h-6 w-6" />, value: "95%", label: "Placement Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm text-center"
                >
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-[#003366]">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#003366] hover:bg-[#00264d] text-white">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white"
              >
                Meet Our Faculty
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/placeholder.svg?height=500&width=600" alt="IIITDM Teaching" fill className="object-cover" />

              {/* Overlay with pattern */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/70 to-transparent mix-blend-multiply"></div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 right-10 bg-white p-3 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
              >
                <GraduationCap className="h-8 w-8 text-[#003366]" />
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-10 bg-white p-3 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 1 }}
              >
                <BookOpen className="h-8 w-8 text-[#003366]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

