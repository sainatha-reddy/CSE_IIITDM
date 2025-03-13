"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, ChevronDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const departments = ["All Departments", "Computer Science", "Electronics", "Mechanical", "Design"]

const courseTypes = ["All Types", "Core Courses", "Electives", "Lab Courses", "Project Courses"]

const semesters = ["All Semesters", "Fall 2023", "Spring 2023", "Fall 2022", "Spring 2022"]

export default function CourseFilters() {
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedSemester, setSelectedSemester] = useState("All Semesters")
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter))
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search for courses or instructors..."
            className="pl-10 py-2 border-blue-100 focus:border-blue-300"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        </div>

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-blue-200">
                {selectedDepartment}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                {departments.map((dept) => (
                  <DropdownMenuItem
                    key={dept}
                    onClick={() => {
                      setSelectedDepartment(dept)
                      if (dept !== "All Departments") {
                        addFilter(dept)
                      }
                    }}
                    className="flex items-center justify-between"
                  >
                    {dept}
                    {selectedDepartment === dept && <Check className="h-4 w-4" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-blue-200">
                {selectedType}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                {courseTypes.map((type) => (
                  <DropdownMenuItem
                    key={type}
                    onClick={() => {
                      setSelectedType(type)
                      if (type !== "All Types") {
                        addFilter(type)
                      }
                    }}
                    className="flex items-center justify-between"
                  >
                    {type}
                    {selectedType === type && <Check className="h-4 w-4" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-blue-200">
                {selectedSemester}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                {semesters.map((semester) => (
                  <DropdownMenuItem
                    key={semester}
                    onClick={() => {
                      setSelectedSemester(semester)
                      if (semester !== "All Semesters") {
                        addFilter(semester)
                      }
                    }}
                    className="flex items-center justify-between"
                  >
                    {semester}
                    {selectedSemester === semester && <Check className="h-4 w-4" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" className="border-blue-200 flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="flex flex-wrap gap-2 pt-2 border-t border-gray-100"
        >
          <span className="text-sm text-gray-500 mr-2 pt-1">Active filters:</span>
          {activeFilters.map((filter) => (
            <Badge key={filter} variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
              {filter}
              <button className="ml-1 hover:text-blue-800" onClick={() => removeFilter(filter)}>
                ×
              </button>
            </Badge>
          ))}

          {activeFilters.length > 0 && (
            <Button
              variant="link"
              className="text-sm text-blue-600 hover:text-blue-800 p-0 h-auto"
              onClick={() => setActiveFilters([])}
            >
              Clear all
            </Button>
          )}
        </motion.div>
      )}
    </div>
  )
}

