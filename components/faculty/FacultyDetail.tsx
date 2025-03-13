import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Award, BookOpen, Linkedin, Github, Globe } from "lucide-react"

interface FacultyDetailProps {
  faculty: any
}

const FacultyDetail: React.FC<FacultyDetailProps> = ({ faculty }) => {
  if (!faculty) return null

  return (
    <>
      <DialogHeader className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0">
          <Image
            src={faculty.image || "/placeholder.svg"}
            alt={faculty.name}
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <div>
          <DialogTitle className="text-2xl">{faculty.name}</DialogTitle>
          <DialogDescription className="text-blue-600 font-medium">{faculty.position}</DialogDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="flex items-center text-sm text-gray-600">
              <Mail className="w-4 h-4 mr-1" />
              {faculty.email}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              {faculty.office}
            </div>
          </div>
          <div className="flex mt-3 space-x-2">
            {faculty.socialLinks.linkedin && (
              <Link href={faculty.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 rounded-full text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
            )}
            {faculty.socialLinks.github && (
              <Link href={faculty.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </Link>
            )}
            {faculty.socialLinks.website && (
              <Link href={faculty.socialLinks.website} target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 rounded-full text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                >
                  <Globe className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </DialogHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-900">Research Interests</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {faculty.interests.map((interest: string, idx: number) => (
              <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {interest}
              </Badge>
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-3 text-blue-900">Education</h3>
          <div className="space-y-2 mb-6">
            {faculty.education.map((edu: any, idx: number) => (
              <div key={idx} className="flex items-start">
                <Award className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">{edu.degree}</p>
                  <p className="text-sm text-gray-600">
                    {edu.university}, {edu.year}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-3 text-blue-900">Courses Taught</h3>
          <div className="space-y-2">
            {faculty.courses.map((course: string, idx: number) => (
              <div key={idx} className="flex items-center">
                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                <p className="text-gray-700">{course}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-900">Academic Metrics</h3>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card className="bg-blue-50 border-none">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-blue-700">{faculty.publications}</p>
                <p className="text-sm text-blue-600">Publications</p>
              </CardContent>
            </Card>
            <Card className="bg-indigo-50 border-none">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-indigo-700">{faculty.projects}</p>
                <p className="text-sm text-indigo-600">Projects</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border-none">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-purple-700">{faculty.students}</p>
                <p className="text-sm text-purple-600">Students</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-lg font-semibold mb-3 text-blue-900">Contact Information</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-gray-400 mr-3" />
              <p className="text-gray-700">{faculty.email}</p>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-gray-400 mr-3" />
              <p className="text-gray-700">{faculty.phone}</p>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-gray-400 mr-3" />
              <p className="text-gray-700">{faculty.office}</p>
            </div>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <Mail className="w-4 h-4 mr-2" />
            Contact {faculty.name.split(" ")[0]}
          </Button>
        </div>
      </div>
    </>
  )
}

export default FacultyDetail

