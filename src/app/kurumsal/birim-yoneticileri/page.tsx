import type { Metadata } from "next";
import { BirimYoneticileriPage } from "@/components/kurumsal/birim-yoneticileri/BirimYoneticileriPage";

export const metadata: Metadata = {
  title: "Birim Yöneticileri | AS Ado Beton",
  description: "AS Ado Beton birim yöneticileri ve kurumsal organizasyon yapısı.",
};

export default function BirimYoneticileriRoute() {
  return <BirimYoneticileriPage />;
}
