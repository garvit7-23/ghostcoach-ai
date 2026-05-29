"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { Loader2 } from "lucide-react";

import { useAuth } from "@/providers/auth-provider";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const { session, loading } =
    useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push("/login");
    }
  }, [loading, session, router]);

  if (loading) {
    return (
      <div
        className="
          flex min-h-screen
          items-center
          justify-center
        "
      >
        <Loader2
          className="
            h-10 w-10
            animate-spin
            text-blue-400
          "
        />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return children;
}