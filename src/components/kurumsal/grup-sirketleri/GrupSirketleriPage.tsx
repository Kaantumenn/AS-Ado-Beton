"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Cpu, Globe, Leaf, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

type Slide = { src: string; alt: string };

function AdoBetonCard() {
  const slides: Slide[] = useMemo(
    () => [
      { src: "/photos/aksu_tesisi.png", alt: "AS Ado Hazır Beton tesis görseli" },
      { src: "/photos/altinova_tesisi.png", alt: "AS Ado Hazır Beton tesis görseli" },
      { src: "/photos/turkler_tesisi.png", alt: "AS Ado Hazır Beton üretim sahası" },

    ],
    []
  );

  const [active, setActive] = useState(0);
  const total = slides.length;

  const visible = useMemo(() => {
    const a = ((active % total) + total) % total;
    const b = (a + 1) % total;
    const c = (a + 2) % total;
    return [slides[a], slides[b], slides[c]];
  }, [active, slides, total]);

  return (
    <article className="overflow-hidden rounded-[20px] border border-zinc-200/80 bg-[#fbfcfe] shadow-[0_18px_60px_-40px_rgba(2,132,199,0.45)] dark:border-zinc-700/70 dark:bg-zinc-900">
      <div className="relative">
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
          {visible.map((s, idx) => (
            <div
              key={`${s.src}-${idx}`}
              className={[
                "relative h-72 sm:h-80 lg:h-96 bg-zinc-100 dark:bg-zinc-800",
                idx === 0 ? "block" : "hidden sm:block",
              ].join(" ")}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
                priority={idx === 0}
              />
              {idx < 2 ? (
                <span className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/85" aria-hidden />
              ) : null}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActive((v) => (v - 1 + total) % total)}
          aria-label="Önceki görsel"
          className="absolute left-6 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#113d72] text-white shadow-lg transition hover:brightness-110"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2.2} />
        </button>
        <button
          type="button"
          onClick={() => setActive((v) => (v + 1) % total)}
          aria-label="Sonraki görsel"
          className="absolute right-6 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#113d72] text-white shadow-lg transition hover:brightness-110"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2.2} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 py-5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Görsel ${i + 1}`}
            className={[
              "rounded-full transition",
              i === active ? "h-2.5 w-5 bg-(--secondary-blue)" : "h-2 w-2 bg-zinc-300",
            ].join(" ")}
          />
        ))}
      </div>

      <div className="grid gap-8 px-8 pb-7 pt-2 sm:px-10 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
        <div>
          <div className="h-1 w-14 rounded-full bg-(--secondary-blue)" />
          <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-tight text-[#0e2a56] sm:text-5xl dark:text-zinc-100">
            AS Ado Hazır Beton
          </h2>
          <p className="mt-5 max-w-[95%] text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            Akdeniz, Ege ve İç Anadolu bölgelerinde faaliyet gösteren AS ADO BETON
            SANAYİ ve TİCARET A.Ş., kaliteli ve güvenilir hazır beton üretimiyle
            sektörün öncü firmaları arasında yer almaktadır. Gücünü AS ÇİMENTO
            A.Ş.’den alan şirketimiz, modern üretim anlayışı ve sürdürülebilir
            hizmet yaklaşımıyla projelere değer katmaktadır.
          </p>
        </div>

        <div className="divide-y divide-zinc-200/80 dark:divide-zinc-700/70">
          <div className="flex gap-4 p-5 sm:p-6">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-(--secondary-blue) text-white">
              <ShieldCheck className="h-6 w-6" strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">Güvenilir Üretim</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Yüksek kalite standartlarında, güvenilir ve sürekli üretim.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-5 sm:p-6">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-(--secondary-blue) text-white">
              <Cpu className="h-6 w-6" strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">Modern Teknoloji</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Gelişmiş tesislerimiz ve teknolojimizle verimli çözümler sunuyoruz.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-5 sm:p-6">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-(--secondary-blue) text-white">
              <Leaf className="h-6 w-6" strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">Sürdürülebilir Gelecek</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Çevreye duyarlı üretim anlayışımızla geleceğe değer katıyoruz.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200/80 bg-[#f2f5f9] px-5 py-4 text-sm text-zinc-700 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-700/70 dark:bg-zinc-950/40 dark:text-zinc-200">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-(--secondary-blue) text-white">
                <Globe className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="min-w-0">Daha fazla bilgi için web sitemizi ziyaret edin.</p>
            </div>
            <a
              href="https://www.asadobeton.com.tr/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-(--secondary-blue) transition hover:opacity-80"
            >
              <span>www.asadobeton.com.tr</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}


export function GrupSirketleriPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 bg-(--section-alt)" role="main">
        <section className="border-b border-zinc-200/70 bg-linear-to-b from-zinc-50 to-white py-12 dark:border-zinc-700/70 dark:from-zinc-900 dark:to-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Grup Şirketleri
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
                <li className="text-zinc-700 dark:text-zinc-200">Grup Şirketleri</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <AdoBetonCard />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
