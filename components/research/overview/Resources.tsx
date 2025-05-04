"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Database, Microscope, Users, Globe, Award, ArrowRight } from "lucide-react"

const resources = [
  {
    title: "Research Laboratories",
    icon: <Microscope className="w-8 h-8" />,
    description: "Access to state-of-the-art research labs equipped with the latest hardware and software tools.",
    link: "#research-labs",
  },
  {
    title: "Computing Infrastructure",
    icon: <Database className="w-8 h-8" />,
    description: "High-performance computing clusters, GPU servers, and specialized hardware for research projects.",
    link: "#computing",
  },
  {
    title: "Digital Library",
    icon: <BookOpen className="w-8 h-8" />,
    description: "Comprehensive access to academic journals, conference proceedings, and research databases.",
    link: "#library",
  },
  {
    title: "Collaboration Networks",
    icon: <Users className="w-8 h-8" />,
    description: "Partnerships with leading academic institutions and industry research labs worldwide.",
    link: "#collaborations",
  },
  {
    title: "International Exchanges",
    icon: <Globe className="w-8 h-8" />,
    description: "Opportunities for research visits and exchanges with partner universities globally.",
    link: "#exchanges",
  },
  {
    title: "Research Funding",
    icon: <Award className="w-8 h-8" />,
    description: "Internal grants and support for securing external research funding from various agencies.",
    link: "#funding",
  },
]

export default function Resources() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-[#003366] inline-block relative"
          >
            Research Resources
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
            We provide comprehensive resources to support our researchers in their pursuit of excellence and innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-[#6495ED]">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-[#003366]/10 rounded-full flex items-center justify-center text-[#003366] mb-4">
                    {resource.icon}
                  </div>
                  <CardTitle className="text-xl text-[#003366]">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-[#003366]/70 mb-6">{resource.description}</CardDescription>
                  <Button
                    variant="ghost"
                    className="text-[#003366] hover:text-[#6495ED] hover:bg-[#6495ED]/10 p-0 flex items-center"
                    asChild
                  >
                    {/* <a href={resource.link}>
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a> */}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

