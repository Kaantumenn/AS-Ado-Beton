import { SiteHeader } from "@/components/site/SiteHeader";
import { SectionHero } from "./sections/SectionHero";
import { SectionIntro } from "./sections/SectionIntro";
import { SectionStats } from "./sections/SectionStats";
import { SectionKurumsalPanel } from "./sections/SectionKurumsalPanel";
import { SectionTesisler } from "./sections/SectionTesisler";
import { SectionAwards } from "./sections/SectionAwards";
import { SectionTarihce } from "./sections/SectionTarihce";
import { SectionPlaceholders } from "./sections/SectionPlaceholders";
import { SectionIso500Vergi } from "./sections/SectionIso500Vergi";
import { SectionHaberlerCarousel } from "./sections/SectionHaberlerCarousel";
import { SectionAdoBeton } from "./sections/SectionAdoBeton";
import { SiteFooter } from "@/components/site/SiteFooter";

export function HomePage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1" role="main">
        <SectionHero />
        <SectionIntro />
        <SectionAdoBeton />
        <SectionIso500Vergi />
        <SectionStats />
        <SectionTarihce />
        <SectionHaberlerCarousel />
        <SectionKurumsalPanel />
        {/* <SectionTesisler /> */}
        <SectionAwards />
      </main>
      <SiteFooter />
    </div>
  );
}
