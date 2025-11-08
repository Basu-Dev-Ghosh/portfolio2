import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-dark-light rounded-2xl p-8 border border-gray-dark/20",
        hover && "hover:border-primary/50 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
