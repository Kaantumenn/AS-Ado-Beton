import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  FileBadge,
  Landmark,
  Leaf,
  MessageSquare,
  ShieldCheck,
  User,
  Users,
} from "lucide-react";
import { SectionShell } from "../SectionShell";
import { cn } from "@/lib/cn";

/** Panel arka planı (`public/photos/as-cimento-012.jpg`) */
const PANEL_BG_IMAGE = "/photos/as-cimento-012.jpg";

/** Kurumsal panel logosu: `public/logo/as_ado_beton_logo.png` */
const PANEL_LOGO_SRC = "/logo/as_ado_beton_logo.png";

/** Görseldeki koyu mavi CTA + kart ikon/okları (Lucide stroke = currentColor) */
const ctaBlue = "#0d3a5c";
const cardIconClass = "text-[#0d3a5c] dark:text-sky-300";

type KurumsalLinkItem = {
  id: string;
  href: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

const kurumsalLinks: KurumsalLinkItem[] = [
  {
    id: "birim",
    href: "/kurumsal/birim-yoneticileri",
    title: "Birim yöneticileri",
    description: "Organizasyon yapımız ve birim sorumluları hakkında bilgi.",
    Icon: Users,
  },
  {
    id: "tarihce",
    href: "/kurumsal/tarihcemiz",
    title: "Tarihçemiz",
    description: "Kuruluşumuzdan bugüne yolculuğumuz ve kilometre taşlarımız.",
    Icon: Landmark,
  },
  {
    id: "baskan",
    href: "/kurumsal/baskandan-mesaj",
    title: "Başkandan mesaj",
    description: "Yönetim kurulu başkanımızın değerlendirmeleri ve vizyonu.",
    Icon: MessageSquare,
  },
  {
    id: "kalite",
    href: "/kurumsal/kalite-politikasi",
    title: "Kalite politikası",
    description: "Kalite yönetimi ve sürekli iyileştirme yaklaşımımız.",
    Icon: Award,
  },
  {
    id: "yk",
    href: "/kurumsal/yonetim-kurulu",
    title: "Yönetim kurulu",
    description: "Yönetim kurulu üyelerimiz ve görev dağılımı.",
    Icon: Users,
  },
  {
    id: "sertifika",
    href: "/kurumsal/sertifikalar",
    title: "Sertifikalar",
    description: "Yetkinliklerimizi belgeleyen sertifika ve akreditasyonlar.",
    Icon: FileBadge,
  },
  {
    id: "grup",
    href: "/kurumsal/grup-sirketleri",
    title: "Grup şirketleri",
    description: "Grup yapımız ve bağlı ortaklıklarımız.",
    Icon: Building2,
  },
  {
    id: "ik",
    href: "/kurumsal/insan-kaynaklari",
    title: "İnsan kaynakları",
    description: "Kariyer fırsatları ve insan kaynakları süreçlerimiz.",
    Icon: User,
  },
];

function KurumsalCardLink({
  href,
  title,
  description,
  Icon,
}: KurumsalLinkItem) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex w-full items-center gap-3 rounded-xl border border-zinc-200/95 bg-white p-3.5 text-left shadow-sm transition",
        "hover:border-zinc-300 hover:shadow-md",
        "dark:border-zinc-600/80 dark:bg-zinc-900/90 dark:hover:border-zinc-500"
      )}
    >
      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#0d3a5c]/18 bg-sky-50/70",
          cardIconClass,
          "dark:border-sky-400/25 dark:bg-sky-950/35"
        )}
        aria-hidden
      >
        <Icon className={cn("h-5 w-5", cardIconClass)} strokeWidth={1.5} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-zinc-900 sm:text-base dark:text-zinc-100">
          {title}
        </span>
        <span className="mt-0.5 block text-xs leading-snug text-zinc-500 sm:text-sm dark:text-zinc-400">
          {description}
        </span>
      </span>
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#0d3a5c]/22 bg-sky-50/80",
          cardIconClass,
          "transition group-hover:border-[#0d3a5c]/35 group-hover:bg-white dark:border-sky-400/30 dark:bg-sky-950/40 dark:group-hover:border-sky-400/45"
        )}
        aria-hidden
      >
        <ArrowRight className={cn("h-4 w-4", cardIconClass)} strokeWidth={2} />
      </span>
    </Link>
  );
}

/**
 * Kurumsal panel: `lg` ve üzeri solda kartlar, sağda marka + metin + CTA.
 * Mobilde `flex-col-reverse`: önce hero, altta kartlar. Arka plan tam alan `background-image`.
 */
