"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import Lenis from "lenis";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { HABER_CAROUSEL_SLIDES } from "@/data/haberlerCarousel";
import { cn } from "@/lib/cn";

import "keen-slider/keen-slider.min.css";
import "lenis/dist/lenis.css";

const ACCENT = "var(--primary-blue)";

const HABER_SLIDE_COUNT = HABER_CAROUSEL_SLIDES.length;

type SlideProps = {
  id: string;
  active: boolean;
  /** Merkezden uzaklık (0 = odak) — ölçek / opaklık */
  distance: number;
  /** Aktif karta göre yön (sol -, sağ +) */
  signedOffset: number;
  number: string;
  title: string;
  date: string;
  description?: string;
  image: string;
  imagePosition?: string;
};

function stackMotion(distance: number, signedOffset: number) {
  if (distance <= 0) {
    return { scaleX: 0.90, scaleY: 1, opacity: 1, rotateY: 0 };
  }
  const insetTilt =
    signedOffset === 0
      ? 0
      : signedOffset > 0
        ? distance === 1
          ? -10
          : -16
        : distance === 1
          ? 10
          : 16;
  if (distance === 1) {
    return { scale: 0.9, opacity: 1, rotateY: insetTilt, x: signedOffset * 10 };
  }
  return { scale: 0.82, opacity: 1, rotateY: insetTilt, x: signedOffset * 18 };
}

function circDistance(i: number, active: number, n: number) {
  const d = Math.abs(i - active);
  return Math.min(d, n - d);
}

function signedRingOffset(i: number, active: number, n: number) {
  let d = i - active;
  const half = Math.floor(n / 2);
  if (d > half) d -= n;
  if (d < -half) d += n;
  return d;
}

/** Ortadaki kart en üstte; uzaklaştıkça katman alçalır (stabil stack). */
function slideZIndex(idx: number, activeIdx: number, n: number) {
  const d = circDistance(idx, activeIdx, n);
  return 500 - d * 60;
}

