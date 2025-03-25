"use server";

import { supabaseAdmin } from "@/utils/supabase/admin";
import prisma from "@/utils/prisma";
import { getUserAuth } from "@/utils/user-actions/get-user";

export const deleteUser = async () => {
  const user = await getUserAuth();

  if (!user.email) {
    return { error: "No user found" };
  }

  try {
    // Delete related records using email
    await prisma.subscription.deleteMany({ where: { email: user.email } });
    await prisma.invoice.deleteMany({ where: { userEmail: user.email } });
    await prisma.progress.deleteMany({ where: { userEmail: user.email } });

    // Delete courses only if they were linked to this user's progress
    const coursesToDelete = await prisma.progress.findMany({
      where: { userEmail: user.email },
      select: { courseNr: true },
    });

    if (coursesToDelete.length > 0) {
      await prisma.course.deleteMany({
        where: {
          id: {
            in: coursesToDelete.map((p) => p.courseNr),
          },
        },
      });
    }

    // Delete the user record in Prisma
    await prisma.user.delete({ where: { email: user.email } });

    // Delete from Supabase Auth (Admin API)
    const { error } = await supabaseAdmin.auth.admin.deleteUser(user.id);
    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch {
    return { error: "Failed to delete user" };
  }
};
