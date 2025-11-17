import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ children, className, dark = false }: SectionProps) {
  return (
    <section
      className={cn(
        "py-8 sm:py-12 lg:py-16",
        dark ? "bg-[#11110E] text-white" : "bg-white text-[#11110E]",
        className
      )}
    >
      {children}
    </section>
  );
}
