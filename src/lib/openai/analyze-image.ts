import { openai } from "@/lib/openai/client";

import { FeedbackReport } from "@/types/feedback";

export async function analyzeBasketballForm(
  base64Image: string,
  mimeType: string
): Promise<FeedbackReport> {
  const response =
    await openai.chat.completions.create({
      model: "gpt-4o-mini",

      response_format: {
        type: "json_object",
      },

      messages: [
        {
          role: "system",

          content: `
You are an elite basketball shooting coach.

Analyze basketball shooting form images.

Return ONLY valid JSON.

JSON structure:

{
  "overallScore": number,
  "strengths": string[],
  "improvements": string[],
  "priorityFocus": string,
  "recommendedDrill": string,
  "confidence": "Low" | "Medium" | "High"
}

Rules:
- Be specific
- Be actionable
- Focus on mechanics
- Mention posture, release, elbow alignment, landing, coordination, and balance where relevant
- No markdown
- No explanations outside JSON
`,
        },

        {
          role: "user",

          content: [
            {
              type: "text",

              text:
                "Analyze this basketball shooting form image.",
            },

            {
              type: "image_url",

              image_url: {
                url:
                  `data:${mimeType};base64,${base64Image}`,
              },
            },
          ],
        },
      ],

      temperature: 0.4,
    });

  const content =
    response.choices[0]
      ?.message?.content;

  if (!content) {
    throw new Error(
      "No AI response generated."
    );
  }

  return JSON.parse(content);
}