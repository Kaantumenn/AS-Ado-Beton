"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function ThemeSunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function ThemeMoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
    </svg>
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* İlk kare: sunucu + hidrasyon aynı sınıfı üretsin; dark: burada yok (next-themes class’ı html’e
     istemcide farklı anda gelince dark: eşleşmeyi bozabiliyor). */
  if (!mounted) {
    return (
      <div
        className="h-8 w-14 shrink-0 rounded-full border border-zinc-200/80 bg-zinc-100/90"
        aria-hidden
        suppressHydrationWarning
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-8 w-14 shrink-0 items-center rounded-full border border-zinc-200/90 bg-zinc-100/90 p-0.5 dark:border-zinc-500/60 dark:bg-zinc-900/90"
      aria-pressed={isDark}
      aria-label={isDark ? "Açık temaya geç" : "Koyu temaya geç"}
    >
      <span
        className={`absolute top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0d3a5c] shadow transition-transform duration-200 dark:bg-zinc-600 dark:text-amber-200 ${
          isDark ? "left-0.5 translate-x-0" : "left-0.5 translate-x-5"
        }`}
      >
        {isDark ? (
          <ThemeMoonIcon className="h-3.5 w-3.5" />
        ) : (
          <ThemeSunIcon className="h-3.5 w-3.5" />
        )}
      </span>
      <span className="sr-only">Tema: {isDark ? "Koyu" : "Açık"}</span>
    </button>
  );
}
