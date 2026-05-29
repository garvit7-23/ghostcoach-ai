import { GradientButton } from "@/components/ui/gradient-button";
import Link from "next/link";

export function HeroUploadCard() {
  return (
    <div
      className="
        w-full
        max-w-[640px]

        rounded-[28px]
        border border-blue-500/25

        bg-black/30

        p-5

        backdrop-blur-xl
      "
    >
      <div className="flex gap-5">
        {/* ICON */}
        <div
          className="
            flex h-20 w-20
            shrink-0
            items-center justify-center

            rounded-2xl

            bg-blue-500/10
            ring-1 ring-blue-500/20
          "
        >
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
            className="text-blue-400"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line
              x1="12"
              x2="12"
              y1="3"
              y2="15"
            />
          </svg>
        </div>

        {/* CONTENT */}
        <div className="flex-1 space-y-4">
          <div>
            <h3
              className="
                text-2xl
                font-semibold
              "
            >
              Upload Your
              Stance or Shot
            </h3>

            <p
              className="
                mt-1
                text-sm
                text-slate-400
              "
            >
              JPG / PNG • Max 5MB
            </p>
          </div>
         <Link href="/login">
          <GradientButton
            className="
              h-14
              w-full

              text-base
              font-semibold
            "
          >
            Upload Photo
          </GradientButton>
         </Link>

          <p
            className="
              text-sm
              text-slate-400
            "
          >
            Your data is private and
            secure.
          </p>
        </div>
      </div>
    </div>
  );
}