import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, ChevronLeft, Newspaper } from "lucide-react";
import { HaberDetailImageGallery } from "@/components/medya/HaberDetailImageGallery";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { HABER_CAROUSEL_SLIDES } from "@/data/haberlerCarousel";

type RouteParams = {
  params: Promise<{ id: string }>;
};

const LOREM_PARAGRAPHS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id risus ac tortor tempor vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; pellentesque volutpat sem sit amet nisl mattis, at sagittis massa posuere.",
  "Phasellus varius, sem et tristique congue, risus odio aliquam metus, sed ultrices urna nisl nec lacus. Curabitur non malesuada neque. Sed sit amet ipsum eros. Morbi pulvinar justo nec consequat ullamcorper. Nunc porttitor efficitur arcu, ac fermentum est rutrum at.",
  "Donec eget velit consectetur, vulputate sem at, suscipit sapien. Aliquam erat volutpat. In et dui non erat tincidunt vulputate. Vestibulum non pellentesque urna. Ut tristique efficitur justo, vel tincidunt est elementum sed.",
];

function getNewsById(id: string) {
  return HABER_CAROUSEL_SLIDES.find((item) => item.id === id);
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { id } = await params;
  const news = getNewsById(id);
  if (!news) {
    return {
      title: "Haber bulunamadı | AS Cimento",
    };
  }

  return {
    title: `${news.title} | AS Cimento`,
    description: `${news.title} başlıklı haber detayı.`,
  };
}

export default async function HaberDetayRoute({ params }: RouteParams) {
  const { id } = await params;
  const news = getNewsById(id);
  if (!news) notFound();

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 bg-(--section-alt)" role="main">
        <section className="border-b border-zinc-200/70 bg-linear-to-b from-zinc-50 to-white py-12 dark:border-zinc-700/70 dark:from-zinc-900 dark:to-zinc-950">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/haberler"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-(--primary-blue) transition hover:opacity-80"
            >
              <ChevronLeft className="h-4 w-4" />
              Haberlere geri dön
            </Link>

            <div className="mt-5 flex items-start gap-3">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-(--primary-blue) dark:bg-sky-900/35">
                <Newspaper className="h-6 w-6" />
              </span>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
                  {news.title}
                </h1>
                <p className="mt-3 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <CalendarDays className="h-4 w-4 text-(--primary-blue)" />
                  {news.date}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <article className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_18px_48px_-30px_rgba(56,189,248,0.45)] dark:border-zinc-700 dark:bg-zinc-900">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>

              <div className="space-y-5 px-5 py-6 sm:px-8 sm:py-8">
                {news.description ? (
                  <p className="text-lg font-semibold leading-relaxed text-zinc-800 dark:text-zinc-200">
                    {news.description}
                  </p>
                ) : null}

                {(news.content?.length ? news.content : LOREM_PARAGRAPHS).map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {paragraph}
                  </p>
                ))}

                {news.detailImages?.length ? (
                  <HaberDetailImageGallery title={news.title} images={news.detailImages} />
                ) : null}
              </div>
            </div>
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

