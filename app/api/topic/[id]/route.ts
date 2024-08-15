import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { values } = await req.json();

  const topic = await db.topic.update({
    where: {
      id: params.id,
    },
    data: {
      ...values,
    },
  });

  if (!topic) return new NextResponse("Not found", { status: 404 });

  return NextResponse.json(topic);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {

  const topic = await db.topic.delete({
    where: {
      id: params.id,
    },
  });

  if (!topic) return new NextResponse("Not found", { status: 404 });

  return new NextResponse("topic Deleted Successfully", { status: 200 });
}
