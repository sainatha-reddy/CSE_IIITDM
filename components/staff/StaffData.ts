export interface StaffMember {
  id: number
  name: string
  position: string
  department: string
  email: string
  phone: string
  office: string
  image: string
  linkedin: string
  github: string
  bio: string
  responsibilities: string[]
  skills: string[]
  education: {
    degree: string
    institution: string
    year: string
  }[]
  experience: {
    role: string
    company: string
    duration: string
  }[]
  projects: {
    name: string
    description: string
  }[]
}

export const staffData: StaffMember[] = [
  {
    id: 1,
    name: "Mr. Nagarajan R",
    position: "Technical Officer",
    department: "Computer Science",
    email: "nagarajan@iiitdm.ac.in",
    phone: "+91-9876543210",
    office: "CS Block, Room 101",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/nagarajan-r",
    github: "https://github.com/nagarajan-r",
    bio: "Mr. Nagarajan R is a Technical Officer with extensive experience in managing laboratory infrastructure and supporting academic activities.",
    responsibilities: [
      "Managing Computer Science laboratories",
      "Technical support for research projects",
      "Maintenance of department equipment",
      "Assisting faculty and students with technical requirements",
    ],
    skills: [
      "Network Administration",
      "Hardware Troubleshooting",
      "Linux Systems",
      "Database Management",
      "Programming (C, Python)",
    ],
    education: [
      {
        degree: "M.Tech in Computer Science",
        institution: "Anna University",
        year: "2010",
      },
      {
        degree: "B.Tech in Information Technology",
        institution: "Madras Institute of Technology",
        year: "2008",
      },
    ],
    experience: [
      {
        role: "Technical Officer",
        company: "IIITDM Kancheepuram",
        duration: "2012 - Present",
      },
      {
        role: "System Administrator",
        company: "TCS",
        duration: "2010 - 2012",
      },
    ],
    projects: [
      {
        name: "Laboratory Management System",
        description:
          "Developed and implemented a comprehensive laboratory management system for tracking equipment and usage.",
      },
      {
        name: "Network Infrastructure Upgrade",
        description: "Led the upgrade of the department's network infrastructure to improve connectivity and security.",
      },
    ],
  },
  {
    id: 2,
    name: "Mr. Saravana Kumar K",
    position: "Technical Superintendent",
    department: "Computer Science",
    email: "saravanakumar@iiitdm.ac.in",
    phone: "+91-9876543211",
    office: "CS Block, Room 102",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/saravana-kumar-k",
    github: "https://github.com/saravana-kumar-k",
    bio: "Mr. Saravana Kumar K is a Technical Superintendent with expertise in network administration and hardware troubleshooting.",
    responsibilities: [
      "Network administration",
      "Hardware troubleshooting",
      "Software installation and maintenance",
      "Laboratory management",
    ],
    skills: ["Network Security", "Server Administration", "Cloud Computing", "Virtualization", "Cisco Networking"],
    education: [
      {
        degree: "M.E. in Computer Science and Engineering",
        institution: "College of Engineering, Guindy",
        year: "2009",
      },
      {
        degree: "B.E. in Computer Science",
        institution: "PSG College of Technology",
        year: "2007",
      },
    ],
    experience: [
      {
        role: "Technical Superintendent",
        company: "IIITDM Kancheepuram",
        duration: "2011 - Present",
      },
      {
        role: "Network Engineer",
        company: "Infosys",
        duration: "2009 - 2011",
      },
    ],
    projects: [
      {
        name: "Campus-wide Wi-Fi Implementation",
        description:
          "Implemented and configured secure Wi-Fi access points throughout the campus with authentication system.",
      },
      {
        name: "Server Virtualization Project",
        description:
          "Migrated physical servers to virtualized environment to improve resource utilization and management.",
      },
    ],
  },
  {
    id: 3,
    name: "Mr. Aravindan S",
    position: "Junior Technical Superintendent",
    department: "Computer Science",
    email: "aravindan@iiitdm.ac.in",
    phone: "+91-9876543212",
    office: "CS Block, Room 103",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/aravindan-s",
    github: "https://github.com/aravindan-s",
    bio: "Mr. Aravindan S is a Junior Technical Superintendent specializing in software support and laboratory management.",
    responsibilities: [
      "Software support",
      "Laboratory management",
      "Technical assistance for academic activities",
      "Equipment maintenance",
    ],
    skills: [
      "Software Development",
      "Web Technologies",
      "Database Administration",
      "System Analysis",
      "Technical Documentation",
    ],
    education: [
      {
        degree: "M.Sc. in Computer Science",
        institution: "Madras University",
        year: "2012",
      },
      {
        degree: "B.Sc. in Computer Science",
        institution: "Loyola College",
        year: "2010",
      },
    ],
    experience: [
      {
        role: "Junior Technical Superintendent",
        company: "IIITDM Kancheepuram",
        duration: "2014 - Present",
      },
      {
        role: "Software Developer",
        company: "Cognizant",
        duration: "2012 - 2014",
      },
    ],
    projects: [
      {
        name: "Student Project Management Portal",
        description: "Developed a web-based portal for managing student projects, submissions, and evaluations.",
      },
      {
        name: "Inventory Management System",
        description:
          "Created a comprehensive system for tracking laboratory equipment, consumables, and maintenance schedules.",
      },
    ],
  },
  {
    id: 4,
    name: "Mr. Aswin A",
    position: "Junior Technician",
    department: "Computer Science",
    email: "aswin@iiitdm.ac.in",
    phone: "+91-9876543213",
    office: "CS Block, Room 104",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/aswin-a",
    github: "https://github.com/aswin-a",
    bio: "Mr. Aswin A is a Junior Technician with skills in hardware maintenance and technical support.",
    responsibilities: ["Hardware maintenance", "Technical support", "Laboratory assistance", "Equipment setup"],
    skills: ["Computer Hardware", "Networking", "Troubleshooting", "Operating Systems", "Technical Support"],
    education: [
      {
        degree: "B.Tech in Electronics and Communication",
        institution: "SRM University",
        year: "2015",
      },
      {
        degree: "Diploma in Computer Hardware Maintenance",
        institution: "Government Polytechnic",
        year: "2012",
      },
    ],
    experience: [
      {
        role: "Junior Technician",
        company: "IIITDM Kancheepuram",
        duration: "2016 - Present",
      },
      {
        role: "Technical Support Engineer",
        company: "HCL Technologies",
        duration: "2015 - 2016",
      },
    ],
    projects: [
      {
        name: "Computer Lab Setup",
        description:
          "Configured and set up new computer laboratories with networking and required software installations.",
      },
      {
        name: "Hardware Troubleshooting Guide",
        description:
          "Created a comprehensive guide for common hardware issues and their solutions for student reference.",
      },
    ],
  },
  {
    id: 5,
    name: "Mr. Kamalakannan M",
    position: "Junior Technician",
    department: "Electronics",
    email: "kamalakannan@iiitdm.ac.in",
    phone: "+91-9876543214",
    office: "Electronics Block, Room 105",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/kamalakannan-m",
    github: "https://github.com/kamalakannan-m",
    bio: "Mr. Kamalakannan M is a Junior Technician specializing in electronics laboratory support and equipment maintenance.",
    responsibilities: [
      "Electronics lab maintenance",
      "Equipment calibration",
      "Technical assistance",
      "Inventory management",
    ],
    skills: [
      "Electronic Circuit Design",
      "PCB Fabrication",
      "Test Equipment Operation",
      "Microcontroller Programming",
      "Signal Processing",
    ],
    education: [
      {
        degree: "B.E. in Electronics and Instrumentation",
        institution: "Anna University",
        year: "2014",
      },
      {
        degree: "Diploma in Electronics",
        institution: "Government Polytechnic",
        year: "2011",
      },
    ],
    experience: [
      {
        role: "Junior Technician",
        company: "IIITDM Kancheepuram",
        duration: "2015 - Present",
      },
      {
        role: "Lab Assistant",
        company: "SSN College of Engineering",
        duration: "2014 - 2015",
      },
    ],
    projects: [
      {
        name: "Electronics Lab Modernization",
        description: "Upgraded the electronics laboratory with modern test equipment and experimental setups.",
      },
      {
        name: "IoT Demonstration Kit",
        description: "Developed an IoT demonstration kit for teaching purposes with various sensors and actuators.",
      },
    ],
  },
  {
    id: 6,
    name: "Mrs. Kamalieswari A S",
    position: "Junior Technician",
    department: "Computer Science",
    email: "kamalieswari@iiitdm.ac.in",
    phone: "+91-9876543215",
    office: "CS Block, Room 106",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/kamalieswari-as",
    github: "https://github.com/kamalieswari-as",
    bio: "Mrs. Kamalieswari A S is a Junior Technician with expertise in database management and technical support.",
    responsibilities: ["Database management", "Technical support", "Laboratory assistance", "Documentation"],
    skills: ["Database Design", "SQL", "Data Analysis", "Web Development", "Technical Writing"],
    education: [
      {
        degree: "M.C.A.",
        institution: "Anna University",
        year: "2013",
      },
      {
        degree: "B.Sc. in Computer Science",
        institution: "Madras University",
        year: "2010",
      },
    ],
    experience: [
      {
        role: "Junior Technician",
        company: "IIITDM Kancheepuram",
        duration: "2015 - Present",
      },
      {
        role: "Database Administrator",
        company: "Wipro",
        duration: "2013 - 2015",
      },
    ],
    projects: [
      {
        name: "Student Database System",
        description:
          "Designed and implemented a comprehensive database system for managing student records and academic performance.",
      },
      {
        name: "Department Website Maintenance",
        description:
          "Maintained and updated the department website with current information and improved user interface.",
      },
    ],
  },
  {
    id: 7,
    name: "Mr. Rajesh Kumar P",
    position: "Technical Officer",
    department: "Mechanical",
    email: "rajeshkumar@iiitdm.ac.in",
    phone: "+91-9876543216",
    office: "Mechanical Block, Room 107",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/rajesh-kumar-p",
    github: "https://github.com/rajesh-kumar-p",
    bio: "Mr. Rajesh Kumar P is a Technical Officer with specialization in mechanical engineering laboratories and workshop management.",
    responsibilities: [
      "Mechanical lab management",
      "Workshop supervision",
      "Equipment maintenance",
      "Technical guidance for projects",
    ],
    skills: ["CAD/CAM", "CNC Programming", "3D Printing", "Material Testing", "Workshop Management"],
    education: [
      {
        degree: "M.Tech in Manufacturing Engineering",
        institution: "IIT Madras",
        year: "2011",
      },
      {
        degree: "B.E. in Mechanical Engineering",
        institution: "College of Engineering, Guindy",
        year: "2009",
      },
    ],
    experience: [
      {
        role: "Technical Officer",
        company: "IIITDM Kancheepuram",
        duration: "2013 - Present",
      },
      {
        role: "Design Engineer",
        company: "L&T",
        duration: "2011 - 2013",
      },
    ],
    projects: [
      {
        name: "Advanced Manufacturing Lab Setup",
        description: "Established a state-of-the-art manufacturing laboratory with CNC machines and 3D printers.",
      },
      {
        name: "Student Workshop Training Program",
        description: "Developed and conducted training programs for students on workshop safety and machine operation.",
      },
    ],
  },
  {
    id: 8,
    name: "Ms. Priya Dharshini V",
    position: "Junior Technical Superintendent",
    department: "Design",
    email: "priyadharshini@iiitdm.ac.in",
    phone: "+91-9876543217",
    office: "Design Block, Room 108",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/priya-dharshini-v",
    github: "https://github.com/priya-dharshini-v",
    bio: "Ms. Priya Dharshini V is a Junior Technical Superintendent with expertise in design software and creative technologies.",
    responsibilities: ["Design lab management", "Software training", "Project assistance", "Equipment maintenance"],
    skills: ["Adobe Creative Suite", "3D Modeling", "UI/UX Design", "Rapid Prototyping", "Design Thinking"],
    education: [
      {
        degree: "M.Des in Industrial Design",
        institution: "IIT Bombay",
        year: "2014",
      },
      {
        degree: "B.Des in Product Design",
        institution: "NID Ahmedabad",
        year: "2012",
      },
    ],
    experience: [
      {
        role: "Junior Technical Superintendent",
        company: "IIITDM Kancheepuram",
        duration: "2016 - Present",
      },
      {
        role: "Design Consultant",
        company: "Design Studio",
        duration: "2014 - 2016",
      },
    ],
    projects: [
      {
        name: "Design Thinking Workshop Series",
        description: "Organized and conducted workshops on design thinking methodologies for students and faculty.",
      },
      {
        name: "Virtual Reality Lab Setup",
        description: "Established a VR lab for immersive design experiences and prototyping.",
      },
    ],
  },
  {
    id: 9,
    name: "Mr. Venkatesh R",
    position: "Technical Superintendent",
    department: "Electronics",
    email: "venkatesh@iiitdm.ac.in",
    phone: "+91-9876543218",
    office: "Electronics Block, Room 109",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/venkatesh-r",
    github: "https://github.com/venkatesh-r",
    bio: "Mr. Venkatesh R is a Technical Superintendent with expertise in embedded systems and VLSI design.",
    responsibilities: [
      "Electronics lab management",
      "VLSI lab supervision",
      "Technical support for projects",
      "Equipment procurement and maintenance",
    ],
    skills: ["Embedded Systems", "VLSI Design", "PCB Design", "FPGA Programming", "Electronic Testing"],
    education: [
      {
        degree: "M.Tech in VLSI Design",
        institution: "IIT Kharagpur",
        year: "2010",
      },
      {
        degree: "B.E. in Electronics and Communication",
        institution: "Anna University",
        year: "2007",
      },
    ],
    experience: [
      {
        role: "Technical Superintendent",
        company: "IIITDM Kancheepuram",
        duration: "2012 - Present",
      },
      {
        role: "VLSI Design Engineer",
        company: "Texas Instruments",
        duration: "2010 - 2012",
      },
    ],
    projects: [
      {
        name: "Advanced VLSI Laboratory",
        description:
          "Established a modern VLSI design laboratory with industry-standard EDA tools and testing equipment.",
      },
      {
        name: "IoT Research Platform",
        description:
          "Developed an IoT research platform for students to experiment with various sensors and communication protocols.",
      },
    ],
  },
  {
    id: 10,
    name: "Mr. Senthil Kumar G",
    position: "Junior Technician",
    department: "Mechanical",
    email: "senthilkumar@iiitdm.ac.in",
    phone: "+91-9876543219",
    office: "Mechanical Block, Room 110",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/senthil-kumar-g",
    github: "https://github.com/senthil-kumar-g",
    bio: "Mr. Senthil Kumar G is a Junior Technician with expertise in mechanical workshop operations and equipment maintenance.",
    responsibilities: ["Workshop assistance", "Equipment maintenance", "Technical support", "Inventory management"],
    skills: ["Machining Operations", "Welding", "Technical Drawing", "Equipment Maintenance", "Safety Protocols"],
    education: [
      {
        degree: "Diploma in Mechanical Engineering",
        institution: "Government Polytechnic",
        year: "2013",
      },
      {
        degree: "ITI in Fitter",
        institution: "Government ITI",
        year: "2010",
      },
    ],
    experience: [
      {
        role: "Junior Technician",
        company: "IIITDM Kancheepuram",
        duration: "2015 - Present",
      },
      {
        role: "Workshop Technician",
        company: "Ashok Leyland",
        duration: "2013 - 2015",
      },
    ],
    projects: [
      {
        name: "Workshop Modernization",
        description: "Participated in upgrading the mechanical workshop with modern equipment and safety features.",
      },
      {
        name: "Student Project Support",
        description: "Provided technical assistance to students for their mechanical design and fabrication projects.",
      },
    ],
  },
]

