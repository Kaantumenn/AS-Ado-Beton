"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { SectionShell } from "../SectionShell";
import { cn } from "@/lib/cn";

const AUTO_INTERVAL_MS = 2000 as const;

function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true
  );
}

/** `md` kırılması: mobilde oto dönen zaman çizelgesi yok. */
function useIsMobileViewport(): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(max-width: 767px)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(max-width: 767px)").matches,
    () => true
  );
}

type Milestone = {
  id: string;
  year: string;
  title: string;
  body: string;
  titleFiveHundredBadgeSrc?: string;
};

const milestones: Milestone[] = [
  {
    id: "1997",
    year: "1997",
    title: "Antalya’nın Öncü Sanayi Kuruluşu",
    body: "Türk Sanayisinin ve çimento sektörünün önde gelen kuruluşlarından olan AS Çimento Antalya’da kurulmuştur.",
  },
  {
    id: "2003",
    year: "2003",
    title: "Çimento Fabrikası Yatırımı",
    body: "Burdur ili Bucak ilçesinde çimento fabrikası yatırımını yaparak büyümeye hızla devam etmiştir.",
  },
  {
    id: "2005",
    year: "2005",
    title: "Hızla Büyüyerek 1. Klinker Hattı Kurulumu",
    body: "Kısa zamanda çok hızlı gelişim göstererek 1. klinker hattı yatırımını yapmıştır.",
  },
  {
    id: "2006",
    year: "2006",
    title: "Türkiye’nin En Büyük 500 Firması",
    body: "AS Çimento A.Ş., Burdur ilinden Türkiye’nin en büyük 500 firması listesine giren tek firma olmuştur.",
    titleFiveHundredBadgeSrc: "/awards/500.webp",
  },
];

function MilestoneTitleHeading({
  m,
  align = "md",
}: {
  m: Milestone;
  /** mobil kart: sadece sola hizalı */
  align?: "md" | "left";
}) {
  const headingClass = cn(
    "text-sm font-semibold leading-snug sm:text-base",
    align === "left" ? "text-left" : "md:text-center",
    "inline-flex max-w-full flex-wrap items-baseline gap-x-1 gap-y-0.5",
    align === "left" ? "justify-start" : "justify-start md:justify-center"
  );

  if (!m.titleFiveHundredBadgeSrc) {
    return <h3 className={headingClass}>{m.title}</h3>;
  }

  return (
    <h3 className={headingClass}>
      <span>Türkiye’nin En Büyük</span>{" "}
      <span className="inline-flex translate-y-[0.12em] items-center align-middle">
        <Image
          src={m.titleFiveHundredBadgeSrc}
          alt="İlk 500"
          width={56}
          height={28}
          className="h-[1.15em] min-h-[18px] w-auto max-w-18 object-contain sm:h-[1.2em] sm:max-w-20"
        />
      </span>{" "}
      <span>Firması</span>
    </h3>
  );
}

function yearClassName(active: boolean) {
  return cn(
    "select-none text-4xl font-bold tabular-nums tracking-tight transition-all duration-200 sm:text-5xl md:text-5xl lg:text-6xl",
    "motion-reduce:transition-none",
    active
      ? "scale-100 text-[#0d3a5c] [text-shadow:0_2px_24px_rgba(14,116,194,0.2)] dark:text-sky-300"
      : "text-[color:var(--section-alt)] [-webkit-text-stroke:1.5px_rgb(161_161_170)] dark:[-webkit-text-stroke-color:rgb(82_82_91)]"
  );
}

/**
 * Tarihçe: masaüstünde yatay eksen + otomatik geçiş; mobilde tüm dönemler statik liste (oto yok).
 */
