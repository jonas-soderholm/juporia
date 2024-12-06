import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Hero from "@/components/hero/Hero";
import Subscriptions from "@/components/hero/Subscriptions";
import { ValueProposition } from "@/components/hero/ValueProposition";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <>
      <Hero />
      <ValueProposition />
      <Subscriptions />
    </>
  );
}
