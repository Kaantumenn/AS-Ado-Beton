import type { Metadata } from "next";
import { GrupSirketleriPage } from "@/components/kurumsal/grup-sirketleri/GrupSirketleriPage";

export const metadata: Metadata = {
  title: "Grup Sirketleri | AS Cimento",
  description: "AS Cimento grup sirketleri bilgileri.",
};

export default function GrupSirketleriRoute() {
  return <GrupSirketleriPage />;
}
