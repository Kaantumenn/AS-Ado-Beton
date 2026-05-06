import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionShell } from "../SectionShell";
import { cn } from "@/lib/cn";

const brand = "#0d3a5c";

function CardArrowLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition hover:opacity-90",
        "text-[#003358]",
        className
      )}
    >
      <ArrowRight className="h-4 w-4" strokeWidth={2} />
    </Link>
  );
}

function AwardImageCard({
  imageSrc,
  imageAlt,
  linkHref,
  linkLabel,
  /** Mobilde satır yüksekliğini bu kartın en-boy oranı belirler (ISO vb. plaket). */
  mobileDriveHeight = false,
}: {
  imageSrc: string;
  imageAlt: string;
  linkHref: string;
  linkLabel: string;
  mobileDriveHeight?: boolean;
}) {
  return (
    <article
      className={cn(
        "relative w-full overflow-hidden rounded-2xl",
        mobileDriveHeight
          ? "max-md:aspect-1/2 max-md:min-h-72"
          : "max-md:h-full max-md:min-h-0",
        "md:min-h-88 lg:min-h-96"
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className={cn(
          "md:object-cover",
          /* Mobil: tam genişlik; vergi görseli üstten hizalı (başlık kesilmesin), ISO ortalı */
          "max-md:object-cover",
          mobileDriveHeight ? "max-md:object-center" : "max-md:object-top"
        )}
        sizes="(max-width: 767px) 45vw, (max-width: 1024px) 32vw, 25vw"
        priority={false}
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 dark:ring-white/10" />
      <div className="absolute right-4 bottom-4 z-10">
        <CardArrowLink href={linkHref} label={linkLabel} />
      </div>
    </article>
  );
}

/**
 * Haber kartları (vergi rekortmeni, 500 büyük sanayi) + Fortune 500 metin bloğu.
 * Önceden `SectionIntro` içindeydi; işaretleme ve düzen aynı kaldı.
 */
export function SectionIso500Vergi() {
  return (
    <SectionShell
      id="iso-500-ve-vergi"
      variant="muted"
      className="py-14 sm:py-20"
    >
      <h2 className="sr-only">Haberler ve ödüller — ISO 500 ve vergi vurguları</h2>
      <div
        className="grid grid-cols-2 items-stretch gap-3 md:grid-cols-1 md:gap-8 lg:grid-cols-3 lg:gap-6 xl:gap-8"
        role="region"
        aria-label="Haber kartları ve basın metni"
      >
        <AwardImageCard
          imageSrc="/awards/vergi_rekortmeni.png"
          imageAlt="Vergi rekortmeni plaket görseli"
          linkHref="#"
          linkLabel="Vergi rekortmeni detayına git"
        />

        <AwardImageCard
          imageSrc="/awards/500_buyuk_sanayi.png"
          imageAlt="Türkiye'nin 500 büyük sanayi kuruluşu, AS Çimento"
          linkHref="#"
          linkLabel="500 büyük sanayi listesi detayına git"
          mobileDriveHeight
        />

        {/* Sağ (lg+); mobilde tam genişlik alt satır */}
        <div className="col-span-2 flex flex-col justify-center space-y-4 max-md:pt-2 md:col-span-1 lg:min-h-0 lg:pt-2">
          <p className="text-[0.7rem] font-medium uppercase leading-snug tracking-wide text-zinc-600 sm:text-xs dark:text-zinc-400">
            AS Çimento Sanayi ve Ticaret Anonim Şirketi
          </p>
          <h3 className="text-balance text-2xl font-bold leading-snug text-foreground sm:text-3xl">
            Türkiye&apos;nin En Büyük 500 Şirketi{" "}
            <span className="text-red-600 dark:text-red-500">Arasında!</span>
          </h3>
          <div className="h-px w-12 bg-red-600" />
          <div className="space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
            <p>
              Fortune Türkiye iş dergisi tarafından yapılan araştırmalar
              sonucunda, Türkiye&apos;de imalat, ticaret, hizmet ve inşaat
              sektörlerini kapsayan &apos;Türkiye&apos; nin En Büyük 500
              Şirketi&apos; araştırması 2024 yılı verilerine göre, İlçemizde
              faaliyet gösteren As Çimento Sanayi ve Ticaret Anonim Şirketi,
              317 çalışanı, 522 milyon TL net satış ve yüzde 14 artışla
              listede 481&apos;inci sırada yer aldı. 31 milyon
              TL&apos;lik ihracatıyla da Türkiye sıralamasında 331&apos;inci
              oldu.
            </p>
            <p>
              Bucak Ticaret ve Sanayi Odası Yönetim Kurulu Başkanı Hasan
              Yalçın Meçikoğlu&apos;nun araştırma sonucuyla ilgili yaptığı
              açıklamada; &ldquo;Fortune 500 listesinde yer alan
              firmalarımızın her birinin sahipleri, yöneticileri ile
              çalışanlarını tek tek kutluyor, istikrarlı büyümelerini büyük
              bir azim ve kararlılıkla sürdürerek, başarılarının devamını
              diliyorum.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="#"
              className="inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
              style={{ backgroundColor: brand }}
            >
              Detaylı incele
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>

      <p className="mt-10 text-left">
        <Link
          href="#"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 transition hover:underline dark:text-sky-400"
        >
          Tüm Haberler
          <ArrowRight className="h-4 w-4" />
        </Link>
      </p>
    </SectionShell>
  );
}
