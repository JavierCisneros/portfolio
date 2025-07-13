"use client";
import Image from "next/image";
import Link from "next/link";
import ReturnButton from "../../../components/ReturnButton";
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

export default function ProjectClient({ project }: { project: Project }) {
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
            <h2 className="font-medium  text-markup">{project.title}</h2>
            <div className="flex-1 h-px bg-black dark:bg-white ml-4 rounded-full"></div>
          </div>
          <p className="font-normal text-base pt-2 text-justify">
            {project.learning}
          </p>
          <div className="flex flex-wrap justify-center p-4">
            <Image
              src={project.images[0]?.src ?? ""}
              height={project.images[0]?.height}
              width={project.images[0]?.width}
              alt={project.images[0]?.alt ?? ""}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <p className="font-normal text-base pt-2 text-justify">
            {project.long_description}
          </p>
          <div className="flex items-center pt-4">
            <h2 className="font-medium  text-markup">Deployment</h2>
            <div className="flex-1 h-px bg-black dark:bg-white ml-4 rounded-full"></div>
          </div>
          <p className="font-normal text-base pt-2 text-justify">
            {project.deployment}
          </p>
          <div className="font-normal text-base pt-2 text-justify flex flex-wrap md:space-x-4 lg:space-x-4 sm:space-x-4 text-wrap">
            {project.links.map((projectLink, index) => (
              <Link
                href={projectLink.link}
                className="underline not-italic w-full sm:w-auto"
                key={index}
              >
                {projectLink.type}
              </Link>
            ))}
          </div>
          {project.images[1].width < 1400 ? (
            <div className="grid grid-flow-row justify-center p-4">
              {project.images
                .slice(1, project.images.length)
                .map((projectImage, index) => (
                  <Image
                    src={projectImage.src}
                    height={projectImage.height}
                    width={projectImage.width}
                    alt={projectImage.alt}
                    className="object-scale-down rounded-lg shadow-lg p-2"
                    key={index}
                  />
                ))}
            </div>
          ) : (
            <div className="grid grid-flow-row md:grid-flow-col justify-center p-4">
              {project.images
                .slice(1, project.images.length)
                .map((projectImage, index) => (
                  <Image
                    src={projectImage.src}
                    height={projectImage.height}
                    width={projectImage.width}
                    alt={projectImage.alt}
                    className="object-scale-down rounded-lg shadow-lg p-2"
                    key={index}
                  />
                ))}
            </div>
          )}

          <div className="text-right">
            <ReturnButton />
          </div>
        </div>
      </div>
    </main>
  );
}
