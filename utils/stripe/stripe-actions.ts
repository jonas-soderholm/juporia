"use server";
import Stripe from "stripe";
import { getFullUser } from "../supabase/get-user";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

export async function createCheckoutSession() {
  const priceId = process.env.NEXT_STRIPE_PRICE_ID; // Ensure this is set in your .env file
  const { id, email, subscribed, daysLeft } = await getFullUser();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    customer_email: email, // Prefill the email in Stripe Checkout
    metadata: {
      id, // Attach user ID for webhook reference
      email, // Attach email for webhook reference
    },
    payment_intent_data: {
      metadata: {
        userId: id, // Attach user ID for webhook reference in Payment Intent
        userEmail: email, // Attach email for webhook reference in Payment Intent
      },
    },
    line_items: [
      {
        price: priceId, // Pass the string directly here
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
  });

  return session.url;
}
