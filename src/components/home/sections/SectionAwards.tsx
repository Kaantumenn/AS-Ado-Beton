"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionShell } from "../SectionShell";
import { cn } from "@/lib/cn";

type AwardItem = {
  id: string;
  year: string;
  title: string;
  image: string;
  source: string;
  fit?: "cover" | "contain";
  frame?: "paper";
};

const awards: AwardItem[] = [
  {
    id: "1",
    year: "2022",
    title: "2022 yılı kurumlar vergisi gönüllü uyum ödülü",
    image: "/awards-page/odul-9.png",
    source: "Gelir İdaresi Başkanlığı",
    fit: "contain",
    frame: "paper",
  },
  {
    id: "2",
    year: "2007",
    title: "AS Çimento — 2007 yılı bölge birinciliği plaketi",
    image: "/awards-page/odul-1.png",
    source: "Türkiye Odalar ve Borsalar Birliği",
    fit: "contain",
    frame: "paper",
  },
  {
    id: "3",
    year: "2011",
    title: "2011 yılı en yüksek istihdam ödülü",
    image: "/awards-page/odul-2.png",
    source: "Çalışma ve Sosyal Güvenlik Bakanlığı",
    fit: "contain",
    frame: "paper",
  },
  {
    id: "5",
    year: "2022",
    title: "Demir Maden Çimento 2022 Yılı Kurumlar Vergisi Gönüllü Uyum Seviyesi Yüksek Mükellefler Ödülü",
    image: "/awards-page/odul-8.png",
    source: "Batı Akdeniz İhracatçılar Birliği",
    fit: "contain",
    frame: "paper",
  },
  {
    id: "4",
    year: "2011",
    title: "2011 yılı yüksek gelir vergisi ödülü",
    image: "/awards-page/odul-3.png",
    source: "Gelir İdaresi Başkanlığı",
    fit: "contain",
    frame: "paper",
  },
  {
    id: "6",
    year: "2016",
    title: "BAİB 2016 Çimento Cam Seramik ve Toprak Ürünleri Sektörü İhracat Birincisi",
    image: "/awards-page/odul-6.png",
    source: "Batı Akdeniz İhracatçılar Birliği",
    fit: "contain",
    frame: "paper",
  },
  {
    id: "7",
    year: "2014",
    title: "2014 yılı yüksek düzeyde kurumlar vergisi ödülü",
    image: "/awards-page/odul-4.png",
    source: "Batı Akdeniz İhracatçılar Birliği",
    fit: "contain",
    frame: "paper",
  },
  {
    id: "8",
    year: "2022",
    title: "İhracatın Yıldızları 2022 Çimento Cam Seramik ve Toprak Ürünleri Sektörü İhracatı Birincisi",
    image: "/awards-page/odul-7.png",
    source: "Batı Akdeniz İhracatçılar Birliği",
    fit: "contain",
    frame: "paper",
  },
  {
    id: "9",
    year: "2023",
    title: "Türkiye Tek Yürek Kampanyasına Katkılarımız İçin AFAD'dan Teşekkür Belgesi",
    image: "/awards-page/odul-10.png",
    source: "AFAD",
    fit: "contain",
    frame: "paper",
  },
  {
    id: "10",
    year: "2023",
    title: "LÖSEV Yaşam Sertifikası ile Lösemili Çocuklara Destek Verdik",
    image: "/awards-page/odul-11.png",
    source: "LÖSEV",
    fit: "contain",
    frame: "paper",
  },
];

const sortedAwards = [...awards].sort(
  (a, b) => Number(b.year) - Number(a.year) || Number(b.id) - Number(a.id)
);

const AUTO_MS = 5500;
const nAwards = sortedAwards.length;
/** `gap-2` ile aynı (8px) — kaydırma adımı hesabı */
const GAP_PX = 8;

/** <640: 1, 640–1279: 2, ≥1280: 3; ödül sayısından fazla sütun olmaz. */
function useSlidesPerView() {
  const [k, setK] = useState(1);

  useEffect(() => {
    const run = () => {
      const w = typeof window === "undefined" ? 0 : window.innerWidth;
      let next = 1;
      if (w >= 1280) next = 3;
      else if (w >= 640) next = 2;
      else next = 1;
      setK(Math.min(next, nAwards));
    };
    run();
    window.addEventListener("resize", run);
    return () => window.removeEventListener("resize", run);
  }, []);

  return k;
}

/** Her kelimenin yalnızca baş harfini büyüt (Türkçe I/ı/İ); marka kısaltması AS aynı kalır. */
function titleCaseTr(text: string): string {
  return text.replace(
    /[^\s\u00A0—–-]+/g,
    (word) => {
      if (word === "AS" || word === "as") return "AS";
      const t = word.toLocaleLowerCase("tr-TR");
      return t.charAt(0).toLocaleUpperCase("tr-TR") + t.slice(1);
    }
  );
}

