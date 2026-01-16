export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Remote" | "Hybrid";
  experience: string;
  salary: string;
  postedAt: string;

  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];

  tags: string[];
};

export const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    salary: "$3000 - $4000",
    postedAt: "3 days ago",
    description:
      "We are looking for a Frontend Developer to build modern and scalable web interfaces using React and Tailwind CSS.",
    responsibilities: [
      "Develop new user-facing features",
      "Optimize applications for maximum speed",
      "Collaborate with designers and backend developers",
    ],
    requirements: [
      "Strong knowledge of JavaScript and React",
      "Experience with Tailwind CSS",
      "Understanding of REST APIs",
    ],
    benefits: [
      "Remote-friendly environment",
      "Flexible working hours",
      "Career growth opportunities",
    ],
    tags: ["React", "Tailwind", "Remote"],
  },

  {
    id: "2",
    title: "Backend Developer (Node.js)",
    company: "Cloudify",
    location: "Berlin, Germany",
    type: "Hybrid",
    experience: "3+ years",
    salary: "$4000 - $5500",
    postedAt: "5 days ago",
    description:
      "Join our backend team to design and maintain scalable APIs using Node.js and modern cloud technologies.",
    responsibilities: [
      "Build RESTful APIs",
      "Maintain databases and server logic",
      "Ensure security and performance",
    ],
    requirements: [
      "Strong Node.js & Express knowledge",
      "Experience with SQL or NoSQL databases",
      "Understanding of authentication & authorization",
    ],
    benefits: [
      "Hybrid work model",
      "Health insurance",
      "Paid annual leave",
    ],
    tags: ["Node.js", "Express", "API"],
  },

  {
    id: "3",
    title: "Full Stack Developer",
    company: "InnovateX",
    location: "Paris, France",
    type: "Full-time",
    experience: "4+ years",
    salary: "$4500 - $6000",
    postedAt: "1 week ago",
    description:
      "We are seeking a Full Stack Developer to work on end-to-end web applications using modern technologies.",
    responsibilities: [
      "Develop frontend and backend features",
      "Collaborate with cross-functional teams",
      "Deploy and maintain applications",
    ],
    requirements: [
      "Experience with React and Node.js",
      "Good understanding of databases",
      "Experience with cloud platforms is a plus",
    ],
    benefits: [
      "Competitive salary",
      "Career advancement",
      "Modern tech stack",
    ],
    tags: ["React", "Node.js", "Full Stack"],
  },

  {
    id: "4",
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Remote",
    type: "Part-time",
    experience: "2+ years",
    salary: "$2000 - $3000",
    postedAt: "2 days ago",
    description:
      "Design intuitive and visually appealing user experiences for web and mobile platforms.",
    responsibilities: [
      "Create wireframes and prototypes",
      "Collaborate with developers",
      "Conduct user research",
    ],
    requirements: [
      "Experience with Figma or Adobe XD",
      "Strong design portfolio",
      "Understanding of UX principles",
    ],
    benefits: [
      "Remote work",
      "Flexible schedule",
      "Creative freedom",
    ],
    tags: ["UI", "UX", "Design"],
  },

  {
    id: "5",
    title: "Mobile App Developer (Flutter)",
    company: "AppWave",
    location: "London, UK",
    type: "Full-time",
    experience: "3+ years",
    salary: "$3500 - $5000",
    postedAt: "4 days ago",
    description:
      "Build high-quality mobile applications using Flutter for both Android and iOS platforms.",
    responsibilities: [
      "Develop cross-platform mobile apps",
      "Ensure performance and quality",
      "Collaborate with backend teams",
    ],
    requirements: [
      "Strong Flutter & Dart skills",
      "Experience with REST APIs",
      "Knowledge of mobile UI best practices",
    ],
    benefits: [
      "Hybrid work",
      "Paid vacations",
      "Learning budget",
    ],
    tags: ["Flutter", "Mobile", "Dart"],
  },

  {
    id: "6",
    title: "DevOps Engineer",
    company: "ScaleOps",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    salary: "$5000 - $6500",
    postedAt: "6 days ago",
    description:
      "Manage CI/CD pipelines and cloud infrastructure to ensure reliable deployments.",
    responsibilities: [
      "Maintain CI/CD pipelines",
      "Monitor system performance",
      "Manage cloud infrastructure",
    ],
    requirements: [
      "Experience with AWS or GCP",
      "Knowledge of Docker & Kubernetes",
      "Linux system administration skills",
    ],
    benefits: [
      "Remote-first culture",
      "High-impact role",
      "Performance bonuses",
    ],
    tags: ["DevOps", "AWS", "Docker"],
  },

  {
    id: "7",
    title: "Data Analyst",
    company: "DataMind",
    location: "Amsterdam, NL",
    type: "Hybrid",
    experience: "2+ years",
    salary: "$3000 - $4200",
    postedAt: "1 week ago",
    description:
      "Analyze data to generate insights that drive business decisions.",
    responsibilities: [
      "Analyze datasets",
      "Create dashboards",
      "Communicate insights",
    ],
    requirements: [
      "Experience with SQL",
      "Knowledge of data visualization tools",
      "Strong analytical skills",
    ],
    benefits: [
      "Hybrid work",
      "Training programs",
      "Growth opportunities",
    ],
    tags: ["Data", "SQL", "Analytics"],
  },

  {
    id: "8",
    title: "QA Engineer",
    company: "QualityFirst",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    salary: "$2800 - $3800",
    postedAt: "3 days ago",
    description:
      "Ensure product quality through manual and automated testing.",
    responsibilities: [
      "Write test cases",
      "Automate tests",
      "Report bugs",
    ],
    requirements: [
      "Experience in QA testing",
      "Knowledge of testing frameworks",
      "Attention to detail",
    ],
    benefits: [
      "Remote work",
      "Stable projects",
      "Friendly team",
    ],
    tags: ["QA", "Testing", "Automation"],
  },

  {
    id: "9",
    title: "Product Manager",
    company: "VisionaryLabs",
    location: "New York, USA",
    type: "Full-time",
    experience: "5+ years",
    salary: "$6000 - $8000",
    postedAt: "2 weeks ago",
    description:
      "Lead product strategy and coordinate between business and technical teams.",
    responsibilities: [
      "Define product roadmap",
      "Gather requirements",
      "Work with stakeholders",
    ],
    requirements: [
      "Strong communication skills",
      "Experience managing products",
      "Agile/Scrum knowledge",
    ],
    benefits: [
      "High salary",
      "Leadership role",
      "International exposure",
    ],
    tags: ["Product", "Management", "Agile"],
  },

  {
    id: "10",
    title: "Junior Web Developer",
    company: "StartUpBoost",
    location: "Remote",
    type: "Remote",
    experience: "0-1 year",
    salary: "$1500 - $2200",
    postedAt: "1 day ago",
    description:
      "Perfect opportunity for junior developers to start their career in web development.",
    responsibilities: [
      "Assist senior developers",
      "Fix bugs",
      "Learn modern technologies",
    ],
    requirements: [
      "Basic HTML, CSS, JavaScript",
      "Motivation to learn",
      "Good communication",
    ],
    benefits: [
      "Mentorship",
      "Remote work",
      "Career kickstart",
    ],
    tags: ["Junior", "Web", "Entry-Level"],
  },
];
