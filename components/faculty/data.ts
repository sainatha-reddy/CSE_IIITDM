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
  FileText,
  User,
  Calendar,
} from "lucide-react"

// Fetch and transform faculty data
export const fetchFacultyData = async () => {
  try {
    const response = await fetch("https://mis.iiitdm.ac.in/api/faculty.php");
    if (!response.ok) throw new Error("Failed to fetch faculty data");
    const rawData = await response.json();
    return transformFacultyData(rawData.faculty || []);
  } catch (error) {
    console.error("Error fetching faculty data:", error);
    return [];
  }
};

// Transform API response to structured format
const transformFacultyData = (rawFaculty: any[]) => {
  return rawFaculty.map((item: any, index: number) => ({
    id: index + 1,
    name: item.nickname || "Unknown",
    position: item.desig || "Faculty",
    image: item.localimg ? `/images/${item.localimg}` : "/placeholder.svg?height=300&width=300",
    interests: item.schoolName1
      ? item.schoolName1.split("\r\n").map((i: string) => i.trim())
      : [],
    email: item.email || "unknown@example.com",
    phone: "+91-XXXXXXXXXX", // Placeholder
    office: item.schoolTo || "Unknown Room",
    education: [
      { degree: "Ph.D", university: "Unknown", year: "----" },
      { degree: "M.Tech", university: "Unknown", year: "----" },
      { degree: "B.Tech", university: "Unknown", year: "----" },
    ],
    publications: Math.floor(Math.random() * 10) + 1,
    projects: Math.floor(Math.random() * 5),
    students: Math.floor(Math.random() * 10),
    courses: item.schoolName1
      ? item.schoolName1.split("\r\n").map((i) => i.trim())
      : [],
    socialLinks: {
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
      website: "https://example.com/",
    },
    interestIcons: [
      { icon: "Lock", component: Lock },
      { icon: "FileText", component: FileText },
      { icon: "BookMarked", component: BookMarked },
    ],
  }));
};

// Faculty data (initially empty, populated dynamically)
export let facultyData = [];

// Initialize the data
(async () => {
  facultyData = await fetchFacultyData();
})();

// Filters
export const researchAreas = [
  { name: "All Areas", value: "all", icon: null },
  { name: "Machine Learning & AI", value: "Machine Learning", icon: BrainCircuit },
  { name: "Computer Vision & Image Processing", value: "Image Processing", icon: Eye },
  { name: "Networks & IoT", value: "Networks", icon: Network },
  { name: "Security & Cryptography", value: "Security", icon: Lock },
  { name: "Data Science & Analytics", value: "Data", icon: Database },
  { name: "Computer Architecture", value: "Computer Architecture", icon: Cpu },
  { name: "Algorithms & Theory", value: "Algorithms", icon: FileText },
  { name: "Human-Computer Interaction", value: "Human Computer Interaction", icon: User },
  { name: "Cloud Computing", value: "Cloud Computing", icon: Cloud },
];

export const positions = [
  { name: "All Positions", value: "all" },
  { name: "Professor", value: "Professor" },
  { name: "Associate Professor", value: "Associate Professor" },
  { name: "Assistant Professor", value: "Assistant Professor" },
];

// Stats (should be called after data loads)
export const getDepartmentStats = (data: any[]) => ({
  total: data.length,
  professors: data.filter(
    (f: any) => f.position.includes("Professor") && !f.position.includes("Associate") && !f.position.includes("Assistant")
  ).length,
  associateProfessors: data.filter((f: any) => f.position.includes("Associate")).length,
  assistantProfessors: data.filter((f: any) => f.position.includes("Assistant")).length,
  totalPublications: data.reduce((sum: number, faculty: any) => sum + faculty.publications, 0),
  totalProjects: data.reduce((sum: number, faculty: any) => sum + faculty.projects, 0),
  totalStudents: data.reduce((sum: number, faculty: any) => sum + faculty.students, 0),
});

// Color gradient generator
export const getRandomGradient = (id: number) => {
  const gradients = [
    "from-blue-500 to-blue-600",
    "from-indigo-500 to-indigo-600",
    "from-purple-500 to-purple-600",
    "from-cyan-500 to-cyan-600",
    "from-teal-500 to-teal-600",
    "from-green-500 to-green-600",
    "from-amber-500 to-amber-600",
    "from-rose-500 to-rose-600",
  ];
  return gradients[id % gradients.length];
};
