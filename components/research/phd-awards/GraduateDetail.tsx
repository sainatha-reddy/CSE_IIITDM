"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { PhDGraduate } from "./GraduatesData"

interface GraduateDetailProps {
  graduate: PhDGraduate | null
  onClose: () => void
}

export default function GraduateDetail({ graduate, onClose }: GraduateDetailProps) {
  if (!graduate) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48 md:h-64 bg-gradient-to-r from-blue-500 to-indigo-600">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={graduate.image || "/placeholder.svg"}
              alt={graduate.name}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="pt-20 px-6 pb-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{graduate.name}</h2>
            <p className="text-gray-600">
              {graduate.currentPosition} at {graduate.currentAffiliation}
            </p>

            <div className="flex justify-center gap-3 mt-4">
              <a
                href={graduate.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={graduate.socialLinks.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                </svg>
              </a>
              <a
                href={graduate.socialLinks.researchGate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .078.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93.043-.372.063-.864.063-1.457 0-.594-.02-1.084-.063-1.455-.042-.372-.101-.695-.177-.93-.234-.735-.603-1.261-1.174-1.652-.57-.39-1.306-.583-2.106-.583h-.001zM7.217 4.5c-1.209 0-2.445.363-3.57 1.07-.855.54-1.586 1.296-2.166 2.197-.543.847-.888 1.8-1.03 2.742-.064.427-.096.912-.096 1.452 0 .54.032 1.024.096 1.45.142.944.487 1.9 1.03 2.748.58.9 1.31 1.655 2.166 2.196 1.124.707 2.36 1.07 3.57 1.07.59 0 1.154-.078 1.706-.236.552-.156 1.07-.374 1.554-.662a7.695 7.695 0 0 0 1.682-1.471c.33-.376.594-.784.815-1.215.264-.54.466-1.144.604-1.81.138-.666.21-1.39.21-2.168 0-.777-.07-1.5-.21-2.168-.138-.666-.34-1.27-.604-1.81a7.89 7.89 0 0 0-.815-1.216 7.694 7.694 0 0 0-1.682-1.47 7.233 7.233 0 0 0-1.554-.664 7.098 7.098 0 0 0-1.706-.235z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">PhD Information</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Research Area</h4>
                  <p className="text-gray-800">{graduate.researchArea}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Supervisor</h4>
                  <p className="text-gray-800">{graduate.supervisor}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Year of Graduation</h4>
                  <p className="text-gray-800">{graduate.year}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Thesis Title</h4>
                  <p className="text-gray-800">{graduate.thesis}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Current Information</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Current Position</h4>
                  <p className="text-gray-800">{graduate.currentPosition}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Current Affiliation</h4>
                  <p className="text-gray-800">{graduate.currentAffiliation}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Email</h4>
                  <a href={`mailto:${graduate.email}`} className="text-blue-600 hover:underline">
                    {graduate.email}
                  </a>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Links</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <a
                      href={graduate.socialLinks.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
                    >
                      Google Scholar
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                    <a
                      href={graduate.socialLinks.researchGate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700"
                    >
                      ResearchGate
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Selected Publications</h3>

            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                <h4 className="font-medium text-gray-800">Novel Approaches in {graduate.researchArea}</h4>
                <p className="text-sm text-gray-600 mt-1">Journal of Computer Science, {graduate.year}</p>
              </div>

              <div className="p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                <h4 className="font-medium text-gray-800">Advancements in {graduate.researchArea} Techniques</h4>
                <p className="text-sm text-gray-600 mt-1">International Conference on Computing, {graduate.year - 1}</p>
              </div>

              <div className="p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                <h4 className="font-medium text-gray-800">A Survey of {graduate.researchArea} Methods</h4>
                <p className="text-sm text-gray-600 mt-1">IEEE Transactions, {graduate.year - 2}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Button onClick={onClose} variant="outline" className="text-gray-600">
              Close
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

