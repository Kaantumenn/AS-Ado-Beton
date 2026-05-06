"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { cn } from "@/lib/cn";

export type GalleryPhoto = {
  id: string;
  title: string;
  caption?: string;
  src: string;
  orientation?: "landscape" | "portrait" | "wide";
  mediaType?: "image" | "video";
};

/** Görselleri `public/photos/` altına ekleyerek veya bu diziyi güncelleyerek yönetebilirsiniz. */
const photos: GalleryPhoto[] = [
  {
    id: "1",
    title: "Saha görünümü",
    caption: "Tesis sahamızdan genel görünüm",
    src: "/photos/as-cimento-012.jpg",
    orientation: "wide",
  },
  {
    id: "2",
    title: "Operasyon alanı",
    caption: "Günlük operasyon süreçleri",
    src: "/photos/as-cimento-002.jpg",
    orientation: "landscape",
  },
  {
    id: "3",
    title: "Tesis detayı",
    caption: "Sahadan anlık kareler",
    src: "/photos/as-cimento-003.jpg",
    orientation: "landscape",
  },
  {
    id: "4",
    title: "Yükleme hazırlığı",
    caption: "Sevkiyat öncesi hazırlık alanı",
    src: "/photos/as-cimento-009.jpg",
    orientation: "portrait",
  },
  {
    id: "5",
    title: "Üretim sahası",
    caption: "Sahadaki aktif üretim süreçleri",
    src: "/photos/as-cimento-005.jpg",
    orientation: "landscape",
  },
  {
    id: "8",
    title: "Yükleme ve sevkiyat",
    caption: "Süreç yönetiminden bir görünüm",
    src: "/photos/as-cimento-008.jpg",
    orientation: "landscape",
  },
  {
    id: "9",
    title: "Lojistik hazırlık",
    caption: "Dikey kadrajda saha operasyonu",
    src: "/photos/as-cimento-007.jpg",
    orientation: "portrait",
  },
  // Video dosyasi push limitine takildigi icin gecici olarak pasife alindi.
  // {
  //   id: "6",
  //   title: "Tesiste hareket",
  //   caption: "Uretim hatti cevresinden kare",
  //   src: "/photos/as-cimento-013.mp4",
  //   orientation: "landscape",
  //   mediaType: "video",
  // },
  {
    id: "7",
    title: "Dikey tesis görünümü",
    caption: "Sahadan portre kadraj",
    src: "/photos/as-cimento-004.jpg",
    orientation: "portrait",
  },
  {
    id: "10",
    title: "Silo ve tesis",
    caption: "Üretim birimleri çevresinden görüntü",
    src: "/photos/as-cimento-010.jpg",
    orientation: "portrait",
  },
  {
    id: "11",
    title: "AS manzara",
    caption: "Geniş açıyla tesis panoraması",
    src: "/photos/as-cimento-011.jpg",
    orientation: "wide",
  },
  {
    id: "12",
    title: "AS SANY sahası",
    caption: "Saha araçları ve tesis görünümü",
    src: "/photos/as-cimento-001.jpg",
    orientation: "landscape",
  },
  {
    id: "13",
    title: "Saha karesi 01",
    caption: "Yeni eklenen saha görseli",
    src: "/photos/IMG_0625.JPG",
    orientation: "landscape",
  },
  {
    id: "14",
    title: "Saha karesi 02",
    caption: "Yeni eklenen saha görseli",
    src: "/photos/IMG_0635.JPG",
    orientation: "landscape",
  },
  {
    id: "15",
    title: "Saha karesi 03",
    caption: "Yeni eklenen saha görseli",
    src: "/photos/IMG_0661.JPG",
    orientation: "landscape",
  },
  {
    id: "16",
    title: "Saha karesi 04",
    caption: "Yeni eklenen saha görseli",
    src: "/photos/IMG_0662.png",
    orientation: "landscape",
  },
  {
    id: "17",
    title: "Saha karesi 05",
    caption: "Yeni eklenen saha görseli",
    src: "/photos/IMG_0667.JPG",
    orientation: "landscape",
  },
  {
    id: "18",
    title: "Saha karesi 06",
    caption: "Yeni eklenen saha görseli",
    src: "/photos/IMG_0680.JPG",
    orientation: "landscape",
  },
  {
    id: "19",
    title: "Saha karesi 07",
    caption: "Yeni eklenen saha görseli",
    src: "/photos/IMG_0690.JPG",
    orientation: "landscape",
  },
  {
    id: "20",
    title: "Saha karesi 08",
    caption: "Yeni eklenen saha görseli",
    src: "/photos/IMG_0692.JPG",
    orientation: "landscape",
  },
  {
    id: "21",
    title: "Saha karesi 09",
    caption: "Yeni eklenen portre saha görseli",
    src: "/photos/IMG_0613.JPG",
    orientation: "portrait",
  },
  
];

