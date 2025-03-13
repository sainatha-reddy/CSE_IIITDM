"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })

  return (
    <section
      ref={ref}
      className="py-16 bg-gradient-to-r from-[#003366] to-[#0056b3] text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Expand Your Knowledge?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore these online electives and enhance your learning journey with courses from leading platforms.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#003366] hover:bg-blue-50 group">
                Browse NPTEL Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 group">
                Talk to an Advisor
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20 text-sm text-blue-200">
              <p>
                For more information about online electives, please contact the Department of Computer Science &
                Engineering.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

