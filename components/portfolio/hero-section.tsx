import Image from "next/image";
import Link from "next/link";
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
              <Button asChild size="lg" className="h-12 rounded-full px-6 shadow-none">
                <Link href="#selected-work">Explore my work <ArrowUpRight aria-hidden="true" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-12 rounded-full border-border bg-transparent px-6 shadow-none">
                <TrackedAnchor href={personal.resumeUrl} download={personal.resumeUrl.split("/").pop()} eventName="resume_download"><Download aria-hidden="true" /> Download résumé</TrackedAnchor>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Based in {personal.location}<span className="mx-1 text-border" aria-hidden="true">/</span> Open to opportunities</p>
          </FadeIn>
        </div>
        <FadeIn delay={0.15} className="w-full max-w-[390px] justify-self-center lg:justify-self-end">
          <figure className="portrait-frame relative">
            <div className="absolute -right-4 -top-4 h-24 w-24 border-r border-t border-primary/40 sm:-right-5 sm:-top-5" aria-hidden="true" />
            <div className="relative aspect-[4/4.6] overflow-hidden rounded-t-[10rem] bg-secondary">
              <Image src={personal.avatar} alt={`Portrait of ${personal.name}`} fill priority sizes="(min-width: 1024px) 390px, (min-width: 640px) 390px, 85vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-md">The person behind the data</span>
            </div>
            <figcaption className="flex items-start justify-between gap-4 border-x border-b border-border bg-card px-5 py-5">
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
