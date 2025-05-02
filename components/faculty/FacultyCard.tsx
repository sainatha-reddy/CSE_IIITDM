"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChevronRight, Linkedin, Github, Globe } from "lucide-react"
import { getIconByKey } from "./FacultyData"

interface FacultyCardProps {
  faculty: any
  onSelect: (faculty: any) => void
  isHovered: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
  gradient: string
}

const FacultyCard: React.FC<FacultyCardProps> = ({
  faculty,
  onSelect,
  isHovered,
  onHoverStart,
  onHoverEnd,
  gradient,
}) => {
  const interests = Array.isArray(faculty?.interests) ? faculty.interests : [];
  const interestIconKeys = Array.isArray(faculty?.interestIconKeys) ? faculty.interestIconKeys : [];

  return (
    <motion.div whileHover={{ y: -5 }} onHoverStart={onHoverStart} onHoverEnd={onHoverEnd} className="h-full">
      <Card
        className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
        onClick={() => onSelect(faculty)}
      >
        <div className="relative">
          <div className={`h-3 bg-gradient-to-r ${gradient}`}></div>
          <div className="p-6 pb-0 flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src={faculty?.image || "/placeholder.svg"} alt={faculty?.name || "Faculty Member"} fill className="object-cover" />
            </div>
          </div>
        </div>
        <CardHeader className="text-center pt-4 pb-2">
          <CardTitle className="text-xl text-blue-900">{faculty?.name || "Unknown"}</CardTitle>
          <CardDescription className="text-blue-600 font-medium">{faculty?.position || "Faculty"}</CardDescription>
        </CardHeader>
        <CardContent className="px-6 pb-4">
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Research Interests</h4>
            <div className="flex flex-wrap gap-1">
              {interests.slice(0, 3).map((interest: string, idx: number) => (
                <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  {interest}
                </Badge>
              ))}
              {interests.length > 3 && (
                <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                  +{interests.length - 3} more
                </Badge>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex space-x-3">
              {faculty?.socialLinks?.linkedin && (
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
              {faculty?.socialLinks?.github && (
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
              {faculty?.socialLinks?.website && (
                <Link href={faculty.socialLinks.website} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 rounded-full text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                  >
                    <Globe className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
            <Button
              variant="ghost"
              className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0 flex items-center"
            >
              View Profile
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6"
          >
            <h3 className="text-xl font-bold text-white mb-1">{faculty?.name || "Unknown"}</h3>
            <p className="text-white/90 mb-3">{faculty?.position || "Faculty"}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {interestIconKeys.slice(0, 4).map((key: string, idx: number) => (
                <div
                  key={idx}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  {getIconByKey(key, "w-5 h-5")}
                </div>
              ))}
            </div>
            <Button className="bg-white text-blue-600 hover:bg-blue-50">View Full Profile</Button>
          </motion.div>
        )}
      </Card>
    </motion.div>
  )
}

export default FacultyCard

