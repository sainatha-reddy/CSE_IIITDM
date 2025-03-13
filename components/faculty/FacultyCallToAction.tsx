"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FacultyCallToAction() {
  return (
    <Card className="mt-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Interested in joining our faculty?</h3>
            <p className="text-blue-100 max-w-xl">
              We're always looking for talented researchers and educators to join our team. Check out our current
              openings or contact us to learn more.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-white text-blue-600 hover:bg-blue-50">Current Openings</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

