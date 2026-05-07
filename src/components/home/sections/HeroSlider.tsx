"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode, useCallback, useEffect, useId, useState } from "react";
import { cn } from "@/lib/cn";

/** “ÜSTÜN / KALİTE” — komple dolu tema mavisi (fill + stroke yok) */
function HeroBlueTitleText({ children }: { children: ReactNode }) {
  return (
    <span className="font-bold text-sky-500 [text-shadow:0_1px_3px_rgba(0,0,0,0.45)]">
      {children}
    </span>
  );
}

type HeroSlide = {
  image: string;
  /** CSS `object-position` değeri (örn. `"center 25%"`, `"top"`). Varsayılan `"center"`. */
  imagePosition?: string;
  eyebrow: string;
  titleStart: string;
  titleBlue: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  stats: [string, string][];
  cardTitle: string;
  cardItems: [string, string][];
  cardCta: string;
  floatingImage: string;
};

const HERO_SLIDES: HeroSlide[] = [
  {
    image: "/photos/as_ado_banner1.png",
    eyebrow: "Hazır Beton Çözümleri",
    titleStart: "İLERİ TEKNOLOJİ,",
    titleBlue: "ÜSTÜN KALİTE",
    description:
      "Yüksek dayanım, zamanında sevkiyat ve çevreye duyarlı üretim anlayışımızla projelerinize değer katıyoruz.",
    ctaLabel: "TESİSLERİMİZİ KEŞFEDİN",
    ctaHref: "/tesislerimiz",
    stats: [
      ["25+", "Yıllık Tecrübe"],
      ["500+", "Tamamlanan Proje"],
      ["7/24", "Kesintisiz Tedarik"],
    ],
    cardTitle: "ADO 1 BETON SANTRALİ",
    cardItems: [
      ["Kapasite", "120 m³/saat"],
      ["Teknoloji", "Tam Otomasyon"],
      ["Lokasyon", "Antalya / Döşemealtı"],
    ],
    cardCta: "SANTRALİ İNCELE",
    floatingImage: "/photos/aksu_tesisi.png",
  },
  {
    image: "/photos/as_ado_banner2.png",
    eyebrow: "Güvenilir Tedarik Ağı",
    titleStart: "HIZLI SEVKİYAT,",
    titleBlue: "KESİNTİSİZ HİZMET",
    description:
      "Geniş mikser filomuz ve güçlü lojistik ağımız sayesinde her ölçekteki projeye zamanında hazır beton ulaştırıyoruz.",
    ctaLabel: "BİRİMLERİMİZ",
    ctaHref: "/kurumsal/birim-yoneticileri",
    stats: [
      ["170", "Beton Mikseri"],
      ["30", "Beton Pompası"],
      ["17", "Aktif Santral"],
    ],
    cardTitle: "SEVKİYAT VE OPERASYON",
    cardItems: [
      ["Filo", "170 Mikser + 30 Pompa"],
      ["Kapsama", "Antalya Genelinde"],
      ["Planlama", "Dijital Rota Takibi"],
    ],
    cardCta: "OPERASYON DETAYI",
    floatingImage: "/photos/altinova_tesisi.png",
  },
  {
    image: "/photos/as_ado_banner3.png",
    eyebrow: "Sürdürülebilir Üretim",
    titleStart: "GÜÇLÜ ALTYAPI,",
    titleBlue: "MODERN ÜRETİM",
    description:
      "TSE standartlarına uygun üretim süreçlerimiz ve kalite odaklı yaklaşımımızla uzun ömürlü beton çözümleri sunuyoruz.",
    ctaLabel: "KALİTE POLİTİKASI",
    ctaHref: "/kurumsal/kalite-politikasi",
    stats: [
      ["TSE", "Standart Uyumlu"],
      ["ISO", "Süreç Disiplini"],
      ["%100", "Kalite Kontrol"],
    ],
    cardTitle: "KALİTE VE GÜVENCE",
    cardItems: [
      ["Kontrol", "Sürekli Numune Takibi"],
      ["Standart", "TSE Uyumlu Üretim"],
      ["Yaklaşım", "Müşteri Odaklı Hizmet"],
    ],
    cardCta: "DETAYLI İNCELE",
    floatingImage: "/photos/turkler_tesisi.png",
  },
  {
    image: "/photos/aksu_tesisi.png",
    imagePosition: "center 25%",
    eyebrow: "Modern Üretim Tesisleri",
    titleStart: "STRATEJİK KONUM,",
    titleBlue: "GÜÇLÜ KAPASİTE",
    description:
      "Antalya genelinde konuşlanmış santrallerimizle her bölgeye hızlı ve kesintisiz hazır beton tedariki sağlıyoruz.",
    ctaLabel: "TESİSLERİMİZİ İNCELE",
    ctaHref: "/tesislerimiz",
    stats: [
      ["17", "Aktif Santral"],
      ["1.500+", "m³/saat Kapasite"],
      ["12", "Şehir Bölgesi"],
    ],
    cardTitle: "AKSU BETON SANTRALİ",
    cardItems: [
      ["Kapasite", "150 m³/saat"],
      ["Teknoloji", "Otomatik Dozajlama"],
      ["Lokasyon", "Antalya / Aksu"],
    ],
    cardCta: "TESİSİ İNCELE",
    floatingImage: "/photos/aksu_tesisi.png",
  },
];

const curveH = "h-16 w-full sm:h-24";
const AUTO_ADVANCE_MS = 3800;

/**
 * 1. bölüm: Video yerine modern image slider + 3D derinlik hissi.
 * Alt eğri (gökyüzü rengi) hero ile aynı kutu içinde — arada boşluk yok.
 */