function AwardCard({
  item,
  titleText,
  focused,
  parallaxX,
}: {
  item: AwardItem;
  titleText: string;
  focused: boolean;
  parallaxX: number;
}) {
  const yearLabel = `${item.year} Yılı`;

  return (
    <article
      className={cn(
        "group flex h-full w-full flex-col overflow-hidden rounded-3xl",
        "border bg-white shadow-sm transition-all duration-300 dark:bg-zinc-900",
        focused
          ? "border-sky-500/60 shadow-[0_18px_40px_-20px_rgba(3,105,161,0.45)] dark:border-sky-400/50 dark:shadow-[0_18px_40px_-22px_rgba(14,116,194,0.55)]"
          : "border-zinc-200/90 dark:border-zinc-700/80"
      )}
    >
      <div className="relative mx-3 mt-3 aspect-[3/4] overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 sm:mx-4 sm:mt-4">
        <span className="absolute left-3 top-3 z-10 inline-flex rounded-full bg-sky-50 px-2.5 py-1 text-[0.67rem] font-semibold text-sky-800 dark:bg-sky-900/45 dark:text-sky-300">
          {item.year}
        </span>
        <Image
          src={item.image}
          alt={titleText}
          fill
          className={cn(
            "transition duration-500 group-hover:scale-[1.02]",
            item.fit === "contain"
              ? "object-contain p-1 sm:p-1.5 scale-[1.40]"
              : "object-cover"
          )}
          style={{ transform: `translate3d(${parallaxX}px,0,0)` }}
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 px-3 pb-4 pt-4 sm:px-4 sm:pb-5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-sky-700/90 dark:text-sky-300/90">
          {yearLabel}
        </p>
        <h3 className="text-left text-[1.02rem] font-semibold leading-snug text-zinc-800 dark:text-zinc-100">
          {titleText}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
          <Building2 className="h-3.5 w-3.5 text-sky-700/80 dark:text-sky-300/80" strokeWidth={1.9} />
          <span>{item.source}</span>
        </p>
      </div>
      {focused ? (
        <div className="mx-10 mb-3 h-0.5 rounded-full bg-sky-500/70 dark:bg-sky-400/80 sm:mb-4" aria-hidden />
      ) : null}
    </article>
  );
}

/**
 * Ödüller: responsive kaç sütun (1/2/3), otomatik geçiş, ok ve noktalar.
 */
