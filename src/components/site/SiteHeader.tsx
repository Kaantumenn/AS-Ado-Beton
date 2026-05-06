"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  ChevronDown,
  FileText,
  ImageIcon,
  Menu,
  MessageSquare,
  Newspaper,
  Package,
  ShieldCheck,
  Users,
  Video,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { cn } from "@/lib/cn";

const accentText = "text-[#2596be]";
const ONLINE_ISLEMLER_HREF = "https://odeme.asadobeton.com.tr/";
const AS_ADO_BETON_HREF = "https://as-cimento.vercel.app/";

type SimpleNav = { label: string; href: string };
type DropdownNav = {
  id: string;
  label: string;
  children: { label: string; href: string; Icon: LucideIcon }[];
};

const navItems: (SimpleNav | (DropdownNav & { id: string }))[] = [
  {
    id: "kurumsal",
    label: "Kurumsal",
    children: [
      { label: "Yönetim Kurulu", href: "/kurumsal/yonetim-kurulu", Icon: Users },
      { label: "Tarihçemiz", href: "/kurumsal/tarihcemiz", Icon: CalendarDays },
      { label: "Başkandan Mesaj", href: "/kurumsal/baskandan-mesaj", Icon: MessageSquare },
      { label: "Kalite Politikası", href: "/kurumsal/kalite-politikasi", Icon: ShieldCheck },
      { label: "Birim Yöneticileri", href: "/kurumsal/birim-yoneticileri", Icon: Users },
      { label: "Sertifikalar", href: "/kurumsal/sertifikalar", Icon: BadgeCheck },
      { label: "Grup Şirketleri", href: "/kurumsal/grup-sirketleri", Icon: Building2 },
      { label: "İnsan Kaynakları", href: "/kurumsal/insan-kaynaklari", Icon: FileText },
    ],
  },
  {
    id: "medya",
    label: "Medya",
    children: [
      { label: "Foto Galeri", href: "/foto-galeri", Icon: ImageIcon },
      { label: "Video Galeri", href: "/video-galeri", Icon: Video },
      { label: "Haberler", href: "/haberler", Icon: Newspaper },
      { label: "Ödüllerimiz", href: "/odullerimiz", Icon: BadgeCheck },
    ],
  },
  {
    id: "urun",
    label: "Ürünlerimiz",
    children: [
      { label: "Kompozit Çimentolar", href: "/#", Icon: Package },
      { label: "Özel Çimentolar", href: "/#", Icon: Package },
      { label: "Portland Çimentolar", href: "/#", Icon: Package },
    ],
  },
  { label: "Tesislerimiz", href: "/tesislerimiz" },
  { label: "Sürdürülebilirlik", href: "/surdurulebilirlik" },
  { label: "İletişim", href: "/iletisim" },
];

function isDropdown(
  item: (typeof navItems)[0]
): item is DropdownNav & { id: string } {
  return "children" in item;
}

function NavItemLink({
  href,
  children,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="block whitespace-nowrap px-2.5 py-2 text-sm font-medium uppercase text-zinc-800 transition-colors hover:text-[#2596be] dark:text-zinc-100 dark:hover:text-[#2596be]"
    >
      {children}
    </Link>
  );
}

function SiteSwitcherButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="AS ADO Beton'a git"
      className="hidden h-9 w-12 items-center justify-center rounded-lg border border-zinc-200/90 bg-white text-zinc-800 shadow-sm transition hover:bg-zinc-50 xl:inline-flex dark:border-zinc-500 dark:bg-white dark:text-zinc-800 dark:hover:bg-zinc-100"
    >
      <Image
        src="/logo/as_logo.webp"
        alt="AS ADO Beton"
        width={38}
        height={16}
        className="h-4 w-auto object-contain"
      />
    </button>
  );
}

