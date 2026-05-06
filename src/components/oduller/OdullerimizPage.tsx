"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Award, Building2, ChevronLeft, ChevronRight, X } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

type AwardItem = {
  id: string;
  year: number;
  type: string;
  title: string;
  source: string;
  image: string;
};

const baseAwards: AwardItem[] = Array.from({ length: 13 }, (_, index) => {
  const order = index + 1;
  const customYears: Record<number, number> = {
    1: 2007,
    2: 2011,
    3: 2011,
    4: 2014,
    5: 2014,
    6: 2016,
    7: 2022,
    8: 2022,
    9: 2022,
    10: 2023,
    11: 2023,
    12: 2023,
    13: 2022,
  };
  const customTitles: Record<number, string> = {
    1: "AS ÇİMENTO SAN. ve TİC. A.Ş. 2007 Yılı Burdur İl Birincisi",
    2: "2011 Yılı En Yüksek İstihdam Ödülü",
    3: "2011 Yılı Yüksek Gelir Vergisi Ödülü",
    4: "2014 Yılı Bucak Yüksek Düzeyde Kurumlar Vergisi Ödülü",
    5: "2014 Yılı Yüksek Düzeyde İhracat Ödülü",
    6: "BAİB 2016 Çimento Cam Seramik ve Toprak Ürünleri Sektörü İhracaat Birincisi",
    7: "İhracatın Yıldızları 2022 Çimento Cam Seramik ve Toprak Ürünleri Sektörü İhracat Birincisi",
    8: "Demir Maden Çimento 2022 Yılı Kurumlar Vergisi Gönüllü Uyum Seviyesi Yüksek Mükellefler Ödülü",
    9: "2022 Yılı Kurumlar Vergisi Gönüllü Uyum Ödülü",
    10: "Türkiye Tek Yürek Kampanyasına Katkılarımız İçin AFAD'dan Teşekkür Belgesi",
    11: "LÖSEV Yaşam Sertifikası ile Lösemili Çocuklara Destek Verdik",
    12: "2023 Yılı Kurumlar Vergisi Gönüllü Uyum Ödülü İçin Teşekkür Belgesi",
    13: "AS ADO 2022 Yılı Kurumlar Vergisi Gönüllü Uyum Seviyesi Yüksek Mükellefler Ödülü",
  };

  return {
    id: String(order),
    year: customYears[order] ?? 0,
    type: "Ödül",
    title: customTitles[order] ?? `Ödül ${String(order).padStart(2, "0")}`,
    source: "AS Çimento",
    image: `/awards-page/odul-${order}.png`,
  };
});

const awards: AwardItem[] = [...baseAwards].sort(
  (a, b) => b.year - a.year || Number(b.id) - Number(a.id)
);

export function OdullerimizPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const activeAward = selectedIndex !== null ? awards[selectedIndex] : null;

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") {
        setSelectedIndex((prev) => ((prev ?? 0) + 1) % awards.length);
      }
      if (event.key === "ArrowLeft") {
        setSelectedIndex((prev) => ((prev ?? 0) - 1 + awards.length) % awards.length);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex]);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 bg-(--section-alt)" role="main">
        <section className="border-b border-zinc-200/70 bg-linear-to-b from-zinc-50 to-white py-12 dark:border-zinc-700/70 dark:from-zinc-900 dark:to-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-(--primary-blue) dark:bg-sky-900/35">
                <Award className="h-6 w-6" />
              </span>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Ödüllerimiz
                </h1>
                <nav aria-label="Breadcrumb" className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  <ol className="flex items-center gap-2">
                    <li>
                      <Link href="/" className="transition hover:text-(--primary-blue)">
                        Anasayfa
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-zinc-700 dark:text-zinc-200">Ödüllerimiz</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {awards.map((item, index) => (
                <article
                  key={item.id}
                  className="group mx-auto flex h-full w-[75%] flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_12px_34px_-24px_rgba(56,189,248,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgba(56,189,248,0.55)] dark:border-zinc-700 dark:bg-zinc-900"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className="block w-full text-left"
                  >
                    <div className="flex w-full items-center justify-center bg-zinc-50 dark:bg-zinc-800/40">
                      <div className="flex w-full items-center justify-center overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
                        <Image
                          src={item.image}
                          alt={`${item.title} ödülü`}
                          width={1200}
                          height={1200}
                          className="h-auto w-full object-contain object-center transition duration-300 group-hover:scale-[1.02]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </button>
                  <div className="flex w-full flex-1 flex-col gap-2 px-4 pb-5 pt-4">
                    <p className="text-xs font-semibold tracking-widest text-(--primary-blue) uppercase">
                      {item.type}
                    </p>
                    <h2 className="text-base font-semibold leading-snug break-words text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </h2>
                    <p className="mt-auto flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                      <Building2 className="h-4 w-4 text-(--primary-blue)" />
                      {item.source}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

      {activeAward ? (
        <div
          className="fixed inset-0 z-1400 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Ödül görseli önizleme"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl border border-white/10 bg-zinc-950/90 p-2 sm:p-2.5"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-2 top-2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/55 p-2 text-white transition hover:bg-black/75"
              aria-label="Kapat"
            >
              <X className="h-4.5 w-4.5" />
            </button>

            <button
              type="button"
              onClick={() => setSelectedIndex((prev) => ((prev ?? 0) - 1 + awards.length) % awards.length)}
              className="absolute left-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 p-2 text-white transition hover:bg-black/75"
              aria-label="Önceki ödül"
            >
              <ChevronLeft className="h-4.5 w-4.5" />
            </button>

            <button
              type="button"
              onClick={() => setSelectedIndex((prev) => ((prev ?? 0) + 1) % awards.length)}
              className="absolute right-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 p-2 text-white transition hover:bg-black/75"
              aria-label="Sonraki ödül"
            >
              <ChevronRight className="h-4.5 w-4.5" />
            </button>

            <div className="relative h-[70vh] w-full overflow-hidden rounded-lg bg-white/95">
              <Image
                src={activeAward.image}
                alt={`${activeAward.title} ödülü`}
                fill
                className="object-contain object-center p-1.5 sm:p-2.5"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
