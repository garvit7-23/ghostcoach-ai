"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";

import { SessionDetailModal } from "@/components/sessions/session-detail-modal";

import { getSessions } from "@/lib/sessions/session-service";

import { FeedbackReport } from "@/types/feedback";

interface SessionRecord {
  id: string;
  image_url: string;
  created_at: string;

  feedback: FeedbackReport;
}

export default function SessionsPage() {
  const [sessions, setSessions] =
    useState<SessionRecord[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadSessions() {
      try {
        const data =
          await getSessions();

        setSessions(data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadSessions();
  }, []);

  return (
    <DashboardShell>
      <div>
        {/* HEADER */}
        <div className="mb-10">
          <p
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-blue-300
            "
          >
            Coaching Sessions
          </p>

          <h1
            className="
              mt-4
              text-5xl
              font-semibold
              tracking-tight
            "
          >
            Session History
          </h1>

          <p
            className="
              mt-5
              max-w-3xl

              text-lg
              leading-8
              text-slate-400
            "
          >
            Review your previous AI coaching
            sessions and track your basketball
            development over time.
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <div
            className="
              flex min-h-[300px]
              items-center
              justify-center
            "
          >
            Loading sessions...
          </div>
        )}

        {/* EMPTY */}
        {!loading &&
          sessions.length === 0 && (
            <div
              className="
                rounded-[32px]

                border border-white/10

                bg-white/[0.03]

                p-12

                text-center
              "
            >
              <h2
                className="
                  text-3xl
                  font-semibold
                "
              >
                No Sessions Yet
              </h2>

              <p
                className="
                  mt-4
                  text-slate-400
                "
              >
                Upload your first basketball
                form image to begin AI coaching.
              </p>
            </div>
          )}

        {/* GRID */}
        {!loading &&
          sessions.length > 0 && (
            <div
              className="
                grid gap-6

                md:grid-cols-2
                xl:grid-cols-3
              "
            >
              {sessions.map((session) => (
               <SessionDetailModal
                 key={session.id}
                 session={session}
               >
                 <div
                   className="
                     cursor-pointer
                     overflow-hidden

                     rounded-[32px]

                     border border-white/10

                     bg-white/[0.03]

                     transition-all

                     hover:-translate-y-1
                     hover:border-blue-500/20
                   "
                 >
                  {/* IMAGE */}
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={session.image_url}
                      alt="Session image"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div
                      className="
                        flex items-center
                        justify-between
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

                      <p
                        className="
                          text-3xl
                          font-semibold
                        "
                      >
                        {
                          session.feedback
                            .overallScore
                        }
                      </p>
                    </div>
                    
                    {/* PRIORITY */}
                    <div className="mt-6">
                      <p
                        className="
                          text-sm
                          uppercase
                          tracking-[0.25em]
                          text-slate-500
                        "
                      >
                        Priority Focus
                      </p>

                      <p
                        className="
                          mt-3
                          leading-7
                          text-slate-300
                        "
                      >
                        {
                          session.feedback
                            .priorityFocus
                        }
                      </p>
                    </div>

                    {/* DRILL */}
                    <div className="mt-6">
                      <p
                        className="
                          text-sm
                          uppercase
                          tracking-[0.25em]
                          text-slate-500
                        "
                      >
                        Recommended Drill
                      </p>

                      <p
                        className="
                          mt-3
                          leading-7
                          text-slate-300
                        "
                      >
                        {
                          session.feedback
                            .recommendedDrill
                        }
                      </p>
                    </div>

                    {/* FOOTER */}
                    <div
                      className="
                        mt-8
                        flex items-center
                        justify-between
                      "
                    >
                      <p
                        className="
                          text-sm
                          text-slate-500
                        "
                      >
                        {new Date(
                          session.created_at
                        ).toLocaleDateString()}
                      </p>

                      <div
                        className="
                          rounded-full

                          border border-green-500/20

                          bg-green-500/10

                          px-3 py-1

                          text-xs
                          font-medium
                          text-green-300
                        "
                      >
                        {
                          session.feedback
                            .confidence
                        }{" "}
                        Confidence
                      </div>
                    </div>
                  </div>
                </div>
                
  </SessionDetailModal>
              ))}
            </div>
          )}
      </div>
    </DashboardShell>
  );
}