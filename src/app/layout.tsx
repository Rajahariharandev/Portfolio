import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StarBackground } from "@/components/cosmic/StarBackground";

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
  metadataBase: new URL("https://rajahariharan.dev"),
  title: "Raja Hariharan | Backend & Software Engineer",
  description:
    "Portfolio of Raja Hariharan, Backend & Software Engineer specializing in Go, Node.js, Oracle Database, PostgreSQL, Redis, REST APIs, and high-concurrency distributed systems.",
  keywords: [
    "Raja Hariharan",
    "Backend Developer",
    "Software Engineer",
    "Go",
    "Golang",
    "Oracle Database",
    "PostgreSQL",
    "Redis",
    "Node.js",
    "Distributed Systems",
    "REST API",
    "Microservices",
    "High Throughput"
  ],
  authors: [{ name: "Raja Hariharan" }],
  creator: "Raja Hariharan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajahariharan.dev",
    title: "Raja Hariharan | Backend & Software Engineer",
    description:
      "Providing the best project experience: engineering resilient backends, high-concurrency APIs, and robust data pipelines with Go, Node.js, Oracle DB, PostgreSQL, and Redis.",
    siteName: "Raja Hariharan Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Raja Hariharan - Backend & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja Hariharan | Backend & Software Engineer",
    description:
      "Backend Engineer specializing in Go, Oracle, PostgreSQL, Redis, and high-concurrency systems.",
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
        <StarBackground />
        <Navbar />
        <div className="relative z-10 flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
