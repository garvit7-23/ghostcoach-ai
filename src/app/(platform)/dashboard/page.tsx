"use client";

import { useEffect, useMemo, useState } from "react";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardHero } from "@/components/dashboard/dashboard-hero";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { RecentSessionsCard } from "@/components/dashboard/recent-sessions-card";
import { EmptyDashboardState } from "@/components/dashboard/empty-dashboard-state";

import { getDashboardData } from "@/lib/dashboard/get-dashboard-data";

import {
  getAverageScore,
  getBestScore,
  getChartData,
  getPrimaryFocus,
} from "@/lib/dashboard/analytics";

import { Session } from "@/types/session";

export default function DashboardPage() {
  const [sessions, setSessions] =
    useState<Session[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data =
          await getDashboardData();

        setSessions(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  const averageScore =
    getAverageScore(sessions);

  const bestScore =
    getBestScore(sessions);

  const focus =
    getPrimaryFocus(sessions);

  const chartData =
    getChartData(sessions);

  const latestSession =
    sessions[sessions.length - 1];

  const improvement =
    useMemo(() => {
      if (sessions.length < 2) return 0;

      const latest =
        sessions[sessions.length - 1]
          .feedback.overallScore;

      const previous =
        sessions[sessions.length - 2]
          .feedback.overallScore;

      return latest - previous;
    }, [sessions]);

  return (
    <DashboardShell>
      <div className="space-y-8">
        {/* HERO */}
        <DashboardHero
          averageScore={averageScore}
          improvement={improvement}
          latestSession={latestSession}
          sessionCount={sessions.length}
        />

        {/* KPI STATS */}
        <DashboardStats
          averageScore={averageScore}
          bestScore={bestScore}
          focus={focus}
          sessionCount={sessions.length}
        />

        {/* ANALYTICS */}
        <section
          className="
            grid gap-6

            xl:grid-cols-[1.2fr_0.8fr]
          "
        >
          <PerformanceChart
            data={chartData}
          />

          <RecentSessionsCard
            sessions={sessions}
          />
        </section>

        {/* EMPTY STATE */}
        {!loading &&
          sessions.length === 0 && (
            <EmptyDashboardState />
          )}
      </div>
    </DashboardShell>
  );
}