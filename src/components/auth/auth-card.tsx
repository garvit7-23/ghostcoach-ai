import { GlassCard } from "@/components/ui/glass-card";

type AuthCardProps = {
  children: React.ReactNode;
};

export function AuthCard({
  children,
}: AuthCardProps) {
  return (
    <GlassCard
      className="
        p-8
      "
    >
      {children}
    </GlassCard>
  );
}