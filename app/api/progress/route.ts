import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { userId, sectionId, courseId, lessonId, isCorrect } =
    await request.json();

  try {
    if (isCorrect) {
      // Mark section as completed
      await prisma.sectionProgress.upsert({
        where: { userId_sectionId: { userId, sectionId } }, // Requires @@unique([userId, sectionId]) in schema
        create: { userId, sectionId, completed: true },
        update: { completed: true, updatedAt: new Date() },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating progress:", error);
    return NextResponse.json(
      { error: "Failed to update progress" },
      { status: 500 }
    );
  }
}
