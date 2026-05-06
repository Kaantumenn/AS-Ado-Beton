"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

type Facility = {
  id: string;
  name: string;
  manager: string;
  phone: string;
  gsm: string;
  fax: string;
  email: string;
  address: string;
  image: string;
  mapUrl: string;
  mapEmbedUrl: string;
};

const facilities: Facility[] = [
  {
    id: "aksu",
    name: "Aksu Çimento Paketleme Tesisi",
    manager: "Ali Acar",
    phone: "-",
    gsm: "+90 530 276 59 92",
    fax: "-",
    email: "info@ascimento.com.tr",
    address: "Macun Mahallesi Isparta Caddesi No:92, Aksu / Antalya",
    image: "/aksu-tesis.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=XR6F%2BMV%20Aksu%2C%20Antalya",
    mapEmbedUrl:
      "https://www.google.com/maps?q=XR6F%2BMV%20Aksu%2C%20Antalya&output=embed",
  },
  {
    id: "aydin-ortaklar",
    name: "Aydın Ortaklar Çimento Öğütme ve Paketleme Tesisi",
    manager: "Hakan Yılmaz",
    phone: "+90 (256) 577 21 01",
    gsm: "+90 540 717 26 26",
    fax: "-",
    email: "info@ascimento.com.tr",
    address: "Ortaklar Mahallesi 7 Eylül Caddesi No: 153/1, Germencik / Aydın",
    image: "/aydin-tesis.webp",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ortaklar+Mahallesi+7+Eyl%C3%BCl+Caddesi+No%3A153%2F1%2C+Germencik+Ayd%C4%B1n",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Ortaklar+Mahallesi+7+Eylul+Caddesi+No:153/1,+Germencik+Aydin&output=embed",
  },
];

function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/85 bg-white shadow-[0_14px_36px_-24px_rgba(2,132,199,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-24px_rgba(2,132,199,0.62)] dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex items-center justify-between border-b border-zinc-200/80 bg-zinc-50 px-4 py-3.5 dark:border-zinc-700 dark:bg-zinc-800/50">
        <div className="flex min-w-0 items-center gap-3">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center">
            <Image src="/logo/as_logo.webp" alt="" width={44} height={44} className="h-10 w-10 object-contain" />
          </span>
          <h2 className="text-base leading-snug font-semibold tracking-tight text-zinc-900 whitespace-normal wrap-break-word dark:text-zinc-100">
            {facility.name}
          </h2>
        </div>
        <ArrowUpRight className="h-4.5 w-4.5 shrink-0 text-zinc-500 transition group-hover:text-(--primary-blue)" />
      </div>

      <div className="space-y-3 px-4 py-4">
        <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-3.5 py-3 dark:border-zinc-700 dark:bg-zinc-800/50">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-zinc-500 uppercase dark:text-zinc-400">
            Yetkili
          </p>
          <p className="mt-1.5 text-2xl font-semibold leading-tight text-zinc-900 dark:text-zinc-100">
            {facility.manager}
          </p>
        </div>

        <dl className="space-y-2.5 text-sm text-zinc-700 dark:text-zinc-300">
          <div className="grid grid-cols-[20px_minmax(0,1fr)] items-start gap-2.5 border-b border-zinc-200/80 pb-2.5 dark:border-zinc-700/70">
            <Phone className="mt-0.5 h-4 w-4 text-(--primary-blue)" />
            <div>
              <dt className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Telefon</dt>
              <dd className="mt-0.5">{facility.phone}</dd>
            </div>
          </div>

          <div className="grid grid-cols-[20px_minmax(0,1fr)] items-start gap-2.5 border-b border-zinc-200/80 pb-2.5 dark:border-zinc-700/70">
            <Smartphone className="mt-0.5 h-4 w-4 text-(--primary-blue)" />
            <div>
              <dt className="text-xs font-medium text-zinc-500 dark:text-zinc-400">GSM</dt>
              <dd className="mt-0.5">{facility.gsm}</dd>
            </div>
          </div>

          <div className="grid grid-cols-[20px_minmax(0,1fr)] items-start gap-2.5 border-b border-zinc-200/80 pb-2.5 dark:border-zinc-700/70">
            <Building2 className="mt-0.5 h-4 w-4 text-(--primary-blue)" />
            <div>
              <dt className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Fax</dt>
              <dd className="mt-0.5">{facility.fax}</dd>
            </div>
          </div>

          <div className="grid grid-cols-[20px_minmax(0,1fr)] items-start gap-2.5 border-b border-zinc-200/80 pb-2.5 dark:border-zinc-700/70">
            <Mail className="mt-0.5 h-4 w-4 text-(--primary-blue)" />
            <div>
              <dt className="text-xs font-medium text-zinc-500 dark:text-zinc-400">E-posta</dt>
              <dd className="mt-0.5 break-all">{facility.email}</dd>
            </div>
          </div>

          <div className="grid grid-cols-[20px_minmax(0,1fr)] items-start gap-2.5">
            <MapPin className="mt-0.5 h-4 w-4 text-(--primary-blue)" />
            <div>
              <dt className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Adres</dt>
              <dd className="mt-0.5 leading-relaxed">{facility.address}</dd>
            </div>
          </div>
        </dl>
        <div className="overflow-hidden rounded-xl border border-zinc-200/80 shadow-[0_12px_36px_-24px_rgba(56,189,248,0.4)] dark:border-zinc-700/70">
          <iframe
            src={facility.mapEmbedUrl}
            title={`${facility.name} harita görünümü`}
            className="h-56 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="mt-auto px-4 pb-4">
        <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
          <Image
            src={facility.image}
            alt={`${facility.name} görseli`}
            fill
            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </div>
    </article>
  );
}

export function TesislerimizPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 bg-(--section-alt)" role="main">
        <section className="border-b border-zinc-200/70 bg-linear-to-b from-zinc-50 to-white py-12 dark:border-zinc-700/70 dark:from-zinc-900 dark:to-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-(--primary-blue) dark:bg-sky-900/35">
                <Building2 className="h-6 w-6" />
              </span>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Tesislerimiz
                </h1>
                <nav aria-label="Breadcrumb" className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  <ol className="flex items-center gap-2">
                    <li>
                      <Link href="/" className="transition hover:text-(--primary-blue)">
                        Anasayfa
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-zinc-700 dark:text-zinc-200">Tesislerimiz</li>
                  </ol>
                </nav>
              </div>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
              Üretim ve paketleme ağımızdaki tesislerimizi yetkili iletişim bilgileriyle birlikte
              inceleyebilirsiniz. 
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {facilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
