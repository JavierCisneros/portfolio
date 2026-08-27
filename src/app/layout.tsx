import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Javier Cisneros | Software Engineer",
    template: "%s | Javier Cisneros",
  },
  description:
    "Software Engineer building cloud-native applications, secure platform integrations, and production systems with React, TypeScript, Node.js, and AWS.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "cloud application engineer",
    "AWS",
    "cloud architecture",
    "system integrations",
    "financial applications",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Guadalajara",
    "Mexico",
  ],
  authors: [{ name: "Javier Cisneros" }],
  creator: "Javier Cisneros",
  publisher: "Javier Cisneros",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.javiercisneros.me"),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Javier Cisneros | Software Engineer",
    description:
      "Cloud-native applications, secure integrations, and end-to-end production ownership with React, TypeScript, Node.js, and AWS.",
    url: "https://www.javiercisneros.me",
    siteName: "Javier Cisneros Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Javier Cisneros, Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Javier Cisneros | Software Engineer",
    description:
      "Cloud-native applications, secure integrations, and end-to-end production ownership with React, TypeScript, Node.js, and AWS.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.javiercisneros.me/#website",
                  url: "https://www.javiercisneros.me",
                  name: "Javier Cisneros",
                  inLanguage: "en",
                  publisher: {
                    "@id": "https://www.javiercisneros.me/#person",
                  },
                },
                {
                  "@type": "Person",
                  "@id": "https://www.javiercisneros.me/#person",
                  name: "Francisco Javier Cisneros Avila",
                  alternateName: "Javier Cisneros",
                  jobTitle: "Software Engineer",
                  description:
                    "Software Engineer focused on cloud-native applications, AWS architecture, and complex platform integrations.",
                  url: "https://www.javiercisneros.me",
                  email: "mailto:hi@javiercisneros.me",
                  mainEntityOfPage: {
                    "@id": "https://www.javiercisneros.me/#website",
                  },
                  sameAs: [
                    "https://linkedin.com/in/javiercisnerosavila",
                    "https://github.com/JavierCisneros",
                  ],
                  knowsAbout: [
                    "AWS Architecture",
                    "Node.js",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "System Integrations",
                    "Cloud Computing",
                  ],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Guadalajara",
                    addressRegion: "Jalisco",
                    addressCountry: "MX",
                  },
                  alumniOf: {
                    "@type": "EducationalOrganization",
                    name: "Centro de Enseñanza Técnica Industrial",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={true}
          storageKey="portfolio-theme"
          themes={["light", "dark"]}
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
