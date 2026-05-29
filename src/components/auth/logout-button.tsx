"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Loader2, LogOut } from "lucide-react";

import { toast } from "sonner";

import { signOut } from "@/lib/auth/auth-service";

export function LogoutButton() {
  const [isLoading, setIsLoading] =
    useState(false);

  const router = useRouter();

  async function handleLogout() {
    try {
      setIsLoading(true);

      await signOut();

      toast.success(
        "Logged out successfully."
      );

      router.push("/");
    } catch (error) {
        console.error(error);
        
      toast.error(
        "Unable to logout."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className="
        inline-flex items-center gap-2

        rounded-xl

        border border-white/10

        bg-white/[0.03]

        px-4 py-2

        text-sm
        font-medium

        transition-colors

        hover:bg-white/[0.06]
      "
    >
      {isLoading ? (
        <Loader2
          className="
            h-4 w-4
            animate-spin
          "
        />
      ) : (
        <LogOut className="h-4 w-4" />
      )}

      Logout
    </button>
  );
}