import Link from "next/link";
import { PROJECT_CONSTANTS_ES } from "../../../projects-constants-es";
import { Metadata } from "next";
import ProjectContentES from "./ProjectContentES";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project =
    PROJECT_CONSTANTS_ES[parseInt(id) as keyof typeof PROJECT_CONSTANTS_ES];

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} - Javier Cisneros`,
      description: project.description,
      url: `https://javiercisneros.me/es/proyectos/${id}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project =
    PROJECT_CONSTANTS_ES[parseInt(id) as keyof typeof PROJECT_CONSTANTS_ES];

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return <ProjectContentES project={project} />;
}
