import type { Metadata } from "next";
import { KalitePolitikasiPage } from "@/components/kurumsal/kalite-politikasi/KalitePolitikasiPage";

export const metadata: Metadata = {
  title: "Kalite Politikasi | AS Cimento",
  description: "AS Cimento kalite politikasi ve temel taahhutleri.",
};

export default function KalitePolitikasiRoute() {
  return <KalitePolitikasiPage />;
}
