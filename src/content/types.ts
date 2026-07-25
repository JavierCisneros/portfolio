import type { ComponentType } from "react";

export interface CaseStudyFrontmatter {
  slug: string;
  label?: string;
  title: string;
  summary: string;
  role: string;
  constraint: string;
  decision: string;
  flow: string[];
  result: string;
  stack: string[];
  updatedAt: string;
}

export interface ProjectImage {
  src: string;
  height: number;
  width: number;
  alt: string;
}

export interface ProjectLink {
  type: string;
  link: string;
}

export interface ContentEntry<T> {
  frontmatter: T;
  Content: ComponentType;
}
