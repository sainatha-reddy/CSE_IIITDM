"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function TeachingStats() {
  const stats = [
    { label: "Courses Offered", value: 45, suffix: "+" },
    { label: "Faculty Members", value: 28, suffix: "" },
    { label: "Research Publications", value: 350, suffix: "+" },
    { label: "Student Projects", value: 120, suffix: "+" },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      const intervals = stats.map((stat, index) => {
        const duration = 2000 // 2 seconds for the count animation
        const increment = stat.value / (duration / 16) // 60fps

        let count = 0
        return setInterval(() => {
          count = Math.min(count + increment, stat.value)
          setCounts((prev) => {
            const newCounts = [...prev]
            newCounts[index] = Math.floor(count)
            return newCounts
          })

          if (count >= stat.value) {
            clearInterval(intervals[index])
          }
        }, 16)
      })

      return () => intervals.forEach((interval) => clearInterval(interval))
    }
  }, [isInView, stats])

  return (
    <section className="py-16 bg-[#003366] text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 flex justify-center items-baseline">
                  <span>{counts[index]}</span>
                  <span className="text-blue-300">{stat.suffix}</span>
                </div>
                <p className="text-blue-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

