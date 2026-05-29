import { HeroUploadCard } from "./hero-upload-card";

export function HeroContent() {
  return (
    <div
      className="
        relative z-10
        mx-auto
        flex min-h-[92svh]
        max-w-[1600px]
        items-center
        px-6
      "
    >
      <div
        className="
          max-w-[620px]
          space-y-6

          pb-10

          md:pb-0
        "
      >
        {/* BADGE */}
        <div
          className="
            inline-flex items-center gap-2

            rounded-full
            border border-blue-500/20
            bg-blue-500/10

            px-5 py-2.5

            text-sm
            font-medium
            text-blue-300

            backdrop-blur-md
          "
        >
          <div
            className="
              h-2 w-2
              rounded-full
              bg-blue-400
            "
          />

          AI-Powered Basketball Coaching
        </div>

        {/* HEADING */}
        <div className="space-y-5">
          <h1
            className="
              text-[4rem]
              font-semibold
              leading-[0.9]
              tracking-[-0.06em]

              sm:text-[5rem]
              lg:text-[5.2rem]
            "
          >
            Analyze. Learn.
            <br />

            <span
              className="
                bg-gradient-to-r
                from-blue-500
                to-cyan-400

                bg-clip-text
                text-transparent
              "
            >
              Elevate.
            </span>
          </h1>

          <p
            className="
              max-w-[560px]

              text-lg
              leading-8
              text-slate-300
            "
          >
            Upload your shot or stance.
            Get AI-powered feedback
            to improve your game and
            reach your full potential.
          </p>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <HeroUploadCard />

          {/* TRUST ROW */}
          <div
            className="
              flex flex-wrap
              items-center gap-8

              pt-2

              text-sm
              uppercase
              tracking-[0.35em]
              text-slate-500
            "
          >
            <span>NBA</span>
            <span>NCAA</span>
            <span>EYBL</span>
            <span>OVERTIME</span>
          </div>
        </div>
      </div>
    </div>
  );
}