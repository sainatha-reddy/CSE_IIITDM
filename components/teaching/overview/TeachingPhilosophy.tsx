"use client"

import { motion } from "framer-motion"
import { Brain, Lightbulb, Users, Code, Compass, Zap } from "lucide-react"

export default function TeachingPhilosophy() {
  const philosophyItems = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Critical Thinking",
      description:
        "We encourage students to analyze problems from multiple perspectives and develop innovative solutions.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation-Driven",
      description: "Our curriculum is designed to foster creativity and innovative thinking in technology development.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Learning",
      description:
        "We promote teamwork and peer learning to prepare students for collaborative professional environments.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Hands-on Experience",
      description: "Practical application of theoretical concepts through projects, labs, and industry collaborations.",
    },
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Research-Oriented",
      description:
        "We integrate cutting-edge research into our teaching to keep students at the forefront of technology.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Industry-Relevant",
      description: "Our curriculum is regularly updated to align with industry needs and technological advancements.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003366]">Our Teaching Philosophy</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            At IIITDM Kancheepuram's Department of Computer Science and Engineering, we believe in a holistic approach
            to education that combines theoretical knowledge with practical application. Our teaching methodology is
            designed to foster critical thinking, problem-solving abilities, and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-md border border-blue-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

