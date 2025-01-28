// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";
// import { createOrUpdateSubscription } from "@/utils/user-actions/subscription";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2024-12-18.acacia",
// });

// export async function POST(req: NextRequest) {
//   const payload = await req.text();
//   const sig = req.headers.get("stripe-signature")!;
//   let event: Stripe.Event;

//   try {
//     // Verify the Stripe signature
//     event = stripe.webhooks.constructEvent(
//       payload,
//       sig,
//       process.env.STRIPE_WEBHOOK_SECRET! // This comes from your Stripe Dashboard
//     );
//   } catch (err) {
//     console.error("Webhook signature verification failed:", err);
//     return new NextResponse("Webhook Error", { status: 400 });
//   }

//   // Handle the specific event types you care about
//   switch (event.type) {
//     case "checkout.session.completed": {
//       const session = event.data.object as Stripe.Checkout.Session;

//       // Access metadata from the session
//       const userId = session.metadata?.userId;

//       if (!userId) {
//         console.error("User ID is missing from metadata");
//         return new NextResponse("User ID is missing", { status: 400 });
//       }

//       try {
//         // Use the existing `createOrUpdateSubscription` function
//         const subscription = await createOrUpdateSubscription(userId);
//         console.log(`Subscription created or updated for user: ${userId}`);
//       } catch (error) {
//         console.error("Error creating or updating subscription:", error);
//         return new NextResponse("Internal Server Error", { status: 500 });
//       }

//       break;
//     }

//     case "payment_intent.succeeded": {
//       const paymentIntent = event.data.object as Stripe.PaymentIntent;

//       // Access metadata from the Payment Intent
//       const userId = paymentIntent.metadata?.userId;

//       if (!userId) {
//         console.error("User ID is missing from metadata");
//         return new NextResponse("User ID is missing", { status: 400 });
//       }

//       try {
//         // Use the existing `createOrUpdateSubscription` function
//         const subscription = await createOrUpdateSubscription(userId);
//         console.log(`Subscription created or updated for user: ${userId}`);
//       } catch (error) {
//         console.error("Error creating or updating subscription:", error);
//         return new NextResponse("Internal Server Error", { status: 500 });
//       }

//       break;
//     }

//     default:
//       console.warn(`Unhandled event type: ${event.type}`);
//   }

//   return new NextResponse("Webhook received", { status: 200 });
// }

// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";
// import prisma from "@/utils/prisma"; // Assuming you have a centralized Prisma client
// import { createOrUpdateSubscription } from "@/utils/user-actions/subscription";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2024-12-18.acacia",
// });

// export async function POST(req: NextRequest) {
//   const payload = await req.text();
//   const sig = req.headers.get("stripe-signature")!;
//   let event: Stripe.Event;

//   try {
//     // Verify the Stripe signature
//     event = stripe.webhooks.constructEvent(
//       payload,
//       sig,
//       process.env.STRIPE_WEBHOOK_SECRET!
//     );
//   } catch (err) {
//     console.error("Webhook signature verification failed:", err);
//     return new NextResponse("Webhook Error", { status: 400 });
//   }

//   // Handle the specific event types you care about
//   switch (event.type) {
//     case "checkout.session.completed": {
//       const session = event.data.object as Stripe.Checkout.Session;

//       const userId = session.metadata?.userId;
//       const amount = session.amount_total ? session.amount_total / 100 : 0; // Stripe amount is in cents
//       const status = session.payment_status; // "paid", "unpaid", etc.
//       const payDate = new Date();

//       if (!userId) {
//         console.error("User ID is missing from metadata");
//         return new NextResponse("User ID is missing", { status: 400 });
//       }

//       try {
//         // Create or update the subscription
//         await createOrUpdateSubscription(userId);

//         // Create an invoice in your database
//         await prisma.invoice.create({
//           data: {
//             userId,
//             amount,
//             status,
//             payDate,
//           },
//         });

//         console.log(`Invoice created for user: ${userId}`);
//       } catch (error) {
//         console.error("Error handling checkout.session.completed:", error);
//         return new NextResponse("Internal Server Error", { status: 500 });
//       }

//       break;
//     }

//     case "payment_intent.succeeded": {
//       const paymentIntent = event.data.object as Stripe.PaymentIntent;

//       const userId = paymentIntent.metadata?.userId;
//       const amount = paymentIntent.amount ? paymentIntent.amount / 100 : 0; // Stripe amount is in cents
//       const status = "paid";
//       const payDate = new Date();

//       if (!userId) {
//         console.error("User ID is missing from metadata");
//         return new NextResponse("User ID is missing", { status: 400 });
//       }

//       try {
//         // Create or update the subscription
//         await createOrUpdateSubscription(userId);

//         // Create an invoice in your database
//         await prisma.invoice.create({
//           data: {
//             userId,
//             amount,
//             status,
//             payDate,
//           },
//         });

//         console.log(`Invoice created for user: ${userId}`);
//       } catch (error) {
//         console.error("Error handling payment_intent.succeeded:", error);
//         return new NextResponse("Internal Server Error", { status: 500 });
//       }

//       break;
//     }

//     default:
//       console.warn(`Unhandled event type: ${event.type}`);
//   }

//   return new NextResponse("Webhook received", { status: 200 });
// }
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import prisma from "@/utils/prisma";
import { createOrUpdateSubscription } from "@/utils/user-actions/subscription";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const sig = req.headers.get("stripe-signature")!;
  let event: Stripe.Event;

  // Step 1: Verify the Stripe signature
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

  // Step 2: Handle specific event types
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;
        const planMembers = session.metadata?.planMembers || ""; // Comma-separated emails
        const amount = session.amount_total ? session.amount_total / 100 : 0; // Stripe amount is in cents
        const status = session.payment_status; // "paid", "unpaid", etc.
        const stripeRef = session.payment_intent as string; // Payment Intent ID
        const payDate = new Date();

        if (!userId) {
          console.error("User ID is missing from metadata");
          return new NextResponse("User ID is missing", { status: 400 });
        }

        // Create or update the subscription
        await createOrUpdateSubscription(userId);

        // Create the invoice in the database
        console.log("Creating invoice...");
        const invoice = await prisma.invoice.create({
          data: {
            userId,
            amount,
            status,
            payDate,
            stripeRef,
            planMembers,
          },
        });

        break;
      }

      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        const userId = paymentIntent.metadata?.userId;
        const planMembers = paymentIntent.metadata?.planMembers || ""; // Comma-separated emails
        const amount = paymentIntent.amount ? paymentIntent.amount / 100 : 0; // Stripe amount is in cents
        const status = "paid";
        const stripeRef = paymentIntent.id; // Payment Intent ID
        const payDate = new Date();

        if (!userId) {
          console.error("User ID is missing from metadata");
          return new NextResponse("User ID is missing", { status: 400 });
        }

        // Create or update the subscription
        await createOrUpdateSubscription(userId);

        // Create the invoice in the database
        const invoice = await prisma.invoice.create({
          data: {
            userId,
            amount,
            status,
            payDate,
            stripeRef,
            planMembers,
          },
        });
        break;
      }

      default:
        console.warn("Unhandled event type:", event.type);
    }
  } catch (error) {
    console.error(`Error processing event ${event.type}:`, error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }

  console.log("Webhook processing complete");
  return new NextResponse("Webhook received", { status: 200 });
}
