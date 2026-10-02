import { ExternalLink, FileText, Github } from "lucide-react";
import { TrackedAnchor } from "@/components/tracked-anchor";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/portfolio";

interface ProjectLinksProps {
  project: Pick<Project, "slug" | "liveUrl" | "githubUrl" | "pdfUrl">;
  compact?: boolean;
}

export function ProjectLinks({ project, compact = false }: ProjectLinksProps) {
  const links = [
    { href: project.liveUrl, label: compact ? "Live" : "View live project", event: "project_demo_click", Icon: ExternalLink, primary: true },
    { href: project.githubUrl, label: compact ? "Code" : "View source", event: "project_source_click", Icon: Github, primary: false },
    { href: compact ? undefined : project.pdfUrl, label: "View report", event: "project_report_click", Icon: FileText, primary: false },
  ];

  return links.map(({ href, label, event, Icon, primary }) => href && (compact ? (
    <TrackedAnchor key={event} href={href} target="_blank" rel="noreferrer" eventName={event} eventLabel={project.slug} className="inline-flex min-h-10 items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary">
      <Icon className="h-3.5 w-3.5" aria-hidden="true" /> {label}
    </TrackedAnchor>
  ) : (
    <Button key={event} asChild variant={primary ? "default" : "outline"} className="h-11 rounded-full px-5 shadow-none">
      <TrackedAnchor href={href} target="_blank" rel="noreferrer" eventName={event} eventLabel={project.slug}>
        <Icon aria-hidden="true" /> {label}
      </TrackedAnchor>
    </Button>
  )));
}
