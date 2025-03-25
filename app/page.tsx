import Hero from "@/components/landing-page/Hero";
import Pricing from "@/components/landing-page/Pricing";
import { ValueProposition } from "@/components/landing-page/ValueProposition";
import UseAccordion from "@/components/landing-page/UseAccordion";

export default async function ProtectedPage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <UseAccordion />
      <Pricing />
    </>
  );
}
