import { BarChart3, Code2, Database, Sparkles, Workflow, type LucideIcon } from "lucide-react";
import { FadeInView } from "@/components/animations";
import { SectionHeader } from "@/components/portfolio/section-header";
import type { SkillGroup } from "@/types/portfolio";

const skillIcons = { analysis: BarChart3, visualization: BarChart3, data: Database, workflow: Workflow, ai: Sparkles, web: Code2 } satisfies Record<SkillGroup["id"], LucideIcon>;

export function SkillsSection({ skillGroups, bio }: { skillGroups: readonly SkillGroup[]; bio?: string; }) {
  return (
    <section id="about" aria-labelledby="about-heading" className="editorial-section scroll-mt-24 py-20 sm:py-24">
      <SectionHeader eyebrow="02 / A little about me" title="Analytical by training. Curious by nature." description="My strongest work sits where analysis, business communication, and implementation meet." id="about-heading" />
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <FadeInView>
          <div className="border-l-2 border-primary/40 pl-6">
            <p className="text-base leading-8 text-muted-foreground">{bio}</p>
            <p className="eyebrow mt-6">The tools change. The curiosity stays.</p>
          </div>
        </FadeInView>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = skillIcons[group.id];
            return (
              <FadeInView key={group.id} className="border-t border-border pb-7 pt-5">
                <article><div className="mb-3 flex items-center gap-2.5"><Icon className="h-4 w-4 text-primary" aria-hidden="true" /><h3 className="text-sm font-semibold">{group.title}</h3></div><p className="text-xs leading-6 text-muted-foreground">{group.skills.join(" · ")}</p></article>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
