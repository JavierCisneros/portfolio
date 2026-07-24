import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archived Projects",
  description: "Earlier personal and academic projects by Javier Cisneros.",
  alternates: {
    canonical: "/view-projects",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ArchivedProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
