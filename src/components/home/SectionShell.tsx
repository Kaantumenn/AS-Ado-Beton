import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  /** default = --section; muted = --section-alt (bölümler arası hafif ton) */
  variant?: "default" | "muted";
};

export function SectionShell({
  id,
  className = "",
  children,
  variant = "default",
}: SectionShellProps) {
  const bg =
    variant === "muted" ? "bg-[var(--section-alt)]" : "bg-[var(--section)]";

  return (
    <section
      id={id}
      className={`w-full ${bg} ${className}`.trim()}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
