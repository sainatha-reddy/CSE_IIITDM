"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, GraduationCap, Users, Clock, Award, ArrowRight } from "lucide-react"

export default function PhdProgram() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-[#003366] inline-block relative"
          >
            PhD Program
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-[#6495ED]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-[#003366]/80 max-w-3xl mx-auto"
          >
            Our PhD program is designed to nurture the next generation of researchers and innovators in computer
            science.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Program Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#003366] mb-6">Program Overview</h3>

            <div className="prose max-w-none text-[#003366]/80">
              <p>
                The PhD program in Computer Science at IIITDM Kancheepuram offers a rigorous curriculum and research
                opportunities in various cutting-edge areas. Our program is designed to develop independent researchers
                who can contribute significantly to the field of computer science.
              </p>
              <p>
                Students work closely with faculty mentors on research projects that address important challenges in the
                field. The program emphasizes both theoretical foundations and practical applications, preparing
                graduates for careers in academia, industry research labs, and technology innovation.
              </p>
              <p>
                We offer full-time and part-time PhD programs to accommodate different student needs and backgrounds.
                Generous fellowships and research assistantships are available for qualified candidates.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-xl font-semibold text-[#003366] mb-4">Key Features</h4>
              <ul className="space-y-3">
                <FeatureItem
                  icon={<GraduationCap className="w-5 h-5" />}
                  text="Mentorship from internationally recognized faculty"
                />
                <FeatureItem icon={<Users className="w-5 h-5" />} text="Collaborative research environment" />
                <FeatureItem icon={<Award className="w-5 h-5" />} text="Competitive stipends and fellowships" />
                <FeatureItem icon={<Clock className="w-5 h-5" />} text="Flexible full-time and part-time options" />
              </ul>
            </div>

            <div className="pt-4">
              <Button className="bg-[#003366] hover:bg-[#003366]/90 text-white">
                Apply for PhD Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Admission Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-[#6495ED]/20">
              <CardHeader className="bg-gradient-to-r from-[#003366] to-[#6495ED] text-white">
                <CardTitle className="flex items-center text-2xl">
                  <Calendar className="mr-2 h-6 w-6" />
                  Admission Process
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <AdmissionStep
                    number="01"
                    title="Application Submission"
                    description="Submit your application with academic records, research proposal, and letters of recommendation."
                  />
                  <AdmissionStep
                    number="02"
                    title="Entrance Examination"
                    description="Qualified candidates take a written examination testing fundamental knowledge in computer science."
                  />
                  <AdmissionStep
                    number="03"
                    title="Interview"
                    description="Shortlisted candidates are invited for an interview with the faculty committee."
                  />
                  <AdmissionStep
                    number="04"
                    title="Admission Offer"
                    description="Selected candidates receive admission offers with details about fellowships and start dates."
                  />
                </div>

                <div className="mt-8 space-y-4">
                  <h4 className="font-semibold text-[#003366]">Important Dates</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <DateCard title="Application Deadline" date="April 15, 2023" />
                    <DateCard title="Entrance Exam" date="May 20, 2023" />
                    <DateCard title="Interview Dates" date="June 5-10, 2023" />
                    <DateCard title="Program Start" date="August 1, 2023" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ icon, text }) {
  return (
    <li className="flex items-center">
      <div className="w-8 h-8 rounded-full bg-[#6495ED]/20 flex items-center justify-center text-[#6495ED] mr-3">
        {icon}
      </div>
      <span className="text-[#003366]/80">{text}</span>
    </li>
  )
}

function AdmissionStep({ number, title, description }) {
  return (
    <div className="flex">
      <div className="mr-4 flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-[#003366]/10 flex items-center justify-center text-[#003366] font-bold">
          {number}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-[#003366]">{title}</h4>
        <p className="text-sm text-[#003366]/70 mt-1">{description}</p>
      </div>
    </div>
  )
}

function DateCard({ title, date }) {
  return (
    <div className="bg-[#f5f8ff] p-3 rounded-lg border border-[#6495ED]/20">
      <div className="text-sm text-[#003366]/70">{title}</div>
      <div className="font-medium text-[#003366] flex items-center mt-1">
        <Calendar className="w-4 h-4 mr-1 text-[#6495ED]" />
        {date}
      </div>
    </div>
  )
}

