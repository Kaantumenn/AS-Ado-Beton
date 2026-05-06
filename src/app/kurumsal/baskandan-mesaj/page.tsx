import type { Metadata } from "next";
import { BaskandanMesajPage } from "@/components/kurumsal/baskandan-mesaj/BaskandanMesajPage";

export const metadata: Metadata = {
  title: "Baskandan Mesaj | AS Cimento",
  description: "AS Cimento Yonetim Kurulu Baskani mesaj sayfasi.",
};

export default function BaskandanMesajRoute() {
  return <BaskandanMesajPage />;
}
