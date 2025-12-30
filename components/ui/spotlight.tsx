"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
}

export function Spotlight({ children, className = "" }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${className}`}
    >
      {/* Main spotlight glow */}
      {isMounted && (
        <motion.div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(147, 51, 234, 0.15), transparent 40%)`,
            // @ts-ignore
            "--mouse-x": smoothX,
            "--mouse-y": smoothY,
          }}
        />
      )}
      
      {/* Glowing orb that follows cursor */}
      {isMounted && (
        <motion.div
          className="pointer-events-none absolute w-64 h-64 -translate-x-1/2 -translate-y-1/2 z-10"
          style={{
            left: smoothX,
            top: smoothY,
            opacity: isHovered ? 1 : 0,
          }}
        >
          {/* Outer glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(168, 85, 247, 0.15) 30%, transparent 60%)",
              filter: "blur(25px)",
            }}
            animate={{
              scale: isHovered ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Inner bright core */}
          <motion.div
            className="absolute inset-[35%] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(168, 85, 247, 0.3) 40%, transparent 70%)",
              filter: "blur(8px)",
            }}
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              opacity: isHovered ? [0.6, 0.9, 0.6] : 0,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
      
      {children}
    </div>
  );
}

// Grid Background Pattern
export function GridBackground({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      {children}
    </div>
  );
}

// Dot Pattern Background
export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="fill-muted-foreground/20" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  );
}

// Gradient Mesh Background
export function GradientMesh() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-[40%] -left-[20%] h-[80%] w-[60%] rounded-full bg-gradient-to-br from-purple-600/30 via-violet-600/25 to-transparent blur-3xl animate-blob" />
      <div className="absolute -top-[20%] -right-[20%] h-[70%] w-[50%] rounded-full bg-gradient-to-bl from-indigo-500/25 via-purple-500/20 to-transparent blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-[20%] left-[20%] h-[60%] w-[50%] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-purple-600/15 to-transparent blur-3xl animate-blob animation-delay-4000" />
      <div className="absolute top-[30%] right-[10%] h-[40%] w-[40%] rounded-full bg-gradient-to-tl from-violet-500/15 via-indigo-600/10 to-transparent blur-3xl animate-blob animation-delay-2000" />
    </div>
  );
}
