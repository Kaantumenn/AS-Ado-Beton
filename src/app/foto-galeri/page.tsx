import type { Metadata } from "next";
import { FotoGaleriPage } from "@/components/medya/FotoGaleriPage";

export const metadata: Metadata = {
  title: "Foto Galeri | AS Cimento",
  description: "AS Cimento kurumsal foto galerisi.",
};

export default function FotoGaleriRoute() {
  return <FotoGaleriPage />;
}
