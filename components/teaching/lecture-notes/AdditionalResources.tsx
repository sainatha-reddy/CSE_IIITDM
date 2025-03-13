"use client"

import { motion } from "framer-motion"
import { BookOpen, FileText, Video, Globe, Folder, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

const resources = [
  {
    title: "Recommended Textbooks",
    description: "Essential reading materials to supplement your learning",
    icon: <BookOpen className="h-10 w-10 text-blue-600" />,
    color: "from-blue-50 to-blue-100",
    items: [
      { name: "Introduction to Algorithms", author: "Cormen, Leiserson, Rivest, Stein" },
      { name: "Computer Networks", author: "Andrew S. Tanenbaum" },
      { name: "Artificial Intelligence: A Modern Approach", author: "Russell, Norvig" },
    ],
  },
  {
    title: "Research Papers",
    description: "Latest research papers relevant to your courses",
    icon: <FileText className="h-10 w-10 text-indigo-600" />,
    color: "from-indigo-50 to-indigo-100",
    items: [
      { name: "Advances in Neural Information Processing Systems", year: 2023 },
      { name: "IEEE Transactions on Pattern Analysis", year: 2022 },
      { name: "ACM Computing Surveys", year: 2023 },
    ],
  },
  {
    title: "Video Lectures",
    description: "Recorded lectures and demonstrations",
    icon: <Video className="h-10 w-10 text-purple-600" />,
    color: "from-purple-50 to-purple-100",
    items: [
      { name: "Advanced Data Structures", duration: "45 mins" },
      { name: "Machine Learning Fundamentals", duration: "60 mins" },
      { name: "Computer Graphics Techniques", duration: "50 mins" },
    ],
  },
  {
    title: "Online Resources",
    description: "Helpful websites and online tools",
    icon: <Globe className="h-10 w-10 text-teal-600" />,
    color: "from-teal-50 to-teal-100",
    items: [
      { name: "MIT OpenCourseWare", type: "Educational Platform" },
      { name: "Coursera", type: "Online Courses" },
      { name: "GitHub Student Developer Pack", type: "Development Tools" },
    ],
  },
  {
    title: "Practice Materials",
    description: "Additional exercises and problem sets",
    icon: <Folder className="h-10 w-10 text-amber-600" />,
    color: "from-amber-50 to-amber-100",
    items: [
      { name: "Programming Challenges", difficulty: "Mixed" },
      { name: "Algorithm Visualization", difficulty: "Intermediate" },
      { name: "System Design Problems", difficulty: "Advanced" },
    ],
  },
]

export default function AdditionalResources() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Additional Learning Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your learning experience with these carefully curated supplementary materials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                <div className={`bg-gradient-to-r ${resource.color} p-6`}>
                  <div className="flex items-center mb-4">
                    {resource.icon}
                    <CardTitle className="text-xl ml-3">{resource.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{resource.description}</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {resource.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 text-xs font-medium">{idx + 1}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            {Object.values(item).filter((val) => val !== item.name)[0]}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                      {resource.title === "Recommended Textbooks" || resource.title === "Research Papers" ? (
                        <>
                          <Download className="w-4 h-4 mr-2" />
                          Download List
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View All
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Need more resources? Contact your course instructor or visit the department library.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Request Additional Materials
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

