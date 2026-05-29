import { ArrowUpRight } from "lucide-react";

import { GlassCard } from "@/components/ui/glass-card";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
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

        sm:p-7
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
            -top-20
            right-0

            h-40
            w-40

            rounded-full

            bg-blue-500/10

            blur-3xl
          "
        />
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
        {/* ICON */}
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center

            rounded-2xl

            bg-blue-500/10

            ring-1
            ring-blue-500/20
          "
        >
          {icon}
        </div>

        {/* CONTENT */}
        <div className="mt-6 flex-1">
          <div
            className="
              flex
              items-start
              justify-between

              gap-4
            "
          >
            <h3
              className="
                text-xl
                font-semibold
                tracking-tight
              "
            >
              {title}
            </h3>

            <ArrowUpRight
              className="
                h-5
                w-5

                shrink-0

                text-slate-500

                transition-transform
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </div>

          <p
            className="
              mt-4

              leading-7
              text-slate-400
            "
          >
            {description}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}