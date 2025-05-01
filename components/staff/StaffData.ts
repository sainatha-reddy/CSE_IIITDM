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
    office: "Automation Section, Admin Block",
    image: "https://mis.iiitdm.ac.in/Profile/images/Profile/nagarajan.jpeg",
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
    office: "Computer Centre, Admin Block",
    image: "https://mis.iiitdm.ac.in/Profile/images/Profile/KUMAR082.jpeg",
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
    office: "L515 - Digital System Design Lab",
    image: "https://mis.iiitdm.ac.in/Profile/images/Profile/aravindan.jpeg",
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
    office: "L509 - High Performance Computing Lab",
    image: "https://mis.iiitdm.ac.in/Profile/images/Profile/aswina.jpeg",
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
    office: "L209 - Software Design Lab",
    image: "https://mis.iiitdm.ac.in/Profile/images/Profile/kamalakannan.m.jpeg",
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
    office: "",
    image: "https://mis.iiitdm.ac.in/Profile/images/Profile/kamalieswari.jpeg",
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
]

