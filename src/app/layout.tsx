import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StarBackground } from "@/components/cosmic/StarBackground";
import { ShootingStars } from "@/components/cosmic/ShootingStars";
import { ConstellationMesh } from "@/components/cosmic/ConstellationMesh";
import { CustomCursor } from "@/components/cosmic/CustomCursor";
import { ScrollProgress } from "@/components/cosmic/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rajahariharan-portfolio.netlify.app"),
  title: "Rajahariharan K | Assistant Lead – Python Developer & Backend Automation",
  description:
    "Portfolio of Rajahariharan K, Promoted Python Developer and Assistant Lead with 3+ years of experience building automation scripts, backend microservices, and REST API integrations across Python (Django, FastAPI), Golang, Node.js, GitLab CI/CD, PostgreSQL, Oracle, and Redis.",
  keywords: [
    "Rajahariharan K",
    "Python Developer",
    "Assistant Lead",
    "Backend Automation",
    "Django",
    "FastAPI",
    "Golang",
    "Node.js",
    "GitLab CI/CD",
    "PostgreSQL",
    "Oracle Database",
    "Redis Caching",
    "SOAP to REST Migration",
    "RBAC",
    "Microservices",
    "SQL Optimization",
    "Agile Leadership"
  ],
  authors: [{ name: "Rajahariharan K" }],
  creator: "Rajahariharan K",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajahariharan-portfolio.netlify.app",
    title: "Rajahariharan K | Assistant Lead – Python Developer & Backend Automation",
    description:
      "Providing the best project experience: scalable Python automation frameworks, high-throughput microservices, and reliable backend engineering.",
    siteName: "Rajahariharan K Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Rajahariharan K - Assistant Lead & Python Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajahariharan K | Assistant Lead – Python Developer & Backend Automation",
    description:
      "Promoted Python Developer & Assistant Lead specializing in Python (Django, FastAPI), Golang, GitLab CI/CD, and database optimization.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030014] text-[#F4F4F7] antialiased selection:bg-[#7042f8]/40 selection:text-white relative">
        <ScrollProgress />
        <CustomCursor />
        <ConstellationMesh />
        <StarBackground />
        <ShootingStars />
        <Navbar />
        <div className="relative z-10 flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
