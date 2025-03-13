"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Download, Clock, Calendar, User, Eye, Bookmark, BookmarkCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ResourceCardProps {
  title: string
  course: string
  instructor: string
  date: string
  duration: string
  fileSize: string
  fileType: string
  tags: string[]
  downloads: number
}

export default function ResourceCard({
  title,
  course,
  instructor,
  date,
  duration,
  fileSize,
  fileType,
  tags,
  downloads,
}: ResourceCardProps) {
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-4 flex flex-col justify-center items-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-blue-100">{fileType}</span>
              <span className="text-sm font-medium">{fileSize}</span>
            </div>

            <div className="p-5 flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{course}</p>
                </div>
                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  {bookmarked ? <BookmarkCheck className="h-5 w-5 text-blue-600" /> : <Bookmark className="h-5 w-5" />}
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="text-sm text-gray-600">{instructor}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="text-sm text-gray-600">{date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="text-sm text-gray-600">{duration}</span>
                </div>
                <div className="flex items-center">
                  <Download className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="text-sm text-gray-600">{downloads} downloads</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-600">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex space-x-3">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button size="sm" variant="outline" className="border-blue-200 text-blue-600">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

