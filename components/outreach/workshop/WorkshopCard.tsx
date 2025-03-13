"use client"

import { motion } from "framer-motion"
import { Clock, User, Users, type CodepenIcon as ReactNode } from "lucide-react"

interface WorkshopCardProps {
  id: number
  title: string
  description: string
  date: string
  organizers: string[]
  participants: number
  category: string
  image: string
  icon: ReactNode
  index: number
  isEven: boolean
}

export default function WorkshopCard({
  id,
  title,
  description,
  date,
  organizers,
  participants,
  category,
  image,
  icon,
  index,
  isEven,
}: WorkshopCardProps) {
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
    <motion.div
      variants={itemVariants}
      className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      <div className="md:w-1/2 mb-8 md:mb-0">
        <div
          className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 ${
            isEven ? "md:ml-8" : "md:mr-8"
          }`}
        >
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 z-10"></div>
            <img
              src={image || "/placeholder.svg?height=400&width=600"}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">{icon}</div>
              <span className="text-sm font-medium text-blue-600">{category}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-2" /> {date}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <User className="h-4 w-4 mr-2" /> {organizers.join(", ")}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Users className="h-4 w-4 mr-2" /> {participants} participants
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 relative">
        <div
          className={`absolute top-0 ${
            isEven ? "md:right-0 md:-mr-3.5" : "md:left-0 md:-ml-3.5"
          } h-7 w-7 rounded-full bg-blue-600 border-4 border-white shadow-md z-10`}
        ></div>
      </div>
    </motion.div>
  )
}

