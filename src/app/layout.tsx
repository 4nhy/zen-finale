import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { LenisScroll } from "@/components/sites/bymonolog-com-fdc3e3a7/shared/LenisScroll";
import { ScrollbarAutoHide } from "@/components/sites/bymonolog-com-fdc3e3a7/shared/ScrollbarAutoHide";
import { RouteStatus } from "@/components/sites/bymonolog-com-fdc3e3a7/shared/RouteStatus";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zen Consulting — Custom software, built and run by us.",
  description:
    "Zen Consulting builds custom software shaped around how your team actually runs — and keeps it running.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${archivoBlack.variable}`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LenisScroll />
        <ScrollbarAutoHide />
        <Suspense fallback={null}>
          <RouteStatus />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
