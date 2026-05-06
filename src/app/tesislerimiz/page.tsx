import type { Metadata } from "next";
import { TesislerimizPage } from "@/components/tesisler/TesislerimizPage";

export const metadata: Metadata = {
  title: "Tesislerimiz | AS Cimento",
  description: "AS Cimento tesislerine ait iletisim bilgileri ve tesis detaylari.",
};

export default function TesislerimizRoute() {
  return <TesislerimizPage />;
}
