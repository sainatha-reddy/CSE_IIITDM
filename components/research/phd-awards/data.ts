// PhD graduate data
export interface PhDGraduate {
  id: number
  name: string
  supervisor: string
  researchArea: string
  currentPosition: string
  currentAffiliation: string
  image: string
  year: number
  thesis: string
  email: string
  socialLinks: {
    linkedin: string
    googleScholar: string
    researchGate: string
  }
}

export const phdGraduates: PhDGraduate[] = [
  {
    id: 1,
    name: "Kanjar De",
    supervisor: "Prof. V Masilamani",
    researchArea: "Image Processing",
    currentPosition: "ERCIM Research Fellow",
    currentAffiliation: "Berlin, Deutschland",
    image: "/placeholder.svg?height=400&width=300",
    year: 2022,
    thesis: "Advanced Techniques in Image Processing for Medical Applications",
    email: "kanjar.de@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      googleScholar: "https://scholar.google.com/",
      researchGate: "https://www.researchgate.net/",
    },
  },
  {
    id: 2,
    name: "Mohamed Asan Basiri",
    supervisor: "Dr. Noor Mahammad",
    researchArea: "VLSI for Signal Processing",
    currentPosition: "Assistant Professor",
    currentAffiliation: "IIITDM Kurnool",
    image: "/placeholder.svg?height=400&width=300",
    year: 2021,
    thesis: "VLSI Architectures for Efficient Signal Processing Applications",
    email: "asan.basiri@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      googleScholar: "https://scholar.google.com/",
      researchGate: "https://www.researchgate.net/",
    },
  },
  {
    id: 3,
    name: "Manikandan V M",
    supervisor: "Prof. V Masilamani",
    researchArea: "Image Watermarking, Image Forensics",
    currentPosition: "Assistant Professor",
    currentAffiliation: "SRM University AP",
    image: "/placeholder.svg?height=400&width=300",
    year: 2020,
    thesis: "Robust Image Watermarking Techniques for Digital Forensics",
    email: "manikandan.vm@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      googleScholar: "https://scholar.google.com/",
      researchGate: "https://www.researchgate.net/",
    },
  },
  {
    id: 4,
    name: "Renjith C",
    supervisor: "Dr. N Sadagopan",
    researchArea: "Graph Theory, Graph Algorithms",
    currentPosition: "Assistant Professor",
    currentAffiliation: "NIT Calicut",
    image: "/placeholder.svg?height=400&width=300",
    year: 2019,
    thesis: "Efficient Algorithms for Graph Theoretic Problems",
    email: "renjith.c@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      googleScholar: "https://scholar.google.com/",
      researchGate: "https://www.researchgate.net/",
    },
  },
  {
    id: 5,
    name: "Dr. Oswald C",
    supervisor: "Prof. B Sivaselvan",
    researchArea: "Data Mining, Human Computer Interaction",
    currentPosition: "Assistant Professor",
    currentAffiliation: "NIT Trichy",
    image: "/placeholder.svg?height=400&width=300",
    year: 2019,
    thesis: "Novel Data Mining Approaches for Human-Computer Interaction",
    email: "oswald.c@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      googleScholar: "https://scholar.google.com/",
      researchGate: "https://www.researchgate.net/",
    },
  },
  {
    id: 6,
    name: "Ayesha",
    supervisor: "Prof. V Masilamani",
    researchArea: "Image Processing",
    currentPosition: "Assistant Professor",
    currentAffiliation: "VIT Chennai",
    image: "/placeholder.svg?height=400&width=300",
    year: 2018,
    thesis: "Advanced Image Processing Techniques for Pattern Recognition",
    email: "ayesha@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      googleScholar: "https://scholar.google.com/",
      researchGate: "https://www.researchgate.net/",
    },
  },
  {
    id: 7,
    name: "Santosh Kumar U",
    supervisor: "Prof. B Sivaselvan",
    researchArea: "Social Media Analytics",
    currentPosition: "Assistant Professor",
    currentAffiliation: "Gitam University",
    image: "/placeholder.svg?height=400&width=300",
    year: 2018,
    thesis: "Social Media Analytics for Behavior Prediction",
    email: "santosh.kumar@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      googleScholar: "https://scholar.google.com/",
      researchGate: "https://www.researchgate.net/",
    },
  },
  {
    id: 8,
    name: "Veeramani S",
    supervisor: "Dr. Noor Mahammad",
    researchArea: "Computer Networks, Packet Processing",
    currentPosition: "Assistant Professor",
    currentAffiliation: "Shiv Nadar University",
    image: "/placeholder.svg?height=400&width=300",
    year: 2017,
    thesis: "Efficient Packet Processing Techniques for High-Speed Networks",
    email: "veeramani.s@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      googleScholar: "https://scholar.google.com/",
      researchGate: "https://www.researchgate.net/",
    },
  },
  {
    id: 9,
    name: "Subin Sahayam",
    supervisor: "Dr. J Umarani",
    researchArea: "Pattern Recognition",
    currentPosition: "Assistant Professor",
    currentAffiliation: "Shiv Nadar University",
    image: "/placeholder.svg?height=400&width=300",
    year: 2017,
    thesis: "Novel Approaches to Pattern Recognition in Image Analysis",
    email: "subin.sahayam@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      googleScholar: "https://scholar.google.com/",
      researchGate: "https://www.researchgate.net/",
    },
  },
  {
    id: 10,
    name: "Dr. Kiruthika S",
    supervisor: "Prof. V Masilamani",
    researchArea: "Image Processing",
    currentPosition: "Assistant Professor",
    currentAffiliation: "VIT Chennai",
    image: "/placeholder.svg?height=400&width=300",
    year: 2016,
    thesis: "Advanced Image Processing for Medical Diagnostics",
    email: "kiruthika.s@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      googleScholar: "https://scholar.google.com/",
      researchGate: "https://www.researchgate.net/",
    },
  },
  {
    id: 11,
    name: "Pratik Joshi",
    supervisor: "Prof. V Masilamani",
    researchArea: "Image Processing",
    currentPosition: "Sr Machine Learning Engineer",
    currentAffiliation: "Dolby Labs",
    image: "/placeholder.svg?height=400&width=300",
    year: 2016,
    thesis: "Machine Learning Approaches for Image Processing",
    email: "pratik.joshi@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      googleScholar: "https://scholar.google.com/",
      researchGate: "https://www.researchgate.net/",
    },
  },
  {
    id: 12,
    name: "Srinivasverma V",
    supervisor: "Dr. Noor Mahammad",
    researchArea: "Networks, Packet Classification",
    currentPosition: "Assistant Professor",
    currentAffiliation: "Shiv Nadar University",
    image: "/placeholder.svg?height=400&width=300",
    year: 2015,
    thesis: "Efficient Packet Classification Algorithms for Network Security",
    email: "srinivasverma.v@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      googleScholar: "https://scholar.google.com/",
      researchGate: "https://www.researchgate.net/",
    },
  },
  {
    id: 13,
    name: "Dhayalakumar M",
    supervisor: "Dr. Noor Mahammad",
    researchArea: "High Speed Packet Classification Arch.",
    currentPosition: "Technical Lead",
    currentAffiliation: "Mesiter Gen Technologies Pvt Ltd",
    image: "/placeholder.svg?height=400&width=300",
    year: 2015,
    thesis: "High-Speed Packet Classification Architectures for Network Security",
    email: "dhayalakumar.m@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      googleScholar: "https://scholar.google.com/",
      researchGate: "https://www.researchgate.net/",
    },
  },
  {
    id: 14,
    name: "Shanmuga Kumar M",
    supervisor: "Dr. Noor Mahammad",
    researchArea: "Packet Classification Architectures",
    currentPosition: "Adjunct Prof & Founder",
    currentAffiliation: "SNU Chennai & MATIC",
    image: "/placeholder.svg?height=400&width=300",
    year: 2014,
    thesis: "Novel Architectures for Packet Classification in Network Security",
    email: "shanmuga.kumar@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      googleScholar: "https://scholar.google.com/",
      researchGate: "https://www.researchgate.net/",
    },
  },
  {
    id: 15,
    name: "Nilu R",
    supervisor: "Dr. J Umarani",
    researchArea: "Pattern Recognition",
    currentPosition: "Assistant Professor",
    currentAffiliation: "SSN Institutions",
    image: "/placeholder.svg?height=400&width=300",
    year: 2014,
    thesis: "Advanced Pattern Recognition Techniques for Image Analysis",
    email: "nilu.r@example.com",
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      googleScholar: "https://scholar.google.com/",
      researchGate: "https://www.researchgate.net/",
    },
  },
]

