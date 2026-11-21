export interface ProjectCaseStudy {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  role: string;
  period: string;
  category: "High Concurrency" | "Security & Auth" | "Database & Storage" | "Distributed Systems";
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
    id: "go-oracle-api-engine",
    slug: "go-oracle-api-engine",
    title: "High-Throughput Go & Oracle DB Service Migration",
    subtitle: "Low-latency REST microservice replacing a bottlenecked legacy monolith",
    role: "Lead Backend Engineer",
    period: "Production Deployment",
    category: "High Concurrency",
    summary: "Re-architected a critical data-ingestion and query engine from a legacy monolithic stack to an idiomatic Go service connected to an enterprise Oracle Database cluster, dropping P99 response times from 850ms to 42ms.",
    technologies: ["Go (Golang)", "Oracle Database", "godror", "Redis", "Docker", "Linux", "Nginx"],
    metrics: [
      { label: "P99 Latency", value: "850ms → 42ms" },
      { label: "Query Throughput", value: "5.2x Increase" },
      { label: "Memory Footprint", value: "-72% Reduced" },
      { label: "Downtime During Cutover", value: "0 ms" }
    ],
    problem: "The legacy application suffered from high thread contention, unpredictable garbage collection pauses, and connection pool starvation when servicing concurrent data access requests against an Oracle DB with 12M+ records. End-user transactions experienced intermittent 504 timeouts during morning peak hours.",
    architecture: {
      description: "Designed a clean layered Go microservice isolating HTTP transport, business domain logic, and a resilient database repository layer with controlled connection pool sizing and Redis caching.",
      flow: [
        "Client Request arrives via Nginx reverse proxy with SSL termination and rate limiting",
        "Go HTTP Router validates request context, JWT token, and parses structured payload",
        "Cache-Aside Layer checks Redis for pre-warmed reference queries with TTL jitter",
        "Repository Layer uses database/sql pooled sessions with prepared statements and context timeouts",
        "Worker Pool processes write-heavy auditing tasks asynchronously without blocking HTTP response"
      ],
      diagramSnippet: "Client -> Nginx Proxy -> Go Service (Worker Pool + Conn Pool) <--> Redis Cache | Oracle DB"
    },
    keyDecisions: [
      {
        decision: "Adopted Godror with tuned connection pooling instead of generic ORMs",
        rationale: "Enterprise Oracle features (bulk collections, bind variables, REF CURSORs) require fine-grained driver control to prevent hard parsing and cursor leakage.",
        impact: "Reduced database CPU utilization by 34% by ensuring 100% prepared statement reuse across identical queries."
      },
      {
        decision: "Implemented Context-driven timeouts on all external I/O",
        rationale: "Prevents orphaned goroutines from holding open socket connections when upstream clients disconnect prematurely.",
        impact: "Zero connection leaks observed across continuous 90-day production run."
      },
      {
        decision: "Decoupled transactional writes from secondary audit indexing",
        rationale: "Audit persistence should never cause primary record insertion to abort or stall.",
        impact: "Eliminated tail latency spikes on user-facing checkout and submission flows."
      }
    ],
    securityAndReliability: [
      "Strict parameter binding across all PL/SQL queries to eliminate SQL injection vectors",
      "Graceful shutdown handling SIGTERM signals, allowing active in-flight requests 15s to complete",
      "Health and readiness probes (/healthz, /readyz) verifying Oracle DB ping before accepting traffic",
      "Structured JSON logs with sanitized payload masking (removing PII and credential data)"
    ],
    challenges: "Handling Oracle connection re-establishment during intermittent network resets without terminating the Go daemon. Solved by writing an exponential backoff reconnect wrapper with max retry thresholds.",
    outcomes: [
      "Successfully processed over 4.5 million daily API calls without a single out-of-memory or crash event",
      "Decreased server provisioning costs by running on 2 lightweight Docker containers compared to 8 legacy VM nodes",
      "Achieved sub-50ms SLA across 99.1% of all customer transactions"
    ],
    githubUrl: "https://github.com/rajahariharan"
  },
  {
    id: "audit-telemetry-pipeline",
    slug: "audit-telemetry-pipeline",
    title: "Distributed Audit-Log & Telemetry Pipeline",
    subtitle: "Zero-data-loss asynchronous audit stream with partitioned storage",
    role: "Backend & Systems Engineer",
    period: "Production Deployment",
    category: "Distributed Systems",
    summary: "Engineered an asynchronous, tamper-evident audit logging engine utilizing Redis Streams, Go worker consumers, and partitioned PostgreSQL storage to fulfill strict enterprise compliance standards.",
    technologies: ["Node.js / Go", "PostgreSQL", "Redis Streams", "Timescale / Partitioning", "Docker"],
    metrics: [
      { label: "Daily Ingestion", value: "2M+ Events" },
      { label: "Producer Ingestion Overhead", value: "< 3.5ms" },
      { label: "Log Retention Search Time", value: "< 120ms" },
      { label: "Data Loss Incidents", value: "Zero" }
    ],
    problem: "Regulatory compliance required comprehensive immutable logging of all state mutations across multiple microservices. The existing synchronous database write approach created severe backpressure and threatened system stability whenever write bursts occurred.",
    architecture: {
      description: "Implemented an event-driven telemetry pipeline separating fast producer ingestion from reliable consumer batch-writing.",
      flow: [
        "Originating services emit mutation events to a Redis Stream buffer with deterministic event IDs",
        "Lightweight telemetry sidecar verifies payload checksum and timestamps",
        "Go-based consumer groups read in batches of 500 events using XREADGROUP with ACK semantics",
        "Events are validated and bulk-inserted into monthly partitioned PostgreSQL tables",
        "Archive worker compresses cold partition tables older than 90 days"
      ],
      diagramSnippet: "Services -> Telemetry Client -> Redis Stream -> Go Consumer Group -> Partitioned Postgres"
    },
    keyDecisions: [
      {
        decision: "Utilized Redis Streams with Consumer Groups over standard Pub/Sub",
        rationale: "Redis Pub/Sub offers fire-and-forget delivery; Streams guarantee persistence and explicit acknowledgement (PEL - Pending Entries List).",
        impact: "Guaranteed at-least-once delivery with automatic reprocessing of unacknowledged crashed worker messages."
      },
      {
        decision: "Partitioned PostgreSQL tables by monthly range",
        rationale: "Querying historical audit logs over hundreds of gigabytes degraded B-Tree index efficiency.",
        impact: "Maintained flat 120ms search response times regardless of total dataset size."
      }
    ],
    securityAndReliability: [
      "Cryptographic SHA-256 hash chaining between consecutive log entries to detect unauthorized tampering",
      "Role-Based Access Control on audit query APIs restricted to authorized security officers",
      "Dead Letter Queue (DLQ) for malformed schema events to avoid pipeline blocking"
    ],
    challenges: "Balancing consumer batch size against latency. If batches were too large, memory spiked; if too small, Postgres suffered IOPS exhaustion. Tuning batch size to 500 records or 250ms window yielded optimal throughput.",
    outcomes: [
      "Complied 100% with enterprise security audit criteria without impacting core platform performance",
      "Successfully scaled to handle 3x burst volume during quarterly closing operations without packet drops"
    ],
    githubUrl: "https://github.com/rajahariharan"
  },
  {
    id: "enterprise-rbac-engine",
    slug: "enterprise-rbac-engine",
    title: "Enterprise Workflow & Role-Based Access Engine",
    subtitle: "Centralized authorization service with sub-3ms permission evaluation",
    role: "Backend Developer",
    period: "Production Deployment",
    category: "Security & Auth",
    summary: "Created a unified authorization service providing fine-grained hierarchical permissions, token introspection, and dynamic role inheritance across 15+ internal services.",
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "JWT", "Express", "Docker"],
    metrics: [
      { label: "Evaluation Latency", value: "< 2.8ms" },
      { label: "Cache Hit Rate", value: "94.6%" },
      { label: "Integrated Services", value: "15+ Systems" },
      { label: "Privilege Drifts", value: "0" }
    ],
    problem: "Different teams had implemented disparate access checks in PHP, Node, and Python services. Changing a user's department permissions required updating multiple databases, leading to stale privileges, security oversights, and slow onboarding.",
    architecture: {
      description: "A centralized authorization service that evaluates user capability matrices against requested resources using short-lived cryptographically signed tokens and cached bitmask permission graphs.",
      flow: [
        "Client passes Bearer token to API Gateway / Service Middleware",
        "Authorization engine decodes claims and queries the in-memory Redis permission bitmask",
        "If cache miss, queries Postgres hierarchical role graph (CTEs) and re-populates cache",
        "Deterministic boolean decision returned to caller along with audit trace ID"
      ],
      diagramSnippet: "Gateway Middleware -> RBAC Evaluation Engine -> Redis Permission Cache <-> Postgres Role Graph"
    },
    keyDecisions: [
      {
        decision: "Bitmask-based permission evaluation",
        rationale: "Bitwise operations (AND/OR) on integer masks execute in CPU nanoseconds compared to string array searches.",
        impact: "Permission verification added negligible latency (< 3ms) to upstream requests."
      },
      {
        decision: "Event-driven cache invalidation via Redis Pub/Sub",
        rationale: "When an administrator revokes a permission, the user's cached rights must expire immediately across all gateway nodes.",
        impact: "Permission revocations propagate across all cluster nodes within 50ms."
      }
    ],
    securityAndReliability: [
      "Asymmetric RSA key pairs for signing and verifying authorization assertions",
      "Constant-time string comparisons to prevent timing attacks on token validation",
      "Immutable audit log for every role assignment and permission escalation attempt"
    ],
    challenges: "Preventing infinite loops during recursive role inheritance traversal. Addressed by implementing cycle detection algorithms in the graph validation layer.",
    outcomes: [
      "Consolidated authorization logic across the organization, saving estimated 200+ developer hours",
      "Eliminated orphaned access permissions and passed compliance audits with zero findings"
    ],
    githubUrl: "https://github.com/rajahariharan"
  },
  {
    id: "redis-cache-sync-layer",
    slug: "redis-cache-sync-layer",
    title: "Resilient Redis Cache & Data Sync Layer",
    subtitle: "High-concurrency caching layer preventing stampedes and stale reads",
    role: "Backend Engineer",
    period: "Production Deployment",
    category: "Database & Storage",
    summary: "Engineered a distributed caching and synchronization layer featuring atomic locks, TTL jittering, and proactive background re-warming to protect core relational databases from peak flash-load spikes.",
    technologies: ["Go", "Redis", "PostgreSQL", "Prometheus", "Docker", "Linux"],
    metrics: [
      { label: "Cache Hit Ratio", value: "99.2%" },
      { label: "DB Query Load Reduction", value: "-78%" },
      { label: "Thundering Herd Events", value: "0" },
      { label: "Peak Load Capacity", value: "12,000 req/s" }
    ],
    problem: "During high-traffic batch notifications, thousands of concurrent requests invalidated the same cache key simultaneously. This 'thundering herd' phenomenon triggered catastrophic database connection spikes and degraded query responsiveness.",
    architecture: {
      description: "Layered caching proxy implementing single-flight request coalescing, distributed locking (SetNX with short lease times), and probabilistic early expiration (XFetch algorithm).",
      flow: [
        "Request checks Redis for cached entity",
        "On cache miss, SingleFlight coalesces 500 identical concurrent requests into a single database fetch",
        "The winning worker acquires an atomic Redis lock, queries Postgres, and updates the cache with jittered TTL",
        "Subordinate requests receive the coalesced result without touching the database"
      ],
      diagramSnippet: "Incoming Requests -> SingleFlight Coalescer -> Redis Lock -> Relational DB -> Cache Populate"
    },
    keyDecisions: [
      {
        decision: "SingleFlight request suppression pattern in Go",
        rationale: "Prevents duplicate concurrent queries from hitting the database while a fresh value is being calculated.",
        impact: "Reduced peak database CPU spikes from 92% to 22% during flash traffic events."
      },
      {
        decision: "Jittered TTL calculation (Base TTL +/- 10% random variance)",
        rationale: "Uniform TTLs cause all keys written together to expire at the exact same second, causing synchronized misses.",
        impact: "Evenly distributed database refresh traffic across the entire operating window."
      }
    ],
    securityAndReliability: [
      "Graceful fallback: if Redis becomes temporarily unreachable, system falls back to read replicas with reduced rate limits",
      "Encrypted in-transit TLS connections between Go backend and Redis Sentinel cluster",
      "Automated alerting triggers when cache hit ratio dips below 92%"
    ],
    challenges: "Handling Redis network blips without crashing the main application thread. Implemented a circuit-breaker wrapper around the Redis client.",
    outcomes: [
      "Sustained 12,000 requests per second with flat 18ms latency during peak marketing campaigns",
      "Cut database infrastructure cost by nearly 40% by reducing required read replica sizing"
    ],
    githubUrl: "https://github.com/rajahariharan"
  }
];
