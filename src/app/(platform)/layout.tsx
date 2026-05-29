import { ProtectedRoute } from "@/components/auth/protected-route";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      {children}
    </ProtectedRoute>
  );
}