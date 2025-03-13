"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for instructors
const instructorCourses = [
  {
    name: "Dr. N Sadagopan",
    title: "Professor",
    image: "/placeholder.svg?height=200&width=200",
    courses: [
      {
        title: "Discrete Structures for Computer Engineering",
        icon: "Layers",
        color: "from-blue-500 to-blue-600",
        resources: [
          { type: "Lecture Notes", icon: "FileText" },
          { type: "Problem Session", icon: "Lightbulb" },
          { type: "Assignments", icon: "PenTool" },
          { type: "Practice Questions", icon: "FileQuestion" },
          { type: "Previous Year Questions", icon: "Calendar" },
        ],
      },
      {
        title: "Design and Analysis of Algorithms",
        icon: "Lightbulb",
        color: "from-indigo-500 to-indigo-600",
        resources: [
          { type: "Lecture Notes", icon: "FileText" },
          { type: "Problem Session", icon: "Lightbulb" },
          { type: "Assignments", icon: "PenTool" },
        ],
      },
      {
        title: "Advanced Data Structures and Algorithms",
        icon: "Layers",
        color: "from-purple-500 to-purple-600",
        resources: [
          { type: "Lecture Notes", icon: "FileText" },
          { type: "Problem Session", icon: "Lightbulb" },
          { type: "Assignments", icon: "PenTool" },
        ],
      },
    ],
  },
  {
    name: "Dr. Umarani Jayaraman",
    title: "Associate Professor",
    image: "/placeholder.svg?height=200&width=200",
    courses: [
      {
        title: "Human Computer Interaction",
        icon: "MousePointer",
        color: "from-rose-500 to-rose-600",
        resources: [
          { type: "Lecture Notes", icon: "FileText" },
          { type: "In-Class Activities", icon: "Lightbulb" },
          { type: "Videos", icon: "Video" },
          { type: "Projects", icon: "Folder" },
        ],
      },
      {
        title: "Pattern Recognition",
        icon: "Brain",
        color: "from-cyan-500 to-cyan-600",
        resources: [
          { type: "Lecture Notes", icon: "FileText" },
          { type: "Other Resources", icon: "Folder" },
          { type: "Assignments", icon: "PenTool" },
          { type: "Syllabus", icon: "BookOpen" },
        ],
      },
    ],
  },
  {
    name: "Dr. B. Sivaselvan",
    title: "Associate Professor",
    image: "/placeholder.svg?height=200&width=200",
    courses: [
      {
        title: "Database Management Systems",
        icon: "Database",
        color: "from-amber-500 to-amber-600",
        resources: [
          { type: "Lecture Notes", icon: "FileText" },
          { type: "Lab Exercises", icon: "Code" },
          { type: "Assignments", icon: "PenTool" },
        ],
      },
      {
        title: "Big Data Analytics",
        icon: "BarChart",
        color: "from-green-500 to-green-600",
        resources: [
          { type: "Lecture Notes", icon: "FileText" },
          { type: "Case Studies", icon: "FileSearch" },
          { type: "Projects", icon: "Folder" },
        ],
      },
    ],
  },
]

export default function InstructorSelection() {
  // State for active instructor and course
  const [activeInstructor, setActiveInstructor] = useState(0)
  const [activeCourse, setActiveCourse] = useState(0)
  const [activeResourceType, setActiveResourceType] = useState("Lecture Notes")

  // Get current instructor and course
  const currentInstructor = instructorCourses[activeInstructor]
  const currentCourse = currentInstructor.courses[activeCourse]

  return (
    <section className="py-12 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">Browse by Instructor</h2>

          {/* Instructor Tabs */}
          <Tabs
            defaultValue={instructorCourses[0].name.replace(/\s+/g, "-").toLowerCase()}
            className="w-full"
            onValueChange={(value) => {
              const index = instructorCourses.findIndex(
                (instructor) => instructor.name.replace(/\s+/g, "-").toLowerCase() === value,
              )
              setActiveInstructor(index)
              setActiveCourse(0)
            }}
          >
            <div className="mb-8">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
                {instructorCourses.map((instructor, index) => (
                  <TabsTrigger
                    key={instructor.name}
                    value={instructor.name.replace(/\s+/g, "-").toLowerCase()}
                    className="py-3 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    <div className="flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      <span>{instructor.name}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {instructorCourses.map((instructor, instructorIndex) => (
              <TabsContent
                key={instructor.name}
                value={instructor.name.replace(/\s+/g, "-").toLowerCase()}
                className="mt-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Instructor Info */}
                  <Card className="mb-8 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 flex flex-col justify-center items-center">
                          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white/30">
                            <Image
                              src={instructor.image || "/placeholder.svg"}
                              alt={instructor.name}
                              width={128}
                              height={128}
                              className="object-cover"
                            />
                          </div>
                          <h3 className="text-xl font-bold">{instructor.name}</h3>
                          <p className="text-blue-100">{instructor.title}</p>
                        </div>
                        <div className="md:w-3/4 p-6">
                          <h3 className="text-2xl font-bold mb-4 text-blue-900">Courses</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {instructor.courses.map((course, courseIndex) => (
                              <motion.div key={course.title} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Card
                                  className={`cursor-pointer overflow-hidden ${
                                    instructorIndex === activeInstructor && courseIndex === activeCourse
                                      ? "ring-2 ring-blue-500 shadow-lg"
                                      : "hover:shadow-md"
                                  }`}
                                  onClick={() => {
                                    setActiveCourse(courseIndex)
                                    setActiveResourceType("Lecture Notes")
                                  }}
                                >
                                  <CardHeader className={`py-3 bg-gradient-to-r ${course.color} text-white`}>
                                    <CardTitle className="text-lg">{course.title}</CardTitle>
                                  </CardHeader>
                                  <CardContent className="p-4">
                                    <div className="flex flex-wrap gap-2">
                                      {course.resources.map((resource) => (
                                        <span
                                          key={resource.type}
                                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                        >
                                          <span className="ml-1">{resource.type}</span>
                                        </span>
                                      ))}
                                    </div>
                                  </CardContent>
                                </Card>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Selected Course Content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${instructorIndex}-${activeCourse}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card>
                        <CardHeader className={`bg-gradient-to-r ${currentCourse.color} text-white`}>
                          <div className="flex items-center">
                            <CardTitle className="text-2xl">{currentCourse.title}</CardTitle>
                          </div>
                          <CardDescription className="text-white/80">
                            Instructor: {currentInstructor.name}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6">
                          {/* Resource Type Tabs */}
                          <Tabs
                            defaultValue="Lecture Notes"
                            className="w-full"
                            value={activeResourceType}
                            onValueChange={setActiveResourceType}
                          >
                            <TabsList className="mb-6 flex flex-wrap h-auto">
                              {currentCourse.resources.map((resource) => (
                                <TabsTrigger
                                  key={resource.type}
                                  value={resource.type}
                                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                                >
                                  <div className="flex items-center">
                                    <span className="ml-2">{resource.type}</span>
                                  </div>
                                </TabsTrigger>
                              ))}
                            </TabsList>

                            {currentCourse.resources.map((resource) => (
                              <TabsContent key={resource.type} value={resource.type} className="mt-0">
                                <AnimatePresence mode="wait">
                                  <motion.div
                                    key={resource.type}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <div className="p-4 bg-blue-50 rounded-lg">
                                      <p className="text-blue-600">
                                        {resource.type} for {currentCourse.title} will be displayed here.
                                      </p>
                                    </div>
                                  </motion.div>
                                </AnimatePresence>
                              </TabsContent>
                            ))}
                          </Tabs>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

