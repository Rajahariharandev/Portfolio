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
      { name: "Flask", level: "Core", highlight: true },
      { name: "FastAPI", level: "Core", highlight: true },
      { name: "Automation Scripts", level: "Core", highlight: true },
      { name: "Shell / Bash Scripting", level: "Advanced", highlight: true },
      { name: "PHP", level: "Proficient", highlight: true }
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
      { name: "Oracle Database", level: "Core", highlight: true },
      { name: "PostgreSQL", level: "Core", highlight: true },
      { name: "MySQL", level: "Advanced", highlight: true },
      { name: "SQL Query Optimization", level: "Core", highlight: true },
      { name: "Schema Design & Migrations", level: "Core", highlight: true },
      { name: "Redis Caching", level: "Core", highlight: true }
    ]
  },
  {
    title: "Query Optimization & Testing",
    description: "End-to-end API automation frameworks, code reviews, and testing best practices.",
    skills: [
      { name: "REST API Automation", level: "Core", highlight: true },
      { name: "Automation Frameworks", level: "Core", highlight: true },
      { name: "Burp Suite", level: "Advanced", highlight: true },
      { name: "Structured Code Reviews", level: "Core", highlight: true },
      { name: "Software Dev Best Practices", level: "Core", highlight: true },
      { name: "Postman / API Verification", level: "Core", highlight: true }
    ]
  },
  {
    title: "DevOps & Cloud CI/CD",
    description: "Automated pipelines, containerization, Linux environments, and cloud infrastructure.",
    skills: [
      { name: "GitLab CI/CD Pipelines", level: "Core", highlight: true },
      { name: "Docker & Containerization", level: "Core", highlight: true },
      { name: "Git & Version Control", level: "Core", highlight: true },
      { name: "Linux CLI & System Admin", level: "Core", highlight: true },
      { name: "Nginx Configurations", level: "Core", highlight: true },
      { name: "VS Code / Tooling", level: "Advanced", highlight: true }
    ]
  },
  {
    title: "Leadership & Agile Delivery",
    description: "Cross-functional sprint execution, technical guidance, and team elevation.",
    skills: [
      { name: "Team Leadership", level: "Core", highlight: true },
      { name: "Technical Mentorship", level: "Core", highlight: true },
      { name: "Sprint Planning (Agile/Scrum)", level: "Core", highlight: true },
      { name: "Cross-Functional Collaboration", level: "Core", highlight: true },
      { name: "Architectural Standards", level: "Core", highlight: true },
      { name: "Stakeholder Management", level: "Advanced", highlight: true }
    ]
  }
];
