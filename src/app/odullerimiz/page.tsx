import type { Metadata } from "next";
import { OdullerimizPage } from "@/components/oduller/OdullerimizPage";

export const metadata: Metadata = {
  title: "Odullerimiz | AS Cimento",
  description: "AS Cimento'nun sektorel basarilarini yansitan odul ve plaketleri.",
};

export default function OdullerimizRoute() {
  return <OdullerimizPage />;
}
