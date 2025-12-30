"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[22rem]", className)}>
      {children}
    </div>
  );
}

interface BentoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  cta?: string;
}

export function BentoCard({
  title,
  description,
  icon,
  className,
  children,
  href,
  cta,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl",
        "bg-card/80 backdrop-blur-sm border border-border/50",
        "hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10",
        "transition-all duration-500",
        className
      )}
    >
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Inner content container */}
      <div className="relative p-6 flex flex-col h-full bg-card/95 m-[1px] rounded-2xl">
        {/* Header with icon and title */}
        <div className="flex items-start gap-4 mb-4">
          {icon && (
            <motion.div 
              className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-primary border border-primary/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {icon}
            </motion.div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
              {title}
            </h3>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>

        {/* Custom children content (tech badges, buttons) */}
        <div className="flex-1 flex flex-col justify-end">
          {children}
        </div>

        {/* CTA Link */}
        {href && cta && (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
            whileHover={{ x: 4 }}
          >
            {cta}
            <svg className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
