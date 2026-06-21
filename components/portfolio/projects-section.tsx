"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeInView } from "@/components/animations";
import { TrackedAnchor } from "@/components/tracked-anchor";

const categories = ["All", "Data & Analytics", "Web Development", "UI/UX Design", "Other"] as const;

const categoryStyles: Record<Project["category"], string> = {
  "Data & Analytics": "from-violet-500 via-indigo-500 to-cyan-400",
  "Web Development": "from-cyan-500 via-blue-500 to-violet-500",
  "UI/UX Design": "from-fuchsia-500 via-pink-500 to-orange-400",
  "Desktop App": "from-emerald-500 via-teal-500 to-cyan-400",
  "Game Development": "from-amber-500 via-orange-500 to-rose-500",
};

export function ProjectsSection({ projects, compact = false }: { projects: Project[]; compact?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const filteredProjects = compact || activeCategory === "All"
    ? projects
    : activeCategory === "Other"
      ? projects.filter((project) => !["Data & Analytics", "Web Development", "UI/UX Design"].includes(project.category))
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div>
      {!compact && (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground"
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <FadeInView key={project.slug} delay={Math.min(index * 0.04, 0.16)}>
            <article className="data-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/80">
              <div className={`absolute inset-x-0 top-0 z-20 h-0.5 bg-gradient-to-r ${categoryStyles[project.category]} opacity-70 transition-opacity group-hover:opacity-100`} />
              {project.image ? (
                <Link href={`/projects/${project.slug}`} className="relative block aspect-[16/9] overflow-hidden border-b border-border/60">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </Link>
              ) : (
                <div className="flex aspect-[16/9] items-center justify-center border-b border-border/60 bg-muted/40 text-sm text-muted-foreground">Case study</div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <Link href={`/projects/${project.slug}`} aria-label={`Read ${project.title} case study`} className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-primary">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </div>
                <h3 className="text-xl font-semibold tracking-tight">
                  <Link href={`/projects/${project.slug}`} className="hover:text-primary">{project.title}</Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((technology) => <Badge key={technology} variant="secondary">{technology}</Badge>)}
                </div>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-5">
                  <Button asChild size="sm"><Link href={`/projects/${project.slug}`}>Case study <ArrowUpRight aria-hidden="true" /></Link></Button>
                  {project.liveUrl && <Button asChild size="sm" variant="outline"><TrackedAnchor href={project.liveUrl} target="_blank" rel="noreferrer" eventName="project_demo_click" eventLabel={project.slug}><ExternalLink aria-hidden="true" /> Live</TrackedAnchor></Button>}
                  {project.githubUrl && <Button asChild size="sm" variant="outline"><TrackedAnchor href={project.githubUrl} target="_blank" rel="noreferrer" eventName="project_source_click" eventLabel={project.slug}><Github aria-hidden="true" /> Code</TrackedAnchor></Button>}
                </div>
              </div>
            </article>
          </FadeInView>
        ))}
      </div>
    </div>
  );
}
