import OpenAI from "openai";
import { retrieveRelevantContext } from "./knowledge-loader";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface IntentDetectionResult {
  intent: "contact" | "projects" | "about" | "services" | "skills" | "general";
  confidence: number;
  suggestedAction?: {
    type: "navigate" | "form" | "none";
    target?: string;
    data?: Record<string, string>;
  };
}

/**
 * Detect user intent and suggest actions
 */
export async function detectIntent(
  userMessage: string,
  currentPath: string
): Promise<IntentDetectionResult> {
  const intentPrompt = `Analyze user intent. Current page: ${currentPath}

User: "${userMessage}"

Detect intent and suggest action. Response format (JSON only):
{
  "intent": "contact|projects|about|services|skills|general",
  "confidence": 0.0-1.0,
  "suggestedAction": {
    "type": "navigate|form|none",
    "target": "/contact",
    "data": {"subject": "extracted subject", "message": "extracted context"}
  }
}

Intent keywords:
- contact: "hire", "email", "get in touch", "contact", "reach out"
- projects: "work", "portfolio", "examples", "built", "projects"
- about: "who", "background", "experience", "about"
- services: "services", "offer", "help with", "do"
- skills: "skills", "know", "expertise", "technologies"`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: intentPrompt }],
      response_format: { type: "json_object" },
      temperature: 0.2,
      max_tokens: 200,
    });

    const result = JSON.parse(
      response.choices[0].message.content || "{}"
    ) as IntentDetectionResult;

    return result;
  } catch (error) {
    console.error("Intent detection error:", error);
    return {
      intent: "general",
      confidence: 0,
      suggestedAction: { type: "none" },
    };
  }
}

/**
 * Generate AI response using RAG
 */
export async function generateResponse(
  messages: ChatMessage[],
  currentPath: string
): Promise<string> {
  // Get last user message
  const lastUserMessage = messages
    .filter((m) => m.role === "user")
    .slice(-1)[0]?.content || "";

  // Retrieve relevant context from knowledge base
  const relevantChunks = await retrieveRelevantContext(lastUserMessage, 3);
  const context = relevantChunks.map((c) => c.content).join("\n\n");

  const systemPrompt = `You are Basudev's AI assistant on his portfolio website.

Current page: ${currentPath}

Relevant Knowledge:
${context}

Instructions:
1. Answer based ONLY on the provided knowledge
2. Be friendly, concise, and professional
3. If unsure, say "I don't have that information"
4. Suggest relevant pages when appropriate
5. Keep responses under 80 words unless detailed info needed
6. Use "I" when referring to Basudev's work/skills
7. End with a helpful question or suggestion

Example responses:
- "I specialize in Python and FastAPI for backend development. Would you like to see my projects?"
- "I'm available for freelance work! Would you like me to take you to the contact page?"`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.slice(-6), // Keep last 6 messages for context
      ],
      temperature: 0.7,
      max_tokens: 250,
    });

    return response.choices[0].message.content || "I'm not sure how to respond.";
  } catch (error) {
    console.error("RAG engine error:", error);
    throw new Error("Failed to generate response");
  }
}

/**
 * Save conversation to localStorage
 */
export function saveConversationToLocalStorage(messages: ChatMessage[]) {
  if (typeof window === "undefined") return;

  try {
    const conversationData = {
      messages,
      timestamp: new Date().toISOString(),
      version: "1.0",
    };
    localStorage.setItem("chatbot_conversation", JSON.stringify(conversationData));
  } catch (error) {
    console.error("Failed to save conversation:", error);
  }
}

/**
 * Load conversation from localStorage (max 24h old)
 */
export function loadConversationFromLocalStorage(): ChatMessage[] {
  if (typeof window === "undefined") return [];

  try {
    const saved = localStorage.getItem("chatbot_conversation");
    if (!saved) return [];

    const data = JSON.parse(saved);
    const hoursSince =
      (Date.now() - new Date(data.timestamp).getTime()) / (1000 * 60 * 60);

    // Only load if < 24 hours old
    if (hoursSince < 24) {
      return data.messages;
    }
  } catch (error) {
    console.error("Failed to load conversation:", error);
  }

  return [];
}

/**
 * Clear conversation memory
 */
export function clearConversationMemory() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("chatbot_conversation");
}
