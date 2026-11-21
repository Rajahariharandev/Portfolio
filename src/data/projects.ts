export interface ProjectCaseStudy {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  role: string;
  period: string;
  category: "Backend & Microservices" | "Security & Auth" | "Automation & ERP" | "Database & Migration";
  summary: string;
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  problem: string;
  architecture: {
    description: string;
    flow: string[];
    diagramSnippet?: string;
  };
  keyDecisions: {
    decision: string;
    rationale: string;
    impact: string;
  }[];
  securityAndReliability: string[];
  challenges: string;
  outcomes: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "soap-to-rest-migration",
    slug: "soap-to-rest-migration",
    title: "Enterprise SOAP-to-REST Migration",
    subtitle: "Refactoring legacy monolithic SOAP services into high-performance Python & Go REST APIs",
    role: "Lead Automation & Backend Engineer",
    period: "Production Deployment",
    category: "Backend & Microservices",
    summary: "Refactored a legacy enterprise SOAP XML architecture into a modern Python (FastAPI/Django) and Golang REST API, automating deployment via GitLab CI/CD pipelines to achieve a 5x improvement in system scalability.",
    technologies: ["Python (FastAPI / Django)", "Golang", "GitLab CI/CD", "Docker", "Linux CLI", "REST APIs", "Postman"],
    metrics: [
      { label: "System Scalability", value: "5x Improvement" },
      { label: "Maintenance Overhead", value: "-65% Reduced" },
      { label: "Deployment Pipeline", value: "100% Automated" },
      { label: "P99 Response Time", value: "< 45ms" }
    ],
    problem: "The legacy SOAP XML endpoints suffered from bulky XML payloads, high serialization overhead, poor developer ergonomics, and frequent timeouts under concurrent traffic spikes. Deployments were manual, risky, and hindered feature delivery.",
    architecture: {
      description: "Designed a clean RESTful microservices architecture with lightweight JSON contracts, asynchronous request handling, and automated containerized delivery via GitLab CI/CD.",
      flow: [
        "Incoming client HTTP requests are terminated at Nginx and routed to the Python/Go REST microservice",
        "FastAPI/Django serialization validates request schemas using typed Pydantic models",
        "Business logic executes concurrently with optimized connection pooling to backend datastores",
        "Automated GitLab CI/CD pipeline runs unit/regression suites and deploys Dockerized services with zero downtime"
      ],
      diagramSnippet: "Client App -> Nginx Reverse Proxy -> Python/Go REST API (GitLab CI/CD) <--> Relational DB"
    },
    keyDecisions: [
      {
        decision: "Transitioned from XML SOAP envelopes to JSON REST specifications",
        rationale: "JSON payloads are 60-70% lighter than verbose SOAP XML, dramatically reducing network bandwidth and parsing overhead.",
        impact: "Cut network payload transfer sizes by 65% and boosted endpoint throughput by 5x."
      },
      {
        decision: "Engineered automated GitLab CI/CD containerized deployment pipelines",
        rationale: "Eliminated manual SSH releases and human configuration error during updates.",
        impact: "Accelerated release velocity from monthly batches to multiple verified weekly releases."
      }
    ],
    securityAndReliability: [
      "Strict request validation schemas with automated input sanitization",
      "GitLab CI/CD automated linting, test suites, and Docker image vulnerability scanning",
      "Structured JSON error handling with sanitized error codes that prevent leaking backend internals"
    ],
    challenges: "Maintaining backward compatibility for existing enterprise consumers while shifting core endpoints. Solved by implementing an API translation gateway during the phase-in period.",
    outcomes: [
      "Achieved a 5x improvement in system scalability under peak concurrency",
      "Significantly reduced long-term maintenance overhead and bug ticket turnaround",
      "Established standard API design blueprints now adopted across the development organization"
    ],
    githubUrl: "https://github.com/rajahariharan"
  },
  {
    id: "employee-rbac-permission-system",
    slug: "employee-rbac-permission-system",
    title: "Employee RBAC Permission System",
    subtitle: "Automated Role-Based Access Control and authorization engine with JWT verification",
    role: "Backend & Systems Developer",
    period: "Production Deployment",
    category: "Security & Auth",
    summary: "Engineered a centralized Role-Based Access Control (RBAC) system with JWT authentication and automated permission workflows, cutting manual access provisioning by 70% and securing sensitive enterprise data.",
    technologies: ["Node.js (Express)", "Python", "PostgreSQL", "Redis", "JWT", "Docker", "REST API"],
    metrics: [
      { label: "Access Provisioning Time", value: "-70% Cut" },
      { label: "Evaluation Latency", value: "< 2.8ms" },
      { label: "Cache Hit Rate", value: "95.2%" },
      { label: "Privilege Escalation Risks", value: "Zero" }
    ],
    problem: "Manual role assignments and fragmented access checks scattered across different internal portals led to permission drift, security vulnerabilities, and required several hours of IT manual approval per employee change.",
    architecture: {
      description: "A centralized authorization engine evaluating role matrices against requested endpoints using cryptographically signed JWTs and in-memory Redis caching.",
      flow: [
        "User authenticates and receives an encrypted JWT containing validated claims and role scopes",
        "API Gateway middleware extracts token and checks permission bitmask in Redis cache",
        "If cache miss, queries hierarchical role graph in PostgreSQL and updates cache with TTL",
        "Instant access approval/denial returned with auditable trace context"
      ],
      diagramSnippet: "Client Request -> JWT Middleware -> Redis Permission Cache <-> PostgreSQL Role Matrix"
    },
    keyDecisions: [
      {
        decision: "Bitmask-based permission evaluation engine",
        rationale: "Bitwise boolean operations execute in nanoseconds compared to string array iterations.",
        impact: "Permission verification added negligible overhead (< 3ms) to API requests."
      },
      {
        decision: "Automated permission lifecycle triggers",
        rationale: "Role changes in HR management trigger instant pub/sub cache invalidation.",
        impact: "Reduced employee access provisioning and de-provisioning from days to seconds."
      }
    ],
    securityAndReliability: [
      "Short-lived access tokens with secure refresh token rotation",
      "Strict least-privilege role definitions preventing unauthorized access across departments",
      "Comprehensive audit trail for every privilege grant, escalation, or revocation"
    ],
    challenges: "Handling nested multi-department roles without cyclical inheritance bugs. Resolved by creating a directed acyclic graph (DAG) role validation rule.",
    outcomes: [
      "Cut manual access provisioning effort by 70% across internal operations",
      "Passed internal IT security audits with 100% compliance and zero privilege drift incidents"
    ],
    githubUrl: "https://github.com/rajahariharan"
  },
  {
    id: "erp-data-sync-automation",
    slug: "erp-data-sync-automation",
    title: "ERP Data-Sync & REST Automation Framework",
    subtitle: "High-throughput automation pipelines connecting legacy ERP systems with modern web frontends",
    role: "Associate Software Developer",
    period: "Production Deployment",
    category: "Automation & ERP",
    summary: "Built internal REST automation frameworks (FastAPI / Django / Golang) integrating legacy ERP systems with modern web applications, eliminating ~6 hours/week of manual processing and reducing response time by 30% through Redis caching.",
    technologies: ["Python (FastAPI / Django)", "Golang", "Redis Caching", "PostgreSQL", "SQL Optimization", "Shell Scripting"],
    metrics: [
      { label: "Manual Effort Eliminated", value: "~6 hrs/week" },
      { label: "Server Response Time", value: "-30% Reduced" },
      { label: "Backend Throughput", value: "+30% Boost" },
      { label: "Data-Sync Accuracy", value: "100%" }
    ],
    problem: "Operational teams had to manually export, transform, and sync ERP inventory and transaction records between disjointed enterprise databases, creating human errors and slow data propagation.",
    architecture: {
      description: "Automated event-driven Python daemon synchronizing ERP records with modern web frontends, backed by Redis cache layers and query-tuned database schemas.",
      flow: [
        "Python background worker monitors ERP transactional changelogs",
        "Automated scripts validate, normalize, and transform raw ERP records",
        "Updates are written to PostgreSQL with batch optimization and cached in Redis",
        "Frontend web consumers receive instant, cached data with sub-second propagation"
      ],
      diagramSnippet: "Legacy ERP DB -> Python Automation Daemon -> Redis Cache & PostgreSQL -> Modern Frontend"
    },
    keyDecisions: [
      {
        decision: "Implemented Redis cache-aside with proactive cache warming",
        rationale: "Prevents direct read spikes from hammering the central ERP database.",
        impact: "Reduced server response times by 30% while maintaining real-time inventory fidelity."
      },
      {
        decision: "Automated scheduled data-sync batch routines with Python & Shell",
        rationale: "Eliminated repetitive manual operator intervention for recurring data reconciliation.",
        impact: "Freed ~6 engineering hours per week and eliminated human copy-paste data corruption."
      }
    ],
    securityAndReliability: [
      "Transactional batch commits ensuring zero partial or corrupted sync states",
      "Automated alerting triggers if sync delays exceed SLA thresholds",
      "Encrypted database credentials managed via secure Linux environment variables"
    ],
    challenges: "Dealing with ERP lock contention during heavy daytime updates. Solved by splitting large transactions into non-blocking micro-batches.",
    outcomes: [
      "Improved overall backend throughput by 30% under peak sales traffic",
      "Eliminated recurring manual data entry, saving over 300 operational hours annually"
    ],
    githubUrl: "https://github.com/rajahariharan"
  },
  {
    id: "zero-loss-database-migration",
    slug: "zero-loss-database-migration",
    title: "Zero Data-Loss Database Migration Engine",
    subtitle: "Python-driven data pipeline migrating large-scale Oracle and PostgreSQL schemas",
    role: "Junior Associate – Software Developer",
    period: "Production Deployment",
    category: "Database & Migration",
    summary: "Designed and executed Python-based migration scripts for Oracle and PostgreSQL database clusters, maintaining zero data-loss integrity across massive datasets while reducing migration effort by ~40%.",
    technologies: ["Python", "Oracle Database", "PostgreSQL", "SQL Optimization", "Schema Design", "Shell Scripting"],
    metrics: [
      { label: "Migration Effort", value: "-40% Reduced" },
      { label: "Data-Loss Rate", value: "0.00% (Zero)" },
      { label: "Schema Validation", value: "100% Integrity" },
      { label: "Downtime Window", value: "Minimal" }
    ],
    problem: "Migrating enterprise datasets across disparate database engines (Oracle and PostgreSQL) risked data truncation, type mismatch corruption, and lengthy maintenance downtime windows.",
    architecture: {
      description: "Python-orchestrated ETL migration pipeline featuring chunked stream reading, automated schema type translation, and multi-stage verification checksums.",
      flow: [
        "Python extractor streams source records in buffered chunks using cursor pagination",
        "Data transformation layer maps proprietary Oracle data types to standard PostgreSQL types",
        "Bulk insertion pipeline writes to target database within transactional savepoints",
        "Automated verification worker compares SHA-256 record hashes to certify 100% integrity"
      ],
      diagramSnippet: "Source Oracle DB -> Python ETL Streaming Engine -> Checksum Validator -> Target PostgreSQL"
    },
    keyDecisions: [
      {
        decision: "Engineered automated schema mapping and type translation scripts",
        rationale: "Manual SQL table recreation across hundreds of tables is error-prone.",
        impact: "Reduced migration preparation effort by approximately 40%."
      },
      {
        decision: "Automated cryptographic checksum validation between source and destination",
        rationale: "Guaranteed absolute proof that no rows were dropped or mutated.",
        impact: "Achieved verified 0% data loss across all historical datasets."
      }
    ],
    securityAndReliability: [
      "Rollback checkpoints allowing instant recovery in the event of network disruption",
      "Parametric SQL bindings preventing data-escape injection flaws during data transfer",
      "Zero plain-text logging of sensitive customer records during processing"
    ],
    challenges: "Handling foreign key constraint dependencies during bulk imports. Solved by writing a topological sort dependency resolver in Python.",
    outcomes: [
      "Successfully migrated large-scale enterprise datasets without any production data loss",
      "Decreased overall project migration timeline from estimated months to 3 automated weeks"
    ],
    githubUrl: "https://github.com/rajahariharan"
  }
];
