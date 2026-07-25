import SavingsPlatform, {
  frontmatter as savingsPlatformFrontmatter,
} from "./savings-platform.mdx";
import EmbeddedBanking, {
  frontmatter as embeddedBankingFrontmatter,
} from "./embedded-banking.mdx";
import TimeReporting, {
  frontmatter as timeReportingFrontmatter,
} from "./time-reporting.mdx";
import Tianguiza, {
  frontmatter as tianguizaFrontmatter,
} from "./tianguiza.mdx";
import type {
  CaseStudyFrontmatter,
  ContentEntry,
} from "@/content/types";

export const caseStudies: ContentEntry<CaseStudyFrontmatter>[] = [
  {
    frontmatter: savingsPlatformFrontmatter as unknown as CaseStudyFrontmatter,
    Content: SavingsPlatform,
  },
  {
    frontmatter: embeddedBankingFrontmatter as unknown as CaseStudyFrontmatter,
    Content: EmbeddedBanking,
  },
  {
    frontmatter: timeReportingFrontmatter as unknown as CaseStudyFrontmatter,
    Content: TimeReporting,
  },
  {
    frontmatter: tianguizaFrontmatter as unknown as CaseStudyFrontmatter,
    Content: Tianguiza,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((entry) => entry.frontmatter.slug === slug);
}
