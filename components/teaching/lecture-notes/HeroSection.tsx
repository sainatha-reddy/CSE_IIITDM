"use client"

import { motion } from "framer-motion"
import { BookOpen, FileText, Download, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full opacity-20 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-100 rounded-full opacity-20 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 opacity-10">
          <div className="absolute w-full h-full border-8 border-blue-500 rounded-lg transform rotate-12"></div>
          <div className="absolute w-full h-full border-8 border-indigo-500 rounded-lg transform -rotate-6"></div>
        </div>

        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 opacity-10">
          <div className="absolute w-full h-full border-8 border-blue-500 rounded-full"></div>
          <div className="absolute w-3/4 h-3/4 top-1/8 left-1/8 border-8 border-indigo-500 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-2xl inline-block"
            >
              <BookOpen size={40} className="text-white" />
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Lecture Notes
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 leading-relaxed mb-8"
          >
            Access comprehensive lecture notes, problem sets, and learning resources from our distinguished faculty
            members to enhance your academic journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          >
            {/* <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <FileText className="mr-2 h-5 w-5" />
              Browse All Notes
            </Button>
            <Button size="lg" variant="outline" className="border-blue-200 text-blue-600">
              <Download className="mr-2 h-5 w-5" />
              Download Resources
            </Button> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="max-w-2xl mx-auto relative"
          >
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for lecture notes, courses, or instructors..."
                className="pl-12 py-6 rounded-xl shadow-md border-blue-100 focus:border-blue-300"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="mt-2 text-sm text-gray-500 flex justify-center gap-2">
              <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full">Data Structures</span>
              <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full">Algorithms</span>
              <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full">Machine Learning</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="text-white">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

