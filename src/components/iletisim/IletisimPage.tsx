"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useCallback, useMemo, useState } from "react";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SectionShell } from "../home/SectionShell";

function ContactHeroWithCards() {
  const MAP_DIRECTIONS_URL =
    "https://www.google.com/maps/dir/?api=1&destination=K%C4%B1z%C4%B1lkaya+Beldesi+Avdan+Mahallesi+Malta%C5%9F%C4%B1+Mevkii+No%3A1%2F0+Bucak+Burdur";

  return (
    <section
      id="iletisim-hero"
      className="relative border-b border-zinc-200/70 bg-white dark:border-zinc-700/70 dark:bg-zinc-950"
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src="/photos/IMG_0662.png"
            alt=""
            fill
            priority
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/92 to-white/35 dark:from-zinc-950 dark:via-zinc-950/92 dark:to-zinc-950/45" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white dark:to-zinc-950" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <p className="text-center text-xs font-semibold tracking-[0.18em] text-(--primary-blue) uppercase">
            AS Çimento
          </p>
          <h1 className="mt-2 text-center text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
            İletişim
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
            Bizimle iletişime geçin, sorularınızı yanıtlamaktan memnuniyet duyarız.
          </p>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8">
        <div className="-mt-8 grid gap-4 sm:-mt-10 sm:gap-5 lg:grid-cols-3">
          <article className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_18px_50px_-34px_rgba(2,132,199,0.55)] dark:border-zinc-700/70 dark:bg-zinc-900">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-(--primary-blue) dark:bg-sky-500/10 dark:text-sky-300">
                <Mail className="h-6 w-6" strokeWidth={1.8} />
              </span>
            </div>
            <h2 className="mt-4 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              E-Posta
            </h2>
            <a
              href="mailto:info@ascimento.com.tr"
              className="mt-1 block text-sm text-zinc-600 transition hover:text-(--primary-blue) dark:text-zinc-300 dark:hover:text-sky-300"
            >
              info@ascimento.com.tr
            </a>
            <div className="mt-4">
              <a
                href="mailto:info@ascimento.com.tr"
                className="inline-flex items-center text-(--primary-blue) transition hover:opacity-80 dark:text-sky-300"
                aria-label="E-posta gönder"
              >
                <ArrowRight className="h-4.5 w-4.5" strokeWidth={2} />
              </a>
            </div>
          </article>

          <article className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_18px_50px_-34px_rgba(2,132,199,0.55)] dark:border-zinc-700/70 dark:bg-zinc-900">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-(--primary-blue) dark:bg-sky-500/10 dark:text-sky-300">
                <MapPin className="h-6 w-6" strokeWidth={1.8} />
              </span>
            </div>
            <h2 className="mt-4 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Adres
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Kızılkaya Beldesi, Avdan Mahallesi
              <br />
              Maltaşı Mevkii (Küme Evler) No:1/0
              <br />
              Bucak-Burdur / Türkiye
            </p>
            <div className="mt-4">
              <a
                href={MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-(--primary-blue) transition hover:opacity-80 dark:text-sky-300"
              >
                <span>Yol tarifi al</span>
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </article>

          <article className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_18px_50px_-34px_rgba(2,132,199,0.55)] dark:border-zinc-700/70 dark:bg-zinc-900">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-(--primary-blue) dark:bg-sky-500/10 dark:text-sky-300">
                <Phone className="h-6 w-6" strokeWidth={1.8} />
              </span>
            </div>
            <h2 className="mt-4 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              Telefon
            </h2>
            <div className="mt-1 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
              <a
                href="tel:+902483313000"
                className="block transition hover:text-(--primary-blue) dark:hover:text-sky-300"
              >
                +90 248 331 30 00
              </a>
              <a
                href="tel:+905339294777"
                className="block transition hover:text-(--primary-blue) dark:hover:text-sky-300"
              >
                +90 533 929 47 77
              </a>
            </div>
            <div className="mt-4">
              <a
                href="tel:+902483313000"
                className="inline-flex items-center text-(--primary-blue) transition hover:opacity-80 dark:text-sky-300"
                aria-label="Telefon ile ara"
              >
                <ArrowRight className="h-4.5 w-4.5" strokeWidth={2} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const [sent, setSent] = useState(false);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaCode, setCaptchaCode] = useState(() => createCaptchaCode());

  const isCaptchaValid = useMemo(
    () => captchaInput.trim().toUpperCase() === captchaCode,
    [captchaInput, captchaCode],
  );

  const refreshCaptcha = useCallback(() => {
    setCaptchaCode(createCaptchaCode());
    setCaptchaInput("");
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isCaptchaValid) return;
    setSent(true);
  };

  return (
    <SectionShell
      id="iletisim-form"
      variant="default"
      className="py-10 sm:py-14"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-8">
        <article className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_14px_40px_-28px_rgba(56,189,248,0.45)] dark:border-zinc-700/70 dark:bg-zinc-900">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
            AS Çimento
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            İletişim Bilgileri
          </h2>

          <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_16px_50px_-36px_rgba(2,132,199,0.55)] dark:border-zinc-700/70 dark:bg-zinc-900">
            <div className="relative">
              <Image
                src="/photos/IMG_0662.png"
                alt="AS Çimento tesis görünümü"
                width={1200}
                height={900}
                className="h-64 w-full object-cover sm:h-72"
                priority
              />
              <div className="absolute left-5 top-5 inline-flex items-center rounded-xl bg-white/90 px-3 py-2 shadow-sm backdrop-blur-sm dark:bg-zinc-950/70">
                <Image
                  src="/logo/as_logo.webp"
                  alt="AS Çimento"
                  width={160}
                  height={54}
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* foto -> mavi alan geçişi (curve) */}
              <div className="pointer-events-none absolute -bottom-px left-0 right-0" aria-hidden>
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-10 w-full sm:h-12">
                  <path
                    d="M0,40 C220,120 420,0 620,55 C820,110 980,95 1200,35 L1200,120 L0,120 Z"
                    fill="var(--secondary-blue)"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-(--secondary-blue) px-6 pb-6 pt-8 text-white">
              <h3 className="text-2xl font-semibold leading-tight">
                Bizi Sosyal Medyada
                <br />
                Takip Edin
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Güncel duyuru ve içeriklerimiz için hesaplarımızı ziyaret edin.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
                >
                  <Facebook className="h-5 w-5" strokeWidth={1.8} />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
                >
                  <Instagram className="h-5 w-5" strokeWidth={1.8} />
                </Link>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
                >
                  <Linkedin className="h-5 w-5" strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_14px_40px_-28px_rgba(56,189,248,0.42)] dark:border-zinc-700/70 dark:bg-zinc-900">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            İletişim Formu
          </h2>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                className="rounded-md border border-zinc-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-(--primary-blue) focus:ring-2 focus:ring-(--primary-blue)/20 dark:border-zinc-700 dark:bg-zinc-950"
                placeholder="İsim Soyisim"
                required
              />
              <input
                className="rounded-md border border-zinc-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-(--primary-blue) focus:ring-2 focus:ring-(--primary-blue)/20 dark:border-zinc-700 dark:bg-zinc-950"
                placeholder="E-Posta"
                type="email"
                required
              />
              <input
                className="rounded-md border border-zinc-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-(--primary-blue) focus:ring-2 focus:ring-(--primary-blue)/20 dark:border-zinc-700 dark:bg-zinc-950"
                placeholder="Telefon"
              />
              <input
                className="rounded-md border border-zinc-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-(--primary-blue) focus:ring-2 focus:ring-(--primary-blue)/20 dark:border-zinc-700 dark:bg-zinc-950"
                placeholder="Konu"
                required
              />
            </div>
            <textarea
              className="min-h-28 w-full rounded-md border border-zinc-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-(--primary-blue) focus:ring-2 focus:ring-(--primary-blue)/20 dark:border-zinc-700 dark:bg-zinc-950"
              placeholder="Mesaj"
              required
            />
            <div className="space-y-2">
              <label className="text-sm text-zinc-600 dark:text-zinc-300">Güvenlik Doğrulaması</label>
              <div className="flex flex-wrap items-center gap-2">
                <div className="select-none rounded-md border border-zinc-200 bg-zinc-100 px-4 py-2 font-mono text-base font-bold tracking-[0.25em] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100">
                  {captchaCode}
                </div>
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-600 transition hover:border-(--primary-blue)/50 hover:text-(--primary-blue) dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
                >
                  Yenile
                </button>
              </div>
              <input
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-(--primary-blue) focus:ring-2 focus:ring-(--primary-blue)/20 dark:border-zinc-700 dark:bg-zinc-950"
                placeholder="Yukarıdaki kodu giriniz"
                required
              />
              {!isCaptchaValid && captchaInput.length > 0 ? (
                <p className="text-xs text-rose-600 dark:text-rose-400">Captcha kodu hatalı, lütfen tekrar deneyin.</p>
              ) : null}
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-(--secondary-blue) px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:brightness-110"
            >
              Gönder
            </button>
            {sent ? (
              <p className="text-sm text-emerald-600 dark:text-emerald-400">
                Mesajınız alınmıştır. En kısa sürede sizinle iletişime geçilecektir.
              </p>
            ) : null}
          </form>
        </article>
      </div>
    </SectionShell>
  );
}

function createCaptchaCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 5; i += 1) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function ContactMapSection() {
  return (
    <section className="pb-10 sm:pb-14" id="iletisim-harita">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-zinc-200/80 shadow-[0_12px_36px_-24px_rgba(56,189,248,0.4)] dark:border-zinc-700">
          <iframe
            title="AS Çimento Harita"
            src="https://www.google.com/maps?q=AS%20Cimento%20Bucak&z=11&output=embed"
            className="h-[360px] w-full sm:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export function IletisimPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 bg-(--section-alt)" role="main">
        <ContactHeroWithCards />
        <ContactFormSection />
        <ContactMapSection />
      </main>
      <SiteFooter />
    </div>
  );
}

