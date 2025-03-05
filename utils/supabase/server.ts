// import { createServerClient } from "@supabase/ssr";
// import { cookies } from "next/headers";

// export const createClient = async () => {
//   const cookieStore = await cookies();

//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return cookieStore.getAll();
//         },
//         setAll(cookiesToSet) {
//           try {
//             cookiesToSet.forEach(({ name, value, options }) => {
//               cookieStore.set(name, value, options);
//             });
//           } catch (error) {
//             console.error("Error setting cookies:", error);
//           }
//         },
//       },
//     }
//   );
// };

// import { createServerClient } from "@supabase/ssr";
// import { cookies } from "next/headers"; // This is used only server-side

// export const createClient = async () => {
//   const cookieStore = await cookies(); // Await to ensure cookies() resolves properly

//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return cookieStore.getAll(); // Accessing cookies once it's awaited
//         },
//         async setAll(cookiesToSet) {
//           try {
//             // Setting cookies after awaiting cookieStore
//             cookiesToSet.forEach(({ name, value, options }) => {
//               cookieStore.set(name, value, options); // Setting cookies after awaiting cookieStore
//             });
//           } catch (error) {
//             console.error("Error setting cookies:", error);
//           }
//         },
//       },
//     }
//   );
// };

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers"; // This is used only server-side
import { redirect } from "next/navigation";

export const createClient = async () => {
  const cookieStore = await cookies(); // Await to ensure cookies() resolves properly

  try {
    return createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll(); // Accessing cookies once it's awaited
          },
          async setAll(cookiesToSet) {
            try {
              // Setting cookies after awaiting cookieStore
              cookiesToSet.forEach(({ name, value, options }) => {
                cookieStore.set(name, value, options); // Setting cookies after awaiting cookieStore
              });
            } catch (error) {
              console.error("Error setting cookies:", error);
              // Redirect only once to avoid infinite loop
              return redirect("/sign-in");
            }
          },
        },
      }
    );
  } catch (error) {
    console.error("Error creating Supabase client:", error);
    // Safe redirect in case the whole client creation fails
    return redirect("/sign-in");
  }
};
