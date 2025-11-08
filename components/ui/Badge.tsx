import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-dark-light text-gray border border-gray-dark/20",
    primary: "bg-primary text-dark",
    outline: "border border-primary text-primary bg-transparent",
  };

  return (
    <span
      className={cn(
        "inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
