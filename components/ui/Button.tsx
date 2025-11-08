"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  asChild,
  href,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-bebas uppercase tracking-wider inline-flex items-center justify-center relative overflow-hidden group rounded-full";

  const variants = {
    primary:
      "bg-primary text-dark hover:shadow-lg hover:shadow-primary/50",
    outline:
      "border-2 border-primary text-primary hover:border-primary-dark",
    ghost: "text-primary",
  };

  const sizes = {
    sm: "text-base px-6 py-2",
    md: "text-lg px-8 py-4",
    lg: "text-xl px-12 py-6",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {/* Animated background on hover */}
      {variant === "primary" && (
        <motion.span
          className="absolute inset-0 bg-primary-dark"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {variant === "outline" && (
        <motion.span
          className="absolute inset-0 bg-primary"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {variant === "ghost" && (
        <motion.span
          className="absolute inset-0 bg-primary/10"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Content */}
      <span className="relative z-10 group-hover:text-dark transition-colors duration-300">
        {children}
      </span>

      {/* Shine effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%", skewX: -20 }}
        whileHover={{ x: "200%" }}
        transition={{ duration: 0.6 }}
      />
    </>
  );

  if (asChild && href) {
    return (
      <Link href={href} className="inline-block">
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={classes}
        >
          {content}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
}
