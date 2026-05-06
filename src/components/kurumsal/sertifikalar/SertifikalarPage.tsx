"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Headphones,
  X,
  ChevronLeft,
  ChevronRight,
  Award,
  ShieldCheck,
  Leaf,
  Package,
  LayoutGrid,
  Expand,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { KurumsalQuickNav } from "@/components/kurumsal/KurumsalQuickNav";
import { cn } from "@/lib/cn";

type CertificateItem = {
  id: string;
  category: CertificateCategory;
  orientation: "horizontal" | "vertical";
  code: string;
  title: string;
  subtitle: string;
  image: string;
};

type CertificateCategory = "kalite" | "cevre" | "is-sagligi" | "urun" | "diger";

const filters: { id: "all" | CertificateCategory; label: string; Icon: LucideIcon }[] = [
  { id: "all", label: "Tümü", Icon: Award },
  { id: "kalite", label: "Kalite", Icon: ShieldCheck },
  { id: "cevre", label: "Çevre", Icon: Leaf },
  { id: "is-sagligi", label: "İş Sağlığı ve Güvenliği", Icon: ShieldCheck },
  { id: "urun", label: "Ürün", Icon: Package },
  { id: "diger", label: "Diğer", Icon: LayoutGrid },
];

// Bu listeyi rahatca guncelleyebilirsin. category alani local filtreleme icin kullanilir.
const certificates: CertificateItem[] = [
  {
    id: "cert-01",
    category: "urun",
    orientation: "vertical",
    code: "TS EN 197-1:2012",
    title: "Portland Cimentosu Uygunluk Belgesi",
    subtitle: "Urun Uygunluk Belgesi",
    image: "/logo/as_logo.webp",
  },
  {
    id: "cert-02",
    category: "urun",
    orientation: "vertical",
    code: "TS EN 197-1:2012",
    title: "Performans Degismezlik Belgesi",
    subtitle: "Urun Uygunluk Belgesi",
    image: "/logo/as_logo.webp",
  },
  {
    id: "cert-03",
    category: "kalite",
    orientation: "horizontal",
    code: "TS EN ISO 9001:2015",
    title: "Kalite Yonetim Sistemi Belgesi",
    subtitle: "Yonetim Sistemi",
    image: "/logo/as_logo.webp",
  },
  {
    id: "cert-04",
    category: "cevre",
    orientation: "horizontal",
    code: "TS EN ISO 14001:2015",
    title: "Cevre Yonetim Sistemi Belgesi",
    subtitle: "Yonetim Sistemi",
    image: "/logo/as_logo.webp",
  },
  {
    id: "cert-05",
    category: "is-sagligi",
    orientation: "horizontal",
    code: "TS EN ISO 45001:2018",
    title: "Is Sagligi ve Guvenligi Yonetim Sistemi Belgesi",
    subtitle: "Yonetim Sistemi",
    image: "/logo/as_logo.webp",
  },
  {
    id: "cert-06",
    category: "diger",
    orientation: "horizontal",
    code: "ISO 50001:2018",
    title: "Enerji Yonetim Sistemi Belgesi",
    subtitle: "Yonetim Sistemi",
    image: "/logo/as_logo.webp",
  },
];

