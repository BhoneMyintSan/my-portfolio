"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface InfiniteMovingCardsProps {
  items: {
    name: string;
    icon?: React.ReactNode;
  }[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) {
  const speedMap = {
    slow: 40,
    normal: 25,
    fast: 15,
  };

  const duration = speedMap[speed];

  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <motion.div
        className="flex gap-4 py-4"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
        style={{
          width: "fit-content",
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={pauseOnHover ? { scale: 1.1, y: -5 } : undefined}
            className="flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur-sm px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
          >
            {item.icon && <span className="text-xl">{item.icon}</span>}
            <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
