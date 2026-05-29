interface Props {
  title: string;

  value: string;

  description: string;
}

export function InsightCard({
  title,
  value,
  description,
}: Props) {
  return (
    <div
      className="
        relative
        overflow-hidden

        rounded-[28px]

        border border-white/10

        bg-white/[0.03]

        p-6

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-blue-500/30
        hover:bg-blue-500/[0.04]
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          right-0
          top-0

          h-28
          w-28

          rounded-full

          bg-blue-500/10

          blur-3xl
        "
      />

      <div className="relative z-10">
        <p
          className="
            text-sm
            uppercase
            tracking-[0.22em]
            text-slate-400
          "
        >
          {title}
        </p>

        <h3
          className="
            mt-5

            text-4xl
            font-semibold
            tracking-tight
          "
        >
          {value}
        </h3>

        <p
          className="
            mt-4

            text-sm
            leading-7
            text-slate-400
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}