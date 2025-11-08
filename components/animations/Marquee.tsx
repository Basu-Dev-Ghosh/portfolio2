"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

export default function Marquee({
  children,
  className,
  speed = "normal",
}: MarqueeProps) {
  const speeds = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  };

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className={cn("inline-block animate-marquee", className)}
        style={{ animationDuration: speeds[speed] }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
