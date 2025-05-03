"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Linkedin, Github, Mail, MapPin } from "lucide-react"
import FacultyImage from "./FacultyImage"

interface FacultyListProps {
  faculty: any
  onSelect: (faculty: any) => void
}

const FacultyList: React.FC<FacultyListProps> = ({ faculty, onSelect }) => {
  return (
    <motion.div whileHover={{ x: 5 }} className="h-full">
      <Card
        className="overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer border-l-4"
        style={{
          borderLeftColor: `rgb(${59 + ((faculty.id * 10) % 100)}, ${130 - ((faculty.id * 5) % 50)}, ${246 - ((faculty.id * 7) % 50)})`,
        }}
        onClick={() => onSelect(faculty)}
      >
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 p-6 flex flex-col md:flex-row items-center">
              <div className="w-24 h-24 md:w-16 md:h-16 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-4">
                <FacultyImage
                  src={faculty.image}
                  alt={faculty.name}
                  width={96}
                  height={96}
                  className="rounded-full"
                  autoSize={true}
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-blue-900">{faculty.name}</h3>
                <p className="text-sm text-blue-600">{faculty.position}</p>
              </div>
            </div>
            <div className="md:w-2/4 p-6 border-t md:border-t-0 md:border-l border-gray-100">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Research Interests</h4>
              <div className="flex flex-wrap gap-1">
                {faculty.interests.map((interest: string, idx: number) => (
                  <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="md:w-1/4 p-6 border-t md:border-t-0 md:border-l border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <Mail className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{faculty.email}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{faculty.office}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  {faculty.socialLinks.linkedin && (
                    <Link href={faculty.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 rounded-full text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                  {faculty.socialLinks.github && (
                    <Link href={faculty.socialLinks.github} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>
                <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50">
                  Profile
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default FacultyList

