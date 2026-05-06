import type { Metadata } from "next";
import { VideoGaleriPage } from "@/components/medya/VideoGaleriPage";

export const metadata: Metadata = {
  title: "Video Galeri | AS Cimento",
  description: "AS Cimento kurumsal video galerisi.",
};

export default function VideoGaleriRoute() {
  return <VideoGaleriPage />;
}
