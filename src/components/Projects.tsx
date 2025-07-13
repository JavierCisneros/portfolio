import Image from "next/image";
import { PROJECT_CONSTANTS } from "../app/projects-constants";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export type Project = {
  type: string;
  title: string;
  description: string;
  images: readonly Images[];
  long_description: string;
  learning: string;
  links: readonly url[];
  deployment: string;
  stack: string;
};
export type url = {
  type: string;
  link: string;
};
export type Images = {
  src: string;
  height: number;
  width: number;
  alt: string;
};

export default function Projects(props: { numberOfElements: number }) {
  const { numberOfElements } = props;
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
      {Object.values(PROJECT_CONSTANTS)
        .slice(0, numberOfElements)
        .map((project: Project, index: number) => (
          <article
            className="flex flex-col w-full overflow-hidden rounded-lg shadow-lg border border-gray-400 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-white dark:bg-background"
            key={index}
          >
            <Image
              src={project.images[0].src}
              alt={project.images[0].alt}
              width={project.images[0].width}
              height={project.images[0].height}
              className="object-cover object-center h-48"
            />

            <div className="flex flex-col justify-between px-4 border border-gray-600 h-full bg-white dark:bg-background">
              <Link
                href={project.links[0].link}
                className="block text-2xl font-black leading-tight hover:underline hover:text-markup pt-4"
                key={index}
              >
                {project.title}
              </Link>
              <p className="text-sm">{project.description}</p>
              <h2 className="text-right">
                <Link
                  href={"view-projects/" + index}
                  className="inline-block mt-2 text-base font-medium text-markup uppercase border-b border-transparent hover:border-markup mb-2"
                >
                  Read More
                </Link>
              </h2>
            </div>
          </article>
        ))}
    </div>
  );
}
