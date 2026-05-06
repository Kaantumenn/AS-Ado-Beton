import type { Metadata } from "next";
import { YonetimKuruluPage } from "@/components/kurumsal/yonetim-kurulu/YonetimKuruluPage";

export const metadata: Metadata = {
  title: "Yonetim Kurulu | AS Cimento",
  description: "AS Cimento yonetim kurulu uyeleri.",
};

export default function YonetimKuruluRoute() {
  return <YonetimKuruluPage />;
}
