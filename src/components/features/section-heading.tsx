type SectionHeadingProps = {
  badge?: string;
  title: string;
  description: string;
};

export function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div
      className="
        mx-auto
        max-w-3xl

        text-center
      "
    >
      {badge && (
        <div
          className="
            mb-5

            inline-flex
            items-center

            rounded-full

            border border-blue-500/20

            bg-blue-500/10

            px-4 py-2

            text-xs
            font-medium
            uppercase
            tracking-[0.2em]

            text-blue-300
          "
        >
          {badge}
        </div>
      )}

      <h2
        className="
          text-3xl
          font-semibold
          leading-[1.05]
          tracking-tight

          sm:text-4xl
          lg:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mx-auto
          mt-5

          max-w-xl

          text-base
          leading-8
          text-slate-400

          sm:text-lg
        "
      >
        {description}
      </p>
    </div>
  );
}