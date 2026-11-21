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
  role: "Assistant Lead – Python Developer & Backend Automation",
  titleTag: "Assistant Lead – Python Developer | Backend Automation | Team Leadership",
  tagline: "Promoted Python Developer and Assistant Lead with 3+ years of experience building automation scripts, backend microservices, and high-performance REST API integrations.",
  bio: [
    "Promoted Python Developer and Assistant Lead with 3+ years of experience building automation scripts, backend microservices, and REST API integrations. Recognized for technical leadership — elevated to Assistant Lead within the same organization for consistently delivering high-impact automation solutions and mentoring development teams.",
    "Proven track record in Python (Django, FastAPI), Golang, Node.js, GitLab CI/CD pipelines, SQL optimization across PostgreSQL, Oracle, and Redis, and Agile delivery.",
    "Dedicated to eliminating manual workflows, enforcing architectural best practices, optimizing database performance, and actively expanding into AWS cloud services (S3, SNS, SQS) and cloud-native automation."
  ],
  location: "Trichy, Tamil Nadu, IN",
  phone: "6383852354",
  availability: {
    status: "Available for Backend, Python & Leadership Opportunities",
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
      detail: "SOAP-to-REST migration refactoring enterprise services into Python/Golang"
    },
    {
      label: "Access Provisioning Time",
      value: "-70%",
      detail: "Automated RBAC permission system with JWT authentication"
    },
    {
      label: "Database Migration Effort",
      value: "-40%",
      detail: "Zero data-loss Python Oracle & PostgreSQL migration engine"
    },
    {
      label: "Manual Processing Saved",
      value: "~6 hrs/wk",
      detail: "Python automation scripts for ERP data-sync workflows"
    }
  ],
  principles: [
    {
      title: "End-to-End Automation First",
      description: "Replace manual, error-prone data handling with resilient Python automation scripts, reducing operational bottlenecks."
    },
    {
      title: "Architectural Consistency & Clean APIs",
      description: "Refactor legacy services (SOAP) to scalable modern REST APIs (FastAPI, Django, Go) with strict schema contracts and GitLab CI/CD."
    },
    {
      title: "Database Performance & Zero-Loss Integrity",
      description: "Optimize SQL execution plans, design normalized schemas, and use Redis caching to minimize query response latency."
    },
    {
      title: "Technical Leadership & Mentorship",
      description: "Elevate team performance through structured code reviews, sprint planning, 1:1 developer mentoring, and agile cross-functional delivery."
    }
  ]
};
