"use client";

import { InsightCard } from "@/components/dashboard/insight-card";

interface DashboardStatsProps {
  averageScore: number;
  bestScore: number;
  focus: string;
  sessionCount: number;
}

export function DashboardStats({
  averageScore,
  bestScore,
  focus,
  sessionCount,
}: DashboardStatsProps) {
  return (
    <section
      className="
        grid gap-6

        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      <InsightCard
        title="Total Sessions"
        value={String(sessionCount)}
        description="AI coaching analyses completed."
      />

      <InsightCard
        title="Average Score"
        value={`${averageScore}`}
        description="Overall mechanics consistency."
      />

      <InsightCard
        title="Best Score"
        value={`${bestScore}`}
        description="Highest performance achieved."
      />

      <InsightCard
        title="Current Focus"
        value={focus || "No focus yet"}
        description="Most impactful improvement area."
      />
    </section>
  );
}