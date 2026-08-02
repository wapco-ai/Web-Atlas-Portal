import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "وب اطلس پویا | راهکارهای هوشمند مدیریت شهری",
  description: "راهکارهای نرم‌افزاری تخصصی وب اطلس پویا برای آتش‌نشانی، آرامستان، GIS و حمل‌ونقل شهری.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body><Sidebar /><main className="site-content">{children}</main></body>
    </html>
  );
}
