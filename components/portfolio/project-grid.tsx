import { FadeInView } from "@/components/animations";
import { ProjectCard } from "@/components/portfolio/project-card";
import type { Project } from "@/types/portfolio";

export function ProjectGrid({ projects }: { projects: readonly Project[]; }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <FadeInView key={project.slug} delay={Math.min(index * 0.04, 0.16)}>
          <ProjectCard project={project} index={index} />
        </FadeInView>
      ))}
    </div>
  );
}
