import { GlassCard } from "@/components/ui/glass-card";

interface ConfidenceCardProps {
  confidence: string;
}

export function ConfidenceCard({
  confidence,
}: ConfidenceCardProps) {
  const normalizedConfidence =
    confidence.toLowerCase();

  const isHigh =
    normalizedConfidence.includes("high");

  const isMedium =
    normalizedConfidence.includes("medium");

  const colorClass = isHigh
    ? "text-[hsl(var(--success))]"
    : isMedium
    ? "text-yellow-400"
    : "text-red-400";

  const description = isHigh
    ? "AI is highly confident in this analysis"
    : isMedium
    ? "AI has moderate confidence in this analysis"
    : "AI has limited confidence in this analysis";

  return (
    <GlassCard
      className="
        w-full
        p-5
      "
    >
      <div className="space-y-4">
        {/* HEADER */}
        <p
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.18em]

            text-[hsl(var(--text-secondary))]
          "
        >
          Confidence Level
        </p>

        {/* CONTENT */}
        <div className="flex items-start gap-4">
          {/* BARS */}
          <div className="flex items-end gap-1 pt-1">
            <div
              className={`
                h-3 w-2 rounded-sm
                ${
                  normalizedConfidence !==
                  "low"
                    ? "bg-blue-500"
                    : "bg-slate-600"
                }
              `}
            />

            <div
              className={`
                h-5 w-2 rounded-sm
                ${
                  isHigh || isMedium
                    ? "bg-blue-500"
                    : "bg-slate-600"
                }
              `}
            />

            <div
              className={`
                h-8 w-2 rounded-sm
                ${
                  isHigh
                    ? "gradient-primary"
                    : "bg-slate-600"
                }
              `}
            />
          </div>

          {/* TEXT */}
          <div>
            <h3
              className={`
                text-3xl
                font-semibold
                ${colorClass}
              `}
            >
              {confidence}
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-relaxed

                text-[hsl(var(--text-secondary))]
              "
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}