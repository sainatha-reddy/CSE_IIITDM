"use client"

import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Database, Microscope, Network, Server } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResearchStatProps {
  icon: React.ReactNode
  value: string
  label: string
}

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#f0f4ff] to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full opacity-20 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-100 rounded-full opacity-20 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

        {/* Animated Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-indigo-200 rounded-full opacity-20"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-12 h-12 bg-purple-200 rounded-full opacity-20"
          animate={{
            y: [0, 15, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#003366]/10 text-[#003366] text-sm font-medium">
              <Microscope className="w-4 h-4 mr-2" />
              Research & Innovation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#003366] via-[#003366] to-[#6495ED] bg-clip-text text-transparent"
          >
            Research at IIITDM Kancheepuram
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#003366]/80 mb-8 leading-relaxed"
          >
            Discover our cutting-edge research initiatives, PhD programs, and collaborative opportunities that are
            shaping the future of technology and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-[#003366] text-white hover:bg-[#003366]/90 shadow-lg shadow-[#003366]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Research Areas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#6495ED] text-[#003366] hover:bg-[#6495ED]/10 hover:border-[#003366] hover:-translate-y-0.5 transition-all duration-300"
            >
              PhD Admissions
              <BookOpen className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        {/* Research Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          <ResearchStat icon={<BookOpen className="w-6 h-6" />} value="200+" label="Publications" />
          <ResearchStat icon={<Database className="w-6 h-6" />} value="₹25Cr+" label="Research Grants" />
          <ResearchStat icon={<Network className="w-6 h-6" />} value="50+" label="Research Projects" />
          <ResearchStat icon={<Server className="w-6 h-6" />} value="15+" label="Research Labs" />
        </motion.div>
      </div>
    </section>
  )
}

function ResearchStat({ icon, value, label }: ResearchStatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex items-center space-x-3"
    >
      <div className="w-12 h-12 rounded-full bg-[#003366]/10 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-[#003366]">{value}</div>
        <div className="text-sm text-[#003366]/70">{label}</div>
      </div>
    </motion.div>
  )
}

