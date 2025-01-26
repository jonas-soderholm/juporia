import { redirect } from "next/navigation";
import { getFullUser } from "@/utils/supabase/get-user";
import AccountTabsLayout from "@/components/account/AccountTabsLayout";
import UserOverview from "@/components/account/UserOverview";

export default async function Layout() {
  const accountData = await getFullUser();

  // Redirect if the user is not authenticated
  if (!accountData.email) {
    redirect("/sign-in");
  }

  // Define menu items directly with the fetched data
  const menuItems = [
    {
      name: "Overview",
      content: (
        <UserOverview
          email={accountData.email}
          subscribed={accountData.subscribed}
          daysLeft={accountData.daysLeft}
        />
      ),
    },
    {
      name: "Get Access",
      content: <p>Manage your billing information here.</p>,
    },
    {
      name: "Invoices",
      content: <p>View your payment history here.</p>,
    },
  ];

  // Render the client layout with the menu items
  return <AccountTabsLayout menuItems={menuItems} />;
}
