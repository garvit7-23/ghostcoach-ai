import * as React from "react";

import { cn } from "@/lib/utils";

type GradientButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
  };

export function GradientButton({
  children,
  className,
  ...props
}: GradientButtonProps) {
  return (
    <button
      className={cn(
        `
        inline-flex items-center justify-center
        rounded-xl
        px-6 py-3
        text-sm font-medium
        text-white
        transition-all duration-300

        bg-gradient-to-r
        from-blue-500
        to-cyan-400

        hover:scale-[1.02]
        hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]

        active:scale-[0.98]
        `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}