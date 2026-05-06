import type { Metadata } from "next";
import { InsanKaynaklariPage } from "@/components/kurumsal/insan-kaynaklari/InsanKaynaklariPage";

export const metadata: Metadata = {
  title: "Insan Kaynaklari | AS Cimento",
  description: "AS Cimento insan kaynaklari basvuru formu.",
};

export default function InsanKaynaklariRoute() {
  return <InsanKaynaklariPage />;
}
