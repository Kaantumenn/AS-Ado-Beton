import Image from "next/image";
import Link from "next/link";
import {
  Quote,
} from "lucide-react";
import { KurumsalQuickNav } from "@/components/kurumsal/KurumsalQuickNav";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export function BaskandanMesajPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 bg-(--section-alt)" role="main">
        <section className="border-b border-zinc-200/70 bg-linear-to-b from-zinc-50 to-white py-12 dark:border-zinc-700/70 dark:from-zinc-900 dark:to-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Başkandan Mesaj
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
                <li className="text-zinc-700 dark:text-zinc-200">Başkandan Mesaj</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
              <KurumsalQuickNav activeKey="baskandan-mesaj" />

              <article className="rounded-3xl border border-zinc-200/80 bg-white p-4 shadow-[0_22px_48px_-30px_rgba(56,189,248,0.45)] sm:p-5 dark:border-zinc-700 dark:bg-zinc-900">
                <div className="grid gap-5 lg:grid-cols-[300px_minmax(0,1fr)]">
                  <div className="mx-auto hidden w-fit rounded-[1.9rem] border border-sky-200/80 bg-zinc-50 p-2 shadow-[0_14px_34px_-24px_rgba(56,189,248,0.65)] sm:p-2.5 lg:mx-0 lg:block dark:border-sky-900/55 dark:bg-zinc-800/55">
                    <div className="relative aspect-3/4 w-[220px] overflow-hidden rounded-[1.45rem] sm:w-[300px]">
                      <Image
                        src="/members/adem-sak-biyo.webp"
                        alt="Adem Sak"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 300px"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 py-1 sm:py-2 lg:px-4">
                    <div className="space-y-1.5">
                      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-zinc-100">
                        Adem SAK
                      </h2>
                      <p className="text-base font-semibold text-[#1f7fb3] sm:text-lg dark:text-sky-300">
                        Yönetim Kurulu Başkanı
                      </p>
                    </div>
                    <div className="h-1 w-18 rounded-full bg-(--primary-blue)/65" />
                    <Quote className="h-10 w-10 text-zinc-200 dark:text-zinc-700" strokeWidth={2} />
                    <div className="space-y-3 text-xs leading-relaxed text-zinc-700 sm:text-sm dark:text-zinc-300">
                      <p>
                        Burdur Bucak&apos;ta faaliyet gösteren şirketimiz, modern üretim altyapısı ve
                        yüksek kalite anlayışı ile ülkemizin öncü çimento üreticileri arasında yer
                        almaktadir.
                      </p>
                      <p>
                        AS Çimento olarak, yıllık klinker üretim ve çimento öğütme kapasitemiz ile
                        yurt içinde ve uluslararası pazarlarda güvenilir bir çözüm ortağı olmayı sürdürüyoruz.
                      </p>
                      <p>
                        Sürdürülebilirlik, verimlilik ve insan odaklı yönetim anlayışımızla
                        ülkemize katma değer sağlamaktan gurur duyuyoruz.
                      </p>
                    </div>
                  </div>
                </div>

         
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