export function SectionTarihce() {
  const [activeId, setActiveId] = useState<string>("2003");
  const lowMotion = usePrefersReducedMotion();
  const isMobile = useIsMobileViewport();

  /** Sadece md ve üstü: 2 sn’de bir sonraki dönem. Mobilde timer yok. */
  useEffect(() => {
    if (lowMotion || isMobile) return;
    let t: number;
    const next = () => {
      setActiveId((prev) => {
        const i = milestones.findIndex((m) => m.id === prev);
        const nextI = (Math.max(0, i) + 1) % milestones.length;
        return milestones[nextI]!.id;
      });
      t = window.setTimeout(next, AUTO_INTERVAL_MS);
    };
    t = window.setTimeout(next, AUTO_INTERVAL_MS);
    return () => window.clearTimeout(t);
  }, [lowMotion, isMobile]);

  const activeIndex = useMemo(
    () => Math.max(0, milestones.findIndex((m) => m.id === activeId)),
    [activeId]
  );
  const lastIdx = milestones.length - 1;
  const progressPercent =
    lastIdx > 0 ? (activeIndex / lastIdx) * 100 : 100;

  return (
    <SectionShell id="tarihce" variant="default" className="py-16 sm:py-20">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-800/80 dark:text-sky-400/80">
          Tarihçemiz
        </h2>
        {!lowMotion && !isMobile && (
          <span className="sr-only">
            Dönemler {AUTO_INTERVAL_MS / 1000} saniyede bir otomatik değişir.
          </span>
        )}
      </div>

      {/* Mobil: dikey eksen + kart + yıl sütunu (oto yok) */}
      <div className="relative md:hidden">
        <div
          className="absolute top-0 bottom-0 left-4 w-px bg-zinc-200 dark:bg-zinc-600"
          aria-hidden
        />
        <ol className="relative z-1 m-0 list-none p-0" aria-label="Kronolojik dönemler">
          {milestones.map((m) => (
            <li
              key={m.id}
              className="flex gap-0 pb-8 last:pb-0"
            >
              <div className="flex w-8 shrink-0 flex-col items-center" aria-hidden>
                <div className="mt-0.5 flex h-4 w-4 items-center justify-center">
                  <span className="h-3 w-3 rounded-full border-[3px] border-(--section-alt) bg-sky-500 shadow-sm ring-1 ring-sky-400/30 dark:border-(--section-alt)" />
                </div>
              </div>

              <div className="relative min-w-0 flex-1 pl-1.5">
                <div
                  className={cn(
                    "relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-(--section)",
                    "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-4px_rgba(15,23,42,0.08)]",
                    "dark:border-zinc-600/80 dark:shadow-zinc-950/40"
                  )}
                >
                  <div
                    className="pointer-events-none absolute top-7 -left-2 z-10 h-0 w-0 border-y-8 border-r-8 border-y-transparent border-r-(--section) dark:border-r-(--section)"
                    aria-hidden
                  />
                  <div className="flex flex-col min-[400px]:flex-row">
                    <div className="min-w-0 flex-1 p-4">
                      <MilestoneTitleHeading m={m} align="left" />
                      <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {m.body}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "flex shrink-0 flex-col items-center justify-center border-t border-zinc-100 bg-zinc-50/90 py-3 min-[400px]:w-20 min-[400px]:border-t-0 min-[400px]:border-l min-[400px]:border-l-zinc-100/90 min-[400px]:py-4",
                        "dark:border-zinc-700/80 dark:bg-zinc-800/30"
                      )}
                    >
                      <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-zinc-500">
                        Dönem
                      </span>
                      <span className="mt-0.5 text-2xl font-bold tabular-nums leading-none text-[#0d3a5c] dark:text-sky-300">
                        {m.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Masaüstü: yatay eksen + gradient çizgi + vurgulu içerik */}
      <div className="hidden md:block" aria-label="Kronolojik zaman çizelgesi">
        <div className="grid grid-cols-4 gap-4 lg:gap-6">
          {milestones.map((m) => {
            const active = activeId === m.id;
            return (
              <div
                key={`y-${m.id}`}
                className="min-h-12 text-center"
                aria-current={active ? "step" : undefined}
              >
                <div
                  className={cn(
                    yearClassName(active),
                    "inline-block will-change-transform"
                  )}
                >
                  {m.year}
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative my-2 h-16 lg:my-3">
          <div
            className="absolute right-0 left-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-zinc-200/90 dark:bg-zinc-800"
            aria-hidden
          />
          <div
            className="absolute top-1/2 left-0 h-1 -translate-y-1/2 rounded-full bg-linear-to-r from-sky-400 via-sky-500 to-[#0d3a5c] motion-safe:transition-[width] motion-safe:duration-200 motion-safe:ease-out"
            style={{ width: `${progressPercent}%` }}
            aria-hidden
          />
          <div className="absolute inset-0 z-1 flex items-center justify-between">
            {milestones.map((m) => {
              const active = activeId === m.id;
              return (
                <div
                  key={`d-${m.id}`}
                  className="flex h-16 w-12 shrink-0 items-center justify-center"
                  aria-hidden
                >
                  <span
                    className={cn(
                      "relative rounded-full motion-safe:transition-all motion-safe:duration-300",
                      active
                        ? "h-4 w-4 scale-100 bg-sky-400 ring-2 ring-sky-300/50 ring-offset-2 ring-offset-(--section-alt) dark:bg-sky-400 dark:ring-sky-500/40"
                        : "h-2.5 w-2.5 bg-sky-500/80 dark:bg-sky-600"
                    )}
                  >
                    {active && (
                      <span
                        className="absolute inset-0 -m-1 rounded-full border border-sky-300/30 motion-safe:animate-ping motion-reduce:animate-none"
                        style={{ animationDuration: "2.2s" }}
                        aria-hidden
                      />
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-2 grid grid-cols-4 gap-4 lg:gap-6">
          {milestones.map((m) => {
            const active = activeId === m.id;
            return (
              <div
                key={`c-${m.id}`}
                className={cn(
                  "text-center",
                  "motion-safe:transition-all motion-safe:duration-200",
                  "motion-reduce:transition-none",
                  active
                    ? "lg:-translate-y-0.5"
                    : "translate-y-0 opacity-[0.55]"
                )}
              >
                <div
                  className={cn(
                    "w-full rounded-2xl p-3 text-left md:text-center",
                    "transition-[box-shadow,transform,background] duration-200",
                    "motion-reduce:transition-none",
                    active
                      ? "ring-1 ring-sky-400/35 shadow-lg shadow-sky-900/5 ring-offset-1 ring-offset-(--section-alt) dark:shadow-sky-950/20"
                      : "ring-0"
                  )}
                >
                  <MilestoneTitleHeading m={m} />
                  <p
                    className={cn(
                      "mt-2 text-xs leading-relaxed sm:text-sm",
                      "text-zinc-600 dark:text-zinc-400"
                    )}
                  >
                    {m.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
