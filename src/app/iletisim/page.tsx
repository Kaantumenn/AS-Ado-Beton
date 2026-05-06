import type { Metadata } from "next";
import { IletisimPage } from "@/components/iletisim/IletisimPage";

export const metadata: Metadata = {
  title: "Iletisim | AS Cimento",
  description: "AS Cimento iletisim bilgileri, form ve konum haritasi.",
};

export default function IletisimRoute() {
  return <IletisimPage />;
}

