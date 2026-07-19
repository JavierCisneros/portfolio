"use client";
import Link from "next/link";
import Projects from "../../components/Projects";
import SmoothScroll from "../../components/SmoothScroll";

export default function projectsPage() {
  return (
    <SmoothScroll>
      <main className="relative max-w-2xl pb-32 m-auto my-16 flex flex-col gap-12 px-6 bg-slate-300 dark:bg-background-dark text-black dark:text-white">
        <div className="scroll-m-20 text-2xl font-bold tracking-tight">
          <div>
            <div className="flex items-center pt-4">
              <h2 className="font-medium  text-markup">Projects</h2>
              <div className="flex-1 h-px bg-black dark:bg-slate-300 ml-4 rounded-full"></div>
            </div>
            <p className="font-normal text-base pt-2 text-justify">
              I've worked on personal projects and collaborated with other
              developers.
            </p>
            <p className="font-normal text-base pt-2 text-justify">
              These older projects helped me practice JavaScript, TypeScript,
              React as a front-end framework, and Next.js as a full-stack
              framework.
            </p>
            <div className="flex items-center space-x-4 mt-4 mb-6">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-markup hover:text-markup/80 transition-colors duration-200"
              >
                Go back
              </Link>
            </div>
            <Projects numberOfElements={5} />
          </div>
        </div>
      </main>
    </SmoothScroll>
  );
}
