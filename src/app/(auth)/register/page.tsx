import { AuthCard } from "@/components/auth/auth-card";

import { AuthShell } from "@/components/auth/auth-shell";

import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <AuthShell
      title="Create Your Account"
      subtitle="
      Start training smarter with
      AI-powered basketball coaching.
      "
    >
      <AuthCard>
        <RegisterForm />
      </AuthCard>
    </AuthShell>
  );
}