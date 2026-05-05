import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umair Ismail | Full Stack, Mobile & Chrome Extension Engineer",
  description:
    "Portfolio of Umair Ismail — Full Stack & Mobile Engineer specializing in MERN, Next.js, Chrome Extensions, React Native, Flutter, Web3 & AI. 3+ years delivering production-grade applications.",
  keywords: [
    "Umair Ismail",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "React Native",
    "Flutter",
    "Web3",
    "AI Developer",
    "Chrome Extension Developer",
    "Email Automation",
    "Pakistan",
    "Islamabad",
  ],
  authors: [{ name: "Umair Ismail" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Umair Ismail | Full Stack, Mobile & Chrome Extension Engineer",
    description:
      "MERN, Next.js, Chrome Extensions, React Native, Flutter & Web3 Specialist delivering scalable architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Space+Grotesk:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="antialiased bg-[#020617] text-slate-100" suppressHydrationWarning>{children}</body>
    </html>
  );
}
