import Image from "next/image";
import { PROJECT_CONSTANTS } from "../../app/projects-constants";
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
export default function Projects(props: { numberOfElements: number }) {
  const { numberOfElements } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
      {Object.values(PROJECT_CONSTANTS)
        .slice(0, numberOfElements)
        .map((project: Project, index: number) => (
          <div className="flex flex-col w-full overflow-hidden" key={index}>
            <Image
              src={project.images[0].src}
              alt={project.images[0].alt}
              width={project.images[0].width}
              height={project.images[0].height}
              className="object-cover object-center h-48"
            />

            <div className="flex flex-col justify-between px-4 bg-white border border-gray-400 h-full">
              <Link
                href={project.links[0].link}
                className="block text-2xl font-black leading-tight hover:underline hover:text-markup pt-4 "
                key={index}
              >
                {project.title}
              </Link>
              <p className="text-sm line-clamp-2">{project.description}</p>
              <div className="text-right">
                <Link
                  href={"view-projects/" + index}
                  className="inline-block pb-1 mt-2 text-base font-medium text-markup uppercase border-b border-transparent hover:border-markup"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
