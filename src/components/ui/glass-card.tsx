import { cn } from "@/lib/utils";

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
}

export function GlassCard({
  className,
  children,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
          glass-card

          rounded-[var(--radius-xl)]

          shadow-[var(--shadow-card)]

          backdrop-blur-xl
        `,
        className
      )}
    >
      {children}
    </div>
  );
}