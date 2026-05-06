import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Kurumsal", href: "#kurumsal-panel" },
  { label: "Haberler", href: "#haberler-carousel" },
  { label: "Ödüllerimiz", href: "#oduller" },
  { label: "Tarihçemiz", href: "#tarihce" },
  { label: "Tesislerimiz", href: "#tesisler" },
  { label: "Sürdürülebilirlik", href: "#surdurulebilirlik" },
  { label: "İletişim", href: "/iletisim" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-visible bg-(--secondary-blue) text-white">
      <div className="pointer-events-none absolute inset-x-0 -top-7 h-9" aria-hidden>
        <svg
          viewBox="0 0 1000 120"
          preserveAspectRatio="none"
          className="h-full w-full"
          role="presentation"
        >
          <path
            d="M0,70 Q110,-20 1000,108 L1000,120 L0,120 Z"
            fill="var(--secondary-blue)"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-2 pt-16 sm:px-6 sm:pb-10 sm:pt-20 lg:px-8">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="inline-block bg-(--secondary-blue) px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase">
              Hızlı Erişim
            </span>
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-sky-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-left sm:text-right">
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">AS Çimento</h3>
            <p className="text-sm text-zinc-200">
              Kızılkaya Beldesi, Avdan Mahallesi Maltaşı Mevkii (Küme Evler)
              <br />
              No:1/0 Bucak-Burdur / Türkiye
            </p>
            <div className="space-y-1 text-sm text-zinc-200">
              <p className="leading-relaxed">
                <a href="tel:+902483313000" className="transition hover:text-sky-300">
                  +90 (248) 331 30 00
                </a>{" "}
                ·{" "}
                <a href="tel:+905339294777" className="transition hover:text-sky-300">
                  +90 533 929 47 77
                </a>
              </p>
              <p>
                <a href="mailto:info@ascimento.com.tr" className="transition hover:text-sky-300">
                  info@ascimento.com.tr
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link href="/" aria-label="AS Çimento anasayfa">
                <Image
                  src="/logo/as_logo.webp"
                  alt="AS Çimento"
                  width={180}
                  height={54}
                  className="h-10 w-auto object-contain object-left"
                />
              </Link>
              <p className="max-w-xs text-xs leading-relaxed text-zinc-300">
                Güçlü üretim altyapımız, sürdürülebilir yaklaşımımız ve uzman kadromuzla
                Türkiye&apos;nin dört bir yanına değer katıyoruz.
              </p>
            </div>

            <div className="space-y-2 text-left text-xs text-zinc-300 sm:text-right">
              <div className="flex items-center gap-3 sm:justify-end">
                <Link href="#" className="transition hover:text-sky-300">
                  KVKK
                </Link>
                <span aria-hidden>•</span>
                <Link href="#" className="transition hover:text-sky-300">
                  Gizlilik Politikası
                </Link>
              </div>
              <p>© 2026 AS Çimento. Tüm hakları saklıdır.</p>
              <p className="tracking-wide text-zinc-400/90">Prepared By Mahmut Kaan Tümen</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
