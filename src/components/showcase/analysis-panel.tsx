import {
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

import { GlassCard } from "@/components/ui/glass-card";

import { FeedbackList } from "./feedback-list";
import { ScoreRing } from "./score-ring";

export function AnalysisPanel() {
  return (
    <GlassCard
      className="
        group
        relative
        overflow-hidden

        p-6
        sm:p-8
        lg:p-10
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          right-0
          top-0

          h-72
          w-72

          rounded-full

          bg-blue-500/10

          blur-3xl
        "
      />

      <div className="relative z-10">
        {/* HEADER */}
        <div
          className="
            flex
            flex-col
            gap-8

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border border-blue-500/20

                bg-blue-500/10

                px-4 py-2

                text-sm
                font-medium
                text-blue-300
              "
            >
              <BrainCircuit className="h-4 w-4" />

              AI Coaching Analysis
            </div>

            {/* STATUS */}
            <div
              className="
                mt-4

                inline-flex
                items-center
                gap-2

                rounded-full

                border border-green-500/20

                bg-green-500/10

                px-4 py-2

                text-sm
                font-medium

                text-green-300
              "
            >
              <CheckCircle2 className="h-4 w-4" />

              Analysis Complete
            </div>

            {/* TITLE */}
            <h3
              className="
                mt-6

                text-2xl
                font-semibold
                tracking-tight

                sm:text-3xl
                lg:text-4xl
              "
            >
              Shooting Form Evaluation
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                mt-4

                max-w-2xl

                leading-7
                text-slate-400
              "
            >
              AI analysis based on posture,
              release timing, elbow alignment,
              lower body balance, and landing
              mechanics.
            </p>
          </div>

          {/* SCORE */}
          <div className="mx-auto lg:mx-0">
            <ScoreRing score={8.6} />
          </div>
        </div>

        {/* FEEDBACK */}
        <div
          className="
            mt-12

            grid gap-8

            xl:grid-cols-2
          "
        >
          <FeedbackList
            title="What You're Doing Well"
            items={[
              "Strong elbow alignment during release mechanics.",
              "Excellent balance through shooting motion.",
              "Consistent wrist follow-through positioning.",
            ]}
          />

          <FeedbackList
            title="Areas to Improve"
            variant="warning"
            items={[
              "Landing balance shifts slightly left after release.",
              "Knee bend depth becomes inconsistent under motion.",
              "Off-hand positioning creates minor shot drift.",
            ]}
          />
        </div>

        {/* PRIORITY SECTION */}
        <div
          className="
            mt-12

            grid gap-6

            xl:grid-cols-[1.25fr_0.75fr]
          "
        >
          {/* PRIORITY FIX */}
          <div
            className="
              rounded-3xl

              border border-blue-500/20

              bg-blue-500/[0.06]

              p-6

              transition-all
              duration-300

              hover:border-blue-500/30
              hover:bg-blue-500/[0.08]
            "
          >
            <p
              className="
                text-sm
                uppercase
                tracking-[0.25em]

                text-blue-300
              "
            >
              Priority Fix
            </p>

            <h4
              className="
                mt-4

                text-2xl
                font-semibold
                tracking-tight
              "
            >
              Improve landing stability after
              shot release.
            </h4>

            <p
              className="
                mt-4

                leading-7
                text-slate-300
              "
            >
              Focus on maintaining equal weight
              distribution through the release
              and landing sequence.
            </p>
          </div>

          {/* DRILL */}
          <div
            className="
              rounded-3xl

              border border-white/10

              bg-white/[0.03]

              p-6

              transition-all
              duration-300

              hover:border-white/15
              hover:bg-white/[0.05]
            "
          >
            <p
              className="
                text-sm
                uppercase
                tracking-[0.25em]

                text-slate-400
              "
            >
              Recommended Drill
            </p>

            <h4
              className="
                mt-4

                text-2xl
                font-semibold
                tracking-tight
              "
            >
              Single-Leg Form Shooting
            </h4>

            <p
              className="
                mt-4

                leading-7
                text-slate-300
              "
            >
              Perform controlled form shots
              while stabilizing on the landing
              foot to improve balance recovery.
            </p>

            <div
              className="
                mt-6

                inline-flex
                items-center

                rounded-full

                border border-green-500/20

                bg-green-500/10

                px-4 py-2

                text-sm
                font-medium

                text-green-300
              "
            >
              Confidence Level: High
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}