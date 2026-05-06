"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Newspaper } from "lucide-react";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { HABER_CAROUSEL_SLIDES } from "@/data/haberlerCarousel";

const newsItems = HABER_CAROUSEL_SLIDES.map((item, index) => ({
  ...item,
  tag: index % 2 === 0 ? "Kurumsal" : "Gelişme",
}));

export function HaberlerPage() {
  const featured = newsItems[0];
  const rest = newsItems.slice(1);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 bg-(--section-alt)" role="main">
        <section className="border-b border-zinc-200/70 bg-linear-to-b from-zinc-50 to-white py-12 dark:border-zinc-700/70 dark:from-zinc-900 dark:to-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-(--primary-blue) dark:bg-sky-900/35">
                <Newspaper className="h-6 w-6" />
              </span>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Güncel Haberler
                </h1>
                <nav aria-label="Breadcrumb" className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  <ol className="flex items-center gap-2">
                    <li>
                      <Link href="/" className="transition hover:text-(--primary-blue)">
                        Anasayfa
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>Medya</li>
                    <li aria-hidden>/</li>
                    <li className="text-zinc-700 dark:text-zinc-200">Haberler</li>
                  </ol>
                </nav>
              </div>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
              Şirketimizden son gelişmeler, ödüller ve saha faaliyetleri. 
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <article className="group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_18px_48px_-28px_rgba(56,189,248,0.5)] transition hover:-translate-y-0.5 dark:border-zinc-700 dark:bg-zinc-900">
              <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative aspect-16/10 w-full overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
                <div className="flex flex-col justify-between p-5 sm:p-7">
                  <div>
                    <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-sky-800 dark:border-sky-800/60 dark:bg-sky-900/30 dark:text-sky-300">
                      Öne Çıkan Haber
                    </span>
                    <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
                      {featured.title}
                    </h2>
                    <p className="mt-3 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                      <CalendarDays className="h-4 w-4 text-(--primary-blue)" />
                      {featured.date}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
                      {featured.description ??
                        "Faaliyetlerimizden öne çıkan bu gelişmeyi detaylı olarak inceleyebilirsiniz."}
                    </p>
                  </div>
                  <Link
                    href={`/haberler/${featured.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-(--primary-blue) transition hover:opacity-80"
                  >
                    Haberi oku
                  </Link>
                </div>
              </div>
            </article>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((item) => (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_12px_34px_-24px_rgba(56,189,248,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(56,189,248,0.55)] dark:border-zinc-700 dark:bg-zinc-900"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>
                  <div className="space-y-2.5 px-4 pb-5 pt-4">
                    <p className="inline-flex rounded-full bg-zinc-100 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.09em] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                      {item.tag}
                    </p>
                    <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                      <CalendarDays className="h-3.5 w-3.5 text-(--primary-blue)" />
                      {item.date}
                    </p>
                    <Link
                      href={`/haberler/${item.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-(--primary-blue) transition hover:opacity-80"
                    >
                      Devamını gör
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