// Research areas for filtering
export const researchAreas = Array.from(new Set(phdGraduates.map((grad) => grad.researchArea)))

// Supervisors for filtering
export const supervisors = Array.from(new Set(phdGraduates.map((grad) => grad.supervisor)))

// Years for filtering
export const years = Array.from(new Set(phdGraduates.map((grad) => grad.year))).sort((a, b) => b - a)

// Get research area color
export const getResearchAreaColor = (area: string) => {
  const colors: Record<string, string> = {
    "Image Processing": "bg-blue-100 text-blue-800",
    "VLSI for Signal Processing": "bg-purple-100 text-purple-800",
    "Image Watermarking, Image Forensics": "bg-indigo-100 text-indigo-800",
    "Graph Theory, Graph Algorithms": "bg-green-100 text-green-800",
    "Data Mining, Human Computer Interaction": "bg-yellow-100 text-yellow-800",
    "Social Media Analytics": "bg-orange-100 text-orange-800",
    "Computer Networks, Packet Processing": "bg-red-100 text-red-800",
    "Pattern Recognition": "bg-pink-100 text-pink-800",
    "Networks, Packet Classification": "bg-teal-100 text-teal-800",
    "High Speed Packet Classification Arch.": "bg-cyan-100 text-cyan-800",
    "Packet Classification Architectures": "bg-emerald-100 text-emerald-800",
  }

  // Default color if area not found
  return colors[area] || "bg-gray-100 text-gray-800"
}

