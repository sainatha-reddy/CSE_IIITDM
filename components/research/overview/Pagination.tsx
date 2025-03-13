"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Microscope, BookOpen, FileText, Database, ArrowUp } from "lucide-react"

const sections = [
  { id: "hero", label: "Overview", icon: <Microscope className="w-4 h-4" /> },
  { id: "research-areas", label: "Research Areas", icon: <Database className="w-4 h-4" /> },
  { id: "phd-program", label: "PhD Program", icon: <BookOpen className="w-4 h-4" /> },
  { id: "entrance-syllabus", label: "Entrance Syllabus", icon: <FileText className="w-4 h-4" /> },
  { id: "resources", label: "Resources", icon: <Database className="w-4 h-4" /> },
]

export default function Pagination() {
  const [activeSection, setActiveSection] = useState("hero")
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button when user scrolls down
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }

      // Determine active section based on scroll position
      const sectionElements = sections
        .map((section) => ({
          id: section.id,
          element: document.getElementById(section.id),
        }))
        .filter((section) => section.element)

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i]
        const rect = element.getBoundingClientRect()

        // If the section is in view or we've scrolled past it
        if (rect.top <= 200) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Desktop Pagination */}
      <div className="hidden md:block fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white/80 backdrop-blur-sm shadow-lg rounded-full py-4 px-2"
        >
          <div className="flex flex-col items-center space-y-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-[#003366] text-white"
                    : "bg-transparent text-[#003366] hover:bg-[#003366]/10"
                }`}
                aria-label={`Scroll to ${section.label}`}
                title={section.label}
              >
                {section.icon}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile Pagination */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm shadow-lg border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const currentIndex = sections.findIndex((s) => s.id === activeSection)
                if (currentIndex > 0) {
                  scrollToSection(sections[currentIndex - 1].id)
                }
              }}
              disabled={activeSection === sections[0].id}
              className="text-[#003366]"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Previous
            </Button>

            <span className="text-sm font-medium text-[#003366]">
              {sections.find((s) => s.id === activeSection)?.label || "Overview"}
            </span>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const currentIndex = sections.findIndex((s) => s.id === activeSection)
                if (currentIndex < sections.length - 1) {
                  scrollToSection(sections[currentIndex + 1].id)
                }
              }}
              disabled={activeSection === sections[sections.length - 1].id}
              className="text-[#003366]"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className={`fixed bottom-20 right-6 z-40 w-12 h-12 rounded-full bg-[#003366] text-white shadow-lg flex items-center justify-center hover:bg-[#6495ED] transition-all duration-300 ${
          showScrollTop ? "visible" : "invisible"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  )
}

