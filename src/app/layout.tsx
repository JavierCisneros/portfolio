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
    default: "Javier Cisneros - Software Development Engineer",
    template: "%s | Javier Cisneros",
  },
  description:
    "Front-End software developer from Guadalajara, Jalisco specializing in React, Next.js, TypeScript, and modern web technologies. View my projects and experience. Desarrollador Front-End de Guadalajara, Jalisco especializado en React, Next.js, TypeScript y tecnologías web modernas.",
  keywords: [
    "software developer",
    "front-end developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "web developer",
    "Guadalajara",
    "Mexico",
    "desarrollador de software",
    "desarrollador front-end",
    "desarrollador React",
    "desarrollador Next.js",
    "desarrollador TypeScript",
    "desarrollador web",
    "Guadalajara México",
    "programador web",
    "desarrollador web Guadalajara",
    "programador React Guadalajara",
  ],
  authors: [{ name: "Javier Cisneros" }],
  creator: "Javier Cisneros",
  publisher: "Javier Cisneros",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://javiercisneros.me"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Javier Cisneros - Software Development Engineer",
    description:
      "Front-End software developer from Guadalajara, Jalisco specializing in React, Next.js, TypeScript, and modern web technologies. View my projects and experience. Desarrollador Front-End de Guadalajara, Jalisco especializado en React, Next.js, TypeScript y tecnologías web modernas.",
    url: "https://javiercisneros.me",
    siteName: "Javier Cisneros Portfolio",
    images: [],
    locale: "en_US",
    alternateLocale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Javier Cisneros - Software Development Engineer",
    description:
      "Front-End software developer from Guadalajara, Jalisco specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: [],
    creator: "@javiercisneros",
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
  verification: {
    google: "your-google-verification-code",
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
              "@type": "Person",
              name: "Javier Cisneros",
              jobTitle: "Software Development Engineer",
              description:
                "Front-End software developer from Guadalajara, Jalisco specializing in React, Next.js, TypeScript, and modern web technologies.",
              url: "https://javiercisneros.me",
              sameAs: [
                "https://linkedin.com/in/javiercisnerosavila",
                "https://github.com/JavierCisneros",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "Web Development",
                "Front-End Development",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Guadalajara",
                addressRegion: "Jalisco",
                addressCountry: "MX",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Software Development Degree",
              },
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
