"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Video as VideoIcon,
  X,
} from "lucide-react";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { cn } from "@/lib/cn";

export type GalleryVideo = {
  id: string;
  title: string;
  description: string;
  /** YouTube video kimliği (ör. URL'deki `v=` değeri). Boşsa kart yer tutucu olarak gösterilir. */
  youtubeId?: string;
};

const videos: GalleryVideo[] = [
  {
    id: "1",
    title: "Kurumsal tanıtım",
    description: "Şirket vizyonumuz ve üretim anlayışımızın özeti.",
    youtubeId: "8h_kDkIF6wA",
  },

  {
    id: "4",
    title: "Kurumsal Tanıtım Filmi 2",
    description: "AS Çimento'nun üretim, kalite ve kurumsal yaklaşımını anlatan ikinci tanıtım videosu.",
    youtubeId: "fm6np7PZMQM",
  },
];

function youtubeThumb(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export function VideoGaleriPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? videos[openIndex] : null;
  const n = videos.length;

  const close = useCallback(() => setOpenIndex(null), []);

  const stepPlayable = useCallback(
    (from: number, dir: -1 | 1) => {
      let idx = from;
      for (let step = 0; step < n; step++) {
        idx = (idx + dir + n) % n;
        if (videos[idx]?.youtubeId) {
          setOpenIndex(idx);
          return;
        }
      }
    },
    [n]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") stepPlayable(openIndex, 1);
      if (e.key === "ArrowLeft") stepPlayable(openIndex, -1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openIndex, close, stepPlayable]);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 bg-(--section-alt)" role="main">
        <section className="border-b border-zinc-200/70 bg-linear-to-b from-zinc-50 to-white py-12 dark:border-zinc-700/70 dark:from-zinc-900 dark:to-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-(--primary-blue) dark:bg-sky-900/35">
                  <VideoIcon className="h-6 w-6" />
                </span>
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Video Galeri
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
                      <li className="text-zinc-700 dark:text-zinc-200">Video Galeri</li>
                    </ol>
                  </nav>
                </div>
              </div>
              <Link
                href="/foto-galeri"
                className="inline-flex items-center gap-2 self-start rounded-xl border border-zinc-200/90 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-sm transition hover:border-(--primary-blue)/35 hover:bg-sky-50/80 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                Foto galeri
                <ArrowRight className="h-4 w-4 text-(--primary-blue)" strokeWidth={2} />
              </Link>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Kurumsal videolarımızı buradan izleyebilirsiniz. Kartlara tıklayarak tam ekran önizleme ve ok tuşlarıyla
              sıradaki videoya geçebilirsiniz.
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((item, index) => {
                const playable = Boolean(item.youtubeId);
                return (
                  <article
                    key={item.id}
                    className={cn(
                      "flex flex-col overflow-hidden rounded-2xl border border-zinc-200/85 bg-white shadow-[0_14px_38px_-26px_rgba(56,189,248,0.48)] transition dark:border-zinc-700 dark:bg-zinc-900",
                      playable &&
                        "hover:-translate-y-0.5 hover:border-sky-300/55 hover:shadow-[0_20px_44px_-28px_rgba(56,189,248,0.52)]"
                    )}
                  >
                    <button
                      type="button"
                      disabled={!playable}
                      onClick={() => playable && setOpenIndex(index)}
                      className={cn(
                        "relative aspect-video w-full overflow-hidden bg-zinc-100 text-left outline-none dark:bg-zinc-800",
                        playable ? "cursor-pointer" : "cursor-not-allowed opacity-85"
                      )}
                    >
                      {playable && item.youtubeId ? (
                        <>
                          <Image
                            src={youtubeThumb(item.youtubeId)}
                            alt=""
                            fill
                            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-black/35 transition hover:bg-black/45" />
                          <span className="absolute inset-0 flex items-center justify-center">
                            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[#2596be] shadow-lg ring-4 ring-black/15 dark:bg-zinc-900 dark:text-sky-400">
                              <Play className="ml-1 h-7 w-7 fill-current" />
                            </span>
                          </span>
                        </>
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-linear-to-br from-zinc-100 via-white to-sky-50/80 px-6 dark:from-zinc-900 dark:via-zinc-900 dark:to-sky-950/40">
                          <VideoIcon className="h-10 w-10 text-zinc-400 dark:text-zinc-500" strokeWidth={1.25} />
                          <span className="text-center text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                            Video yakında
                          </span>
                        </div>
                      )}
                    </button>
                    <div className="flex flex-1 flex-col gap-2 px-5 pb-5 pt-4">
                      <h2 className="text-lg font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
                        {item.title}
                      </h2>
                      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>
                      {!playable ? (
                        <p className="mt-auto pt-2 text-xs text-zinc-400 dark:text-zinc-500">
                          YouTube video kimliği eklendiğinde oynatılabilir olur.
                        </p>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

      {active?.youtubeId ? (
        <div
          className="fixed inset-0 z-1400 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Video oynatıcı"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl border border-white/10 bg-black p-2 shadow-2xl sm:p-3"
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
              onClick={() => openIndex !== null && stepPlayable(openIndex, -1)}
              className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/55 p-2.5 text-white transition hover:bg-black/75 sm:flex"
              aria-label="Önceki video"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => openIndex !== null && stepPlayable(openIndex, 1)}
              className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/55 p-2.5 text-white transition hover:bg-black/75 sm:flex"
              aria-label="Sonraki video"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                key={active.youtubeId}
                title={active.title}
                src={`https://www.youtube-nocookie.com/embed/${active.youtubeId}?autoplay=1&rel=0`}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="border-t border-white/10 px-2 py-3 sm:px-3">
              <p className="font-semibold text-white">{active.title}</p>
              <p className="mt-1 text-sm text-white/75">{active.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
