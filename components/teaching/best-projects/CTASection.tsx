"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lightbulb, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white overflow-hidden border-none shadow-xl">
        <CardContent className="p-8 relative">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-3">Inspired by these projects?</h3>
              <p className="text-indigo-100 max-w-xl">
                Learn how you can develop your own innovative project and potentially be featured in our showcase of
                outstanding student work. Our faculty advisers are ready to guide you through the process.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium">
                <Lightbulb className="w-4 h-4 mr-2" />
                Project Ideas
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium">
                <User className="w-4 h-4 mr-2" />
                Contact Advisers
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

