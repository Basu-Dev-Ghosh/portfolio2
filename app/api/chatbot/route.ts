import { NextRequest, NextResponse } from "next/server";
import { generateResponse, detectIntent, ChatMessage } from "@/lib/chatbot/rag-engine";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, currentPath, action } = body;

    // Handle intent detection
    if (action === "detect_intent") {
      const userMessage = messages[messages.length - 1]?.content || "";
      const intent = await detectIntent(userMessage, currentPath);
      return NextResponse.json({ intent });
    }

    // Handle message generation
    if (action === "generate_response") {
      const response = await generateResponse(messages, currentPath);
      return NextResponse.json({ response });
    }

    return NextResponse.json(
      { error: "Invalid action" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Chatbot API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
