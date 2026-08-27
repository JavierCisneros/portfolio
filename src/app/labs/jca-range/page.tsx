import DarkMode from "@/components/DarkMode";
import type { Metadata } from "next";
import Link from "next/link";

const canonicalUrl = "https://www.javiercisneros.me/labs/jca-range";

export const metadata: Metadata = {
  title: "JCA Range",
  description:
    "A React date-range field that keeps typed input and calendar selection in sync.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "JCA Range",
    description:
      "A React date-range field that keeps typed input and calendar selection in sync.",
    type: "website",
    url: canonicalUrl,
  },
};

export default function JcaRangeLabPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <header className="flex items-center justify-between py-7 text-sm">
          <Link className="font-semibold tracking-tight" href="/">
            Javier Cisneros
          </Link>
          <div className="flex items-center gap-5">
            <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/#work">
              Back to portfolio
            </Link>
            <DarkMode />
          </div>
        </header>

        <article className="pb-24 pt-20 md:pb-32 md:pt-28">
          <header className="max-w-3xl">
            <h1 className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
              JCA Range
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground">
              A React date-range field for forms that need both typed dates and
              calendar selection.
            </p>
            <p className="mt-7 max-w-2xl leading-8">
              It coordinates masked inputs, strict date parsing, and predictable
              range transitions. DayPicker renders the calendar; JCA Range owns
              the field behavior and keeps the public value API independent from
              the calendar engine.
            </p>
          </header>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm">
            <a
              className="border-b border-foreground pb-1 font-semibold transition-opacity hover:opacity-60"
              href="https://www.npmjs.com/package/jca-range"
              rel="noopener noreferrer"
              target="_blank"
            >
              View npm package
            </a>
            <a
              className="border-b border-foreground pb-1 font-semibold transition-opacity hover:opacity-60"
              href="https://github.com/JavierCisneros/jca-range-calendar"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub repository
            </a>
            <a
              className="border-b border-foreground pb-1 font-semibold transition-opacity hover:opacity-60"
              href="https://range.javiercisneros.me/playground"
              rel="noopener noreferrer"
              target="_blank"
            >
              Live demo
            </a>
          </div>

          <section className="mt-20 border-y border-border py-10">
            <h2 className="text-2xl font-semibold tracking-tight">Design decisions</h2>
            <div className="mt-8 divide-y divide-border border-t border-border">
              <div className="grid gap-3 py-6 sm:grid-cols-[12rem_1fr]">
                <h3 className="font-semibold">Predictable ranges</h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  Range transitions follow a small tested state machine instead
                  of depending on the calendar library&apos;s default behavior.
                </p>
              </div>
              <div className="grid gap-3 py-6 sm:grid-cols-[12rem_1fr]">
                <h3 className="font-semibold">Typed and visual</h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  Text input, parsing, formatting, and calendar selection stay
                  synchronized across supported date formats.
                </p>
              </div>
              <div className="grid gap-3 py-6 sm:grid-cols-[12rem_1fr]">
                <h3 className="font-semibold">Replaceable UI</h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  Styling hooks and an unstyled mode let the field fit an
                  existing design system without changing its behavior.
                </p>
              </div>
            </div>
          </section>
        </article>

        <footer className="flex flex-col gap-3 border-t border-border py-7 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Javier Cisneros</p>
          <Link className="transition-colors hover:text-foreground" href="/">
            Portfolio
          </Link>
        </footer>
      </div>
    </main>
  );
}
