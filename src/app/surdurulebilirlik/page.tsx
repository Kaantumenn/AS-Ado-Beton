import type { Metadata } from "next";
import { SurdurulebilirlikPage } from "@/components/surdurulebilirlik/SurdurulebilirlikPage";

export const metadata: Metadata = {
  title: "Surdurulebilirlik | AS Cimento",
  description: "AS Cimento'nun surdurulebilirlik yaklasimi ve is modelleri.",
};

export default function SurdurulebilirlikRoute() {
  return <SurdurulebilirlikPage />;
}
