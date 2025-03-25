import { redirect } from "next/navigation";
import { getUserAuth } from "@/utils/user-actions/get-user";
import { isSubscribedNow } from "@/utils/user-actions/subscription";
import AccountTabsLayout from "@/components/account/AccountTabsLayout";
import UserOverview from "@/components/account/UserOverview";
import IndividualPlan from "@/components/account/IndividualPlan";
import Team from "@/components/account/Team";
import Invoices from "@/components/account/Invoices";
import Settings from "@/components/account/Settings";

export default async function AccountLayout() {
  const accountData = await getUserAuth();
  const isSubscribed = accountData.email
    ? await isSubscribedNow(accountData.email)
    : { isSubscribed: false, daysLeft: null };

  // Redirect if the user is not authenticated
  if (!accountData || !accountData.email) {
    // redirect("/sign-in");
    redirect(`/sign-in?redirect=${encodeURIComponent("/account?tab=1")}`);
  }

  // Define menu items directly with the fetched data
  const menuItems = [
    {
      name: "Overview",
      content: (
        <UserOverview
          email={accountData.email}
          subscribed={isSubscribed.isSubscribed}
          daysLeft={isSubscribed.daysLeft}
        />
      ),
    },
    {
      name: "Individual Plan",
      content: (
        <IndividualPlan
          email={accountData.email}
          subscribed={isSubscribed.isSubscribed}
          daysLeft={isSubscribed.daysLeft}
        />
      ),
    },
    {
      name: "Team",
      content: <Team />,
    },
    {
      name: "Invoices",
      content: <Invoices />,
    },
    {
      name: "Settings",
      content: <Settings />,
    },
  ];

  // Render the client layout with the menu items
  return <AccountTabsLayout menuItems={menuItems} />;
}
