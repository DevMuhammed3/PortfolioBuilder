"use client";

// import { Portfolio } from "@/lib/services/portfolios-service";
import MinimalHero from "./sections/hero";

export default function MinimalDevTemplate({ portfolio }: any) {
  return (
    <main>
      <MinimalHero portfolio={portfolio} />
    </main>
  );
}
