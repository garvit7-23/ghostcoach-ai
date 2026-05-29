import { SectionHeading } from "@/components/features/section-heading";

import { AnalysisPanel } from "./analysis-panel";

export function AIShowcase() {
  return (
    <section
      id="showcase"
      className="
        relative

        overflow-hidden

        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0

          pointer-events-none
        "
      >
        <div
          className="
            absolute

            left-1/2
            top-0

            h-[500px]
            w-[500px]

            -translate-x-1/2

            rounded-full

            bg-blue-500/[0.05]

            blur-3xl
          "
        />
      </div>

      <div className="container-width">
        <SectionHeading
          badge="AI Coaching Intelligence"
          title="Real-Time Basketball Performance Analysis"
          description="
          GhostCoach AI transforms a single
          upload into structured coaching
          intelligence designed to accelerate
          skill development.
          "
        />

        <div
          className="
            relative

            mt-12
            sm:mt-16
          "
        >
          <AnalysisPanel />
        </div>
      </div>
    </section>
  );
}