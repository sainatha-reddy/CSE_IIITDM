"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, BookOpen, FileText, Calendar, Award, Lightbulb, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeachingResources() {
  const [activeTab, setActiveTab] = useState("all")

  const resources = [
    {
      title: "Curriculum",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Comprehensive curriculum designed to cover fundamental and advanced topics in computer science.",
      link: "/teaching/curriculum",
      category: "core",
    },
    {
      title: "Lecture Notes",
      icon: <FileText className="w-8 h-8" />,
      description: "Detailed lecture notes and study materials for all courses offered by the department.",
      link: "/teaching/lecture-notes",
      category: "materials",
    },
    {
      title: "Best Projects",
      icon: <Award className="w-8 h-8" />,
      description: "Showcase of outstanding student projects that demonstrate excellence in application of concepts.",
      link: "/teaching/best-projects",
      category: "projects",
    },
    {
      title: "Research Opportunities",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Information about research opportunities available for undergraduate and graduate students.",
      link: "/research",
      category: "research",
    },
  ]

  const filteredResources =
    activeTab === "all" ? resources : resources.filter((resource) => resource.category === activeTab)

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003366]">Teaching Resources</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide a variety of resources to support the learning journey of our students. Explore our comprehensive
            collection of teaching materials and tools.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="all" className="mb-8">
            <div className="flex justify-center">
              <TabsList className="bg-white/70 backdrop-blur-sm">
                <TabsTrigger
                  value="all"
                  onClick={() => setActiveTab("all")}
                  className="data-[state=active]:bg-[#003366] data-[state=active]:text-white"
                >
                  All Resources
                </TabsTrigger>
                <TabsTrigger
                  value="core"
                  onClick={() => setActiveTab("core")}
                  className="data-[state=active]:bg-[#003366] data-[state=active]:text-white"
                >
                  Core Curriculum
                </TabsTrigger>
                <TabsTrigger
                  value="materials"
                  onClick={() => setActiveTab("materials")}
                  className="data-[state=active]:bg-[#003366] data-[state=active]:text-white"
                >
                  Study Materials
                </TabsTrigger>
                <TabsTrigger
                  value="projects"
                  onClick={() => setActiveTab("projects")}
                  className="data-[state=active]:bg-[#003366] data-[state=active]:text-white"
                >
                  Projects
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => (
                  <ResourceCard key={resource.title} resource={resource} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="core" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => (
                  <ResourceCard key={resource.title} resource={resource} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="materials" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => (
                  <ResourceCard key={resource.title} resource={resource} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => (
                  <ResourceCard key={resource.title} resource={resource} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button size="lg" className="bg-[#003366] hover:bg-[#00264d] text-white">
              View All Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ResourceCard({ resource, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            {resource.icon}
          </div>
          <h3 className="text-xl font-bold text-[#003366] mb-2">{resource.title}</h3>
          <p className="text-gray-600 flex-grow">{resource.description}</p>
          <Link href={resource.link}>
            <Button
              variant="ghost"
              className="mt-4 text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0 flex items-center group"
            >
              Explore
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}

