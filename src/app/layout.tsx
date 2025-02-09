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

export const metadata = {
  title: "Syncurious",
  description: "We provide cutting-edge software solutions.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareCompany",
      name: "Your Software Company Name",
      url: "https://yourwebsite.com",
      logo: "https://yourwebsite.com/logo.png",
      description: "We develop high-quality software solutions for businesses.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-234-567-890",
        contactType: "customer service",
        areaServed: "Worldwide",
        availableLanguage: "English",
      },
      sameAs: [
        "https://www.facebook.com/yourcompany",
        "https://www.linkedin.com/company/yourcompany",
        "https://twitter.com/yourcompany",
      ],
    }),
  },
};

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
        {children}
      </body>
    </html>
  );
}
