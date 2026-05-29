"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  BarChart3,
  Brain,
  Home,
  Upload,
} from "lucide-react";

import { LogoutButton } from "@/components/auth/logout-button";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },

  {
    label: "Upload Session",
    href: "/upload",
    icon: Upload,
  },

  {
    label: "Session History",
    href: "/sessions",
    icon: BarChart3,
  },

  {
    label: "AI Coach",
    href: "/chat",
    icon: Brain,
  },

];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        hidden
        h-screen
        w-[290px]
        flex-col

        border-r
        border-white/10

        bg-[#020817]/80
        backdrop-blur-xl

        lg:flex
      "
    >
      {/* HEADER */}
      <div
        className="
          relative

          border-b
          border-white/10

          px-6
          py-6
        "
      >
        {/* SUBTLE GLOW */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px

            bg-gradient-to-r
            from-transparent
            via-blue-500/40
            to-transparent
          "
        />

        <div className="flex items-center gap-4">
          {/* LOGO */}
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-2xl

              border
              border-blue-500/20

              bg-blue-500/10

              shadow-[0_0_30px_rgba(59,130,246,0.15)]
            "
          >
            <span
              className="
                text-lg
                font-semibold
                text-blue-400
              "
            >
              G
            </span>
          </div>

          {/* BRAND */}
          <div>
            <p
              className="
                text-lg
                font-semibold
                tracking-tight
                text-white
              "
            >
              GhostCoach AI
            </p>

            <p
              className="
                mt-1

                text-[11px]
                uppercase
                tracking-[0.28em]

                text-slate-500
              "
            >
              Basketball Coach
            </p>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex-1 px-4 py-6">
        <div className="mb-4 px-3">
          <p
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.24em]
              text-slate-500
            "
          >
            Platform
          </p>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  group
                  relative

                  flex
                  items-center
                  gap-3

                  overflow-hidden

                  rounded-2xl

                  px-4
                  py-3.5

                  transition-all
                  duration-200

                  ${
                    isActive
                      ? `
                        border border-blue-500/20
                        bg-blue-500/10

                        text-white

                        shadow-[0_0_25px_rgba(59,130,246,0.12)]
                      `
                      : `
                        border border-transparent

                        text-slate-400

                        hover:border-white/10
                        hover:bg-white/[0.04]
                        hover:text-white
                      `
                  }
                `}
              >
                {/* ACTIVE GLOW */}
                {isActive && (
                  <div
                    className="
                      absolute
                      inset-y-2
                      left-0
                      w-[3px]

                      rounded-full

                      bg-blue-400
                    "
                  />
                )}

                <Icon
                  className={`
                    h-5
                    w-5

                    transition-transform
                    duration-200

                    ${
                      isActive
                        ? "text-blue-400"
                        : "group-hover:scale-110"
                    }
                  `}
                />

                <span
                  className="
                    text-sm
                    font-medium
                  "
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* FOOTER */}
      <div
        className="
          border-t
          border-white/10

          p-4
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-white/10

            bg-white/[0.03]

            p-2
          "
        >
          <LogoutButton />
        </div>
      </div>
    </aside>
  );
}