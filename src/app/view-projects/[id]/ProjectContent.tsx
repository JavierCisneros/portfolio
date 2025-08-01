"use client";
import Link from "next/link";
import ImageGallery from "../../../components/ImageGallery";
import SmoothScroll from "../../../components/SmoothScroll";

interface ProjectContentProps {
  project: any; // You can define a proper type based on your project structure
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <main className="relative max-w-4xl m-auto my-16 flex flex-col gap-8 px-6 bg-slate-300 dark:bg-background-dark text-black dark:text-white">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Link
            href="/view-projects"
            className="inline-flex items-center text-sm font-medium text-markup hover:text-markup/80 transition-colors duration-200"
          >
            <svg
              className="mr-2 w-4 h-4"
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
            Back to Projects
          </Link>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-markup/10 text-white border border-markup/20">
                {project.type}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-markup mb-4">
                  Description
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.long_description}
                </p>
              </div>

              {project.learning && (
                <div>
                  <h2 className="text-2xl font-bold text-markup mb-4">
                    What I Learned
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.learning}
                  </p>
                </div>
              )}

              {project.stack && (
                <div>
                  <h2 className="text-2xl font-bold text-markup mb-4">
                    Technologies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.stack}
                  </p>
                </div>
              )}

              <div>
                <h2 className="text-2xl font-bold text-markup mb-4">
                  Deployment
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.deployment}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link: any, index: number) => (
                    <a
                      key={index}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-markup text-white hover:bg-markup/80 transition-colors duration-200"
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
                      {link.type}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <ImageGallery images={project.images} language="en" />
          </div>
        </div>
      </div>
    </main>
  );
}
