"use client";

import {
  Brain,
  CheckCircle2,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import { FeedbackReport } from "@/types/feedback";

interface UploadFeedbackReportProps {
  feedback: FeedbackReport | null;
}

export function UploadFeedbackReport({
  feedback,
}: UploadFeedbackReportProps) {
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
            leading-7
            text-slate-400
          "
        >
          No feedback generated yet.
        </p>
      </div>
    );
  }

  const performanceLabel =
    feedback.overallScore >= 90
      ? "Elite Mechanics"
      : feedback.overallScore >= 80
      ? "Strong Performance"
      : feedback.overallScore >= 70
      ? "Developing Well"
      : "Needs Improvement";

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
              text-slate-400
            "
          >
            Personalized basketball
            performance analysis generated
            from your uploaded session.
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

      {/* SCORE HERO */}
      <div
        className="
          mt-8

          rounded-[28px]

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
          Overall Score
        </p>

        <div
          className="
            mt-4

            flex
            flex-wrap
            items-end
            gap-4
          "
        >
          <h2
            className="
              text-6xl
              font-semibold
              tracking-tight
            "
          >
            {feedback.overallScore}
          </h2>

          <div
            className="
              mb-2

              rounded-full

              border border-blue-500/20

              bg-blue-500/10

              px-4 py-2

              text-sm
              font-medium
              text-blue-300
            "
          >
            {performanceLabel}
          </div>
        </div>
      </div>

      {/* STRENGTHS */}
      <div className="mt-10">
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
            space-y-4
          "
        >
          {feedback.strengths.map(
            (item) => (
              <div
                key={item}
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

                <p
                  className="
                    text-slate-200
                  "
                >
                  {item}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* IMPROVEMENTS */}
      <div className="mt-10">
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
            (item, index) => (
              <div
                key={item}
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

                <p
                  className="
                    text-slate-200
                  "
                >
                  {item}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* PRIORITY FOCUS */}
      <div
        className="
          mt-10

          rounded-3xl

          border border-blue-500/20

          bg-blue-500/[0.06]

          p-6
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <Target
            className="
              h-6
              w-6
              text-blue-300
            "
          />

          <p
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-blue-300
            "
          >
            Priority Focus
          </p>
        </div>

        <p
          className="
            mt-4

            text-xl
            font-medium
            leading-8
          "
        >
          {feedback.priorityFocus}
        </p>
      </div>

      {/* COACH RECOMMENDATION */}
      <div
        className="
          mt-8

          rounded-3xl

          border border-white/10

          bg-white/[0.03]

          p-6
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

        <p
          className="
            mt-4

            text-xl
            font-medium
            leading-8
          "
        >
          {feedback.recommendedDrill}
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
          Confidence: {feedback.confidence}
        </div>
      </div>
    </div>
  );
}