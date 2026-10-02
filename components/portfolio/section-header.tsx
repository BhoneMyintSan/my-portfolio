import { FadeInView } from "@/components/animations";

export function SectionHeader({ eyebrow, title, description, id }: { eyebrow: string; title: string; description: string; id: string; }) {
  return (
    <FadeInView>
      <div className="mb-10 sm:mb-12">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <h2 id={id} className="section-title max-w-xl">{title}</h2>
          <p className="max-w-lg text-sm leading-7 text-muted-foreground">{description}</p>
        </div>
      </div>
    </FadeInView>
  );
}
