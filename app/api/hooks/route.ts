import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createOrUpdateSubscription } from "@/utils/supabase/subscription";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const sig = req.headers.get("stripe-signature")!;
  let event: Stripe.Event;

  try {
    // Verify the Stripe signature
    event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET! // This comes from your Stripe Dashboard
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return new NextResponse("Webhook Error", { status: 400 });
  }

  // Handle the specific event types you care about
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      // Access metadata from the session
      const userId = session.metadata?.userId;

      if (!userId) {
        console.error("User ID is missing from metadata");
        return new NextResponse("User ID is missing", { status: 400 });
      }

      try {
        // Use the existing `createOrUpdateSubscription` function
        const subscription = await createOrUpdateSubscription();
        console.log(`Subscription created or updated for user: ${userId}`);
      } catch (error) {
        console.error("Error creating or updating subscription:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
      }

      break;
    }

    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;

      // Access metadata from the Payment Intent
      const userId = paymentIntent.metadata?.userId;

      if (!userId) {
        console.error("User ID is missing from metadata");
        return new NextResponse("User ID is missing", { status: 400 });
      }

      try {
        // Use the existing `createOrUpdateSubscription` function
        const subscription = await createOrUpdateSubscription();
        console.log(`Subscription created or updated for user: ${userId}`);
      } catch (error) {
        console.error("Error creating or updating subscription:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
      }

      break;
    }

    default:
      console.warn(`Unhandled event type: ${event.type}`);
  }

  return new NextResponse("Webhook received", { status: 200 });
}
