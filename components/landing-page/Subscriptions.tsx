import { LogoName } from "@/constants/logo-name";
import { Prices } from "@/constants/prices";
import Link from "next/link";

export default function Subscriptions() {
  const subscriptions = [
    {
      title: "Free",
      description: `5 Lessons for free. Try them out and see if ${LogoName.AppName} is for you or your team.`,
      price: Prices.Free,
      buttontext: "Try 5 Free Lessons Now",
      route: "/courses",
      features: [
        "5 Free Lessons",
        "No Credit Card Required",
        "Limited Course Access",
      ],
    },
    {
      title: "Individual Plan",
      description: "All current and upcoming courses included.",
      price: Prices.Individual,
      buttontext: "Get Access",
      route: "/account?tab=1",
      features: [
        "One Month Full Access",
        "All Courses Included",
        "New Lessons Or Courses Automatically Added",
      ],
    },
    {
      title: "Team Invites",
      description:
        "Add team members at a discounted rate (minimum of 2 seats).",
      price: Prices.Team,
      buttontext: "Start Inviting Team Members",
      route: "/account?tab=2",
      features: [
        "Invite Team Members",
        "Discounted Per Seat Pricing",
        "Invited Members Get Their Own Individual Plan",
      ],
    },
  ];

  return (
    <>
      <div className="flex justify-center mx-auto font-bold text-3xl mb-14 mt-[10rem]">
        Pricing
      </div>

      <div className="flex flex-wrap justify-center max-w-[80rem] mx-auto px-4 gap-8">
        {subscriptions.map((subscription, index) => (
          <div
            key={index}
            className="card border-2 border-gray-600 md:w-72 w-full max-w-xs rounded-lg flex flex-col justify-between min-h-[480px]"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title">{subscription.title}</h2>
              <div className="price">
                <div className="text-[4rem] font-bold">
                  {subscription.price}$
                </div>
              </div>
              <p className="text-sm">{subscription.description}</p>

              {/* Fix: Ensure features list starts at the same height */}
              <ul className="mt-4 text-left text-xs w-full min-h-[120px]">
                {subscription.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#2563eb"
                      className="flex-shrink-0"
                    >
                      <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                    <span className="text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="card-actions">
                <Link
                  href={subscription.route}
                  aria-label={subscription.buttontext}
                >
                  <button className="btn-custom-primary-reverse mt-6 hover:bg-blue-500">
                    {subscription.buttontext}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
