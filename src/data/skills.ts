export interface SkillItem {
  name: string;
  level: "Core" | "Advanced" | "Proficient";
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Python & Scripting",
    description: "Core programming stack for automation scripts, web backends, and microservice APIs.",
    skills: [
      { name: "Python 3.x", level: "Core", highlight: true },
      { name: "Django", level: "Core", highlight: true },
      { name: "FastAPI", level: "Core", highlight: true },
      { name: "Automation Scripts", level: "Core", highlight: true },
      { name: "Shell / Bash Scripting", level: "Advanced", highlight: true },
      { name: "PHP", level: "Proficient" }
    ]
  },
  {
    title: "Backend & Microservices",
    description: "Scalable API architectures, token security, and legacy enterprise refactoring.",
    skills: [
      { name: "Node.js (Express)", level: "Core", highlight: true },
      { name: "Golang (Go)", level: "Core", highlight: true },
      { name: "Microservices Architecture", level: "Core", highlight: true },
      { name: "SOAP-to-REST Migration", level: "Core", highlight: true },
      { name: "RBAC (Role-Based Access)", level: "Core", highlight: true },
      { name: "JWT Authentication", level: "Core", highlight: true }
    ]
  },
  {
    title: "Databases & Performance Caching",
    description: "Relational data modeling, query optimization, zero data-loss migration, and in-memory caches.",
    skills: [
      { name: "PostgreSQL", level: "Core", highlight: true },
      { name: "Oracle Database", level: "Core", highlight: true },
      { name: "MySQL", level: "Advanced" },
      { name: "SQL Query Optimization", level: "Core", highlight: true },
      { name: "Schema Design & Migrations", level: "Core", highlight: true },
      { name: "Redis Caching", level: "Core", highlight: true }
    ]
  },
  {
    title: "Automation & Quality Engineering",
    description: "End-to-end API automation frameworks, code reviews, and testing best practices.",
    skills: [
      { name: "REST API Automation", level: "Core", highlight: true },
      { name: "Automation Frameworks", level: "Core", highlight: true },
      { name: "pytest Suite", level: "Advanced", highlight: true },
      { name: "Structured Code Reviews", level: "Core", highlight: true },
      { name: "Software Dev Best Practices", level: "Core" },
      { name: "Postman / API Verification", level: "Core" }
    ]
  },
  {
    title: "DevOps & Cloud CI/CD",
    description: "Automated pipelines, containerization, Linux environments, and cloud infrastructure.",
    skills: [
      { name: "GitLab CI/CD Pipelines", level: "Core", highlight: true },
      { name: "Docker & Containerization", level: "Core", highlight: true },
      { name: "Git & Version Control", level: "Core" },
      { name: "Linux CLI & System Admin", level: "Core", highlight: true },
      { name: "AWS (S3, SNS, SQS)", level: "Advanced", highlight: true },
      { name: "VS Code / Tooling", level: "Core" }
    ]
  },
  {
    title: "Leadership & Agile Delivery",
    description: "Cross-functional sprint execution, technical guidance, and team elevation.",
    skills: [
      { name: "Team Leadership", level: "Core", highlight: true },
      { name: "Technical Mentorship", level: "Core", highlight: true },
      { name: "Sprint Planning (Agile/Scrum)", level: "Core", highlight: true },
      { name: "Cross-Functional Collaboration", level: "Core" },
      { name: "Architectural Standards", level: "Core", highlight: true },
      { name: "Stakeholder Management", level: "Advanced" }
    ]
  }
];
