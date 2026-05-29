import { supabase } from "@/lib/supabase/client";

import {
  LoginSchema,
  RegisterSchema,
} from "@/lib/validations/auth.schema";

export async function signUp(
  values: RegisterSchema
) {
  const {
    fullName,
    email,
    password,
    role,
    experienceLevel,
    trainingGoal,
  } = values;

  // CREATE AUTH USER
  const { data, error } =
    await supabase.auth.signUp({
      email,
      password,
    });

  if (error) {
    throw error;
  }

  const user = data.user;

  if (!user) {
    throw new Error(
      "Unable to create user."
    );
  }

  // CREATE PROFILE
  const { error: profileError } =
    await supabase
      .from("profiles")
      .insert({
        id: user.id,

        full_name: fullName,

        role,

        experience_level:
          experienceLevel,

        training_goal: trainingGoal,
      });

  if (profileError) {
    throw profileError;
  }

  return {
    user,
  };
}

export async function signIn(
  values: LoginSchema
) {
  const { email, password } = values;

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    throw error;
  }

  return data;
}

export async function signOut() {
  const { error } =
    await supabase.auth.signOut();

  if (error) {
    throw error;
  }
}