"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

const LOCALES = [
  { code: "tr" as const, short: "TR", name: "Türkçe", flagSrc: "/flags/tr.svg" },
  { code: "en" as const, short: "EN", name: "English", flagSrc: "/flags/en.svg" },
  { code: "ru" as const, short: "RU", name: "Русский", flagSrc: "/flags/ru.svg" },
];

export type AppLocale = (typeof LOCALES)[number]["code"];

const STORAGE_KEY = "as-locale";

export function LanguageSelector() {
  const [locale, setLocale] = useState<AppLocale>("tr");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const [fallback] = LOCALES;
  const current = LOCALES.find((l) => l.code === locale) ?? fallback;

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as AppLocale | null;
      if (saved && LOCALES.some((l) => l.code === saved)) {
        setLocale(saved);
        document.documentElement.lang = saved;
        return;
      }
    } catch {
      // ignore
    }
    document.documentElement.lang = "tr";
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const apply = (code: AppLocale) => {
    setLocale(code);
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // ignore
    }
    document.documentElement.lang = code;
  };

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        className="inline-flex h-9 min-w-22 items-center justify-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white px-2.5 text-sm font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
        aria-label="Dil seçin"
      >
        <Image
          src={current.flagSrc}
          alt=""
          aria-hidden
          width={20}
          height={14}
          className="h-3.5 w-5 rounded-[2px] object-cover"
        />
        <span className="text-xs font-semibold tabular-nums">
          {current.short}
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 shrink-0 text-zinc-500 transition dark:text-zinc-400",
            open && "rotate-180"
          )}
          strokeWidth={2}
          aria-hidden
        />
      </button>

      <ul
        id={listId}
        role="listbox"
        aria-label="Diller"
        className={cn(
          "absolute right-0 z-60 mt-1.5 min-w-44 overflow-hidden rounded-lg border border-zinc-200/90 bg-white py-1 shadow-lg dark:border-zinc-600 dark:bg-zinc-900",
          !open && "hidden"
        )}
      >
        {LOCALES.map(({ code, short, name, flagSrc }) => (
          <li key={code} role="option" aria-selected={locale === code}>
            <button
              type="button"
              onClick={() => apply(code)}
              className={cn(
                "flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-sm transition",
                locale === code
                  ? "bg-sky-50 font-medium text-sky-800 dark:bg-sky-950/50 dark:text-sky-200"
                  : "text-zinc-800 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
              )}
            >
              <Image
                src={flagSrc}
                alt=""
                aria-hidden
                title={short}
                width={20}
                height={14}
                className="h-3.5 w-5 rounded-[2px] object-cover"
              />
              <span className="min-w-0 flex-1">{name}</span>
              <span className="text-xs text-zinc-500 tabular-nums dark:text-zinc-400">
                {short}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
