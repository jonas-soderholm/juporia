"use client";

import { createCheckoutSession } from "@/utils/stripe/stripe-actions";

type UserAccessProps = {
  email: string | null;
  userId: string;
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
      {!subscribed ? (
        <div>
          <h2 className="text-lg font-semibold text-green-600 mb-4">Active!</h2>
          <p className="mb-1">
            You have <span className="font-bold">{daysLeft} days</span>{" "}
            remaining on your Premium Plan.
          </p>
          <p className="mb-6">You can also gift a Premium Plan to others!</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleCheckout()} // For gifting
              className="btn-custom-primary-reverse"
            >
              Gift a Premium Plan
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold text-red-600 mb-4">Inactive</h2>
          <p className="mb-6">Upgrade to Premium to unlock all features!</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleCheckout()} // Regular upgrade
              className="btn-custom-primary-reverse"
            >
              Upgrade to Premium
            </button>
            <button
              onClick={() => handleCheckout()} // For gifting
              className="btn-custom-primary-lesson"
            >
              Gift Premium Plan
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
