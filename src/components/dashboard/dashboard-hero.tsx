"use client";

import {
  Activity,
  ArrowUpRight,
  Brain,
  Sparkles,
  Trophy,
} from "lucide-react";

import { Session } from "@/types/session";

interface DashboardHeroProps {
  averageScore: number;
  improvement: number;
  latestSession?: Session;
  sessionCount: number;
}

export function DashboardHero({
  averageScore,
  improvement,
  latestSession,
  sessionCount,
}: DashboardHeroProps) {
  return (
    <section
      className="
        relative
        overflow-hidden

        rounded-[40px]

        border border-white/10

        bg-gradient-to-br
        from-blue-500/[0.14]
        via-slate-950
        to-cyan-500/[0.10]

        p-7
        sm:p-8
        lg:p-10
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.25),transparent_30%)]

          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -right-32
          top-1/2

          h-[420px]
          w-[420px]

          -translate-y-1/2

          rounded-full

          bg-cyan-500/10

          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10

          grid gap-10

          xl:grid-cols-[1.2fr_0.8fr]
        "
      >
        {/* LEFT */}
        <div>
          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              border border-cyan-400/20

              bg-cyan-400/10

              px-4
              py-2

              text-sm
              font-medium
              text-cyan-300
            "
          >
            <Sparkles className="h-4 w-4" />

            AI Performance Command Center
          </div>

          <h1
            className="
              mt-6

              max-w-4xl

              text-4xl
              font-semibold
              leading-[1]
              tracking-tight

              sm:text-5xl
              xl:text-6xl
            "
          >
            Your basketball development
            intelligence system.
          </h1>

          <p
            className="
              mt-6

              max-w-2xl

              text-lg
              leading-8
              text-slate-300
            "
          >
            Analyze mechanics, track
            improvement trends, and receive
            elite AI-driven coaching
            insights tailored to your game.
          </p>

          <div
            className="
              mt-10

              flex flex-wrap
              gap-4
            "
          >
            {/* AVG SCORE */}
            <div
              className="
                flex
                items-center
                gap-3

                rounded-2xl

                border border-white/10

                bg-white/[0.04]

                px-5
                py-4
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-xl

                  bg-blue-500/10

                  text-blue-300
                "
              >
                <Activity className="h-5 w-5" />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    text-slate-400
                  "
                >
                  Current Average
                </p>

                <p
                  className="
                    text-xl
                    font-semibold
                  "
                >
                  {averageScore}/100
                </p>
              </div>
            </div>

            {/* IMPROVEMENT */}
            <div
              className="
                flex
                items-center
                gap-3

                rounded-2xl

                border border-white/10

                bg-white/[0.04]

                px-5
                py-4
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-xl

                  bg-emerald-500/10

                  text-emerald-300
                "
              >
                <ArrowUpRight className="h-5 w-5" />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    text-slate-400
                  "
                >
                  Latest Improvement
                </p>

                <p
                  className="
                    text-xl
                    font-semibold
                  "
                >
                  {improvement >= 0
                    ? `+${improvement}`
                    : improvement}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          className="
            relative

            flex
            flex-col
            justify-between

            rounded-[32px]

            border border-white/10

            bg-white/[0.04]

            p-8

            backdrop-blur-xl
          "
        >
          <div>
            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <div>
                <p
                  className="
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    text-slate-400
                  "
                >
                  Latest Analysis
                </p>

                <h3
                  className="
                    mt-3
                    text-3xl
                    font-semibold
                  "
                >
                  {latestSession?.feedback
                    .overallScore || 0}
                  /100
                </h3>
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

            <div
              className="
                mt-8
                space-y-4
              "
            >
              <div
                className="
                  rounded-2xl

                  border border-emerald-500/20

                  bg-emerald-500/10

                  p-4
                "
              >
                <p
                  className="
                    text-sm
                    text-emerald-300
                  "
                >
                  Top Strength
                </p>

                <h4
                  className="
                    mt-2
                    text-lg
                    font-medium
                  "
                >
                  {latestSession?.feedback
                    .strengths?.[0] ??
                    "No data yet"}
                </h4>
              </div>

              <div
                className="
                  rounded-2xl

                  border border-amber-500/20

                  bg-amber-500/10

                  p-4
                "
              >
                <p
                  className="
                    text-sm
                    text-amber-300
                  "
                >
                  Priority Focus
                </p>

                <h4
                  className="
                    mt-2
                    text-lg
                    font-medium
                  "
                >
                  {latestSession?.feedback
                    .priorityFocus ??
                    "No focus identified"}
                </h4>
              </div>
            </div>
          </div>

          <div
            className="
              mt-8

              flex
              items-center
              justify-between

              rounded-2xl

              border border-white/10

              bg-white/[0.03]

              p-5
            "
          >
            <div>
              <p
                className="
                  text-sm
                  text-slate-400
                "
              >
                Sessions Completed
              </p>

              <p
                className="
                  mt-1
                  text-2xl
                  font-semibold
                "
              >
                {sessionCount}
              </p>
            </div>

            <Trophy
              className="
                h-10
                w-10
                text-yellow-300
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}