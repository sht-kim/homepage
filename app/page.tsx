import { Hero } from "@/components/Hero";
import { ImpactBand } from "@/components/ImpactBand";
import { Products } from "@/components/Products";
import { WhyPanel } from "@/components/WhyPanel";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactBand />
      <Products />
      <WhyPanel />
      <Contact />
    </>
  );
}
