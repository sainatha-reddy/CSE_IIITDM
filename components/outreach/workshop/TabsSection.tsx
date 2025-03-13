"use client"

import { useState } from "react"
import WorkshopsList from "./WorkshopsList"
import AwardsSection from "./AwardsSection"

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState("workshops")

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("workshops")}
            className={`px-6 py-3 font-medium text-sm transition-all ${
              activeTab === "workshops"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            Workshops & Courses
          </button>
          <button
            onClick={() => setActiveTab("awards")}
            className={`px-6 py-3 font-medium text-sm transition-all ${
              activeTab === "awards" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-600"
            }`}
          >
            Awards & Recognitions
          </button>
        </div>

        {activeTab === "workshops" && <WorkshopsList />}
        {activeTab === "awards" && <AwardsSection />}
      </div>
    </section>
  )
}

