"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  className?: string;
}

export default function SlideIn({
  children,
  direction = "up",
  delay = 0,
  className,
}: SlideInProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directions = {
    left: inView ? "translate-x-0" : "-translate-x-12",
    right: inView ? "translate-x-0" : "translate-x-12",
    up: inView ? "translate-y-0" : "translate-y-12",
    down: inView ? "translate-y-0" : "-translate-y-12",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        inView ? "opacity-100" : "opacity-0",
        directions[direction],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
