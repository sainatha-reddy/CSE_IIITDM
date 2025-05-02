"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  return (
    <motion.div
      className="bg-gradient-to-r from-indigo-800 to-blue-700 py-16 px-4 sm:px-6 lg:px-8 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Interested in Collaborating?</h2>
        <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
          We welcome collaborations with industry partners and other academic institutions. Get in touch to explore
          potential research partnerships.
        </p>
        <Link
          href="https://iiitdm.ac.in/sricce"
          target="_blank"
          className="inline-flex items-center px-6 py-3 bg-white text-blue-800 rounded-md font-medium shadow-lg hover:bg-blue-50 transition-all duration-300 group"
        >
          Contact Us
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}

