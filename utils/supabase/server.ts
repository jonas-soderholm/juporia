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

"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = async () => {
  const cookieStore = await cookies(); // Ensure cookies are awaited

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          try {
            return cookieStore.getAll();
          } catch (error) {
            console.error("❌ Error getting cookies:", error);
            return [];
          }
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              try {
                cookieStore.set(name, value, options);
                console.log(`✅ Cookie set: ${name}`);
              } catch (error) {
                console.error(`❌ Error setting cookie [${name}]:`, error);
              }
            });
          } catch (error) {
            console.error("❌ Error setting cookies:", error);
          }
        },
      },
    }
  );
};
