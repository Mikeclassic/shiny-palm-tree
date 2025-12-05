import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });

  const { productName } = await req.json();

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "HTTP-Referer": "https://glowseller.com", 
    },
    body: JSON.stringify({
      model: "moonshotai/kimi-k2-thinking",
      messages: [
        {
          role: "user",
          content: `Write a trendy, Gen-Z style Depop description for a product named "${productName}". Include hashtags like #y2k #streetwear.`
        }
      ],
      reasoning: { enabled: true }
    }),
  });

  const data = await response.json();
  return NextResponse.json(data.choices[0].message.content);
}
