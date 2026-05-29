import { GlassCard } from "@/components/ui/glass-card";

interface ScoreCardProps {
  score: number;
}

export function ScoreCard({
  score,
}: ScoreCardProps) {
  const normalizedScore = (
    score / 10
  ).toFixed(1);

  const label =
    score >= 90
      ? "Elite Performance"
      : score >= 80
      ? "Strong Performance"
      : score >= 70
      ? "Developing Well"
      : "Needs Improvement";

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
          <div
            className="
              h-2 w-2
              rounded-full
              bg-[hsl(var(--primary))]
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
            Overall Score
          </p>
        </div>

        {/* SCORE */}
        <div className="relative mx-auto h-28 w-28">
          <div
            className="
              absolute inset-0
              rounded-full

              bg-[conic-gradient(from_180deg,var(--gradient-primary))]

              p-[10px]
            "
          >
            <div
              className="
                flex h-full w-full
                flex-col items-center justify-center

                rounded-full

                bg-[hsl(var(--background))]
              "
            >
              <span
                className="
                  text-5xl
                  font-semibold
                  leading-none
                "
              >
                {normalizedScore}
              </span>

              <span
                className="
                  mt-1
                  text-base
                  text-[hsl(var(--text-secondary))]
                "
              >
                /10
              </span>
            </div>
          </div>
        </div>

        {/* LABEL */}
        <div className="flex items-center gap-2">
          <div
            className="
              h-2.5 w-2.5
              rounded-full

              bg-[hsl(var(--success))]
            "
          />

          <p
            className="
              text-lg
              font-medium

              text-[hsl(var(--success))]
            "
          >
            {label}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}