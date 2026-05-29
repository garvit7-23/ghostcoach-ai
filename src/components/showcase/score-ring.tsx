type ScoreRingProps = {
  score: number;
};

export function ScoreRing({
  score,
}: ScoreRingProps) {
  const percentage =
    Math.min(score * 10, 100);

  const performanceLabel =
    score >= 9
      ? "Elite Mechanics"
      : score >= 8
      ? "Strong Form"
      : score >= 7
      ? "Developing Well"
      : "Needs Work";

  return (
    <div
      className="
        relative

        flex
        h-32
        w-32

        items-center
        justify-center

        sm:h-40
        sm:w-40
      "
    >
      {/* TRACK */}
      <div
        className="
          absolute
          inset-0

          rounded-full

          border-[10px]
          border-white/10
        "
      />

      {/* PROGRESS */}
      <div
        className="
          absolute
          inset-0

          rounded-full
        "
        style={{
          background: `conic-gradient(
            rgb(59 130 246)
            ${percentage * 3.6}deg,
            rgba(255,255,255,0.08)
            0deg
          )`,
        }}
      />

      {/* INNER */}
      <div
        className="
          absolute
          inset-[10px]

          rounded-full

          bg-[#020817]
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute
          inset-[18px]

          rounded-full

          bg-blue-500/10

          blur-2xl
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          text-center
        "
      >
        <p
          className="
            text-4xl
            font-semibold
            tracking-tight

            sm:text-5xl
          "
        >
          {score}
        </p>

        <p
          className="
            mt-1

            text-[10px]
            uppercase
            tracking-[0.22em]

            text-slate-400

            sm:text-xs
          "
        >
          Overall Score
        </p>

        <p
          className="
            mt-2

            text-xs
            font-medium

            text-blue-300
          "
        >
          {performanceLabel}
        </p>
      </div>
    </div>
  );
}