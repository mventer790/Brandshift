import type { Metadata } from "next";
import FunnelPage from "@/components/funnel/FunnelPage";

export const metadata: Metadata = {
  title: "Brand Shift Online — Book Your Free Strategy Call",
  description:
    "Get a free 30-minute strategy call. We'll audit your digital presence and show you exactly how to generate consistent leads online.",
};

export default function Funnel() {
  return <FunnelPage />;
}
