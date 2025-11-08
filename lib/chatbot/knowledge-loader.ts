import fs from "fs";
import path from "path";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface KnowledgeChunk {
  id: string;
  content: string;
  embedding: number[];
  metadata: {
    source: string;
    category: string;
  };
}

let knowledgeBase: KnowledgeChunk[] = [];

/**
 * Load and vectorize knowledge base from markdown files
 */
export async function initializeKnowledgeBase() {
  const knowledgeDir = path.join(process.cwd(), "knowledge-base");
  const files = fs.readdirSync(knowledgeDir);

  const chunks: KnowledgeChunk[] = [];

  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const filePath = path.join(knowledgeDir, file);
    const content = fs.readFileSync(filePath, "utf-8");

    // Split content into chunks (by sections)
    const sections = content.split(/\n##\s+/).filter((s) => s.trim());

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const lines = section.split("\n");
      const title = lines[0].replace(/^#\s+/, "").trim();
      const sectionContent = lines.slice(1).join("\n").trim();

      if (!sectionContent) continue;

      // Generate embedding
      const embedding = await generateEmbedding(sectionContent);

      chunks.push({
        id: `${file}-${i}`,
        content: `## ${title}\n${sectionContent}`,
        embedding,
        metadata: {
          source: file,
          category: title.toLowerCase(),
        },
      });
    }
  }

  knowledgeBase = chunks;
  console.log(`✅ Knowledge base initialized with ${chunks.length} chunks`);
}

/**
 * Generate embedding for text using OpenAI
 */
async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });

  return response.data[0].embedding;
}

/**
 * Calculate cosine similarity between two vectors
 */
function cosineSimilarity(a: number[], b: number[]): number {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * Retrieve relevant chunks based on query
 */
export async function retrieveRelevantContext(
  query: string,
  topK: number = 3
): Promise<KnowledgeChunk[]> {
  if (knowledgeBase.length === 0) {
    await initializeKnowledgeBase();
  }

  // Generate query embedding
  const queryEmbedding = await generateEmbedding(query);

  // Calculate similarities
  const similarities = knowledgeBase.map((chunk) => ({
    chunk,
    similarity: cosineSimilarity(queryEmbedding, chunk.embedding),
  }));

  // Sort by similarity and return top K
  return similarities
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, topK)
    .map((s) => s.chunk);
}

/**
 * Get knowledge base for initial load (cached)
 */
export function getKnowledgeBase(): KnowledgeChunk[] {
  return knowledgeBase;
}
