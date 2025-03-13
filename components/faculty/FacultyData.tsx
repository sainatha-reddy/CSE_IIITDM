import {
  BookMarked,
  Cpu,
  Network,
  Database,
  BrainCircuit,
  Lock,
  ImageIcon,
  Wifi,
  Zap,
  Cloud,
  LineChart,
  Eye,
  Fingerprint,
  Calendar,
  FileText,
  User,
} from "lucide-react"

// Faculty data in JSON format
export const facultyData = [
  {
    id: 1,
    name: "Dr. Amalan Joseph Antony A",
    position: "Assistant Professor",
    image: "/placeholder.svg?height=300&width=300",
    interests: ["Cryptography", "Data Structures and Algorithms", "Theory of Computation"],
    email: "amalan@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 101",
    education: [
      { degree: "Ph.D", university: "IIT Madras", year: "2018" },
      { degree: "M.Tech", university: "NIT Trichy", year: "2012" },
      { degree: "B.Tech", university: "Anna University", year: "2010" },
    ],
    publications: 12,
    projects: 4,
    students: 5,
    courses: ["Discrete Mathematics", "Algorithm Design", "Cryptography"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["lock", "file", "book"],
  },
  {
    id: 2,
    name: "Dr. Bhukya Krishna Priya",
    position: "Assistant Professor",
    image: "/placeholder.svg?height=300&width=300",
    interests: [
      "Computer Architecture",
      "Memory Technologies",
      "Machine Learning",
      "Image Processing",
      "Vehicular Networks",
    ],
    email: "krishnapriya@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 102",
    education: [
      { degree: "Ph.D", university: "IIT Bombay", year: "2017" },
      { degree: "M.Tech", university: "IIT Kharagpur", year: "2011" },
      { degree: "B.Tech", university: "JNTU Hyderabad", year: "2009" },
    ],
    publications: 18,
    projects: 6,
    students: 8,
    courses: ["Computer Architecture", "Digital Systems Design", "Machine Learning"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["cpu", "database", "brain", "image", "network"],
  },
  {
    id: 3,
    name: "Dr. Jagadeesh Kakarla",
    position: "Assistant Professor",
    image: "/placeholder.svg?height=300&width=300",
    interests: ["Wireless Sensor Networks", "Adhoc Networks", "Internet of Things", "Medical Image processing"],
    email: "jagadeesh@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 103",
    education: [
      { degree: "Ph.D", university: "IIT Delhi", year: "2016" },
      { degree: "M.Tech", university: "NIT Warangal", year: "2010" },
      { degree: "B.Tech", university: "Andhra University", year: "2008" },
    ],
    publications: 15,
    projects: 5,
    students: 6,
    courses: ["Wireless Networks", "IoT Systems", "Network Security"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["wifi", "network", "cpu", "image"],
  },
  {
    id: 4,
    name: "Dr. Jaishree Mayank",
    position: "Assistant Professor",
    image: "/placeholder.svg?height=300&width=300",
    interests: [
      "Scheduling Strategies in Real-time/ Cyber Physical Systems",
      "AI Algorithms for Smart Grids and Electric Vehicle Problems/Drones Problems",
    ],
    email: "jaishree@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 104",
    education: [
      { degree: "Ph.D", university: "IIT Madras", year: "2017" },
      { degree: "M.Tech", university: "IIT Roorkee", year: "2011" },
      { degree: "B.Tech", university: "NIT Jaipur", year: "2009" },
    ],
    publications: 14,
    projects: 7,
    students: 4,
    courses: ["Real-time Systems", "AI for Cyber-Physical Systems", "Smart Grid Technologies"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["calendar", "brain", "zap"],
  },
  {
    id: 5,
    name: "Dr. Kannadasan K",
    position: "Assistant Professor",
    image: "/placeholder.svg?height=300&width=300",
    interests: ["Brain-Computer Interface", "EEG Signal Processing", "Affective Computing", "Machine Learning"],
    email: "kannadasan@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 105",
    education: [
      { degree: "Ph.D", university: "IIT Madras", year: "2018" },
      { degree: "M.Tech", university: "Anna University", year: "2012" },
      { degree: "B.E", university: "Anna University", year: "2010" },
    ],
    publications: 16,
    projects: 5,
    students: 7,
    courses: ["Brain-Computer Interfaces", "Signal Processing", "Machine Learning for Healthcare"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["brain", "chart", "user", "database"],
  },
  {
    id: 6,
    name: "Dr. Krishnakumar Gnanambikai",
    position: "Assistant Professor",
    image: "/placeholder.svg?height=300&width=300",
    interests: ["Micro-architecture Security", "Web Security", "Network Security", "Applications of AI in security"],
    email: "krishnakumar@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 106",
    education: [
      { degree: "Ph.D", university: "IISc Bangalore", year: "2016" },
      { degree: "M.Tech", university: "NIT Surathkal", year: "2010" },
      { degree: "B.Tech", university: "Anna University", year: "2008" },
    ],
    publications: 20,
    projects: 8,
    students: 9,
    courses: ["Computer Security", "Network Security", "AI for Cybersecurity"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["cpu", "lock", "network", "brain"],
  },
  {
    id: 7,
    name: "Prof. Masilamani V",
    position: "Professor",
    image: "/placeholder.svg?height=300&width=300",
    interests: [
      "Image Processing & Computer Vision",
      "Machine Learning",
      "Algorithms & Data Structure",
      "Theory of Computing",
    ],
    email: "masilamani@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 107",
    education: [
      { degree: "Ph.D", university: "IIT Delhi", year: "2010" },
      { degree: "M.Tech", university: "IIT Bombay", year: "2004" },
      { degree: "B.Tech", university: "NIT Trichy", year: "2002" },
    ],
    publications: 45,
    projects: 12,
    students: 15,
    courses: ["Computer Vision", "Advanced Algorithms", "Machine Learning"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["image", "eye", "brain", "file", "book"],
  },
  {
    id: 8,
    name: "Dr. Noor Mahammad S K",
    position: "Associate Professor",
    image: "/placeholder.svg?height=300&width=300",
    interests: [
      "Software for VLSI Design",
      "Evolvable Hardware",
      "Reconfigurable Computing",
      "Network System Design",
      "Software Defined Radio",
      "High Performance VLSI Architectures for Digital Signal Processing",
      "Packet Processing Architectures and Algorithms",
      "Computer Architecture",
    ],
    email: "noor@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 108",
    education: [
      { degree: "Ph.D", university: "IIT Kharagpur", year: "2009" },
      { degree: "M.Tech", university: "IIT Kharagpur", year: "2003" },
      { degree: "B.Tech", university: "JNTU Hyderabad", year: "2001" },
    ],
    publications: 38,
    projects: 14,
    students: 12,
    courses: ["VLSI Design", "Computer Architecture", "Reconfigurable Computing"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["cpu", "file", "network"],
  },
  {
    id: 9,
    name: "Dr. Pandiri Venkatesh",
    position: "Assistant Professor",
    image: "/placeholder.svg?height=300&width=300",
    interests: [
      "Combinatorial Optimization",
      "Reinforcement learning for optimization",
      "Soft computing",
      "Heuristics",
      "Metaheuristics",
      "Swarm Intelligence",
      "Multi-objective Optimization",
    ],
    email: "venkatesh@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 109",
    education: [
      { degree: "Ph.D", university: "IIT Hyderabad", year: "2017" },
      { degree: "M.Tech", university: "NIT Warangal", year: "2011" },
      { degree: "B.Tech", university: "JNTU Kakinada", year: "2009" },
    ],
    publications: 22,
    projects: 6,
    students: 8,
    courses: ["Optimization Techniques", "Reinforcement Learning", "Soft Computing"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["brain", "chart", "database"],
  },
  {
    id: 10,
    name: "Dr. Preeth R",
    position: "Assistant Professor",
    image: "/placeholder.svg?height=300&width=300",
    interests: ["IoT and Cloud Computing", "Machine Learning", "Computer Vision", "Computer Networks", "Data Science"],
    email: "preeth@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 110",
    education: [
      { degree: "Ph.D", university: "IIT Madras", year: "2018" },
      { degree: "M.Tech", university: "NIT Trichy", year: "2012" },
      { degree: "B.Tech", university: "Anna University", year: "2010" },
    ],
    publications: 17,
    projects: 5,
    students: 6,
    courses: ["Cloud Computing", "IoT Systems", "Computer Vision"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["cloud", "wifi", "brain", "eye", "network", "database"],
  },
  {
    id: 11,
    name: "Dr. Rahul Raman",
    position: "Assistant Professor",
    image: "/placeholder.svg?height=300&width=300",
    interests: [
      "Computer Vision",
      "Image Processing",
      "Machine Learning",
      "Biometrics",
      "Visual Surveillance",
      "Aesthetics",
    ],
    email: "rahul@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 111",
    education: [
      { degree: "Ph.D", university: "IIT Kanpur", year: "2017" },
      { degree: "M.Tech", university: "IIT Roorkee", year: "2011" },
      { degree: "B.Tech", university: "NIT Calicut", year: "2009" },
    ],
    publications: 19,
    projects: 7,
    students: 5,
    courses: ["Computer Vision", "Image Processing", "Biometric Systems"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["eye", "image", "brain", "fingerprint"],
  },
  {
    id: 12,
    name: "Dr. Sadagopan N",
    position: "Associate Professor",
    image: "/placeholder.svg?height=300&width=300",
    interests: [
      "Graph theory & Combinatorics",
      "Data Structures & Algorithms",
      "Computer Networks",
      "Database Systems",
      "Graph Library Generation Package",
    ],
    email: "sadagopan@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 112",
    education: [
      { degree: "Ph.D", university: "IIT Madras", year: "2005" },
      { degree: "M.Tech", university: "IIT Bombay", year: "1999" },
      { degree: "B.Tech", university: "Bharathidasan University", year: "1997" },
    ],
    publications: 42,
    projects: 15,
    students: 18,
    courses: ["Graph Theory", "Advanced Algorithms", "Database Systems"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["network", "file", "database"],
  },
  {
    id: 13,
    name: "Dr. Sanjeet Kumar Nayak",
    position: "Assistant Professor",
    image: "/placeholder.svg?height=300&width=300",
    interests: [
      "IoT and Cloud Computing",
      "Applied Cryptography",
      "Fog and Edge Computing",
      "Unmanned Aerial Vehicle (UAV)",
      "Blockchain Technology",
    ],
    email: "sanjeet@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 113",
    education: [
      { degree: "Ph.D", university: "IIT Kharagpur", year: "2018" },
      { degree: "M.Tech", university: "NIT Rourkela", year: "2012" },
      { degree: "B.Tech", university: "BPUT Odisha", year: "2010" },
    ],
    publications: 16,
    projects: 6,
    students: 7,
    courses: ["Cloud Computing", "Cryptography", "Blockchain Technology"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["cloud", "lock", "wifi"],
  },
  {
    id: 14,
    name: "Dr. Santhanam Raghavan",
    position: "Assistant Professor",
    image: "/placeholder.svg?height=300&width=300",
    interests: ["Cloud Computing", "Membrane Computing", "Machine Learning"],
    email: "santhanam@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 114",
    education: [
      { degree: "Ph.D", university: "IIT Madras", year: "2016" },
      { degree: "M.Tech", university: "Anna University", year: "2010" },
      { degree: "B.E", university: "Anna University", year: "2008" },
    ],
    publications: 14,
    projects: 4,
    students: 5,
    courses: ["Cloud Computing", "Distributed Systems", "Machine Learning"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["cloud", "database", "brain"],
  },
  {
    id: 15,
    name: "Prof. Sivaselvan B",
    position: "Professor and HOD",
    image: "/placeholder.svg?height=300&width=300",
    interests: [
      "Knowledge & Data Engineering",
      "Data Analytics",
      "Human Computer Interaction",
      "Evolutionary Computation Strategies",
    ],
    email: "sivaselvan@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 115",
    education: [
      { degree: "Ph.D", university: "IIT Madras", year: "2008" },
      { degree: "M.Tech", university: "IIT Delhi", year: "2002" },
      { degree: "B.Tech", university: "Madras University", year: "2000" },
    ],
    publications: 55,
    projects: 18,
    students: 22,
    courses: ["Data Engineering", "Human-Computer Interaction", "Evolutionary Computing"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["database", "chart", "user", "brain"],
  },
  {
    id: 16,
    name: "Dr. Vijayakumar S",
    position: "Assistant Professor",
    image: "/placeholder.svg?height=300&width=300",
    interests: ["Artificial Intelligence", "Machine Learning", "Natural Language Processing"],
    email: "vijayakumar@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 116",
    education: [
      { degree: "Ph.D", university: "IIT Madras", year: "2017" },
      { degree: "M.Tech", university: "NIT Trichy", year: "2011" },
      { degree: "B.Tech", university: "Anna University", year: "2009" },
    ],
    publications: 18,
    projects: 6,
    students: 8,
    courses: ["Artificial Intelligence", "Natural Language Processing", "Deep Learning"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["brain", "database"],
  },
  {
    id: 17,
    name: "Dr. Umarani Jayaraman",
    position: "Assistant Professor",
    image: "/placeholder.svg?height=300&width=300",
    interests: [
      "Biometrics",
      "Pattern Recognition",
      "Deep Learning",
      "Digital Image Processing",
      "Human Computer Interaction",
    ],
    email: "umarani@iiitdm.ac.in",
    phone: "+91-XXXXXXXXXX",
    office: "Faculty Block, Room 117",
    education: [
      { degree: "Ph.D", university: "IIT Delhi", year: "2015" },
      { degree: "M.Tech", university: "IIT Kanpur", year: "2009" },
      { degree: "B.Tech", university: "Anna University", year: "2007" },
    ],
    publications: 24,
    projects: 9,
    students: 11,
    courses: ["Biometric Systems", "Pattern Recognition", "Image Processing"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIconKeys: ["fingerprint", "brain", "image", "user"],
  },
]

// Research areas for filtering
export const researchAreas = [
  { name: "All Areas", value: "all" },
  { name: "Machine Learning & AI", value: "Machine Learning", icon: "brain" },
  { name: "Computer Vision & Image Processing", value: "Image Processing", icon: "eye" },
  { name: "Networks & IoT", value: "Networks", icon: "network" },
  { name: "Security & Cryptography", value: "Security", icon: "lock" },
  { name: "Data Science & Analytics", value: "Data", icon: "database" },
  { name: "Computer Architecture", value: "Computer Architecture", icon: "cpu" },
  { name: "Algorithms & Theory", value: "Algorithms", icon: "file" },
  { name: "Human-Computer Interaction", value: "Human Computer Interaction", icon: "user" },
  { name: "Cloud Computing", value: "Cloud Computing", icon: "cloud" },
]

// Faculty positions for filtering
export const positions = [
  { name: "All Positions", value: "all" },
  { name: "Professor", value: "Professor" },
  { name: "Associate Professor", value: "Associate Professor" },
  { name: "Assistant Professor", value: "Assistant Professor" },
]

// Function to get icon component by key
export const getIconByKey = (key: string, className = "w-5 h-5") => {
  switch (key) {
    case "lock":
      return <Lock className={className} />
    case "file":
      return <FileText className={className} />
    case "book":
      return <BookMarked className={className} />
    case "cpu":
      return <Cpu className={className} />
    case "database":
      return <Database className={className} />
    case "brain":
      return <BrainCircuit className={className} />
    case "image":
      return <ImageIcon className={className} />
    case "network":
      return <Network className={className} />
    case "wifi":
      return <Wifi className={className} />
    case "calendar":
      return <Calendar className={className} />
    case "zap":
      return <Zap className={className} />
    case "chart":
      return <LineChart className={className} />
    case "user":
      return <User className={className} />
    case "cloud":
      return <Cloud className={className} />
    case "eye":
      return <Eye className={className} />
    case "fingerprint":
      return <Fingerprint className={className} />
    default:
      return <FileText className={className} />
  }
}