export function FotoGaleriPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const active = selectedIndex !== null ? photos[selectedIndex] : null;
  const n = photos.length;

  const close = useCallback(() => setSelectedIndex(null), []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setSelectedIndex((i) => (((i ?? 0) + 1) % n));
      if (e.key === "ArrowLeft") setSelectedIndex((i) => (((i ?? 0) - 1 + n) % n));
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedIndex, close, n]);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 bg-(--section-alt)" role="main">
        <section className="border-b border-zinc-200/70 bg-linear-to-b from-zinc-50 to-white py-12 dark:border-zinc-700/70 dark:from-zinc-900 dark:to-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-(--primary-blue) dark:bg-sky-900/35">
                  <Camera className="h-6 w-6" />
                </span>
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Foto Galeri
                  </h1>
                  <nav aria-label="Breadcrumb" className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    <ol className="flex flex-wrap items-center gap-2">
                      <li>
                        <Link href="/" className="transition hover:text-(--primary-blue)">
                          Anasayfa
                        </Link>
                      </li>
                      <li aria-hidden>/</li>
                      <li className="text-zinc-700 dark:text-zinc-200">Medya</li>
                      <li aria-hidden>/</li>
                      <li className="text-zinc-700 dark:text-zinc-200">Foto Galeri</li>
                    </ol>
                  </nav>
                </div>
              </div>
              <Link
                href="/video-galeri"
                className="inline-flex items-center gap-2 self-start rounded-xl border border-zinc-200/90 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-sm transition hover:border-(--primary-blue)/35 hover:bg-sky-50/80 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                Video galeri
                <ArrowRight className="h-4 w-4 text-(--primary-blue)" strokeWidth={2} />
              </Link>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
               Bir görsele
              tıklayarak büyük önizleme ile gezinebilirsiniz.
            </p>
          </div>
        </section>

        <section className="bg-zinc-100 py-10 sm:py-12 dark:bg-zinc-950 lg:bg-transparent lg:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="columns-2 gap-3 sm:gap-4 lg:columns-3 lg:gap-3">
              {photos.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={cn(
                    "group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-[1.35rem] text-left transition sm:mb-4 sm:rounded-3xl lg:mb-3 lg:rounded-xl",
                    "bg-zinc-900 shadow-[0_20px_36px_-28px_rgba(0,0,0,0.9)] lg:border lg:border-zinc-200/75 lg:bg-white lg:shadow-[0_14px_28px_-26px_rgba(56,189,248,0.45)] dark:lg:border-zinc-700 dark:lg:bg-zinc-900",
                    "hover:shadow-[0_22px_34px_-24px_rgba(0,0,0,0.95)] lg:hover:border-sky-300/60 lg:hover:shadow-[0_18px_34px_-26px_rgba(56,189,248,0.5)] dark:lg:hover:border-sky-500/35"
                  )}
                >
                  <div
                    className={cn(
                      "relative w-full overflow-hidden bg-zinc-800 dark:bg-zinc-800 lg:bg-zinc-100",
                      item.orientation === "portrait"
                        ? "aspect-3/4"
                        : item.orientation === "wide"
                          ? "aspect-video"
                          : "aspect-4/3"
                    )}
                  >
                    {item.mediaType === "video" ? (
                      <video
                        src={item.src}
                        className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-black/32 transition duration-300 group-hover:bg-black/48 lg:bg-black/20 lg:group-hover:bg-black/45" />
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/55 to-transparent px-3 pb-3 pt-8 text-white opacity-100 transition duration-300 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      <span className="block text-xs font-semibold drop-shadow-sm md:text-sm">{item.title}</span>
                      {item.caption ? (
                        <span className="mt-0.5 block text-[11px] leading-snug text-white/88 md:text-xs">
                          {item.caption}
                        </span>
                      ) : null}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

      {active ? (
        <div
          className="fixed inset-0 z-1400 flex items-center justify-center bg-black/82 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Foto önizleme"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl border border-white/10 bg-zinc-950/95 p-2 shadow-2xl sm:p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-2 top-2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/75"
              aria-label="Kapat"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setSelectedIndex((i) => (((i ?? 0) - 1 + n) % n))}
              className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-black/55 p-2.5 text-white transition hover:bg-black/75 sm:flex"
              aria-label="Önceki fotoğraf"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => setSelectedIndex((i) => (((i ?? 0) + 1) % n))}
              className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-black/55 p-2.5 text-white transition hover:bg-black/75 sm:flex"
              aria-label="Sonraki fotoğraf"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="relative mx-auto aspect-16/10 max-h-[72vh] w-full overflow-hidden rounded-xl bg-black">
              {active.mediaType === "video" ? (
                <video
                  src={active.src}
                  className="h-full w-full object-contain object-center"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              ) : (
                <Image
                  src={active.src}
                  alt={active.title}
                  fill
                  className="object-contain object-center"
                  sizes="100vw"
                  priority
                />
              )}
            </div>
            <div className="border-t border-white/10 px-3 py-3 sm:px-4">
              <p className="text-base font-semibold text-white">{active.title}</p>
              {active.caption ? (
                <p className="mt-1 text-sm text-white/75">{active.caption}</p>
              ) : null}
              <p className="mt-2 text-xs text-white/45">
                {selectedIndex !== null ? `${selectedIndex + 1} / ${n}` : ""}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
