"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#003366]">Enhance Your Learning Journey</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The department encourages students of all programmes to credit online courses from NPTEL and this acts as
              good supplement in addition to in-house courses. Further, these online courses make the students aware of
              scientific and technological developments in the field of Computer Science and Engineering.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              These courses are carefully selected to complement our curriculum and provide you with additional
              perspectives and skills that are valuable in today's rapidly evolving technological landscape.
            </p>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-xl font-semibold text-[#003366] mb-3">How Online Electives Work</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>Selection:</strong> Choose from a variety of NPTEL courses that align with your academic
                  interests and career goals.
                </li>
                <li>
                  <strong>Registration:</strong> Register for the course through the NPTEL platform with your
                  institution credentials.
                </li>
                <li>
                  <strong>Completion:</strong> Complete all course requirements, including assignments and examinations.
                </li>
                <li>
                  <strong>Certification:</strong> Earn a certificate upon successful completion that can be credited to
                  your academic record.
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

