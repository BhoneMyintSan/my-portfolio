import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { ProjectLinks } from "@/components/portfolio/project-links";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="data-card group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
      <Link href={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`} className="project-preview relative block aspect-[16/10] overflow-hidden border-b border-border bg-secondary/60 p-5 sm:p-8">
        {project.image ? (
          <div className="relative h-full w-full overflow-hidden rounded-md border border-foreground/10 bg-background shadow-lg shadow-foreground/5 transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transform-none">
            <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(min-width: 1280px) 500px, (min-width: 768px) 45vw, 85vw" className="object-contain" />
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-primary"><FileText className="h-10 w-10 stroke-1" aria-hidden="true" /><span className="eyebrow">A closer look</span></div>
        )}
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-primary transition-transform group-hover:-rotate-12"><ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span>
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-4 flex items-center justify-between gap-4"><p className="eyebrow">{project.category}</p><span className="font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span></div>
        <h3 className="text-xl font-medium leading-snug tracking-[-0.035em] sm:text-2xl"><Link href={`/projects/${project.slug}`} className="transition-colors hover:text-primary">{project.title}</Link></h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{project.summary}</p>
        <p className="mt-5 text-xs leading-6 text-muted-foreground">{project.technologies.slice(0, 4).join(" / ")}</p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-border pt-4">
          <Link href={`/projects/${project.slug}`} className="inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-primary">Read case study <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
          <div className="flex gap-4"><ProjectLinks project={project} compact /></div>
        </div>
      </div>
    </article>
  );
}
