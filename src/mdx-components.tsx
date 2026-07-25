import type { MDXComponents } from "mdx/types";
import ArchitectureFlow from "@/components/mdx/ArchitectureFlow";
import ProjectGallery from "@/components/mdx/ProjectGallery";
import ProjectLinks from "@/components/mdx/ProjectLinks";

const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="mt-14 text-2xl font-semibold tracking-tight md:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-10 text-xl font-semibold tracking-tight">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mt-5 text-[1.02rem] leading-8 text-muted-foreground">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,
  a: ({ children, href }) => (
    <a
      href={href}
      className="border-b border-current transition-opacity hover:opacity-60"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  ArchitectureFlow,
  ProjectGallery,
  ProjectLinks,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