function HaberCard({
  id,
  active,
  distance,
  signedOffset,
  number,
  title,
  date,
  description,
  image,
  imagePosition = "center",
}: SlideProps) {
  const m = stackMotion(distance, signedOffset);
  return (
    <motion.article
      className={cn(
        "relative w-full min-w-[18rem] max-w-[min(94vw,36rem)] overflow-hidden rounded-2xl shadow-[0_24px_60px_-14px_rgba(0,0,0,0.6)] sm:min-w-[min(92vw,32rem)] sm:max-w-[min(90vw,40rem)] lg:min-w-[36rem] lg:max-w-[min(88vw,48rem)]",
        "ring-1 ring-white/10 will-change-transform"
      )}
      animate={m}
      transition={{ type: "spring", stiffness: 280, damping: 32, mass: 0.88 }}
      style={{ transformOrigin: "center center", transformPerspective: 1000 }}
    >
      {/* Yatay dikdörtgen (görsel referansı ~16:10) */}
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: imagePosition }}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 75vw, 768px"
          priority={number === "03"}
        />
        {/* Metin bandı: odakta açık film altta, diğerlerinde koyu altta */}
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t to-transparent",
            active
              ? "from-white/[0.95] via-white/[0.78]"
              : "from-black/80 via-black/45"
          )}
          aria-hidden
        />
        <div
          className={cn(
            "absolute inset-0 flex items-end justify-between gap-4 p-4 sm:p-5 lg:p-6",
            "bg-linear-to-t from-black/50 via-transparent to-transparent sm:from-black/40"
          )}
        >
          <div className="relative z-10 mt-auto max-w-[88%] pr-1">
            <div className="max-w-[92%]">
              <div className="flex items-start gap-3">
                <p
                  className="shrink-0 text-3xl font-bold tabular-nums leading-none sm:text-4xl lg:text-5xl"
                  style={{ color: ACCENT }}
                >
                  {number}
                </p>
                <h3
                  className={cn(
                    "pt-0.5 text-balance text-base font-bold leading-snug sm:text-lg",
                    active ? "text-zinc-900" : "text-white"
                  )}
                >
                  {title}
                </h3>
              </div>
              <p
                className={cn(
                  "mt-2 flex items-center gap-1.5 text-xs sm:text-sm",
                  active ? "text-zinc-600" : "text-zinc-300"
                )}
              >
                <Calendar
                  className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                  style={{ color: ACCENT }}
                  strokeWidth={2}
                  aria-hidden
                />
                <span>{date}</span>
              </p>
            
            </div>
          </div>
          <div className="relative z-10 ml-auto mt-auto flex justify-end pb-1">
            <Link
              href={`/haberler/${id}`}
              aria-label={`${title} — detay`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full shadow-md transition hover:brightness-110"
              style={{ backgroundColor: ACCENT }}
            >
              <ArrowRight className="h-5 w-5 text-white" strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function SectionHaberlerCarousel() {
  const [activeIdx, setActiveIdx] = useState(2);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
    });
    let rafId = 0;
    function tick(t: number) {
      lenis.raf(t);
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 2,
      loop: true,
      rubberband: false,
      mode: "snap",
      slideChanged(s) {
        setActiveIdx(s.track.absToRel(s.track.details.abs));
      },
      slides: {
        origin: "center",
        /* Kesirli perView + loop, mobilde next() tüm klonlar üzerinden dönebiliyor; tam 1 + moveToIdx ile hizala */
        perView: 1,
        spacing: -20,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 2.05, spacing: -36, origin: "center" },
        },
        "(min-width: 768px)": {
          slides: { perView: 3.1, spacing: -52, origin: "center" },
        },
        "(min-width: 1024px)": {
          slides: { perView: 4.25, spacing: -72, origin: "center" },
        },
        "(min-width: 1280px)": {
          slides: { perView: 5.1, spacing: -84, origin: "center" },
        },
      },
    },
    []
  );

  const goPrev = useCallback(() => {
    const s = instanceRef.current;
    const d = s?.track.details;
    if (!s || !d) return;
    const rel = s.track.absToRel(d.abs);
    const target = (rel - 1 + HABER_SLIDE_COUNT) % HABER_SLIDE_COUNT;
    s.moveToIdx(target);
  }, [instanceRef]);

  const goNext = useCallback(() => {
    const s = instanceRef.current;
    const d = s?.track.details;
    if (!s || !d) return;
    const rel = s.track.absToRel(d.abs);
    const target = (rel + 1) % HABER_SLIDE_COUNT;
    s.moveToIdx(target);
  }, [instanceRef]);

  const goTo = useCallback(
    (i: number) => {
      instanceRef.current?.moveToIdx(i);
    },
    [instanceRef]
  );

  return (
    <section
      id="haberler-carousel"
      className={cn(
        "w-full text-white",
        /* Tema: kurumsal lacivert (#0d3a5c) tonlu gece mavisi — Stats/Kurumsal ile uyum */
        "bg-linear-to-b from-[#102a45] via-[#0c1f33] to-[#050f18]"
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <header className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl space-y-4">
           
            <h2 className="text-balance text-2xl font-bold uppercase leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              AS ADO BETON&apos;DAN{" "}
              <span style={{ color: ACCENT }}>HABERLER</span> VE GELİŞMELER
            </h2>
          </div>
          <div className="flex flex-1 flex-col gap-6 lg:max-w-xl lg:items-end">
          
            <div className="flex w-full items-center justify-end gap-3 lg:w-auto">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Önceki haber"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[color:var(--c)] text-[color:var(--c)] transition hover:bg-white/5"
                style={{ ["--c" as string]: ACCENT }}
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Sonraki haber"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 text-white transition hover:brightness-110"
                style={{ backgroundColor: ACCENT, borderColor: ACCENT }}
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </header>

        <div className="relative mt-12 overflow-x-clip overflow-y-visible rounded-2xl px-1 sm:mt-14 sm:px-2 [&_.keen-slider]:!overflow-visible [&_.keen-slider]:py-6">
          <div ref={sliderRef} className="keen-slider relative">
            {HABER_CAROUSEL_SLIDES.map((slide, idx) => {
              const n = HABER_CAROUSEL_SLIDES.length;
              const distance = circDistance(idx, activeIdx, n);
              const signedOffset = signedRingOffset(idx, activeIdx, n);
              return (
                <div
                  key={slide.id}
                  className="keen-slider__slide relative flex min-h-[min(14rem,42vw)] items-center justify-center !overflow-visible py-2 sm:min-h-[min(16rem,36vw)] lg:min-h-[min(18rem,28vw)]"
                  style={{ zIndex: slideZIndex(idx, activeIdx, n) }}
                >
                  <HaberCard
                    id={slide.id}
                    active={idx === activeIdx}
                    distance={distance}
                    signedOffset={signedOffset}
                    number={slide.number}
                    title={slide.title}
                    date={slide.date}
                    description={slide.description}
                    image={slide.image}
                    imagePosition={slide.imagePosition}
                  />
                </div>
              );
            })}
          </div>
          {/* Kenarlarda fokus maskesi: merkeze dikkat çekmek için slider üstü gradient */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[650] hidden w-24 rounded-r-3xl bg-linear-to-r from-[#030912]/95 via-[#030912]/62 to-transparent blur-[0.5px] md:block lg:w-44"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[650] hidden w-24 rounded-l-3xl bg-linear-to-l from-[#030912]/95 via-[#030912]/62 to-transparent blur-[0.5px] md:block lg:w-44"
            aria-hidden
          />
        </div>

        <div className="mt-8 flex flex-col items-center gap-6 sm:mt-10">
          <div className="flex items-center justify-center gap-2">
            {HABER_CAROUSEL_SLIDES.map((dot, i) => (
              <button
                key={dot.id}
                type="button"
                aria-label={`${i + 1}. habere git`}
                aria-current={i === activeIdx}
                onClick={() => goTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === activeIdx
                    ? "w-6 bg-[color:var(--a)]"
                    : "w-2 bg-zinc-600 hover:bg-zinc-500"
                )}
                style={{ ["--a" as string]: ACCENT }}
              />
            ))}
          </div>
         
        </div>
      </div>
    </section>
  );
}
