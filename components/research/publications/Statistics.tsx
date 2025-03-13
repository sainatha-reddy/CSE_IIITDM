"use client"

import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

interface StatisticsProps {
  publicationsByYear: { year: number; count: number }[]
  publicationsByType: { type: string; count: number }[]
}

export default function Statistics({ publicationsByYear, publicationsByType }: StatisticsProps) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

  const getPublicationTypeLabel = (type: string) => {
    switch (type) {
      case "journal":
        return "Journal Articles"
      case "conference":
        return "Conference Papers"
      case "book":
        return "Books"
      case "chapter":
        return "Book Chapters"
      default:
        return type
    }
  }

  const formattedTypeData = publicationsByType.map((item) => ({
    ...item,
    name: getPublicationTypeLabel(item.type),
  }))

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Publication Statistics</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="h-80"
        >
          <h4 className="text-lg font-medium text-gray-700 mb-4">Publications by Year</h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={publicationsByYear} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip
                formatter={(value) => [`${value} publications`, "Count"]}
                labelFormatter={(label) => `Year: ${label}`}
              />
              <Bar dataKey="count" fill="#3B82F6" name="Publications" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="h-80"
        >
          <h4 className="text-lg font-medium text-gray-700 mb-4">Publications by Type</h4>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={formattedTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
                nameKey="name"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {formattedTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} publications`, "Count"]} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  )
}