export function SectionAwards() {
  const n = nAwards;
  const slidesPerView = useSlidesPerView();
  const centerOffset = Math.floor(slidesPerView / 2);
  const virtualAwards = [
    ...sortedAwards,
    ...sortedAwards,
    ...sortedAwards,
    ...sortedAwards,
    ...sortedAwards,
    ...sortedAwards,
    ...sortedAwards,
    ...sortedAwards,
    ...sortedAwards,
  ];

  const [activeVirtual, setActiveVirtual] = useState(n * 4);
  const [paused, setPaused] = useState(false);
  const [disableTransition, setDisableTransition] = useState(false);
  const [viewportW, setViewportW] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rafRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setViewportW(el.clientWidth);
    });
    ro.observe(el);
    setViewportW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const scheduleTransitionEnable = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(() => {
      setDisableTransition(false);
      rafRef.current = null;
    });
  }, []);

  const moveBy = useCallback(
    (delta: number) => {
      setActiveVirtual((prev) => {
        const next = prev + delta;
        if (next < n * 2 || next > n * 7) {
          setDisableTransition(true);
          scheduleTransitionEnable();
          return ((next % n) + n) % n + n * 4;
        }
        return next;
      });
    },
    [n, scheduleTransitionEnable]
  );

  const startTimer = useCallback(() => {
    clearTimer();
    if (paused) return;
    if (n <= 1) return;
    timerRef.current = setInterval(() => {
      moveBy(1);
    }, AUTO_MS);
  }, [clearTimer, n, paused, moveBy]);

  useEffect(() => {
    startTimer();
    return () => {
      clearTimer();
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [startTimer, clearTimer]);

  const go = useCallback(
    (dir: -1 | 1) => {
      if (n <= 1) return;
      moveBy(dir);
      startTimer();
    },
    [n, moveBy, startTimer]
  );

  const k = slidesPerView;
  const cellW =
    viewportW > 0 && k > 0
      ? Math.max(0, (viewportW - (k - 1) * GAP_PX) / k)
      : 0;
  const stepPx = cellW > 0 ? cellW + GAP_PX : 0;
  const focusedIndex = ((activeVirtual % n) + n) % n;
  const translateSlots = Math.max(0, activeVirtual - centerOffset);

  return (
    <SectionShell id="oduller" variant="default" className="pt-16 pb-6 sm:pt-20 sm:pb-12">
      <div className="rounded-[2rem] p-5 sm:p-7 lg:p-8">
        <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-sky-600/80" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-800/80 dark:text-sky-300/90">
                Başarılarımız
              </p>
            </div>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-800 dark:text-zinc-100">
              Ödüllerimiz
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Kurumsal sorumluluk ve performans alanında kamu otoriteleri tarafından
              onaylanan plaket ve ödüllere ait öne çıkan kayıtlar.
            </p>
          </div>
         
        </div>

        <div
          className="relative w-full"
          onMouseEnter={() => {
            setPaused(true);
            clearTimer();
          }}
          onMouseLeave={() => {
            setPaused(false);
          }}
          role="region"
          aria-roledescription="Karusel"
          aria-label="Ödüller"
        >
          {n > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-4 top-[44%] z-10 flex h-10 w-10 -translate-x-[120%] -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200/90 bg-white/95 text-zinc-700 shadow-sm transition hover:bg-zinc-50 sm:h-11 sm:w-11 sm:-translate-x-1/2 sm:top-1/2 dark:border-zinc-700 dark:bg-zinc-900/95 dark:text-zinc-200 dark:hover:bg-zinc-800"
                aria-label="Önceki ödül"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.9} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-4 top-[44%] z-10 flex h-10 w-10 translate-x-[120%] -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200/90 bg-white/95 text-zinc-700 shadow-sm transition hover:bg-zinc-50 sm:h-11 sm:w-11 sm:translate-x-1/2 sm:top-1/2 dark:border-zinc-700 dark:bg-zinc-900/95 dark:text-zinc-200 dark:hover:bg-zinc-800"
                aria-label="Sonraki ödül"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.9} />
              </button>
            </>
          )}

          <div className="mx-auto w-full max-w-[21rem] px-2 sm:max-w-6xl sm:px-6 md:px-10">
            <div ref={viewportRef} className="w-full overflow-hidden">
              <div
                className={cn(
                  "flex gap-2 ease-out will-change-transform motion-reduce:transition-none",
                  disableTransition ? "transition-none" : "transition-transform duration-350"
                )}
                style={{
                  transform:
                    cellW > 0
                      ? `translate3d(-${translateSlots * stepPx}px, 0, 0)`
                      : undefined,
                }}
              >
                {virtualAwards.map((item, i) => {
                  const titleText = titleCaseTr(item.title);
                  const centerDistance = Math.abs(i - activeVirtual);
                  const visible =
                    i >= Math.floor(translateSlots) - 1 &&
                    i < Math.ceil(translateSlots + k + 1);
                  const focused = i === activeVirtual;
                  const cardScale = Math.max(0.9, 1 - Math.min(centerDistance, 2) * 0.07);
                  const cardOpacity = Math.max(0.82, 1 - Math.min(centerDistance, 2) * 0.12);
                  const parallaxX = Math.max(-10, Math.min(10, (i - activeVirtual) * -6));
                  return (
                    <div
                      key={`${item.id}-${i}`}
                      className="box-border shrink-0 py-1"
                      style={{
                        width: cellW > 0 ? `${cellW}px` : `${100 / k}%`,
                        minWidth: cellW > 0 ? `${cellW}px` : undefined,
                        flex: cellW > 0 ? "0 0 auto" : `0 0 ${100 / k}%`,
                        transform: `scale(${cardScale})`,
                        opacity: cardOpacity,
                      }}
                      aria-hidden={!visible}
                    >
                      <AwardCard
                        item={item}
                        titleText={titleText}
                        focused={focused}
                        parallaxX={parallaxX}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {n > 1 && (
            <div
              className="mt-4 flex items-center justify-center gap-1.5 sm:mt-6"
              role="tablist"
              aria-label="Ödül slaytları"
            >
              {Array.from({ length: n }, (_, d) => (
                <button
                  key={d}
                  type="button"
                  role="tab"
                  aria-selected={d === focusedIndex}
                  onClick={() => {
                    const current = ((activeVirtual % n) + n) % n;
                    let delta = d - current;
                    if (delta > n / 2) delta -= n;
                    if (delta < -n / 2) delta += n;
                    setActiveVirtual((i) => i + delta);
                    startTimer();
                  }}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    d === focusedIndex
                      ? "w-6 bg-sky-600 dark:bg-sky-500"
                      : "w-1.5 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-600 dark:hover:bg-zinc-500"
                  )}
                  aria-label={`${d + 1}. sayfaya geç (${slidesPerView} ödül görünüyor)`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </SectionShell>
  );
}
