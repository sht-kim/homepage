import { Hero } from "@/components/Hero";
import { ImpactBand } from "@/components/ImpactBand";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactBand />
      <Products />
      <Contact />
      {/* Upcoming sections (Phase 3+):
          - What is WDAQ-X
          - Products (EG-Icon / Eddy Sensors / Eddy iMSS)
          - How it Works
          - References (Samsung Display + more)
          - Why WDAQ-X (가성비 3가지 근거)
          - Company & Vision
          - Contact
      */}
    </>
  );
}