export function SectionKurumsalPanel() {
  return (
    <SectionShell
      id="kurumsal-panel"
      variant="muted"
      className="py-14 sm:py-20"
    >
      <h2 className="sr-only">Kurumsal</h2>

      <div
        className={cn(
          "relative isolate overflow-hidden rounded-2xl border border-zinc-200/90 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)]",
          "dark:border-zinc-700/70 dark:shadow-black/40"
        )}
      >
        {/* Tüm panel alanının altında tek arka plan görseli */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${PANEL_BG_IMAGE})` }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[#0d3a5c]/45 dark:bg-black/45"
          aria-hidden
        />

        <div
          className={cn(
            "relative z-10 flex flex-col-reverse lg:grid lg:grid-cols-2 lg:items-stretch"
          )}
        >
          {/* Masaüstünde sol / mobilde altta: kurumsal bağlantı kartları */}
          <nav
            className="flex flex-col gap-2.5 p-3 sm:gap-3 sm:p-4 lg:p-5"
            aria-label="Kurumsal sayfalar"
          >
            {kurumsalLinks.map((item) => (
              <KurumsalCardLink key={item.id} {...item} />
            ))}
          </nav>

          {/* Masaüstünde sağ / mobilde üstte: marka + metin + CTA */}
          <div className="relative z-10 min-h-88 sm:min-h-96 lg:min-h-112">
            <div
              className="absolute inset-0 bg-linear-to-b via-[#0a2540]/60 to-black/20"
              aria-hidden
            />
            <div className="relative z-10 flex h-full min-h-88 flex-col justify-between p-6 sm:p-8 lg:min-h-112 lg:p-10 lg:pl-12">
              <div className="flex max-w-xl flex-col items-start text-left">
                <Link href="/" className="relative block h-14 w-56 shrink-0 sm:h-16 sm:w-64">
                  <Image
                    src={PANEL_LOGO_SRC}
                    alt="AS Ado Beton"
                    width={280}
                    height={84}
                    className="h-14 w-auto max-w-64 object-contain object-left sm:h-16 sm:max-w-72"
                    priority={false}
                  />
                </Link>
                <p className="mt-7 max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-white sm:mt-8 sm:text-4xl lg:text-[2.125rem] lg:leading-tight xl:text-[2.35rem]">
                  Güçlü temeller, geleceğe güvenle.
                </p>
                <p className="mt-4 max-w-lg text-[0.9375rem] font-normal leading-relaxed text-white/95 sm:text-base">
                  Yüksek kalite standartlarımız, çevreye duyarlı üretim anlayışımız
                  ve deneyimli ekibimizle yarını inşa ediyoruz.
                </p>
                <Link
                  href="/kurumsal/insan-kaynaklari#basvuru"
                  className={cn(
                    "mt-8 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] shadow-lg transition hover:brightness-110",
                    "text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
                  )}
                  style={{ backgroundColor: ctaBlue }}
                >
                  İş başvurusu
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-(--icon-brand-on-dark)"
                    strokeWidth={2.4}
                    aria-hidden
                  />
                </Link>
              </div>

              <div className="mt-12 flex w-full max-w-xl rounded-xl border border-white/15 bg-linear-to-r from-(--secondary-blue) via-[#0c1f33] to-[#050f18] px-3 py-5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.55)] sm:mt-14 sm:px-4 sm:py-6">
                <ul className="grid w-full grid-cols-3 gap-1 text-center text-[0.7rem] font-medium leading-snug text-white sm:text-xs">
                  <li className="flex flex-col items-center gap-2.5 border-r border-white/20 px-1 sm:gap-3 sm:pr-4">
                    <ShieldCheck
                      className="h-6 w-6 text-(--icon-brand-on-dark) sm:h-7 sm:w-7"
                      strokeWidth={1.45}
                    />
                    <span className="text-balance">Güvenilir Üretim</span>
                  </li>
                  <li className="flex flex-col items-center gap-2.5 border-r border-white/20 px-1 sm:gap-3 sm:px-3">
                    <Leaf
                      className="h-6 w-6 text-(--icon-brand-on-dark) sm:h-7 sm:w-7"
                      strokeWidth={1.45}
                    />
                    <span className="text-balance">Çevreye Duyarlı</span>
                  </li>
                  <li className="flex flex-col items-center gap-2.5 px-1 sm:gap-3 sm:pl-4">
                    <Users
                      className="h-6 w-6 text-(--icon-brand-on-dark) sm:h-7 sm:w-7"
                      strokeWidth={1.45}
                    />
                    <span className="text-balance">Deneyimli Ekip</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
