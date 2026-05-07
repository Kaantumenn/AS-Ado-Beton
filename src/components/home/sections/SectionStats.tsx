"use client";

import {
  Cylinder,
  Factory,
  Handshake,
  Leaf,
  Truck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  IconGüvenilirShield,
  IconYüksekStandartSeal,
} from "@/components/home/icons/PillarBrandIcons";
import { cn } from "@/lib/cn";

/** Arka plan video (otomatik oynatılır, sessiz, sonsuz döngü). */
const STATS_BG_VIDEO = "/ado_banner_video.MOV";
/** Video yüklenene kadar gösterilen poster görseli. */
const STATS_BG_POSTER = "/photos/as_ado_banner4.png";

type StatKey = "people" | "facility" | "truck" | "concrete";

const statIcons: Record<StatKey, LucideIcon> = {
  people: Users,
  facility: Factory,
  truck: Truck,
  concrete: Cylinder,
};

/** eased ∈ [0,1] → ekranda gösterilecek metin */
const stats: {
  id: string;
  label: string;
  key: StatKey;
  delayMs: number;
  format: (eased: number) => string;
}[] = [
  {
    id: "1",
    label: "Personel sayısı",
    key: "people",
    delayMs: 0,
    format: (e) => `${Math.round(300 * e)}+`,
  },
  {
    id: "2",
    label: "İleri teknoloji tesis",
    key: "facility",
    delayMs: 90,
    format: (e) => `${Math.round(16 * e)}+`,
  },
  {
    id: "3",
    label: "Günlük hammadde sevkiyatı",
    key: "truck",
    delayMs: 180,
    format: (e) => `${Math.round(20 * e)}K Ton+`,
  },
  {
    id: "4",
    label: "Günlük hazır beton",
    key: "concrete",
    delayMs: 270,
    format: (e) => `${Math.round(10 * e)}K m³+`,
  },
];

const trustPillars: {
  id: string;
  title: string;
  subtitle: string;
  Icon: LucideIcon | typeof IconGüvenilirShield | typeof IconYüksekStandartSeal;
}[] = [
  {
    id: "g",
    title: "Güvenilir",
    subtitle: "Taahhüt ve şeffaflıkta ölçülebilir güven",
    Icon: IconGüvenilirShield,
  },
  {
    id: "s",
    title: "Sürdürülebilir",
    subtitle: "Çevre ve toplum için sorumlu üretim",
    Icon: Leaf,
  },
  {
    id: "y",
    title: "Yüksek Standart",
    subtitle: "Kalite, güvenlik ve sürekli iyileştirme",
    Icon: IconYüksekStandartSeal,
  },
  {
    id: "o",
    title: "Güçlü İş Ortaklığı",
    subtitle: "Paydaşlarımızla uzun vadeli değer",
    Icon: Handshake,
  },
];

function easeOutCubic(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return 1 - (1 - x) ** 3;
}

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

const COUNT_MS = 1200;

function AnimatedStatValue({
  format,
  delayMs,
  className,
}: {
  format: (eased: number) => string;
  delayMs: number;
  className?: string;
}) {
  const [linear, setLinear] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const lowMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (lowMotion) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let cancelled = false;
    let io: IntersectionObserver | null = null;

    const run = () => {
      const t0 = performance.now() + delayMs;
      const tick = (now: number) => {
        if (cancelled) return;
        if (now < t0) {
          raf = requestAnimationFrame(tick);
          return;
        }
        const u = Math.min(1, (now - t0) / COUNT_MS);
        setLinear(u);
        if (u < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    io = new IntersectionObserver(
      ([e]) => {
        if (!e?.isIntersecting) return;
        io?.disconnect();
        io = null;
        run();
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [delayMs, lowMotion]);

  const progress = lowMotion ? 1 : linear;
  const text = format(easeOutCubic(progress));

  return (
    <p ref={ref} className={className}>
      {text}
    </p>
  );
}

/**
 * Rakamlar: tam genişlik arka plan görseli + beyaz kart ızgarası + alt güven şeridi.
 * Kart rakamları görünür alana girince artarak sayılır.
 */
export function SectionStats() {
  return (
    <section
      id="rakamlar"
      className="relative isolate w-full overflow-hidden py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 select-none">
        <video
          src={STATS_BG_VIDEO}
          poster={STATS_BG_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden
        />
        <div
          className={cn(
            "absolute inset-0",
            "bg-linear-to-b from-white/52 via-white/42 to-white/58",
            "dark:from-zinc-950/62 dark:via-zinc-950/52 dark:to-zinc-950/68"
          )}
          aria-hidden
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0d3a5c] sm:text-4xl dark:text-sky-300">
            Rakamlarla AS Ado Beton
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
            AS Ado Beton olarak; ticari başarılarımız, güçlü istihdam kapasitemiz ve
            yüksek sevkiyat performansımızla sektörün öncüsü, yenilikçi ve hızla
            büyüyen bir hazır beton kuruluşuyuz.
          </p>
        </header>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:mt-16 lg:grid-cols-4 lg:gap-5 xl:mt-20 xl:gap-6">
          {stats.map((item) => {
            const Icon = statIcons[item.key];
            return (
              <li key={item.id}>
                <div
                  className={cn(
                    "flex h-full flex-col items-center rounded-2xl border border-zinc-200/90 bg-white px-3 py-5 text-center shadow-md",
                    "shadow-zinc-900/8 dark:border-zinc-600/60 dark:bg-zinc-900/85 dark:shadow-black/30"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-full border border-emerald-700/15",
                      "bg-linear-to-b from-white to-emerald-50/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_8px_rgba(15,118,110,0.12)]",
                      "dark:from-zinc-800 dark:to-emerald-950/40 dark:border-emerald-500/20"
                    )}
                  >
                    <Icon
                      className="h-7 w-7 shrink-0 text-emerald-800/90 dark:text-emerald-400/90"
                      strokeWidth={1.65}
                      aria-hidden
                    />
                  </div>
                  <AnimatedStatValue
                    format={item.format}
                    delayMs={item.delayMs}
                    className="mt-4 min-h-7 text-xl font-bold tabular-nums tracking-tight text-[#0d3a5c] sm:min-h-8 sm:text-2xl dark:text-sky-300"
                  />
                  <div
                    className="mx-auto mt-2 h-px w-10 rounded-full bg-emerald-600/80 dark:bg-emerald-500/70"
                    aria-hidden
                  />
                  <p className="mt-2 max-w-44 text-[0.7rem] leading-snug text-zinc-600 sm:text-xs dark:text-zinc-400">
                    {item.label}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <div
          className={cn(
            "mt-10 rounded-2xl border border-white/10 px-4 py-6 sm:mt-12 sm:px-6 sm:py-7",
            "bg-[#0d3a5c]/92 shadow-lg shadow-[#0d3a5c]/25 backdrop-blur-sm",
            "dark:border-white/10 dark:bg-[#071f33]/95"
          )}
        >
          <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-8 lg:grid-cols-4 lg:gap-0">
            {trustPillars.map((p, i) => {
              const PIcon = p.Icon;
              return (
                <li
                  key={p.id}
                  className={cn(
                    "flex gap-3 px-1 sm:px-4",
                    "lg:border-l lg:border-white/15 lg:px-6",
                    i === 0 && "lg:border-l-0 lg:pl-0"
                  )}
                >
                  <PIcon
                    className="mt-0.5 h-9 w-9 shrink-0 text-emerald-400/95"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div className="min-w-0 text-left">
                    <p className="text-sm font-bold text-white sm:text-base">
                      {p.title}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-zinc-300/95 sm:text-sm">
                      {p.subtitle}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
