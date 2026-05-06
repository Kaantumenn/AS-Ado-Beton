import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Headphones } from "lucide-react";
import { KurumsalQuickNav } from "@/components/kurumsal/KurumsalQuickNav";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { cn } from "@/lib/cn";

type Manager = {
  name: string;
  title: string;
  image: string;
  fit?: "cover" | "contain";
};

const managers: Manager[] = [
  {
    name: "Ruhi GÖK",
    title: "İşletme Müdürü",
    image: "/logo/as_ado_beton_logo.png",
    fit: "contain",
  },
  {
    name: "Ali ACAR",
    title: "Tesisler, Satın Alma ve Kademe Şefi",
    image: "/logo/as_ado_beton_logo.png",
    fit: "contain",
  },
  // {
  //   name: "-",
  //   title: "Satış Pazarlama Müdürü",
  //   image: "/logo/as_ado_beton_logo.png",
  //   fit: "contain",
  // },
  {
    name: "Sinan AKTAŞ",
    title: "Finans Şefi",
    image: "/logo/as_ado_beton_logo.png",
    fit: "contain",
  },
  {
    name: "Raziye MAZLUM",
    title: "Kalite Kontrol Şefi",
    image: "/logo/as_ado_beton_logo.png",
    fit: "contain",
  },
  {
    name: "Göksel BOYACI",
    title: "Sevkiyat Amiri",
    image: "/logo/as_ado_beton_logo.png",
    fit: "contain",
  },
];
const SHOW_QUICK_NAV = true;

function ManagerCard({ manager, index }: { manager: Manager; index: number }) {
  return (
    <article
      className="group relative flex min-h-64 flex-col items-center justify-start overflow-hidden rounded-2xl border border-zinc-200/85 bg-white px-4 py-6 text-center shadow-[0_10px_35px_-18px_rgba(56,189,248,0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_-20px_rgba(56,189,248,0.52)] dark:border-zinc-700 dark:bg-zinc-900"
      style={{ animationDelay: `${index * 110}ms` }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
        aria-hidden
      >
        <div className="absolute -top-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-(--primary-blue)/20 blur-3xl dark:bg-(--primary-blue)/16" />
      </div>

      <div className="relative flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-lg ring-1 ring-zinc-200 dark:border-zinc-900 dark:ring-zinc-700">
        {manager.fit === "contain" ? (
          <Image
            src={manager.image}
            alt={manager.name}
            width={112}
            height={112}
            className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 object-contain object-center transition duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <Image
            src={manager.image}
            alt={manager.name}
            fill
            className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
          />
        )}
      </div>
      <div className="mt-5 flex w-full flex-1 flex-col items-center justify-start text-center">
        <h3 className="text-base font-semibold tracking-tight text-zinc-900 sm:text-lg dark:text-zinc-100">
          {manager.name}
        </h3>
        <p className="mt-2 text-xs text-zinc-500 italic sm:text-sm dark:text-zinc-400">
          {manager.title}
        </p>
      </div>
    </article>
  );
}

export function BirimYoneticileriPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 bg-(--section-alt)" role="main">
        <section className="border-b border-zinc-200/70 bg-linear-to-b from-zinc-50 to-white py-12 dark:border-zinc-700/70 dark:from-zinc-900 dark:to-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Birim Yöneticileri
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
                <li className="text-zinc-700 dark:text-zinc-200">Birim Yöneticileri</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div
              className={cn(
                "grid gap-6 sm:gap-8",
                SHOW_QUICK_NAV ? "lg:grid-cols-[280px_minmax(0,1fr)]" : "grid-cols-1"
              )}
            >
              {SHOW_QUICK_NAV ? <KurumsalQuickNav activeKey="birim-yoneticileri" /> : null}
              <div className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
                  {managers.map((manager, index) => (
                    <ManagerCard
                      key={`${manager.name}-${index}`}
                      manager={manager}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
