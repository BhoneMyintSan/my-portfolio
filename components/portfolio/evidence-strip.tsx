import type { PortfolioData } from "@/types/portfolio";

interface EvidenceStripProps {
  metrics: PortfolioData["metrics"];
  projectCount: number;
}

export function EvidenceStrip({ metrics, projectCount }: EvidenceStripProps) {
  const highlights = [[metrics.reviewsAnalyzed, "Reviews analyzed", "Customer sentiment & satisfaction"], [String(projectCount).padStart(2, "0"), "Projects documented", "From analysis to implementation"], [metrics.eventParticipantsSupported, "Participants supported", "Event coordination & operations"]];
  return (
    <section aria-label="Portfolio evidence" className="mb-4 grid grid-cols-1 border-y border-border bg-secondary/45 sm:grid-cols-3">
      {highlights.map(([value, label, detail], index) => (
        <div key={label} className="flex items-center gap-5 border-b border-border px-6 py-7 last:border-b-0 sm:block sm:border-b-0 sm:border-r sm:px-7 sm:py-8 sm:last:border-r-0 lg:px-9">
          <div className="flex min-w-24 items-start justify-between sm:min-w-0"><p className="text-4xl font-medium tracking-[-0.06em] sm:text-5xl">{value}</p><span className="hidden font-mono text-[10px] text-muted-foreground sm:block">0{index + 1}</span></div>
          <div><p className="text-sm font-medium sm:mt-4">{label}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p></div>
        </div>
      ))}
    </section>
  );
}
