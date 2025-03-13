"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Award, Users } from "lucide-react"

const stats = [
  { id: 1, value: 8, label: "Workshops", icon: <Calendar className="h-6 w-6" /> },
  { id: 2, value: 6, label: "Awards", icon: <Award className="h-6 w-6" /> },
  { id: 3, value: 589, label: "Participants", icon: <Users className="h-6 w-6" /> },
]

export default function Statistics() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={statsVariants}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">{stat.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800">{stat.value}+</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

