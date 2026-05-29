import { Loader2 } from "lucide-react";

export function AnalysisLoader() {
  return (
    <div
      className="
        flex min-h-[400px]
        flex-col
        items-center
        justify-center

        rounded-[32px]

        border border-white/10

        bg-white/[0.03]

        p-10

        text-center
      "
    >
      <div
        className="
          flex h-24 w-24
          items-center justify-center

          rounded-full

          bg-blue-500/10
        "
      >
        <Loader2
          className="
            h-12 w-12
            animate-spin
            text-blue-400
          "
        />
      </div>

      <h3
        className="
          mt-8
          text-3xl
          font-semibold
          tracking-tight
        "
      >
        Analyzing Your Form
      </h3>

      <p
        className="
          mt-4
          max-w-xl

          leading-7
          text-slate-400
        "
      >
        GhostCoach AI is evaluating posture,
        balance, shooting mechanics, and
        movement alignment.
      </p>
    </div>
  );
}