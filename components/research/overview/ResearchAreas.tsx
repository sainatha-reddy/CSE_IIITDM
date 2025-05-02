"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, Database, Network, Shield, Cpu, Code, Layers, ChevronRight } from "lucide-react"

const researchAreas = [
  {
    id: 1,
    title: "Artificial Intelligence & Machine Learning",
    icon: <BrainCircuit className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    description: "Research in AI/ML algorithms, deep learning, computer vision, and natural language processing.",
    topics: [
      "Deep Learning Architectures",
      "Computer Vision",
      "Natural Language Processing",
      "Reinforcement Learning",
      "AI Ethics & Explainability",
    ],
  },
  {
    id: 2,
    title: "Data Science & Big Data Analytics",
    icon: <Database className="w-8 h-8" />,
    color: "from-indigo-500 to-indigo-600",
    description: "Exploring methods for analyzing large-scale data and extracting meaningful insights.",
    topics: [
      "Big Data Processing Frameworks",
      "Data Mining Techniques",
      "Predictive Analytics",
      "Visual Analytics",
      "Time Series Analysis",
    ],
  },
  {
    id: 3,
    title: "Computer Networks & Security",
    icon: <Network className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
    description: "Research on network protocols, security mechanisms, and distributed systems.",
    topics: [
      "Network Protocol Design",
      "Wireless Networks",
      "IoT Networks",
      "Network Security",
      "Software-Defined Networking",
    ],
  },
  {
    id: 4,
    title: "Cybersecurity & Privacy",
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-red-600",
    description: "Investigating techniques for securing systems and protecting user privacy.",
    topics: [
      "Cryptography",
      "Secure System Design",
      "Privacy-Preserving Techniques",
      "Malware Analysis",
      "Blockchain Security",
    ],
  },
  {
    id: 5,
    title: "Computer Architecture & VLSI",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-green-500 to-green-600",
    description: "Research on processor design, memory systems, and VLSI implementation.",
    topics: [
      "Processor Architecture",
      "Memory Hierarchy Design",
      "Hardware Acceleration",
      "Low-Power Design",
      "FPGA Implementation",
    ],
  },
  {
    id: 6,
    title: "Software Engineering & Systems",
    icon: <Code className="w-8 h-8" />,
    color: "from-yellow-500 to-yellow-600",
    description: "Exploring methodologies for building reliable, efficient, and maintainable software systems.",
    topics: [
      "Software Design Patterns",
      "Software Testing & Verification",
      "DevOps & Continuous Integration",
      "Software Metrics & Quality",
      "Distributed Systems",
    ],
  },
  {
    id: 7,
    title: "Theoretical Computer Science",
    icon: <Layers className="w-8 h-8" />,
    color: "from-teal-500 to-teal-600",
    description: "Fundamental research in algorithms, complexity theory, and formal methods.",
    topics: [
      "Algorithm Design & Analysis",
      "Computational Complexity",
      "Formal Verification",
      "Graph Theory",
      "Automata & Language Theory",
    ],
  },
]

export default function ResearchAreas() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-white to-[#f5f8ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-[#003366] inline-block relative"
          >
            Research Areas
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-[#6495ED]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-[#003366]/80 max-w-3xl mx-auto"
          >
            Our department conducts cutting-edge research across a diverse range of computer science disciplines,
            driving innovation and addressing real-world challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              onMouseEnter={() => setHoveredCard(area.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="cursor-pointer"
            >
              <Card className="h-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#003366]">
                <CardHeader
                  className={`pb-4 bg-gradient-to-r ${hoveredCard === area.id ? area.color : "from-[#f5f8ff] to-white"} ${hoveredCard === area.id ? "text-white" : "text-[#003366]"}`}
                >
                  <div className="flex items-center mb-2">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 transition-all duration-500 ${
                        hoveredCard === area.id ? "bg-white/20 text-white" : "bg-[#003366]/10 text-[#003366]"
                      }`}
                    >
                      {area.icon}
                    </div>
                    <CardTitle className="text-xl transition-colors duration-300">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription
                    className={`mb-4 text-base ${hoveredCard === area.id ? "text-[#003366]" : "text-[#003366]/70"}`}
                  >
                    {area.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {area.topics.slice(0, 3).map((topic, idx) => (
                      <li key={idx} className="flex items-center text-sm text-[#003366]/70">
                        <ChevronRight
                          className={`w-4 h-4 mr-2 transition-colors duration-300 ${
                            hoveredCard === area.id ? "text-[#6495ED]" : "text-[#003366]"
                          }`}
                        />
                        {topic}
                      </li>
                    ))}
                    {area.topics.length > 3 && (
                      <li className="text-sm text-[#6495ED] font-medium mt-2">+{area.topics.length - 3} more topics</li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

