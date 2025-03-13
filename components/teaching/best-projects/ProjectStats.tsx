"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Cpu, MousePointer, Database, FileCode, BrainCircuit, LineChart, ImageIcon, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// Domain data
const domains = [
  {
    name: "Computer Architecture",
    value: "Computer Architecture",
    icon: <Cpu className="w-5 h-5" />,
    count: 2,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Human Computer Interaction",
    value: "Human Computer Interaction",
    icon: <MousePointer className="w-5 h-5" />,
    count: 2,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Datamining",
    value: "Datamining",
    icon: <Database className="w-5 h-5" />,
    count: 1,
    color: "from-amber-500 to-amber-600",
  },
  {
    name: "Graph Algorithms",
    value: "Graph Algorithms",
    icon: <FileCode className="w-5 h-5" />,
    count: 1,
    color: "from-green-500 to-green-600",
  },
  {
    name: "Machine Learning",
    value: "Machine Learning",
    icon: <BrainCircuit className="w-5 h-5" />,
    count: 3,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    name: "Data Analytics",
    value: "Data Analytics",
    icon: <LineChart className="w-5 h-5" />,
    count: 2,
    color: "from-cyan-500 to-cyan-600",
  },
  {
    name: "Data Science",
    value: "Data Science",
    icon: <Database className="w-5 h-5" />,
    count: 1,
    color: "from-amber-500 to-amber-600",
  },
  {
    name: "Image Processing",
    value: "Image Processing",
    icon: <ImageIcon className="w-5 h-5" />,
    count: 1,
    color: "from-rose-500 to-rose-600",
  },
]

// Year data
const years = [
  { name: "2021", value: 2021, count: 2 },
  { name: "2020", value: 2020, count: 2 },
  { name: "2019", value: 2019, count: 2 },
  { name: "2018", value: 2018, count: 1 },
  { name: "2017", value: 2017, count: 1 },
  { name: "2016", value: 2016, count: 1 },
  { name: "2015", value: 2015, count: 1 },
  { name: "2014", value: 2014, count: 1 },
  { name: "2013", value: 2013, count: 1 },
]

export default function ProjectStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Calculate total projects
  const totalProjects = domains.reduce((sum, domain) => sum + domain.count, 0)

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {/* Domain Distribution */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Card className="h-full border-none shadow-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardTitle className="text-xl">Projects by Domain</CardTitle>
            <CardDescription className="text-blue-100">
              Distribution of projects across different domains
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 bg-gradient-to-b from-blue-50 to-white">
            <div className="space-y-4">
              {domains.map((domain) => {
                const percentage = Math.round((domain.count / totalProjects) * 100)

                return (
                  <div key={domain.value} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-r ${domain.color} flex items-center justify-center mr-3 text-white`}
                        >
                          {domain.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{domain.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{domain.count} projects</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${percentage}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`bg-gradient-to-r ${domain.color} h-2.5 rounded-full`}
                      ></motion.div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Year Distribution */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Card className="h-full border-none shadow-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <CardTitle className="text-xl">Projects by Year</CardTitle>
            <CardDescription className="text-indigo-100">
              Timeline of outstanding projects over the years
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 bg-gradient-to-b from-indigo-50 to-white">
            <div className="space-y-4">
              {years.map((year, index) => {
                const percentage = Math.round((year.count / totalProjects) * 100)

                return (
                  <div key={year.value} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center mr-3 text-white">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{year.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{year.count} projects</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${percentage}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