export function SertifikalarPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | CertificateCategory>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredCertificates = useMemo(
    () =>
      activeFilter === "all"
        ? certificates
        : certificates.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  const activeList = filteredCertificates.length > 0 ? filteredCertificates : certificates;
  const activeIndex = selectedId ? activeList.findIndex((item) => item.id === selectedId) : -1;
  const activeCertificate = activeIndex >= 0 ? activeList[activeIndex] : null;

  useEffect(() => {
    if (!activeCertificate) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedId(null);
      if (event.key === "ArrowRight") {
        const nextIndex = (activeIndex + 1) % activeList.length;
        setSelectedId(activeList[nextIndex].id);
      }
      if (event.key === "ArrowLeft") {
        const prevIndex = (activeIndex - 1 + activeList.length) % activeList.length;
        setSelectedId(activeList[prevIndex].id);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeCertificate, activeIndex, activeList]);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 bg-(--section-alt)" role="main">
        <section className="border-b border-zinc-200/70 bg-linear-to-b from-zinc-50 to-white py-12 dark:border-zinc-700/70 dark:from-zinc-900 dark:to-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Sertifikalar
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
                <li className="text-zinc-700 dark:text-zinc-200">Sertifikalar</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
              <KurumsalQuickNav activeKey="sertifikalar" />

              <div className="space-y-5">
                <div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-(--primary-blue) dark:bg-sky-900/35">
                      <Award className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                        Sertifikalar
                      </h2>
                      <p className="mt-1 max-w-3xl text-sm text-zinc-500 sm:text-base dark:text-zinc-400">
                        Kalite, cevre, is sagligi ve guvenligi alanlarindaki belgelerimizle
                        surdurulebilir ve guvenilir uretim anlayisimizi belgeliyoruz.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {filters.map((filter) => (
                      <button
                        key={filter.id}
                        type="button"
                        onClick={() => setActiveFilter(filter.id)}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition",
                          activeFilter === filter.id
                            ? "border-(--primary-blue) bg-(--primary-blue) text-white shadow-[0_10px_22px_-14px_var(--primary-blue)]"
                            : "border-zinc-200 bg-white text-zinc-700 hover:border-(--primary-blue)/45 hover:text-(--primary-blue) dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
                        )}
                      >
                        <filter.Icon className="h-4 w-4" strokeWidth={2} />
                        <span>{filter.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredCertificates.map((item) => (
                    <article
                      key={item.id}
                      className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200/85 bg-white shadow-[0_10px_28px_-22px_rgba(56,189,248,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-20px_rgba(56,189,248,0.55)] dark:border-zinc-700 dark:bg-zinc-900"
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedId(item.id)}
                        className="group flex w-full flex-1 flex-col text-left"
                      >
                        <div className="flex h-56 w-full items-center justify-center bg-zinc-50 p-3 dark:bg-zinc-800/40">
                          <div
                            className={cn(
                              "relative overflow-hidden rounded-md border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900",
                              item.orientation === "vertical" ? "h-full w-[72%]" : "h-[74%] w-full"
                            )}
                          >
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-contain object-center p-2 transition duration-300 group-hover:scale-[1.02]"
                              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                            />
                          </div>
                        </div>
                        <div className="flex min-h-34 flex-col space-y-1 px-4 pt-4">
                          <p className="line-clamp-1 text-sm font-semibold leading-tight text-[#1b8faf] sm:text-xl">
                            {item.code}
                          </p>
                          <p className="line-clamp-2 min-h-10 text-xs font-bold text-zinc-700 dark:text-zinc-200">{item.title}</p>
                          <p className="line-clamp-1 text-xs text-zinc-500 dark:text-zinc-400">{item.subtitle}</p>
                        </div>
                      </button>
                      <div className="mt-auto px-4 pb-4">
                        <button
                          type="button"
                          onClick={() => setSelectedId(item.id)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-sky-200 bg-sky-50 text-(--primary-blue) transition hover:bg-sky-100 dark:border-sky-900/50 dark:bg-sky-900/20"
                          aria-label={`${item.title} buyut`}
                        >
                          <Expand className="h-4.5 w-4.5" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>

                {filteredCertificates.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-6 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
                    Bu filtre icin henuz sertifika tanimlanmadi.
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

      {activeCertificate ? (
        <div
          className="fixed inset-0 z-1400 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Sertifika onizleme"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl border border-white/15 bg-zinc-950/90 p-3 sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/75"
              aria-label="Kapat"
            >
              <X className="h-4.5 w-4.5" />
            </button>

            <button
              type="button"
              onClick={() => setSelectedId(activeList[(activeIndex - 1 + activeList.length) % activeList.length].id)}
              className="absolute left-2 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/75"
              aria-label="Onceki sertifika"
            >
              <ChevronLeft className="h-4.5 w-4.5" />
            </button>

            <button
              type="button"
              onClick={() => setSelectedId(activeList[(activeIndex + 1) % activeList.length].id)}
              className="absolute right-2 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/75"
              aria-label="Sonraki sertifika"
            >
              <ChevronRight className="h-4.5 w-4.5" />
            </button>

            <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-white/95">
              <Image
                src={activeCertificate.image}
                alt={activeCertificate.title}
                fill
                className="object-contain p-3 sm:p-5"
                sizes="100vw"
                priority
              />
            </div>
            <p className="mt-3 text-center text-sm text-zinc-200">{activeCertificate.code}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
