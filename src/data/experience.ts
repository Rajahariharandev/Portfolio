export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  badge?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  aggregate?: string;
  details: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "scm-assistant-lead",
    role: "Assistant Lead",
    company: "The SCM Silk Private Limited",
    location: "Trichy, Tamil Nadu, IN",
    period: "Feb 2026 — Present",
    type: "Full-Time",
    badge: "PROMOTED",
    description: "Appointed as Assistant Lead within 12 months, overseeing end-to-end Python automation delivery across multiple sprint teams, establishing organizational automation frameworks, and mentoring development teams.",
    achievements: [
      "Technical Leadership: Overseeing end-to-end Python automation delivery across multiple sprint teams — ensuring architectural consistency and code quality standards across all backend services.",
      "Automation Strategy: Driving design and implementation of scalable Python automation frameworks, reducing cross-team manual effort and establishing reusable script libraries adopted organization-wide.",
      "Mentoring & Reviews: Conducting structured code reviews and 1:1 mentoring sessions for junior developers, improving team code quality and onboarding speed while enforcing software development best practices.",
      "Stakeholder Collaboration: Liaising with cross-functional stakeholders to gather automation requirements, translate business needs into technical solutions, and report delivery progress in Agile sprint cycles."
    ],
    technologies: ["Python", "FastAPI", "Django", "GitLab CI/CD", "Docker", "PostgreSQL", "Team Leadership", "Code Reviews"]
  },
  {
    id: "scm-associate-dev",
    role: "Associate Software Developer",
    company: "The SCM Silk Private Limited",
    location: "Trichy, Tamil Nadu, IN",
    period: "2025 — Jan 2026",
    type: "Full-Time",
    description: "Built internal REST automation frameworks, developed Python scripts for ERP data synchronization, and optimized database query execution.",
    achievements: [
      "Python Automation: Developed and maintained Python automation scripts for ERP data-sync workflows, eliminating ~6 hours/week of manual processing and improving backend throughput by 30%.",
      "API & Framework Design: Built internal REST automation frameworks (FastAPI / Django / Golang) integrating legacy ERP systems with modern web frontends, achieving a 5x improvement in system scalability.",
      "Performance Optimization: Reduced server response time by 30% through Redis caching and Python-driven SQL query optimization, supporting high-concurrency, low-latency data processing."
    ],
    technologies: ["Python", "FastAPI", "Django", "Golang", "Redis Caching", "SQL Optimization", "ERP Data-Sync", "GitLab"]
  },
  {
    id: "chennai-silks-junior-assoc",
    role: "Junior Associate – Software Developer",
    company: "The Chennai Silks HO",
    location: "Tamil Nadu, IN",
    period: "2023 — 2025",
    type: "Full-Time",
    description: "Authored Python data pipeline scripts, designed multi-database zero-loss migration scripts, and delivered backend solutions in an Agile team.",
    achievements: [
      "Automation Scripting: Authored Python (Django) automation scripts for front-end data pipelines, improving user engagement by 15% and reducing manual data handling across web modules.",
      "Database Automation: Designed Python-based Oracle and PostgreSQL migration scripts, maintaining zero data-loss integrity across large-scale datasets and reducing migration effort by ~40%.",
      "Agile Collaboration: Contributed to Agile/Scrum ceremonies, technical documentation, and collaborative code reviews — delivering backend solutions aligned with cross-functional requirements."
    ],
    technologies: ["Python", "Django", "Oracle Database", "PostgreSQL", "Shell Scripting", "Agile / Scrum", "Data Pipelines"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Pavendar Bharathidasan College of Arts & Science",
    location: "Tamil Nadu, India",
    period: "2019 — 2022",
    aggregate: "80% Aggregate",
    details: [
      "Graduated with 80% Aggregate in Computer Applications.",
      "Coursework: Object-Oriented Programming, Database Management Systems, Data Structures & Algorithms, Web Technologies, Software Engineering."
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: "Full Stack Python Certification",
    issuer: "Indra Institute of Education, Coimbatore",
    date: "2023",
    credentialId: "Comprehensive Python, Django, Databases & Web Architecture"
  },
  {
    title: "AWS Cloud & Pytest Automation Specialization",
    issuer: "Self-Directed Advanced Cloud Study",
    date: "Active",
    credentialId: "AWS S3, SNS, SQS & Pytest Test Automation"
  }
];
