"use client"

import { motion } from "framer-motion"
import { Users, Briefcase, Building2, Wrench } from "lucide-react"

export default function StaffStats() {
  const stats = [
    {
      title: "Technical Staff",
      value: "10+",
      icon: <Users className="h-6 w-6 text-[#003366]" />,
      description: "Dedicated technical professionals",
    },
    {
      title: "Departments",
      value: "4",
      icon: <Building2 className="h-6 w-6 text-[#003366]" />,
      description: "Supporting multiple disciplines",
    },
    {
      title: "Experience",
      value: "50+",
      icon: <Briefcase className="h-6 w-6 text-[#003366]" />,
      description: "Years of combined experience",
    },
    {
      title: "Laboratories",
      value: "12",
      icon: <Wrench className="h-6 w-6 text-[#003366]" />,
      description: "State-of-the-art facilities",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
        >
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-50 rounded-lg mr-3">{stat.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{stat.title}</h3>
          </div>
          <div className="text-3xl font-bold text-[#003366] mb-2">{stat.value}</div>
          <p className="text-sm text-gray-500">{stat.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

