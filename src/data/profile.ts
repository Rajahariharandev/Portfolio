export interface ProfileData {
  name: string;
  role: string;
  titleTag: string;
  tagline: string;
  bio: string[];
  location: string;
  phone: string;
  availability: {
    status: string;
    isAvailable: boolean;
  };
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    portfolio: string;
  };
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  principles: {
    title: string;
    description: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Rajahariharan K",
  role: "Assistant Lead -  backend Developer",
  titleTag: "Assistant Lead - Developer | Backend Automation | Team Leadership | Server Configuration | Automation | Linux | Cloud | Middleware | Rest api | CI/CD | Mysql | Redis | Aws | Python | Node js | Go | Docker  | Git  | Pm2 | Ristretto | singleflight | Systemd | Agile | Agile delivery | cloud watch | SSH | Nginx | Apache",
  tagline: "Promoted  Developer and Assistant Lead with 4+ years of experience building automation scripts, backend microservices, and high-performance REST API integrations.",
  bio: [
    "Promoted Developer and Assistant Lead with 4+ years of experience building automation scripts, backend microservices, and REST API integrations. Recognized for technical leadership — elevated to Assistant Lead within the same organization for consistently delivering high-impact automation solutions and mentoring development teams.",
    "Proven track record in Python, Golang, Node.js, Linux, Docker, Nginx, Apache, Middleware, GitLab CI/CD pipelines, SQL optimization across PostgreSQL, Oracle, and Redis, Pm2, Ristretto, singleflight, Systemd, and Agile delivery.",
    "Dedicated to eliminating manual workflows, enforcing architectural best practices, optimizing database performance, and actively expanding into Server Configurations , cloud services and cloud-native automation."
  ],
  location: "Trichy, Tamil Nadu, IN",
  phone: "6383852354",
  availability: {
    status: "Available for Backend & Leadership Opportunities",
    isAvailable: true,
  },
  contact: {
    email: "rajahariharan2244@gmail.com",
    phone: "6383852354",
    github: "https://github.com/Rajahariharandev",
    linkedin: "https://linkedin.com/in/rajahariharan-k-2b39a4243",
    portfolio: "https://rajahariharan-portfolio.netlify.app",
  },
  metrics: [
    {
      label: "System Scalability",
      value: "5x",
      detail: "SOAP-to-REST migration refactoring enterprise services into Golang"
    },
    {
      label: "Access Provisioning Time",
      value: "-70%",
      detail: "Automated RBAC permission system with JWT authentication"
    },
    {
      label: "Database Migration Effort",
      value: "-40%",
      detail: "Zero data-loss Golang with Oracle & PostgreSQL migration engine"
    },
    {
      label: "Manual Processing Saved",
      value: "~6 hrs/wk",
      detail: "Golang automation scripts for ERP data-sync workflows"
    }
  ],
  principles: [
    {
      title: "End-to-End Automation First",
      description: "Replace manual, error-prone data handling with resilient Python automation scripts, reducing operational bottlenecks."
    },
    {
      title: "Architectural Consistency & Clean APIs",
      description: "Refactor legacy services (SOAP) to scalable modern REST APIs (Golang) with strict schema contracts and GitLab CI/CD."
    },
    {
      title: "Database Performance & Zero-Loss Integrity",
      description: "Optimize SQL execution plans, design normalized schemas, and use L1 Ristretto , L2 Redis caching to minimize query response latency."
    },
    {
      title: "Technical Leadership & Mentorship",
      description: "Elevate team performance through structured code reviews, sprint planning, 1:1 developer mentoring, and agile cross-functional delivery."
    }
  ]
};
