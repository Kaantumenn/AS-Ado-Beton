import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";

export function SectionAdoBeton() {
  return (
    <section id="as-ado-beton" className="relative w-full bg-[var(--section-alt)] py-10 sm:py-14">
      <Link
        href="https://as-cimento.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className="group relative block w-full overflow-hidden"
      >
        <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[620px]">
          <Image
            src="/photos/as-cimento-011.jpg"
            alt="AS ADO Beton tanıtım görseli"
            fill
            className="object-cover object-center transition duration-500 group-hover:scale-[1.025]"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-[#1f72aa]/36 transition duration-500 group-hover:bg-[#f3f8fd]/14" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#0d3f67]/62 via-[#2a72ab]/34 to-[#2a72ab]/10 transition duration-500 group-hover:from-[#0d3f67]/44 group-hover:via-[#2a72ab]/20 group-hover:to-[#2a72ab]/6" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/46 via-black/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 z-10">
            <div className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8 lg:pb-12">
              <div className="max-w-2xl">
                <div className="flex flex-col flex-wrap items-start gap-3 sm:gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/12 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.1em] text-white uppercase backdrop-blur-sm transition group-hover:border-white/70 group-hover:bg-white/24">
                    <Building2 className="h-3.5 w-3.5" />
                    Grup Şirketleri
                  </span>
                  <div className="inline-flex">
                    <Image
                      src="/logo/as_logo.webp"
                      alt="AS Çimento"
                      width={432}
                      height={134}
                      className="h-[4.2rem] w-auto object-contain"
                    />
                  </div>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/92 sm:text-base">
                  Çimento üretiminde yüksek kalite, sürdürülebilirlik ve kesintisiz tedarik
                  anlayışıyla projelerinize güçlü bir temel sunar.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/35 bg-white/10 px-3 py-2 text-xs font-medium text-white sm:text-sm">
                  <span>Kurumsal web sitesi için tıklayınız</span>
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
