"use client";

import { Target } from "lucide-react";

import { Session } from "@/types/session";

interface RecentSessionsCardProps {
  sessions: Session[];
}

export function RecentSessionsCard({
  sessions,
}: RecentSessionsCardProps) {
  const recentSessions = sessions
    .slice()
    .reverse()
    .slice(0, 5);

  return (
    <div
      className="
        rounded-[32px]

        border border-white/10

        bg-white/[0.025]
        backdrop-blur-xl

        p-6
        sm:p-8

        transition-all
        duration-300

        hover:border-white/15
        hover:bg-white/[0.04]
      "
    >
      {/* HEADER */}
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
            Session Intelligence
          </p>

          <h2
            className="
              mt-3
              text-2xl
              font-semibold

              sm:text-3xl
            "
          >
            Recent Sessions
          </h2>
        </div>

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-2xl

            bg-blue-500/10

            text-blue-300
          "
        >
          <Target className="h-6 w-6" />
        </div>
      </div>

      {/* EMPTY STATE */}
      {recentSessions.length === 0 ? (
        <div
          className="
            mt-8

            rounded-2xl

            border border-dashed
            border-white/10

            bg-white/[0.02]

            p-8

            text-center
          "
        >
          <p
            className="
              text-base
              font-medium
              text-slate-300
            "
          >
            No sessions yet
          </p>

          <p
            className="
              mt-2
              text-sm
              text-slate-500
            "
          >
            Upload your first basketball
            session to start tracking
            progress.
          </p>
        </div>
      ) : (
        <div className="mt-8 space-y-5">
          {recentSessions.map(
            (session) => (
              <div
                key={session.id}
                className="
                  rounded-2xl

                  border border-white/10

                  bg-white/[0.03]

                  p-5

                  transition-all
                  duration-300

                  hover:-translate-y-1

                  hover:border-blue-500/30
                  hover:bg-blue-500/[0.05]

                  hover:shadow-[0_10px_40px_rgba(59,130,246,0.08)]
                "
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between

                    gap-4
                  "
                >
                  <div className="min-w-0">
                    <h3
                      className="
                        text-lg
                        font-medium
                      "
                    >
                      Basketball Analysis
                    </h3>

                    <p
                      className="
                        mt-2

                        line-clamp-2

                        text-sm
                        text-slate-400
                      "
                    >
                      {
                        session.feedback
                          .priorityFocus
                      }
                    </p>
                  </div>

                  <div
                    className="
                      shrink-0

                      rounded-xl

                      bg-blue-500/10

                      px-4
                      py-2

                      text-lg
                      font-semibold
                      text-blue-300
                    "
                  >
                    {
                      session.feedback
                        .overallScore
                    }
                  </div>
                </div>

                {session.feedback
                  .strengths?.length >
                  0 && (
                  <div
                    className="
                      mt-5

                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {session.feedback.strengths
                      .slice(0, 2)
                      .map(
                        (strength) => (
                          <span
                            key={strength}
                            className="
                              rounded-full

                              border border-emerald-500/20

                              bg-emerald-500/10

                              px-3
                              py-1

                              text-xs
                              font-medium
                              text-emerald-300
                            "
                          >
                            {strength}
                          </span>
                        )
                      )}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}