export function HeroSlider() {
  const labelId = useId();
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const activeSlide = HERO_SLIDES[activeIdx];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    // Her geçişten sonra timer'ı yeniden başlat: manuel tıklamada üst üste slide engellenir.
    const timer = window.setTimeout(() => {
      setDirection(1);
      setActiveIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearTimeout(timer);
  }, [activeIdx]);

  return (
    <section className="relative w-full" aria-labelledby={labelId}>
      <h2 id={labelId} className="sr-only">
        AS Çimento — vitrin
      </h2>

      <div className="relative w-full min-h-[min(88vh,860px)] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={activeSlide.image}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 140 : -140, scale: 1.02 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -120 : 120, scale: 1.02 }}
              transition={{ duration: 0.58, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={activeSlide.image}
                alt="AS Çimento vitrin görseli"
                fill
                className="object-cover"
                style={{ objectPosition: activeSlide.imagePosition ?? "center" }}
                priority
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-white/10" aria-hidden />
          <div className="absolute inset-0 bg-black/38" aria-hidden />
          <div className="absolute inset-0 bg-linear-to-r from-[#071f34]/76 via-[#0b3e68]/42 to-[#0b3e68]/8" />
        </div>

        <div className="relative z-20 flex min-h-[min(88vh,860px)] flex-col">
          <div className="flex flex-1 flex-col justify-center px-4 pb-28 pt-10 sm:px-8 sm:pb-32 sm:pt-12 lg:px-16 lg:pt-16">
            <div className="max-w-xl pr-2 text-left sm:max-w-2xl sm:pr-4 md:pr-8">
              <span className="inline-flex rounded-full border border-white/45 bg-black/22 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.1em] text-white uppercase">
                {activeSlide.eyebrow}
              </span>
              <h1
                className="mt-3 text-left text-2xl font-bold leading-tight tracking-tight text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.5)] sm:text-3xl md:text-4xl"
              >
                <span className="text-white">
                  {activeSlide.titleStart}{" "}
                </span>
                <HeroBlueTitleText>{activeSlide.titleBlue}</HeroBlueTitleText>
              </h1>
              <p
                className="mt-4 max-w-2xl text-base font-normal leading-relaxed text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] sm:mt-5 sm:max-w-2xl sm:text-lg"
              >
                {activeSlide.description}
              </p>
              <p className="mt-5 sm:mt-7">
                <Link
                  href={activeSlide.ctaHref}
                  className="inline-flex items-center gap-2.5 rounded-2xl bg-linear-to-r from-sky-500 to-sky-800 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition hover:opacity-95 active:scale-[0.99] sm:px-6 sm:py-3 sm:text-base dark:from-sky-500 dark:to-sky-900"
                >
                  {activeSlide.ctaLabel}
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]"
                    strokeWidth={2.25}
                    aria-hidden
                  />
                </Link>
              </p>
              <div className="mt-8 grid max-w-[34rem] grid-cols-3 gap-2 rounded-2xl border border-white/20 bg-black/30 p-3 backdrop-blur-sm sm:gap-3 sm:p-4">
                {activeSlide.stats.map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-white/15 bg-white/5 px-2 py-2">
                    <p className="text-lg font-semibold text-white sm:text-xl">{value}</p>
                    <p className="text-[0.64rem] tracking-[0.06em] text-white/75 uppercase sm:text-[0.67rem]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-4 right-4 z-30 hidden items-center justify-between lg:flex">
            <button
              type="button"
              aria-label="Önceki görsel"
              onClick={prevSlide}
              className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-black/28 text-white backdrop-blur-sm transition hover:bg-black/40"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Sonraki görsel"
              onClick={nextSlide}
              className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-black/28 text-white backdrop-blur-sm transition hover:bg-black/40"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-20 z-30 flex items-center justify-center px-4 sm:bottom-24">
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`${i + 1}. görsele git`}
                  aria-current={i === activeIdx}
                  onClick={() => setActiveIdx(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === activeIdx ? "w-8 bg-sky-400" : "w-2 bg-white/55 hover:bg-white/75"
                  )}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.aside
              key={`card-${activeIdx}`}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 70 : -70, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute right-6 bottom-24 z-30 hidden w-[min(25rem,35vw)] overflow-visible rounded-3xl border border-white/25 bg-black/45 p-5 text-white shadow-2xl backdrop-blur-md lg:block"
            >
              <p className="text-xl font-semibold tracking-tight">{activeSlide.cardTitle}</p>
              <ul className="mt-4 space-y-2.5">
                {activeSlide.cardItems.map(([label, value]) => (
                  <li key={label} className="grid grid-cols-[6.5rem_minmax(0,1fr)] items-start gap-2 text-sm">
                    <span className="text-white/65">{label}</span>
                    <span className="font-medium text-white/95">{value}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={activeSlide.ctaHref}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-sky-700 px-4 py-2 text-xs font-semibold tracking-[0.05em] uppercase text-white"
              >
                {activeSlide.cardCta}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

              <div className="pointer-events-none absolute -right-7 -bottom-9 h-[9.5rem] w-[11.5rem]">
                <Image
                  src={activeSlide.floatingImage}
                  alt=""
                  fill
                  className="object-contain drop-shadow-[0_20px_22px_rgba(0,0,0,0.48)]"
                  sizes="18rem"
                />
              </div>
            </motion.aside>
          </AnimatePresence>
        </div>

        {/* Aynı yükseklik içinde: dolgu + tema rengi eğri (gökyüzü) */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 w-full"
          aria-hidden
        >
          <svg
            className={cn("block text-sky-600 dark:text-sky-500", curveH)}
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 Q600,72 1200,0 L1200,100 L0,100 Z"
              className="fill-(--section)"
            />
            <path
              d="M0,0 Q600,72 1200,0"
              fill="none"
              className="stroke-current"
              strokeWidth="20"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
