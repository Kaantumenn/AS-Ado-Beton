import type { Metadata } from "next";
import { TarihcemizPage } from "@/components/kurumsal/tarihcemiz/TarihcemizPage";

export const metadata: Metadata = {
  title: "Tarihcemiz | AS Cimento",
  description: "AS Cimento tarihcesi ve gelisim yolculugu.",
};

export default function TarihcemizRoute() {
  return <TarihcemizPage />;
}
