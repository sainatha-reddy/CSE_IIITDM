"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Award, BookOpen, FileText, Users, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Sample achievements data
const achievements = {
  awards: [
    {
      id: 1,
      title: "Best Research Paper Award",
      event: "International Conference on Computer Science 2023",
      faculty: "Dr. Masilamani V",
      image: "/placeholder.svg?height=100&width=100",
      description: "Awarded for groundbreaking research in computer vision algorithms.",
    },
    {
      id: 2,
      title: "Excellence in Teaching Award",
      event: "IIITDM Kancheepuram Annual Awards 2023",
      faculty: "Prof. Sivaselvan B",
      image: "/placeholder.svg?height=100&width=100",
      description: "Recognized for outstanding teaching methodology and student mentorship.",
    },
    {
      id: 3,
      title: "Young Scientist Award",
      event: "Indian Science Congress 2022",
      faculty: "Dr. Rahul Raman",
      image: "/placeholder.svg?height=100&width=100",
      description: "Honored for contributions to biometric security systems.",
    },
  ],
  publications: [
    {
      id: 1,
      title: "Deep Learning Approaches for Medical Image Analysis",
      journal: "IEEE Transactions on Medical Imaging",
      year: 2023,
      faculty: ["Dr. Umarani Jayaraman", "Dr. Rahul Raman"],
      impact: 7.8,
      citations: 24,
    },
    {
      id: 2,
      title: "Secure Cloud Computing Frameworks for IoT Applications",
      journal: "ACM Transactions on Internet of Things",
      year: 2023,
      faculty: ["Dr. Sanjeet Kumar Nayak", "Dr. Preeth R"],
      impact: 6.5,
      citations: 18,
    },
    {
      id: 3,
      title: "Optimization Algorithms for Resource Allocation in Edge Computing",
      journal: "Journal of Parallel and Distributed Computing",
      year: 2022,
      faculty: ["Dr. Pandiri Venkatesh", "Dr. Jaishree Mayank"],
      impact: 5.9,
      citations: 32,
    },
  ],
  projects: [
    {
      id: 1,
      title: "AI-Powered Healthcare Diagnostics System",
      sponsor: "Department of Science and Technology",
      duration: "2022-2025",
      faculty: "Dr. Kannadasan K",
      budget: "₹85 Lakhs",
      status: "Ongoing",
    },
    {
      id: 2,
      title: "Secure Blockchain Framework for Digital Voting",
      sponsor: "Ministry of Electronics and Information Technology",
      duration: "2021-2024",
      faculty: "Dr. Krishnakumar Gnanambikai",
      budget: "₹120 Lakhs",
      status: "Ongoing",
    },
    {
      id: 3,
      title: "Smart Grid Optimization using Reinforcement Learning",
      sponsor: "Ministry of Power",
      duration: "2020-2023",
      faculty: "Dr. Jaishree Mayank",
      budget: "₹95 Lakhs",
      status: "Completed",
    },
  ],
}

export default function FacultyAchievements() {
  const [activeTab, setActiveTab] = useState("awards")

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
        <Award className="w-6 h-6 mr-2 text-blue-600" />
        Faculty Achievements
      </h2>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="awards" className="flex items-center">
            <Award className="w-4 h-4 mr-2" />
            Awards & Honors
          </TabsTrigger>
          <TabsTrigger value="publications" className="flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Key Publications
          </TabsTrigger>
          <TabsTrigger value="projects" className="flex items-center">
            <Zap className="w-4 h-4 mr-2" />
            Funded Projects
          </TabsTrigger>
        </TabsList>

        <TabsContent value="awards" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-start space-x-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={award.image || "/placeholder.svg"}
                          alt={award.faculty}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-blue-900">{award.title}</CardTitle>
                        <p className="text-sm text-blue-600 font-medium">{award.faculty}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">{award.description}</p>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {award.event}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="publications" className="mt-0">
          <div className="space-y-4">
            {achievements.publications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-blue-900 mb-1">{publication.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {publication.faculty.map((name, idx) => (
                        <Badge key={idx} variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                          {name}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <FileText className="w-4 h-4 mr-2 text-gray-400" />
                      {publication.journal}, {publication.year}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <span className="block text-lg font-bold text-blue-700">{publication.impact}</span>
                          <span className="text-xs text-gray-500">Impact Factor</span>
                        </div>
                        <div className="text-center">
                          <span className="block text-lg font-bold text-blue-700">{publication.citations}</span>
                          <span className="text-xs text-gray-500">Citations</span>
                        </div>
                      </div>
                      <Badge className="bg-blue-600">{publication.year}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projects" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg text-blue-900">{project.title}</CardTitle>
                      <Badge className={project.status === "Ongoing" ? "bg-green-600" : "bg-blue-600"}>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-700">{project.faculty}</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-700">{project.sponsor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">{project.duration}</span>
                        <span className="text-sm font-semibold text-blue-700">{project.budget}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

