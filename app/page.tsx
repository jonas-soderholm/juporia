import Hero from "@/components/hero/Hero";
import Subscriptions from "@/components/hero/Subscriptions";
import { ValueProposition } from "@/components/hero/ValueProposition";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Subscriptions />
    </>
  );
}
