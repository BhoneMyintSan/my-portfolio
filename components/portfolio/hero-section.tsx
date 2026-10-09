import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { TrackedAnchor } from "@/components/tracked-anchor";
import { Button } from "@/components/ui/button";
import type { Experience, PersonalInfo } from "@/types/portfolio";

export function HeroSection({ personal, highlightedExperience }: { personal: PersonalInfo; highlightedExperience?: Experience; }) {
  return (
    <section aria-labelledby="hero-heading" className="hero-section relative pb-12 pt-12 sm:pb-16 sm:pt-20 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_0.85fr] lg:gap-20">
        <div>
          <FadeIn delay={0.05}>
            <p className="eyebrow mb-7 flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" /> Data analyst &amp; creative problem solver</p>
            <h1 id="hero-heading" className="hero-title">Data, made<br /><span className="font-serif italic font-normal text-primary">meaningful.</span></h1>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="mt-8 max-w-xl">
              <p className="text-lg font-medium tracking-tight sm:text-xl">Hi, I&apos;m {personal.name}.</p>
              <p className="mt-3 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{personal.headline}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="glass-button glass-button-primary h-12 rounded-full px-6">
                <a href="#selected-work">Explore my work <ArrowUpRight aria-hidden="true" /></a>
              </Button>
              <Button variant="outline" size="lg" asChild className="glass-button h-12 rounded-full px-6">
                <TrackedAnchor href={personal.resumeUrl} download={personal.resumeUrl.split("/").pop()} eventName="resume_download"><Download aria-hidden="true" /> Download résumé</TrackedAnchor>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Based in {personal.location}<span className="mx-1 text-border" aria-hidden="true">/</span> Open to opportunities</p>
          </FadeIn>
        </div>
        <FadeIn delay={0.15} className="w-full max-w-[390px] justify-self-center lg:justify-self-end">
          <figure className="liquid-glass portrait-frame relative">
            <div className="relative aspect-[4/5.4] overflow-hidden rounded-[10rem_10rem_1.5rem_1.5rem] bg-secondary">
              <Image src={personal.avatar} alt={`Portrait of ${personal.name}`} fill priority sizes="(min-width: 1024px) 390px, (min-width: 640px) 390px, 85vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <figcaption className="liquid-glass portrait-caption absolute inset-x-5 bottom-5 flex items-start justify-between gap-4 rounded-2xl px-4 py-5">
              <div><p className="text-sm font-semibold">{personal.shortName}</p><p className="mt-1 text-xs text-muted-foreground">{personal.title}</p></div>
              <span className="font-serif text-3xl italic text-primary" aria-hidden="true">b.</span>
            </figcaption>
          </figure>
        </FadeIn>
      </div>
      <FadeIn delay={0.25}>
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex max-w-lg items-start gap-2.5 leading-5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />{personal.availability}</p>
          {highlightedExperience && <p className="sm:text-right"><span className="text-foreground">{highlightedExperience.isCurrent ? "Currently at" : "Most recently at"} {highlightedExperience.company}</span><span className="mx-3 hidden sm:inline" aria-hidden="true">·</span><a href="#about" className="mt-2 flex items-center gap-2 text-primary sm:mt-0 sm:inline-flex">Get to know me <ArrowDown className="h-3 w-3" aria-hidden="true" /></a></p>}
        </div>
      </FadeIn>
    </section>
  );
}
