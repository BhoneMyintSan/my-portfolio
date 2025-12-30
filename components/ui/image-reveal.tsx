"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ImageRevealItem {
  title: string;
  description: string;
  image: string;
  href?: string;
}

interface ImageRevealListProps {
  items: ImageRevealItem[];
  className?: string;
}

export function ImageRevealList({ items, className = "" }: ImageRevealListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className={className} onMouseMove={handleMouseMove}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="group relative border-b border-border/50 py-8 cursor-pointer"
          whileHover={{ x: 20 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground mt-1">{item.description}</p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="text-primary"
            >
              →
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Floating image that follows cursor */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed pointer-events-none z-50 w-64 h-40 rounded-lg overflow-hidden shadow-2xl"
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y - 80,
            }}
          >
            <div className="relative w-full h-full bg-muted">
              {items[hoveredIndex].image && (
                <Image
                  src={items[hoveredIndex].image}
                  alt={items[hoveredIndex].title}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
