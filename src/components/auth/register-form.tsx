"use client";

import { useState } from "react";

import Link from "next/link";

import {
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { toast } from "sonner";

import { useRouter } from "next/navigation";

import { signUp } from "@/lib/auth/auth-service";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { GradientButton } from "@/components/ui/gradient-button";

import {
  registerSchema,
  RegisterSchema,
} from "@/lib/validations/auth.schema";

const playerRoles = [
  "Point Guard",
  "Shooting Guard",
  "Small Forward",
  "Power Forward",
  "Center",
];

const experienceLevels = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

const inputStyles = `
  h-12
  rounded-xl
  border-white/10
  bg-white/[0.04]
  text-white
  transition-all
  duration-200

  placeholder:text-slate-500

  hover:border-white/20
  hover:bg-white/[0.06]

  focus-visible:ring-2
  focus-visible:ring-blue-500/40
  focus-visible:border-blue-500/40
`;

export function RegisterForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] =
    useState(false);

  const [isLoading, setIsLoading] =
    useState(false);

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      role: "",
      experienceLevel: "Beginner",
      trainingGoal: "",
    },
  });

  async function onSubmit(
    values: RegisterSchema
  ) {
    try {
      setIsLoading(true);

      const {user} = await signUp(values);

      localStorage.setItem(
        "ghostcoach-user-id",
        user.id
      );

      toast.success(
        "Account created successfully!"
      );

      router.push("/dashboard");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to create account."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="
            space-y-6
            sm:space-y-7
          "
        >
          {/* BASIC INFO */}
          <div className="space-y-5">
            {/* FULL NAME */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-slate-200">
                    Full Name
                  </FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Enter your full name"
                      className={inputStyles}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* EMAIL */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-slate-200">
                    Email Address
                  </FormLabel>

                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                      className={inputStyles}
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
                  <FormLabel className="text-sm text-slate-200">
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
                        placeholder="Create password"
                        autoComplete="new-password"
                        className={`${inputStyles} pr-12`}
                        {...field}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(
                            !showPassword
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
          </div>

          {/* PLAYER DETAILS */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]
              p-4
              backdrop-blur-sm

              sm:p-5
            "
          >
            <div className="space-y-5">
              {/* ROLE */}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="relative z-20">
                    <FormLabel className="text-sm text-slate-200">
                      Playing Position
                    </FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={inputStyles}
                        >
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent
                        className="
                          z-50
                          rounded-xl
                          border-white/10
                          bg-[#0B1120]/95
                          backdrop-blur-xl
                        "
                      >
                        {playerRoles.map((role) => (
                          <SelectItem
                            key={role}
                            value={role}
                            className="
                              cursor-pointer
                              rounded-md
                              focus:bg-white/10
                            "
                          >
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* EXPERIENCE */}
              <FormField
                control={form.control}
                name="experienceLevel"
                render={({ field }) => (
                  <FormItem className="relative z-10">
                    <FormLabel className="text-sm text-slate-200">
                      Experience Level
                    </FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={inputStyles}
                        >
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent
                        className="
                          z-50
                          rounded-xl
                          border-white/10
                          bg-[#0B1120]/95
                          backdrop-blur-xl
                        "
                      >
                        {experienceLevels.map(
                          (level) => (
                            <SelectItem
                              key={level}
                              value={level}
                              className="
                                cursor-pointer
                                rounded-md
                                focus:bg-white/10
                              "
                            >
                              {level}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* TRAINING GOAL */}
          <FormField
            control={form.control}
            name="trainingGoal"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-slate-200">
                  Training Goal
                </FormLabel>

                <FormControl>
                  <Textarea
                    placeholder="
Example:
Improve shooting consistency,
increase release speed,
and improve off-balance shots.
                    "
                    className="
                      min-h-[120px]
                      rounded-2xl
                      border-white/10
                      bg-white/[0.04]
                      text-white
                      resize-none
                      transition-all
                      duration-200

                      placeholder:text-slate-500

                      hover:border-white/20
                      hover:bg-white/[0.06]

                      focus-visible:ring-2
                      focus-visible:ring-blue-500/40
                      focus-visible:border-blue-500/40

                      sm:min-h-[140px]
                    "
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* SUBMIT */}
          <GradientButton
            type="submit"
            disabled={isLoading}
            className="
              h-12
              w-full
              rounded-xl

              text-base
              font-semibold

              shadow-lg
              shadow-blue-500/10

              transition-all
              duration-300

              hover:scale-[1.01]
              hover:shadow-blue-500/20
            "
          >
            {isLoading ? (
              <>
                <Loader2
                  className="
                    mr-2
                    h-5
                    w-5
                    animate-spin
                  "
                />

                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </GradientButton>
        </form>
      </Form>

      {/* FOOTER */}
      <div
        className="
          mt-8
          text-center
          text-sm
          text-slate-400
        "
      >
        Already have an account?{" "}

        <Link
          href="/login"
          className="
            font-medium
            text-blue-400
            transition-colors

            hover:text-blue-300
          "
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}