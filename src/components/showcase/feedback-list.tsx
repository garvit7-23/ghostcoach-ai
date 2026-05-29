import {
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

type FeedbackListProps = {
  title: string;
  items: string[];
  variant?: "success" | "warning";
};

export function FeedbackList({
  title,
  items,
  variant = "success",
}: FeedbackListProps) {
  const isSuccess =
    variant === "success";

  return (
    <div
      className="
        rounded-3xl

        border border-white/10

        bg-white/[0.03]

        p-6

        transition-all
        duration-300

        hover:bg-white/[0.05]
      "
    >
      {/* HEADER */}
      <div
        className="
          flex
          items-center
          gap-3
        "
      >
        {isSuccess ? (
          <CheckCircle2
            className="
              h-5
              w-5

              text-green-400
            "
          />
        ) : (
          <AlertTriangle
            className="
              h-5
              w-5

              text-amber-400
            "
          />
        )}

        <h4
          className="
            text-xl
            font-semibold
            tracking-tight
          "
        >
          {title}
        </h4>
      </div>

      {/* ITEMS */}
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className="
              flex
              items-start
              gap-3
            "
          >
            <div
              className={`
                mt-2
                h-2.5
                w-2.5

                shrink-0

                rounded-full

                ${
                  isSuccess
                    ? "bg-green-400"
                    : "bg-amber-400"
                }
              `}
            />

            <p
              className="
                leading-7
                text-slate-300
              "
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}