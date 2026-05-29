"use client";

import {
  Brain,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { ScoreCard } from "@/components/feedback/score-card";
import { PriorityCard } from "@/components/feedback/priority-card";
import { ConfidenceCard } from "@/components/feedback/confidence-card";

import type { FeedbackReport as FeedbackData } from "@/types/feedback";

interface Props {
  feedback: FeedbackData | null;
}

export function FeedbackReport({
  feedback,
}: Props) {
  if (!feedback) {
    return (
      <div
        className="
          rounded-[32px]

          border border-white/10

          bg-white/[0.03]

          p-8

          backdrop-blur-xl
        "
      >
        <h2
          className="
            text-3xl
            font-semibold
            tracking-tight
          "
        >
          AI Feedback Report
        </h2>

        <p
          className="
            mt-4
            text-slate-400
          "
        >
          Upload a basketball session to
          generate personalized AI coaching
          feedback.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        rounded-[32px]

        border border-white/10

        bg-white/[0.025]

        p-6

        backdrop-blur-xl

        sm:p-8
      "
    >
      {/* HEADER */}
      <div
        className="
          flex
          flex-col
          gap-6

          lg:flex-row
          lg:items-start
          lg:justify-between
        "
      >
        <div>
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
            <Sparkles className="h-4 w-4" />

            Analysis Complete
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-semibold
              tracking-tight
            "
          >
            AI Coaching Report
          </h2>

          <p
            className="
              mt-3

              max-w-2xl

              text-slate-400
            "
          >
            Personalized basketball analysis
            generated from your uploaded
            session.
          </p>
        </div>

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center

            rounded-2xl

            bg-blue-500/10

            text-blue-300
          "
        >
          <Brain className="h-8 w-8" />
        </div>
      </div>

      {/* PRIMARY METRICS */}
      <div
        className="
          mt-8

          grid gap-4

          lg:grid-cols-3
        "
      >
        <ScoreCard
          score={feedback.overallScore}
        />

        <PriorityCard
          focus={feedback.priorityFocus}
        />

        <ConfidenceCard
          confidence={feedback.confidence}
        />
      </div>

      {/* STRENGTHS */}
      <section className="mt-10">
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <CheckCircle2
            className="
              h-6
              w-6
              text-emerald-400
            "
          />

          <h3
            className="
              text-2xl
              font-semibold
            "
          >
            Strengths
          </h3>
        </div>

        <div
          className="
            mt-5

            grid gap-4
          "
        >
          {feedback.strengths.map(
            (strength) => (
              <div
                key={strength}
                className="
                  flex
                  items-start
                  gap-3

                  rounded-2xl

                  border border-emerald-500/20

                  bg-emerald-500/[0.06]

                  p-4
                "
              >
                <CheckCircle2
                  className="
                    mt-0.5

                    h-5
                    w-5

                    shrink-0

                    text-emerald-400
                  "
                />

                <p>{strength}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* IMPROVEMENTS */}
      <section className="mt-10">
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <TrendingUp
            className="
              h-6
              w-6
              text-amber-400
            "
          />

          <h3
            className="
              text-2xl
              font-semibold
            "
          >
            Priority Improvements
          </h3>
        </div>

        <div
          className="
            mt-5

            space-y-4
          "
        >
          {feedback.improvements.map(
            (
              improvement,
              index
            ) => (
              <div
                key={improvement}
                className="
                  flex
                  items-start
                  gap-4

                  rounded-2xl

                  border border-amber-500/20

                  bg-amber-500/[0.06]

                  p-4
                "
              >
                <div
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center

                    rounded-full

                    bg-amber-500/10

                    text-sm
                    font-semibold
                    text-amber-300
                  "
                >
                  {index + 1}
                </div>

                <p>{improvement}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* DRILL */}
      <section
        className="
          mt-10

          rounded-3xl

          border border-blue-500/20

          bg-blue-500/[0.06]

          p-6
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
          Recommended Drill
        </p>

        <h3
          className="
            mt-4

            text-xl
            font-semibold
          "
        >
          {feedback.recommendedDrill}
        </h3>

        <p
          className="
            mt-3

            text-sm
            leading-7

            text-slate-400
          "
        >
          Focus on this drill consistently
          to accelerate improvement in your
          primary development area.
        </p>
      </section>
    </div>
  );
}