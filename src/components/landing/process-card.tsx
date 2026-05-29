import { ArrowRight } from "lucide-react";

import { GlassCard } from "@/components/ui/glass-card";

type ProcessCardProps = {
  step: string;
  title: string;
  description: string;
};

export function ProcessCard({
  step,
  title,
  description,
}: ProcessCardProps) {
  return (
    <GlassCard
      className="
        group
        relative

        flex
        h-full
        flex-col

        overflow-hidden

        p-6

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-blue-500/20

        hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]

        sm:p-8
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-300

          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -right-10
            -top-10

            h-40
            w-40

            rounded-full

            bg-blue-500/10

            blur-3xl
          "
        />
      </div>

      {/* BACKGROUND NUMBER */}
      <div
        className="
          absolute
          right-6
          top-4

          text-7xl
          font-semibold
          tracking-tight

          text-white/[0.07]
        "
      >
        {step}
      </div>

      <div
        className="
          relative
          z-10

          flex
          h-full
          flex-col
        "
      >
        {/* STEP BADGE */}
        <div
          className="
            inline-flex
            w-fit
            items-center

            rounded-full

            border border-blue-500/20

            bg-blue-500/10

            px-4 py-2

            text-xs
            font-medium
            uppercase
            tracking-[0.2em]

            text-blue-300
          "
        >
          Step {step}
        </div>

        {/* TITLE */}
        <h3
          className="
            mt-6

            text-2xl
            font-semibold
            tracking-tight
          "
        >
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-4

            flex-1

            leading-7
            text-slate-400
          "
        >
          {description}
        </p>

        {/* FOOTER */}
        <div
          className="
            mt-8

            inline-flex
            items-center
            gap-2

            text-sm
            font-medium

            text-blue-300
          "
        >
          Continue

          <ArrowRight
            className="
              h-4
              w-4

              transition-transform
              duration-300

              group-hover:translate-x-1
            "
          />
        </div>
      </div>
    </GlassCard>
  );
}