import { PROJECT_CONSTANTS } from "@/app/projects-constants";
import ProjectClient from "./ProjectClient";

export default async function project({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const project = PROJECT_CONSTANTS[id as keyof typeof PROJECT_CONSTANTS];

  return <ProjectClient project={project} />;
}
