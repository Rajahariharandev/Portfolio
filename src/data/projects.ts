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
    role: "Lead Automation & Backend Developer",
    period: "Production Deployment",
    category: "Backend & Microservices",
    summary: "Refactored a legacy enterprise SOAP XML architecture into a modern Golang REST API, automating deployment via GitLab CI/CD pipelines to achieve a 5x improvement in system scalability.",
    technologies: ["Golang", "Oracle Client", "GitLab CI/CD", "Docker", "Linux CLI", "REST APIs", "Postman"],
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
        "Incoming client HTTP requests are terminated at Nginx and routed to the Go REST microservice",
        "Singleflight serialization validates request schemas using typed Pydantic models",
        "Business logic executes concurrently with optimized connection pooling to backend datastores",
        "Automated GitLab CI/CD pipeline runs unit/regression suites and deploys Dockerized services with zero downtime"
      ],
      diagramSnippet: "Client App -> Nginx Reverse Proxy -> JWT Token-> Go REST API (GitLab CI/CD) -> Ristretto -> Redis in Memory Caching <--> Oracle DB"
    },
    keyDecisions: [
      {
        decision: "Transitioned from XML SOAP envelopes to JSON REST specifications",
        rationale: "JSON payloads are 60-70% lighter than verbose SOAP XML, dramatically reducing network bandwidth and parsing overhead.",
        impact: "Cut network payload transfer sizes by 65% and boosted endpoint throughput by 5x."
      },
      {
        decision: "Automated GitLab CI/CD containerized deployment pipelines",
        rationale: "Eliminated manual SSH releases and human configuration error during updates.",
        impact: "Accelerated release velocity from monthly batches to multiple verified weekly releases."
      }
    ],
    securityAndReliability: [
      "Strict request validation schemas with automated input sanitization",
      "Oracle DB connection pooling to prevent connection leaks",
      "Ristretto In-Memory Caching to reduce latency and database load",
      "Structured JSON error handling with sanitized error codes that prevent leaking backend internals",
      "JWT Token for authentication and authorization."
    ],
    challenges: "Maintaining backward compatibility for existing enterprise consumers while shifting core endpoints. Solved by implementing an API translation gateway during the phase-in period.",
    outcomes: [
      "Achieved a 5x improvement in system scalability under peak concurrency",
      "Significantly reduced long-term maintenance overhead and bug ticket turnaround",
      "Established standard API design blueprints now adopted across the development organization"
    ],
    githubUrl: "https://github.com/Rajahariharandev/Golang-Service"
  },
  {
    id: "employee-rbac-permission-system",
    slug: "employee-rbac-permission-system",
    title: "Employee RBAC Permission System",
    subtitle: "Automated Role-Based Access Control and authorization engine with JWT verification",
    role: "Backend & Systems Developer",
    period: "Production Deployment",
    category: "Security & Auth",
    summary: "Centralized Role-Based Access Control (RBAC) system with JWT authentication and automated permission workflows, cutting manual access provisioning by 70% and securing sensitive enterprise data.",
    technologies: ["Node.js (Express.js)", "Oracle InstantClient", "Password Vault", 'Bcrypt', "Middleware", "Redis", "JWT", "REST API"],
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
        "If cache miss, queries hierarchical role graph in Oracle and updates cache with TTL",
        "Instant access approval/denial returned with auditable trace context"
      ],
      diagramSnippet: "Client Request -> JWT Middleware -> Redis Permission Cache <-> Oracle Role Matrix"
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
    challenges: "Resolved complex nested, multi-department role management and cyclical inheritance issues by designing a directed, designation-based hierarchy with function-level access mapping, ensuring consistent role inheritance, controlled permissions, and scalable access management across departments.",
    outcomes: [
      "Cut manual access provisioning effort by 70% across internal operations",
      "Passed internal IT security audits with 100% compliance and zero privilege drift incidents"
    ],
    githubUrl: "https://github.com/rajahariharandev/Employee-RBAC-Permission-System"
  },

  {
    id: "enterprise-master-data-dashboard",
    slug: "enterprise-master-data-dashboard",
    title: "Enterprise Master Data Management Dashboard",
    subtitle: "Centralized ERP master-data management, hierarchical exploration and dynamic Oracle reporting platform",
    role: "Associate Software Developer",
    period: "Production Deployment",
    // category: "Enterprise ERP & Data Management",
    category: "Database & Migration",
    summary: "Designed and developed a centralized Enterprise Master Data Management Dashboard for managing and exploring ERP master configurations across multiple business domains. Implemented a three-level hierarchical navigation architecture, metadata-driven dynamic table rendering, Oracle database integration, server-side pagination, multi-column search, sorting and Excel import workflows. Built reusable data-processing functionality to simplify enterprise master-data operations and improve data accessibility.",

    technologies: [
      "PHP",
      "Oracle Database",
      "Oracle SQL",
      "JavaScript",
      "AJAX",
      "Fetch API",
      "Tailwind CSS",
      "HTML5",
      "SheetJS",
      "JSON",
      "CSV Export"
    ],

    metrics: [
      { label: "Navigation Architecture", value: "3 Levels" },
      { label: "Business Domains", value: "5 Top Cores" },
      { label: "Server Pagination", value: "25 / 50 / 100" },
      { label: "Excel Formats", value: "XLS / XLSX" }
    ],

    problem:
      "Enterprise master data was distributed across multiple business domains and database tables. Accessing master configurations and exploring individual records required navigating separate operational modules. This created complexity in data discovery, reporting and master-data administration.",

    architecture: {
      description:
        "Developed a hierarchical enterprise dashboard using PHP and JavaScript, integrating Oracle database queries through an AJAX-based backend processing layer. Used database metadata and configurable master definitions to dynamically generate table structures and record views.",

      flow: [
        "Users navigate five enterprise Top Core business domains",
        "Master configurations are retrieved from TOPCORE_MASTER_DETAILS",
        "Frontend dynamically generates master table catalogs and display columns",
        "AJAX requests retrieve Oracle records with search, sorting and pagination",
        "Excel import workflows support master configuration uploads",
        "Filtered records can be exported through CSV generation"
      ],

      diagramSnippet:
        "Enterprise Users -> PHP Master Dashboard -> AJAX Processing -> Oracle SQL -> Oracle ERP Database"
    },

    keyDecisions: [
      {
        decision:
          "Implemented a three-level hierarchical navigation architecture",

        rationale:
          "Separates enterprise business domains, master configurations and individual records into distinct views.",

        impact:
          "Provides structured navigation across multiple ERP master-data domains."
      },

      {
        decision:
          "Developed metadata-driven dynamic table rendering",

        rationale:
          "Uses TOPCORE_MASTER_DETAILS to retrieve configured database columns and display labels instead of hardcoding every table.",

        impact:
          "Enables reusable table rendering for different master configurations."
      },

      {
        decision:
          "Implemented Oracle server-side pagination using ROW_NUMBER()",

        rationale:
          "Retrieves a limited record range instead of loading an entire database table into the browser.",

        impact:
          "Reduces the amount of record data transferred per request."
      },

      {
        decision:
          "Integrated Excel upload with client-side preview",

        rationale:
          "Allows users to inspect workbook contents before submitting the import.",

        impact:
          "Provides a more structured master configuration import workflow."
      }
    ],

    securityAndReliability: [
      "Database table identifier validation",
      "Server-side configuration verification",
      "Controlled page-size limits",
      "JSON-based AJAX response handling",
      "Oracle database error handling",
      "Session-based dashboard integration"
    ],

    challenges:
      "Building a reusable dashboard for multiple enterprise master configurations while handling different physical Oracle tables, configurable display columns and large record sets. Addressed through metadata-driven rendering, dynamic SQL construction, hierarchical navigation and Oracle server-side pagination.",

    outcomes: [
      "Developed a centralized enterprise master-data dashboard",
      "Implemented reusable dynamic table and record exploration functionality",
      "Integrated Oracle database configuration and record retrieval",
      "Introduced Excel import preview and CSV export workflows",
      "Improved accessibility of master data across five business domains"
    ],

    githubUrl: "https://github.com/rajahariharan/enterprise-master-data-dashboard"
  },

  {
    id: "Audit-dashboard",
    slug: "Audit-dashboard",
    title: "Audit Dashboard",
    subtitle:
      "Real-time user-activity, clickstream and security-anomaly analytics platform for enterprise SCM systems",
    role: "Developer",
    period: "Production Deployment",
    category: "Database & Migration",
    summary:
      "Designed and developed an enterprise audit analytics dashboard that ingests raw user_audit_log records and surfaces KPIs, clickstream behaviour, security anomalies and exportable reports. Implemented a modular vanilla-JS frontend on a PHP backend with a REST-style api.php layer, AG Grid infinite-scroll for large datasets, Chart.js visualisations, and a multi-detector security engine. Built a dual data-source architecture (live API + deterministic synthetic dataset) and custom design-token UI with dark/light theming.",

    technologies: [
      "PHP",
      "JavaScript",
      "Chart.js",
      "AG Grid Community",
      "SheetJS",
      "jsPDF",
      "AJAX",
      "Fetch API",
      "HTML5",
      "CSS3",
      "jQuery",
      "JSON",
      "CSV / XLSX / PDF Export"
    ],

    metrics: [
      { label: "KPI Cards", value: "10 Live" },
      { label: "Security Detectors", value: "6 Automated" },
      { label: "Grid Export Cap", value: "50,000 Rows" },
      { label: "Dashboard Charts", value: "8 Visualisations" }
    ],

    problem:
      "Enterprise user activity was captured in a raw user_audit_log table but offered no consolidated visibility. Analysing employee behaviour, detecting suspicious access patterns, monitoring live sessions and producing audit reports required manual querying across distributed tables. This created gaps in security oversight, operational monitoring and audit reporting.",

    architecture: {
      description:
        "Built a modular single-page dashboard using vanilla JavaScript namespaced into IIFEs (App.config, App.state, App.api, App.grid, App.charts, App.security, App.utils) on a PHP backend. The api layer exposes REST-style actions for filter options, bulk logs, grid pagination, live sessions, security analysis and exports. AG Grid uses the Infinite Row Model to page Oracle/Postgres audit records server-side, while a deterministic seeded-PRNG synthetic dataset powers demo mode.",

      flow: [
        "Users navigate dashboard, audit logs, live sessions, employee analytics, page analytics, security and reports",
        "Global filter state (date range, employee, role, page, method, server, IP, query) drives all views",
        "AG Grid Infinite Row Model streams pages into the browser without loading full tables",
        "Chart.js renders trend, top-employee, top-page, server, method and heatmap visualisations",
        "App.security.runAll executes six anomaly detectors over the filtered dataset",
        "CSV / Excel / PDF exports generated client-side or server-side up to 50,000 rows"
      ],

      diagramSnippet:
        "Enterprise Users -> PHP Dashboard -> App.api Fetch Layer -> REST API -> Postgres Audit DB -> Chart.js / AG Grid / Security Engine"
    },

    keyDecisions: [
      {
        decision:
          "Implemented a modular IIFE-based frontend architecture without a bundler",

        rationale:
          "Enables clean separation of concerns (config, state, API, grid, charts, security, utils) while remaining dependency-free and deployable as static assets.",

        impact:
          "Maintainable modular codebase without build tooling or framework overhead."
      },

      {
        decision:
          "Used AG Grid Infinite Row Model with server-side pagination",

        rationale:
          "Retrieves limited record ranges instead of loading entire audit tables into the browser.",

        impact:
          "Supports 50,000+ row datasets without browser memory pressure."
      },

      {
        decision:
          "Implemented dual data-source mode (live API + synthetic dataset)",

        rationale:
          "A seeded PRNG generator (seededRandom(20260805)) produces deterministic, reproducible datasets with injected anomalies for QA and demos.",

        impact:
          "Security features are demoable out-of-the-box and QA screenshots are reproducible."
      },

      {
        decision:
          "Built a six-detector security anomaly engine",

        rationale:
          "Automates detection of multi-IP users, shared IPs, request spikes, unknown pages, unauthorized access and high-frequency sessions.",

        impact:
          "Surfaces suspicious activity without manual SQL querying."
      },

      {
        decision:
          "Applied generic-page normalisation via effectivePage()",

        rationale:
          "Real-world audit tables bucket background/API calls under 'AJAX'/'API' page names, which would dominate 'most visited pages' rankings.",

        impact:
          "Page analytics reflect genuine user-facing page traffic instead of API noise."
      },

      {
        decision:
          "Implemented custom design-token CSS system with dark/light theming",

        rationale:
          "CSS custom properties (--navy-950, --primary, --accent, etc.) drive all styling; theme switches via data-theme attribute on <html>.",

        impact:
          "Consistent theming across ~2000 lines of CSS with a single attribute toggle."
      }
    ],

    securityAndReliability: [
      "Session-based authentication integration",
      "Server-side filter validation via api.php",
      "Controlled page-size limits on grid pagination",
      "JSON-based AJAX response handling",
      "Six automated anomaly detectors",
      "Role-aware sensitive-page access detection",
      "Graceful degradation when CDN libraries fail"
    ],

    challenges:
      "Building a real-time analytics platform that handles large audit datasets while delivering eight simultaneous visualisations, security anomaly detection and export workflows — all without a frontend framework. Addressed through AG Grid infinite-scroll server-side pagination, date-gap-filling trend charts, generic-page normalisation for real-world dirty data, and a modular IIFE architecture that keeps each concern isolated and testable.",

    outcomes: [
      "Delivered a centralized enterprise audit analytics dashboard",
      "Implemented 10 live KPI cards and 8 interactive Chart.js visualisations",
      "Built a 6-detector automated security anomaly engine",
      "Integrated AG Grid infinite-scroll for 50,000+ row datasets",
      "Added CSV, Excel and PDF export workflows",
      "Created a real-time live-sessions monitor with 5-second auto-refresh",
      "Implemented dark/light theming with custom design-token CSS system",
      "Built a deterministic synthetic data generator for reproducible demos"
    ],

    githubUrl: "https://github.com/rajahariharan/Enterprise-audit-dashboard"
  }
];
