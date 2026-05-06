import Link from "next/link";
import { ArrowUpRight, Headphones } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { KurumsalQuickNav } from "@/components/kurumsal/KurumsalQuickNav";
import { cn } from "@/lib/cn";

type TimelineItem = {
  year: string;
  text: string;
};

const timeline: TimelineItem[] = [
  {
    year: "1997",
    text: "Türk sanayisinin ve çimento sektörünün önde gelen kuruluşlarından AS Çimento Antalya'da kurulmuştur.",
  },
  {
    year: "2003",
    text: "Burdur ili Bucak ilçesinde çimento fabrikası yatırımı yaparak büyüme yolculuğunu hızlandırmıştır.",
  },
  {
    year: "2005",
    text: "Kısa sürede güçlü bir ivme yakalayarak 1. klinker hattı yatırımını tamamlamıştır.",
  },
  {
    year: "2008",
    text: "Artan talep doğrultusunda 2. klinker hattı yatırımıyla üretim kapasitesini önemli ölçüde artırmıştır.",
  },
  {
    year: "2010",
    text: "Yıllık 6.5 milyon ton çimento öğütme kapasitesiyle entegre çimento üretiminde Türkiye'nin öncü tesislerinden biri olmuştur.",
  },
];

export function TarihcemizPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 bg-(--section-alt)" role="main">
        <section className="border-b border-zinc-200/70 bg-linear-to-b from-zinc-50 to-white py-12 dark:border-zinc-700/70 dark:from-zinc-900 dark:to-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Tarihçemiz
            </h1>
            <nav aria-label="Breadcrumb" className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="transition hover:text-(--primary-blue)">
                    Anasayfa
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>Kurumsal</li>
                <li aria-hidden>/</li>
                <li className="text-zinc-700 dark:text-zinc-200">Tarihçemiz</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
              <KurumsalQuickNav activeKey="tarihcemiz" />

              <article className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-[0_14px_38px_-24px_rgba(56,189,248,0.42)] sm:p-7 dark:border-zinc-700 dark:bg-zinc-900">
                <ol className="space-y-6 sm:space-y-7">
                  {timeline.map((item) => (
                    <li key={item.year} className="relative pl-5 sm:pl-7">
                      <span
                        className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-(--primary-blue) shadow-[0_0_0_5px_rgba(56,189,248,0.14)]"
                        aria-hidden
                      />
                      <div className="space-y-1.5">
                        <h2 className="text-2xl font-semibold leading-none tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
                          {item.year}
                        </h2>
                        <p className="text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
