import { Poppins } from "next/font/google";
import local from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
});

const primaryFont = local({
  src: "../../public/fonts/primary.woff2",
  variable: "--font-primary",
});

export const metadata = {
  title: {
    default: "Syncurious - Innovative Solutions",
    template: "%s | Syncurious",
  },
  description:
    "We are Syncurious, a software company specializing in creating websites, mobile applications, and software solutions. Our team is dedicated to delivering innovative and impactful digital products to help you achieve your goals.",
  openGraph: {
    title: "Syncurious",
    description: "Innovative software solutions for your business.",
    url: "https://syncurious.com",
    siteName: "Syncurious",
    images: [
      {
        url: "https://syncurious.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Co",
    description: "Innovative software solutions.",
    images: ["https://syncurious.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Syncurious",
    url: "https://syncurious.com",
    logo: "https://syncurious.com/icon-512.png",
    description:
      "Leading software development company. which is Providing the best software solutions for your business.",
  };
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icon-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/icon-512.png"
        />

        {/* Web Manifest for PWA */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect and DNS Prefetch */}
        <link rel="dns-prefetch" href="https://syncurious.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${primaryFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
