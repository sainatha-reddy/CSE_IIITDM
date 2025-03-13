"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Calendar, FileText } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#003366] to-[#6495ED] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Research Journey?</h2>
            <p className="text-xl mb-8 text-white/80">
              Join our vibrant research community and contribute to cutting-edge advancements in computer science. We
              welcome passionate researchers and innovative thinkers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#003366] hover:bg-white/90">
                Apply for PhD Program
                <FileText className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule a Meeting
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Research Office
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <InfoCard
              title="Research Seminars"
              description="Weekly seminars featuring faculty, students, and guest speakers discussing latest research."
              link="#seminars"
            />
            <InfoCard
              title="Upcoming Conferences"
              description="Information about upcoming conferences, workshops, and research events."
              link="#conferences"
            />
            <InfoCard
              title="Research Opportunities"
              description="Current openings for research assistants, postdocs, and collaborative projects."
              link="#opportunities"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ title, description, link }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/80 mb-4">{description}</p>
      <a href={link} className="inline-flex items-center text-white/90 hover:text-white font-medium group">
        Learn more
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  )
}

