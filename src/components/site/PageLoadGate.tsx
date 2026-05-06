"use client";

import { useEffect, useState } from "react";
import { LogoLoader } from "./LogoLoader";

const EXTRA_LOADER_MS = 1000;

export function PageLoadGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), EXTRA_LOADER_MS);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) return <LogoLoader />;
  return <>{children}</>;
}
