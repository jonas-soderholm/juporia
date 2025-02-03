import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import prisma from "@/utils/prisma";
import {
  createOrUpdateIndividualSubscription,
  createOrUpdateTeamSubscription,
} from "@/utils/user-actions/subscription";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const sig = req.headers.get("stripe-signature")!;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return new NextResponse("Webhook Error", { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      // Payment completed successfully
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      const userEmail = session.metadata?.userEmail;
      const planType = session.metadata?.planType;
      const planMembers = session.metadata?.planMembers || "";
      const amount = session.amount_total ? session.amount_total / 100 : 0; // Convert cents to dollars
      const status = session.payment_status;
      const stripeRef = session.payment_intent as string;
      const payDate = new Date();

      if (!userId || !userEmail) {
        return new NextResponse("User ID is missing", { status: 400 });
      }

      // Failsafe: Check if the invoice already exists if supabase is down and the webhook retries
      try {
        // Prevent duplicate invoices
        const existingInvoice = await prisma.invoice.findUnique({
          where: { stripeRef },
        });

        if (existingInvoice) {
          console.log("Duplicate webhook ignored:", stripeRef);
          return new NextResponse("Duplicate webhook ignored", { status: 200 }); // Stripe will NOT retry
        }

        // Create invoice if it doesn’t exist
        await prisma.invoice.create({
          data: { userId, amount, status, payDate, stripeRef, planMembers },
        });
      } catch (error) {
        console.error(`Error processing event ${event.type}:`, error);
        return new NextResponse("Internal Server Error", { status: 500 }); // ✅ Stripe WILL retry
      }

      if (planType === "individual") {
        await createOrUpdateIndividualSubscription(userEmail);
      } else {
        await createOrUpdateTeamSubscription(planMembers);
      }
    }
  } catch (error) {
    console.error(`Error processing event ${event.type}:`, error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }

  return new NextResponse("Webhook received", { status: 200 });
}
