import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  ChevronRight,
  FileText,
  Headphones,
  MessageSquare,
  ShieldCheck,
  Users,
} from "lucide-react";
import { cn } from "@/lib/cn";

type KurumsalNavKey =
  | "yonetim-kurulu"
  | "tarihcemiz"
  | "baskandan-mesaj"
  | "kalite-politikasi"
  | "birim-yoneticileri"
  | "sertifikalar"
  | "grup-sirketleri"
  | "insan-kaynaklari";

type KurumsalMenuItem = {
  key: KurumsalNavKey;
  label: string;
  href: string;
  Icon: LucideIcon;
};

const kurumsalMenu: KurumsalMenuItem[] = [
  { key: "yonetim-kurulu", label: "Yönetim Kurulu", href: "/kurumsal/yonetim-kurulu", Icon: Users },
  { key: "tarihcemiz", label: "Tarihçemiz", href: "/kurumsal/tarihcemiz", Icon: CalendarDays },
  { key: "baskandan-mesaj", label: "Başkandan Mesaj", href: "/kurumsal/baskandan-mesaj", Icon: MessageSquare },
  { key: "kalite-politikasi", label: "Kalite Politikası", href: "/kurumsal/kalite-politikasi", Icon: ShieldCheck },
  { key: "birim-yoneticileri", label: "Birim Yöneticileri", href: "/kurumsal/birim-yoneticileri", Icon: Users },
  { key: "sertifikalar", label: "Sertifikalar", href: "/kurumsal/sertifikalar", Icon: BadgeCheck },
  { key: "grup-sirketleri", label: "Grup Şirketleri", href: "/kurumsal/grup-sirketleri", Icon: Building2 },
  { key: "insan-kaynaklari", label: "İnsan Kaynakları", href: "/kurumsal/insan-kaynaklari", Icon: FileText },
];

export function KurumsalQuickNav({ activeKey }: { activeKey: KurumsalNavKey }) {
  return (
    <aside className="sticky top-24 hidden self-start rounded-3xl border border-zinc-200/80 bg-white p-4 shadow-[0_18px_45px_-30px_rgba(56,189,248,0.55)] dark:border-zinc-700 dark:bg-zinc-900 lg:block">
      <h2 className="px-2 text-sm font-semibold tracking-[0.28em] text-zinc-600 uppercase dark:text-zinc-300">
        Kurumsal
      </h2>
      <nav className="mt-3.5" aria-label="Kurumsal hızlı menü">
        <ul className="space-y-2">
          {kurumsalMenu.map((item) => {
            const isActive = item.key === activeKey;
            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={cn(
                    "group flex items-center justify-between rounded-xl border px-3.5 py-3 text-sm font-medium transition duration-200",
                    isActive
                      ? "border-(--primary-blue) bg-(--primary-blue) text-white shadow-[0_14px_26px_-20px_var(--primary-blue)]"
                      : "border-zinc-200/90 bg-white text-zinc-700 hover:border-(--primary-blue)/35 hover:bg-sky-50/60 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-(--primary-blue)/45 dark:hover:bg-zinc-800/85"
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <item.Icon
                      className={cn("h-4 w-4 shrink-0", isActive ? "text-white" : "text-zinc-500")}
                      strokeWidth={1.9}
                    />
                    <span>{item.label}</span>
                  </span>
                  <ChevronRight className={cn("h-4 w-4 shrink-0", isActive ? "text-white" : "text-(--primary-blue)")} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-3.5 dark:border-zinc-700 dark:bg-zinc-800/60">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-(--primary-blue) dark:bg-sky-900/45">
            <Headphones className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">İletişime Geçin</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Sorularınız için bizimle iletişime geçebilirsiniz.</p>
          </div>
        </div>
        <Link
          href="/#iletisim"
          className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-(--primary-blue) transition hover:opacity-80"
        >
          Hemen ulaşın <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </aside>
  );
}

