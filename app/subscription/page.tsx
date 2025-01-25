import { redirectIfNotLoggedIn } from "@/utils/supabase/get-user";

export default async function SubscriptionPage() {
  // Ensure user is authenticated
  await redirectIfNotLoggedIn();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1>Subscription</h1>
    </div>
  );
}
