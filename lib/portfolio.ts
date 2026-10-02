import type { Experience, PortfolioData } from "@/types/portfolio";

export function getHighlightedExperience(experience: readonly Experience[]): Experience | undefined {
  return experience.find((item) => item.isCurrent) ?? experience[0];
}

export function createPersonStructuredData(portfolio: PortfolioData, siteUrl: string) {
  const { personal, socials, education, skillGroups } = portfolio;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    url: siteUrl,
    image: new URL(personal.avatar, siteUrl).href,
    jobTitle: personal.title,
    email: `mailto:${personal.email}`,
    address: { "@type": "PostalAddress", addressLocality: personal.location },
    alumniOf: education.map(({ institution }) => ({
      "@type": "CollegeOrUniversity",
      name: institution,
    })),
    sameAs: [socials.github, socials.linkedin],
    knowsAbout: [...new Set(skillGroups.flatMap((group) => group.skills))],
  };
}

export function serializeStructuredData(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
