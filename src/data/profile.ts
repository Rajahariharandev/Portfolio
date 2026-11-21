export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  location: string;
  availability: {
    status: string;
    isAvailable: boolean;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
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
  name: "Raja Hariharan",
  role: "Backend & Software Engineer",
  tagline: "Designing resilient backend architectures, high-concurrency APIs, and robust data pipelines with Go, Node.js, and relational databases.",
  bio: [
    "I am a Backend Software Engineer dedicated to constructing scalable, secure, and low-latency distributed systems. My hands-on engineering focuses on Go, Node.js, Oracle DB, PostgreSQL, and Redis.",
    "Over my career, I have worked on mission-critical business workflows, transitioning high-load relational databases to microservices, fine-tuning query execution plans, and automating real-time audit logging.",
    "I prioritize simplicity, fault-tolerance, clear API contracts, and observable telemetry. When building software, I design for predictable operational behavior under high concurrency."
  ],
  location: "India (Open to Remote & Hybrid)",
  availability: {
    status: "Available for Backend & Distributed Systems roles",
    isAvailable: true,
  },
  contact: {
    email: "rajahariharan.dev@gmail.com",
    github: "https://github.com/rajahariharan",
    linkedin: "https://linkedin.com/in/rajahariharan",
  },
  metrics: [
    {
      label: "P99 Latency Reduction",
      value: "95%",
      detail: "From 850ms to 42ms on core high-load query endpoints"
    },
    {
      label: "Peak Query Throughput",
      value: "5x",
      detail: "Optimized connection pooling and concurrent Go worker pipelines"
    },
    {
      label: "Cache Hit Ratio",
      value: "99.2%",
      detail: "Engineered multi-layer Redis cache-aside with jittered invalidation"
    },
    {
      label: "Daily Audit Events",
      value: "2M+",
      detail: "Zero-data-loss asynchronous audit logging pipeline"
    }
  ],
  principles: [
    {
      title: "Design for Failure & Predictability",
      description: "Systems will fail; graceful degradation, circuit breakers, backpressure, and timeouts keep minor faults from triggering cascading outages."
    },
    {
      title: "Data Integrity & Concurrency First",
      description: "Strict schema constraints, transactional guarantees, and safe concurrency primitives prevent data corruption under load."
    },
    {
      title: "Performance by Measurement",
      description: "Optimize based on profiling (pprof, explain plans, flame graphs) rather than premature intuition."
    },
    {
      title: "Defense in Depth",
      description: "Sanitized inputs, least-privilege RBAC, JWT verification, and rate limiting protect every endpoint at the gateway and application level."
    }
  ]
};
