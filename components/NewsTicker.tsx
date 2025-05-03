"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"

const news = [
  "Graduate Forum Best Paper Award at COMSNETS 2025 - Mr. Rajasekhar Dasari (CS22D0003)",
  "MS Admit at Northwestern University - NIMMAGADDA SREE DHYUTI (CED 19)",
  "MS Admit at Cornell University - Dikshanya (CED17)",
  "MS Admit at University of Massachusetts Amherst - Susheel (COE19)",
  "Direct-PhD Offer at IIT Madras - Rahul C S (COE18)",
]

export default function NewsTicker() {
  const [currentNews, setCurrentNews] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isMounted, setIsMounted] = useState(false) // Track if the component has mounted

  // Set isMounted to true after component mounts
  useEffect(() => {
    setIsMounted(true)
  }, [])

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

  // Ensure the component renders only on the client-side
  if (!isMounted) {
    return null
  }

  return (
    <div className="bg-[#2C4A87] py-2 relative z-40"> {/* Lower z-index than navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-grow">
            <span className="font-bold mr-4 bg-[#6495ED] px-3 py-1 rounded text-white">Latest Achievements:</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentNews}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-grow text-white"
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
              aria-label="Previous achievement"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="text-white/70 hover:text-white transition-colors duration-300 focus:outline-none"
              aria-label="Next achievement"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
