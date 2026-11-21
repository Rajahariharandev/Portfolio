export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
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
    id: "backend-engineer-current",
    role: "Backend / Software Engineer",
    company: "Enterprise Software & Cloud Systems",
    location: "India",
    period: "2023 — Present",
    type: "Full-Time",
    description: "Designing, building, and maintaining high-availability backend microservices, core database interactions, and real-time data pipelines for enterprise applications.",
    achievements: [
      "Engineered high-throughput Go REST services connecting to Oracle Database, improving P99 latency by over 95% (850ms to 42ms).",
      "Designed an asynchronous event telemetry and audit logging pipeline in Go/Node.js handling 2M+ daily events with zero data loss.",
      "Optimized complex relational SQL queries, indexing strategies, and connection pooling across Oracle and PostgreSQL.",
      "Implemented distributed caching with Redis (TTL jitter, singleflight coalescing), reducing primary database load by up to 78%.",
      "Configured containerized Linux deployments with Docker, Nginx reverse proxies, and automated CI/CD pipelines via GitHub Actions."
    ],
    technologies: ["Go (Golang)", "Node.js", "Oracle DB", "PostgreSQL", "Redis", "Docker", "Linux", "Nginx", "Git"]
  },
  {
    id: "software-engineer-previous",
    role: "Software Engineer (Backend Focus)",
    company: "Technology Solutions & Services",
    location: "India",
    period: "2021 — 2023",
    type: "Full-Time",
    description: "Developed enterprise web services, business workflow systems, authentication layers, and integrated third-party APIs.",
    achievements: [
      "Built and maintained RESTful APIs in Node.js and PHP, servicing high-volume internal and external client requests.",
      "Implemented a centralized Role-Based Access Control (RBAC) service, standardizing authentication across 15+ services.",
      "Constructed transactional database schemas in PostgreSQL and MySQL with strict integrity constraints and automated migration scripts.",
      "Reduced system outage incidents by introducing structured logging, API input validation schemas, and automated integration tests.",
      "Automated server provisioning and deployment procedures using Bash scripts and Linux systemd services."
    ],
    technologies: ["Node.js", "TypeScript", "PHP", "PostgreSQL", "MySQL", "Redis", "JWT", "Linux", "Bash", "REST APIs"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
    institution: "Anna University Affiliated Engineering College",
    location: "Tamil Nadu, India",
    period: "Graduated",
    details: [
      "Core Coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Distributed Computing.",
      "Capstone Project: High-concurrency distributed data processing engine with caching and transaction management."
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: "Oracle Database SQL Certified Specialist",
    issuer: "Oracle University",
    date: "Verified Certification",
    credentialId: "Oracle Certified Professional Track"
  },
  {
    title: "Linux System Administration & Networking",
    issuer: "Professional Technical Training",
    date: "Verified Competency",
    credentialId: "Linux Server Operations & Shell Engineering"
  },
  {
    title: "Building Scalable Microservices with Go",
    issuer: "Cloud & Distributed Computing Academy",
    date: "Specialization",
    credentialId: "Concurrent Systems & Distributed Architecture"
  }
];
