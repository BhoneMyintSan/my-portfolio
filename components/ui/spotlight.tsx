"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useSpring, useMotionValue } from "framer-motion";

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
}

export function Spotlight({ children, className = "" }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(147, 51, 234, 0.15), transparent 40%)`;

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
      <motion.div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: spotlightBackground,
        }}
      />
      
      {/* Glowing orb that follows cursor */}
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
      
      {children}
    </div>
  );
}
