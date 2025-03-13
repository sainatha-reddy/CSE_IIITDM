"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Lightbulb, Target, Zap, Award } from "lucide-react"

export default function TeachingPhilosophy() {
  const philosophyItems = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Curriculum",
      description:
        "Our curriculum is designed to provide a strong foundation in computer science fundamentals while also exposing students to cutting-edge technologies and methodologies.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Learning",
      description:
        "We encourage peer-to-peer learning and collaboration, fostering a community where students learn from each other as well as from faculty.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation-Driven",
      description:
        "Our teaching approach emphasizes innovation and creative problem-solving, preparing students to tackle real-world challenges.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Outcome-Based Education",
      description:
        "We focus on clear learning outcomes, ensuring that our students develop the skills and knowledge needed for success in their careers.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hands-On Experience",
      description:
        "Practical application of theoretical concepts is at the core of our teaching philosophy, with extensive lab work and project-based learning.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence in Research",
      description:
        "We integrate research into our teaching, exposing students to the latest developments in the field and encouraging them to contribute to knowledge creation.",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#003366]">Our Teaching Philosophy</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            At IIITDM Kancheepuram's Department of Computer Science and Engineering, we believe in a holistic approach
            to education that combines theoretical knowledge with practical application. Our teaching methodology is
            designed to foster critical thinking, problem-solving abilities, and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:border-blue-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#003366]">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

