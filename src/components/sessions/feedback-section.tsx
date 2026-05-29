type FeedbackSectionProps = {
  title: string;

  items: string[];

  variant?:
    | "success"
    | "warning";
};

export function FeedbackSection({
  title,
  items,
  variant = "success",
}: FeedbackSectionProps) {
  return (
    <div>
      <h3
        className="
          text-2xl
          font-semibold
          tracking-tight
        "
      >
        {title}
      </h3>

      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className={`
              rounded-2xl
              border
              p-5
              leading-7

              ${
                variant === "success"
                  ? `
                    border-green-500/20
                    bg-green-500/[0.06]
                  `
                  : `
                    border-amber-500/20
                    bg-amber-500/[0.06]
                  `
              }
            `}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}