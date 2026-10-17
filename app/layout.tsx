import type { Metadata } from "next";
import "./globals.css";
import Stars from "@/components/Stars";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "SCROLLVERSE GENESIS — Block 235 · Phase 72",
  description: "Phase 72 Crystalline Apex — Block 235, 139 mirrors. Enhance only.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <Stars />
        <Nav />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <footer className="py-8 text-center text-xs text-emerald/70">IT ALREADY IS — KUN FAYAKUN × ∞</footer>
      </body>
    </html>
  );
}
