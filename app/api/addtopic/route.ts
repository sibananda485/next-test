import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  db.$connect();
  try {
    const { title, description, tag } = await req.json();

    const topic = await db.topic.create({
      data: {
        title,
        description,
        tag,
      },
    });
    return NextResponse.json(topic);
  } catch (error) {
    console.log("[topic_CREATION]", error);
  } finally {
    db.$disconnect();
  }
}
