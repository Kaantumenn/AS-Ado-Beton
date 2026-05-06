"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = {
  title: string;
  images: string[];
};

export function HaberDetailImageGallery({ title, images }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const activeImage = selectedIndex !== null ? images[selectedIndex] : null;
  const n = images.length;

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") {
        setSelectedIndex((prev) => ((prev ?? 0) + 1) % n);
      }
      if (event.key === "ArrowLeft") {
        setSelectedIndex((prev) => ((prev ?? 0) - 1 + n) % n);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [n, selectedIndex]);

  return (
    <>
      <div className="pt-4">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Haberden Kareler</h2>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {images.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="relative aspect-video overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 text-left transition hover:opacity-95 dark:border-zinc-700 dark:bg-zinc-800"
              aria-label={`${title} ek görsel ${index + 1} büyüt`}
            >
              <Image
                src={src}
                alt={`${title} ek görsel ${index + 1}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </button>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-1400 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Görsel önizleme"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full max-w-6xl rounded-2xl border border-white/10 bg-zinc-950/90 p-2 sm:p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-2 top-2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/75"
              aria-label="Kapat"
            >
              <X className="h-5 w-5" />
            </button>
            {n > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => setSelectedIndex((prev) => ((prev ?? 0) - 1 + n) % n)}
                  className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/55 p-2.5 text-white transition hover:bg-black/75 sm:flex"
                  aria-label="Önceki görsel"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedIndex((prev) => ((prev ?? 0) + 1) % n)}
                  className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/55 p-2.5 text-white transition hover:bg-black/75 sm:flex"
                  aria-label="Sonraki görsel"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            ) : null}

            <div className="relative mx-auto aspect-video max-h-[75vh] w-full overflow-hidden rounded-xl bg-black">
              <Image
                src={activeImage}
                alt={`${title} büyük görsel`}
                fill
                className="object-contain object-center"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

