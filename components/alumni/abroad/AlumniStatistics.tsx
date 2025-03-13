"use client"

import { motion } from "framer-motion"
import { alumniByYear, alumniByCountry } from "./AlumniData"

export default function AlumniStatistics() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Alumni by Year</h3>
            <div className="space-y-3">
              {alumniByYear.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700">{item.year}</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${(item.count / Math.max(...alumniByYear.map((i) => i.count))) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{item.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Destinations</h3>
            <div className="space-y-3">
              {alumniByCountry.slice(0, 5).map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700">{item.country}</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                      <div
                        className="bg-purple-600 h-2.5 rounded-full"
                        style={{ width: `${(item.count / Math.max(...alumniByCountry.map((i) => i.count))) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{item.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Alumni Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <p className="text-gray-700">Alumni at top tech companies like Apple, Facebook, Amazon</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <p className="text-gray-700">Graduates pursuing advanced degrees at prestigious universities</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <p className="text-gray-700">Global presence across USA, Europe, Australia and more</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <p className="text-gray-700">Strong research contributions in various domains</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

