import type { ProjectLink } from "@/content/types";

interface ProjectLinksProps {
  links: ProjectLink[];
}

export default function ProjectLinks({ links }: ProjectLinksProps) {
  return (
    <div className="my-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
      {links.map((link) => (
        <a
          key={link.link}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-foreground pb-1 transition-opacity hover:opacity-60"
        >
          {link.type}
        </a>
      ))}
    </div>
  );
}
