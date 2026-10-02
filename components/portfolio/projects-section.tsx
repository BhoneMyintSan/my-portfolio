"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { filterProjects, projectFilters, type ProjectFilter } from "@/lib/project-filters";
import type { Project } from "@/types/portfolio";

export function ProjectsSection({ projects }: { projects: readonly Project[] }) {
  const [activeCategory, setActiveCategory] = useState<ProjectFilter>("All");
  const filteredProjects = filterProjects(projects, activeCategory);
  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {projectFilters.map((category) => (
          <button key={category} type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)} className="min-h-11 rounded-full border border-transparent px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground">{category}</button>
        ))}
      </div>
      <p className="sr-only" role="status">{filteredProjects.length} projects shown</p>
      <div className="border-t border-border">
        {filteredProjects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-border py-6 transition-colors hover:bg-secondary/50 sm:grid-cols-[2rem_1fr_auto] sm:gap-6 sm:px-3 lg:grid-cols-[2rem_1fr_13rem_auto]">
            <span className="hidden font-mono text-xs text-muted-foreground sm:block">{String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
            <div><h3 className="text-base font-medium tracking-tight transition-colors group-hover:text-primary sm:text-lg">{project.title}</h3><p className="mt-1.5 text-xs text-muted-foreground">{project.category}</p></div>
            <p className="hidden text-xs leading-6 text-muted-foreground lg:block">{project.technologies.slice(0, 3).join(" · ")}</p>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"><ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
