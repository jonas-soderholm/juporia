"use server";

import prisma from "../prisma";
import { getUserAuth } from "../user-actions/get-user";
import { revalidatePath } from "next/cache";
import { CourseInfo } from "@/constants/course-info";
import { redirect } from "next/navigation";

// Fetch both Course and Progress in a single query
export async function getCourseWithProgress(
  courseNr: number,
  userEmail?: string
) {
  const courseData = await prisma.course.findUnique({
    where: { id: courseNr },
    include: {
      progress: {
        where: { userEmail },
        select: {
          lessonNr: true,
          sectionNr: true,
          completed: true,
        },
      },
    },
  });

  return {
    course: courseData,
    progress: courseData?.progress[0] || {
      lessonNr: 0,
      sectionNr: 0,
      completed: false,
    },
  };
}

export async function updateSectionNr(courseNr: number) {
  const { email: userEmail } = await getUserAuth();

  if (!userEmail) {
    return redirect("/sign-in");
  }

  try {
    await prisma.$transaction(async (tx) => {
      // Increment section number for the given user & course
      await tx.progress.update({
        where: {
          userEmail_courseNr: {
            userEmail,
            courseNr,
          },
        },
        data: {
          sectionNr: { increment: 1 },
        },
      });
    });

    // Get the correct course path dynamically
    const courseEntry = Object.values(CourseInfo).find(
      (entry) => entry.courseNr === courseNr
    );

    if (courseEntry) {
      revalidatePath(`/courses/${courseEntry.path}`);
      // console.log(`Revalidated path: /courses/${courseEntry.path}`);
    } else {
      console.warn(`Course path not found for courseNr: ${courseNr}`);
    }
  } catch (error) {
    console.error(
      `Error updating section number for course ${courseNr}:`,
      error
    );
  }
}

export async function updateLessonNr(courseNr: number) {
  const { email: userEmail } = await getUserAuth();

  if (!userEmail) {
    return redirect("/sign-in");
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.progress.update({
        where: {
          userEmail_courseNr: {
            userEmail,
            courseNr,
          },
        },
        data: {
          lessonNr: { increment: 1 },
        },
      });
    });
  } catch (error) {
    console.error(
      `Error incrementing lesson number for course ${courseNr} and user ${userEmail}:`,
      error
    );
  }
}

export async function resetSectionNr(courseNr: number) {
  const { email: userEmail } = await getUserAuth();

  if (!userEmail) {
    return redirect("/sign-in");
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.progress.update({
        where: {
          userEmail_courseNr: {
            userEmail,
            courseNr,
          },
        },
        data: {
          sectionNr: 0,
        },
      });
    });
  } catch (error) {
    console.error(
      `Error resetting section number for course ${courseNr} and user ${userEmail}:`,
      error
    );
  }
}

export async function getProgress(courseNr: number) {
  const { email: userEmail } = await getUserAuth();

  if (!userEmail) {
    return redirect("/sign-in");
  }

  try {
    const progress = await prisma.progress.findUnique({
      where: { userEmail_courseNr: { userEmail, courseNr } },
      select: { lessonNr: true, sectionNr: true },
    });

    return {
      lessonNr: progress?.lessonNr || 0,
      sectionNr: progress?.sectionNr || 0,
    };
  } catch (error) {
    console.error(`Error retrieving progress for course ${courseNr}:`, error);
    throw error;
  }
}

export async function ensureAndGetAllProgress(courseNr: number) {
  const { email: userEmail } = await getUserAuth();

  if (!userEmail) {
    return redirect("/sign-in");
  }

  // First, fetch existing progress outside of the transaction
  const existingProgress = await prisma.progress.findUnique({
    where: { userEmail_courseNr: { userEmail, courseNr } },
    select: { lessonNr: true, sectionNr: true, completed: true },
  });

  if (existingProgress) return existingProgress;

  // Use a batch transaction instead
  await prisma.$transaction([
    prisma.course.upsert({
      where: { id: courseNr },
      update: {},
      create: { id: courseNr, name: `Course ${courseNr}` },
    }),
    prisma.progress.create({
      data: {
        userEmail,
        courseNr,
        lessonNr: 0,
        sectionNr: 0,
        completed: false,
      },
    }),
  ]);

  return prisma.progress.findUnique({
    where: { userEmail_courseNr: { userEmail, courseNr } },
    select: { lessonNr: true, sectionNr: true, completed: true },
  });
}
