"use client";

import { Toaster } from "sonner";
import { AuthProvider } from "./auth-provider";

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({
  children,
}: AppProviderProps) {
  return (
    <>
    <AuthProvider>
      {children}

      <Toaster
        richColors
        position="top-right"
        theme="dark"
      />
    </AuthProvider>
    </>
  );
}