import type { Metadata } from "next";
import Funnel3Page from "@/components/funnel3/Funnel3Page";

export const metadata: Metadata = {
  title: "Brand Shift Online — AI Bots Built for South Africa",
  description:
    "We build the best AI bots in Town. Locally hosted, sovereign, and customised for your business.",
};

export default function Funnel3() {
  return <Funnel3Page />;
}
