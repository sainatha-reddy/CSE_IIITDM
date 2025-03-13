"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MainNav from "@/components/MainNav"
import Footer from "@/components/Footer"
import NewsTicker from "@/components/NewsTicker"
import TeachingHero from "./components/TeachingHero"
import TeachingPhilosophy from "./components/TeachingPhilosophy"
import TeachingMethodology from "./components/TeachingMethodology"
import TeachingResources from "./components/TeachingResources"
import TeachingStats from "./components/TeachingStats"
import TeachingTestimonials from "./components/TeachingTestimonials"
import Link from "next/link"
import Image from "next/image"
import { ArrowUp } from "lucide-react"

export default function TeachingOverview() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isNavSticky, setIsNavSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button after scrolling down 500px
      setShowScrollTop(window.scrollY > 500)

      // Make navbar sticky after scrolling past the hero section
      setIsNavSticky(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header
        className={`${isNavSticky ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-md" : "relative bg-white"} transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/placeholder.svg?height=50&width=50" alt="IIITDM Kancheepuram Logo" width={50} height={50} />
              <div>
                <span className="font-bold text-xl text-[#003366] block">IIITDM Kancheepuram</span>
                <span className="text-sm text-gray-600">Department of Computer Science & Engineering</span>
              </div>
            </Link>
            <MainNav />
          </div>
        </div>
      </header>

      <main className={isNavSticky ? "pt-20" : ""}>
        <NewsTicker />
        <TeachingHero />
        <TeachingPhilosophy />
        <TeachingMethodology />
        <TeachingStats />
        <TeachingResources />
        <TeachingTestimonials />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Ready to Learn with Us?</h2>
                <p className="text-xl mb-8">
                  Join our vibrant academic community and embark on a journey of discovery and innovation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors duration-300 flex items-center">
                    Apply Now
                    <ArrowUp className="ml-2 h-5 w-5 rotate-45" />
                  </button>
                  <button className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white rounded-md font-medium transition-colors duration-300">
                    Contact Faculty
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

