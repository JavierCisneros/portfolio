"use client";
import Image from "next/image";
import { TECHNOLOGIES_CONSTANTS } from "./technologies-constants";
import Link from "next/link";
import Projects from "./components/Projects";
import type { Images } from "./components/Projects";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") === "enabled"
  );
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("dark-mode", newDarkMode ? "enabled" : "disabled");
  };
  return (
    <main className="relative text-black max-w-2xl m-auto my-16 flex flex-col gap-12 px-6 dark:text-slate-300 dark:bg-background antialiased bg-white ">
      <div className="scroll-m-20 text-2xl font-bold tracking-tight">
        <div className="flex wrap ">
          <h1 className="font-bold ">Javier Cisneros</h1>{" "}
          <button onClick={handleDarkMode} className="ml-auto">
            {darkMode ? <Moon /> : <Sun />}
          </button>
        </div>
        <h2 className="font-medium text-markup">
          Software Development Engineer
        </h2>
        <p className="font-normal text-base pt-2 text-justify">
          I´m a Front-End software developer from Guadalajara, Jalisco. I
          started studying software development when I was 16 years old in high
          school and graduated as a junior software engineer. After that, I
          started studying a bachelor degree in software development, and
          graduated in June 2024.{" "}
        </p>
        <p className="font-normal text-base pt-2 text-justify">
          I´m passionate about learning and I´m always up to new challenges, I
          want to become a better developer, and I´m always looking for new
          opportunities to grow as a professional.{" "}
        </p>
        <div className="flex flex-no-wrap justify-center space-x-8">
          <address className="m-2 underline not-italic w-auto sm:w-10 hover:shadow-xl transition duration-300 ease-in-out transform hover:translate-y-1 hover:scale-105 ">
            <a href="mailto:'fjca185@gmail.com'">
              <Mail size={32} />
            </a>
          </address>
          <p className="m-2 underline w-auto sm:w-10 hover:shadow-xl transition duration-300 ease-in-out transform hover:translate-y-1 hover:scale-105">
            <a href="https://linkedin.com/in/javiercisnerosavila">
              <Linkedin size={32} />
            </a>
          </p>
          <p className="m-2 underline w-auto sm:w-10 hover:shadow-xl transition duration-300 ease-in-out transform hover:translate-y-1 hover:scale-105">
            <a href="https://github.com/JavierCisneros">
              <Github size={32} />
            </a>
          </p>
        </div>
        <div>
          <div className="flex items-center pt-4">
            <h2 className="font-medium  text-markup">Stack</h2>
            <div className="flex-1 h-px dark:bg-white ml-4 rounded-full bg-black"></div>
          </div>
          <p className="font-normal text-base pt-2 text-justify">
            Now I´m focusing on web development. I´m learning new technologies
            such as React, Next.js, Tailwind CSS, and more. I´m also studying
            software architecture, design patterns, and best practices in
            software development. However, I´ve been working with these
            technologies for the past few years.{" "}
          </p>
          <div className="flex flex-wrap justify-center p-4">
            {Object.values(TECHNOLOGIES_CONSTANTS).map((technology: Images) => (
              <div
                key={technology.src}
                className="m-2 w-12 sm:w-10 md:w-10 lg:w-8 xl:w-10"
              >
                <Image
                  src={technology.src}
                  height={technology.height}
                  width={technology.width}
                  alt={technology.alt}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center pt-4">
            <h2 className="font-medium  text-markup">Projects</h2>
            <div className="flex-1 h-px dark:bg-white ml-4 rounded-full bg-black"></div>
          </div>
          <p className="font-normal text-base pt-2 text-justify">
            I´ve been working on different projects. Some of them are personal
            projects, and others are projects that I´ve been working on with
            other developers.
          </p>
          <Projects numberOfElements={4} />
          <div className="text-right">
            <Link
              href="/view-projects"
              className="pb-1 mt-2 text-base font-medium text-markup uppercase border-b border-transparent hover:border-markup text-right"
            >
              View More{" "}
            </Link>
          </div>
        </div>
        <div className="flex items-center pt-4">
          <h2 className="font-medium  text-markup">Experience</h2>
          <div className="flex-1 h-px dark:bg-white ml-4 rounded-full bg-black"></div>
        </div>
        <p className="font-normal text-base pt-2 text-justify">
          Here´s my CV if you want to know more about my experience.
        </p>
        <iframe
          src="https://drive.google.com/file/d/1xcP3cjOI8BYx-SJlmNN03w1KQwjdHyHC/preview"
          allow="autoplay"
          height={250}
          className="pt-2 w-full"
        ></iframe>
      </div>
    </main>
  );
}
