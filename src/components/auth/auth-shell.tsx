import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type AuthShellProps = {
  title: string;
  subtitle: string;

  children: React.ReactNode;
};

export function AuthShell({
  title,
  subtitle,
  children,
}: AuthShellProps) {
  return (
    <div
      className="
        h-screen
        overflow-hidden

        bg-[#020817]

        lg:grid
        lg:grid-cols-[1.05fr_0.95fr]
      "
    >
      {/* LEFT SIDE */}
      <div
        className="
          relative
          h-screen
          hidden
          overflow-hidden
          border-r
          border-white/10

          lg:flex
        "
      >
        {/* BG IMAGE */}
        <Image
          src="/images/auth-bg.png"
          alt="Basketball training"
          fill
          priority
          className="
            object-cover
            scale-[1.02]
          "
        />

        {/* DARK OVERLAY */}
        <div
          className="
            absolute inset-0

            bg-gradient-to-br
            from-[#020817]/95
            via-[#020817]/70
            to-[#020817]/95
          "
        />

        {/* RADIAL GLOW */}
        <div
          className="
            absolute inset-0

            bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_30%)]
          "
        />

        {/* SECONDARY GLOW */}
        <div
          className="
            absolute inset-0

            bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_35%)]
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative z-10

            flex h-full
            flex-col

            px-12
            py-14
            xl:px-16
          "
        >
          {/* LOGO */}
          <div>
            <div
              className="
                flex h-14 w-14
                items-center justify-center

                rounded-2xl

                border border-blue-500/20
                bg-blue-500/10
                backdrop-blur-md

                shadow-[0_0_40px_rgba(59,130,246,0.15)]
              "
            >
              <span
                className="
                  text-xl
                  font-semibold
                  text-blue-400
                "
              >
                G
              </span>
            </div>
          </div>

          {/* HERO CONTENT */}
          <div
            className="
              flex flex-1
              flex-col
              justify-start

              max-w-xl
              py-16
            "
          >
            <div
              className="
                inline-flex
                items-center
                rounded-full

                border border-white/10
                bg-white/[0.04]

                px-4 py-1.5

                text-sm
                text-slate-300
                backdrop-blur-md
              "
            >
              AI-Powered Basketball Coaching
            </div>

            <h1
              className="
                mt-6

                text-4xl
                font-semibold
                leading-[0.98]
                tracking-[-0.05em]

                text-white

                xl:text-5xl
                2xl:text-6xl
              "
            >
              Elevate your basketball game
              with AI-powered coaching.
            </h1>

            <p
              className="
                mt-5
                max-w-lg

                text-base 
                leading-7
                text-slate-300

                xl:text-lg
              "
            >
              Analyze your mechanics,
              improve your consistency,
              and train like elite athletes
              with GhostCoach AI.
            </p>

            {/* STATS */}
            <div
              className="
                mt-8
                flex
                gap-8
              "
            >
              <div>
                <p
                  className="
                    text-2xl
                    font-semibold
                    text-white
                  "
                >
                  50K+
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-400
                  "
                >
                  Shots analyzed
                </p>
              </div>

              <div>
                <p
                  className="
                    text-2xl
                    font-semibold
                    text-white
                  "
                >
                  92%
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-400
                  "
                >
                  Accuracy improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          relative

          flex
          h-screen
          flex-col

          overflow-y-auto

          bg-[#020817]
        "
      >
        {/* MOBILE GLOW */}
        <div
          className="
            absolute inset-0

            bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_35%)]

            lg:hidden
          "
        />

        {/* MOBILE BRAND */}
        <div
          className="
            relative z-10

            flex items-center gap-3

            px-6
            pt-8

            sm:px-8

            lg:hidden
          "
        >
          <div
            className="
              flex h-11 w-11
              items-center justify-center

              rounded-xl

              border border-blue-500/20
              bg-blue-500/10

              text-lg
              font-semibold
              text-blue-400
            "
          >
            G
          </div>

          <div>
            <p
              className="
                text-sm
                text-slate-400
              "
            >
              GhostCoach AI
            </p>

            <p
              className="
                text-sm
                text-slate-500
              "
            >
              Train smarter with AI
            </p>
          </div>
        </div>

        {/* FORM CONTAINER */}
        <div
          className="
            relative z-10

            flex flex-1
            items-start
            justify-center

            px-6
            py-10

            sm:px-8
            lg:px-12
            lg:py-14
          "
        >
          <div
            className="
              w-full
              max-w-md
            "
          >

            <Link
              href="/"
              className="
                mb-8

                inline-flex
                items-center
                gap-2

                text-sm
                text-slate-400

                transition-colors

                hover:text-white
              " 
            >
              <ArrowLeft className="h-4 w-4" />
               Back to Home
            </Link>


            {/* HEADER */}
            <div>
              <h1
                className="
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-white

                  sm:text-4xl
                "
              >
                {title}
              </h1>

              <p
                className="
                  mt-3
                  max-w-sm

                  text-sm
                  leading-7
                  text-slate-400

                  sm:text-base
                "
              >
                {subtitle}
              </p>
            </div>

            {/* FORM */}
            <div className="mt-8 sm:mt-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}