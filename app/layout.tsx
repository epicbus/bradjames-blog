import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brad James - Building with AI",
  description: "Documenting my journey as a non-developer building an AI marketing team",
  keywords: ["AI", "marketing", "automation", "SEO", "productivity"],
  authors: [{ name: "Brad James" }],
  openGraph: {
    title: "Brad James - Building with AI",
    description: "Documenting my journey as a non-developer building an AI marketing team",
    url: "https://bradjames.me",
    siteName: "Brad James",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brad James - Building with AI",
    description: "Documenting my journey as a non-developer building an AI marketing team",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b">
            <nav className="max-w-4xl mx-auto px-4 py-6">
              <div className="flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                  Brad James
                </Link>
                <div className="flex gap-6">
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </div>
              </div>
            </nav>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t mt-12">
            <div className="max-w-4xl mx-auto px-4 py-8 text-center text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Brad James. All rights reserved.
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
