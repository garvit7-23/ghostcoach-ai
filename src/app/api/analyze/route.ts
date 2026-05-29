import { NextRequest, NextResponse } from "next/server";

import { analyzeBasketballForm } from "@/lib/openai/analyze-image";

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    const {
      image,
      mimeType,
    } = body;

    if (!image || !mimeType) {
      return NextResponse.json(
        {
          error:
            "Missing image or mime type.",
        },

        { status: 400 }
      );
    }

    const feedback =
      await analyzeBasketballForm(
        image,
        mimeType
      );

    return NextResponse.json(feedback);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Unable to analyze image.",
      },

      { status: 500 }
    );
  }
}