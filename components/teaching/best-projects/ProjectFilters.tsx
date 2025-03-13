"use client"
import {
  Search,
  Filter,
  Cpu,
  MousePointer,
  Database,
  FileCode,
  BrainCircuit,
  LineChart,
  ImageIcon,
  User,
  Calendar,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Domain filters
const domains = [
  { name: "All Domains", value: "all" },
  { name: "Computer Architecture", value: "Computer Architecture", icon: <Cpu className="w-4 h-4" /> },
  {
    name: "Human Computer Interaction",
    value: "Human Computer Interaction",
    icon: <MousePointer className="w-4 h-4" />,
  },
  { name: "Datamining", value: "Datamining", icon: <Database className="w-4 h-4" /> },
  { name: "Graph Algorithms", value: "Graph Algorithms", icon: <FileCode className="w-4 h-4" /> },
  { name: "Machine Learning", value: "Machine Learning", icon: <BrainCircuit className="w-4 h-4" /> },
  { name: "Data Analytics", value: "Data Analytics", icon: <LineChart className="w-4 h-4" /> },
  { name: "Data Science", value: "Data Science", icon: <Database className="w-4 h-4" /> },
  { name: "Image Processing", value: "Image Processing", icon: <ImageIcon className="w-4 h-4" /> },
]

// Adviser filters
const advisers = [
  { name: "All Advisers", value: "all" },
  { name: "Dr Noor Mahammad", value: "Dr Noor Mahammad" },
  { name: "Dr Sivaselvan B", value: "Dr Sivaselvan B" },
  { name: "Dr N Sadagopan", value: "Dr N Sadagopan" },
  { name: "Prof. Banshidhar Majhi", value: "Prof. Banshidhar Majhi" },
  { name: "Dr Umarani J", value: "Dr Umarani J" },
]

// Year filters
const years = [
  { name: "All Years", value: "all" },
  { name: "2021", value: 2021 },
  { name: "2020", value: 2020 },
  { name: "2019", value: 2019 },
  { name: "2018", value: 2018 },
  { name: "2017", value: 2017 },
  { name: "2016", value: 2016 },
  { name: "2015", value: 2015 },
  { name: "2014", value: 2014 },
  { name: "2013", value: 2013 },
]

interface ProjectFiltersProps {
  selectedDomain: string
  setSelectedDomain: (domain: string) => void
  selectedAdviser: string
  setSelectedAdviser: (adviser: string) => void
  selectedYear: string | number
  setSelectedYear: (year: string) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function ProjectFilters({
  selectedDomain,
  setSelectedDomain,
  selectedAdviser,
  setSelectedAdviser,
  selectedYear,
  setSelectedYear,
  searchQuery,
  setSearchQuery,
}: ProjectFiltersProps) {
  return (
    <Card className="mb-8 border-none shadow-lg bg-white rounded-xl overflow-hidden">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Search */}
          <div className="md:col-span-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by student name, domain, or adviser..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Domain Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Domain</label>
            <div className="relative">
              <select
                className="w-full border border-gray-200 rounded-lg py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
              >
                {domains.map((domain) => (
                  <option key={domain.value} value={domain.value}>
                    {domain.name}
                  </option>
                ))}
              </select>
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600">
                {domains.find((d) => d.value === selectedDomain)?.icon || <Database className="w-4 h-4" />}
              </div>
            </div>
          </div>

          {/* Adviser Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Adviser</label>
            <div className="relative">
              <select
                className="w-full border border-gray-200 rounded-lg py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
                value={selectedAdviser}
                onChange={(e) => setSelectedAdviser(e.target.value)}
              >
                {advisers.map((adviser) => (
                  <option key={adviser.value} value={adviser.value}>
                    {adviser.name}
                  </option>
                ))}
              </select>
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-4 h-4" />
            </div>
          </div>

          {/* Year Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
            <div className="relative">
              <select
                className="w-full border border-gray-200 rounded-lg py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
                value={selectedYear.toString()}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map((year) => (
                  <option key={year.value} value={year.value.toString()}>
                    {year.name}
                  </option>
                ))}
              </select>
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-4 h-4" />
            </div>
          </div>

          {/* Reset Filters */}
          <div className="flex items-end">
            <Button
              variant="outline"
              className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 font-medium"
              onClick={() => {
                setSelectedDomain("all")
                setSelectedAdviser("all")
                setSelectedYear("all")
                setSearchQuery("")
              }}
            >
              <Filter className="w-4 h-4 mr-2" />
              Reset Filters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

