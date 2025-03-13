"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Bookmark, Lightbulb, Clock, Award, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const benefits = [
    {
      title: "Flexibility",
      icon: <Clock className="w-8 h-8" />,
      description: "Learn at your own pace and schedule, making it easier to balance with your core coursework.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Diverse Perspectives",
      icon: <Globe className="w-8 h-8" />,
      description: "Gain insights from instructors across different institutions and backgrounds.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Industry Relevance",
      icon: <Bookmark className="w-8 h-8" />,
      description: "Stay updated with the latest technologies and practices valued by employers.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Specialized Knowledge",
      icon: <Lightbulb className="w-8 h-8" />,
      description: "Explore niche topics that may not be covered in depth in the regular curriculum.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      title: "Certificate Recognition",
      icon: <Award className="w-8 h-8" />,
      description: "Earn certificates that can be added to your resume and professional profiles.",
      color: "bg-amber-100 text-amber-600",
    },
    {
      title: "Self-Directed Learning",
      icon: <Zap className="w-8 h-8" />,
      description: "Develop valuable self-discipline and independent learning skills.",
      color: "bg-green-100 text-green-600",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-100 text-[#003366] font-medium text-sm">
            Why Choose Online Electives
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[#003366]">Benefits of Online Electives</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how online electives can enhance your academic journey and career prospects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-transparent hover:border-[#6495ED]">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`mb-4 w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#003366] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

