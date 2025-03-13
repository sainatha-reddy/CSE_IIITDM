"use client"

import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Are you an IIITDM Kancheepuram Alumni?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our alumni network to stay connected with your alma mater and fellow alumni. Update your information
            and help us keep track of your achievements.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Update Your Information
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="px-6 py-3 bg-blue-500 bg-opacity-20 text-white font-medium rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors"
            >
              Join Alumni Network
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

