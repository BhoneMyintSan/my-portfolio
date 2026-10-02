"use client";

import Link from "next/link";
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
      <header className={cn("sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl", className)}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 lg:px-12">
          <Link href="#top" aria-label={`${name} home`} className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 font-serif text-2xl italic text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">b.</span>
            <span className="text-sm font-semibold tracking-tight">{name}<span className="ml-1 text-primary">.</span></span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
            {items.filter((item) => item.title !== "Home").map((item) => <Link key={item.title} href={item.href} aria-current={active === item.href ? "location" : undefined} className="relative py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary aria-[current=location]:text-primary">{item.title}<span className={cn("absolute inset-x-0 bottom-0 h-px bg-primary transition-transform", active === item.href ? "scale-x-100" : "scale-x-0")} /></Link>)}
          </nav>
          <div className="flex items-center gap-4"><span className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground lg:block">Portfolio / {new Date().getFullYear()}</span><FloatingThemeToggle /></div>
        </div>
      </header>
      <nav aria-label="Mobile navigation" className="mobile-navigation fixed inset-x-3 bottom-3 z-50 flex items-center justify-around rounded-2xl border border-border bg-background/95 p-1.5 shadow-lg backdrop-blur-xl md:hidden">
        {items.map((item) => <Link key={item.title} href={item.href} aria-current={active === item.href ? "location" : undefined} className="flex min-h-12 min-w-12 flex-col items-center justify-center gap-1 rounded-xl px-2 py-1 text-[9px] font-medium text-muted-foreground transition-colors hover:text-primary aria-[current=location]:bg-primary/10 aria-[current=location]:text-primary">{item.icon}{item.title}</Link>)}
      </nav>
    </>
  );
}
