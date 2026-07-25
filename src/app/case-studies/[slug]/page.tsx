import CaseStudyLayout from "@/components/CaseStudyLayout";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return caseStudies.map(({ frontmatter }) => ({
    slug: frontmatter.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getCaseStudy(slug);

  if (!entry) {
    return {};
  }

  const { frontmatter } = entry;
  const canonical = `/case-studies/${frontmatter.slug}`;

  return {
    title: frontmatter.title,
    description: frontmatter.summary,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${frontmatter.title} | Javier Cisneros`,
      description: frontmatter.summary,
      url: canonical,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${frontmatter.title} | Javier Cisneros`,
      description: frontmatter.summary,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const entry = getCaseStudy(slug);

  if (!entry) {
    notFound();
  }

  const { Content, frontmatter } = entry;

  return (
    <CaseStudyLayout frontmatter={frontmatter}>
      <Content />
    </CaseStudyLayout>
  );
}
