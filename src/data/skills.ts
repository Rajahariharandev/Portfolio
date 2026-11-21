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
    title: "Backend & Systems Languages",
    description: "Languages used for building concurrent, high-throughput microservices and reliable backends.",
    skills: [
      { name: "Go (Golang)", level: "Core", highlight: true },
      { name: "Node.js (TypeScript / JS)", level: "Core", highlight: true },
      { name: "PHP", level: "Proficient" },
      { name: "Python", level: "Proficient" },
      { name: "SQL (PL/SQL & pgSQL)", level: "Core", highlight: true },
      { name: "Bash / Shell Scripting", level: "Proficient" }
    ]
  },
  {
    title: "Databases & In-Memory Stores",
    description: "Relational modeling, indexing strategies, connection pooling, and low-latency key-value caching.",
    skills: [
      { name: "Oracle Database", level: "Core", highlight: true },
      { name: "PostgreSQL", level: "Core", highlight: true },
      { name: "Redis (Cache & Pub/Sub)", level: "Core", highlight: true },
      { name: "MySQL", level: "Proficient" },
      { name: "MongoDB", level: "Proficient" },
      { name: "Query Optimization & EXPLAIN", level: "Advanced", highlight: true }
    ]
  },
  {
    title: "API Design & Concurrency",
    description: "Robust service communication, asynchronous patterns, and high-load traffic handling.",
    skills: [
      { name: "RESTful API Architecture", level: "Core", highlight: true },
      { name: "Goroutines & Channels", level: "Core", highlight: true },
      { name: "Worker Pools & Asynchronous Jobs", level: "Advanced", highlight: true },
      { name: "WebSockets & Event-Driven", level: "Proficient" },
      { name: "gRPC & Protocol Buffers", level: "Proficient" },
      { name: "Microservices Architecture", level: "Advanced" }
    ]
  },
  {
    title: "Security & Authentication",
    description: "Protecting data at rest and in transit, access control, and defense-in-depth principles.",
    skills: [
      { name: "JWT & Refresh Tokens", level: "Core", highlight: true },
      { name: "RBAC (Role-Based Access Control)", level: "Core", highlight: true },
      { name: "OAuth 2.0 Patterns", level: "Advanced" },
      { name: "Rate Limiting & Throttling", level: "Advanced", highlight: true },
      { name: "OWASP Top 10 Mitigation", level: "Advanced" },
      { name: "Data Sanitization & Zod/Validation", level: "Core" }
    ]
  },
  {
    title: "Infrastructure & DevOps",
    description: "Containerization, Linux server deployment, web server configuration, and automation.",
    skills: [
      { name: "Docker & Containerization", level: "Core", highlight: true },
      { name: "Linux / Unix Administration", level: "Core", highlight: true },
      { name: "Nginx Reverse Proxy", level: "Advanced", highlight: true },
      { name: "CI/CD (GitHub Actions)", level: "Advanced" },
      { name: "Systemd Service Daemonization", level: "Advanced" },
      { name: "Cloud Basics (AWS / GCP)", level: "Proficient" }
    ]
  },
  {
    title: "Telemetry, Testing & Tooling",
    description: "Ensuring uptime through observability, profiling, structured telemetry, and test harnesses.",
    skills: [
      { name: "Structured JSON Logging", level: "Core", highlight: true },
      { name: "Go Test / Jest / Vitest", level: "Core" },
      { name: "Postman / OpenAPI / Swagger", level: "Core", highlight: true },
      { name: "Git & Version Control", level: "Core" },
      { name: "pprof Profiling & Benchmarking", level: "Advanced" },
      { name: "Prometheus / Grafana Metrics", level: "Proficient" }
    ]
  }
];
