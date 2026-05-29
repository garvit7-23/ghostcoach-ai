"use client";

import Image from "next/image";
import { FeedbackReport } from "@/types/feedback";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FeedbackSection } from "./feedback-section";

import { ScoreRing } from "./score-ring";

type SessionDetailModalProps = {
  session: SessionRecord;

  children: React.ReactNode;
};

interface SessionRecord {
  id: string;
  image_url: string;
  created_at: string;

  feedback: FeedbackReport;
}

export function SessionDetailModal({
  session,
  children,
}: SessionDetailModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent
        className="
          max-h-[90vh]
          overflow-y-auto

          border-white/10

          bg-[#020817]

          p-0

          sm:max-w-5xl
        "
      >
        <div
          className="
            grid

            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* LEFT */}
          <div
            className="
              border-b border-white/10

              lg:border-b-0
              lg:border-r
            "
          >
            {/* IMAGE */}
            <div className="relative aspect-[4/5]">
              <Image
                src={session.image_url}
                alt="Session"
                fill
                className="object-cover"
              />
            </div>

            {/* SCORE */}
            <div
              className="
                flex flex-col
                items-center

                p-8
              "
            >
              <ScoreRing
                score={
                  session.feedback
                    .overallScore
                }
              />

              <div className="mt-6 text-center">
                <p
                  className="
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    text-blue-300
                  "
                >
                  Confidence
                </p>

                <p
                  className="
                    mt-3
                    text-2xl
                    font-semibold
                  "
                >
                  {
                    session.feedback
                      .confidence
                  }
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="p-8">
            {/* HEADER */}
            <div>
              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.25em]
                  text-blue-300
                "
              >
                AI Coaching Report
              </p>

              <h2
                className="
                  mt-4
                  text-4xl
                  font-semibold
                  tracking-tight
                "
              >
                Session Breakdown
              </h2>

              <p
                className="
                  mt-4
                  leading-7
                  text-slate-400
                "
              >
                Generated on{" "}
                {new Date(
                  session.created_at
                ).toLocaleString()}
              </p>
            </div>

            {/* CONTENT */}
            <div className="mt-10 space-y-10">
              {/* STRENGTHS */}
              <FeedbackSection
                title="Strengths"
                items={
                  session.feedback
                    .strengths
                }
                variant="success"
              />

              {/* IMPROVEMENTS */}
              <FeedbackSection
                title="Areas To Improve"
                items={
                  session.feedback
                    .improvements
                }
                variant="warning"
              />

              {/* PRIORITY */}
              <div
                className="
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
                  Priority Focus
                </p>

                <p
                  className="
                    mt-4
                    text-xl
                    font-medium
                    leading-8
                  "
                >
                  {
                    session.feedback
                      .priorityFocus
                  }
                </p>
              </div>

              {/* DRILL */}
              <div
                className="
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
                  {
                    session.feedback
                      .recommendedDrill
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}