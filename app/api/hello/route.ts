import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("test-table").select("*");

  if (data) {
    return NextResponse.json(data);
  }

  if (error) {
    return NextResponse.json({ error: "failed to fetch" }, { status: 500 });
  }
}

// export async function GET() {
//   const data = { message: "Hello" };
//   return Response.json(data);
// }

// export async function GET() {
//   const data = await fetch("https://api.vercel.app/blog");
//   const posts = await data.json();

//   return Response.json(posts);
// }

// asd
