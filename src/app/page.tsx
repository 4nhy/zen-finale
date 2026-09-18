import { SiteNav } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteNav";
import { Hero } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/Hero";
import { ProblemsSection } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/ProblemsSection";
import { GapSection } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/GapSection";
import { AboutSection } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/AboutSection";
import { CtaSection } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/CtaSection";
import { SiteFooter } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteFooter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteNav />
      <Hero />
      <ProblemsSection />
      <GapSection />
      <AboutSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
