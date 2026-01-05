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
];
