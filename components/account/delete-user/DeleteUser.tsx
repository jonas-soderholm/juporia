"use server";

import { supabaseAdmin } from "@/utils/supabase/admin";
import prisma from "@/utils/prisma";
import { getUserAuth } from "@/utils/user-actions/get-user";

export const deleteUser = async () => {
  const user = await getUserAuth();

  if (!user.id || !user.email) {
    return { error: "No user found" };
  }

  try {
    // Delete related records
    await prisma.subscription.deleteMany({ where: { email: user.email } });
    await prisma.invoice.deleteMany({ where: { userId: user.id } });
    await prisma.progress.deleteMany({ where: { userId: user.id } });
    await prisma.course.deleteMany({
      where: {
        id: {
          in: (
            await prisma.progress.findMany({
              where: { userId: user.id },
              select: { courseNr: true },
            })
          ).map((p) => p.courseNr), // Get only courses linked to this user
        },
      },
    });

    // Delete the user record in Prisma
    await prisma.user.delete({ where: { id: user.id } });

    // Delete from Supabase Auth (Admin API)
    const { error } = await supabaseAdmin.auth.admin.deleteUser(user.id);
    if (error) {
      console.error("Supabase delete error:", error.message);
      return { error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting user:", error);
    return { error: "Failed to delete user" };
  }
};
