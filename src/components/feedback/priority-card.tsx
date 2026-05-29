import { ArrowRight, Target } from "lucide-react";

import { GlassCard } from "@/components/ui/glass-card";

interface PriorityCardProps {
  focus: string;
}

export function PriorityCard({
  focus,
}: PriorityCardProps) {
  return (
    <GlassCard
      className="
        w-full
        p-5
      "
    >
      <div className="space-y-4">
        {/* HEADER */}
        <div className="flex items-center gap-2">
          <Target
            className="
              h-4 w-4
              text-blue-400
            "
          />

          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]

              text-[hsl(var(--text-secondary))]
            "
          >
            Top Priority
          </p>
        </div>

        {/* CONTENT */}
        <h3
          className="
            min-h-[64px]

            text-xl
            font-medium
            leading-tight
          "
        >
          {focus}
        </h3>

        {/* FOOTER */}
        <div
          className="
            inline-flex
            items-center
            gap-2

            text-base
            font-medium

            text-[hsl(var(--primary))]
          "
        >
          Primary Focus

          <ArrowRight
            size={18}
          />
        </div>
      </div>
    </GlassCard>
  );
}