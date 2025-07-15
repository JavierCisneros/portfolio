"use client";
import Image from "next/image";
import { TECHNOLOGIES_CONSTANTS } from "./technologies-constants";
import Link from "next/link";
import Projects from "../components/Projects";
import type { Images } from "../components/Projects";
import { useEffect, useState, useRef } from "react";
import DarkMode from "../components/DarkMode";

export default function Home() {
  const techStackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = techStackRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollBy({
        left: e.deltaY,
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main className="relative max-w-4xl m-auto my-16 flex flex-col gap-16 px-6 bg-slate-300 dark:bg-background-dark text-black dark:text-white antialiased">
      {/* Header Section */}
      <header className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">
              Javier Cisneros
            </h1>
            <h2 className="text-xl font-medium text-markup">
              Software Development Engineer
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <DarkMode />
          </div>
        </div>

        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            I&apos;m a full-stack developer based in Guadalajara, Jalisco, with
            a strong focus on front-end development and scalable web
            applications. I started studying software development at 16 and
            graduated with a degree in Software Engineering in June 2024.
          </p>
          <p>
            I have experience building multitenant systems, Progressive Web
            Apps, and custom tools using modern technologies like React,
            Next.js, TypeScript, and AWS. I enjoy solving complex architectural
            challenges by delivering solutions that align with the system&apos;s
            needs and organizational context, leveraging Infrastructure as Code
            (IaC) and system design principles. I also focus on optimizing
            performance and streamlining deployment workflows through CI/CD best
            practices, using platforms such as AWS CodePipeline and Vercel.
          </p>

          <p>
            I&apos;m passionate about learning and constantly improving. I
            thrive on new challenges and seek opportunities that allow me to
            grow both technically and professionally.
          </p>
        </div>

        {/* Social Links */}
        <nav
          className="flex items-center space-x-6"
          aria-label="Social media links"
        >
          <a
            href="mailto:fjca185@gmail.com"
            className="group p-3 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-200 hover:scale-105"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 fill-foreground group-hover:fill-markup transition-colors duration-200"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/javiercisnerosavila"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-200 hover:scale-105"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-6 h-6 fill-foreground group-hover:fill-markup transition-colors duration-200"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
          <a
            href="https://github.com/JavierCisneros"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-200 hover:scale-105"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="w-6 h-6 fill-foreground group-hover:fill-markup transition-colors duration-200"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
        </nav>
      </header>

      {/* Stack Section */}
      <section className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-markup">Tech Stack</h2>
          <div className="flex-1 h-px bg-black dark:bg-border"></div>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          I&apos;m focusing on web development with modern technologies like
          React, Next.js, Tailwind CSS, and more. I&apos;m also studying
          software architecture, design patterns, and best practices in software
          development.
        </p>
        <div className="relative group">
          <div
            ref={techStackRef}
            className="flex overflow-x-auto gap-4 p-4 sm:p-6 bg-muted/30 rounded-xl scrollbar-hide scroll-smooth scroll-m-28 "
          >
            {Object.values(TECHNOLOGIES_CONSTANTS).map((technology: Images) => (
              <div
                key={technology.src}
                className="flex flex-col items-center space-y-2 group min-w-[80px] sm:min-w-[100px]"
              >
                <div className="p-3 sm:p-4 rounded-lg bg-background hover:bg-muted transition-colors duration-200">
                  <Image
                    src={technology.src}
                    height={technology.height}
                    width={technology.width}
                    alt={technology.alt}
                    className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <span className="text-xs text-muted-foreground text-center font-medium group-hover:text-foreground transition-colors duration-200">
                  {technology.alt}
                </span>
              </div>
            ))}
          </div>

          {/* Left Arrow - Only visible on hover */}
          <div className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <svg
              className="w-4 h-4 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>

          {/* Right Arrow - Only visible on hover */}
          <div className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <svg
              className="w-4 h-4 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-markup  ">
              Featured Projects
            </h2>
          </div>
          <div className="flex-1 h-px bg-black dark:bg-border mx-4"></div>
          <Link
            href="/view-projects"
            className="  inline-flex items-center text-sm font-medium text-markup hover:text-markup/80 transition-colors duration-200"
          >
            View All
            <svg
              className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Here are some of my recent projects, including personal work and
          collaborations with other developers.
        </p>
        <Projects numberOfElements={4} />
      </section>

      {/* Experience Section */}
      <section className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-markup">Experience</h2>
          <div className="flex-1 h-px bg-black dark:bg-border"></div>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Here&apos;s my CV if you want to know more about my experience and
          background.
        </p>
        <div className="rounded-xl overflow-hidden border border-border">
          <iframe
            src="https://drive.google.com/file/d/1mCjlyGDZT70K-k8diauDgkIRrGmeB8--/preview"
            allow="autoplay"
            height={400}
            className="w-full"
          />
        </div>
      </section>
    </main>
  );
}
