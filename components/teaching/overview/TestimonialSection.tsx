"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "B.Tech CSE, 2022 Graduate",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The teaching methodology at IIITDM Kancheepuram's CSE department is exceptional. The faculty's emphasis on practical application alongside theoretical concepts prepared me well for my career at Google.",
    company: "Software Engineer at Google",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "M.Tech CSE, 2021 Graduate",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The research-oriented approach to teaching helped me develop critical thinking skills that have been invaluable in my work. The professors are always available for guidance and mentorship.",
    company: "Data Scientist at Microsoft",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "B.Tech CSE, 2023 Graduate",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The project-based learning approach gave me hands-on experience with real-world problems. This practical exposure made the transition to industry seamless and gave me an edge over other candidates.",
    company: "Product Manager at Amazon",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Ph.D CSE, 2020 Graduate",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The faculty's expertise and the department's focus on cutting-edge research created an ideal environment for my doctoral studies. The mentorship I received has shaped my academic career.",
    company: "Assistant Professor at IIT Delhi",
  },
]

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003366]">Student Testimonials</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Hear from our alumni about their experiences with our teaching methodology and how it has shaped their
            careers.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Slider */}
          <div
            className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <Quote className="h-6 w-6" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="md:flex items-center gap-8"
              >
                <div className="mb-6 md:mb-0 flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={testimonials[current].image || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-4">
                    "{testimonials[current].quote}"
                  </blockquote>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#003366] text-lg">{testimonials[current].name}</span>
                    <span className="text-gray-600">{testimonials[current].role}</span>
                    <span className="text-blue-600 text-sm mt-1">{testimonials[current].company}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg text-[#003366] hover:bg-[#003366] hover:text-white transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={next}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg text-[#003366] hover:bg-[#003366] hover:text-white transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

