"use server";
import prisma from "../prisma";

const cache = new Map<
  string,
  { data: { isSubscribed: boolean; daysLeft: number | null }; expires: number }
>();

export async function isSubscribedNow(
  userEmail: string
): Promise<{ isSubscribed: boolean; daysLeft: number | null }> {
  const now = Date.now();

  // Normalize email to lowercase to avoid cache mismatches
  const cacheKey = userEmail.toLowerCase();

  // Check cache first
  if (cache.has(cacheKey)) {
    const cached = cache.get(cacheKey)!;
    if (now < cached.expires) {
      return cached.data;
    } else {
      cache.delete(cacheKey); // Expired, remove from cache
    }
  }

  try {
    const subscription = await prisma.subscription.findFirst({
      where: { email: cacheKey },
      select: { startDate: true, endDate: true },
    });

    let result: { isSubscribed: boolean; daysLeft: number | null };

    if (!subscription) {
      result = { isSubscribed: false, daysLeft: null };
    } else {
      const currentTime = new Date();
      const isActive =
        currentTime >= subscription.startDate &&
        currentTime <= subscription.endDate;
      const daysLeft = isActive
        ? Math.ceil(
            (subscription.endDate.getTime() - currentTime.getTime()) /
              (1000 * 60 * 60 * 24)
          )
        : null;

      result = { isSubscribed: isActive, daysLeft };
    }

    // Store in cache with expiration (even if not subscribed) 7 sec
    cache.set(cacheKey, { data: result, expires: now + 10 * 700 });

    return result;
  } catch (error) {
    console.error("Error checking subscription status:", error);
    return { isSubscribed: false, daysLeft: null };
  }
}

export async function createOrUpdateIndividualSubscription(userEmail: string) {
  // Define the subscription start and end dates
  const startDate = new Date();
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + 1); // Add 1 month

  // Find the existing subscription for the user
  const existingSubscription = await prisma.subscription.findFirst({
    where: { email: userEmail }, // Find by userId
  });

  // Use Prisma's upsert to either update or create a subscription
  const subscription = await prisma.subscription.upsert({
    where: {
      id: existingSubscription?.id || 0, // Use the unique ID if found, otherwise provide a placeholder
    },
    update: {
      startDate: startDate, // Update subscription details
      endDate: endDate,
    },
    create: {
      email: userEmail, // Create a new subscription if none exists
      startDate: startDate,
      endDate: endDate,
    },
  });

  return subscription;
}

export async function createOrUpdateTeamSubscription(teamEmails: string) {
  // Convert the comma-separated string into an array
  const teamEmailsArray = teamEmails.split(",");

  // Define the subscription start and end dates
  const startDate = new Date();
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + 1); // Add 1 month only once

  // Use Promise.all() to process all emails in parallel
  const subscriptions = await Promise.all(
    teamEmailsArray.map(async (email) => {
      email = email.trim(); // Trim spaces to avoid errors

      // Find the existing subscription for the user
      const existingSubscription = await prisma.subscription.findFirst({
        where: { email }, // Correct email reference
      });

      // Upsert the subscription
      return prisma.subscription.upsert({
        where: {
          id: existingSubscription?.id || 0, // Use existing ID or fallback
        },
        update: {
          startDate, // Use consistent start date
          endDate,
        },
        create: {
          email, // Correct email reference
          startDate,
          endDate,
        },
      });
    })
  );

  return subscriptions; // Return all created/updated subscriptions
}
