import { json } from "stream/consumers";

// export async function GET() {
//   const data = { message: "Hello" };
//   return Response.json(data);
// }

export async function GET() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  return Response.json(posts);
}

// asd
