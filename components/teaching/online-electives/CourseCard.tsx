"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Clock, Users, Star, BookOpen } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export interface CourseProps {
  id: string
  title: string
  provider: string
  description: string
  icon: React.ReactNode
  duration: string
  level: "Beginner" | "Intermediate" | "Advanced"
  students: number
  rating: number
  tags?: string[]
  featured?: boolean
  bgColor?: string
  href?: string
}

export default function CourseCard({
  title,
  provider,
  description,
  icon,
  duration,
  level,
  students,
  rating,
  tags = [],
  featured = false,
  bgColor = "from-blue-500 to-blue-600",
  href = "#",
}: CourseProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Determine level color
  const levelColor = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  }[level]

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        className={`h-full overflow-hidden transition-all duration-300 ${
          featured
            ? "border-2 border-[#003366] shadow-lg"
            : "border border-gray-200 hover:border-[#6495ED] hover:shadow-md"
        }`}
      >
        <CardHeader className="pb-2 relative">
          {featured && (
            <div className="absolute -right-12 top-5 bg-[#003366] text-white text-xs font-bold py-1 px-10 transform rotate-45">
              Featured
            </div>
          )}
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full bg-gradient-to-r ${bgColor} flex items-center justify-center text-white mr-3 flex-shrink-0`}
            >
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#003366] line-clamp-1">{title}</h3>
              <p className="text-sm text-blue-600">Provider: {provider}</p>
            </div>
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardHeader>

        <CardContent className="pt-2">
          <p className="text-gray-600 line-clamp-3 mb-4">{description}</p>

          <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-gray-400" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1 text-gray-400" />
              <span>{students.toLocaleString()} students</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-500" />
              <span>{rating.toFixed(1)}/5.0</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-1 text-gray-400" />
              <span className={levelColor + " px-2 py-0.5 rounded-full text-xs"}>{level}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-2 flex justify-between items-center">
          <Link href={href} className="w-full">
            <Button
              variant="ghost"
              className="w-full justify-between text-[#003366] hover:text-[#6495ED] hover:bg-blue-50 group"
            >
              <span>Learn more</span>
              <ArrowRight
                className={`h-4 w-4 transition-transform duration-300 ${isHovered ? "transform translate-x-1" : ""}`}
              />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

