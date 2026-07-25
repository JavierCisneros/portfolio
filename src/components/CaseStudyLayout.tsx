import DarkMode from "@/components/DarkMode";
import type { CaseStudyFrontmatter } from "@/content/types";
import Link from "next/link";
import type { ReactNode } from "react";

interface CaseStudyLayoutProps {
  frontmatter: CaseStudyFrontmatter;
  children: ReactNode;
}

export default function CaseStudyLayout({
  frontmatter,
  children,
}: CaseStudyLayoutProps) {
  const canonicalUrl = `https://www.javiercisneros.me/case-studies/${frontmatter.slug}`;

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: frontmatter.title,
            description: frontmatter.summary,
            dateModified: frontmatter.updatedAt,
            mainEntityOfPage: canonicalUrl,
            author: {
              "@id": "https://www.javiercisneros.me/#person",
            },
          }),
        }}
      />
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <header className="flex items-center justify-between py-7 text-sm">
          <Link href="/" className="font-semibold tracking-tight">
            Javier Cisneros
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href="/#work"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              All work
            </Link>
            <DarkMode />
          </div>
        </header>

        <article className="pb-24 pt-20 md:pb-32 md:pt-28">
          <header className="border-b border-border pb-14">
            <p className="text-sm font-semibold text-accent">
              {frontmatter.label ?? "Case study"}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl">
              {frontmatter.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              {frontmatter.summary}
            </p>
          </header>

          <div className="max-w-3xl [&>p]:mt-5 [&>p]:text-[1.02rem] [&>p]:leading-8 [&>p]:text-muted-foreground">
            {children}
          </div>
        </article>

        <footer className="flex flex-col gap-3 border-t border-border py-7 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <Link href="/#work" className="transition-colors hover:text-foreground">
            Back to work
          </Link>
          <p>© {new Date().getFullYear()} Javier Cisneros</p>
        </footer>
      </div>
    </main>
  );
}
