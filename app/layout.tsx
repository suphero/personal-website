import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harun Sokullu - Backend Team Lead",
  description: "Professional personal website of Harun Sokullu, Backend Team Lead with 12+ years of experience in Enterprise Software and Open Source.",
  authors: [{ name: "Harun Sokullu" }],
  keywords: ["Backend", "Team Lead", "Software Engineering", "Open Source", "Enterprise Software"],
  openGraph: {
    title: "Harun Sokullu - Backend Team Lead",
    description: "Professional personal website showcasing projects and experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
