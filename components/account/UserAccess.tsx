"use client";
import { Prices } from "@/constants/prices";
import { createCheckoutSession } from "@/utils/stripe/stripe-actions";

type UserAccessProps = {
  email: string | null;
  subscribed: boolean;
  daysLeft: number | null;
};

export default function UserAccess({ subscribed, daysLeft }: UserAccessProps) {
  const handleCheckout = async () => {
    try {
      const checkoutUrl = await createCheckoutSession();

      if (checkoutUrl) {
        window.location.href = checkoutUrl; // Redirect to Stripe Checkout
      } else {
        alert("Failed to create a Stripe Checkout session.");
      }
    } catch (error) {
      console.error("Error creating Stripe Checkout session:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="mx-auto">
      {subscribed ? (
        <div>
          <div className="flex items-center mb-4 space-x-2">
            <span className="text-xl font-bold">Individual plan</span>
            <h2 className="text-lg font-semibold text-green-600">(Active)</h2>
          </div>
          <p className="text-base mb-1">
            You have{" "}
            <span className="font-semibold text-green-600">
              {daysLeft} days
            </span>{" "}
            remaining on your Individual Plan.
          </p>
        </div>
      ) : (
        <div>
          <div className="flex items-center mb-4 space-x-2">
            <span className="text-xl font-bold">Individual plan</span>
            <h2 className="text-lg font-semibold text-red-600">(Inactive)</h2>
          </div>
          <p className="text-base mb-6">
            Unlock all courses with an Individual Plan. One time payment, no
            automatic renewals. Access for 1 month.
          </p>
          <div className="border-t border-gray-400 mt-6 pt-4">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Billing Settings</h3>
              <p className="text-base text-gray-500">
                You are logged in as{" "}
                <span className="font-semibold text-gray-500">
                  jonas.soderholm89@gmail.com
                </span>
                .
              </p>
              <p className="text-sm text-gray-500"></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-400 p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-lg mb-2">One time Payment</h4>
                <p className="text-base">Individual Plan</p>
                <p className="text-xl font-semibold mt-2">
                  ${Prices.Individual}.00
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Gives you access for 1 month. No subscription, and no
                  automatic renewals.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-gray-400 pt-4">
              <div>
                <p className="text-sm text-gray-500">One time payment</p>
                <p className="text-xl font-semibold">
                  ${Prices.Individual}.00 USD
                </p>
              </div>
              <div>
                <div className="mt-2">
                  <button
                    onClick={() => handleCheckout()}
                    className="bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-semibold transition-all hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                  >
                    Secure Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <p>Powered by </p>
              <img
                src="/images/stripe/stripe-logo.png"
                alt="Powered by Stripe"
                className="w-16"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
