"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, ChevronDown, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-gradient-to-b from-[#f0f4ff] to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-100 rounded-full opacity-20 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-100 rounded-full opacity-20 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/6 w-12 h-12 bg-blue-500 opacity-10 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-indigo-500 opacity-10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-500 opacity-10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center mb-6 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            <Award className="w-5 h-5 mr-2" />
            <span className="font-medium">Excellence in Student Innovation</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Outstanding Student Projects
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Discover exceptional projects that showcase innovation, technical excellence, and creative problem-solving
            from our talented students.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              Explore Projects
            </Button>
            <Button variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50">
              Submit Your Project
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
              <ChevronDown className="w-8 h-8 text-blue-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

