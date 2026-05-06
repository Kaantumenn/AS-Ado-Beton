import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  MapPin,
  Truck,
} from "lucide-react";
import {
  TESIS_MAP_BG,
  TESIS_MAP_CARDS,
  TESIS_STAT_ITEMS,
  tesisContactIcon,
} from "@/data/tesislerMap";
import { cn } from "@/lib/cn";

const NAVY = "#0d3a5c";
const BRAND_RED = "#c8102e";

const features = [
  {
    title: "Stratejik Konum",
    body: "Ana üretim ve dağıtım noktalarımız talebe yakın, lojistik avantajı sunar.",
    Icon: MapPin,
  },
  {
    title: "Hızlı Teslimat",
    body: "Güçlü filo ve planlama ile ülke genelinde zamanında sevkiyat.",
    Icon: Truck,
  },
  {
    title: "Yüksek Standart",
    body: "Tüm tesislerimizde aynı kalite ve iş güvenliği politikaları uygulanır.",
    Icon: Award,
  },
] as const;

export function SectionTesisler() {
  return (
    <section
      id="tesislerimiz"
      className={cn(
        "w-full bg-zinc-100 py-14 text-zinc-900 sm:py-16 lg:py-20",
        "dark:bg-zinc-950 dark:text-zinc-100"
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex flex-col-reverse gap-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-14"
          )}
        >
          {/* Metin: mobilde altta */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] sm:text-sm"
                style={{ color: BRAND_RED }}
              >
                Tesislerimiz
              </p>
              <span
                className="h-px w-10 rounded-full sm:w-14"
                style={{ backgroundColor: BRAND_RED }}
                aria-hidden
              />
            </div>
            <h2
              className="mt-4 text-balance text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl"
              style={{ color: NAVY }}
            >
              Türkiye Genelindeki Güçlü Ağımız
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
              Üretim ve paketleme tesislerimiz; stratejik coğrafyaları, güçlü
              lojistik bağlantıları ve ortak kalite anlayışıyla Türkiye&apos;nin
              dört bir yanına hizmet verir.
            </p>

            <ul className="mt-8 space-y-5">
              {features.map(({ title, body, Icon }) => (
                <li key={title} className="flex gap-3.5">
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-sky-200/80 bg-sky-50",
                      "dark:border-sky-500/25 dark:bg-sky-950/50"
                    )}
                    aria-hidden
                  >
                    <Icon
                      className="h-5 w-5 text-[#0d3a5c] dark:text-sky-300"
                      strokeWidth={1.5}
                    />
                  </span>
                  <div>
                    <p className="text-sm font-bold sm:text-base">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600 sm:text-sm dark:text-zinc-400">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/kurumsal/tesisler"
              className={cn(
                "mt-9 inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d3a5c]"
              )}
              style={{ backgroundColor: NAVY }}
            >
              Tüm Tesislerimizi Keşfedin
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} aria-hidden />
            </Link>
          </div>

          {/* Harita + kartlar: mobilde üstte */}
          <div className="lg:col-span-7">
            <div className="relative min-h-[280px] sm:min-h-[320px] lg:min-h-[min(32rem,52vw)] lg:max-h-[560px]">
              {/* Harita görseli */}
              <div
                className={cn(
                  "relative h-48 overflow-hidden rounded-xl sm:h-56",
                  "lg:absolute lg:inset-0 lg:h-full lg:overflow-visible lg:rounded-2xl"
                )}
              >
                <div
                  className="absolute inset-2 bg-contain bg-center bg-no-repeat sm:inset-3 lg:inset-4"
                  style={{ backgroundImage: `url(${TESIS_MAP_BG})` }}
                  aria-hidden
                />
                {/* Marker noktaları */}
                {TESIS_MAP_CARDS.map((t) => (
                  <span
                    key={`m-${t.id}`}
                    className="absolute z-[1] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow"
                    style={{
                      backgroundColor: NAVY,
                      top: t.marker.top,
                      left: t.marker.left,
                    }}
                    aria-hidden
                  />
                ))}
              </div>

              {/* Kartlar */}
              <div
                className={cn(
                  "mt-5 flex flex-col gap-3 sm:gap-4",
                  "lg:mt-0 lg:absolute lg:inset-0 lg:block lg:pt-2"
                )}
              >
                {TESIS_MAP_CARDS.map((t) => (
                  <article
                    key={t.id}
                    className={cn(
                      "relative z-[2] w-full max-w-md rounded-xl border border-zinc-200/90 bg-white p-3 shadow-lg shadow-zinc-900/10",
                      "dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-black/40",
                      "lg:absolute lg:mx-0 lg:max-w-[17.5rem] lg:p-3.5 xl:max-w-[18.5rem]"
                    )}
                    style={{ top: t.card.top, left: t.card.left }}
                  >
                    <TesisMapCardInner t={t} />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}

function TesisMapCardInner({ t }: { t: (typeof TESIS_MAP_CARDS)[number] }) {
  return (
    <>
      <header className="flex items-start gap-2 border-b border-zinc-100 pb-2 dark:border-zinc-800">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-sm"
          style={{ backgroundColor: BRAND_RED }}
          aria-hidden
        >
          <MapPin className="h-4 w-4 text-white" strokeWidth={2} />
        </span>
        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/as_logo.webp"
              alt=""
              width={56}
              height={20}
              className="h-4 w-auto object-contain opacity-90"
            />
          </div>
          <h3 className="mt-1 text-[0.65rem] font-bold uppercase leading-tight tracking-wide text-zinc-900 sm:text-xs dark:text-zinc-100">
            {t.name}
          </h3>
        </div>
      </header>
      <div className="mt-2.5 grid grid-cols-[4.5rem_1fr] gap-2.5">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={t.thumb}
            alt=""
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
        <ul className="min-w-0 space-y-1.5">
          {t.contacts.map((row, i) => {
            const C = tesisContactIcon(row.type);
            return (
              <li key={i} className="flex items-start gap-1.5 text-[0.65rem] leading-snug text-zinc-700 sm:text-xs dark:text-zinc-300">
                <C
                  className="mt-0.5 h-3 w-3 shrink-0 text-zinc-400 dark:text-zinc-500"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span className="break-words">{row.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
