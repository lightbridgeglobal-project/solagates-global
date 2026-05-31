import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Solagates Global | Premium Renewable Energy Infrastructure",
  description: "Africa's leading renewable energy engineering firm. We design, deploy, and maintain high-performance energy infrastructure for residential, commercial, and industrial applications.",
  keywords: ["Solar Engineering", "Renewable Energy Africa", "Commercial Solar", "Lithium Battery Storage", "EPC Solar Company", "Solagates"],
  authors: [{ name: "Solagates Engineering" }],
  openGraph: {
    title: "Solagates Global | Premium Renewable Energy",
    description: "High-performance energy infrastructure designed for absolute autonomy.",
    url: "https://solagates.com",
    siteName: "Solagates Global",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Solagates Global",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen bg-white text-grey-900 overflow-x-hidden max-w-[100vw] w-full">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
