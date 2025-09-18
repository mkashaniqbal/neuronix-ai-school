import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Neuronix Platform - $1,500 Complete AI EdTech Solution",
  description: "Purchase the complete Neuronix AI-powered EdTech platform for $1,500. Includes full source code, commercial license, and lifetime ownership. Start generating revenue immediately.",
  keywords: "buy Neuronix, EdTech platform purchase, AI education software, complete source code, commercial license",
  openGraph: {
    title: "Buy Neuronix Platform - $1,500 Complete Solution",
    description: "Purchase the complete Neuronix AI-powered EdTech platform for $1,500. Full source code and commercial license included.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Neuronix Platform - $1,500",
    description: "Complete AI-powered EdTech platform with full source code and commercial license.",
  },
};

export default function BuyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}