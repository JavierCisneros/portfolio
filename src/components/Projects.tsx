import Image from "next/image";
import { PROJECT_CONSTANTS } from "../app/projects-constants";
import Link from "next/link";

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

export default function Projects(props: {
  numberOfElements: number;
}) {
  const { numberOfElements } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
      {Object.values(PROJECT_CONSTANTS)
        .slice(0, numberOfElements)
        .map((project: Project, index: number) => (
          <article
            className="group flex flex-col w-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 bg-slate-300 dark:bg-card border border-border"
            key={index}
          >
            <div className="relative overflow-hidden">
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                width={project.images[0].width}
                height={project.images[0].height}
                className="object-cover object-center h-48 w-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-markup/10 text-markup border border-markup/20 ">
                  {project.type}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 h-full">
              <div className="space-y-3">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold leading-tight text-foreground group-hover:text-markup transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <Link
                    href={project.links[0].link}
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-markup transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-4 h-4 mr-1"
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
                    Live Demo
                  </Link>

                  <Link
                    href={`/view-projects/${index}`}
                    className="inline-flex items-center text-sm font-medium text-markup hover:text-markup/80 transition-colors duration-200"
                  >
                    Read More
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
              </div>
            </div>
          </article>
        ))}
    </div>
  );
}
