"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/teaching/lecture-notes/HeroSection"
import CourseFilters from "@/components/teaching/lecture-notes/CourseFilters"
import ResourceCard from "@/components/teaching/lecture-notes/ResourceCard"
import InstructorSelection from "@/components/teaching/lecture-notes/InstructorSelection"
import AdditionalResources from "@/components/teaching/lecture-notes/AdditionalResources"
import Pagination from "@/components/teaching/lecture-notes/Pagination"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

// Sample data for lecture notes
const lectureNotes = [
  {
    id: 1,
    title: "Introduction to Data Structures",
    course: "CS2023: Data Structures and Algorithms",
    instructor: "Dr. N Sadagopan",
    date: "Jan 10, 2023",
    duration: "45 mins",
    fileSize: "2.4 MB",
    fileType: "PDF",
    tags: ["Core Course", "CS", "Beginner"],
    downloads: 245,
  },
  {
    id: 2,
    title: "Arrays and Linked Lists",
    course: "CS2023: Data Structures and Algorithms",
    instructor: "Dr. N Sadagopan",
    date: "Jan 15, 2023",
    duration: "50 mins",
    fileSize: "3.1 MB",
    fileType: "PDF",
    tags: ["Core Course", "CS", "Beginner"],
    downloads: 230,
  },
  {
    id: 3,
    title: "Stacks and Queues",
    course: "CS2023: Data Structures and Algorithms",
    instructor: "Dr. N Sadagopan",
    date: "Jan 20, 2023",
    duration: "55 mins",
    fileSize: "3.5 MB",
    fileType: "PDF",
    tags: ["Core Course", "CS", "Intermediate"],
    downloads: 210,
  },
  {
    id: 4,
    title: "Trees and Binary Search Trees",
    course: "CS2023: Data Structures and Algorithms",
    instructor: "Dr. N Sadagopan",
    date: "Jan 25, 2023",
    duration: "60 mins",
    fileSize: "4.2 MB",
    fileType: "PDF",
    tags: ["Core Course", "CS", "Intermediate"],
    downloads: 195,
  },
  {
    id: 5,
    title: "Graphs and Graph Algorithms",
    course: "CS2023: Data Structures and Algorithms",
    instructor: "Dr. N Sadagopan",
    date: "Jan 30, 2023",
    duration: "65 mins",
    fileSize: "4.8 MB",
    fileType: "PDF",
    tags: ["Core Course", "CS", "Advanced"],
    downloads: 180,
  },
  {
    id: 6,
    title: "Introduction to Machine Learning",
    course: "CS3045: Machine Learning",
    instructor: "Dr. Umarani Jayaraman",
    date: "Feb 5, 2023",
    duration: "50 mins",
    fileSize: "3.2 MB",
    fileType: "PDF",
    tags: ["Elective", "CS", "Beginner"],
    downloads: 320,
  },
  {
    id: 7,
    title: "Supervised Learning Algorithms",
    course: "CS3045: Machine Learning",
    instructor: "Dr. Umarani Jayaraman",
    date: "Feb 10, 2023",
    duration: "55 mins",
    fileSize: "3.8 MB",
    fileType: "PDF",
    tags: ["Elective", "CS", "Intermediate"],
    downloads: 290,
  },
  {
    id: 8,
    title: "Neural Networks Fundamentals",
    course: "CS3045: Machine Learning",
    instructor: "Dr. Umarani Jayaraman",
    date: "Feb 15, 2023",
    duration: "60 mins",
    fileSize: "4.5 MB",
    fileType: "PDF",
    tags: ["Elective", "CS", "Advanced"],
    downloads: 275,
  },
]

export default function LectureNotesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState("all")

  const itemsPerPage = 5
  const totalPages = Math.ceil(lectureNotes.length / itemsPerPage)

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = lectureNotes.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    // Scroll to top of results
    window.scrollTo({
      top: document.getElementById("results-section")?.offsetTop - 100,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        <HeroSection />

        <section id="results-section" className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-900">Browse Lecture Notes</h2>
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                  <TabsTrigger
                    value="all"
                    className="py-3 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    All Notes
                  </TabsTrigger>
                  <TabsTrigger
                    value="recent"
                    className="py-3 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Recent Uploads
                  </TabsTrigger>
                  <TabsTrigger
                    value="popular"
                    className="py-3 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Most Popular
                  </TabsTrigger>
                  <TabsTrigger
                    value="my-courses"
                    className="py-3 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    My Courses
                  </TabsTrigger>
                </TabsList>
              </div>

              <CourseFilters />

              <TabsContent value="all" className="mt-0">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <div className="space-y-6">
                    {currentItems.map((note) => (
                      <ResourceCard
                        key={note.id}
                        title={note.title}
                        course={note.course}
                        instructor={note.instructor}
                        date={note.date}
                        duration={note.duration}
                        fileSize={note.fileSize}
                        fileType={note.fileType}
                        tags={note.tags}
                        downloads={note.downloads}
                      />
                    ))}
                  </div>

                  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </motion.div>
              </TabsContent>

              <TabsContent value="recent" className="mt-0">
                <div className="p-8 text-center">
                  <p className="text-gray-600">Select this tab to view recently uploaded lecture notes.</p>
                </div>
              </TabsContent>

              <TabsContent value="popular" className="mt-0">
                <div className="p-8 text-center">
                  <p className="text-gray-600">Select this tab to view the most popular lecture notes.</p>
                </div>
              </TabsContent>

              <TabsContent value="my-courses" className="mt-0">
                <div className="p-8 text-center">
                  <p className="text-gray-600">Select this tab to view lecture notes from your enrolled courses.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Instructor Selection Section */}
        <InstructorSelection />

        <AdditionalResources />
      </main>

      <Footer />
    </div>
  )
}

