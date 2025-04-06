import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; 
import Footer from "@/components/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reactivate Africa Foundation | Empowering Youth-Led Change",
  description:
    "Reactivate Africa Foundation empowers young Africans through entrepreneurship, education, and leadership innovations to drive sustainable change across Africa since 2019.",
  keywords: [
    "Reactivate Africa Foundation",
    "youth empowerment",
    "African youth",
    "sustainable development",
    "entrepreneurship",
    "education",
    "leadership",
    "SDGs",
    "social innovation",
    "youth development",
  ],
  authors: [{ name: "Reactivate Africa Foundation" }],
  creator: "Reactivate Africa Foundation",
  publisher: "Reactivate Africa Foundation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reactivateafrica.org",
    siteName: "Reactivate Africa Foundation",
    title: "Reactivate Africa Foundation | Inspiring Youth-Led Change Across Africa",
    description:
      "Empowering young Africans to drive sustainable change through entrepreneurship, education, and leadership innovations since 2019.",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Reactivate Africa Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reactivate Africa Foundation | Empowering Youth-Led Change",
    description:
      "Empowering young Africans to drive sustainable change through entrepreneurship, education, and leadership innovations.",
    images: ["/twitter-image.jpg"], 
    creator: "@ReactivateAfrica",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://reactivateafrica.org",
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="">{children}</main>
        <Footer />

      </body>
    </html>
  );
}
