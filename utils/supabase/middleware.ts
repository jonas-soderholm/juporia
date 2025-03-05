// // import { createServerClient } from "@supabase/ssr";
// import { type NextRequest, NextResponse } from "next/server";

// export const updateSession = async (request: NextRequest) => {
//   // This `try/catch` block is only here for the interactive tutorial.
//   // Feel free to remove once you have Supabase connected.
//   try {
//     // Create an unmodified response
//     const response = NextResponse.next({
//       request: {
//         headers: request.headers,
//       },
//     });

//     // const supabase = createServerClient(
//     //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     //   {
//     //     cookies: {
//     //       getAll() {
//     //         return request.cookies.getAll();
//     //       },
//     //       setAll(cookiesToSet) {
//     //         cookiesToSet.forEach(({ name, value }) =>
//     //           request.cookies.set(name, value)
//     //         );
//     //         response = NextResponse.next({
//     //           request,
//     //         });
//     //         cookiesToSet.forEach(({ name, value, options }) =>
//     //           response.cookies.set(name, value, options)
//     //         );
//     //       },
//     //     },
//     //   }
//     // );

//     return response;
//   } catch (e) {
//     console.error("Error occurred while creating Supabase client:", e);
//     return NextResponse.next({
//       request: {
//         headers: request.headers,
//       },
//     });
//   }
// };

import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  // This `try/catch` block is only here for the interactive tutorial.
  // Feel free to remove once you have Supabase connected.
  try {
    // Create an unmodified response
    const response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });

    return response;
  } catch (e) {
    console.error("Error occurred while creating Supabase client:", e);
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
};
