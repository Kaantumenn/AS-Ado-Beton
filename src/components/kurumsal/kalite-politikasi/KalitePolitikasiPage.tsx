import Link from "next/link";
import { Quote } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { KurumsalQuickNav } from "@/components/kurumsal/KurumsalQuickNav";

export function KalitePolitikasiPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 bg-(--section-alt)" role="main">
        <section className="border-b border-zinc-200/70 bg-linear-to-b from-zinc-50 to-white py-12 dark:border-zinc-700/70 dark:from-zinc-900 dark:to-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Kalite Politikası
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
                <li className="text-zinc-700 dark:text-zinc-200">Kalite Politikası</li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
              <KurumsalQuickNav activeKey="kalite-politikasi" />

              <article className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-[0_14px_38px_-24px_rgba(56,189,248,0.42)] sm:p-8 dark:border-zinc-700 dark:bg-zinc-900">
                <h2 className="text-sm font-semibold tracking-[0.04em] text-zinc-700 uppercase sm:text-base dark:text-zinc-200">
                  AS ADO BETON VİZYON, MİSYON VE DEĞERLER
                </h2>

                <div className="mt-4 rounded-xl border-l-3 border-(--primary-blue) bg-zinc-100/80 p-4 sm:mt-5 sm:p-6 dark:bg-zinc-800/70">
                  <div className="flex gap-3 sm:gap-4">
                    <Quote
                      className="mt-0.5 h-7 w-7 shrink-0 text-(--primary-blue) sm:h-9 sm:w-9"
                      strokeWidth={2.2}
                    />
                    <p className="text-base leading-relaxed text-zinc-800 sm:text-base dark:text-zinc-100">
                      Hazır beton sektöründe kaliteli ürünleri, zamanında teslimatları, müşteri
                      memnuniyetini kendine ilke edinmiş personeli ile kendini sürekli gelişmeye
                      odaklamış örnek ve lider kuruluş olmaktır.
                    </p>
                  </div>
                </div>

                <h3 className="mt-6 text-sm font-semibold tracking-[0.03em] text-zinc-700 uppercase sm:text-base dark:text-zinc-200">
                  Misyon
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
                  Vizyonumuz doğrultusunda her türlü ticari, ahlaki, hukuki kurallara saygılı ve bu
                  kuralları harfiyen yerine getiren; müşterilerine, çalışanlarına ve ilişki içerisinde
                  bulunduğu tüm kesimlere katkılarını sürekli olarak geliştiren dinamik bir
                  organizasyon olmak. Bunun için Toplam Kalite Yönetimi felsefesini ve sürekli
                  gelişim anlayışını ilke edinerek mükemmele yolculukta devamlı mesafe kaydetmek.
                </p>

                <h3 className="mt-6 text-sm font-semibold tracking-[0.03em] text-zinc-700 uppercase sm:text-base dark:text-zinc-200">
                  Değerler
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
                  Müşterilerimiz bizim patronumuzdur. Çalışanlarımız kurumumuzun temel taşlarıdır.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
                  Kaliteli ürün ve hizmetler müşterilerimizin hakkıdır. Üstün iş ahlakı, adil ve dürüst
                  davranış şekli ile örnek kuruluş olmaya özen göstermek, verimliliği, etkinliği,
                  üretkenliği ve kaliteyi en ön planda tutmak, tüm iletişim araçlarının sonuna kadar
                  kullanarak şeffaf modern ve dinamik bir yapıda faaliyetlerimizi sürdürmek. Her
                  çalışanımızı takımımızın aktif bir parçası olarak görmektir.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
