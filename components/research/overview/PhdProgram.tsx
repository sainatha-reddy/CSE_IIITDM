"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, GraduationCap, Users, Clock, Award, ArrowRight, FileText, CheckCircle } from "lucide-react"

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
            The department invites applications for full-time Ph.D programme twice a year (Jan and July Sessions).
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
            <h3 className="text-2xl font-bold text-[#003366] mb-6">Program Structure</h3>

            <div className="prose max-w-none text-[#003366]/80">
              <p>
                Ph.D programme consists of course work (4 courses), comprehensive viva (qualifier) and 
                research contribution in one's specific area of interest.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-xl font-semibold text-[#003366] mb-4">Program Components</h4>
              <ul className="space-y-3">
                <FeatureItem
                  icon={<FileText className="w-5 h-5" />}
                  text="Course work (4 courses)"
                />
                <FeatureItem icon={<CheckCircle className="w-5 h-5" />} text="Comprehensive viva (qualifier)" />
                <FeatureItem icon={<GraduationCap className="w-5 h-5" />} text="Research contribution in specific area of interest" />
                <FeatureItem icon={<Calendar className="w-5 h-5" />} text="Applications accepted twice a year (Jan and July Sessions)" />
              </ul>
            </div>

            <div className="pt-4">
              <h4 className="text-xl font-semibold text-[#003366] mb-4">Evaluation</h4>
              <div className="prose max-w-none text-[#003366]/80">
                <p>
                  If a student opts for the optional subject, then his/her performance will be assessed against 5 subjects, 
                  otherwise 4 subjects.
                </p>
                <p className="text-sm italic mt-2">
                  Note: One optional subject related to the research area.
                </p>
              </div>
            </div>

            
          </motion.div>

          {/* Right Column - Selection Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-[#6495ED]/20">
              <CardHeader className="bg-gradient-to-r from-[#003366] to-[#6495ED] text-white">
                <CardTitle className="flex items-center text-2xl">
                  <Users className="mr-2 h-6 w-6" />
                  Selection Process
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="prose max-w-none text-[#003366]/80 mb-6">
                    <p>
                      The department conducts a written test and an interview to eligible candidates.
                    </p>
                  </div>
                  
                  <AdmissionStep
                    number="01"
                    title="Application Submission"
                    description="Submit your application with academic records, research proposal, and letters of recommendation."
                  />
                  <AdmissionStep
                    number="02"
                    title="Written Test"
                    description="Eligible candidates will be invited to take a written test to assess subject knowledge."
                  />
                  <AdmissionStep
                    number="03"
                    title="Interview"
                    description="Shortlisted candidates from the written test will proceed to an interview with faculty."
                  />
                  <AdmissionStep
                    number="04"
                    title="Admission Offer"
                    description="Selected candidates receive admission offers for either January or July session."
                  />
                </div>

                <div className="mt-8 space-y-4">
                  <h4 className="font-semibold text-[#003366]">Application Cycles</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <DateCard title="January Session" date="Applications in October-November" />
                    <DateCard title="July Session" date="Applications in April-May" />
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

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center">
      <div className="w-8 h-8 rounded-full bg-[#6495ED]/20 flex items-center justify-center text-[#6495ED] mr-3">
        {icon}
      </div>
      <span className="text-[#003366]/80">{text}</span>
    </li>
  )
}

function AdmissionStep({ number, title, description }: { number: string; title: string; description: string }) {
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

function DateCard({ title, date }: { title: string; date: string }) {
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

