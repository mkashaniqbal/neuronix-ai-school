import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Neuronix - AI-Powered EdTech Platform | Investment Opportunity",
  description: "Neuronix is a revolutionary AI-powered online school and academy platform targeting Pakistan's growing education market. Explore investment opportunities in this comprehensive SaaS solution.",
  keywords: "Neuronix, AI education, EdTech platform, Pakistan education, investment opportunity, AI tutoring, online learning",
  authors: [{ name: "Neuronix EdTech Solutions" }],
  openGraph: {
    title: "Neuronix - AI-Powered EdTech Platform",
    description: "Revolutionary AI-powered education platform for Pakistan's growing EdTech market. Investment opportunity available.",
    type: "website",
    siteName: "Neuronix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuronix - AI-Powered EdTech Platform",
    description: "Revolutionary AI-powered education platform for Pakistan's growing EdTech market.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
