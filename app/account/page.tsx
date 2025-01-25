"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserOverview from "@/components/account/UserOverview";
import { isSubscribed } from "@/utils/supabase/subscription";
import { getUserEmail } from "@/utils/supabase/get-user";

const menuItems = [
  { name: "Overview", content: <UserOverview /> },
  { name: "Get Access", content: <p>Manage your billing information here.</p> },
  { name: "Invoices", content: <p>View your payment history here.</p> },
];

export default function Layout() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [subscribed, setSubscribed] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [redirecting, setRedirecting] = useState(false); // New state to manage redirection

  useEffect(() => {
    async function checkAuthAndSubscription() {
      try {
        const email = await getUserEmail();
        if (!email) {
          setRedirecting(true); // Prevent rendering anything
          router.push("/sign-in"); // Redirect user
          return; // Prevent further execution
        }

        const subbed = await isSubscribed();
        setSubscribed(subbed);
      } catch (error) {
        console.error("Error checking authentication or subscription:", error);
        setRedirecting(true); // Prevent rendering
        router.push("/sign-in"); // Redirect on error
        return; // Prevent further execution
      } finally {
        setLoading(false);
      }
    }

    checkAuthAndSubscription();
  }, [router]);

  if (redirecting) {
    // If the user is being redirected, prevent rendering anything
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-lg">
        {menuItems.map((item, index) => (
          <button
            key={index}
            role="tab"
            className={`px-4 py-2 text-sm font-medium ${
              activeIndex === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "hover:text-blue-500"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="w-full max-w-2xl h-[15rem]  mt-6 rounded-lg p-6 border border-gray-400">
        <h1 className="text-lg font-bold mb-4">
          {menuItems[activeIndex].name}
        </h1>
        <div className="text-sm">{menuItems[activeIndex].content}</div>
      </div>
    </div>
  );
}
