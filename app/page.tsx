import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Code2,
  Database,
  Download,
  FolderOpen,
  Github,
  GraduationCap,
  Home,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  User,
  Workflow,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Spotlight, GradientMesh, DotPattern } from "@/components/ui/spotlight";
import { FadeIn, FadeInView } from "@/components/animations";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { TrackedAnchor } from "@/components/tracked-anchor";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function HomePage() {
  const { personal, socials, skillGroups, projects, experience, education, languages, strengths } = portfolioData;
  const featuredProjects = projects.filter((project) => project.featured);

  const dockItems = [
    { title: "Home", icon: <Home className="h-4 w-4" aria-hidden="true" />, href: "#top" },
    { title: "About", icon: <User className="h-4 w-4" aria-hidden="true" />, href: "#about" },
    { title: "Projects", icon: <FolderOpen className="h-4 w-4" aria-hidden="true" />, href: "#projects" },
    { title: "Experience", icon: <Briefcase className="h-4 w-4" aria-hidden="true" />, href: "#experience" },
    { title: "Contact", icon: <Mail className="h-4 w-4" aria-hidden="true" />, href: "#contact" },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    url: siteUrl,
    image: `${siteUrl}${personal.avatar}`,
    jobTitle: personal.title,
    email: `mailto:${personal.email}`,
    address: { "@type": "PostalAddress", addressLocality: personal.location },
    alumniOf: { "@type": "CollegeOrUniversity", name: education[0].institution },
    sameAs: [socials.github, socials.linkedin],
    knowsAbout: skillGroups.flatMap((group) => group.skills),
  };

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <GradientMesh />
      <DotPattern className="opacity-30" />
      <FloatingDock items={dockItems} />

      <main id="main-content" className="mx-auto max-w-6xl px-6">
        <Spotlight className="flex min-h-[92vh] items-center">
          <section aria-labelledby="hero-heading" className="w-full py-24 md:py-32">
            <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(350px,0.9fr)]">
              <div className="max-w-3xl space-y-7">
                <FadeIn delay={0.05}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-sm font-medium text-primary">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                    {personal.availability}
                  </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <div className="space-y-4">
                    <p className="font-medium text-primary">{personal.title}</p>
                    <h1 id="hero-heading" className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                      {personal.name}
                    </h1>
                    <p className="max-w-2xl text-2xl font-medium leading-tight text-foreground/85 sm:text-3xl">
                      {personal.headline}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.15}>
                  <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{personal.bio}</p>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg" className="rounded-full px-7">
                      <Link href="#projects">
                        View selected work <ArrowRight aria-hidden="true" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="rounded-full px-7">
                      <TrackedAnchor href={personal.resumeUrl} download="Bhone-Myint-San-Resume.pdf" eventName="resume_download">
                        <Download aria-hidden="true" /> Download résumé
                      </TrackedAnchor>
                    </Button>
                  </div>
                </FadeIn>

                <FadeIn delay={0.25}>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4" aria-hidden="true" /> {personal.location}
                    </span>
                    <span aria-hidden="true">·</span>
                    <a className="hover:text-foreground" href={`mailto:${personal.email}`}>{personal.email}</a>
                    <span aria-hidden="true">·</span>
                    <a className="hover:text-foreground" href={`tel:${personal.phone.replaceAll("-", "")}`}>{personal.phone}</a>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.15}>
                <div className="relative mx-auto w-full max-w-sm">
                  <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-gradient-to-br from-primary/25 via-violet-500/10 to-transparent blur-2xl" />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/70 bg-card shadow-2xl shadow-primary/10">
                    <Image
                      src={personal.avatar}
                      alt={`Portrait of ${personal.name}`}
                      fill
                      priority
                      sizes="(min-width: 1024px) 384px, 80vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/35 to-transparent p-5 pt-20">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Currently</p>
                      <p className="mt-1 text-sm font-medium">Data Analyst Intern · EVENT THAI</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        </Spotlight>

        <section aria-label="Portfolio evidence" className="editorial-section py-8">
          <div className="grid overflow-hidden rounded-2xl border border-border/70 bg-card/55 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["5,000+", "Reviews analyzed"],
              ["11", "Projects documented"],
              ["100+", "Event participants supported"],
              ["Current", "Data analyst internship"],
            ].map(([value, label]) => (
              <div key={label} className="border-b border-border/60 p-5 last:border-b-0 sm:border-r sm:[&:nth-child(2)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r lg:last:border-r-0">
                <p className="font-mono text-2xl font-semibold text-foreground">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="editorial-section scroll-mt-24 py-24">
          <SectionHeader
            eyebrow="Capabilities"
            title="A practical toolkit for data and digital products"
            description="My strongest work sits where analysis, business communication, and implementation meet."
            id="about-heading"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, index) => {
              const icons = [BarChart3, Code2, Database, Workflow];
              const Icon = icons[index] ?? Workflow;
              return (
              <FadeInView key={group.title}>
                <article className="data-card h-full rounded-2xl border border-border/70 bg-card/70 p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="rounded-xl border border-primary/20 bg-primary/10 p-2.5 text-primary"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                    <h3 className="font-semibold">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                  </div>
                </article>
              </FadeInView>
            );})}
          </div>
        </section>

        <section aria-labelledby="featured-heading" className="editorial-section py-24">
          <SectionHeader
            eyebrow="Selected work"
            title="Projects with a clear problem and outcome"
            description="A focused selection of analytics and product work. Each case study explains the challenge, approach, and deliverable."
            id="featured-heading"
          />
          <ProjectsSection projects={featuredProjects} compact />
        </section>

        <section id="projects" aria-labelledby="projects-heading" className="editorial-section scroll-mt-24 py-24">
          <SectionHeader
            eyebrow="Project archive"
            title="More things I have built and analyzed"
            description="Filter the full collection by discipline, then open any project for more context."
            id="projects-heading"
          />
          <ProjectsSection projects={projects} />
        </section>

        <section id="experience" aria-labelledby="experience-heading" className="editorial-section scroll-mt-24 py-24">
          <SectionHeader
            eyebrow="Background"
            title="Experience and education"
            description="Team projects, leadership experience, and the academic foundation behind my work."
            id="experience-heading"
          />
          <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
            <div className="relative space-y-5 before:absolute before:bottom-6 before:left-[7px] before:top-6 before:w-px before:bg-gradient-to-b before:from-primary before:via-border before:to-transparent">
              {experience.map((item, index) => (
                <FadeInView key={`${item.company}-${item.position}`}>
                  <article className={`data-card relative ml-7 rounded-2xl border p-6 ${index === 0 ? "border-primary/35 bg-gradient-to-br from-primary/10 via-card/90 to-card/70" : "border-border/70 bg-card/70"}`}>
                    <span className={`absolute -left-[29px] top-7 h-3.5 w-3.5 rounded-full border-2 border-background ${index === 0 ? "bg-primary shadow-[0_0_16px_var(--primary)]" : "bg-muted-foreground"}`} aria-hidden="true" />
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold">{item.position}</h3>
                        <p className="text-sm text-primary">{item.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {index === 0 && <Badge className="bg-emerald-500/15 text-emerald-500">Current</Badge>}
                        <Badge variant="outline">{item.duration}</Badge>
                      </div>
                    </div>
                    <p className="leading-7 text-muted-foreground">{item.description}</p>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </FadeInView>
              ))}
            </div>

            <div className="space-y-4">
              <FadeInView>
                <article className="rounded-2xl border border-border/70 bg-card/70 p-6">
                  <GraduationCap className="mb-5 h-7 w-7 text-primary" aria-hidden="true" />
                  <h3 className="font-semibold">{education[0].degree}</h3>
                  <p className="mt-1 text-primary">Major in {education[0].major}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{education[0].institution}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline">{education[0].duration}</Badge>
                    <Badge>{education[0].status}</Badge>
                  </div>
                </article>
              </FadeInView>
              <FadeInView>
                <article className="rounded-2xl border border-border/70 bg-card/70 p-6">
                  <h3 className="mb-4 font-semibold">Working strengths</h3>
                  <div className="flex flex-wrap gap-2">
                    {strengths.map((strength) => <Badge key={strength} variant="secondary">{strength}</Badge>)}
                  </div>
                </article>
              </FadeInView>
              <FadeInView>
                <article className="rounded-2xl border border-border/70 bg-card/70 p-6">
                  <Languages className="mb-5 h-7 w-7 text-primary" aria-hidden="true" />
                  <h3 className="mb-4 font-semibold">Languages</h3>
                  <dl className="space-y-3">
                    {languages.map((language) => (
                      <div key={language.name} className="flex items-center justify-between gap-4 text-sm">
                        <dt>{language.name}</dt>
                        <dd className="text-right text-muted-foreground">{language.level}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </FadeInView>
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="editorial-section scroll-mt-24 py-28">
          <FadeInView>
            <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-8 text-center sm:p-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Let&apos;s connect</p>
              <h2 id="contact-heading" className="text-3xl font-bold sm:text-4xl">Looking for a curious, practical data thinker?</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
                I&apos;m seeking a full-time entry-level or junior data analyst role, and I&apos;m happy to discuss opportunities where analytics, business intelligence, and product thinking overlap.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="rounded-full px-8">
                  <TrackedAnchor href={`mailto:${personal.email}`} eventName="contact_email"><Mail aria-hidden="true" /> Email me</TrackedAnchor>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                  <a href={socials.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
                </Button>
              </div>
            </div>
          </FadeInView>
        </section>
      </main>

      <footer className="border-t border-border/60 pb-28 pt-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {personal.name}. Built with care in Thailand.</p>
          <div className="flex items-center gap-2">
            <a href={socials.github} target="_blank" rel="noreferrer" aria-label="View GitHub profile" className="rounded-full p-2 hover:bg-muted hover:text-foreground"><Github aria-hidden="true" className="h-5 w-5" /></a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="View LinkedIn profile" className="rounded-full p-2 hover:bg-muted hover:text-foreground"><Linkedin aria-hidden="true" className="h-5 w-5" /></a>
            <a href={`mailto:${personal.email}`} aria-label={`Email ${personal.name}`} className="rounded-full p-2 hover:bg-muted hover:text-foreground"><Mail aria-hidden="true" className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
}

function SectionHeader({ eyebrow, title, description, id }: { eyebrow: string; title: string; description: string; id: string }) {
  return (
    <FadeInView>
      <div className="mb-12 grid gap-4 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-8">
        <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <div className="max-w-2xl">
          <h2 id={id} className="text-3xl font-bold tracking-[-0.035em] sm:text-4xl">{title}</h2>
          <p className="mt-4 leading-7 text-muted-foreground">{description}</p>
        </div>
      </div>
    </FadeInView>
  );
}
