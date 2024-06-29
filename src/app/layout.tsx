import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: "Javier Cisneros Web portfolio",
    description:
      "Hi, this is Javier Cisneros web portfolio, here you can find some of the projects that I´ve been working on.",
    images: [{ url: "/images/javier_cisneros.jpg" }],
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
      <head />
      <body
        className={`${inter.className} bg-white dark:bg-background antialiased `}
      >
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          {" "}
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
