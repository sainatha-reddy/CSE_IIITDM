"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { User, Briefcase, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type PhDGraduate, getResearchAreaColor } from "./GraduatesData"

interface GraduateCardProps {
  graduate: PhDGraduate
  onClick: () => void
}

export default function GraduateCard({ graduate, onClick }: GraduateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100"
      onClick={onClick}
    >
      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={graduate.image || "/placeholder.svg"}
              alt={graduate.name}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/30 to-transparent h-24"></div>
      </div>

      <div className="p-6">
        <div className="mb-3">
          <Badge className={`${getResearchAreaColor(graduate.researchArea)}`}>{graduate.researchArea}</Badge>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{graduate.name}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <User className="h-4 w-4 mr-2 text-blue-500" />
            <span>Supervised by {graduate.supervisor}</span>
          </div>

          <div className="flex items-center text-gray-600 text-sm">
            <Briefcase className="h-4 w-4 mr-2 text-blue-500" />
            <span>{graduate.currentPosition}</span>
          </div>

          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-2 text-blue-500" />
            <span>{graduate.currentAffiliation}</span>
          </div>
        </div>

        <div className="pt-2 flex justify-between items-center">
          <span className="text-sm text-gray-500">PhD {graduate.year}</span>
          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
            View Profile <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

