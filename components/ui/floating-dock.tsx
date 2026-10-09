"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FloatingThemeToggle } from "@/components/theme-toggle";

interface FloatingDockProps {
  items: { title: string; icon: React.ReactNode; href: string; }[];
  name: string;
  className?: string;
}

export function FloatingDock({ items, name, className }: FloatingDockProps) {
  const [active, setActive] = useState("#top");
  useEffect(() => {
    const update = () => {
      let current = "#top";
      for (const item of items) {
        const section = document.getElementById(item.href.slice(1));
        if (section && section.getBoundingClientRect().top <= 160) current = item.href;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = items.at(-1)?.href ?? current;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [items]);
  return (
    <>
      <header className={cn("sticky top-0 z-50 px-3 pt-3 sm:px-6 lg:px-8", className)}>
        <div className="liquid-glass glass-navigation relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 rounded-full px-4 sm:px-6 lg:px-8">
          <a href="#top" aria-label={`${name} home`} className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 font-serif text-2xl italic text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">b.</span>
            <span className="text-sm font-semibold tracking-tight">{name}<span className="ml-1 text-primary">.</span></span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
            {items.filter((item) => item.title !== "Home").map((item) => <a key={item.title} href={item.href} aria-current={active === item.href ? "location" : undefined} className="rounded-full px-3 py-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary aria-[current=location]:text-primary">{item.title}</a>)}
          </nav>
          <div className="flex items-center gap-4"><span className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground lg:block">Portfolio / {new Date().getFullYear()}</span><FloatingThemeToggle /></div>
        </div>
      </header>
      <nav aria-label="Mobile navigation" className="liquid-glass glass-navigation mobile-navigation fixed inset-x-3 bottom-3 z-50 flex items-center justify-around rounded-3xl p-1.5 md:hidden">
        {items.map((item) => <a key={item.title} href={item.href} aria-current={active === item.href ? "location" : undefined} className="flex min-h-12 min-w-12 flex-col items-center justify-center gap-1 rounded-xl px-2 py-1 text-[9px] font-medium text-muted-foreground transition-colors hover:text-primary aria-[current=location]:bg-primary/10 aria-[current=location]:text-primary">{item.icon}{item.title}</a>)}
      </nav>
    </>
  );
}
