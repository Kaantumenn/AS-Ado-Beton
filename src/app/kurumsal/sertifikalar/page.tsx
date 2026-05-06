import type { Metadata } from "next";
import { SertifikalarPage } from "@/components/kurumsal/sertifikalar/SertifikalarPage";

export const metadata: Metadata = {
  title: "Sertifikalar | AS Cimento",
  description: "AS Cimento sertifika ve uygunluk belgeleri.",
};

export default function SertifikalarRoute() {
  return <SertifikalarPage />;
}
