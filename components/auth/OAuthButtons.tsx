// "use client";

// import { signInWithOAuth } from "@/utils/google-git-auth/google-git-auth-actions";

// export default function OAuthButtons() {
//   return (
//     <div className="flex flex-col gap-2 w-full">
//       {/* Google Button */}
//       <button
//         className="flex items-center justify-center gap-2 bg-white text-black border border-gray-600 py-2 px-4 rounded-md hover:bg-gray-200 transition"
//         onClick={() => signInWithOAuth("google")}
//       >
//         <svg
//           className="w-5 h-5"
//           xmlns="http://www.w3.org/2000/svg"
//           x="0px"
//           y="0px"
//           width="100"
//           height="100"
//           viewBox="0 0 48 48"
//         >
//           <path
//             fill="#FFC107"
//             d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
//           ></path>
//           <path
//             fill="#FF3D00"
//             d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
//           ></path>
//           <path
//             fill="#4CAF50"
//             d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
//           ></path>
//           <path
//             fill="#1976D2"
//             d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
//           ></path>
//         </svg>
//         Sign in with Google
//       </button>

//       {/* GitHub Button */}
//       <button
//         className="flex items-center justify-center gap-2 bg-gray-900 text-white border border-gray-700 py-2 px-4 rounded-md hover:bg-gray-800 transition"
//         onClick={() => signInWithOAuth("github")}
//       >
//         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.206 11.387.6.11.819-.261.819-.578 0-.285-.011-1.242-.015-2.251-3.338.726-4.042-1.61-4.042-1.61-.546-1.384-1.333-1.752-1.333-1.752-1.089-.743.083-.728.083-.728 1.205.084 1.84 1.237 1.84 1.237 1.07 1.832 2.805 1.303 3.49.996.107-.776.418-1.303.76-1.603-2.665-.304-5.466-1.334-5.466-5.933 0-1.31.469-2.382 1.235-3.22-.123-.304-.535-1.526.117-3.177 0 0 1.008-.322 3.302 1.23a11.5 11.5 0 013.007-.404c1.019.005 2.046.137 3.007.404 2.293-1.552 3.3-1.23 3.3-1.23.653 1.651.242 2.873.12 3.177.77.838 1.234 1.91 1.234 3.22 0 4.61-2.805 5.626-5.478 5.922.43.37.814 1.102.814 2.222 0 1.603-.015 2.895-.015 3.289 0 .32.216.694.825.575C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
//         </svg>
//         Sign in with GitHub
//       </button>
//     </div>
//   );
// }

// "use client";

// import { signInWithOAuth } from "@/utils/google-git-auth/google-git-auth-actions";
// import { useSearchParams } from "next/navigation";

// export default function OAuthButtons() {
//   const searchParams = useSearchParams();
//   const redirectUrl = searchParams.get("redirect") || "/";

//   const handleOAuthLogin = async (provider: "google" | "github") => {
//     await signInWithOAuth(provider, redirectUrl);
//   };

//   return (
//     <div className="flex flex-col gap-2 w-full">
//       <button onClick={() => handleOAuthLogin("google")}>
//         Sign in with Google
//       </button>
//       <button onClick={() => handleOAuthLogin("github")}>
//         Sign in with GitHub
//       </button>
//     </div>
//   );
// }

"use client";

import { signInWithOAuth } from "@/utils/google-git-auth/google-git-auth-actions";
import { useSearchParams } from "next/navigation";

export default function OAuthButtons() {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/";

  const handleOAuthLogin = async (provider: "google" | "github") => {
    await signInWithOAuth(provider, redirectUrl);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Google Button */}
      <button
        className="flex items-center justify-center gap-2 bg-white text-black border border-gray-600 py-2 px-4 rounded-md hover:bg-gray-200 transition"
        onClick={() => handleOAuthLogin("google")}
      >
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          ></path>
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          ></path>
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
        </svg>
        Sign in with Google
      </button>

      {/* GitHub Button */}
      <button
        className="flex items-center justify-center gap-2 bg-gray-900 text-white border border-gray-700 py-2 px-4 rounded-md hover:bg-gray-800 transition"
        onClick={() => handleOAuthLogin("github")}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.206 11.387.6.11.819-.261.819-.578 0-.285-.011-1.242-.015-2.251-3.338.726-4.042-1.61-4.042-1.61-.546-1.384-1.333-1.752-1.333-1.752-1.089-.743.083-.728.083-.728 1.205.084 1.84 1.237 1.84 1.237 1.07 1.832 2.805 1.303 3.49.996.107-.776.418-1.303.76-1.603-2.665-.304-5.466-1.334-5.466-5.933 0-1.31.469-2.382 1.235-3.22-.123-.304-.535-1.526.117-3.177 0 0 1.008-.322 3.302 1.23a11.5 11.5 0 013.007-.404c1.019.005 2.046.137 3.007.404 2.293-1.552 3.3-1.23 3.3-1.23.653 1.651.242 2.873.12 3.177.77.838 1.234 1.91 1.234 3.22 0 4.61-2.805 5.626-5.478 5.922.43.37.814 1.102.814 2.222 0 1.603-.015 2.895-.015 3.289 0 .32.216.694.825.575C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
        Sign in with GitHub
      </button>
    </div>
  );
}
