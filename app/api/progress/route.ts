import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // Instantiate PrismaClient to interact with the database

export async function GET(req: Request) {
  try {
    const body = await req.json(); // Parse JSON body
    const { userId, courseId } = body; // Extract `userId` and `courseId`

    if (!userId || !courseId) {
      return NextResponse.json(
        { error: "userId and courseId are required" },
        { status: 400 }
      );
    }

    // Count total lessons in the course
    const totalLessons = await prisma.lesson.count({
      where: { courseId },
    });

    // Count completed lessons for the user
    const completedLessons = await prisma.progress.count({
      where: {
        userId,
        courseId,
        completed: true,
        lessonId: { not: null }, // Ensure it's tied to a specific lesson
      },
    });

    return NextResponse.json({ totalLessons, completedLessons });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
