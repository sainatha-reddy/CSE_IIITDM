"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Github, Mail, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { StaffMember } from "./StaffData"

interface StaffListProps {
  staff: StaffMember
  onClick: (staff: StaffMember) => void
}

export default function StaffList({ staff, onClick }: StaffListProps) {
  return (
    <motion.div
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group"
      onClick={() => onClick(staff)}
    >
      <div className="p-4 flex items-center">
        <div className="relative h-16 w-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 border-2 border-[#003366]/10">
          <Image src={staff.image || "/placeholder.svg"} alt={staff.name} fill className="object-cover" />
        </div>

        <div className="ml-4 flex-grow">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#003366] transition-colors">
                {staff.name}
              </h3>
              <p className="text-sm text-[#0066cc]">{staff.position}</p>
            </div>
            <Badge variant="outline" className="text-xs mt-2 md:mt-0 w-fit bg-gray-50">
              {staff.department}
            </Badge>
          </div>

          <p className="text-sm text-gray-600 mt-2 line-clamp-1">{staff.bio}</p>

          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Mail className="h-4 w-4 mr-1 text-gray-400" />
            <span className="truncate">{staff.email}</span>
          </div>
        </div>

        <div className="ml-4 flex space-x-3 flex-shrink-0">
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
          <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-[#003366] transition-colors" />
        </div>
      </div>
    </motion.div>
  )
}

