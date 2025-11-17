import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "full";
  noPadding?: boolean;
}

export function Container({
  children,
  className,
  size = "default",
  noPadding = false,
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-7xl",
    narrow: "max-w-4xl",
    wide: "max-w-[1600px]",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto",
        sizeClasses[size],
        !noPadding && "px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}
