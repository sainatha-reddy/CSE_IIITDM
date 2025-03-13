"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import {
  ArrowRight,
  ChevronRight,
  BotIcon as Robot,
  Cloud,
  Network,
  Cpu,
  CircuitBoardIcon as Circuit,
  Laptop,
} from "lucide-react"

const laboratories = [
  {
    id: 1,
    name: "AI and Machine Learning Lab",
    icon: <Robot className="w-8 h-8" />,
    description: "Cutting-edge facility for AI and ML research and development.",
    equipment: ["GPU Clusters", "Neural Network Simulators", "Data Annotation Tools", "AI Development Frameworks"],
    image: "/lab-ai-ml.jpg",
  },
  {
    id: 2,
    name: "Cloud Computing and Big Data Lab",
    icon: <Cloud className="w-8 h-8" />,
    description: "Advanced lab for cloud technologies and big data processing.",
    equipment: ["Cloud Servers", "Hadoop Cluster", "Data Visualization Tools", "Distributed Computing Platforms"],
    image: "/lab-cloud-bigdata.jpg",
  },
  {
    id: 3,
    name: "Cybersecurity and Network Lab",
    icon: <Network className="w-8 h-8" />,
    description: "Specialized lab for network security and cybersecurity research.",
    equipment: ["Network Simulators", "Penetration Testing Tools", "Firewall Systems", "Encryption Hardware"],
    image: "/lab-cybersecurity.jpg",
  },
  {
    id: 4,
    name: "IoT and Embedded Systems Lab",
    icon: <Cpu className="w-8 h-8" />,
    description: "State-of-the-art facility for IoT and embedded systems development.",
    equipment: ["IoT Development Kits", "Sensor Arrays", "Microcontroller Platforms", "Wireless Communication Modules"],
    image: "/lab-iot-embedded.jpg",
  },
  {
    id: 5,
    name: "Digital and Analog Circuits Design",
    icon: <Circuit className="w-8 h-8" />,
    description: "State-of-the-art facility for designing and testing digital and analog circuits.",
    equipment: ["Oscilloscopes", "Function Generators", "Logic Analyzers", "PCB Prototyping Machines"],
    image: "/lab-digital-analog.jpg",
  },
  {
    id: 6,
    name: "Object Oriented Algorithm Design and Analysis",
    icon: <Laptop className="w-8 h-8" />,
    description: "Advanced computing lab for algorithm design and analysis using object-oriented principles.",
    equipment: ["High-performance Workstations", "Algorithm Visualization Tools", "Version Control Systems"],
    image: "/lab-algorithm.jpg",
  },
  // ... (other laboratories)
]

export default function Laboratories() {
  const [selectedLab, setSelectedLab] = useState(null)
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
            Our Laboratories
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
            Explore our state-of-the-art facilities where innovation and learning converge.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {laboratories.map((lab, index) => (
            <motion.div
              key={lab.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={() => setSelectedLab(lab)}
              onMouseEnter={() => setHoveredCard(lab.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="h-full overflow-hidden group transition-all duration-300 shadow-md hover:shadow-xl bg-white">
                <CardHeader
                  className={`transition-colors duration-500 ${
                    hoveredCard === lab.id ? "bg-[#003366]" : "bg-gradient-to-r from-[#f5f8ff] to-white"
                  }`}
                >
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto transition-all duration-500 ${
                      hoveredCard === lab.id ? "bg-white text-[#003366]" : "bg-[#f5f8ff] text-[#003366]"
                    }`}
                  >
                    {lab.icon}
                  </div>
                  <CardTitle
                    className={`text-2xl text-center transition-colors duration-300 ${
                      hoveredCard === lab.id ? "text-white" : "text-[#003366]"
                    }`}
                  >
                    {lab.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="text-[#003366]/70 text-center mb-6">{lab.description}</CardDescription>
                  <div
                    className={`flex items-center justify-center transition-colors duration-300 ${
                      hoveredCard === lab.id ? "text-[#6495ED]" : "text-[#003366]"
                    } group`}
                  >
                    <span className="text-sm font-medium">Explore Lab</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedLab && (
          <Dialog open={!!selectedLab} onOpenChange={() => setSelectedLab(null)}>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold flex items-center text-[#003366]">
                  <div className="w-12 h-12 bg-[#f5f8ff] rounded-full flex items-center justify-center text-[#003366] mr-3">
                    {selectedLab.icon}
                  </div>
                  <span>{selectedLab.name}</span>
                </DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                  <Image
                    src={selectedLab.image || "/placeholder.svg?height=300&width=500"}
                    alt={selectedLab.name}
                    width={500}
                    height={300}
                    className="rounded-lg object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-bold">{selectedLab.name}</h4>
                    </div>
                  </div>
                </div>
                <div>
                  <DialogDescription className="text-lg text-[#003366]/70 mb-6">
                    {selectedLab.description}
                  </DialogDescription>
                  <div className="bg-[#f5f8ff] p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-4 text-[#003366] border-b border-[#6495ED]/30 pb-2">
                      Equipment:
                    </h4>
                    <ul className="space-y-3">
                      {selectedLab.equipment.map((item, index) => (
                        <li key={index} className="flex items-center text-[#003366]/70">
                          <div className="w-8 h-8 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366] mr-3">
                            <ChevronRight className="w-5 h-5" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}

