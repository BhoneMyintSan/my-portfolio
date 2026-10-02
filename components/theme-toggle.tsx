"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const isDark = resolvedTheme === "dark";

  return (
    <button type="button" disabled={!mounted} aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Switch color theme"} onClick={() => setTheme(isDark ? "light" : "dark")} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-transparent text-foreground transition-colors hover:bg-secondary disabled:cursor-default">
      {mounted && (isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />)}
    </button>
  );
}

export const FloatingThemeToggle = ThemeToggle;
