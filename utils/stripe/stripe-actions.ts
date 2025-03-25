"use server";
import Stripe from "stripe";
import { getUserAuth } from "../user-actions/get-user";
import prisma from "../prisma";
import { Prices } from "@/constants/prices";
import { redirect } from "next/navigation";

import {
  MIN_TEAM_MEMBERS,
  MAX_TEAM_MEMBERS,
} from "@/constants/teamSubscriptionAmount";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

export async function createCheckoutSessionIndividual() {
  const user = await getUserAuth();

  if (!user || !user.email) {
    redirect("/sign-in");
  }

  const { email } = user;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    customer_email: email, // Prefill the email in Stripe Checkout

    metadata: {
      userEmail: email, // Email
      planType: "individual",
      planMembers: email, // Tells Stripe this is an Individual Plan
    },

    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Individual Plan",
            description: "1-month access",
          },
          unit_amount: Prices.Individual * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/account?tab=1`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/cancel`,
  });

  return session.url;
}

export async function createCheckoutSessionTeam(teamEmails: string[]) {
  const user = await getUserAuth();

  if (!user || !user.email) {
    redirect("/sign-in");
  }

  // Backend validation (prevents API abuse)
  if (
    teamEmails.length < MIN_TEAM_MEMBERS ||
    teamEmails.length > MAX_TEAM_MEMBERS
  ) {
    // throw new Error("Team size must be between 2 and 3 members.");
    redirect("/account?tab=2");
  }

  const sanitizedEmails = [
    ...new Set(teamEmails.map((email) => email.trim().toLowerCase())),
  ];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    customer_email: user.email,

    metadata: {
      userEmail: user.email, // Email
      planType: "team", // Tells Stripe this is a Team Plan
      planMembers: sanitizedEmails.join(", "), // Store team members as JSON
    },

    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Team Plan",
            description: `Individual Plans: ${sanitizedEmails.length} | Users: ${sanitizedEmails.join(", ")}`,
          },
          unit_amount: Prices.Team * 100,
        },
        quantity: sanitizedEmails.length,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/account?tab=3`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
  });

  return session.url;
}

export async function createInvoice(
  userEmail: string, // Updated: Use email instead of userId
  amount: number,
  status: string,
  payDate: Date,
  stripeRef: string,
  planMembers: string
) {
  try {
    const invoice = await prisma.invoice.create({
      data: {
        userEmail, // Updated: Use email as reference
        amount,
        status,
        payDate,
        stripeRef,
        planMembers,
      },
    });

    return invoice;
  } catch {
    redirect("/");
  }
}

export async function getInvoice() {
  const user = await getUserAuth();

  if (!user) {
    redirect("/sign-in");
  }

  try {
    if (!user.email) {
      redirect("/sign-in");
    }

    const invoices = await prisma.invoice.findMany({
      where: {
        userEmail: user.email, // Updated: Use email instead of userId
      },
    });

    return invoices;
  } catch {
    // throw new Error("Failed to fetch invoices");
    redirect("/");
  }
}
