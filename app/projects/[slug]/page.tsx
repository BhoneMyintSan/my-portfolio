import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectLinks } from "@/components/portfolio/project-links";
import { ThemeToggle } from "@/components/theme-toggle";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      images: project.image ? [{ url: project.image, alt: `${project.title} preview` }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 pb-16 pt-6 sm:pb-24 sm:pt-8">
      <div className="mb-12 flex items-center justify-between border-b border-border pb-5 sm:mb-16">
        <Button asChild variant="ghost" className="-ml-3 h-11 rounded-full">
          <Link href="/#projects"><ArrowLeft aria-hidden="true" /> Back to projects</Link>
        </Button>
        <ThemeToggle />
      </div>

      <article>
        <header className="max-w-3xl">
          <p className="eyebrow">Case study / {project.category}</p>
          <h1 className="mt-5 text-4xl font-medium leading-[1.12] tracking-[-0.05em] sm:text-5xl lg:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => <Badge key={technology} variant="outline" className="px-3 py-1 font-normal">{technology}</Badge>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ProjectLinks project={project} />
          </div>
        </header>

        {project.image && (
          <div className="project-preview mt-12 rounded-xl border border-border bg-secondary/60 p-4 sm:p-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-foreground/10 bg-background shadow-lg shadow-foreground/5">
              <Image src={project.image} alt={`${project.title} interface or report preview`} fill priority sizes="(min-width: 1024px) 896px, 90vw" className="object-contain" />
            </div>
          </div>
        )}

        <div className="mt-16 grid gap-12 border-t border-border pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <section aria-labelledby="challenge-heading">
            <p className="eyebrow mb-4">01 / Context</p>
            <h2 id="challenge-heading" className="text-2xl font-medium tracking-tight">The challenge</h2>
            <p className="mt-4 leading-7 text-muted-foreground">{project.challenge}</p>
          </section>
          <section aria-labelledby="approach-heading">
            <p className="eyebrow mb-4">02 / Process</p>
            <h2 id="approach-heading" className="text-2xl font-medium tracking-tight">My approach</h2>
            <ol className="mt-5 space-y-4">
              {project.approach.map((step, index) => (
                <li key={step} className="flex gap-4 leading-7 text-muted-foreground">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section aria-labelledby="outcome-heading" className="mt-16 rounded-xl border border-border bg-secondary/60 p-7 sm:p-10">
          <p className="eyebrow mb-4">03 / Deliverable</p>
          <h2 id="outcome-heading" className="text-2xl font-medium tracking-tight">The outcome</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">{project.outcome}</p>
        </section>
      </article>
    </main>
  );
}
