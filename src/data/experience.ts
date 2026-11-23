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
    company: "AV7 SCM - HO",
    location: "Tiruppur, Tamil Nadu, IN",
    period: "Feb 2026 — Present",
    type: "Full-Time",
    badge: "PROMOTED",
    // description: "Appointed as Assistant Lead within 12 months, overseeing end-to-end Python automation delivery across multiple sprint teams, establishing organizational automation frameworks, and mentoring development teams.",
    description: "Working across backend , enterprise application development, API modernization, and database optimization. Developing internal Go and Python services, production Node.js applications, and maintaining enterprise PHP applications integrated with Oracle databases..",
    achievements: [
      "Backend API Development: Building and optimizing backend services using Go, Node.js, and Python, developing REST APIs, handling authentication, and improving application performance.",
      "Go & Oracle API Modernization: Developing an internal Go-based Oracle API service to modernize PHP database operations, implementing connection pooling, caching, JWT authentication, and concurrent request handling.",
      "Production Application Development: Developing Node.js and PostgreSQL-based enterprise applications, including audit logging, monitoring dashboards, and backend data processing.",
      "Database & Performance Optimization: Working with Oracle SQL, PL/SQL, PostgreSQL, and Redis to optimize database operations, improve query performance, and build efficient data-access layers.",
      "Enterprise Systems & DevOps: Maintaining enterprise PHP applications, implementing authentication and role-based access control, and managing deployments using  Linux, Git, GitLab CI/CD, PM2 and Systemd."
    ],
    // technologies: ["Python", "FastAPI", "Django", "GitLab CI/CD", "Docker", "PostgreSQL", "Team Leadership", "Code Reviews"]
    technologies: ["Go", "Node.js", "Python", "PHP", "Oracle", "PostgreSQL", "Redis", "REST APIs", "Microservices", "Docker", "GitLab CI/CD", "JWT / RBAC", "FastAPI", "Django", "Team Leadership", "Code Reviews"]

  },
  {
    id: "scm-associate-dev",
    role: "Associate Software Developer",
    company: "The SCM Silk Private Limited",
    location: "Tiruppur, Tamil Nadu, IN",
    period: "2025 — Jan 2026",
    type: "Full-Time",
    description: "Developed backend applications, internal automation solutions, and REST APIs for enterprise ERP systems. Worked on Python automation, Go-based services, database integration, and performance optimization to streamline business workflows and improve application efficiency..",

    achievements: [
      "Backend Development & API Integration: Developed REST APIs and internal backend services using Python and Golang integrating enterprise ERP systems with web applications and streamlining data exchange.",
      "Python Automation: Developed and maintained Python automation scripts for ERP data-sync workflows, eliminating ~6 hours/week of manual processing and improving backend throughput by 30%.",
      "Database & Query Optimization: Worked with Oracle SQL, PL/SQL, and PostgreSQL to optimize database queries, improve data retrieval, and support efficient enterprise application workflows.",
      "Caching & Performance Engineering: Implemented Redis caching strategies and optimized backend data-access operations to reduce database load and improve application response times.",
      "Version Control & Deployment: Used Git and GitLab for source-code management, collaborative development, and application deployment workflows."
    ],
    technologies: ["Python", "FastAPI", "Django", "Golang", "REST APIs", "Oracle SQL", "PL/SQL", "PostgreSQL", "Redis Caching", "ERP Integration", "GitLab", "Backend Development", "GitLab", "SQL Optimization"]
  },
  {
    id: "chennai-silks-junior-assoc",
    role: "Junior Associate - Software Developer",
    company: "The Chennai Silks HO",
    location: "Tiruppur, Tamil Nadu, IN",
    period: "2023 — 2025",
    type: "Full-Time",
    description: "Authored Python data pipeline scripts, designed multi-database zero-loss migration scripts, and delivered backend solutions in an Agile team.",
    achievements: [
      "Python Automation & Data Pipelines: Developed and maintained for enterprise data-processing workflows, reducing repetitive manual data handling and contributing to a 15% improvement in user engagement through more efficient application workflows.",
      "Database Migration & Optimization: Designed and implemented Python-based Oracle and PostgreSQL migration scripts, automating data extraction, transformation, validation, and synchronization. Maintained zero-data-loss integrity across migration activities while reducing manual migration effort by approximately 40%.",
      "Backend Development & Integration: Developed and enhanced Django-based backend modules, database operations, and application integrations, improving data-processing efficiency and supporting reliable enterprise application workflows.",
      "Agile Collaboration & Delivery: Actively participated in Agile/Scrum ceremonies, technical discussions, debugging, documentation, and code reviews, contributing to timely delivery of backend enhancements and continuous improvement of development practices."

    ],
    technologies: ["Php", "Python", "Flask", "Oracle Database", "PostgreSQL", "SQL", "Shell Scripting", "Data Pipelines", "Database Migration", "Git", "Agile / Scrum"]

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
    date: "Learn",
    credentialId: "AWS S3, SNS, SQS & Pytest Test Automation"
  }
];
