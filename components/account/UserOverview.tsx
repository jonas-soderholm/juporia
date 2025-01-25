type UserOverviewProps = {
  email: string | null;
  subscribed: boolean;
  daysLeft: number | null;
};

export default function UserOverview({
  email,
  subscribed,
  daysLeft,
}: UserOverviewProps) {
  return (
    <div className="mx-auto rounded-lg">
      <div className="mb-4">
        <p>
          <span className="font-semibold">Email:</span>{" "}
          {email ?? "Not available"}
        </p>
      </div>
      <div className="mb-4">
        <p>
          <span className="font-semibold">Subscription:</span>{" "}
          {subscribed
            ? `Active (${daysLeft ?? "N/A"} days remaining)`
            : "Inactive"}
        </p>
      </div>
      <div className="flex justify-end">
        {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          Manage Account
        </button> */}
      </div>
    </div>
  );
}
