"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const newsData = [
  [
    { title: "AI Research Symposium", date: "June 15, 2023" },
    { title: "New ML Course Launched", date: "May 30, 2023" },
    { title: "Industry Talk: Cybersecurity", date: "May 22, 2023" },
  ],
  [
    { title: "Blockchain Workshop", date: "July 5, 2023" },
    { title: "Data Science Hackathon", date: "June 28, 2023" },
    { title: "IoT Seminar Series", date: "June 10, 2023" },
  ],
  [
    { title: "Cloud Computing Conference", date: "July 20, 2023" },
    { title: "AI in Healthcare Lecture", date: "July 12, 2023" },
    { title: "Robotics Demonstration", date: "July 3, 2023" },
  ],
]

const achievementsData = [
  [
    { title: "Graduate Forum Best Paper Award at COMSNETS 2025", person: "Mr. Rajasekhar Dasari (CS22D0003)" },
    { title: "MS Admit at Northwestern University", person: "NIMMAGADDA SREE DHYUTI (CED 19)" },
    { title: "MS Admit at Cornell University", person: "Dikshanya (CED17)" },
  ],
  [
    { title: "MS Admit at University of Massachusetts Amherst", person: "Susheel (COE19)" },
    { title: "Direct-PhD Offer at IIT Madras", person: "Rahul C S (COE18)" },
    { title: "Graduate Forum Best Paper Award at COMSNETS 2025", person: "Mr. Rajasekhar Dasari (CS22D0003)" },
  ],
  [
    { title: "MS Admit at Cornell University", person: "Dikshanya (CED17)" },
    { title: "MS Admit at University of Massachusetts Amherst", person: "Susheel (COE19)" },
    { title: "Direct-PhD Offer at IIT Madras", person: "Rahul C S (COE18)" },
  ],
]

const announcementsData = [
  [
    { title: "Ph.D. Applications Open", deadline: "Deadline: July 31, 2023" },
    { title: "Summer Internship Program", deadline: "Apply by May 15, 2023" },
    { title: "Faculty Positions Available", deadline: "Multiple openings" },
  ],
  [
    { title: "Research Assistant Positions", deadline: "Apply by August 15, 2023" },
    { title: "Fall Semester Registration", deadline: "Deadline: August 1, 2023" },
    { title: "Graduate Open House", deadline: "September 5, 2023" },
  ],
  [
    { title: "Undergraduate Research Program", deadline: "Apply by September 1, 2023" },
    { title: "International Exchange Program", deadline: "Deadline: October 15, 2023" },
    { title: "CS Department Scholarship", deadline: "Apply by August 30, 2023" },
  ],
]

const MotionCard = motion(Card)

export default function SidebarNews() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [currentAchievementsIndex, setCurrentAchievementsIndex] = useState(0)
  const [currentAnnouncementsIndex, setCurrentAnnouncementsIndex] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<{section: string | null, index: number | null}>({ section: null, index: null })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsData.length)
      setCurrentAchievementsIndex((prevIndex) => (prevIndex + 1) % achievementsData.length)
      setCurrentAnnouncementsIndex((prevIndex) => (prevIndex + 1) % announcementsData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-8">
      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
      >
        <CardHeader className="bg-gradient-to-r from-[#003366] to-[#6495ED] py-4">
          <CardTitle className="text-2xl font-bold text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Latest News & Events
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <AnimatePresence mode="wait">
            <motion.ul
              key={currentNewsIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {newsData[currentNewsIndex].map((item, index) => (
                <motion.li
                  key={index}
                  className={`border-b border-[#003366]/20 pb-2 cursor-pointer transition-all duration-300 ${
                    hoveredItem.section === "news" && hoveredItem.index === index ? "bg-[#f5f8ff] pl-2 rounded" : ""
                  }`}
                  onMouseEnter={() => setHoveredItem({ section: "news", index })}
                  onMouseLeave={() => setHoveredItem({ section: null, index: null })}
                  whileHover={{ x: 5 }}
                >
                  <h4 className="font-semibold text-gray-800 transition-colors duration-300">{item.title}</h4>
                  <p className="text-sm text-[#003366] transition-colors duration-300">{item.date}</p>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
          <Button
            variant="link"
            className="mt-4 text-[#003366] hover:text-[#6495ED] transition-colors duration-300 group"
          >
            View All News
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </CardContent>
      </MotionCard>

      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
        className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
        id="sidebar-achievements"
      >
        <CardHeader className="bg-gradient-to-r from-[#003366] to-[#6495ED] py-4">
          <CardTitle className="text-2xl font-bold text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <AnimatePresence mode="wait">
            <motion.ul
              key={currentAchievementsIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {achievementsData[currentAchievementsIndex].map((item, index) => (
                <motion.li
                  key={index}
                  className={`border-b border-[#003366]/20 pb-2 cursor-pointer transition-all duration-300 ${
                    hoveredItem.section === "achievements" && hoveredItem.index === index
                      ? "bg-[#f5f8ff] pl-2 rounded"
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredItem({ section: "achievements", index })}
                  onMouseLeave={() => setHoveredItem({ section: null, index: null })}
                  whileHover={{ x: 5 }}
                >
                  <h4 className="font-semibold text-gray-800 transition-colors duration-300">{item.title}</h4>
                  <p className="text-sm text-[#003366] transition-colors duration-300">{item.person}</p>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
          <Button
            variant="link"
            className="mt-4 text-[#003366] hover:text-[#6495ED] transition-colors duration-300 group"
          >
            More Achievements
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </CardContent>
      </MotionCard>

      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
        className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
      >
        <CardHeader className="bg-gradient-to-r from-[#003366] to-[#6495ED] py-4">
          <CardTitle className="text-2xl font-bold text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            Announcements
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <AnimatePresence mode="wait">
            <motion.ul
              key={currentAnnouncementsIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {announcementsData[currentAnnouncementsIndex].map((item, index) => (
                <motion.li
                  key={index}
                  className={`border-b border-[#003366]/20 pb-2 cursor-pointer transition-all duration-300 ${
                    hoveredItem.section === "announcements" && hoveredItem.index === index
                      ? "bg-[#f5f8ff] pl-2 rounded"
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredItem({ section: "announcements", index })}
                  onMouseLeave={() => setHoveredItem({ section: null, index: null })}
                  whileHover={{ x: 5 }}
                >
                  <h4 className="font-semibold text-gray-800 transition-colors duration-300">{item.title}</h4>
                  <p className="text-sm text-[#003366] transition-colors duration-300">{item.deadline}</p>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
          <Button
            variant="link"
            className="mt-4 text-[#003366] hover:text-[#6495ED] transition-colors duration-300 group"
          >
            All Announcements
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </CardContent>
      </MotionCard>
    </div>
  )
}

