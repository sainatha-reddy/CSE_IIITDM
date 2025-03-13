"use client"

import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with IIITDM Kancheepuram</h2>
            <p className="text-lg mb-8 text-blue-100">
              Leverage our expertise and research capabilities to solve your industry challenges. Our faculty and
              students are ready to collaborate on innovative solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-700 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Initiate a Collaboration
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

