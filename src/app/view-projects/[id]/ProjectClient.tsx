"use client";
import Image from "next/image";
import Link from "next/link";
import ReturnButton from "../../../components/ReturnButton";

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
  return (
    <main className="relative max-w-4xl m-auto my-16 flex flex-col gap-12 px-6 bg-slate-300 dark:bg-background-dark text-black dark:text-white antialiased">
      {/* Header Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-markup/10 text-markup border border-markup/20">
                {project.type}
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              {project.title}
            </h1>
          </div>
          <ReturnButton />
        </div>
      </div>

      {/* Main Image */}
      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <Image
            src={project.images[0]?.src ?? ""}
            height={project.images[0]?.height}
            width={project.images[0]?.width}
            alt={project.images[0]?.alt ?? ""}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Learning Section */}
      <section className="space-y-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-bold text-markup">Learning Experience</h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {project.learning}
        </p>
      </section>

      {/* Description Section */}
      <section className="space-y-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-bold text-markup">Project Overview</h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {project.long_description}
        </p>
      </section>

      {/* Deployment Section */}
      <section className="space-y-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-bold text-markup">Deployment</h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {project.deployment}
        </p>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4 pt-4">
          {project.links.map((projectLink, index) => (
            <Link
              href={projectLink.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground hover:text-markup transition-all duration-200 hover:scale-105"
              key={index}
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              {projectLink.type}
            </Link>
          ))}
        </div>
      </section>

      {/* Additional Images */}
      {project.images.length > 1 && (
        <section className="space-y-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold text-markup">Gallery</h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {project.images[1].width < 1400 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images
                .slice(1, project.images.length)
                .map((projectImage, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-xl shadow-lg"
                  >
                    <Image
                      src={projectImage.src}
                      height={projectImage.height}
                      width={projectImage.width}
                      alt={projectImage.alt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images
                .slice(1, project.images.length)
                .map((projectImage, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-xl shadow-lg"
                  >
                    <Image
                      src={projectImage.src}
                      height={projectImage.height}
                      width={projectImage.width}
                      alt={projectImage.alt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
