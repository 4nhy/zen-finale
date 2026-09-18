import type { Metadata } from "next";
import { SiteNav } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteNav";
import { SiteFooter } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/SiteFooter";
import { AffiliateSection } from "@/components/sites/bymonolog-com-fdc3e3a7/root-8a5edab2/AffiliateSection";

export const metadata: Metadata = {
  title: "Partner Program · Zen Consulting",
  description:
    "Refer clients to Zen and earn 15% of every monthly payment. By invitation, reviewed personally.",
};

export default function PartnersPage() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{
        background: "var(--mono-black-400)",
        color: "var(--mono-beige-100)",
      }}
    >
      <SiteNav />
      <div className="pt-24">
        <AffiliateSection />
      </div>
      <SiteFooter />
    </main>
  );
}
