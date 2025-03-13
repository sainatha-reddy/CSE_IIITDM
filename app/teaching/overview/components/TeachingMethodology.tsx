"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PresentationIcon, BookOpenCheck, Microscope, Users, Lightbulb, GraduationCap, ArrowRight } from "lucide-react"

export default function TeachingMethodology() {
  const [activeTab, setActiveTab] = useState("lectures")

  const methodologies = [
    {
      id: "lectures",
      icon: <PresentationIcon className="w-5 h-5" />,
      title: "Interactive Lectures",
      description:
        "Our lectures go beyond traditional teaching methods, incorporating interactive elements, real-time quizzes, and discussion sessions to ensure active participation and better understanding of concepts.",
      features: [
        "Flipped classroom approach",
        "Real-time student feedback",
        "Integrated multimedia resources",
        "Guest lectures from industry experts",
        "Recorded sessions for revision",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "labs",
      icon: <Microscope className="w-5 h-5" />,
      title: "Hands-on Labs",
      description:
        "Our state-of-the-art laboratories provide students with hands-on experience in various domains of computer science, from programming and networking to artificial intelligence and cybersecurity.",
      features: [
        "Industry-standard equipment and software",
        "Practical implementation of theoretical concepts",
        "Guided exercises with incremental difficulty",
        "Open lab hours for independent exploration",
        "Regular lab assessments",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "projects",
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Project-Based Learning",
      description:
        "We emphasize learning through projects that solve real-world problems, allowing students to apply their knowledge, develop teamwork skills, and build a portfolio of work.",
      features: [
        "Industry-sponsored projects",
        "Open-ended problem statements",
        "Interdisciplinary collaboration",
        "Regular mentorship and guidance",
        "Public showcases and demonstrations",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "seminars",
      icon: <Users className="w-5 h-5" />,
      title: "Seminars & Workshops",
      description:
        "Regular seminars and workshops expose students to the latest trends and technologies in the field, often conducted by industry professionals and academic experts.",
      features: [
        "Cutting-edge technology demonstrations",
        "Hands-on workshop sessions",
        "Networking opportunities with experts",
        "Certificate programs",
        "Student-led seminars",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "research",
      icon: <BookOpenCheck className="w-5 h-5" />,
      title: "Research Integration",
      description:
        "We integrate research into our teaching, encouraging students to explore beyond the curriculum and contribute to the advancement of knowledge in computer science.",
      features: [
        "Undergraduate research opportunities",
        "Faculty-guided research projects",
        "Publication support",
        "Research seminars and journal clubs",
        "Conference participation",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "mentoring",
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Personalized Mentoring",
      description:
        "Our faculty members provide personalized mentoring to students, guiding them in their academic journey, career planning, and personal growth.",
      features: [
        "One-on-one faculty mentoring",
        "Peer mentoring programs",
        "Career guidance and counseling",
        "Academic advising",
        "Alumni mentorship connections",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#003366]">Our Teaching Methodology</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            We employ a variety of teaching methodologies to ensure that our students receive a well-rounded education
            that prepares them for the challenges of the rapidly evolving field of computer science.
          </p>
        </motion.div>

        <Tabs defaultValue="lectures" className="w-full max-w-5xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 md:grid-cols-6 bg-blue-50 p-1 rounded-lg mb-8">
            {methodologies.map((method) => (
              <TabsTrigger
                key={method.id}
                value={method.id}
                className={`flex items-center justify-center py-3 ${
                  activeTab === method.id ? "bg-white text-[#003366]" : "text-gray-600 hover:text-[#003366]"
                } transition-all duration-300`}
              >
                <span className="flex items-center">
                  {method.icon}
                  <span className="ml-2 hidden md:inline">{method.title.split(" ")[0]}</span>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {methodologies.map((method) => (
            <TabsContent key={method.id} value={method.id} className="focus:outline-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">{method.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{method.description}</p>
                    <ul className="space-y-3">
                      {method.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <ArrowRight className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={method.image || "/placeholder.svg"}
                      alt={method.title}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

