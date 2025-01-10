import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function testProgress() {
  try {
    const userId = "24bf1a16-2fb6-4ce1-966d-9de9f4250e0a";
    const courseId = 1;
    const lessonId = 1;
    const sectionId = 1;
    const completed = false;

    console.log("Running test with:", {
      userId,
      courseId,
      lessonId,
      sectionId,
      completed,
    });

    const progress = await prisma.progress.upsert({
      where: {
        userId_courseId_lessonId_sectionId: {
          userId,
          courseId,
          lessonId,
          sectionId,
        },
      },
      update: { completed },
      create: { userId, courseId, lessonId, sectionId, completed },
    });

    console.log("Success:", progress);
  } catch (error) {
    console.error("Error:", error.message, error.stack);
  } finally {
    await prisma.$disconnect();
  }
}

testProgress();