function DesktopDropdown({
  label,
  children,
  isOpen,
  onOpen,
  onClose,
  leaveTimerRef,
}: {
  label: string;
  children: { label: string; href: string; Icon: LucideIcon }[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  leaveTimerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
}) {
  return (
    <li
      className="relative"
      onMouseEnter={() => {
        if (leaveTimerRef.current) {
          clearTimeout(leaveTimerRef.current);
          leaveTimerRef.current = null;
        }
        onOpen();
      }}
      onMouseLeave={() => {
        leaveTimerRef.current = setTimeout(() => onClose(), 200);
      }}
    >
      <button
        type="button"
        onClick={() => (isOpen ? onClose() : onOpen())}
        aria-expanded={isOpen}
        className={cn(
          "flex items-center gap-0.5 px-2.5 py-2 text-sm font-medium transition-colors",
          isOpen
            ? accentText
            : "text-zinc-800 hover:text-[#2596be] dark:text-zinc-100 dark:hover:text-[#2596be]"
        )}
      >
        <span className="uppercase">{label}</span>
        <ChevronDown
          className={cn(
            "relative h-3.5 w-3.5 shrink-0 transition-transform",
            isOpen && "rotate-180"
          )}
          strokeWidth={2}
        />
      </button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              role="menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-1/2 top-full z-60 min-w-60 -translate-x-1/2 pt-1.5 origin-top"
            >
              <li className="overflow-hidden rounded-md border border-zinc-200/90 bg-white shadow-lg dark:border-zinc-600 dark:bg-zinc-900">
                <div
                  className={cn("h-0.5 w-full", "bg-[#2596be]")}
                  aria-hidden
                />
                <ul className="grid min-w-120 grid-cols-2 gap-x-4 gap-y-2 p-2.5">
                  {children.map((c) => (
                    <li key={c.label} role="none">
                      <Link
                        href={c.href}
                        role="menuitem"
                        className="flex items-center gap-2.5 rounded-md px-3.5 py-2.5 text-base font-medium text-zinc-900 transition hover:bg-[#2596be]/8 dark:text-zinc-100 dark:hover:bg-zinc-800/80"
                      >
                        <c.Icon className="h-4.5 w-4.5 shrink-0 text-[#2596be]" strokeWidth={1.9} />
                        <span className="whitespace-nowrap">{c.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
    </li>
  );
}

export function SiteHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [adoConfirmOpen, setAdoConfirmOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const leaveRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  const closeAll = useCallback(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setAdoConfirmOpen(false);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, []);

  const openAdoConfirm = useCallback(() => {
    setAdoConfirmOpen(true);
  }, []);

  const onConfirmAdoRedirect = useCallback(() => {
    setAdoConfirmOpen(false);
    window.open(AS_ADO_BETON_HREF, "_blank", "noreferrer");
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeAll]);

  useEffect(() => {
    if (!openDropdown && !mobileOpen) return;
    const onDoc = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideHeader = headerRef.current?.contains(target);
      const insideMobilePanel = mobilePanelRef.current?.contains(target);
      if (!insideHeader && !insideMobilePanel) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [openDropdown, mobileOpen]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-1200 w-full border-b border-zinc-200/90 bg-white/90 backdrop-blur-md dark:border-zinc-600/90 dark:bg-zinc-900/90"
    >
      <div className="relative mx-auto flex h-16 w-full max-w-7xl items-center gap-2 px-4 sm:gap-3 sm:px-6 lg:h-17 lg:px-8">
        <Link
          href="/"
          onClick={closeAll}
          className="flex min-w-0 max-w-48 shrink-0 items-center sm:max-w-56"
          aria-label="AS Çimento — anasayfa"
        >
          <Image
            src="/logo/as_ado_beton_logo.png"
            alt=""
            width={200}
            height={56}
            className="h-11 w-auto object-contain object-left sm:h-14"
            priority
          />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 md:flex lg:gap-1"
          aria-label="Ana menü"
        >
          <ul className="flex flex-wrap items-center justify-center gap-0.5 lg:gap-1">
            {navItems.map((item) => {
              if (isDropdown(item)) {
                return (
                  <DesktopDropdown
                    key={item.id}
                    label={item.label}
                    isOpen={openDropdown === item.id}
                    onOpen={() => setOpenDropdown(item.id)}
                    onClose={() => setOpenDropdown(null)}
                    leaveTimerRef={leaveRef}
                  >
                    {item.children}
                  </DesktopDropdown>
                );
              }
              return (
                <li key={item.label}>
                  <NavItemLink
                    href={item.href}
                    onNavigate={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </NavItemLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-2">
          <span
            className="hidden h-6 w-px bg-zinc-300/90 md:block dark:bg-zinc-600/80"
            aria-hidden
          />
          <Link
            href={ONLINE_ISLEMLER_HREF}
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 items-center rounded-lg bg-(--secondary-blue) px-3 text-xs font-semibold tracking-[0.07em] text-white uppercase transition hover:brightness-110 md:inline-flex"
          >
            Online İşlemler
          </Link>
          <SiteSwitcherButton onClick={openAdoConfirm} />
          <ThemeToggle />
          <LanguageSelector />
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200/90 text-zinc-800 transition hover:bg-zinc-100 md:hidden dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls={mobileId}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={2} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobilde tam ekran yarı saydam siyah + sağ panel — body'ye portallanır (sol taraf her zaman kararır) */}
      {mounted
        ? createPortal(
            <>
              <div
                className={cn(
                  "fixed inset-0 z-1300 bg-black/60 transition-opacity duration-300 ease-out md:hidden",
                  mobileOpen
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                )}
                onClick={closeMobileMenu}
                aria-hidden
              />
              <div
                id={mobileId}
                ref={mobilePanelRef}
                className={cn(
                  "fixed top-0 right-0 z-1310 flex h-dvh w-[min(16rem,88vw)] max-w-full flex-col border-l border-zinc-200/90 bg-white shadow-2xl transition-transform duration-300 ease-out dark:border-zinc-600/90 dark:bg-zinc-900",
                  "md:hidden",
                  mobileOpen
                    ? "translate-x-0"
                    : "pointer-events-none translate-x-full"
                )}
                role="dialog"
                aria-modal="true"
                aria-label="Menü"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex shrink-0 items-center justify-between gap-2 border-b border-zinc-200/90 bg-white px-2.5 py-2.5 dark:border-zinc-700 dark:bg-zinc-900">
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className="flex min-w-0 max-w-40 items-center"
                    aria-label="AS Çimento — anasayfa"
                  >
                    <Image
                      src="/logo/as_ado_beton_logo.png"
                      alt=""
                      width={200}
                      height={56}
                      className="h-11 w-auto object-contain object-left"
                    />
                  </Link>
                  <button
                    type="button"
                    onClick={closeMobileMenu}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200/90 text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
                    aria-label="Menüyü kapat"
                  >
                    <X className="h-5 w-5" strokeWidth={2} />
                  </button>
                </div>
                <nav
                  className="min-h-0 flex-1 space-y-0 overflow-y-auto overscroll-contain px-1.5 pb-6 pt-3"
                  aria-label="Ana menü (mobil)"
                >
                  <div className="mb-3 space-y-2 border-b border-zinc-200/80 px-1.5 pb-3 dark:border-zinc-700/80">
                    <Link
                      href={ONLINE_ISLEMLER_HREF}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 items-center rounded-lg bg-(--secondary-blue) px-3 text-xs font-semibold tracking-[0.07em] text-white uppercase transition hover:brightness-110"
                      onClick={closeMobileMenu}
                    >
                      Online İşlemler
                    </Link>
                    <p className="px-1 text-[0.68rem] font-semibold tracking-[0.09em] text-zinc-500 uppercase dark:text-zinc-400">
                      Siteler
                    </p>
                    <button
                      type="button"
                      className="flex w-full items-center gap-2.5 rounded-md px-2 py-2 text-left text-sm text-zinc-800 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
                      onClick={() => {
                        closeMobileMenu();
                        openAdoConfirm();
                      }}
                    >
                      <span className="inline-flex h-7 w-10 items-center justify-center rounded-md border border-zinc-200/80 bg-white dark:border-zinc-500 dark:bg-white">
                        <Image
                          src="/logo/as_logo.webp"
                          alt=""
                          aria-hidden
                          width={36}
                          height={16}
                          className="h-4 w-auto object-contain"
                        />
                      </span>
                      <span className="min-w-0 flex-1">AS ADO Beton</span>
                    </button>
                  </div>
                  <ul className="space-y-0.5">
                    {navItems.map((item) => {
                      if (isDropdown(item)) {
                        const openM = openDropdown === `m-${item.id}`;
                        return (
                          <li
                            key={item.id}
                            className="border-b border-zinc-100/90 py-1 dark:border-zinc-800"
                          >
                            <button
                              type="button"
                              className="flex w-full items-center justify-between px-2.5 py-2 text-left text-sm font-medium uppercase text-zinc-800 dark:text-zinc-100"
                              onClick={() =>
                                setOpenDropdown(openM ? null : `m-${item.id}`)
                              }
                            >
                              {item.label}
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition",
                                  openM && "rotate-180"
                                )}
                              />
                            </button>
                            <AnimatePresence initial={false}>
                              {openM && (
                                <motion.ul
                                  initial={{ opacity: 0, y: -6, scaleY: 0.96 }}
                                  animate={{ opacity: 1, y: 0, scaleY: 1 }}
                                  exit={{ opacity: 0, y: -6, scaleY: 0.96 }}
                                  transition={{ duration: 0.18, ease: "easeOut" }}
                                  className="origin-top border-t border-[#2596be]/25 bg-[#2596be]/8 py-1 dark:border-[#2596be]/30 dark:bg-zinc-800/30"
                                  role="menu"
                                >
                                  {item.children.map((c) => (
                                    <li key={c.label}>
                                      <Link
                                        href={c.href}
                                        className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100"
                                        onClick={closeMobileMenu}
                                      >
                                        <c.Icon
                                          className="h-4 w-4 shrink-0 text-[#2596be]"
                                          strokeWidth={1.9}
                                        />
                                        <span>{c.label}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </li>
                        );
                      }
                      return (
                        <li
                          key={item.label}
                          className="border-b border-zinc-100/90 dark:border-zinc-800"
                        >
                          <Link
                            href={item.href}
                            className="block px-2.5 py-2 text-sm font-medium uppercase text-zinc-800 dark:text-zinc-100"
                            onClick={closeMobileMenu}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </>,
            document.body
          )
        : null}

      {mounted && adoConfirmOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-[1350] flex items-center justify-center bg-black/55 px-4 backdrop-blur-[2px]"
              onClick={() => setAdoConfirmOpen(false)}
              role="presentation"
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="ado-confirm-title"
                aria-describedby="ado-confirm-desc"
                className="w-full max-w-md rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-2xl dark:border-zinc-700 dark:bg-zinc-900 sm:p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <h3
                  id="ado-confirm-title"
                  className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
                >
                  Site Değişimi Onayı
                </h3>
                <div className="mt-3 inline-flex rounded-lg border border-zinc-200/90 bg-white px-3 py-2 dark:border-zinc-700 dark:bg-zinc-800">
                  <Image
                    src="/logo/as_logo.webp"
                    alt="AS Çimento"
                    width={190}
                    height={58}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <p
                  id="ado-confirm-desc"
                  className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
                >
                  AS Çimento sayfasina yönlendirileceksiniz. Devam etmek istiyor musunuz?
                </p>
                <div className="mt-5 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setAdoConfirmOpen(false)}
                    className="inline-flex h-9 items-center rounded-lg border border-zinc-200/90 px-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  >
                    Vazgec
                  </button>
                  <button
                    type="button"
                    onClick={onConfirmAdoRedirect}
                    className="inline-flex h-9 items-center rounded-lg bg-(--secondary-blue) px-3 text-sm font-semibold text-white transition hover:brightness-110"
                  >
                    Onayla ve devam et
                  </button>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </header>
  );
}
