import { data } from "cypress/types/jquery";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// async function deleteProgressRecord(userId: string, courseId: number) {
//   try {
//     const deletedProgress = await prisma.progress.delete({
//       where: {
//         userId_courseId: {
//           userId: userId,
//           courseId: courseId,
//         },
//       },
//     });
//     console.log("Deleted progress record:", deletedProgress);
//   } catch (error) {
//     console.error("Error deleting progress record:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// // Call the function with the specific userId and courseId
// deleteProgressRecord("24bf1a16-2fb6-4ce1-966d-9de9f4250e0a", 2);

async function updateLessonNr(userId: string, lessonNr: number) {
  try {
    const deletedProgress = await prisma.progress.update({
      where: {
        userId_courseId: {
          userId: userId,
        },
      },
      data: {
        lessonNr: lessonNr,
      },
    });
    console.log("Deleted progress record:", deletedProgress);
  } catch (error) {
    console.error("Error deleting progress record:", error);
  } finally {
    await prisma.$disconnect();
  }
}

updateLessonNr("24bf1a16-2fb6-4ce1-966d-9de9f4250e0a", 2);
