import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hollatech Educational AI Platform",
  description:
    "AI-powered learning platform for students, teachers, parents, and schools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>


      <body className="min-h-full flex flex-col">
        <nav style={{
          display: "flex",
          gap: "15px",
          padding: "15px",
          borderBottom: "1px solid #ddd"
        }}>
          <a href="/">Home</a>
          <a href="/students">Students</a>
          <a href="/teachers">Teachers</a>
          <a href="/parents">Parents</a>
          <a href="/admin">Admin</a>
        </nav>

        <div style={{ padding: "20px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}