import { Github, Linkedin, Mail } from "lucide-react";
import type { PortfolioData } from "@/types/portfolio";

export function PortfolioFooter({ personal, socials }: Pick<PortfolioData, "personal" | "socials">) {
  return (
    <footer className="border-t border-border pb-28 pt-7 md:pb-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-12">
        <p>© {new Date().getFullYear()} {personal.name}. Built with care in Thailand.</p>
        <div className="flex items-center gap-2">
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="View GitHub profile" className="rounded-full p-3 hover:bg-muted hover:text-foreground"><Github aria-hidden="true" className="h-4 w-4" /></a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="View LinkedIn profile" className="rounded-full p-3 hover:bg-muted hover:text-foreground"><Linkedin aria-hidden="true" className="h-4 w-4" /></a>
          <a href={`mailto:${personal.email}`} aria-label={`Email ${personal.name}`} className="rounded-full p-3 hover:bg-muted hover:text-foreground"><Mail aria-hidden="true" className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
