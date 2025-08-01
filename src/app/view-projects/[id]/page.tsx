import Link from "next/link";
import { PROJECT_CONSTANTS } from "../../projects-constants";
import { Metadata } from "next";
import ImageGallery from "../../../components/ImageGallery";
import ProjectContent from "./ProjectContent";

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
    PROJECT_CONSTANTS[parseInt(id) as keyof typeof PROJECT_CONSTANTS];

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} - Javier Cisneros`,
      description: project.description,
      url: `https://javiercisneros.me/view-projects/${id}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project =
    PROJECT_CONSTANTS[parseInt(id) as keyof typeof PROJECT_CONSTANTS];

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectContent project={project} />;
}
