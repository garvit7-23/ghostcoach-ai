type ScoreRingProps = {
  score: number;
};

export function ScoreRing({
  score,
}: ScoreRingProps) {
  const percentage =
    (score / 10) * 100;

  return (
    <div className="relative h-40 w-40">
      {/* RING */}
      <svg
        className="-rotate-90"
        viewBox="0 0 160 160"
      >
        {/* BG */}
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="10"
          fill="transparent"
        />

        {/* ACTIVE */}
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke="url(#gradient)"
          strokeWidth="10"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={440}
          strokeDashoffset={
            440 -
            (440 * percentage) / 100
          }
        />

        <defs>
          <linearGradient id="gradient">
            <stop
              offset="0%"
              stopColor="#3b82f6"
            />

            <stop
              offset="100%"
              stopColor="#22d3ee"
            />
          </linearGradient>
        </defs>
      </svg>

      {/* CONTENT */}
      <div
        className="
          absolute inset-0
          flex flex-col
          items-center justify-center
        "
      >
        <p
          className="
            text-5xl
            font-semibold
            tracking-tight
          "
        >
          {score}
        </p>

        <p
          className="
            mt-2
            text-sm
            uppercase
            tracking-[0.25em]
            text-slate-400
          "
        >
          Overall
        </p>
      </div>
    </div>
  );
}