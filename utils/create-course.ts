"use server";

import { PrismaClient } from "@prisma/client";
import { getUserId } from "./supabase/get-user";

const prisma = new PrismaClient();

export async function createCourseAndProgress(courseNr: number) {
  try {
    const userId = await getUserId();

    // Check if the course already exists
    let course = await prisma.course.findUnique({
      where: { id: courseNr },
    });

    // If the course doesn't exist, create it
    if (!course) {
      course = await prisma.course.create({
        data: {
          id: courseNr,
          name: `Course ${courseNr}`,
        },
      });
    }

    // Check if the progress already exists
    const existingProgress = await prisma.progress.findUnique({
      where: {
        userId_courseNr: {
          userId: userId,
          courseNr: courseNr,
        },
      },
    });

    // If the progress doesn't exist, create it
    if (!existingProgress) {
      await prisma.progress.create({
        data: {
          userId: userId,
          courseNr: courseNr,
          lessonNr: 0,
          sectionNr: 0,
          completed: false,
        },
      });
    }
  } catch (error) {
    console.error("Error creating course or progress:", error);
  } finally {
    await prisma.$disconnect();
  }
}
