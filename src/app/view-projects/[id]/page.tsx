import { PROJECT_CONSTANTS } from "@/app/projects-constants";
import Image from "next/image";
import Link from "next/link";
export default async function project({ params }: { params: { id: number } }) {
  const { id } = params;
  const project = PROJECT_CONSTANTS[id as keyof typeof PROJECT_CONSTANTS];
  return (
    <main className="relative max-w-2xl m-auto my-16 flex flex-col gap-12 px-6 ">
      <div className="scroll-m-20 text-2xl font-bold tracking-tight">
        <div>
          <div className="flex items-center pt-4">
            <h2 className="font-medium  text-markup">{project.title}</h2>
            <div className="flex-1 h-px bg-black ml-4 rounded-full"></div>
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

          <div className="flex items-center pt-4">
            <h2 className="font-medium  text-markup">Deployment</h2>
            <div className="flex-1 h-px bg-black ml-4 rounded-full"></div>
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

          <div className="text-right">
            <Link
              href="/view-projects"
              className="pb-1 mt-2 text-base font-medium text-markup uppercase border-b border-transparent hover:border-markup text-right"
            >
              Go Back{" "}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
