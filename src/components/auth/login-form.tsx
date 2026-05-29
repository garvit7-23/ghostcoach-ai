"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { Eye, EyeOff, Loader2 } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { toast } from "sonner";

import { signIn } from "@/lib/auth/auth-service";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { GradientButton } from "@/components/ui/gradient-button";

import {
  loginSchema,
  LoginSchema,
} from "@/lib/validations/auth.schema";

export function LoginForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] =
    useState(false);

  const [isLoading, setIsLoading] =
    useState(false);

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(
    values: LoginSchema
  ) {
    try {
      setIsLoading(true);

      const data =
        await signIn(values);

      localStorage.setItem(
        "ghostcoach-user-id",
        data.user.id
      );

      toast.success(
        "Welcome back!"
      );

      router.push("/dashboard");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to sign in."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(
            onSubmit
          )}
          className="space-y-6"
        >
          {/* EMAIL */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="
                    text-sm
                    text-slate-300
                  "
                >
                  Email Address
                </FormLabel>

                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="
                      h-12
                      border-white/10
                      bg-white/[0.03]

                      text-white
                      placeholder:text-slate-500

                      focus-visible:ring-2
                      focus-visible:ring-blue-500
                    "
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* PASSWORD */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="
                    text-sm
                    text-slate-300
                  "
                >
                  Password
                </FormLabel>

                <FormControl>
                  <div className="relative">
                    <Input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className="
                        h-12
                        border-white/10
                        bg-white/[0.03]

                        pr-12

                        text-white
                        placeholder:text-slate-500

                        focus-visible:ring-2
                        focus-visible:ring-blue-500
                      "
                      {...field}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          (prev) => !prev
                        )
                      }
                      className="
                        absolute
                        right-4
                        top-1/2

                        -translate-y-1/2

                        text-slate-400

                        transition-colors

                        hover:text-white
                      "
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* OPTIONS */}
          <div
            className="
              flex items-center
              justify-between

              gap-4
            "
          >
            <label
              className="
                flex items-center
                gap-2

                text-sm
                text-slate-400
              "
            >
              <input
                type="checkbox"
                className="
                  h-4 w-4
                  rounded

                  border-white/10
                  bg-white/[0.03]
                "
              />

              Remember me
            </label>

            <button
              type="button"
              className="
                text-sm
                text-blue-400

                transition-colors

                hover:text-blue-300
              "
            >
              Forgot password?
            </button>
          </div>

          {/* SUBMIT */}
          <GradientButton
            type="submit"
            disabled={isLoading}
            className="
              h-12
              w-full

              text-base
              font-semibold
            "
          >
            {isLoading ? (
              <div
                className="
                  flex items-center
                  justify-center
                "
              >
                <Loader2
                  className="
                    mr-2
                    h-5 w-5
                    animate-spin
                  "
                />

                Signing In...
              </div>
            ) : (
              "Sign In"
            )}
          </GradientButton>
        </form>
      </Form>

      {/* FOOTER */}
      <div
        className="
          text-center
          text-sm
          text-slate-400
        "
      >
        Don&apos;t have an account?{" "}

        <Link
          href="/register"
          className="
            font-medium
            text-blue-400

            transition-colors

            hover:text-blue-300
          "
        >
          Create account
        </Link>
      </div>
    </div>
  );
}