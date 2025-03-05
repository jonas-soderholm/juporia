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
  } catch {
    return new NextResponse("Webhook Error", { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      // Extract session data
      const session = event.data.object as Stripe.Checkout.Session;

      const userEmail = session.metadata?.userEmail;
      const planType = session.metadata?.planType;
      const planMembers = session.metadata?.planMembers || "";
      const amount = session.amount_total ? session.amount_total / 100 : 0; // Convert cents to dollars
      const status = session.payment_status;
      const stripeRef = session.payment_intent as string;
      const payDate = new Date();

      if (!userEmail) {
        return new NextResponse("User email is missing", { status: 400 });
      }

      // Check if invoice already exists
      try {
        const existingInvoice = await prisma.invoice.findUnique({
          where: { stripeRef },
        });

        if (existingInvoice) {
          return new NextResponse("Duplicate webhook ignored", { status: 200 });
        }

        // Create invoice if it doesn’t exist
        await prisma.invoice.create({
          data: { userEmail, amount, status, payDate, stripeRef, planMembers },
        });
      } catch {
        return new NextResponse("Internal Server Error", { status: 500 });
      }

      // Create or update subscription
      try {
        if (planType === "individual") {
          await createOrUpdateIndividualSubscription(userEmail);
        } else {
          await createOrUpdateTeamSubscription(planMembers);
        }
      } catch {
        return new NextResponse("Internal Server Error", { status: 500 });
      }
    }
  } catch {
    return new NextResponse("Internal Server Error", { status: 500 });
  }

  return new NextResponse("Webhook received", { status: 200 });
}
