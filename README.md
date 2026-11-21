# Raja Hariharan — Backend Developer Portfolio

A high-performance, dark-mode engineering portfolio designed for a Backend & Software Engineer. Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 🎯 Architecture & Design Overview

- **Design System**: Premium dark aesthetic (`#08080D` backdrop, `#11111A` cards, violet `#8B5CF6` accent), clean contrast, accessible focus rings, and custom scrollbars.
- **Performance & SEO**: 100% static generation (SSG) with Turbopack, pre-rendered `sitemap.xml`, `robots.txt`, Open Graph metadata, and Twitter Card tags.
- **Architectural Telemetry Terminal**: Interactive desktop hero visual modeling live microservice telemetry, Oracle connection pool states, Redis cache-aside ratios, and structured audit logs.
- **Comprehensive Case Studies**: 4 in-depth architectural breakdowns detailing problems, flow diagrams, trade-off decisions, security implementations, and verified outcomes.
- **Validated Contact System**: Accessible client-side validated contact form with an anti-bot honeypot and one-click email clipboard copy with live feedback.
- **Offline Resume**: Downloadable PDF at `/resume/resume.pdf` with matching career details.

---

## 📂 Source Code Structure

```
rajahariharan-portfolio/
├── public/
│   ├── images/
│   ├── resume/
│   │   └── resume.pdf           # Downloadable PDF resume
│   ├── og-image.svg             # Social share card
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout, fonts, and OpenGraph metadata
│   │   ├── page.tsx             # Main page aggregating all portfolio sections
│   │   ├── globals.css          # Design tokens, custom utilities, selection styling
│   │   ├── not-found.tsx        # Styled 404 page with return route
│   │   ├── robots.ts            # Crawler configuration
│   │   └── sitemap.ts           # Dynamic XML sitemap
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky navigation & accessible mobile drawer
│   │   │   └── Footer.tsx       # Stack indicators, social links, back-to-top
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Headline, CTAs, live server telemetry terminal
│   │   │   ├── About.tsx        # Career story, principles, quantified impact
│   │   │   ├── Skills.tsx       # Grouped technical proficiencies & filtering
│   │   │   ├── Projects.tsx     # 4 detailed expandable case studies
│   │   │   ├── Experience.tsx   # Verified career timeline & achievements
│   │   │   ├── Education.tsx    # Academic degree & technical certifications
│   │   │   └── Contact.tsx      # Contact options & spam-protected form
│   │   └── ui/
│   │       ├── Button.tsx       # Multi-variant button/link component
│   │       ├── Badge.tsx        # Status and category badges
│   │       ├── SectionHeading.tsx # Standardized section headings
│   │       ├── Container.tsx    # Responsive layout containers
│   │       └── Icons.tsx        # Vector icons for GitHub, LinkedIn
│   ├── data/
│   │   ├── profile.ts           # Central biography, contacts, principles
│   │   ├── skills.ts            # Grouped skills and proficiency tags
│   │   ├── projects.ts          # Complete architectural case studies
│   │   └── experience.ts        # Work history, education, certifications
│   └── lib/
│       └── utils.ts             # Tailwind class name merger
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

- **Core**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, Lucide React
- **Hosting**: Vercel / Node.js
- **Primary Disciplines Represented**: Go, Node.js, Oracle Database, PostgreSQL, Redis, REST APIs, Microservices, Linux, Docker

---

## 🚀 Local Development

1. **Clone and install dependencies**:
   ```bash
   git clone https://github.com/rajahariharan/rajahariharan-portfolio.git
   cd rajahariharan-portfolio
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Run type-check & linting**:
   ```bash
   npm run lint
   ```

4. **Production Build**:
   ```bash
   npm run build
   ```

---

## 🚢 Deployment on Vercel

1. Push your repository to GitHub.
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import `rajahariharan-portfolio`.
4. Vercel automatically detects Next.js. Click **Deploy**.
5. Once deployed, configure custom domain settings (e.g. `rajahariharan.dev`) under Project Settings -> Domains.
