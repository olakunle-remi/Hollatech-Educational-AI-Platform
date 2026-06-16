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
<body style={{ margin: 0, fontFamily: "Arial" }}>
  <div style={{ display: "flex", minHeight: "100vh" }}>

    {/* Sidebar */}
    <aside style={{
      width: "220px",
      padding: "20px",
      borderRight: "1px solid #ddd"
    }}>
      <h2>Hollatech</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <a href="/">🏠 Home</a>
        <a href="/students">🎓 Students</a>
        <a href="/teachers">👩‍🏫 Teachers</a>
        <a href="/parents">👨‍👩‍👧 Parents</a>
        <a href="/admin">⚙️ Admin</a>
      </nav>
    </aside>

    {/* Main Content */}
    <main style={{ flex: 1, padding: "20px" }}>
      {children}
    </main>

  </div>
</body>


    </html>
  );
}