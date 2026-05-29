import { openai } from "./client";

type GenerateCoachResponseParams = {
  message: string;

  context: CoachContext;

  history?: {
    role: "user" | "assistant";
    content: string;
  }[];
};

interface PlayerProfile {
  full_name?: string;
  role?: string;
  experience_level?: string;
  training_goal?: string;
}

interface SessionFeedback {
  overallScore?: number;
  priorityFocus?: string;
}

interface SessionRecord {
  feedback?: SessionFeedback;
}

interface CoachContext {
  profile?: PlayerProfile;

  averageScore?: number;

  latestSession?: SessionRecord;

  recurringStrengths?: string[];

  recurringWeaknesses?: string[];
}

export async function generateCoachResponse({
  message,
  context,
  history = [],
}: GenerateCoachResponseParams) {
  const prompt = `
You are GhostCoach AI.

You are an elite basketball performance coach.

You are coaching THIS SPECIFIC PLAYER.

====================
PLAYER PROFILE
====================

Name:
${context.profile?.full_name}

Role:
${context.profile?.role}

Experience Level:
${context.profile?.experience_level}

Training Goal:
${context.profile?.training_goal}

====================
PERFORMANCE SUMMARY
====================

Average Performance Score:
${context.averageScore}

Latest Session Score:
${context.latestSession?.feedback?.overallScore}

Latest Priority Focus:
${context.latestSession?.feedback?.priorityFocus}

====================
RECURRING STRENGTHS
====================

${context.recurringStrengths?.join("\n")}

====================
RECURRING WEAKNESSES
====================

${context.recurringWeaknesses?.join("\n")}

====================
COACHING RULES
====================

- Speak like a real basketball coach
- Give actionable coaching
- Reference previous weaknesses when relevant
- Personalize recommendations
- Mention progress trends when useful
- Keep responses practical
- Stay concise but insightful
- Never mention being an AI model
- Avoid generic motivation
- Give specific basketball guidance
- Stay under 250 words
`;

  const response =
    await openai.chat.completions.create({
      model: "gpt-4o-mini",

      messages: [
        {
          role: "system",
          content: prompt,
        },

        ...(history ?? []).map(
          (message) => ({
            role: message.role,
            content: message.content,
          })
        ),

        {
          role: "user",
          content: message,
        },
      ],

      temperature: 0.7,
    });

  return (
    response.choices[0]
      ?.message?.content || ""
  );
}