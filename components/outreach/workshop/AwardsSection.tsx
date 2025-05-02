"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Trophy } from "lucide-react"

// Awards data
const awards = [
  {
    id: 1,
    event: "ACM-ICPC 2014",
    students: ["Sakthi vel", "Siddharth Agarwal", "Saikumar"],
    recognition: "Third in Chennai Region",
    year: 2014,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    event: "ACM-ICPC 2017",
    students: ["Aneesh", "Vikas", "Saiyashovardhan"],
    recognition: "Second in Chennai Region",
    year: 2017,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    event: "ACM-ICPC 2017",
    students: ["Vignesh Sairaj", "Vijayaraghavan", "Sreeraj"],
    recognition: "Cleared Chennai Region and Participated in Regionals",
    year: 2017,
    image: "/placeholder.svg?height=200&width=300" ,
  },
  {
    id: 4,
    event: "Google Kickstart",
    students: ["Aneesh D H (COE16)"],
    recognition: "Placed in the 13th Rank in India and 49th Overall",
    year: 2018,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    event: "ABACUS, CEG",
    students: ["Aneesh DH", "M.A. Sankar", "Vikas Venkatraman"],
    recognition: "Secured 2nd place",
    year: 2018,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    event: "ACM ICPC Chennai Provincial Programming Contest",
    students: ["Aneesh D H", "Vikas Venkatraman", "Yashovardhan"],
    recognition: "Won 3rd place",
    year: 2018,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function AwardsSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div ref={ref}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Awards & Recognitions</h2>
      <p className="text-gray-700 mb-8">
        Students of IIITDM actively participate in extra curricular activities and represent the institute in various
        events organized by other centrally funded institutes and scientific bodies.
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {awards.map((award) => (
          <motion.div
            key={award.id}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div className="relative h-40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-red-600/20 z-10"></div>
              <img
                src={award.image || "/placeholder.svg?height=200&width=300"}
                alt={award.event}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full z-20">
                {award.year}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                <h3 className="text-lg font-bold">{award.event}</h3>
              </div>
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-700 mb-1">Students:</div>
                <div className="flex flex-wrap gap-1">
                  {award.students.map((student, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {student}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-r-lg">
                <p className="text-sm text-gray-700">{award.recognition}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

