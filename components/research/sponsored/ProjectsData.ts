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
    "id": 1,
    "title": "Special Manpower Development Programme for Chips to System Design under CEERI-Pilani",
    "investigators": "Dr. Noor Mahammad Shaik  Dr.Binsu Kailath",
    "sponsor": "Deity-SMDP",
    "duration": "5 years (2015-2020)",
    "value": "92.4 Lakhs",
    "category": "completed",
    "color": "blue",
    "description": "Research project titled 'Special Manpower Development Programme for Chips to System Design under CEERI-Pilani' funded by Deity-SMDP.",
    "tags": ["Research"]
  },
  {
    "id": 2,
    "title": "Vertex Separators and its Variants: Structural and Algorithmic Study",
    "investigators": "Dr Sadagopan",
    "sponsor": "National Board for Higher Mathematics (NBHM), DAE, GOI",
    "duration": "3 years (2018-2021)",
    "value": "16.23 Lakhs",
    "category": "completed",
    "color": "blue",
    "description": "Research project titled 'Vertex Separators and its Variants: Structural and Algorithmic Study' funded by National Board for Higher Mathematics (NBHM), DAE, GOI.",
    "tags": ["Algorithms"]
  },
  {
    "id": 3,
    "title": "On Spanning Trees - Generalizations and Variants (Theory and Algorithms)",
    "investigators": "Dr Sadagopan",
    "sponsor": "DST-SERB",
    "duration": "3 years (2018-2021)",
    "value": "12 Lakhs",
    "category": "completed",
    "color": "blue",
    "description": "Research project titled 'On Spanning Trees - Generalizations and Variants (Theory and Algorithms)' funded by DST-SERB.",
    "tags": ["Algorithms"]
  },
  {
    "id": 16,
    "title": "Information Security Education Awareness Programme",
    "investigators": "Prof. Kamakoti (IIT Madras), Co-PI: Prof. Banshidhar Majhi, Dr. V Masilamani, Dr. Noor Mohammad, Dr. B Sivaselvan, Dr. N Sadagopan",
    "sponsor": "MEITY",
    "duration": "Starting 2018 (duration not specified)",
    "value": "Rs 3.17 Lakhs",
    "category": "completed",
    "color": "blue",
    "description": "This project is part of the Information Security Education Awareness Programme led by IIT Madras and co-investigators from NIT and other institutions, funded by MEITY to promote cybersecurity education and awareness.",
    "tags": ["Cybersecurity", "Information Security", "Awareness"]
  },
  {
    "id": 15,
    "title": "Projects under Visvesvaraya PhD Scheme for Electronics and IT",
    "investigators": "Dr. M Sreekumar and Dr. Noor Mohammad",
    "sponsor": "Ministry of Electronics and IT, Govt. of India",
    "duration": "5 years (2015-2020)",
    "value": "Rs 101.874 Lakhs",
    "category": "completed",
    "color": "blue",
    "description": "This project is part of the Visvesvaraya PhD Scheme aimed at strengthening research in Electronics and IT, funded by the Ministry of Electronics and IT, Govt. of India.",
    "tags": ["Electronics", "PhD Scheme", "IT"]
  },
  {
    "id": 6,
    "title": "Feasibility study on Computer Vision Based Angular Measurement of Wheels Without Markers",
    "investigators": "Dr. V Masilamani",
    "sponsor": "Manatec Electronics",
    "duration": "Duration not specified",
    "value": "0",
    "category": "completed",
    "color": "blue",
    "description": "Research project titled 'Feasibility study on Computer Vision Based Angular Measurement of Wheels Without Markers' funded by Manatec Electronics.",
    "tags": ["Research"]
  },
  {
    "id": 7,
    "title": "Knowledge Graph for adverse drug reaction (ADR) association for safety signal detection using public safety database",
    "investigators": "Dr.Masilamani Co  Dr. Sivaselvan, Dr. Munesh",
    "sponsor": "Data Foundry Pvt Ltd, Bangalore",
    "duration": "1 years (2019-2020)",
    "value": "0",
    "category": "completed",
    "color": "blue",
    "description": "Research project titled 'Knowledge Graph for adverse drug reaction (ADR) association for safety signal detection using public safety database' funded by Data Foundry Pvt Ltd, Bangalore.",
    "tags": ["Graph Theory"]
  },
  {
    "id": 8,
    "title": "Awareness and Research Avenues in Computer Engineering",
    "investigators": "Dr.Sivaselvan Co Dr. Sadagopan",
    "sponsor": "GAVS, Chennai",
    "duration": "2 years (2019-2021)",
    "value": "0",
    "category": "completed",
    "color": "blue",
    "description": "Research project titled 'Awareness and Research Avenues in Computer Engineering' funded by GAVS, Chennai.",
    "tags": ["Research"]
  },
  {
    "id": 9,
    "title": "Development of Fresh Water Pearl Culture Unit Based on IoT-Data Analytics",
    "investigators": "Dr. Munesh",
    "sponsor": "DST",
    "duration": "3 years (2019-2022)",
    "value": "0",
    "category": "completed",
    "color": "blue",
    "description": "Research project titled 'Development of Fresh Water Pearl Culture Unit Based on IoT-Data Analytics' funded by DST.",
    "tags": ["IoT"]
  },
  {
    "id": 10,
    "title": "Detection and prevention of forged obscene images/videos in the social networks.",
    "investigators": "Dr. Masilamani V",
    "sponsor": "MHA",
    "duration": "9 months",
    "value": "0",
    "category": "completed",
    "color": "blue",
    "description": "Research project titled 'Detection and prevention of forged obscene images/videos in the social networks.' funded by MHA.",
    "tags": ["Image Processing"]
  },
  {
    "id": 11,
    "title": "Blast pile fragment ananlysis software",
    "investigators": "Dr. V. Masilamani",
    "sponsor": "DIGI20 Info Solutions Pvt ltd",
    "duration": "12 weeks",
    "value": "0",
    "category": "completed",
    "color": "blue",
    "description": "Research project titled 'Blast pile fragment ananlysis software' funded by DIGI20 Info Solutions Pvt ltd.",
    "tags": ["Research"]
  },
  {
    "id": 12,
    "title": "Design & Development of Non-Invasive Geo-physical Method based system for locating hidden septic",
    "investigators": "P.I Dr.Noor Mahhamad SK",
    "sponsor": "M/s FISST",
    "duration": "1 years (2020-2021)",
    "value": "0",
    "category": "completed",
    "color": "blue",
    "description": "Research project titled 'Design & Development of Non-Invasive Geo-physical Method based system for locating hidden septic' funded by M/s FISST.",
    "tags": ["Research"]
  },
  {
    "id": 13,
    "title": "Testing and Characterisation of Evolvable Hardware algorithm to develop fault tolerant electronics architecture",
    "investigators": "Dr. Noor Mahammad Shak  Co-PI: Dr V Masilamani",
    "sponsor": "RIC DRDO.",
    "duration": "2 years (2020-2022)",
    "value": "0",
    "category": "completed",
    "color": "blue",
    "description": "Research project titled 'Testing and Characterisation of Evolvable Hardware algorithm to develop fault tolerant electronics architecture' funded by RIC DRDO..",
    "tags": ["Algorithms"]
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

