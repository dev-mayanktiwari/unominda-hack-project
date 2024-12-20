import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  try {
    const response = await fetch(
      `https://dialogflow.googleapis.com/v2/projects/ai-hospital-agents-9696/agent/sessions/123456:detectIntent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.DIALOGFLOW_API_KEY}`,
        },
        body: JSON.stringify({
          queryInput: {
            text: {
              text: message,
              languageCode: "en-US",
            },
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch from Dialogflow");
    }

    const data = await response.json();
    const botResponse = data.queryResult.fulfillmentText;

    return NextResponse.json({ response: botResponse });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
