import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@comps/NavBar/NavBar";
import Footer from "@comps/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nilesh Amarathunge | Portfolio",
  description:
    "Portfolio of Nilesh Amarathunge, a software engineer and robotics enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden pt-24 min-h-screen px-4 md:px-16`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
