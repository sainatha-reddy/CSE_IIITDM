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
  image: "http://mis.iiitdm.ac.in/Profile/images/Profile/amalanjosephantony.jpg",
  interests: ["Cryptography", "Data Structures and Algorithms"],
  email: "amalan@iiitdm.ac.in",
  phone: "+91-XXXXXXXXXX",
  office: "Room 308 B, IIITDM Kancheepuram",
  education: [
    {
      degree: "Ph.D",
      university: "National Institute of Technology Tiruchirappalli",
      year: "-"
    },
    {
      degree: "M.Tech",
      university: "National Institute of Technology Tiruchirappalli",
      year: "-"
    },
    {
      degree: "B.E",
      university: "PSG College of Technology (Affiliated to Anna University)",
      year: "-"
    }
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
    id: 18,
    name: "Dr. Bhale Pradeepkumar Gajendra",
  position: "Assistant Professor",
  image: "http://mis.iiitdm.ac.in/Profile/images/Profile/pradeepkumar.jpeg",
  interests: [
    "Information Security",
    "Network Traffic Engineering",
    "Network Routing and Security",
    "IoT/Cyber Security",
    "Digital Twins",
    "Intrusion Detection System",
    "Forensic Investigations",
    "IoT/Cyber-Physical Systems",
    "Machine Learning for Security",
    "Generative AI (GAI) for Threat Simulation",
    "Energy-Efficient Networking with ML Models and Block Chains"
  ],
  email: "pradeepkumar@iiitdm.ac.in",
  phone: "",
  office: "Room 108-D, Laboratory Complex",
  education: [
    { degree: "Ph.D. in Computer Science and Engineering", university: "Indian Institute of Technology Guwahati (IIT Guwahati)", year: "-" },
    { degree: "M.Tech. (CSE) with specialization in Information Security", university: "ABV-IIITM Gwalior", year: "-" },
    { degree: "B.E. in Computer Science and Engineering", university: "Government College Of Engineering, Aurangabad", year: "-" }
  ],
  publications: 2,
  projects: 0,
  students: 0,
  courses: ["Information Security"],
  socialLinks: {
    linkedin: "",
    github: "",
    website: ""
  },
    interestIconKeys: ["cpu", "database", "brain", "image", "network"],
  },
  
  {
    id: 2,
    name: "Dr. Bhukya Krishna Priya",
  position: "Assistant Professor",
  image: "http://mis.iiitdm.ac.in/Profile/images/Profile/krishnapriya.jpeg",
  interests: [
    "Computer Architecture",
    "Memory Technologies",
    "Machine Learning",
    "Image Processing",
    "Vehicular Networks"
  ],
  email: "krishnapriya@iiitdm.ac.in",
  phone: "",
  office: "Room 517 I, IIITDM Kancheepuram",
  education: [
    { degree: "Ph.D in Computer Science & Engineering", university: "NIT Tiruchirappalli", year: "2015 - 2020" },
    { degree: "M.Tech in Software Engineering", university: "SIT-JNTU University, Hyderabad", year: "2008 - 2010" },
    { degree: "B.Tech in Computer Science & Engineering", university: "BRECW, JNTU Hyderabad", year: "2002 - 2006" }
  ],
  publications: 6,
  projects: 0,
  students: 0,
  courses: ["High-Performance Computing (HPC)", "Operating Systems (OS)", "Computer Architecture", "Computer Organization"],
  socialLinks: {
    linkedin: "",
    github: "",
    website: ""
  },
    interestIconKeys: ["cpu", "database", "brain", "image", "network"],
  },
  {
    id: 19,
    name: "Dr. Dinesh R",
  position: "Assistant Professor",
  image: "http://mis.iiitdm.ac.in/Profile/images/Profile/dineshrajavelu.jpeg",
  interests: [
    "Internet of Things (IoT)",
    "Sensor Cloud Network",
    "Fog and Edge Computing"
  ],
  email: "dineshrajavelu@iiitdm.ac.in",
  phone: "",
  office: "",
  education: [
    { degree: "Ph.D. in Computer Science and Engineering", university: "Indian Institute of Technology Kharagpur", year: "2018 - 2023" },
    { degree: "M.Tech in Computer Science and Engineering", university: "Indian Institute of Technology Guwahati", year: "2012 - 2014" },
    { degree: "B.Tech in Information Technology", university: "Regency Institute of Technology", year: "-" }
  ],
  publications: 2,
  projects: 0,
  students: 0,
  courses: [],
  socialLinks: {
    linkedin: "",
    github: "",
    website: ""
  },
    interestIconKeys: ["cpu", "database", "brain", "image", "network"],
  },
  {
    id: 3,
    name: "Dr. Jagadeesh Kakarla",
  position: "Assistant Professor",
  image: "http://mis.iiitdm.ac.in/Profile/images/Profile/jagadeeshk.jpeg",
  interests: [
    "Wireless Sensor Networks",
    "Adhoc Networks",
    "Internet of Things",
    "Medical Image Processing"
  ],
  email: "jagadeeshk@iiitdm.ac.in",
  phone: "044-27476383",
  office: "Faculty Room: 517 B, Laboratory Building",
  education: [
    { degree: "", university: "NIT Rourkela", year: "-" }
  ],
  publications: 18,
  projects: 2,
  students: 2,
  courses: ["Computer Networks", "Theory of Computation", "Data Structures and Algorithms", "Database Management System"],
  socialLinks: {
    portfolio: "https://jagadeeshk.herokuapp.com/index.html",
    linkedin: "",
    github: "",
    website: "https://iiitdm.ac.in/people/faculty/jagadeeshk@iiitdm.ac.in"
  },
    interestIconKeys: ["wifi", "network", "cpu", "image"],
  },
  {
    id: 4,
    name: "Dr. Jaishree Mayank",
  position: "Assistant Professor",
  image: "http://mis.iiitdm.ac.in/Profile/images/Profile/jaishree.jpeg",
  interests: [
    "Scheduling Strategies in Real-time/Cyber-Physical Systems",
    "AI Algorithms for Smart Grids and Electric Vehicle/Drones Problems",
  ],
  email: "jaishree@iiitdm.ac.in",
  phone: "",
  office: "Room 517-H, IIITDM Kancheepuram",
  education: [
    { degree: "Ph.D. (Computer Science and Engineering)", university: "Indian Institute of Technology Patna", year: "-" },
    { degree: "B.Tech. (Computer Science and Engineering)", university: "West Bengal University of Technology, Santiniketan (W.B.)", year: "-" }
  ],
  publications: 5,
  projects: 1,
  students: 0,
  courses: [
    "Problem Solving and C Programming",
    "Data Structures",
    "Algorithm Designing and Analysis",
    "Operating Systems"
  ],
  socialLinks: {
    linkedin: "",
    github: "",
    website: "https://iiitdm.ac.in/people/faculty/jaishree@iiitdm.ac.in"
  },
    interestIconKeys: ["calendar", "brain", "zap"],
  },
  {
    id: 5,
    name: "Dr. Kannadasan K",
  position: "Assistant Professor",
  image: "http://mis.iiitdm.ac.in/Profile/images/Profile/kannadasank.jpeg",
  interests: [
    "Brain-Computer Interface",
    "EEG Signal Processing",
    "Affective Computing",
    "Machine Learning"
  ],
  email: "kannadasankk@iiitdm.ac.in",
  phone: "044 2747 6108",
  office: "308 F, Laboratory Block",
  education: [
    { degree: "Ph.D. in Computer Science and Engineering", university: "National Institute of Technology Tiruchirappalli", year: "2019 - 2024" },
    { degree: "M.Tech. in Computer Science and Engineering", university: "National Institute of Technology Goa", year: "2017 - 2019" },
    { degree: "B.Tech. in Information Technology", university: "SASTRA University", year: "2013 - 2017" }
  ],
  publications: 5,
  projects: 0,
  students: 0,
  courses: [
    "Data Structures and Algorithms",
    "Digital Systems Design",
    "Embedded Systems Architecture",
    "Computer Organization and Architecture"
  ],
  socialLinks: {
    linkedin: "",
    github: "",
    website: ""
  },
    interestIconKeys: ["brain", "chart", "user", "database"],
  },
  {
    id: 6,
    name: "Dr. Krishnakumar Gnanambikai",
  position: "Assistant Professor",
  image: "http://mis.iiitdm.ac.in/Profile/images/Profile/ambika.jpeg",
  interests: [
    "Micro-architecture Security",
    "Web Security",
    "Network Security",
    "Applications of AI in Security"
  ],
  email: "ambika@iiitdm.ac.in",
  phone: "",
  office: "Room 517-D, IIITDM Kancheepuram",
  education: [
    { degree: "Ph.D", university: "Indian Institute of Technology, Madras", year: "2017 - 2024" },
    { degree: "M.Tech", university: "Indian Institute of Technology, Madras", year: "2015 - 2017" },
    { degree: "B.Tech", university: "SASTRA University", year: "2008 - 2012" }
  ],
  publications: 3,
  projects: 0,
  students: 0,
  courses: [],
  socialLinks: {
    linkedin: "",
    github: "",
    website: ""
  },
    interestIconKeys: ["cpu", "lock", "network", "brain"],
  },
  {
    id: 7,
    name: "Prof. Masilamani V",
  position: "Professor",
  image: "http://mis.iiitdm.ac.in/Profile/images/Profile/Masilamani.jpeg",
  interests: [
    "Image Processing and Computer Vision",
    "Machine Learning",
    "Algorithms and Data Structures",
    "Theory of Computing"
  ],
  email: "masila@iiitdm.ac.in",
  phone: "+91-44-27476346",
  office: "Room 108-B, IIITDM Kancheepuram",
  education: [
    { degree: "Ph.D. in Computer Science and Engineering", university: "Indian Institute of Technology, Madras", year: "-" },
    { degree: "M.Tech. in Computer Science & Data Processing", university: "Indian Institute of Technology, Kharagpur", year: "-" }
  ],
  publications: 10,
  projects: 5,
  students: 8,
  courses: [
    "Computer Vision",
    "Machine Learning",
    "Digital Image Processing",
    "Design and Analysis of Algorithms",
    "Automata and Compiler Design",
    "Computational Engineering",
    "Programming and Data Structures",
    "Object-Oriented Programming using C++",
    "Discrete Structure for Computer Science",
    "Data Structure and Algorithm",
    "Compiler Design",
    "Scripting Languages - Perl and Python",
    "Optimization Techniques",
    "Advanced Data Structures and Algorithms"
  ],
  socialLinks: {
    linkedin: "",
    github: "",
    website: ""
  },
    interestIconKeys: ["image", "eye", "brain", "file", "book"],
  },
  {
    id: 8,
    name: "Dr. Noor Mahammad SK",
  position: "Associate Professor",
  image: "http://mis.iiitdm.ac.in/Profile/images/Profile/noor.jpeg",
  interests: [
    "Software for VLSI Design",
    "Evolvable Hardware",
    "Reconfigurable Computing",
    "Network System Design",
    "High Performance VLSI Architectures for Digital Signal Processing",
    "Packet Processing Architectures and Algorithms",
    "Computer Architecture"
  ],
  email: "noor@iiitdm.ac.in",
  phone: "+91-44-27476349",
  office: "B3, PEMS Block, IIITDM Kancheepuram",
  education: [
    { degree: "Ph.D. in Computer Science and Engineering", university: "Indian Institute of Technology Madras", year: "2005 - 2009" },
    { degree: "M.Tech. in Electronics Design Technology", university: "National Institute of Electronics and Information Technology Aurangabad", year: "2001 - 2003" },
    { degree: "B.Tech. in Electronics and Communication Engineering", university: "NBKR Institute of Science and Technology, Sri Venkateswara University", year: "1997 - 2001" }
  ],
  publications: 10,
  projects: 0,
  students: 0,
  courses: [
    "Computer Organization and Design",
    "Operating Systems",
    "Computer Networks",
    "Computer Architecture",
    "Digital Logic Design",
    "VLSI Design",
    "Interfacing Through Microprocessors",
    "Network System Design",
    "Network and Computer Security",
    "Digital System Testing and Testable Designs",
    "Digital Signal Processing and Processors",
    "CPLD and FPGA Architectures and Applications",
    "Modeling and Synthesis of Verilog HDLs",
    "ASIC Design",
    "Scripting Languages for VLSI Design Automation"
  ],
  socialLinks: {
    portfolio: "http://web.iiitdm.ac.in/noor/",
    linkedin: "",
    github: "",
    website: ""
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
    "name": "Dr. Preeth R",
  "position": "Assistant Professor",
  "image": "http://mis.iiitdm.ac.in/Profile/images/Profile/Preeth.JPG",
  "interests": [
    "IoT and Cloud Computing",
    "Machine Learning",
    "Computer Vision",
    "Tiny ML",
    "Artificial Intelligence",
    "Data Science"
  ],
  "email": "preeth@iiitdm.ac.in",
  "phone": "044-27476104",
  "office": "517G, Laboratory Block, IIITDM Kancheepuram",
  "education": [
    { "degree": "Ph.D. in Computer Science and Engineering", "university": "National Institute of Technology, Tiruchirappalli", "year": "2015 - 2019" },
    { "degree": "M.E. in Computer Science and Engineering", "university": "Thiagarajar College of Engineering (Anna University)", "year": "2012 - 2014" }
  ],
  "teaching_experience": [
    "Assistant Professor (Feb 2022 - Present), IIITDM Kancheepuram, Chennai",
    "Assistant Professor (Aug 2020 - Feb 2022), IIITDM Kurnool, Andhra Pradesh",
    "Assistant Professor (Dec 2019 - Aug 2020), Vellore Institute of Technology, Chennai Campus"
  ],
  "specialization": [
    "Computer Science and Engineering",
    "Cyber-physical systems",
    "Machine Learning",
    "Artificial Intelligence"
  ],
  "professional_memberships": [
    "Institute of Electrical and Electronics Engineers (IEEE)",
    "Computer Society of India (CSI)"
  ],
  "honors_and_awards": [
    "Best Paper Award in IEEE IMICPW 2019 at NIT Tiruchirappalli",
    "Foreign Travel Grant from CSIR, New Delhi to present a paper in IEEE MIPR 2019 at San Jose, CA, USA",
    "Certified with 'CCNA Exploration: Network Fundamentals' by Cisco Networking Academy"
  ],
  "courses": [
    "Data Structures and Algorithms",
    "Data Communication and Networking",
    "Internet of Things",
    "Introduction to Data Science for Engineers",
    "Machine Learning",
    "Artificial Intelligence"
  ],
  "administrative_roles": [
    "Professor In-Charge (Sports) - April 2023 - Present",
    "Program Coordinator for AICTE Jammu-Kashmir Internship Program (UG & PG students)"
  ],
  "journal_publications": [
    "Localization in wireless sensor networks: A dimension-based pruning approach in 3D environments, Applied Soft Computing, Elsevier 2018",
    "Dimension based localization technique in Internet of Things: A fuzzy driven approach for mobile target, Journal Of Information Science and Engineering 2019",
    "Contextual Background Modeling using Deep Convolutional Neural Network, Multimedia Tools and Applications, Springer 2020",
    "A Fully Residual Convolutional Neural Network for Background Subtraction, Pattern Recognition Letters, Elsevier 2021",
    "Software Effort Estimation Using Attribute Refinement based Adaptive Neuro Fuzzy Model, International Journal of Innovative Research in Science, Engineering and Technology 2014",
    "High reliable–delay optimized controller placement in software-defined networking, International Journal of Communication Systems, Wiley 2024"
  ],
  "conference_publications": [
    "Self Localization and Routing in densely deployed wireless networks using LAS Algorithm, ACM 2016",
    "LibROSA based assessment tool for Music Information Retrieval systems, IEEE MIPR 2019, San Jose, USA",
    "Low Cost Received Signal Strength estimator for localization in wireless networks, IEEE IMICPW 2019, Tiruchirappalli"
  ],
  "projects": 3,
  "publications": 9,
  "students": 2,
  "outreach_activities": {
    "workshops": [
      "Short Term Course on Basics of Python, IIITDM Kancheepuram (Feb-Mar 2023)",
      "Short Term Training Program (STTP) on Data Science using Python (June 2023)",
      "Research Internship in Computer Science (RISC 2023), IIITDM Kancheepuram (May-Jul 2023)",
      "Five Days Lecture Series on Data Science (Dec 2024)"
    ],
    "conferences": [
      "Steering Committee Member, International Collegiate Programming Contest 2023 (ICPC 2023), West Asia, Chennai Region",
      "Associate Regional Contest Director, International Collegiate Programming Contest 2024"
    ],
    "invited_talks": [
      "Guest Lecture at IIIT Kottayam for a Five-day SERB sponsored workshop"
    ],
    "others": [
      "Ph.D. Doctoral Committee Member - NIT Tiruchirappalli, NIT Puducherry"
    ]
  },
  "phd_research_supervised": {
    "awarded": [],
    "ongoing": [
      { "name": "Ms. Rajathi.S", "status": "Full-time", "DOJ": "10-07-2023" },
      { "name": "Ms. G. Jaya Dharshini", "status": "Full-time", "DOJ": "30-12-2024" }
    ]
  },
  "patents": [],
  "socialLinks": {
    "linkedin": "",
    "github": "",
    "website": ""
  },
    interestIconKeys: ["cloud", "wifi", "brain", "eye", "network", "database"],
  },
  {
    id: 11,
    name: "Dr. Rahul Raman",
    position: "Assistant Professor",
    image: "https://mis.iiitdm.ac.in/Profile/images/Profile/rahul.jpeg",
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
    image: "https://mis.iiitdm.ac.in/Profile/images/Profile/sadagopan.jpeg",
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
    image: "https://mis.iiitdm.ac.in/Profile/images/Profile/sanjeetn.jpeg",
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
  image: "http://mis.iiitdm.ac.in/Profile/images/Profile/raghavans.jpeg",
  interests: [
    "Cloud Computing",
    "Membrane Computing",
    "Machine Learning"
  ],
  email: "raghavans@iiitdm.ac.in",
  phone: "044-27476107",
  office: "L517 - L, Laboratory Complex, IIITDM Kancheepuram",
  education: [
    { degree: "Ph.D.", university: "National Institute of Technology Karnataka, Surathkal", year: "2015 - 2021" },
    { degree: "M.Tech. in Computer Science and Engineering", university: "National Institute of Technology Karnataka, Surathkal", year: "2012 - 2015" },
    { degree: "B.Tech. in Computer Science and Engineering", university: "SASTRA University, Thanjavur", year: "2008 - 2012" }
  ],
  publications: 5,
  projects: 0,
  students: 0,
  courses: [
    "Digital Systems Design",
    "Computer Organization and Architecture",
    "Operating System",
    "Data Structures"

  ],
  socialLinks: {
    linkedin: "",
    github: "",
    website: ""
  },
    interestIconKeys: ["cloud", "database", "brain"],
  },
  {
    id: 15,
    "name": "Prof. Sivaselvan B",
  "position": "Professor and Head of Department (HOD)",
  "image": "http://mis.iiitdm.ac.in/Profile/images/Profile/SIVASELVANB.jpeg",
  "interests": [
    "Knowledge & Data Engineering",
    "Data Analytics",
    "Human Computer Interaction",
    "Evolutionary Computation Strategies"
  ],
  "email": "sivaselvanb@iiitdm.ac.in",
  "phone": "+91-44-27476343",
  "office": "108-C, IIITDM Kancheepuram",
  "education": [
    { "degree": "Ph.D. in Computer Science and Engineering", "university": "NIT Trichy" },
    { "degree": "M.Tech. in Computer Science and Engineering", "university": "IIT Madras" },
    { "degree": "B.E. in Computer Science and Engineering", "university": "Bharathiar University" }
  ],
  "publications": 20,
  "projects": 10,
  "students": 4,
  "courses": [
    "Object Oriented Programming",
    "Computational Engineering",
    "Database Systems",
    "Human Computer Interaction",
    "Data Analytics",
    "Genetic Algorithms",
    "Concepts in Computer Engineering"
  ],
  "administrative_roles": [
    "Head of the Department (HOD) - Feb 2024 onwards",
    "Dean Student Affairs (Oct 2021 - Feb 2024)",
    "Chief Warden (Oct 2021 - Oct 2023)",
    "Associate Dean Student Welfare (2016 - 2018)",
    "Academic & Senate Coordinator",
    "Faculty Coordinator (Sports)",
    "Website Coordinator (2008 - 2013)",
    "Computer Engineering Stream Coordinator (2009 - 2013)"
  ],
  "honors_and_awards": [
    "AICTE National Doctoral Fellowship (NDF) 2004-2007",
    "AICTE Early Faculty Induction Programme Fellowship (EFIP) 1999-2001",
    "Sponsored by DST and CSIR, New Delhi to present at 20th Canadian Conference on AI"
  ],
  "research_projects": [
    "CO-PI - Information Security Education Awareness Project – MeitY (2017)",
    "CO-PI - Knowledge Graph for Adverse Drug Reaction Detection with DataFoundry Pvt Ltd",
    "PI - AIOps Awareness and Research Avenues in Computer Engineering with GAVS Technologies Pvt Ltd",
    "Vritika Research Internship - Data Sciences Internship Programme (SERB, Govt. of India)",
    "COPI - Digital Twin for Electric Vehicle – IIITDM Kancheepuram SMIRE Research Grant",
    "Mentor - SERB TARE – Side Channel Attack Detection in Smart Wearable Devices"
  ],
  "socialLinks": {
    "linkedin": "",
    "github": "",
    "website": ""
  },
    interestIconKeys: ["database", "chart", "user", "brain"],
  },
  {
    id: 16,
    name: "Dr. Vijayakumar S",
    position: "Assistant Professor",
    image: "https://mis.iiitdm.ac.in/Profile/images/Profile/vijaycse.jpeg",
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
    image: "https://mis.iiitdm.ac.in/Profile/images/Profile/umarani.jpeg",
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

