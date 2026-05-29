import { GlassCard } from "@/components/ui/glass-card";

type StatsCardProps = {
  label: string;
  value: string;
  description: string;
};

export function StatsCard({
  label,
  value,
  description,
}: StatsCardProps) {
  return (
    <GlassCard
      className="
        p-6
      "
    >
      <p
        className="
          text-sm
          uppercase
          tracking-[0.25em]
          text-slate-500
        "
      >
        {label}
      </p>

      <div className="mt-5">
        <p
          className="
            text-5xl
            font-semibold
            tracking-tight
          "
        >
          {value}
        </p>

        <p
          className="
            mt-3
            text-slate-400
          "
        >
          {description}
        </p>
      </div>
    </GlassCard>
  );
}