"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ArrowRight, ChevronRight, GraduationCap, BookOpen, Database, Code, BotIcon as Robot } from "lucide-react"

const programs = [
  {
    id: 1,
    name: "B.Tech in CSE",
    icon: <GraduationCap className="w-8 h-8" />,
    description: "A four-year undergraduate program focusing on core computer science and engineering principles.",
    highlights: ["Algorithm Design", "Software Engineering", "Data Structures", "Machine Learning Basics"],
  },
  {
    id: 2,
    name: "B.Tech in CSE with Major in AI",
    icon: <Robot className="w-8 h-8" />,
    description: "Specialized undergraduate program with a focus on Artificial Intelligence and its applications.",
    highlights: ["Deep Learning", "Natural Language Processing", "Computer Vision", "AI Ethics"],
  },
  {
    id: 3,
    name: "M.Tech in CSE (Data Science and AI)",
    icon: <Database className="w-8 h-8" />,
    description: "Advanced postgraduate program specializing in Data Science and Artificial Intelligence.",
    highlights: ["Big Data Analytics", "Advanced Machine Learning", "Data Visualization", "AI in Business"],
  },
  {
    id: 4,
    name: "Ph.D in Computer Science",
    icon: <BookOpen className="w-8 h-8" />,
    description: "Doctoral program for advanced research in various computer science domains.",
    highlights: ["Research Methodology", "Advanced Topics in CS", "Thesis Writing", "Academic Publishing"],
  },
  {
    id: 5,
    name: "Dual Degree (B.Tech + M.Tech in CSE)",
    icon: <Code className="w-8 h-8" />,
    description: "Integrated program offering both B.Tech and M.Tech degrees in Computer Science and Engineering.",
    highlights: ["Extended Research Project", "Industry Internship", "Specialization Tracks", "Integrated Curriculum"],
  },
]

export default function ProgramsOffered() {
  const [selectedProgram, setSelectedProgram] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="py-20 bg-gradient-to-r from-[#003366]/10 to-[#6495ED]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold mb-4 text-[#003366] inline-block relative"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Programs Offered
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-[#6495ED]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          <motion.p
            className="text-xl text-[#003366] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover our cutting-edge programs designed to prepare you for the future of technology and innovation.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer"
              onClick={() => setSelectedProgram(program)}
              onMouseEnter={() => setHoveredCard(program.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="h-full overflow-hidden group transition-all duration-300 border-t-4 border-[#003366] shadow-md hover:shadow-xl">
                <CardHeader className="pb-4 bg-gradient-to-r from-[#f5f8ff] to-white">
                  <div className="flex items-center mb-2">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 transition-all duration-500 ${
                        hoveredCard === program.id ? "bg-[#003366] text-white" : "bg-[#f5f8ff] text-[#003366]"
                      }`}
                    >
                      {program.icon}
                    </div>
                    <CardTitle
                      className={`text-xl transition-colors duration-300 ${
                        hoveredCard === program.id ? "text-[#6495ED]" : "text-[#003366]"
                      }`}
                    >
                      {program.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="text-[#003366]/70 mb-4 text-base">{program.description}</CardDescription>
                  <ul className="space-y-2">
                    {program.highlights.slice(0, 2).map((highlight, index) => (
                      <li key={index} className="flex items-center text-sm text-[#003366]/70">
                        <ChevronRight
                          className={`w-4 h-4 mr-2 transition-colors duration-300 ${
                            hoveredCard === program.id ? "text-[#6495ED]" : "text-[#003366]"
                          }`}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`mt-6 flex items-center transition-colors duration-300 ${
                      hoveredCard === program.id ? "text-[#6495ED]" : "text-[#003366]"
                    } group`}
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProgram && (
          <Dialog open={!!selectedProgram} onOpenChange={() => setSelectedProgram(null)}>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold flex items-center text-[#003366]">
                  <div className="w-12 h-12 bg-[#f5f8ff] rounded-full flex items-center justify-center text-[#003366] mr-3">
                    {selectedProgram.icon}
                  </div>
                  <span>{selectedProgram.name}</span>
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-6">
                <DialogDescription className="text-lg text-[#003366]/70">
                  {selectedProgram.description}
                </DialogDescription>
                <div className="bg-[#f5f8ff] p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4 text-[#003366] border-b border-[#6495ED]/30 pb-2">
                    Program Highlights:
                  </h4>
                  <ul className="grid grid-cols-2 gap-4">
                    {selectedProgram.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-[#003366]/70">
                        <div className="w-8 h-8 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366] mr-3">
                          <ChevronRight className="w-5 h-5" />
                        </div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}

