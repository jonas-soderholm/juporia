import { useEffect, useState } from "react";
import { getUserEmail } from "@/utils/supabase/get-user";
import {
  isSubscribed,
  getSubscriptionDaysLeft,
} from "@/utils/supabase/subscription";

function UserOverview() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState<boolean | null>(null);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const email = (await getUserEmail()) ?? null;
        const subscriptionStatus = await isSubscribed();
        const subscriptionDaysLeft = subscriptionStatus
          ? await getSubscriptionDaysLeft()
          : null;

        setUserEmail(email);
        setSubscribed(subscriptionStatus);
        setDaysLeft(subscriptionDaysLeft);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <p className="mt-2">Loading your account...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto rounded-lg">
      <div className="mb-4">
        <p className="">
          <span className="font-semibold">Email:</span>{" "}
          {userEmail ?? "Not available"}
        </p>
      </div>
      <div className="mb-4">
        <p className="">
          <span className="font-semibold">Subscription:</span>{" "}
          {subscribed
            ? `Active (${daysLeft ?? "N/A"} days remaining)`
            : "Inactive"}
        </p>
      </div>
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          Manage Account
        </button>
      </div>
    </div>
  );
}

export default UserOverview;
