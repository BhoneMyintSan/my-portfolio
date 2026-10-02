import { GraduationCap, Languages } from "lucide-react";
import { FadeInView } from "@/components/animations";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/portfolio/section-header";
import type { PortfolioData } from "@/types/portfolio";

export function ExperienceSection({ experience, education, languages, strengths }: Pick<PortfolioData, "experience" | "education" | "languages" | "strengths">) {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="editorial-section scroll-mt-24 py-20 sm:py-24">
      <SectionHeader
        eyebrow="04 / The journey so far"
        title="Learning by doing. Building with purpose."
        description="Data operations, event analytics, team projects, and the academic foundation behind my work."
        id="experience-heading"
      />
      <div className="grid gap-12 lg:grid-cols-[1.35fr_0.8fr] lg:gap-20">
        <div className="relative space-y-8 before:absolute before:bottom-6 before:left-[7px] before:top-3 before:w-px before:bg-border">
          {experience.map((item) => (
            <FadeInView key={`${item.company}-${item.position}`}>
              <article className="relative ml-8 border-b border-border pb-8">
                <span className={`absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-background ${item.isCurrent ? "bg-primary" : "bg-muted-foreground/50"}`} aria-hidden="true" />
                <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row">
                  <div>
                    <h3 className="text-lg font-medium tracking-tight">{item.position}</h3>
                    <p className="mt-1 text-sm text-primary">{item.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                    {item.isCurrent && <Badge className="border-primary/20 bg-primary/10 text-primary">Current</Badge>}
                    <span className="whitespace-nowrap font-mono text-[10px] text-muted-foreground">{item.duration}</span>
                  </div>
                </div>
                <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
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
          {education.map((item) => (
            <FadeInView key={item.institution}>
              <article className="rounded-2xl border border-border/70 bg-card/70 p-6">
                <GraduationCap className="mb-5 h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="font-semibold">{item.degree}</h3>
                <p className="mt-1 text-primary">Major in {item.major}</p>
                <p className="mt-3 text-sm text-muted-foreground">{item.institution}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline">{item.duration}</Badge>
                  <Badge>{item.status}</Badge>
                  {item.gpa && <Badge variant="outline">GPA: {item.gpa}</Badge>}
                </div>
                {item.honors && <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.honors}</p>}
              </article>
            </FadeInView>
          ))}
          <FadeInView>
            <article className="border-b border-border px-2 py-6">
              <h3 className="mb-3 text-sm font-semibold">How I work</h3>
              <p className="text-sm leading-7 text-muted-foreground">{strengths.join(" · ")}</p>
            </article>
          </FadeInView>
          <FadeInView>
            <article className="px-2 py-5">
              <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold"><Languages className="h-4 w-4 text-primary" aria-hidden="true" /> Languages</h3>
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
  );
}
