import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const userId = "24bf1a16-2fb6-4ce1-966d-9de9f4250e0a"; // Replace with actual user ID

  // Assume 5 courses already exist in the database
  const courses = await prisma.course.findMany();
  if (courses.length < 5) {
    throw new Error(
      "Expected at least 5 courses in the database. Seed courses first."
    );
  }

  // Select two courses to seed progress
  const [course1, course2] = courses;

  // Create progress for the selected courses
  await prisma.progress.createMany({
    data: [
      {
        courseId: course1.id,
        userId,
        lessonId: null, // Course-level progress
        sectionId: null, // No specific section
        completed: false,
      },
      {
        courseId: course2.id,
        userId,
        lessonId: null, // Course-level progress
        sectionId: null, // No specific section
        completed: false,
      },
    ],
  });

  console.log(
    `Created progress for user ${userId} in courses: ${course1.id}, ${course2.id}`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
