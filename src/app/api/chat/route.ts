import {
  NextRequest,
  NextResponse,
} from "next/server";

import { generateCoachResponse } from "@/lib/openai/chat";

import { buildCoachContext } from "@/lib/chat/build-coach-context";

import { saveMessage } from "@/lib/chat/chat-service";

import {
  getRecentMessages,
} from "@/lib/chat/chat-service";

export async function POST(
  request: NextRequest
) {
  try {
    const body =
      await request.json();

    const {
      message,
      userId,
    } = body;

    console.log(
      "USER ID:",
      userId
    );

    if (!message) {
      return NextResponse.json(
        {
          error:
            "Message is required.",
        },
        { status: 400 }
      );
    }

    // SAVE USER MESSAGE
    if (userId) {
      await saveMessage({
        userId,
        role: "user",
        content: message,
      });
    }

    // BUILD PERSONALIZED COACH CONTEXT
    const coachContext =
      await buildCoachContext(
        userId
      );

    const history =
      userId
        ? await getRecentMessages(
            userId,
            20
          )
        : [];

    // GENERATE AI RESPONSE
    const response =
      await generateCoachResponse({
        message,

        context: coachContext,

        history: history.map(
          (message) => ({
            role: message.role,
            content: message.content,
          })
        ),
      });

    // SAVE ASSISTANT MESSAGE
    if (userId) {
      await saveMessage({
        userId,
        role: "assistant",
        content: response,
      });
    }

    return NextResponse.json({
      response,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Unable to generate response.",
      },
      { status: 500 }
    );
  }
}