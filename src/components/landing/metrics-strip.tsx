const features = [
  {
    title: "AI-Powered Analysis",
    description:
      "Advanced computer vision trained on elite athletes.",
    icon: "target",
  },

  {
    title: "Personalized Feedback",
    description:
      "Tailored insights based on your position, level & experience.",
    icon: "chart",
  },

  {
    title: "Track Your Progress",
    description:
      "Review your sessions and see real improvement over time.",
    icon: "progress",
  },

  {
    title: "Secure & Private",
    description:
      "Your data is encrypted and never shared.",
    icon: "shield",
  },
];

function FeatureIcon({
  type,
}: {
  type: string;
}) {
  switch (type) {
    case "target":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );

    case "chart":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      );

    case "progress":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          <path d="M12 2v4" />
          <path d="m16.2 7.8 2.9-2.9" />
          <path d="M18 12h4" />
          <path d="m16.2 16.2 2.9 2.9" />
          <path d="M12 18v4" />
          <path d="m4.9 19.1 2.9-2.9" />
          <path d="M2 12h4" />
          <path d="m4.9 4.9 2.9 2.9" />
        </svg>
      );

    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
}

export function MetricsStrip() {
  return (
    <section className="relative -mt-8 z-20">
      <div className="container-width">
        <div
          className="
            grid

            overflow-hidden

            rounded-[24px]

            border border-white/10

            bg-black/55

            backdrop-blur-2xl

            xl:grid-cols-4
          "
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="
                relative

                flex items-start gap-4

                px-8 py-5
              "
            >
              {/* DIVIDER */}
              {index !== features.length - 1 && (
                <div
                  className="
                    absolute right-0 top-1/2

                    hidden

                    h-14
                    w-px

                    -translate-y-1/2

                    bg-white/10

                    xl:block
                  "
                />
              )}

              {/* ICON */}
              <div
                className="
                  flex h-12 w-12
                  shrink-0
                  items-center justify-center

                  rounded-full

                  bg-blue-500/10

                  ring-1 ring-blue-500/20
                "
              >
                <FeatureIcon type={feature.icon} />
              </div>

              {/* CONTENT */}
              <div>
                <h3
                  className="
                    text-xl
                    font-semibold
                    tracking-tight
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-1.5

                    max-w-[220px]

                    text-base
                    leading-relaxed

                    text-slate-400
                  "
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}