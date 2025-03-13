"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"

const news = [
  "CS Department receives $5M grant for AI research",
  "New Quantum Computing course launched for Fall 2023",
  "Students win first place in national coding competition",
  "Professor Johnson elected to National Academy of Engineering",
]

export default function NewsTicker() {
  const [currentNews, setCurrentNews] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentNews((prev) => (prev + 1) % news.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [isPaused])

  const handlePrev = () => {
    setCurrentNews((prev) => (prev - 1 + news.length) % news.length)
  }

  const handleNext = () => {
    setCurrentNews((prev) => (prev + 1) % news.length)
  }

  return (
    <div className="bg-[#003366] text-white py-3 overflow-hidden relative group">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-grow">
            <span className="font-bold mr-4 bg-[#6495ED] px-3 py-1 rounded text-white">Latest:</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentNews}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-grow"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {news[currentNews]}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="text-white/70 hover:text-white transition-colors duration-300 focus:outline-none"
              aria-label="Previous news"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="text-white/70 hover:text-white transition-colors duration-300 focus:outline-none"
              aria-label="Next news"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

