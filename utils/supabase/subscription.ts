import { getUserId } from "@/utils/supabase/get-user";
import { redirect } from "next/navigation";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function redirectIfNotSubscribed() {
  try {
    const userId = await getUserId();
    const subscribed = await isSubscribed();

    if (!userId || !subscribed) {
      redirect("/sign-in");
      return null;
    }
  } catch (error) {
    console.error("Error validating subscription:", error);
    redirect("/sign-in");
    return null;
  }
}

export async function isSubscribed() {
  try {
    // Fetch the authenticated user's ID
    const userId = await getUserId();

    // Check if the user has an active subscription
    const subscription = await prisma.subscription.findFirst({
      where: {
        userId: userId,
        isActive: true, // Ensure subscription is active
      },
    });

    return !!subscription; // Return true if an active subscription exists, otherwise false
  } catch (error) {
    console.error("Error checking subscription:", error);
    return false; // Default to false if any error occurs
  }
}

export async function createSubscription() {
  const userId = await getUserId();
  // Define the subscription start date (current time)
  const startDate = new Date();

  // Define the subscription end date (e.g., 1 month from startDate)
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + 1); // Add 1 month

  // Create the subscription
  const subscription = await prisma.subscription.create({
    data: {
      userId: userId,
      startDate: startDate,
      endDate: endDate,
      isActive: true,
    },
  });

  return subscription;
}
