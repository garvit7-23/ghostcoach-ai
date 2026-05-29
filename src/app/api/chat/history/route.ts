export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";

import { getChatHistory } from "@/lib/chat/chat-service";

export async function GET(
  request: NextRequest
) {
  try {
    const userId =
      request.nextUrl.searchParams.get(
        "userId"
      );

    if (!userId) {
      return NextResponse.json(
        {
          error: "User ID required",
        },
        { status: 400 }
      );
    }

    const history =
      await getChatHistory(userId);

    return NextResponse.json(
      history
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error:
          "Unable to load history",
      },
      { status: 500 }
    );
  }
}