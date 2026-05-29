"use client";

import { Brain } from "lucide-react";

export function EmptyDashboardState() {
  return (
    <section
      className="
        rounded-[32px]

        border border-dashed
        border-white/10

        bg-white/[0.02]

        p-8
        sm:p-10
        lg:p-14

        text-center
      "
    >
      {/* ICON */}
      <div
        className="
          mx-auto

          flex
          h-20
          w-20
          items-center
          justify-center

          rounded-3xl

          border border-blue-500/20

          bg-blue-500/10

          text-blue-300

          shadow-[0_0_40px_rgba(59,130,246,0.12)]
        "
      >
        <Brain className="h-10 w-10" />
      </div>

      {/* CONTENT */}
      <h2
        className="
          mt-8

          text-2xl
          font-semibold

          sm:text-3xl
        "
      >
        No performance data yet.
      </h2>

      <p
        className="
          mx-auto
          mt-4

          max-w-2xl

          text-base
          leading-8
          text-slate-400

          sm:text-lg
        "
      >
        Upload your first basketball
        session to unlock AI-powered
        performance analytics,
        development tracking,
        and personalized coaching
        intelligence.
      </p>

      {/* CTA HINT */}
      <div
        className="
          mt-8

          inline-flex
          items-center

          rounded-full

          border border-blue-500/20

          bg-blue-500/10

          px-4
          py-2

          text-sm
          font-medium
          text-blue-300
        "
      >
        Start by uploading a session
      </div>
    </section>
  );
}