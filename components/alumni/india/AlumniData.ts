// Alumni data types
export interface AlumniProfile {
  id: number
  name: string
  graduatingYear: number
  currentPosition: string
  institution: string
  company?: string
  image: string
  location: string
  degree: string
  field: string
  achievements?: string
  linkedin: string
  email?: string
  bio?: string
}

// Get unique years for filtering
export const getUniqueYears = (data: AlumniProfile[]): number[] => {
  return [...new Set(data.map((alumni) => alumni.graduatingYear))].sort((a, b) => b - a)
}

// Get unique institutions for filtering
export const getUniqueInstitutions = (data: AlumniProfile[]): string[] => {
  return [...new Set(data.map((alumni) => alumni.institution))].sort()
}

// Get unique degrees for filtering
export const getUniqueDegrees = (data: AlumniProfile[]): string[] => {
  return [...new Set(data.map((alumni) => alumni.degree))].sort()
}

// Get alumni statistics
export const getAlumniStatistics = (data: AlumniProfile[]) => {
  const years = getUniqueYears(data)
  const institutions = getUniqueInstitutions(data)
  const degrees = getUniqueDegrees(data)

  const alumniByYear = years.map((year) => ({
    year,
    count: data.filter((a) => a.graduatingYear === year).length,
  }))

  const alumniByInstitution = institutions
    .map((institution) => ({
      institution,
      count: data.filter((a) => a.institution === institution).length,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)

  const alumniByDegree = degrees
    .map((degree) => ({
      degree,
      count: data.filter((a) => a.degree === degree).length,
    }))
    .sort((a, b) => b.count - a.count)

  return {
    totalAlumni: data.length,
    alumniByYear,
    alumniByInstitution,
    alumniByDegree,
  }
}

// Alumni data
export const alumniData: AlumniProfile[] = [
  {
    id: 1,
    name: "Amala Thambi",
    graduatingYear: 2014,
    currentPosition: "M.Tech, IIT Roorkee, currently at Oracle",
    institution: "IIT Roorkee",
    company: "Oracle",
    image: "/placeholder.svg?height=400&width=400",
    location: "Bangalore",
    degree: "M.Tech",
    field: "Computer Science",
    linkedin: "https://linkedin.com",
    bio: "Amala graduated from IIITDM Kancheepuram in 2014 and completed her M.Tech from IIT Roorkee. She is currently working as a Senior Software Engineer at Oracle, focusing on cloud infrastructure and database technologies.",
  },
  {
    id: 2,
    name: "Krishna Chaurasia",
    graduatingYear: 2015,
    currentPosition: "M.Tech, IIT Khargpur",
    institution: "IIT Kharagpur",
    image: "/placeholder.svg?height=400&width=400",
    location: "Kharagpur",
    degree: "M.Tech",
    field: "Computer Science",
    linkedin: "https://linkedin.com",
    bio: "Krishna is pursuing his M.Tech at IIT Kharagpur with a focus on machine learning and artificial intelligence. His research interests include computer vision and natural language processing.",
  },
  {
    id: 3,
    name: "Mohit S",
    graduatingYear: 2015,
    currentPosition: "M.Tech, ISI Kolkata",
    institution: "ISI Kolkata",
    image: "/placeholder.svg?height=400&width=400",
    location: "Kolkata",
    degree: "M.Tech",
    field: "Computer Science",
    linkedin: "https://linkedin.com",
    bio: "Mohit is specializing in statistical computing and data science at the prestigious Indian Statistical Institute, Kolkata. His work focuses on developing statistical models for large-scale data analysis.",
  },
  {
    id: 4,
    name: "Kavya P",
    graduatingYear: 2015,
    currentPosition: "PGDM, IIM Calcutta",
    institution: "IIM Calcutta",
    image: "/placeholder.svg?height=400&width=400",
    location: "Kolkata",
    degree: "PGDM",
    field: "Management",
    linkedin: "https://linkedin.com",
    bio: "Kavya is pursuing her Post Graduate Diploma in Management at IIM Calcutta. She specializes in marketing and operations management, with a keen interest in technology-driven business transformations.",
  },
  {
    id: 5,
    name: "Rashmitha J",
    graduatingYear: 2016,
    currentPosition: "M.Tech, IIT Bombay",
    institution: "IIT Bombay",
    image: "/placeholder.svg?height=400&width=400",
    location: "Mumbai",
    degree: "M.Tech",
    field: "Computer Science",
    achievements: "AIR 56 in GATE",
    linkedin: "https://linkedin.com",
    bio: "Rashmitha secured an impressive All India Rank of 56 in GATE and is now pursuing her M.Tech at IIT Bombay. Her research focuses on distributed systems and cloud computing architectures.",
  },
  {
    id: 6,
    name: "C Naveen",
    graduatingYear: 2016,
    currentPosition: "M.Tech, IIT Bombay",
    institution: "IIT Bombay",
    image: "/placeholder.svg?height=400&width=400",
    location: "Mumbai",
    degree: "M.Tech",
    field: "Computer Science",
    linkedin: "https://linkedin.com",
    bio: "Naveen is specializing in computer networks and security at IIT Bombay. His research interests include network protocols, cybersecurity, and secure system design.",
  },
  {
    id: 7,
    name: "Deepanshu G",
    graduatingYear: 2016,
    currentPosition: "M.Tech, IIT Bombay",
    institution: "IIT Bombay",
    image: "/placeholder.svg?height=400&width=400",
    location: "Mumbai",
    degree: "M.Tech",
    field: "Computer Science",
    linkedin: "https://linkedin.com",
    bio: "Deepanshu is pursuing his M.Tech at IIT Bombay with a focus on artificial intelligence and machine learning. His research involves developing novel algorithms for computer vision applications.",
  },
  {
    id: 8,
    name: "Pranjal C",
    graduatingYear: 2016,
    currentPosition: "M.Tech, IIT Kanpur",
    institution: "IIT Kanpur",
    image: "/placeholder.svg?height=400&width=400",
    location: "Kanpur",
    degree: "M.Tech",
    field: "Computer Science",
    linkedin: "https://linkedin.com",
    bio: "Pranjal is specializing in theoretical computer science at IIT Kanpur. His research focuses on algorithm design, computational complexity, and formal verification methods.",
  },
  {
    id: 9,
    name: "Nitin Vivek Bharti",
    graduatingYear: 2016,
    currentPosition: "M.Tech, IIT Kanpur",
    institution: "IIT Kanpur",
    image: "/placeholder.svg?height=400&width=400",
    location: "Kanpur",
    degree: "M.Tech",
    field: "Computer Science",
    linkedin: "https://linkedin.com",
    bio: "Nitin is pursuing his M.Tech at IIT Kanpur with a focus on database systems and data engineering. His research involves optimizing query processing for large-scale distributed databases.",
  },
  {
    id: 10,
    name: "Nada P",
    graduatingYear: 2016,
    currentPosition: "MS by research, IIT Madras",
    institution: "IIT Madras",
    image: "/placeholder.svg?height=400&width=400",
    location: "Chennai",
    degree: "MS by research",
    field: "Computer Science",
    linkedin: "https://linkedin.com",
    bio: "Nada is pursuing her MS by research at IIT Madras, focusing on human-computer interaction and user experience design. Her research aims to make technology more accessible and intuitive for diverse user groups.",
  },
  {
    id: 11,
    name: "Kapil Gupta",
    graduatingYear: 2016,
    currentPosition: "MSc, IIT Delhi",
    institution: "IIT Delhi",
    image: "/placeholder.svg?height=400&width=400",
    location: "Delhi",
    degree: "MSc",
    field: "Computer Science",
    linkedin: "https://linkedin.com",
    bio: "Kapil is pursuing his MSc at IIT Delhi with a focus on computational mathematics and scientific computing. His research involves developing efficient numerical methods for solving complex scientific problems.",
  },
  {
    id: 12,
    name: "Sudheer Surendran",
    graduatingYear: 2017,
    currentPosition: "Ashoka University",
    institution: "Ashoka University",
    image: "/placeholder.svg?height=400&width=400",
    location: "Sonipat",
    degree: "Masters",
    field: "Computer Science",
    linkedin: "https://linkedin.com",
    bio: "Sudheer is pursuing his Masters at Ashoka University, focusing on the intersection of computer science and liberal arts. His interdisciplinary research combines technology with social sciences and humanities.",
  },
  {
    id: 13,
    name: "Sarathi",
    graduatingYear: 2017,
    currentPosition: "MS, IIT Madras",
    institution: "IIT Madras",
    image: "/placeholder.svg?height=400&width=400",
    location: "Chennai",
    degree: "MS",
    field: "Computer Science",
    linkedin: "https://linkedin.com",
    bio: "Sarathi is pursuing his MS at IIT Madras with a focus on robotics and autonomous systems. His research involves developing intelligent algorithms for robot navigation and control in dynamic environments.",
  },
  {
    id: 14,
    name: "Sushma Macharla",
    graduatingYear: 2017,
    currentPosition: "MBA, University of Hyderabad",
    institution: "University of Hyderabad",
    image: "/placeholder.svg?height=400&width=400",
    location: "Hyderabad",
    degree: "MBA",
    field: "Management",
    linkedin: "https://linkedin.com",
    bio: "Sushma is pursuing her MBA at the University of Hyderabad, specializing in technology management and entrepreneurship. She is passionate about leveraging technology for social impact and sustainable business practices.",
  },
  {
    id: 15,
    name: "Bhanu",
    graduatingYear: 2017,
    currentPosition: "PhD, IIIT Hyderabad",
    institution: "IIIT Hyderabad",
    image: "/placeholder.svg?height=400&width=400",
    location: "Hyderabad",
    degree: "PhD",
    field: "Computer Science",
    linkedin: "https://linkedin.com",
    bio: "Bhanu is pursuing his PhD at IIIT Hyderabad, focusing on natural language processing and computational linguistics. His research aims to develop more accurate and culturally sensitive language models for Indian languages.",
  },
  {
    id: 16,
    name: "Banu Prakash",
    graduatingYear: 2017,
    currentPosition: "Direct Ph.D, IIIT Hyderabad",
    institution: "IIIT Hyderabad",
    image: "/placeholder.svg?height=400&width=400",
    location: "Hyderabad",
    degree: "PhD",
    field: "Computer Science",
    linkedin: "https://linkedin.com",
    bio: "Banu Prakash is in the direct PhD program at IIIT Hyderabad, focusing on computer vision and deep learning. His research involves developing novel neural network architectures for visual recognition tasks.",
  },
  {
    id: 17,
    name: "Kiran kumar",
    graduatingYear: 2017,
    currentPosition: "PGDM, XLRI, Jamshedpur",
    institution: "XLRI",
    image: "/placeholder.svg?height=400&width=400",
    location: "Jamshedpur",
    degree: "PGDM",
    field: "Management",
    linkedin: "https://linkedin.com",
    bio: "Kiran is pursuing his Post Graduate Diploma in Management at XLRI Jamshedpur, specializing in human resource management and organizational behavior. He is interested in the future of work and technology-driven HR transformations.",
  },
  {
    id: 18,
    name: "Chetan Rohit",
    graduatingYear: 2017,
    currentPosition: "IIFT, Kolkata",
    institution: "IIFT",
    image: "/placeholder.svg?height=400&width=400",
    location: "Kolkata",
    degree: "MBA",
    field: "International Business",
    linkedin: "https://linkedin.com",
    bio: "Chetan is pursuing his MBA in International Business at IIFT Kolkata. He specializes in global trade, supply chain management, and international marketing strategies for technology products.",
  },
  {
    id: 19,
    name: "Vamshi Gangadhar Chiluka",
    graduatingYear: 2018,
    currentPosition: "M.Tech, IIT Bombay",
    institution: "IIT Bombay",
    image: "/placeholder.svg?height=400&width=400",
    location: "Mumbai",
    degree: "M.Tech",
    field: "Computer Science",
    achievements: "AIR 62 in GATE",
    linkedin: "https://linkedin.com",
    bio: "Vamshi secured an impressive All India Rank of 62 in GATE and is now pursuing his M.Tech at IIT Bombay. His research focuses on parallel computing and high-performance systems for scientific applications.",
  },
  {
    id: 20,
    name: "Sangamalika Rajakumar",
    graduatingYear: 2018,
    currentPosition: "Ashoka University",
    institution: "Ashoka University",
    image: "/placeholder.svg?height=400&width=400",
    location: "Sonipat",
    degree: "Masters",
    field: "Computer Science",
    linkedin: "https://linkedin.com",
    bio: "Sangamalika is pursuing her Masters at Ashoka University with a focus on computational social science. Her research combines computer science techniques with sociological insights to analyze social networks and digital communities.",
  },
  {
    id: 21,
    name: "M Jeevan Kumar",
    graduatingYear: 2018,
    currentPosition: "M.Tech, IIT Jodhpur",
    institution: "IIT Jodhpur",
    image: "/placeholder.svg?height=400&width=400",
    location: "Jodhpur",
    degree: "M.Tech",
    field: "Computer Science",
    linkedin: "https://linkedin.com",
    bio: "Jeevan is pursuing his M.Tech at IIT Jodhpur, specializing in artificial intelligence and data science. His research focuses on developing machine learning models for resource-constrained environments.",
  },
  {
    id: 22,
    name: "Inchara K M",
    graduatingYear: 2018,
    currentPosition: "IIM Tiruchirappalli",
    institution: "IIM Tiruchirappalli",
    image: "/placeholder.svg?height=400&width=400",
    location: "Tiruchirappalli",
    degree: "MBA",
    field: "Management",
    linkedin: "https://linkedin.com",
    bio: "Inchara is pursuing her MBA at IIM Tiruchirappalli, specializing in finance and business analytics. She is passionate about using data-driven approaches to solve complex business problems and drive strategic decision-making.",
  },
  {
    id: 23,
    name: "Nikhila Pinninti",
    graduatingYear: 2019,
    currentPosition: "MBA, IIM SBP",
    institution: "IIM Sambalpur",
    image: "/placeholder.svg?height=400&width=400",
    location: "Sambalpur",
    degree: "MBA",
    field: "Management",
    linkedin: "https://linkedin.com",
    bio: "Nikhila is pursuing her MBA at IIM Sambalpur with a focus on marketing and digital business strategies. She is interested in how emerging technologies are reshaping consumer behavior and business models in the digital economy.",
  },
]

