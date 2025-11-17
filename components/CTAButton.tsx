"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export function CTAButton({
  href,
  children,
  className,
  variant = "primary",
  onClick,
}: CTAButtonProps) {
  const buttonClasses = cn(
    "text-lg px-8 py-6 rounded-2xl font-semibold transition-all duration-200",
    variant === "primary"
      ? "bg-[#EA5D19] text-white hover:bg-[#d45416] shadow-lg hover:shadow-xl"
      : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#11110E]",
    className
  );

  const content = (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button className={buttonClasses} onClick={onClick} asChild={!!href}>
        {href ? <Link href={href}>{children}</Link> : children}
      </Button>
    </motion.div>
  );

  return content;
}
