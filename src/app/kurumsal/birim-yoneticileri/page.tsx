import type { Metadata } from "next";
import { BirimYoneticileriPage } from "@/components/kurumsal/birim-yoneticileri/BirimYoneticileriPage";

export const metadata: Metadata = {
  title: "Birim Yöneticileri | AS Çimento",
  description: "AS Çimento birim yöneticileri ve kurumsal organizasyon yapısı.",
};

export default function BirimYoneticileriRoute() {
  return <BirimYoneticileriPage />;
}
