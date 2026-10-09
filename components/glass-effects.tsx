"use client";

import { useEffect } from "react";

/** Move only the surface reflection; text and controls stay still. */
export function GlassEffects() {
  useEffect(() => {
    const motion = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let surface: HTMLElement | null = null;
    let frame: number | null = null;
    let x = 0;
    let y = 0;

    const reset = () => {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
      surface?.style.removeProperty("--glass-pointer-x");
      surface?.style.removeProperty("--glass-pointer-y");
      surface = null;
    };

    const move = (event: PointerEvent) => {
      if (!motion.matches || event.pointerType === "touch") return;
      const next = event.target instanceof Element ? event.target.closest<HTMLElement>(".liquid-glass") : null;
      if (next !== surface) {
        reset();
        surface = next;
      }
      if (!surface) return;
      x = event.clientX;
      y = event.clientY;
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        if (!surface) return;
        const bounds = surface.getBoundingClientRect();
        surface.style.setProperty("--glass-pointer-x", `${x - bounds.left}px`);
        surface.style.setProperty("--glass-pointer-y", `${y - bounds.top}px`);
      });
    };

    document.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", reset);
    window.addEventListener("scroll", reset, { passive: true });
    motion.addEventListener("change", reset);
    return () => {
      reset();
      document.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", reset);
      window.removeEventListener("scroll", reset);
      motion.removeEventListener("change", reset);
    };
  }, []);

  return null;
}
