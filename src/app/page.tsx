import Image from "next/image";
import { TECHNOLOGIES_CONSTANTS } from "./technologies-constants";
import Link from "next/link";
import Projects from "./components/Projects";
import type { Images } from "./components/Projects";

export default function Home() {
  return (
    <main className="relative max-w-2xl m-auto my-16 flex flex-col gap-12 px-6 ">
      <div className="scroll-m-20 text-2xl font-bold tracking-tight">
        <h1 className="font-bold">Javier Cisneros</h1>
        <h2 className="font-medium text-markup">
          Software Development Engineer
        </h2>
        <p className="font-normal text-base pt-2 text-justify">
          I´m a Front-End software developer from Guadalajara, Jalisco. I
          started studying software development when I was 16 years old in high
          school and graduated as a junior software engineer. After that, I
          started studying a bachelor degree in software development, and I will
          graduate in June 2024.{" "}
        </p>
        <p className="font-normal text-base pt-2 text-justify ali">
          I´m passionate about learning and I´m always up to new challenges, I
          want to become a better developer, and I´m always looking for new
          opportunities to grow as a professional.{" "}
        </p>
        <div className="font-normal text-base pt-2 text-justify flex flex-wrap md:space-x-4 lg:space-x-4 sm:space-x-4 text-wrap">
          <address className="underline not-italic w-full sm:w-auto">
            <a href="mailto:'fjca185@gmail.com'">fjca185@gmail.com</a>
          </address>
          <p className="underline w-full sm:w-auto">
            <a href="https://linkedin.com/in/javiercisnerosavila">Linkedln</a>
          </p>
          <p className="underline w-full sm:w-auto">
            <a href="https://github.com/JavierCisneros">Github</a>
          </p>
        </div>
        <div>
          <div className="flex items-center pt-4">
            <h2 className="font-medium  text-markup">Stack</h2>
            <div className="flex-1 h-px bg-black ml-4 rounded-full"></div>
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
            <div className="flex-1 h-px bg-black ml-4 rounded-full"></div>
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
          <div className="flex-1 h-px bg-black ml-4 rounded-full"></div>
        </div>
        <p className="font-normal text-base pt-2 text-justify">
          Here´s my CV if you want to know more about my experience.
        </p>
        <iframe
          src="https://drive.google.com/file/d/1rO_oF9NRT8X9iCz1zBsDVjvC3IC3sEaV/preview"
          allow="autoplay"
          height={250}
          className="pt-2 w-full"
        ></iframe>
      </div>
    </main>
  );
}
