import { caseStudies } from "@/content/case-studies";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.javiercisneros.me";

  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map(({ frontmatter }) => ({
      url: `${baseUrl}/case-studies/${frontmatter.slug}`,
      lastModified: frontmatter.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
