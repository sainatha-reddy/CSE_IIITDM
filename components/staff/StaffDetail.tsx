"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { X, Mail, Phone, Building2, Linkedin, Github, Briefcase, GraduationCap, Award } from "lucide-react"
import type { StaffMember } from "./StaffData"

interface StaffDetailProps {
  staff: StaffMember | null
  isOpen: boolean
  onClose: () => void
}

export default function StaffDetail({ staff, isOpen, onClose }: StaffDetailProps) {
  if (!staff) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>

          <div className="h-48 bg-gradient-to-r from-[#003366] to-[#0066cc] relative">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
          </div>

          <div className="px-6 md:px-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-end -mt-16 mb-6 relative">
              <div className="relative h-32 w-32 rounded-full overflow-hidden bg-white border-4 border-white shadow-lg mx-auto md:mx-0">
                <Image src={staff.image || "/placeholder.svg"} alt={staff.name} fill className="object-cover" />
              </div>

              <div className="text-center md:text-left md:ml-6 mt-4 md:mt-0">
                <h2 className="text-2xl font-bold text-gray-800">{staff.name}</h2>
                <p className="text-lg text-[#0066cc] font-medium">{staff.position}</p>
                <p className="text-gray-600 mt-1">{staff.department}</p>

                <div className="flex items-center justify-center md:justify-start mt-4 space-x-4">
                  <Link
                    href={`mailto:${staff.email}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#003366] transition-colors"
                  >
                    <Mail size={18} />
                    <span>Email</span>
                  </Link>
                  <Link
                    href={staff.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </Link>
                  <Link
                    href={staff.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-[#003366]" />
                    Biography
                  </h3>
                  <p className="text-gray-600">{staff.bio}</p>
                </div>

                {/* <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-[#003366]" />
                    Responsibilities
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {staff.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#003366]"></div>
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-[#003366]" />
                    Education
                  </h3>
                  <div className="space-y-3">
                    {staff.education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-[#003366] pl-4 py-1">
                        <div className="font-medium text-gray-800">{edu.degree}</div>
                        <div className="text-sm text-gray-600">{edu.institution}</div>
                        <div className="text-sm text-gray-500">{edu.year}</div>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-[#003366]" />
                    Experience
                  </h3>
                  <div className="space-y-3">
                    {staff.experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-[#003366] pl-4 py-1">
                        <div className="font-medium text-gray-800">{exp.role}</div>
                        <div className="text-sm text-gray-600">{exp.company}</div>
                        <div className="text-sm text-gray-500">{exp.duration}</div>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>

              <div>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[#003366]" />
                      <a
                        href={`mailto:${staff.email}`}
                        className="text-gray-600 hover:text-[#003366] transition-colors"
                      >
                        {staff.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[#003366]" />
                      <a href={`tel:${staff.phone}`} className="text-gray-600 hover:text-[#003366] transition-colors">
                        {staff.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-[#003366]" />
                      <span className="text-gray-600">{staff.office}</span>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {staff.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white text-[#003366] text-sm rounded-full border border-[#003366]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div> */}

                {/* <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Projects</h3>
                  <div className="space-y-3">
                    {staff.projects.map((project, index) => (
                      <div key={index} className="bg-white p-3 rounded-md border border-gray-100">
                        <div className="font-medium text-gray-800">{project.name}</div>
                        <div className="text-sm text-gray-600 mt-1">{project.description}</div>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

