"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Github, Mail, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { StaffMember } from "./StaffData"

interface StaffCardProps {
  staff: StaffMember
  onClick: (staff: StaffMember) => void
}

export default function StaffCard({ staff, onClick }: StaffCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group"
      onClick={() => onClick(staff)}
    >
      <div className="h-32 bg-gradient-to-r from-[#003366] to-[#0066cc] relative"> 
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=400')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="absolute -bottom-12 left-4">
          <div className="relative h-24 w-24 rounded-full border-4 border-white overflow-hidden bg-white">
            <Image src={staff.image || "/placeholder.svg"} alt={staff.name} fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="p-6 pt-16">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#003366] transition-colors">
              {staff.name}
            </h3>
            <p className="text-sm text-[#0066cc]"><strong>{staff.position}</strong></p>
          </div>
          <Badge variant="outline" className="bg-gray-50">
            {staff.department}
          </Badge>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-600 line-clamp-2">{staff.bio}</p>
        </div>

        <div className="mt-4 flex items-center text-sm text-gray-500">
          <Building2 className="h-4 w-4 mr-1 text-gray-400" />
          <span className="truncate">{staff.office}</span>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex space-x-3">
            <Link
              href={`mailto:${staff.email}`}
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-[#003366] transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href={staff.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href={staff.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-gray-900 transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs text-[#003366] font-medium hover:underline"
          >
            View Profile
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

