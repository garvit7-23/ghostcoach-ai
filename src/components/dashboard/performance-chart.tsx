"use client";

import {
  Activity,
} from "lucide-react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  data: {
    session: string;
    score: number;
  }[];
}

interface TooltipProps {
  active?: boolean;
  payload?: {
    value: number;
  }[];
  label?: string;
}

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps) {
  if (
    !active ||
    !payload ||
    !payload.length
  ) {
    return null;
  }

  const score = payload[0].value;

  const performanceLabel =
    score >= 90
      ? "Elite Performance"
      : score >= 75
      ? "Strong Progress"
      : score >= 60
      ? "Developing Well"
      : "Needs Improvement";

  return (
    <div
      className="
        rounded-2xl

        border border-white/10

        bg-[#020817]/95

        px-4 py-3

        shadow-2xl
        shadow-blue-500/10

        backdrop-blur-xl
      "
    >
      <p
        className="
          text-xs
          uppercase
          tracking-[0.2em]

          text-slate-500
        "
      >
        {label}
      </p>

      <div className="mt-2">
        <p
          className="
            text-3xl
            font-semibold
            text-white
          "
        >
          {score}
        </p>

        <p
          className="
            mt-1
            text-sm
            text-blue-300
          "
        >
          {performanceLabel}
        </p>
      </div>
    </div>
  );
}

export function PerformanceChart({
  data,
}: Props) {
  const bestScore = Math.max(
    ...data.map((item) => item.score),
    0
  );

  const latestScore =
    data[data.length - 1]?.score || 0;

  const previousScore =
    data[data.length - 2]?.score || 0;

  const improvement =
    latestScore - previousScore;

  const averageScore =
    data.length > 0
      ? Math.round(
          data.reduce(
            (acc, item) =>
              acc + item.score,
            0
          ) / data.length
        )
      : 0;

  if (data.length === 0) {
    return (
      <div
        className="
          flex
          h-[320px]
          flex-col
          items-center
          justify-center

          rounded-[28px]

          border border-dashed
          border-white/10

          bg-white/[0.02]

          text-center
        "
      >
        <Activity
          className="
            h-10
            w-10
            text-slate-500
          "
        />

        <h3
          className="
            mt-5
            text-xl
            font-semibold
            text-white
          "
        >
          No analytics yet
        </h3>

        <p
          className="
            mt-2
            max-w-sm

            text-sm
            leading-7
            text-slate-400
          "
        >
          Upload basketball sessions to
          unlock AI-powered performance
          tracking and improvement trends.
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

        transition-all
        duration-300

        hover:border-white/15
        hover:bg-white/[0.04]

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
        {/* TITLE */}
        <div>
          <p
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-slate-500
            "
          >
            AI Performance Tracking
          </p>

          <h2
            className="
              mt-3

              text-2xl
              font-semibold

              text-white

              sm:text-3xl
            "
          >
            Progress Analytics
          </h2>

          <p
            className="
              mt-3
              max-w-xl

              text-sm
              leading-7
              text-slate-400

              sm:text-base
            "
          >
            Real-time AI performance
            analysis across your basketball
            development sessions.
          </p>
        </div>

        {/* LIVE BADGE */}
        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border border-cyan-500/20

            bg-cyan-500/10

            px-4 py-2

            text-sm
            font-medium
            text-cyan-300
          "
        >
          <div
            className="
              h-2
              w-2

              rounded-full

              bg-cyan-400
            "
          />

          Live Metrics
        </div>
      </div>

      {/* ANALYTICS PILLS */}
      <div
        className="
          mt-8

          flex
          flex-wrap
          gap-3
        "
      >
        <div
          className="
            rounded-full

            border border-emerald-500/20

            bg-emerald-500/10

            px-4 py-2

            text-sm
            font-medium
            text-emerald-300
          "
        >
          {improvement >= 0
            ? `+${improvement}`
            : improvement}{" "}
          Improvement
        </div>

        <div
          className="
            rounded-full

            border border-blue-500/20

            bg-blue-500/10

            px-4 py-2

            text-sm
            font-medium
            text-blue-300
          "
        >
          Peak Score: {bestScore}
        </div>

        <div
          className="
            rounded-full

            border border-purple-500/20

            bg-purple-500/10

            px-4 py-2

            text-sm
            font-medium
            text-purple-300
          "
        >
          Average: {averageScore}
        </div>

        <div
          className="
            rounded-full

            border border-white/10

            bg-white/[0.04]

            px-4 py-2

            text-sm
            font-medium
            text-slate-300
          "
        >
          {data.length} Sessions
        </div>
      </div>

      {/* CHART */}
      <div
        className="
          mt-8

          h-[280px]
          w-full

          sm:h-[340px]
        "
      >
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            {/* GRADIENT */}
            <defs>
              <linearGradient
                id="scoreGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#3b82f6"
                  stopOpacity={0.45}
                />

                <stop
                  offset="100%"
                  stopColor="#3b82f6"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            {/* GRID */}
            <CartesianGrid
              vertical={false}
              stroke="#1e293b"
              strokeDasharray="3 3"
              opacity={0.35}
            />

            {/* X AXIS */}
            <XAxis
              dataKey="session"
              tickLine={false}
              axisLine={false}
              stroke="#64748b"
              tick={{
                fontSize: 12,
              }}
            />

            {/* Y AXIS */}
            <YAxis
              tickLine={false}
              axisLine={false}
              stroke="#64748b"
              tick={{
                fontSize: 12,
              }}
              width={40}
            />

            {/* TOOLTIP */}
            <Tooltip
              cursor={{
                stroke: "#3b82f6",
                strokeOpacity: 0.2,
                strokeWidth: 1,
              }}
              content={<CustomTooltip />}
            />

            {/* AREA */}
            <Area
              type="monotone"
              dataKey="score"
              stroke="#60a5fa"
              strokeWidth={3}

              fill="url(#scoreGradient)"

              activeDot={{
                r: 7,
                strokeWidth: 2,
                stroke: "#020817",
                fill: "#3b82f6",
              }}

              dot={{
                r: 0,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}