import type { Metadata } from "next";
import { HaberlerPage } from "@/components/medya/HaberlerPage";

export const metadata: Metadata = {
  title: "Haberler | AS Cimento",
  description: "AS Cimento'dan guncel haberler ve duyurular.",
};

export default function HaberlerRoute() {
  return <HaberlerPage />;
}

