import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/cn";

const quickLinks = [
  { label: "Kurumsal", href: "#kurumsal-panel" },
  { label: "Haberler", href: "#haberler-carousel" },
  { label: "Ödüllerimiz", href: "#oduller" },
  { label: "Tarihçemiz", href: "#tarihce" },
];

export function SiteFooter() {
  return (
    <footer
      className={cn(
        "w-full border-t border-[#0d3a5c]/20 bg-linear-to-b from-[#0c1f33] to-[#071523] text-white",
        "dark:border-sky-900/40 dark:from-[#081322] dark:to-[#050d17]"
      )}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center" aria-label="AS Çimento anasayfa">
            <Image
              src="/logo/as_logo.webp"
              alt="AS Çimento"
              width={210}
              height={62}
              className="h-11 w-auto object-contain object-left"
            />
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-200/90">
            Güçlü üretim altyapımız, sürdürülebilir yaklaşımımız ve uzman kadromuzla
            Türkiye&apos;nin dört bir yanına değer katıyoruz.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-300">
            Hızlı Erişim
          </h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-zinc-200/90 transition hover:text-sky-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-300">
            İletişim
          </h3>
          <ul className="mt-4 space-y-3.5">
            <li className="flex items-start gap-2.5 text-sm text-zinc-200/90">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" strokeWidth={1.9} />
              <span>
                Kızılkaya Beldesi, Avdan Mahallesi Maltaşı Mevkii (Küme Evler)
                No:1/0 Bucak-Burdur / Türkiye
              </span>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-zinc-200/90">
              <MessageCircle className="h-4 w-4 shrink-0 text-sky-300" strokeWidth={1.9} />
              <a href="tel:+905339294777" className="font-semibold transition hover:text-sky-300">
              +90 533 929 47 77
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-zinc-200/90">
              <Phone className="h-4 w-4 shrink-0 text-sky-300" strokeWidth={1.9} />
              <a href="tel:+902483313000" className="font-semibold transition hover:text-sky-300">
                +90 248 331 30 00
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-zinc-200/90">
              <Mail className="h-4 w-4 shrink-0 text-sky-300" strokeWidth={1.9} />
              <a
                href="mailto:info@ascimento.com.tr"
                className="underline decoration-zinc-300/60 underline-offset-2 transition hover:text-sky-300"
              >
                info@ascimento.com.tr
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-zinc-300 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 AS Çimento. Tüm hakları saklıdır.</p>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <div className="flex items-center gap-3">
              <Link href="#" className="transition hover:text-sky-300">
                KVKK
              </Link>
              <span aria-hidden>•</span>
              <Link href="#" className="transition hover:text-sky-300">
                Gizlilik Politikası
              </Link>
            </div>
            <p className="text-[0.72rem] tracking-wide text-zinc-400/90">
              Prepared by Mahmut Kaan TÜMEN
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
