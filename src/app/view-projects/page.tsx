"use client";
import Link from "next/link";
import Projects from "../../components/Projects";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function projectsPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <main className="relative max-w-2xl m-auto my-16 flex flex-col gap-12 px-6 bg-white dark:bg-background text-black dark:text-white">
      <div className="scroll-m-20 text-2xl font-bold tracking-tight">
        <div>
          <div className="flex items-center pt-4">
            <h2 className="font-medium  text-markup">Projects</h2>
            <div className="flex-1 h-px bg-black dark:bg-white ml-4 rounded-full"></div>
          </div>
          <p className="font-normal text-base pt-2 text-justify">
            I´ve been working on different projects. Some of them are personal
            projects, and others are projects that I´ve been working on with
            other developers.
          </p>
          <p className="font-normal text-base pt-2 text-justify">
            These are a few projects that I´ve done in the past to practice
            skills such as programming using JavaScript, TypeScript, React as
            Front-End framework and Next.js as a full-stack framework.
          </p>
          <Projects numberOfElements={5} />
        </div>
        <div className="text-right mt-4">
          <Link
            href="/"
            className="pb-1 mt-2 text-base font-medium text-markup uppercase border-b border-transparent hover:border-markup text-right"
          >
            Go back{" "}
          </Link>
        </div>
      </div>
    </main>
  );
}
