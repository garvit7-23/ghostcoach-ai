export type ExperienceLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface RegisterFormValues {
  fullName: string;
  email: string;
  password: string;

  role: string;

  experienceLevel: ExperienceLevel;

  trainingGoal: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;

  fullName: string;

  email: string;

  role: string;

  experienceLevel: ExperienceLevel;

  trainingGoal: string;
}