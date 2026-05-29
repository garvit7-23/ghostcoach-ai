import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email."),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters."),
});

export const registerSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name is required."),

  email: z
    .string()
    .email("Please enter a valid email."),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters."),

  role: z
    .string()
    .min(2, "Role is required."),

  experienceLevel: z.enum([
    "Beginner",
    "Intermediate",
    "Advanced",
  ]),

  trainingGoal: z
    .string()
    .min(10, "Tell us more about your goal."),
});

export type LoginSchema =
  z.infer<typeof loginSchema>;

export type RegisterSchema =
  z.infer<typeof registerSchema>;