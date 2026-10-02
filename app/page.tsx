import { portfolioData } from "@/data/portfolio";
import { createPersonStructuredData, getHighlightedExperience, serializeStructuredData } from "@/lib/portfolio";
import { siteUrl } from "@/lib/site";
import { ContactSection } from "@/components/portfolio/contact-section";
import { EvidenceStrip } from "@/components/portfolio/evidence-strip";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { PortfolioFooter } from "@/components/portfolio/portfolio-footer";
import { PortfolioNavigation } from "@/components/portfolio/portfolio-navigation";
import { ProjectGrid } from "@/components/portfolio/project-grid";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SectionHeader } from "@/components/portfolio/section-header";
import { SkillsSection } from "@/components/portfolio/skills-section";

export default function HomePage() {
  const { personal, socials, skillGroups, projects, experience, education, languages, strengths, metrics } = portfolioData;
  const featuredProjects = projects.filter((project) => project.featured);
  const highlightedExperience = getHighlightedExperience(experience);
  const structuredData = createPersonStructuredData(portfolioData, siteUrl);
  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-background">
      <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-transform focus:translate-y-0">Skip to content</a>
      <PortfolioNavigation />
      <main id="main-content" className="mx-auto max-w-7xl px-6 lg:px-12">
        <HeroSection personal={personal} highlightedExperience={highlightedExperience} />
        <EvidenceStrip metrics={metrics} projectCount={projects.length} />
        <section id="selected-work" aria-labelledby="featured-heading" className="scroll-mt-28 py-20 sm:py-24">
          <SectionHeader eyebrow="01 / Selected work" title="A few good questions. Thoughtful answers." description="A selection of analytics and digital product work. Real challenges, considered approaches, and something useful at the end." id="featured-heading" />
          <ProjectGrid projects={featuredProjects} />
        </section>
        <SkillsSection skillGroups={skillGroups} bio={personal.bio} />
        <section id="projects" aria-labelledby="projects-heading" className="editorial-section scroll-mt-24 py-20 sm:py-24">
          <SectionHeader eyebrow="03 / Project index" title="Curiosity, put into practice." description="The full collection, from business intelligence and data exploration to the products I have helped build." id="projects-heading" />
          <ProjectsSection projects={projects} />
        </section>
        <ExperienceSection experience={experience} education={education} languages={languages} strengths={strengths} />
        <ContactSection personal={personal} socials={socials} />
      </main>
      <PortfolioFooter personal={personal} socials={socials} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(structuredData) }} />
    </div>
  );
}
