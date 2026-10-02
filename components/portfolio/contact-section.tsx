import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { FadeInView } from "@/components/animations";
import { TrackedAnchor } from "@/components/tracked-anchor";
import type { PortfolioData } from "@/types/portfolio";

export function ContactSection({ personal, socials }: Pick<PortfolioData, "personal" | "socials">) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-28 pb-16 pt-8 sm:pb-24">
      <FadeInView>
        <div className="contact-panel relative overflow-hidden rounded-2xl px-7 py-12 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-current opacity-10" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div>
              <p className="contact-muted mb-6 font-mono text-[10px] uppercase tracking-[0.16em]">05 / Let&apos;s connect</p>
              <h2 id="contact-heading" className="text-4xl font-medium leading-[1.15] tracking-[-0.045em] sm:text-5xl">Good work starts<br />with a <span className="font-serif font-normal italic">conversation.</span></h2>
              <TrackedAnchor href={`mailto:${personal.email}`} eventName="contact_email" className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-current/40 pb-2 text-lg tracking-tight transition-opacity hover:opacity-75 sm:text-2xl">{personal.email}<ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" /></TrackedAnchor>
            </div>
            <div>
              <p className="contact-muted max-w-sm text-sm leading-7">I&apos;m seeking a full-time entry-level or junior data analyst role. Let&apos;s talk about how I can support your team through analytics, business intelligence, and thoughtful problem solving.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <TrackedAnchor href={`mailto:${personal.email}`} eventName="contact_email" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f0f1e8] px-6 text-sm font-medium text-[#263d30] transition-opacity hover:opacity-85 dark:bg-[#20332b] dark:text-[#f0f1e8]"><Mail className="h-4 w-4" aria-hidden="true" /> Say hello</TrackedAnchor>
                <a href={socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-current/35 px-5 text-sm transition-opacity hover:opacity-75"><Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn</a>
              </div>
              <a href={`tel:${personal.phone.replaceAll("-", "")}`} className="contact-muted mt-5 inline-block py-2 text-xs underline-offset-4 hover:underline">Prefer a call? {personal.phone}</a>
            </div>
          </div>
        </div>
      </FadeInView>
    </section>
  );
}
