import Image from "next/image";
import { TECHNOLOGIES_CONSTANTS } from "./technologies-constants";
type TechnologyImage = {
  src: string;
  height: number;
  width: number;
  alt: string;
};
const PDFViewer = () => {
  return <div></div>;
};
export default function Home() {
  return (
    <main className="relative max-w-2xl m-auto my-16 flex flex-col gap-12 px-6 ">
      <div className="scroll-m-20 text-2xl font-bold tracking-tight">
        <h1 className="font-bold">Javier Cisneros</h1>
        <h2 className="font-light">Software Development Engineer</h2>
        <p className="font-normal text-base pt-2 text-justify">
          I´m a Front-End software developer from Guadalajara, Jalisco. I
          started studying software development when I was 16 years old in high
          school and graduated as a junior software engineer. After that, I
          started studying a bachelor degree in software development, and
          graduated in June 2024.{" "}
        </p>
        <p className="font-normal text-base pt-2 text-justify ali">
          I´m passionate about learning and I´m always up to new challenges, I
          want to become a better developer, and I´m always looking for new
          opportunities to grow as a professional.{" "}
        </p>
        <h2 className="font-light pt-4">Contact</h2>
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

        <h2 className="font-light pt-4">Technologies</h2>
        <p className="font-normal text-base pt-2 text-justify">
          Now I´m focusing on web development. I´m learning new technologies
          such as React, Next.js, Tailwind CSS, and more. I´m also studying
          software architecture, design patterns, and best practices in software
          development. However, I´ve been working with these technologies for
          the past few years.{" "}
        </p>
        <div className="flex flex-wrap justify-center p-4">
          {Object.values(TECHNOLOGIES_CONSTANTS).map(
            (technology: TechnologyImage) => (
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
            )
          )}
        </div>
        <h2 className="font-light pt-4">Experience</h2>
        <p className="font-normal text-base pt-2 text-justify">
          Here´s my CV if you want to know more about my experience.
        </p>
        <iframe
          src="https://drive.google.com/file/d/1rJdXSzcWQmY1rVAdPye_fTvXCFO1AMwH/preview"
          allow="autoplay"
          height={250}
          className="pt-2 w-full"
        ></iframe>
      </div>
    </main>
  );
}
