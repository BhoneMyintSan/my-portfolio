import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, FileText, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrackedAnchor } from "@/components/tracked-anchor";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find((item) => item.slug === slug);
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
  const project = portfolioData.projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-12 sm:py-20">
      <Button asChild variant="ghost" className="mb-10 -ml-3">
        <Link href="/#projects"><ArrowLeft aria-hidden="true" /> Back to projects</Link>
      </Button>

      <article>
        <header className="max-w-3xl">
          <Badge variant="outline">{project.category}</Badge>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => <Badge key={technology} variant="secondary">{technology}</Badge>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && <Button asChild><TrackedAnchor href={project.liveUrl} target="_blank" rel="noreferrer" eventName="project_demo_click" eventLabel={project.slug}><ExternalLink aria-hidden="true" /> View live project</TrackedAnchor></Button>}
            {project.githubUrl && <Button asChild variant="outline"><TrackedAnchor href={project.githubUrl} target="_blank" rel="noreferrer" eventName="project_source_click" eventLabel={project.slug}><Github aria-hidden="true" /> View source</TrackedAnchor></Button>}
            {project.pdfUrl && <Button asChild variant="outline"><TrackedAnchor href={project.pdfUrl} target="_blank" rel="noreferrer" eventName="project_report_click" eventLabel={project.slug}><FileText aria-hidden="true" /> View report</TrackedAnchor></Button>}
          </div>
        </header>

        {project.image && (
          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted">
            <Image src={project.image} alt={`${project.title} interface or report preview`} fill priority sizes="(min-width: 1024px) 960px, 100vw" className="object-cover" />
          </div>
        )}

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <section aria-labelledby="challenge-heading">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Context</p>
            <h2 id="challenge-heading" className="text-2xl font-semibold">The challenge</h2>
            <p className="mt-4 leading-7 text-muted-foreground">{project.challenge}</p>
          </section>
          <section aria-labelledby="approach-heading">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Process</p>
            <h2 id="approach-heading" className="text-2xl font-semibold">My approach</h2>
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

        <section aria-labelledby="outcome-heading" className="mt-14 rounded-2xl border border-primary/20 bg-primary/8 p-7 sm:p-9">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Deliverable</p>
          <h2 id="outcome-heading" className="text-2xl font-semibold">The outcome</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">{project.outcome}</p>
        </section>
      </article>
    </main>
  );
}
