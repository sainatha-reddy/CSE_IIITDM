export interface ResearchProject {
  id: number
  title: string
  investigators: string
  sponsor: string
  duration: string
  value: string
  category: "ongoing" | "completed"
  color: string
  description?: string
  tags?: string[]
}

// Sample data for research projects
export const researchProjects: ResearchProject[] = [
  {
    id: 1,
    title: "On Spanning Trees - Generalizations and Variants (Theory and Algorithms)",
    investigators: "Dr. N Sadagopan",
    sponsor: "DST-SERB",
    duration: "Three years (2018-2021)",
    value: "16 Lakhs",
    category: "completed",
    color: "blue",
    description:
      "This research project focuses on advancing knowledge in the field of graph theory, specifically studying spanning trees and their variants. The project aims to develop innovative algorithms and contribute to the academic literature.",
    tags: ["Graph Theory", "Algorithms", "Spanning Trees"],
  },
  {
    id: 2,
    title: "Vertex Separators and its Variants: Structural and Algorithmic Study",
    investigators: "Dr. N Sadagopan",
    sponsor: "National Board for Higher Mathematics (NBHM), DAE, GOI",
    duration: "3 years (2018-2021)",
    value: "Rs 16.23 Lakhs",
    category: "completed",
    color: "purple",
    description:
      "This project investigates vertex separators in graphs, focusing on their structural properties and algorithmic applications. The research contributes to fundamental understanding of graph theory with applications in network design and analysis.",
    tags: ["Graph Theory", "Vertex Separators", "Algorithms"],
  },
  {
    id: 3,
    title: "Projects under Visvesvaraya PhD Scheme for Electronics and IT",
    investigators: "Dr. M Sreekumar and Dr. Noor Mohammad",
    sponsor: "Ministry of Electronics and IT, Govt. of India",
    duration: "5 Years- Starting from AY 2015-16",
    value: "101.874 Lakhs",
    category: "completed",
    color: "green",
    description:
      "This project supports PhD scholars in Electronics and IT under the Visvesvaraya PhD Scheme. It aims to enhance research capacity in these domains and develop skilled human resources for India's electronics and IT sectors.",
    tags: ["Electronics", "IT", "PhD Scheme"],
  },
  {
    id: 4,
    title: "Special Manpower Development Program for Chips to System Design",
    investigators: "PI: Dr. Noor Mohammad; Co-PI: Dr. Binsu J Kailath",
    sponsor: "MEITY, Govt. of India",
    duration: "3 years",
    value: "92.4 Lakh",
    category: "ongoing",
    color: "amber",
    description:
      "This program focuses on developing specialized manpower for chip and system design. It aims to bridge the gap between academic knowledge and industry requirements in semiconductor design and manufacturing.",
    tags: ["Chip Design", "System Design", "Semiconductor"],
  },
  {
    id: 5,
    title: "Information Security Education Awareness Programme",
    investigators:
      "Prof. Kamakoti IIT Madras Co-PI : Prof. Banshidhar Majhi, Dr. V Masilamani, Dr. Noor Mohammad, Dr. B Sivaselvan, Dr. N Sadagopan",
    sponsor: "MEITY",
    duration: "2018",
    value: "3.17 Lakhs",
    category: "completed",
    color: "red",
    description:
      "This program aims to create awareness about information security among students, faculty, and the general public. It includes workshops, seminars, and training sessions on various aspects of cybersecurity and data protection.",
    tags: ["Information Security", "Cybersecurity", "Education"],
  },
]

export const getProjectById = (id: number): ResearchProject | undefined => {
  return researchProjects.find((project) => project.id === id)
}

export const getProjectsByCategory = (category: "all" | "ongoing" | "completed"): ResearchProject[] => {
  if (category === "all") return researchProjects
  return researchProjects.filter((project) => project.category === category)
}

export const getProjectsByInvestigator = (name: string): ResearchProject[] => {
  if (!name) return researchProjects
  return researchProjects.filter((project) => project.investigators.toLowerCase().includes(name.toLowerCase()))
}

export const getProjectsBySponsor = (sponsor: string): ResearchProject[] => {
  if (!sponsor) return researchProjects
  return researchProjects.filter((project) => project.sponsor.toLowerCase().includes(sponsor.toLowerCase()))
}

export const calculateStatistics = () => {
  const totalProjects = researchProjects.length
  const ongoingProjects = researchProjects.filter((p) => p.category === "ongoing").length
  const completedProjects = researchProjects.filter((p) => p.category === "completed").length

  // Calculate total funding (removing "Rs", "Lakhs", "Lakh" and converting to number)
  const totalFunding = researchProjects.reduce((sum, project) => {
    const valueStr = project.value.replace(/Rs\s|Lakhs|Lakh/gi, "").trim()
    return sum + Number.parseFloat(valueStr)
  }, 0)

  return {
    totalProjects,
    totalFunding,
    ongoingProjects,
    completedProjects,
  }
}

export const getUniqueSponsors = (): string[] => {
  const sponsors = new Set<string>()
  researchProjects.forEach((project) => sponsors.add(project.sponsor))
  return Array.from(sponsors)
}

export const getUniqueInvestigators = (): string[] => {
  const investigators = new Set<string>()

  researchProjects.forEach((project) => {
    const names = project.investigators
      .split(/,|and|Co-PI\s*:|PI\s*:/i)
      .map((name) => name.trim())
      .filter((name) => name.length > 0)

    names.forEach((name) => {
      if (name.startsWith("Dr.") || name.startsWith("Prof.")) {
        investigators.add(name)
      }
    })
  })

  return Array.from(investigators)
}

